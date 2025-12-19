// https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_wlan
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OrgWlanConfig extends cdktf.TerraformMetaArguments {
  /**
  * Enable coa-immediate-update and address-change-immediate-update on the access profile.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_wlan#acct_immediate_update OrgWlan#acct_immediate_update}
  */
  readonly acctImmediateUpdate?: boolean | cdktf.IResolvable;
  /**
  * How frequently should interim accounting be reported, 60-65535. default is 0 (use one specified in Access-Accept request from RADIUS Server). Very frequent messages can affect the performance of the radius server, 600 and up is recommended when enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_wlan#acct_interim_interval OrgWlan#acct_interim_interval}
  */
  readonly acctInterimInterval?: number;
  /**
  * List of RADIUS accounting servers, optional, order matters where the first one is treated as primary
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_wlan#acct_servers OrgWlan#acct_servers}
  */
  readonly acctServers?: OrgWlanAcctServers[] | cdktf.IResolvable;
  /**
  * Airwatch wlan settings
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_wlan#airwatch OrgWlan#airwatch}
  */
  readonly airwatch?: OrgWlanAirwatch;
  /**
  * Only applicable when `limit_bcast`==`true`, which allows or disallows ipv6 Neighbor Discovery packets to go through
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_wlan#allow_ipv6_ndp OrgWlan#allow_ipv6_ndp}
  */
  readonly allowIpv6Ndp?: boolean | cdktf.IResolvable;
  /**
  * Only applicable when `limit_bcast`==`true`, which allows mDNS / Bonjour packets to go through
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_wlan#allow_mdns OrgWlan#allow_mdns}
  */
  readonly allowMdns?: boolean | cdktf.IResolvable;
  /**
  * Only applicable when `limit_bcast`==`true`, which allows SSDP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_wlan#allow_ssdp OrgWlan#allow_ssdp}
  */
  readonly allowSsdp?: boolean | cdktf.IResolvable;
  /**
  * List of device ids
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_wlan#ap_ids OrgWlan#ap_ids}
  */
  readonly apIds?: string[];
  /**
  * Bandwidth limiting for apps (applies to up/down)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_wlan#app_limit OrgWlan#app_limit}
  */
  readonly appLimit?: OrgWlanAppLimit;
  /**
  * APP qos wlan settings
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_wlan#app_qos OrgWlan#app_qos}
  */
  readonly appQos?: OrgWlanAppQos;
  /**
  * enum: `aps`, `site`, `wxtags`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_wlan#apply_to OrgWlan#apply_to}
  */
  readonly applyTo?: string;
  /**
  * Whether to enable smart arp filter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_wlan#arp_filter OrgWlan#arp_filter}
  */
  readonly arpFilter?: boolean | cdktf.IResolvable;
  /**
  * Authentication wlan settings
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_wlan#auth OrgWlan#auth}
  */
  readonly auth?: OrgWlanAuth;
  /**
  * When ordered, AP will prefer and go back to the first server if possible. enum: `ordered`, `unordered`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_wlan#auth_server_selection OrgWlan#auth_server_selection}
  */
  readonly authServerSelection?: string;
  /**
  * List of RADIUS authentication servers, at least one is needed if `auth type`==`eap`, order matters where the first one is treated as primary
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_wlan#auth_servers OrgWlan#auth_servers}
  */
  readonly authServers?: OrgWlanAuthServers[] | cdktf.IResolvable;
  /**
  * Optional, up to 48 bytes, will be dynamically generated if not provided. used only for authentication servers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_wlan#auth_servers_nas_id OrgWlan#auth_servers_nas_id}
  */
  readonly authServersNasId?: string;
  /**
  * Optional, NAS-IP-ADDRESS to use
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_wlan#auth_servers_nas_ip OrgWlan#auth_servers_nas_ip}
  */
  readonly authServersNasIp?: string;
  /**
  * Radius auth session retries. Following fast timers are set if "fast_dot1x_timers" knob is enabled. ‘retries’  are set to value of auth_servers_retries. ‘max-requests’ is also set when setting auth_servers_retries and is set to default value to 3.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_wlan#auth_servers_retries OrgWlan#auth_servers_retries}
  */
  readonly authServersRetries?: number;
  /**
  * Radius auth session timeout. Following fast timers are set if "fast_dot1x_timers" knob is enabled. ‘quite-period’  and ‘transmit-period’ are set to half the value of auth_servers_timeout. ‘supplicant-timeout’ is also set when setting auth_servers_timeout and is set to default value of 10.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_wlan#auth_servers_timeout OrgWlan#auth_servers_timeout}
  */
  readonly authServersTimeout?: number;
  /**
  * Whether to enable band_steering, this works only when band==both
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_wlan#band_steer OrgWlan#band_steer}
  */
  readonly bandSteer?: boolean | cdktf.IResolvable;
  /**
  * Force dual_band capable client to connect to 5G
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_wlan#band_steer_force_band5 OrgWlan#band_steer_force_band5}
  */
  readonly bandSteerForceBand5?: boolean | cdktf.IResolvable;
  /**
  * list of radios that the wlan should apply to. enum: `24`, `5`, `6`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_wlan#bands OrgWlan#bands}
  */
  readonly bands?: string[];
  /**
  * Whether to block the clients in the blacklist (up to first 256 macs)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_wlan#block_blacklist_clients OrgWlan#block_blacklist_clients}
  */
  readonly blockBlacklistClients?: boolean | cdktf.IResolvable;
  /**
  * Bonjour gateway wlan settings
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_wlan#bonjour OrgWlan#bonjour}
  */
  readonly bonjour?: OrgWlanBonjour;
  /**
  * Cisco CWA (central web authentication) required RADIUS with COA in order to work. See CWA: https://www.cisco.com/c/en/us/support/docs/security/identity-services-engine/115732-central-web-auth-00.html
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_wlan#cisco_cwa OrgWlan#cisco_cwa}
  */
  readonly ciscoCwa?: OrgWlanCiscoCwa;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_wlan#client_limit_down OrgWlan#client_limit_down}
  */
  readonly clientLimitDown?: string;
  /**
  * If downlink limiting per-client is enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_wlan#client_limit_down_enabled OrgWlan#client_limit_down_enabled}
  */
  readonly clientLimitDownEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_wlan#client_limit_up OrgWlan#client_limit_up}
  */
  readonly clientLimitUp?: string;
  /**
  * If uplink limiting per-client is enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_wlan#client_limit_up_enabled OrgWlan#client_limit_up_enabled}
  */
  readonly clientLimitUpEnabled?: boolean | cdktf.IResolvable;
  /**
  * List of COA (change of authorization) servers, optional
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_wlan#coa_servers OrgWlan#coa_servers}
  */
  readonly coaServers?: OrgWlanCoaServers[] | cdktf.IResolvable;
  /**
  * Some old WLAN drivers may not be compatible
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_wlan#disable_11ax OrgWlan#disable_11ax}
  */
  readonly disable11Ax?: boolean | cdktf.IResolvable;
  /**
  * To disable Wi-Fi 7 EHT IEs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_wlan#disable_11be OrgWlan#disable_11be}
  */
  readonly disable11Be?: boolean | cdktf.IResolvable;
  /**
  * To disable ht or vht rates
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_wlan#disable_ht_vht_rates OrgWlan#disable_ht_vht_rates}
  */
  readonly disableHtVhtRates?: boolean | cdktf.IResolvable;
  /**
  * Whether to disable U-APSD
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_wlan#disable_uapsd OrgWlan#disable_uapsd}
  */
  readonly disableUapsd?: boolean | cdktf.IResolvable;
  /**
  * Disable sending v2 roam notification messages
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_wlan#disable_v1_roam_notify OrgWlan#disable_v1_roam_notify}
  */
  readonly disableV1RoamNotify?: boolean | cdktf.IResolvable;
  /**
  * Disable sending v2 roam notification messages
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_wlan#disable_v2_roam_notify OrgWlan#disable_v2_roam_notify}
  */
  readonly disableV2RoamNotify?: boolean | cdktf.IResolvable;
  /**
  * When any of the following is true, this WLAN will be disabled
  *    * cannot get IP
  *    * cannot obtain default gateway
  *    * cannot reach default gateway
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_wlan#disable_when_gateway_unreachable OrgWlan#disable_when_gateway_unreachable}
  */
  readonly disableWhenGatewayUnreachable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_wlan#disable_when_mxtunnel_down OrgWlan#disable_when_mxtunnel_down}
  */
  readonly disableWhenMxtunnelDown?: boolean | cdktf.IResolvable;
  /**
  * Whether to disable WMM
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_wlan#disable_wmm OrgWlan#disable_wmm}
  */
  readonly disableWmm?: boolean | cdktf.IResolvable;
  /**
  * For radius_group-based DNS server (rewrite DNS request depending on the Group RADIUS server returns)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_wlan#dns_server_rewrite OrgWlan#dns_server_rewrite}
  */
  readonly dnsServerRewrite?: OrgWlanDnsServerRewrite;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_wlan#dtim OrgWlan#dtim}
  */
  readonly dtim?: number;
  /**
  * For dynamic PSK where we get per_user PSK from Radius. dynamic_psk allows PSK to be selected at runtime depending on context (wlan/site/user/...) thus following configurations are assumed (currently)
  *   * PSK will come from RADIUS server
  *   * AP sends client MAC as username and password (i.e. `enable_mac_auth` is assumed)
  *   * AP sends BSSID:SSID as Caller-Station-ID
  *   * `auth_servers` is required
  *   * PSK will come from cloud WLC if source is cloud_psks
  *   * default_psk will be used if cloud WLC is not available
  *   * `multi_psk_only` and `psk` is ignored
  *   * `pairwise` can only be wpa2-ccmp (for now, wpa3 support on the roadmap)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_wlan#dynamic_psk OrgWlan#dynamic_psk}
  */
  readonly dynamicPsk?: OrgWlanDynamicPsk;
  /**
  * For 802.1x
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_wlan#dynamic_vlan OrgWlan#dynamic_vlan}
  */
  readonly dynamicVlan?: OrgWlanDynamicVlan;
  /**
  * Enable AP-AP keycaching via multicast
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_wlan#enable_local_keycaching OrgWlan#enable_local_keycaching}
  */
  readonly enableLocalKeycaching?: boolean | cdktf.IResolvable;
  /**
  * By default, we'd inspect all DHCP packets and drop those unrelated to the wireless client itself in the case where client is a wireless bridge (DHCP packets for other MACs will need to be forwarded), wireless_bridging can be enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_wlan#enable_wireless_bridging OrgWlan#enable_wireless_bridging}
  */
  readonly enableWirelessBridging?: boolean | cdktf.IResolvable;
  /**
  * If the client bridge is doing DHCP on behalf of other devices (L2-NAT), enable dhcp_tracking will cut down DHCP response packets to be forwarded to wireless
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_wlan#enable_wireless_bridging_dhcp_tracking OrgWlan#enable_wireless_bridging_dhcp_tracking}
  */
  readonly enableWirelessBridgingDhcpTracking?: boolean | cdktf.IResolvable;
  /**
  * If this wlan is enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_wlan#enabled OrgWlan#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * If set to true, sets default fast-timers with values calculated from ‘auth_servers_timeout’ and ‘auth_server_retries’ .
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_wlan#fast_dot1x_timers OrgWlan#fast_dot1x_timers}
  */
  readonly fastDot1XTimers?: boolean | cdktf.IResolvable;
  /**
  * Whether to hide SSID in beacon
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_wlan#hide_ssid OrgWlan#hide_ssid}
  */
  readonly hideSsid?: boolean | cdktf.IResolvable;
  /**
  * Include hostname inside IE in AP beacons / probe responses
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_wlan#hostname_ie OrgWlan#hostname_ie}
  */
  readonly hostnameIe?: boolean | cdktf.IResolvable;
  /**
  * Hostspot 2.0 wlan settings
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_wlan#hotspot20 OrgWlan#hotspot20}
  */
  readonly hotspot20?: OrgWlanHotspot20;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_wlan#inject_dhcp_option_82 OrgWlan#inject_dhcp_option_82}
  */
  readonly injectDhcpOption82?: OrgWlanInjectDhcpOption82;
  /**
  * where this WLAN will be connected to. enum: `all`, `eth0`, `eth1`, `eth2`, `eth3`, `mxtunnel`, `site_mxedge`, `wxtunnel`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_wlan#interface OrgWlan#interface}
  */
  readonly interface?: string;
  /**
  * Whether to stop clients to talk to each other
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_wlan#isolation OrgWlan#isolation}
  */
  readonly isolation?: boolean | cdktf.IResolvable;
  /**
  * If isolation is enabled, whether to deny clients to talk to L2 on the LAN
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_wlan#l2_isolation OrgWlan#l2_isolation}
  */
  readonly l2Isolation?: boolean | cdktf.IResolvable;
  /**
  * Legacy devices requires the Over-DS (for Fast BSS Transition) bit set (while our chip doesn’t support it). Warning! Enabling this will cause problem for iOS devices.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_wlan#legacy_overds OrgWlan#legacy_overds}
  */
  readonly legacyOverds?: boolean | cdktf.IResolvable;
  /**
  * Whether to limit broadcast packets going to wireless (i.e. only allow certain bcast packets to go through)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_wlan#limit_bcast OrgWlan#limit_bcast}
  */
  readonly limitBcast?: boolean | cdktf.IResolvable;
  /**
  * Limit probe response base on some heuristic rules
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_wlan#limit_probe_response OrgWlan#limit_probe_response}
  */
  readonly limitProbeResponse?: boolean | cdktf.IResolvable;
  /**
  * Max idle time in seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_wlan#max_idletime OrgWlan#max_idletime}
  */
  readonly maxIdletime?: number;
  /**
  * Maximum number of client connected to the SSID. `0` means unlimited
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_wlan#max_num_clients OrgWlan#max_num_clients}
  */
  readonly maxNumClients?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_wlan#mist_nac OrgWlan#mist_nac}
  */
  readonly mistNac?: OrgWlanMistNac;
  /**
  * When `interface`=`mxtunnel`, id of the Mist Tunnel
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_wlan#mxtunnel_ids OrgWlan#mxtunnel_ids}
  */
  readonly mxtunnelIds?: string[];
  /**
  * When `interface`=`site_mxedge`, name of the mxtunnel that in mxtunnels under Site Setting
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_wlan#mxtunnel_name OrgWlan#mxtunnel_name}
  */
  readonly mxtunnelName?: string[];
  /**
  * Whether to only allow client to use DNS that we’ve learned from DHCP response
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_wlan#no_static_dns OrgWlan#no_static_dns}
  */
  readonly noStaticDns?: boolean | cdktf.IResolvable;
  /**
  * Whether to only allow client that we’ve learned from DHCP exchange to talk
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_wlan#no_static_ip OrgWlan#no_static_ip}
  */
  readonly noStaticIp?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_wlan#org_id OrgWlan#org_id}
  */
  readonly orgId: string;
  /**
  * Portal wlan settings
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_wlan#portal OrgWlan#portal}
  */
  readonly portal?: OrgWlanPortal;
  /**
  * List of hostnames without http(s):// (matched by substring)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_wlan#portal_allowed_hostnames OrgWlan#portal_allowed_hostnames}
  */
  readonly portalAllowedHostnames?: string[];
  /**
  * List of CIDRs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_wlan#portal_allowed_subnets OrgWlan#portal_allowed_subnets}
  */
  readonly portalAllowedSubnets?: string[];
  /**
  * List of hostnames without http(s):// (matched by substring), this takes precedence over portal_allowed_hostnames
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_wlan#portal_denied_hostnames OrgWlan#portal_denied_hostnames}
  */
  readonly portalDeniedHostnames?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_wlan#qos OrgWlan#qos}
  */
  readonly qos?: OrgWlanQos;
  /**
  * RadSec settings
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_wlan#radsec OrgWlan#radsec}
  */
  readonly radsec?: OrgWlanRadsec;
  /**
  * Property key is the RF band. enum: `24`, `5`, `6`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_wlan#rateset OrgWlan#rateset}
  */
  readonly rateset?: { [key: string]: OrgWlanRateset } | cdktf.IResolvable;
  /**
  * When different mxcluster is on different subnet, we'd want to disconnect clients (so they'll reconnect and get new IPs)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_wlan#reconnect_clients_when_roaming_mxcluster OrgWlan#reconnect_clients_when_roaming_mxcluster}
  */
  readonly reconnectClientsWhenRoamingMxcluster?: boolean | cdktf.IResolvable;
  /**
  * enum: `11r`, `OKC`, `NONE`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_wlan#roam_mode OrgWlan#roam_mode}
  */
  readonly roamMode?: string;
  /**
  * WLAN operating schedule, default is disabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_wlan#schedule OrgWlan#schedule}
  */
  readonly schedule?: OrgWlanSchedule;
  /**
  * Whether to exclude this WLAN from SLE metrics
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_wlan#sle_excluded OrgWlan#sle_excluded}
  */
  readonly sleExcluded?: boolean | cdktf.IResolvable;
  /**
  * Name of the SSID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_wlan#ssid OrgWlan#ssid}
  */
  readonly ssid: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_wlan#template_id OrgWlan#template_id}
  */
  readonly templateId: string;
  /**
  * If `auth.type`==`eap` or `auth.type`==`psk`, should only be set for legacy client, such as pre-2004, 802.11b devices
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_wlan#use_eapol_v1 OrgWlan#use_eapol_v1}
  */
  readonly useEapolV1?: boolean | cdktf.IResolvable;
  /**
  * If vlan tagging is enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_wlan#vlan_enabled OrgWlan#vlan_enabled}
  */
  readonly vlanEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_wlan#vlan_id OrgWlan#vlan_id}
  */
  readonly vlanId?: string;
  /**
  * if `vlan_enabled`==`true` and `vlan_pooling`==`true`. List of VLAN IDs (comma separated) to be used in the VLAN Pool
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_wlan#vlan_ids OrgWlan#vlan_ids}
  */
  readonly vlanIds?: string[];
  /**
  * Requires `vlan_enabled`==`true` to be set to `true`. Vlan pooling allows AP to place client on different VLAN using a deterministic algorithm
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_wlan#vlan_pooling OrgWlan#vlan_pooling}
  */
  readonly vlanPooling?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_wlan#wlan_limit_down OrgWlan#wlan_limit_down}
  */
  readonly wlanLimitDown?: string;
  /**
  * If downlink limiting for whole wlan is enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_wlan#wlan_limit_down_enabled OrgWlan#wlan_limit_down_enabled}
  */
  readonly wlanLimitDownEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_wlan#wlan_limit_up OrgWlan#wlan_limit_up}
  */
  readonly wlanLimitUp?: string;
  /**
  * If uplink limiting for whole wlan is enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_wlan#wlan_limit_up_enabled OrgWlan#wlan_limit_up_enabled}
  */
  readonly wlanLimitUpEnabled?: boolean | cdktf.IResolvable;
  /**
  * List of wxtag_ids
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_wlan#wxtag_ids OrgWlan#wxtag_ids}
  */
  readonly wxtagIds?: string[];
  /**
  * When `interface`=`wxtunnel`, id of the WXLAN Tunnel
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_wlan#wxtunnel_id OrgWlan#wxtunnel_id}
  */
  readonly wxtunnelId?: string;
  /**
  * When `interface`=`wxtunnel`, remote tunnel identifier
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_wlan#wxtunnel_remote_id OrgWlan#wxtunnel_remote_id}
  */
  readonly wxtunnelRemoteId?: string;
}
export interface OrgWlanAcctServers {
  /**
  * IP/ hostname of RADIUS server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_wlan#host OrgWlan#host}
  */
  readonly host: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_wlan#keywrap_enabled OrgWlan#keywrap_enabled}
  */
  readonly keywrapEnabled?: boolean | cdktf.IResolvable;
  /**
  * enum: `ascii`, `hex`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_wlan#keywrap_format OrgWlan#keywrap_format}
  */
  readonly keywrapFormat?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_wlan#keywrap_kek OrgWlan#keywrap_kek}
  */
  readonly keywrapKek?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_wlan#keywrap_mack OrgWlan#keywrap_mack}
  */
  readonly keywrapMack?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_wlan#port OrgWlan#port}
  */
  readonly port?: string;
  /**
  * Secret of RADIUS server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_wlan#secret OrgWlan#secret}
  */
  readonly secret: string;
}

export function orgWlanAcctServersToTerraform(struct?: OrgWlanAcctServers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    keywrap_enabled: cdktf.booleanToTerraform(struct!.keywrapEnabled),
    keywrap_format: cdktf.stringToTerraform(struct!.keywrapFormat),
    keywrap_kek: cdktf.stringToTerraform(struct!.keywrapKek),
    keywrap_mack: cdktf.stringToTerraform(struct!.keywrapMack),
    port: cdktf.stringToTerraform(struct!.port),
    secret: cdktf.stringToTerraform(struct!.secret),
  }
}


export function orgWlanAcctServersToHclTerraform(struct?: OrgWlanAcctServers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    keywrap_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.keywrapEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    keywrap_format: {
      value: cdktf.stringToHclTerraform(struct!.keywrapFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    keywrap_kek: {
      value: cdktf.stringToHclTerraform(struct!.keywrapKek),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    keywrap_mack: {
      value: cdktf.stringToHclTerraform(struct!.keywrapMack),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.stringToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret: {
      value: cdktf.stringToHclTerraform(struct!.secret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrgWlanAcctServersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OrgWlanAcctServers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._keywrapEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.keywrapEnabled = this._keywrapEnabled;
    }
    if (this._keywrapFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.keywrapFormat = this._keywrapFormat;
    }
    if (this._keywrapKek !== undefined) {
      hasAnyValues = true;
      internalValueResult.keywrapKek = this._keywrapKek;
    }
    if (this._keywrapMack !== undefined) {
      hasAnyValues = true;
      internalValueResult.keywrapMack = this._keywrapMack;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._secret !== undefined) {
      hasAnyValues = true;
      internalValueResult.secret = this._secret;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrgWlanAcctServers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._host = undefined;
      this._keywrapEnabled = undefined;
      this._keywrapFormat = undefined;
      this._keywrapKek = undefined;
      this._keywrapMack = undefined;
      this._port = undefined;
      this._secret = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._host = value.host;
      this._keywrapEnabled = value.keywrapEnabled;
      this._keywrapFormat = value.keywrapFormat;
      this._keywrapKek = value.keywrapKek;
      this._keywrapMack = value.keywrapMack;
      this._port = value.port;
      this._secret = value.secret;
    }
  }

  // host - computed: true, optional: false, required: true
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // keywrap_enabled - computed: true, optional: true, required: false
  private _keywrapEnabled?: boolean | cdktf.IResolvable; 
  public get keywrapEnabled() {
    return this.getBooleanAttribute('keywrap_enabled');
  }
  public set keywrapEnabled(value: boolean | cdktf.IResolvable) {
    this._keywrapEnabled = value;
  }
  public resetKeywrapEnabled() {
    this._keywrapEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keywrapEnabledInput() {
    return this._keywrapEnabled;
  }

  // keywrap_format - computed: true, optional: true, required: false
  private _keywrapFormat?: string; 
  public get keywrapFormat() {
    return this.getStringAttribute('keywrap_format');
  }
  public set keywrapFormat(value: string) {
    this._keywrapFormat = value;
  }
  public resetKeywrapFormat() {
    this._keywrapFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keywrapFormatInput() {
    return this._keywrapFormat;
  }

  // keywrap_kek - computed: true, optional: true, required: false
  private _keywrapKek?: string; 
  public get keywrapKek() {
    return this.getStringAttribute('keywrap_kek');
  }
  public set keywrapKek(value: string) {
    this._keywrapKek = value;
  }
  public resetKeywrapKek() {
    this._keywrapKek = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keywrapKekInput() {
    return this._keywrapKek;
  }

  // keywrap_mack - computed: true, optional: true, required: false
  private _keywrapMack?: string; 
  public get keywrapMack() {
    return this.getStringAttribute('keywrap_mack');
  }
  public set keywrapMack(value: string) {
    this._keywrapMack = value;
  }
  public resetKeywrapMack() {
    this._keywrapMack = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keywrapMackInput() {
    return this._keywrapMack;
  }

  // port - computed: true, optional: true, required: false
  private _port?: string; 
  public get port() {
    return this.getStringAttribute('port');
  }
  public set port(value: string) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // secret - computed: true, optional: false, required: true
  private _secret?: string; 
  public get secret() {
    return this.getStringAttribute('secret');
  }
  public set secret(value: string) {
    this._secret = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret;
  }
}

export class OrgWlanAcctServersList extends cdktf.ComplexList {
  public internalValue? : OrgWlanAcctServers[] | cdktf.IResolvable

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
  public get(index: number): OrgWlanAcctServersOutputReference {
    return new OrgWlanAcctServersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OrgWlanAirwatch {
  /**
  * API Key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_wlan#api_key OrgWlan#api_key}
  */
  readonly apiKey?: string;
  /**
  * Console URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_wlan#console_url OrgWlan#console_url}
  */
  readonly consoleUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_wlan#enabled OrgWlan#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_wlan#password OrgWlan#password}
  */
  readonly password?: string;
  /**
  * Username
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_wlan#username OrgWlan#username}
  */
  readonly username?: string;
}

export function orgWlanAirwatchToTerraform(struct?: OrgWlanAirwatch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_key: cdktf.stringToTerraform(struct!.apiKey),
    console_url: cdktf.stringToTerraform(struct!.consoleUrl),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    password: cdktf.stringToTerraform(struct!.password),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function orgWlanAirwatchToHclTerraform(struct?: OrgWlanAirwatch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_key: {
      value: cdktf.stringToHclTerraform(struct!.apiKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    console_url: {
      value: cdktf.stringToHclTerraform(struct!.consoleUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrgWlanAirwatchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OrgWlanAirwatch | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiKey = this._apiKey;
    }
    if (this._consoleUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.consoleUrl = this._consoleUrl;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrgWlanAirwatch | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiKey = undefined;
      this._consoleUrl = undefined;
      this._enabled = undefined;
      this._password = undefined;
      this._username = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiKey = value.apiKey;
      this._consoleUrl = value.consoleUrl;
      this._enabled = value.enabled;
      this._password = value.password;
      this._username = value.username;
    }
  }

  // api_key - computed: true, optional: true, required: false
  private _apiKey?: string; 
  public get apiKey() {
    return this.getStringAttribute('api_key');
  }
  public set apiKey(value: string) {
    this._apiKey = value;
  }
  public resetApiKey() {
    this._apiKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeyInput() {
    return this._apiKey;
  }

  // console_url - computed: true, optional: true, required: false
  private _consoleUrl?: string; 
  public get consoleUrl() {
    return this.getStringAttribute('console_url');
  }
  public set consoleUrl(value: string) {
    this._consoleUrl = value;
  }
  public resetConsoleUrl() {
    this._consoleUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consoleUrlInput() {
    return this._consoleUrl;
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

  // username - computed: true, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }
}
export interface OrgWlanAppLimit {
  /**
  * Map from app key to bandwidth in kbps. 
  * Property key is the app key, defined in Get Application List
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_wlan#apps OrgWlan#apps}
  */
  readonly apps?: { [key: string]: number };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_wlan#enabled OrgWlan#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Map from wxtag_id of Hostname Wxlan Tags to bandwidth in kbps. Property key is the `wxtag_id`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_wlan#wxtag_ids OrgWlan#wxtag_ids}
  */
  readonly wxtagIds?: { [key: string]: number };
}

export function orgWlanAppLimitToTerraform(struct?: OrgWlanAppLimit | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    apps: cdktf.hashMapper(cdktf.numberToTerraform)(struct!.apps),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    wxtag_ids: cdktf.hashMapper(cdktf.numberToTerraform)(struct!.wxtagIds),
  }
}


export function orgWlanAppLimitToHclTerraform(struct?: OrgWlanAppLimit | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    apps: {
      value: cdktf.hashMapperHcl(cdktf.numberToHclTerraform)(struct!.apps),
      isBlock: false,
      type: "map",
      storageClassType: "numberMap",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    wxtag_ids: {
      value: cdktf.hashMapperHcl(cdktf.numberToHclTerraform)(struct!.wxtagIds),
      isBlock: false,
      type: "map",
      storageClassType: "numberMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrgWlanAppLimitOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OrgWlanAppLimit | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apps !== undefined) {
      hasAnyValues = true;
      internalValueResult.apps = this._apps;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._wxtagIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.wxtagIds = this._wxtagIds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrgWlanAppLimit | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apps = undefined;
      this._enabled = undefined;
      this._wxtagIds = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apps = value.apps;
      this._enabled = value.enabled;
      this._wxtagIds = value.wxtagIds;
    }
  }

  // apps - computed: true, optional: true, required: false
  private _apps?: { [key: string]: number }; 
  public get apps() {
    return this.getNumberMapAttribute('apps');
  }
  public set apps(value: { [key: string]: number }) {
    this._apps = value;
  }
  public resetApps() {
    this._apps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appsInput() {
    return this._apps;
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

  // wxtag_ids - computed: true, optional: true, required: false
  private _wxtagIds?: { [key: string]: number }; 
  public get wxtagIds() {
    return this.getNumberMapAttribute('wxtag_ids');
  }
  public set wxtagIds(value: { [key: string]: number }) {
    this._wxtagIds = value;
  }
  public resetWxtagIds() {
    this._wxtagIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wxtagIdsInput() {
    return this._wxtagIds;
  }
}
export interface OrgWlanAppQosApps {
  /**
  * DSCP value range between 0 and 63
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_wlan#dscp OrgWlan#dscp}
  */
  readonly dscp?: string;
  /**
  * Subnet filter is not required but helps AP to only inspect certain traffic (thus reducing AP load)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_wlan#dst_subnet OrgWlan#dst_subnet}
  */
  readonly dstSubnet?: string;
  /**
  * Subnet filter is not required but helps AP to only inspect certain traffic (thus reducing AP load)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_wlan#src_subnet OrgWlan#src_subnet}
  */
  readonly srcSubnet?: string;
}

export function orgWlanAppQosAppsToTerraform(struct?: OrgWlanAppQosApps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dscp: cdktf.stringToTerraform(struct!.dscp),
    dst_subnet: cdktf.stringToTerraform(struct!.dstSubnet),
    src_subnet: cdktf.stringToTerraform(struct!.srcSubnet),
  }
}


export function orgWlanAppQosAppsToHclTerraform(struct?: OrgWlanAppQosApps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dscp: {
      value: cdktf.stringToHclTerraform(struct!.dscp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dst_subnet: {
      value: cdktf.stringToHclTerraform(struct!.dstSubnet),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    src_subnet: {
      value: cdktf.stringToHclTerraform(struct!.srcSubnet),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrgWlanAppQosAppsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): OrgWlanAppQosApps | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dscp !== undefined) {
      hasAnyValues = true;
      internalValueResult.dscp = this._dscp;
    }
    if (this._dstSubnet !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstSubnet = this._dstSubnet;
    }
    if (this._srcSubnet !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcSubnet = this._srcSubnet;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrgWlanAppQosApps | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dscp = undefined;
      this._dstSubnet = undefined;
      this._srcSubnet = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dscp = value.dscp;
      this._dstSubnet = value.dstSubnet;
      this._srcSubnet = value.srcSubnet;
    }
  }

  // dscp - computed: true, optional: true, required: false
  private _dscp?: string; 
  public get dscp() {
    return this.getStringAttribute('dscp');
  }
  public set dscp(value: string) {
    this._dscp = value;
  }
  public resetDscp() {
    this._dscp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dscpInput() {
    return this._dscp;
  }

  // dst_subnet - computed: true, optional: true, required: false
  private _dstSubnet?: string; 
  public get dstSubnet() {
    return this.getStringAttribute('dst_subnet');
  }
  public set dstSubnet(value: string) {
    this._dstSubnet = value;
  }
  public resetDstSubnet() {
    this._dstSubnet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstSubnetInput() {
    return this._dstSubnet;
  }

  // src_subnet - computed: true, optional: true, required: false
  private _srcSubnet?: string; 
  public get srcSubnet() {
    return this.getStringAttribute('src_subnet');
  }
  public set srcSubnet(value: string) {
    this._srcSubnet = value;
  }
  public resetSrcSubnet() {
    this._srcSubnet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcSubnetInput() {
    return this._srcSubnet;
  }
}

export class OrgWlanAppQosAppsMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: OrgWlanAppQosApps } | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): OrgWlanAppQosAppsOutputReference {
    return new OrgWlanAppQosAppsOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface OrgWlanAppQosOthers {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_wlan#dscp OrgWlan#dscp}
  */
  readonly dscp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_wlan#dst_subnet OrgWlan#dst_subnet}
  */
  readonly dstSubnet?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_wlan#port_ranges OrgWlan#port_ranges}
  */
  readonly portRanges?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_wlan#protocol OrgWlan#protocol}
  */
  readonly protocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_wlan#src_subnet OrgWlan#src_subnet}
  */
  readonly srcSubnet?: string;
}

export function orgWlanAppQosOthersToTerraform(struct?: OrgWlanAppQosOthers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dscp: cdktf.stringToTerraform(struct!.dscp),
    dst_subnet: cdktf.stringToTerraform(struct!.dstSubnet),
    port_ranges: cdktf.stringToTerraform(struct!.portRanges),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    src_subnet: cdktf.stringToTerraform(struct!.srcSubnet),
  }
}


export function orgWlanAppQosOthersToHclTerraform(struct?: OrgWlanAppQosOthers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dscp: {
      value: cdktf.stringToHclTerraform(struct!.dscp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dst_subnet: {
      value: cdktf.stringToHclTerraform(struct!.dstSubnet),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port_ranges: {
      value: cdktf.stringToHclTerraform(struct!.portRanges),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    src_subnet: {
      value: cdktf.stringToHclTerraform(struct!.srcSubnet),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrgWlanAppQosOthersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OrgWlanAppQosOthers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dscp !== undefined) {
      hasAnyValues = true;
      internalValueResult.dscp = this._dscp;
    }
    if (this._dstSubnet !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstSubnet = this._dstSubnet;
    }
    if (this._portRanges !== undefined) {
      hasAnyValues = true;
      internalValueResult.portRanges = this._portRanges;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._srcSubnet !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcSubnet = this._srcSubnet;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrgWlanAppQosOthers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dscp = undefined;
      this._dstSubnet = undefined;
      this._portRanges = undefined;
      this._protocol = undefined;
      this._srcSubnet = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dscp = value.dscp;
      this._dstSubnet = value.dstSubnet;
      this._portRanges = value.portRanges;
      this._protocol = value.protocol;
      this._srcSubnet = value.srcSubnet;
    }
  }

  // dscp - computed: true, optional: true, required: false
  private _dscp?: string; 
  public get dscp() {
    return this.getStringAttribute('dscp');
  }
  public set dscp(value: string) {
    this._dscp = value;
  }
  public resetDscp() {
    this._dscp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dscpInput() {
    return this._dscp;
  }

  // dst_subnet - computed: true, optional: true, required: false
  private _dstSubnet?: string; 
  public get dstSubnet() {
    return this.getStringAttribute('dst_subnet');
  }
  public set dstSubnet(value: string) {
    this._dstSubnet = value;
  }
  public resetDstSubnet() {
    this._dstSubnet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstSubnetInput() {
    return this._dstSubnet;
  }

  // port_ranges - computed: true, optional: true, required: false
  private _portRanges?: string; 
  public get portRanges() {
    return this.getStringAttribute('port_ranges');
  }
  public set portRanges(value: string) {
    this._portRanges = value;
  }
  public resetPortRanges() {
    this._portRanges = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portRangesInput() {
    return this._portRanges;
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

  // src_subnet - computed: true, optional: true, required: false
  private _srcSubnet?: string; 
  public get srcSubnet() {
    return this.getStringAttribute('src_subnet');
  }
  public set srcSubnet(value: string) {
    this._srcSubnet = value;
  }
  public resetSrcSubnet() {
    this._srcSubnet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcSubnetInput() {
    return this._srcSubnet;
  }
}

export class OrgWlanAppQosOthersList extends cdktf.ComplexList {
  public internalValue? : OrgWlanAppQosOthers[] | cdktf.IResolvable

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
  public get(index: number): OrgWlanAppQosOthersOutputReference {
    return new OrgWlanAppQosOthersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OrgWlanAppQos {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_wlan#apps OrgWlan#apps}
  */
  readonly apps?: { [key: string]: OrgWlanAppQosApps } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_wlan#enabled OrgWlan#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_wlan#others OrgWlan#others}
  */
  readonly others?: OrgWlanAppQosOthers[] | cdktf.IResolvable;
}

export function orgWlanAppQosToTerraform(struct?: OrgWlanAppQos | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    apps: cdktf.hashMapper(orgWlanAppQosAppsToTerraform)(struct!.apps),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    others: cdktf.listMapper(orgWlanAppQosOthersToTerraform, false)(struct!.others),
  }
}


export function orgWlanAppQosToHclTerraform(struct?: OrgWlanAppQos | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    apps: {
      value: cdktf.hashMapperHcl(orgWlanAppQosAppsToHclTerraform)(struct!.apps),
      isBlock: true,
      type: "map",
      storageClassType: "OrgWlanAppQosAppsMap",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    others: {
      value: cdktf.listMapperHcl(orgWlanAppQosOthersToHclTerraform, false)(struct!.others),
      isBlock: true,
      type: "list",
      storageClassType: "OrgWlanAppQosOthersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrgWlanAppQosOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OrgWlanAppQos | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apps?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.apps = this._apps?.internalValue;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._others?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.others = this._others?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrgWlanAppQos | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apps.internalValue = undefined;
      this._enabled = undefined;
      this._others.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apps.internalValue = value.apps;
      this._enabled = value.enabled;
      this._others.internalValue = value.others;
    }
  }

  // apps - computed: true, optional: true, required: false
  private _apps = new OrgWlanAppQosAppsMap(this, "apps");
  public get apps() {
    return this._apps;
  }
  public putApps(value: { [key: string]: OrgWlanAppQosApps } | cdktf.IResolvable) {
    this._apps.internalValue = value;
  }
  public resetApps() {
    this._apps.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appsInput() {
    return this._apps.internalValue;
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

  // others - computed: true, optional: true, required: false
  private _others = new OrgWlanAppQosOthersList(this, "others", false);
  public get others() {
    return this._others;
  }
  public putOthers(value: OrgWlanAppQosOthers[] | cdktf.IResolvable) {
    this._others.internalValue = value;
  }
  public resetOthers() {
    this._others.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get othersInput() {
    return this._others.internalValue;
  }
}
export interface OrgWlanAuth {
  /**
  * SAE anti-clogging token threshold
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_wlan#anticlog_threshold OrgWlan#anticlog_threshold}
  */
  readonly anticlogThreshold?: number;
  /**
  * Whether to trigger EAP reauth when the session ends
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_wlan#eap_reauth OrgWlan#eap_reauth}
  */
  readonly eapReauth?: boolean | cdktf.IResolvable;
  /**
  * Whether to enable MAC Auth, uses the same auth_servers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_wlan#enable_mac_auth OrgWlan#enable_mac_auth}
  */
  readonly enableMacAuth?: boolean | cdktf.IResolvable;
  /**
  * When `type`==`wep`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_wlan#key_idx OrgWlan#key_idx}
  */
  readonly keyIdx?: number;
  /**
  * When type=wep, four 10-character or 26-character hex string, null can be used. All keys, if provided, have to be in the same length
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_wlan#keys OrgWlan#keys}
  */
  readonly keys?: string[];
  /**
  * When `type`==`psk`, whether to only use multi_psk
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_wlan#multi_psk_only OrgWlan#multi_psk_only}
  */
  readonly multiPskOnly?: boolean | cdktf.IResolvable;
  /**
  * if `type`==`open`. enum: `disabled`, `enabled` (means transition mode), `required`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_wlan#owe OrgWlan#owe}
  */
  readonly owe?: string;
  /**
  * When `type`=`psk` or `type`=`eap`, one or more of `wpa1-ccmp`, `wpa1-tkip`, `wpa2-ccmp`, `wpa2-tkip`, `wpa3`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_wlan#pairwise OrgWlan#pairwise}
  */
  readonly pairwise?: string[];
  /**
  * When `multi_psk_only`==`true`, whether private wlan is enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_wlan#private_wlan OrgWlan#private_wlan}
  */
  readonly privateWlan?: boolean | cdktf.IResolvable;
  /**
  * When `type`==`psk`, 8-64 characters, or 64 hex characters
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_wlan#psk OrgWlan#psk}
  */
  readonly psk?: string;
  /**
  * enum: `eap`, `eap192`, `open`, `psk`, `psk-tkip`, `psk-wpa2-tkip`, `wep`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_wlan#type OrgWlan#type}
  */
  readonly type?: string;
  /**
  * Enable WEP as secondary auth
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_wlan#wep_as_secondary_auth OrgWlan#wep_as_secondary_auth}
  */
  readonly wepAsSecondaryAuth?: boolean | cdktf.IResolvable;
}

export function orgWlanAuthToTerraform(struct?: OrgWlanAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    anticlog_threshold: cdktf.numberToTerraform(struct!.anticlogThreshold),
    eap_reauth: cdktf.booleanToTerraform(struct!.eapReauth),
    enable_mac_auth: cdktf.booleanToTerraform(struct!.enableMacAuth),
    key_idx: cdktf.numberToTerraform(struct!.keyIdx),
    keys: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.keys),
    multi_psk_only: cdktf.booleanToTerraform(struct!.multiPskOnly),
    owe: cdktf.stringToTerraform(struct!.owe),
    pairwise: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.pairwise),
    private_wlan: cdktf.booleanToTerraform(struct!.privateWlan),
    psk: cdktf.stringToTerraform(struct!.psk),
    type: cdktf.stringToTerraform(struct!.type),
    wep_as_secondary_auth: cdktf.booleanToTerraform(struct!.wepAsSecondaryAuth),
  }
}


export function orgWlanAuthToHclTerraform(struct?: OrgWlanAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    anticlog_threshold: {
      value: cdktf.numberToHclTerraform(struct!.anticlogThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    eap_reauth: {
      value: cdktf.booleanToHclTerraform(struct!.eapReauth),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_mac_auth: {
      value: cdktf.booleanToHclTerraform(struct!.enableMacAuth),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    key_idx: {
      value: cdktf.numberToHclTerraform(struct!.keyIdx),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    keys: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.keys),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    multi_psk_only: {
      value: cdktf.booleanToHclTerraform(struct!.multiPskOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    owe: {
      value: cdktf.stringToHclTerraform(struct!.owe),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pairwise: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.pairwise),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    private_wlan: {
      value: cdktf.booleanToHclTerraform(struct!.privateWlan),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    psk: {
      value: cdktf.stringToHclTerraform(struct!.psk),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    wep_as_secondary_auth: {
      value: cdktf.booleanToHclTerraform(struct!.wepAsSecondaryAuth),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrgWlanAuthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OrgWlanAuth | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._anticlogThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.anticlogThreshold = this._anticlogThreshold;
    }
    if (this._eapReauth !== undefined) {
      hasAnyValues = true;
      internalValueResult.eapReauth = this._eapReauth;
    }
    if (this._enableMacAuth !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableMacAuth = this._enableMacAuth;
    }
    if (this._keyIdx !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyIdx = this._keyIdx;
    }
    if (this._keys !== undefined) {
      hasAnyValues = true;
      internalValueResult.keys = this._keys;
    }
    if (this._multiPskOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.multiPskOnly = this._multiPskOnly;
    }
    if (this._owe !== undefined) {
      hasAnyValues = true;
      internalValueResult.owe = this._owe;
    }
    if (this._pairwise !== undefined) {
      hasAnyValues = true;
      internalValueResult.pairwise = this._pairwise;
    }
    if (this._privateWlan !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateWlan = this._privateWlan;
    }
    if (this._psk !== undefined) {
      hasAnyValues = true;
      internalValueResult.psk = this._psk;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._wepAsSecondaryAuth !== undefined) {
      hasAnyValues = true;
      internalValueResult.wepAsSecondaryAuth = this._wepAsSecondaryAuth;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrgWlanAuth | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._anticlogThreshold = undefined;
      this._eapReauth = undefined;
      this._enableMacAuth = undefined;
      this._keyIdx = undefined;
      this._keys = undefined;
      this._multiPskOnly = undefined;
      this._owe = undefined;
      this._pairwise = undefined;
      this._privateWlan = undefined;
      this._psk = undefined;
      this._type = undefined;
      this._wepAsSecondaryAuth = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._anticlogThreshold = value.anticlogThreshold;
      this._eapReauth = value.eapReauth;
      this._enableMacAuth = value.enableMacAuth;
      this._keyIdx = value.keyIdx;
      this._keys = value.keys;
      this._multiPskOnly = value.multiPskOnly;
      this._owe = value.owe;
      this._pairwise = value.pairwise;
      this._privateWlan = value.privateWlan;
      this._psk = value.psk;
      this._type = value.type;
      this._wepAsSecondaryAuth = value.wepAsSecondaryAuth;
    }
  }

  // anticlog_threshold - computed: false, optional: true, required: false
  private _anticlogThreshold?: number; 
  public get anticlogThreshold() {
    return this.getNumberAttribute('anticlog_threshold');
  }
  public set anticlogThreshold(value: number) {
    this._anticlogThreshold = value;
  }
  public resetAnticlogThreshold() {
    this._anticlogThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anticlogThresholdInput() {
    return this._anticlogThreshold;
  }

  // eap_reauth - computed: true, optional: true, required: false
  private _eapReauth?: boolean | cdktf.IResolvable; 
  public get eapReauth() {
    return this.getBooleanAttribute('eap_reauth');
  }
  public set eapReauth(value: boolean | cdktf.IResolvable) {
    this._eapReauth = value;
  }
  public resetEapReauth() {
    this._eapReauth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eapReauthInput() {
    return this._eapReauth;
  }

  // enable_mac_auth - computed: true, optional: true, required: false
  private _enableMacAuth?: boolean | cdktf.IResolvable; 
  public get enableMacAuth() {
    return this.getBooleanAttribute('enable_mac_auth');
  }
  public set enableMacAuth(value: boolean | cdktf.IResolvable) {
    this._enableMacAuth = value;
  }
  public resetEnableMacAuth() {
    this._enableMacAuth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableMacAuthInput() {
    return this._enableMacAuth;
  }

  // key_idx - computed: true, optional: true, required: false
  private _keyIdx?: number; 
  public get keyIdx() {
    return this.getNumberAttribute('key_idx');
  }
  public set keyIdx(value: number) {
    this._keyIdx = value;
  }
  public resetKeyIdx() {
    this._keyIdx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyIdxInput() {
    return this._keyIdx;
  }

  // keys - computed: true, optional: true, required: false
  private _keys?: string[]; 
  public get keys() {
    return this.getListAttribute('keys');
  }
  public set keys(value: string[]) {
    this._keys = value;
  }
  public resetKeys() {
    this._keys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keysInput() {
    return this._keys;
  }

  // multi_psk_only - computed: true, optional: true, required: false
  private _multiPskOnly?: boolean | cdktf.IResolvable; 
  public get multiPskOnly() {
    return this.getBooleanAttribute('multi_psk_only');
  }
  public set multiPskOnly(value: boolean | cdktf.IResolvable) {
    this._multiPskOnly = value;
  }
  public resetMultiPskOnly() {
    this._multiPskOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiPskOnlyInput() {
    return this._multiPskOnly;
  }

  // owe - computed: false, optional: true, required: false
  private _owe?: string; 
  public get owe() {
    return this.getStringAttribute('owe');
  }
  public set owe(value: string) {
    this._owe = value;
  }
  public resetOwe() {
    this._owe = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oweInput() {
    return this._owe;
  }

  // pairwise - computed: false, optional: true, required: false
  private _pairwise?: string[]; 
  public get pairwise() {
    return this.getListAttribute('pairwise');
  }
  public set pairwise(value: string[]) {
    this._pairwise = value;
  }
  public resetPairwise() {
    this._pairwise = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pairwiseInput() {
    return this._pairwise;
  }

  // private_wlan - computed: true, optional: true, required: false
  private _privateWlan?: boolean | cdktf.IResolvable; 
  public get privateWlan() {
    return this.getBooleanAttribute('private_wlan');
  }
  public set privateWlan(value: boolean | cdktf.IResolvable) {
    this._privateWlan = value;
  }
  public resetPrivateWlan() {
    this._privateWlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateWlanInput() {
    return this._privateWlan;
  }

  // psk - computed: true, optional: true, required: false
  private _psk?: string; 
  public get psk() {
    return this.getStringAttribute('psk');
  }
  public set psk(value: string) {
    this._psk = value;
  }
  public resetPsk() {
    this._psk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pskInput() {
    return this._psk;
  }

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // wep_as_secondary_auth - computed: false, optional: true, required: false
  private _wepAsSecondaryAuth?: boolean | cdktf.IResolvable; 
  public get wepAsSecondaryAuth() {
    return this.getBooleanAttribute('wep_as_secondary_auth');
  }
  public set wepAsSecondaryAuth(value: boolean | cdktf.IResolvable) {
    this._wepAsSecondaryAuth = value;
  }
  public resetWepAsSecondaryAuth() {
    this._wepAsSecondaryAuth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wepAsSecondaryAuthInput() {
    return this._wepAsSecondaryAuth;
  }
}
export interface OrgWlanAuthServers {
  /**
  * IP/ hostname of RADIUS server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_wlan#host OrgWlan#host}
  */
  readonly host: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_wlan#keywrap_enabled OrgWlan#keywrap_enabled}
  */
  readonly keywrapEnabled?: boolean | cdktf.IResolvable;
  /**
  * enum: `ascii`, `hex`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_wlan#keywrap_format OrgWlan#keywrap_format}
  */
  readonly keywrapFormat?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_wlan#keywrap_kek OrgWlan#keywrap_kek}
  */
  readonly keywrapKek?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_wlan#keywrap_mack OrgWlan#keywrap_mack}
  */
  readonly keywrapMack?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_wlan#port OrgWlan#port}
  */
  readonly port?: string;
  /**
  * Whether to require Message-Authenticator in requests
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_wlan#require_message_authenticator OrgWlan#require_message_authenticator}
  */
  readonly requireMessageAuthenticator?: boolean | cdktf.IResolvable;
  /**
  * Secret of RADIUS server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_wlan#secret OrgWlan#secret}
  */
  readonly secret: string;
}

export function orgWlanAuthServersToTerraform(struct?: OrgWlanAuthServers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    keywrap_enabled: cdktf.booleanToTerraform(struct!.keywrapEnabled),
    keywrap_format: cdktf.stringToTerraform(struct!.keywrapFormat),
    keywrap_kek: cdktf.stringToTerraform(struct!.keywrapKek),
    keywrap_mack: cdktf.stringToTerraform(struct!.keywrapMack),
    port: cdktf.stringToTerraform(struct!.port),
    require_message_authenticator: cdktf.booleanToTerraform(struct!.requireMessageAuthenticator),
    secret: cdktf.stringToTerraform(struct!.secret),
  }
}


export function orgWlanAuthServersToHclTerraform(struct?: OrgWlanAuthServers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    keywrap_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.keywrapEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    keywrap_format: {
      value: cdktf.stringToHclTerraform(struct!.keywrapFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    keywrap_kek: {
      value: cdktf.stringToHclTerraform(struct!.keywrapKek),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    keywrap_mack: {
      value: cdktf.stringToHclTerraform(struct!.keywrapMack),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.stringToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    require_message_authenticator: {
      value: cdktf.booleanToHclTerraform(struct!.requireMessageAuthenticator),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    secret: {
      value: cdktf.stringToHclTerraform(struct!.secret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrgWlanAuthServersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OrgWlanAuthServers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._keywrapEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.keywrapEnabled = this._keywrapEnabled;
    }
    if (this._keywrapFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.keywrapFormat = this._keywrapFormat;
    }
    if (this._keywrapKek !== undefined) {
      hasAnyValues = true;
      internalValueResult.keywrapKek = this._keywrapKek;
    }
    if (this._keywrapMack !== undefined) {
      hasAnyValues = true;
      internalValueResult.keywrapMack = this._keywrapMack;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._requireMessageAuthenticator !== undefined) {
      hasAnyValues = true;
      internalValueResult.requireMessageAuthenticator = this._requireMessageAuthenticator;
    }
    if (this._secret !== undefined) {
      hasAnyValues = true;
      internalValueResult.secret = this._secret;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrgWlanAuthServers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._host = undefined;
      this._keywrapEnabled = undefined;
      this._keywrapFormat = undefined;
      this._keywrapKek = undefined;
      this._keywrapMack = undefined;
      this._port = undefined;
      this._requireMessageAuthenticator = undefined;
      this._secret = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._host = value.host;
      this._keywrapEnabled = value.keywrapEnabled;
      this._keywrapFormat = value.keywrapFormat;
      this._keywrapKek = value.keywrapKek;
      this._keywrapMack = value.keywrapMack;
      this._port = value.port;
      this._requireMessageAuthenticator = value.requireMessageAuthenticator;
      this._secret = value.secret;
    }
  }

  // host - computed: true, optional: false, required: true
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // keywrap_enabled - computed: true, optional: true, required: false
  private _keywrapEnabled?: boolean | cdktf.IResolvable; 
  public get keywrapEnabled() {
    return this.getBooleanAttribute('keywrap_enabled');
  }
  public set keywrapEnabled(value: boolean | cdktf.IResolvable) {
    this._keywrapEnabled = value;
  }
  public resetKeywrapEnabled() {
    this._keywrapEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keywrapEnabledInput() {
    return this._keywrapEnabled;
  }

  // keywrap_format - computed: true, optional: true, required: false
  private _keywrapFormat?: string; 
  public get keywrapFormat() {
    return this.getStringAttribute('keywrap_format');
  }
  public set keywrapFormat(value: string) {
    this._keywrapFormat = value;
  }
  public resetKeywrapFormat() {
    this._keywrapFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keywrapFormatInput() {
    return this._keywrapFormat;
  }

  // keywrap_kek - computed: true, optional: true, required: false
  private _keywrapKek?: string; 
  public get keywrapKek() {
    return this.getStringAttribute('keywrap_kek');
  }
  public set keywrapKek(value: string) {
    this._keywrapKek = value;
  }
  public resetKeywrapKek() {
    this._keywrapKek = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keywrapKekInput() {
    return this._keywrapKek;
  }

  // keywrap_mack - computed: true, optional: true, required: false
  private _keywrapMack?: string; 
  public get keywrapMack() {
    return this.getStringAttribute('keywrap_mack');
  }
  public set keywrapMack(value: string) {
    this._keywrapMack = value;
  }
  public resetKeywrapMack() {
    this._keywrapMack = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keywrapMackInput() {
    return this._keywrapMack;
  }

  // port - computed: true, optional: true, required: false
  private _port?: string; 
  public get port() {
    return this.getStringAttribute('port');
  }
  public set port(value: string) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // require_message_authenticator - computed: true, optional: true, required: false
  private _requireMessageAuthenticator?: boolean | cdktf.IResolvable; 
  public get requireMessageAuthenticator() {
    return this.getBooleanAttribute('require_message_authenticator');
  }
  public set requireMessageAuthenticator(value: boolean | cdktf.IResolvable) {
    this._requireMessageAuthenticator = value;
  }
  public resetRequireMessageAuthenticator() {
    this._requireMessageAuthenticator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requireMessageAuthenticatorInput() {
    return this._requireMessageAuthenticator;
  }

  // secret - computed: true, optional: false, required: true
  private _secret?: string; 
  public get secret() {
    return this.getStringAttribute('secret');
  }
  public set secret(value: string) {
    this._secret = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret;
  }
}

export class OrgWlanAuthServersList extends cdktf.ComplexList {
  public internalValue? : OrgWlanAuthServers[] | cdktf.IResolvable

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
  public get(index: number): OrgWlanAuthServersOutputReference {
    return new OrgWlanAuthServersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OrgWlanBonjourServices {
  /**
  * Whether to prevent wireless clients to discover bonjour devices on the same WLAN
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_wlan#disable_local OrgWlan#disable_local}
  */
  readonly disableLocal?: boolean | cdktf.IResolvable;
  /**
  * Optional, if the service is further restricted for certain RADIUS groups
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_wlan#radius_groups OrgWlan#radius_groups}
  */
  readonly radiusGroups?: string[];
  /**
  * how bonjour services should be discovered for the same WLAN. enum: `same_ap`, `same_map`, `same_site`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_wlan#scope OrgWlan#scope}
  */
  readonly scope?: string;
}

export function orgWlanBonjourServicesToTerraform(struct?: OrgWlanBonjourServices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disable_local: cdktf.booleanToTerraform(struct!.disableLocal),
    radius_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.radiusGroups),
    scope: cdktf.stringToTerraform(struct!.scope),
  }
}


export function orgWlanBonjourServicesToHclTerraform(struct?: OrgWlanBonjourServices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disable_local: {
      value: cdktf.booleanToHclTerraform(struct!.disableLocal),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    radius_groups: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.radiusGroups),
      isBlock: false,
      type: "list",
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

export class OrgWlanBonjourServicesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): OrgWlanBonjourServices | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disableLocal !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableLocal = this._disableLocal;
    }
    if (this._radiusGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.radiusGroups = this._radiusGroups;
    }
    if (this._scope !== undefined) {
      hasAnyValues = true;
      internalValueResult.scope = this._scope;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrgWlanBonjourServices | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._disableLocal = undefined;
      this._radiusGroups = undefined;
      this._scope = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._disableLocal = value.disableLocal;
      this._radiusGroups = value.radiusGroups;
      this._scope = value.scope;
    }
  }

  // disable_local - computed: true, optional: true, required: false
  private _disableLocal?: boolean | cdktf.IResolvable; 
  public get disableLocal() {
    return this.getBooleanAttribute('disable_local');
  }
  public set disableLocal(value: boolean | cdktf.IResolvable) {
    this._disableLocal = value;
  }
  public resetDisableLocal() {
    this._disableLocal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableLocalInput() {
    return this._disableLocal;
  }

  // radius_groups - computed: false, optional: true, required: false
  private _radiusGroups?: string[]; 
  public get radiusGroups() {
    return this.getListAttribute('radius_groups');
  }
  public set radiusGroups(value: string[]) {
    this._radiusGroups = value;
  }
  public resetRadiusGroups() {
    this._radiusGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radiusGroupsInput() {
    return this._radiusGroups;
  }

  // scope - computed: true, optional: true, required: false
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

export class OrgWlanBonjourServicesMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: OrgWlanBonjourServices } | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): OrgWlanBonjourServicesOutputReference {
    return new OrgWlanBonjourServicesOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface OrgWlanBonjour {
  /**
  * additional VLAN IDs (on the LAN side or from other WLANs) should we be forwarding bonjour queries/responses
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_wlan#additional_vlan_ids OrgWlan#additional_vlan_ids}
  */
  readonly additionalVlanIds?: string[];
  /**
  * Whether to enable bonjour for this WLAN. Once enabled, limit_bcast is assumed true, allow_mdns is assumed false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_wlan#enabled OrgWlan#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * What services are allowed. 
  * Property key is the service name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_wlan#services OrgWlan#services}
  */
  readonly services?: { [key: string]: OrgWlanBonjourServices } | cdktf.IResolvable;
}

export function orgWlanBonjourToTerraform(struct?: OrgWlanBonjour | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_vlan_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.additionalVlanIds),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    services: cdktf.hashMapper(orgWlanBonjourServicesToTerraform)(struct!.services),
  }
}


export function orgWlanBonjourToHclTerraform(struct?: OrgWlanBonjour | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_vlan_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.additionalVlanIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    services: {
      value: cdktf.hashMapperHcl(orgWlanBonjourServicesToHclTerraform)(struct!.services),
      isBlock: true,
      type: "map",
      storageClassType: "OrgWlanBonjourServicesMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrgWlanBonjourOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OrgWlanBonjour | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalVlanIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalVlanIds = this._additionalVlanIds;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._services?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.services = this._services?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrgWlanBonjour | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalVlanIds = undefined;
      this._enabled = undefined;
      this._services.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalVlanIds = value.additionalVlanIds;
      this._enabled = value.enabled;
      this._services.internalValue = value.services;
    }
  }

  // additional_vlan_ids - computed: false, optional: true, required: false
  private _additionalVlanIds?: string[]; 
  public get additionalVlanIds() {
    return this.getListAttribute('additional_vlan_ids');
  }
  public set additionalVlanIds(value: string[]) {
    this._additionalVlanIds = value;
  }
  public resetAdditionalVlanIds() {
    this._additionalVlanIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalVlanIdsInput() {
    return this._additionalVlanIds;
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

  // services - computed: false, optional: true, required: false
  private _services = new OrgWlanBonjourServicesMap(this, "services");
  public get services() {
    return this._services;
  }
  public putServices(value: { [key: string]: OrgWlanBonjourServices } | cdktf.IResolvable) {
    this._services.internalValue = value;
  }
  public resetServices() {
    this._services.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servicesInput() {
    return this._services.internalValue;
  }
}
export interface OrgWlanCiscoCwa {
  /**
  * List of hostnames without http(s):// (matched by substring)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_wlan#allowed_hostnames OrgWlan#allowed_hostnames}
  */
  readonly allowedHostnames?: string[];
  /**
  * List of CIDRs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_wlan#allowed_subnets OrgWlan#allowed_subnets}
  */
  readonly allowedSubnets?: string[];
  /**
  * List of blocked CIDRs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_wlan#blocked_subnets OrgWlan#blocked_subnets}
  */
  readonly blockedSubnets?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_wlan#enabled OrgWlan#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function orgWlanCiscoCwaToTerraform(struct?: OrgWlanCiscoCwa | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_hostnames: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedHostnames),
    allowed_subnets: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedSubnets),
    blocked_subnets: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.blockedSubnets),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function orgWlanCiscoCwaToHclTerraform(struct?: OrgWlanCiscoCwa | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed_hostnames: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedHostnames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    allowed_subnets: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedSubnets),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    blocked_subnets: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.blockedSubnets),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrgWlanCiscoCwaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OrgWlanCiscoCwa | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedHostnames !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedHostnames = this._allowedHostnames;
    }
    if (this._allowedSubnets !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedSubnets = this._allowedSubnets;
    }
    if (this._blockedSubnets !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockedSubnets = this._blockedSubnets;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrgWlanCiscoCwa | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowedHostnames = undefined;
      this._allowedSubnets = undefined;
      this._blockedSubnets = undefined;
      this._enabled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowedHostnames = value.allowedHostnames;
      this._allowedSubnets = value.allowedSubnets;
      this._blockedSubnets = value.blockedSubnets;
      this._enabled = value.enabled;
    }
  }

  // allowed_hostnames - computed: true, optional: true, required: false
  private _allowedHostnames?: string[]; 
  public get allowedHostnames() {
    return this.getListAttribute('allowed_hostnames');
  }
  public set allowedHostnames(value: string[]) {
    this._allowedHostnames = value;
  }
  public resetAllowedHostnames() {
    this._allowedHostnames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedHostnamesInput() {
    return this._allowedHostnames;
  }

  // allowed_subnets - computed: true, optional: true, required: false
  private _allowedSubnets?: string[]; 
  public get allowedSubnets() {
    return this.getListAttribute('allowed_subnets');
  }
  public set allowedSubnets(value: string[]) {
    this._allowedSubnets = value;
  }
  public resetAllowedSubnets() {
    this._allowedSubnets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedSubnetsInput() {
    return this._allowedSubnets;
  }

  // blocked_subnets - computed: true, optional: true, required: false
  private _blockedSubnets?: string[]; 
  public get blockedSubnets() {
    return this.getListAttribute('blocked_subnets');
  }
  public set blockedSubnets(value: string[]) {
    this._blockedSubnets = value;
  }
  public resetBlockedSubnets() {
    this._blockedSubnets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockedSubnetsInput() {
    return this._blockedSubnets;
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
}
export interface OrgWlanCoaServers {
  /**
  * Whether to disable Event-Timestamp Check
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_wlan#disable_event_timestamp_check OrgWlan#disable_event_timestamp_check}
  */
  readonly disableEventTimestampCheck?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_wlan#enabled OrgWlan#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_wlan#ip OrgWlan#ip}
  */
  readonly ip: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_wlan#port OrgWlan#port}
  */
  readonly port?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_wlan#secret OrgWlan#secret}
  */
  readonly secret: string;
}

export function orgWlanCoaServersToTerraform(struct?: OrgWlanCoaServers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disable_event_timestamp_check: cdktf.booleanToTerraform(struct!.disableEventTimestampCheck),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    ip: cdktf.stringToTerraform(struct!.ip),
    port: cdktf.stringToTerraform(struct!.port),
    secret: cdktf.stringToTerraform(struct!.secret),
  }
}


export function orgWlanCoaServersToHclTerraform(struct?: OrgWlanCoaServers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disable_event_timestamp_check: {
      value: cdktf.booleanToHclTerraform(struct!.disableEventTimestampCheck),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ip: {
      value: cdktf.stringToHclTerraform(struct!.ip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.stringToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret: {
      value: cdktf.stringToHclTerraform(struct!.secret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrgWlanCoaServersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OrgWlanCoaServers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disableEventTimestampCheck !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableEventTimestampCheck = this._disableEventTimestampCheck;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._secret !== undefined) {
      hasAnyValues = true;
      internalValueResult.secret = this._secret;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrgWlanCoaServers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._disableEventTimestampCheck = undefined;
      this._enabled = undefined;
      this._ip = undefined;
      this._port = undefined;
      this._secret = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._disableEventTimestampCheck = value.disableEventTimestampCheck;
      this._enabled = value.enabled;
      this._ip = value.ip;
      this._port = value.port;
      this._secret = value.secret;
    }
  }

  // disable_event_timestamp_check - computed: true, optional: true, required: false
  private _disableEventTimestampCheck?: boolean | cdktf.IResolvable; 
  public get disableEventTimestampCheck() {
    return this.getBooleanAttribute('disable_event_timestamp_check');
  }
  public set disableEventTimestampCheck(value: boolean | cdktf.IResolvable) {
    this._disableEventTimestampCheck = value;
  }
  public resetDisableEventTimestampCheck() {
    this._disableEventTimestampCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableEventTimestampCheckInput() {
    return this._disableEventTimestampCheck;
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

  // ip - computed: false, optional: false, required: true
  private _ip?: string; 
  public get ip() {
    return this.getStringAttribute('ip');
  }
  public set ip(value: string) {
    this._ip = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip;
  }

  // port - computed: false, optional: true, required: false
  private _port?: string; 
  public get port() {
    return this.getStringAttribute('port');
  }
  public set port(value: string) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // secret - computed: false, optional: false, required: true
  private _secret?: string; 
  public get secret() {
    return this.getStringAttribute('secret');
  }
  public set secret(value: string) {
    this._secret = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret;
  }
}

export class OrgWlanCoaServersList extends cdktf.ComplexList {
  public internalValue? : OrgWlanCoaServers[] | cdktf.IResolvable

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
  public get(index: number): OrgWlanCoaServersOutputReference {
    return new OrgWlanCoaServersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OrgWlanDnsServerRewrite {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_wlan#enabled OrgWlan#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Map between radius_group and the desired DNS server (IPv4 only). Property key is the RADIUS group, property value is the desired DNS Server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_wlan#radius_groups OrgWlan#radius_groups}
  */
  readonly radiusGroups?: { [key: string]: string };
}

export function orgWlanDnsServerRewriteToTerraform(struct?: OrgWlanDnsServerRewrite | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    radius_groups: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.radiusGroups),
  }
}


export function orgWlanDnsServerRewriteToHclTerraform(struct?: OrgWlanDnsServerRewrite | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    radius_groups: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.radiusGroups),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrgWlanDnsServerRewriteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OrgWlanDnsServerRewrite | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._radiusGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.radiusGroups = this._radiusGroups;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrgWlanDnsServerRewrite | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._radiusGroups = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._radiusGroups = value.radiusGroups;
    }
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

  // radius_groups - computed: false, optional: true, required: false
  private _radiusGroups?: { [key: string]: string }; 
  public get radiusGroups() {
    return this.getStringMapAttribute('radius_groups');
  }
  public set radiusGroups(value: { [key: string]: string }) {
    this._radiusGroups = value;
  }
  public resetRadiusGroups() {
    this._radiusGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radiusGroupsInput() {
    return this._radiusGroups;
  }
}
export interface OrgWlanDynamicPsk {
  /**
  * Default PSK to use if cloud WLC is not available, 8-63 characters
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_wlan#default_psk OrgWlan#default_psk}
  */
  readonly defaultPsk?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_wlan#default_vlan_id OrgWlan#default_vlan_id}
  */
  readonly defaultVlanId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_wlan#enabled OrgWlan#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * When 11r is enabled, we'll try to use the cached PMK, this can be disabled. `false` means auto
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_wlan#force_lookup OrgWlan#force_lookup}
  */
  readonly forceLookup?: boolean | cdktf.IResolvable;
  /**
  * enum: `cloud_psks`, `radius`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_wlan#source OrgWlan#source}
  */
  readonly source?: string;
}

export function orgWlanDynamicPskToTerraform(struct?: OrgWlanDynamicPsk | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_psk: cdktf.stringToTerraform(struct!.defaultPsk),
    default_vlan_id: cdktf.stringToTerraform(struct!.defaultVlanId),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    force_lookup: cdktf.booleanToTerraform(struct!.forceLookup),
    source: cdktf.stringToTerraform(struct!.source),
  }
}


export function orgWlanDynamicPskToHclTerraform(struct?: OrgWlanDynamicPsk | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_psk: {
      value: cdktf.stringToHclTerraform(struct!.defaultPsk),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    default_vlan_id: {
      value: cdktf.stringToHclTerraform(struct!.defaultVlanId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    force_lookup: {
      value: cdktf.booleanToHclTerraform(struct!.forceLookup),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    source: {
      value: cdktf.stringToHclTerraform(struct!.source),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrgWlanDynamicPskOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OrgWlanDynamicPsk | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultPsk !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultPsk = this._defaultPsk;
    }
    if (this._defaultVlanId !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultVlanId = this._defaultVlanId;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._forceLookup !== undefined) {
      hasAnyValues = true;
      internalValueResult.forceLookup = this._forceLookup;
    }
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrgWlanDynamicPsk | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._defaultPsk = undefined;
      this._defaultVlanId = undefined;
      this._enabled = undefined;
      this._forceLookup = undefined;
      this._source = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._defaultPsk = value.defaultPsk;
      this._defaultVlanId = value.defaultVlanId;
      this._enabled = value.enabled;
      this._forceLookup = value.forceLookup;
      this._source = value.source;
    }
  }

  // default_psk - computed: false, optional: true, required: false
  private _defaultPsk?: string; 
  public get defaultPsk() {
    return this.getStringAttribute('default_psk');
  }
  public set defaultPsk(value: string) {
    this._defaultPsk = value;
  }
  public resetDefaultPsk() {
    this._defaultPsk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultPskInput() {
    return this._defaultPsk;
  }

  // default_vlan_id - computed: false, optional: true, required: false
  private _defaultVlanId?: string; 
  public get defaultVlanId() {
    return this.getStringAttribute('default_vlan_id');
  }
  public set defaultVlanId(value: string) {
    this._defaultVlanId = value;
  }
  public resetDefaultVlanId() {
    this._defaultVlanId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultVlanIdInput() {
    return this._defaultVlanId;
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

  // force_lookup - computed: true, optional: true, required: false
  private _forceLookup?: boolean | cdktf.IResolvable; 
  public get forceLookup() {
    return this.getBooleanAttribute('force_lookup');
  }
  public set forceLookup(value: boolean | cdktf.IResolvable) {
    this._forceLookup = value;
  }
  public resetForceLookup() {
    this._forceLookup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceLookupInput() {
    return this._forceLookup;
  }

  // source - computed: true, optional: true, required: false
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  public resetSource() {
    this._source = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }
}
export interface OrgWlanDynamicVlan {
  /**
  * Default VLAN ID(s) can be a number, a range of VLAN IDs, a variable or multiple numbers, ranges or variables as a VLAN pool. Default VLAN as a pool of VLANS requires 0.14.x or newer firmware
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_wlan#default_vlan_ids OrgWlan#default_vlan_ids}
  */
  readonly defaultVlanIds?: string[];
  /**
  * Requires `vlan_enabled`==`true` to be set to `true`. Whether to enable dynamic vlan
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_wlan#enabled OrgWlan#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * VLAN_ids to be locally bridged
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_wlan#local_vlan_ids OrgWlan#local_vlan_ids}
  */
  readonly localVlanIds?: string[];
  /**
  * standard (using Tunnel-Private-Group-ID, widely supported), airespace-interface-name (Airespace/Cisco). enum: `airespace-interface-name`, `standard`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_wlan#type OrgWlan#type}
  */
  readonly type?: string;
  /**
  * Map between vlan_id (as string) to airespace interface names (comma-separated) or null for standard mapping
  *   * if `dynamic_vlan.type`==`standard`, property key is the Vlan ID and property value is \"\"
  *   * if `dynamic_vlan.type`==`airespace-interface-name`, property key is the Vlan ID and property value is the Airespace Interface Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_wlan#vlans OrgWlan#vlans}
  */
  readonly vlans?: { [key: string]: string };
}

export function orgWlanDynamicVlanToTerraform(struct?: OrgWlanDynamicVlan | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_vlan_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.defaultVlanIds),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    local_vlan_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.localVlanIds),
    type: cdktf.stringToTerraform(struct!.type),
    vlans: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.vlans),
  }
}


export function orgWlanDynamicVlanToHclTerraform(struct?: OrgWlanDynamicVlan | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_vlan_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.defaultVlanIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    local_vlan_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.localVlanIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vlans: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.vlans),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrgWlanDynamicVlanOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OrgWlanDynamicVlan | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultVlanIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultVlanIds = this._defaultVlanIds;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._localVlanIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.localVlanIds = this._localVlanIds;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._vlans !== undefined) {
      hasAnyValues = true;
      internalValueResult.vlans = this._vlans;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrgWlanDynamicVlan | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._defaultVlanIds = undefined;
      this._enabled = undefined;
      this._localVlanIds = undefined;
      this._type = undefined;
      this._vlans = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._defaultVlanIds = value.defaultVlanIds;
      this._enabled = value.enabled;
      this._localVlanIds = value.localVlanIds;
      this._type = value.type;
      this._vlans = value.vlans;
    }
  }

  // default_vlan_ids - computed: false, optional: true, required: false
  private _defaultVlanIds?: string[]; 
  public get defaultVlanIds() {
    return this.getListAttribute('default_vlan_ids');
  }
  public set defaultVlanIds(value: string[]) {
    this._defaultVlanIds = value;
  }
  public resetDefaultVlanIds() {
    this._defaultVlanIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultVlanIdsInput() {
    return this._defaultVlanIds;
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

  // local_vlan_ids - computed: true, optional: true, required: false
  private _localVlanIds?: string[]; 
  public get localVlanIds() {
    return this.getListAttribute('local_vlan_ids');
  }
  public set localVlanIds(value: string[]) {
    this._localVlanIds = value;
  }
  public resetLocalVlanIds() {
    this._localVlanIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localVlanIdsInput() {
    return this._localVlanIds;
  }

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // vlans - computed: false, optional: true, required: false
  private _vlans?: { [key: string]: string }; 
  public get vlans() {
    return this.getStringMapAttribute('vlans');
  }
  public set vlans(value: { [key: string]: string }) {
    this._vlans = value;
  }
  public resetVlans() {
    this._vlans = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlansInput() {
    return this._vlans;
  }
}
export interface OrgWlanHotspot20 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_wlan#domain_name OrgWlan#domain_name}
  */
  readonly domainName?: string[];
  /**
  * Whether to enable hotspot 2.0 config
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_wlan#enabled OrgWlan#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_wlan#nai_realms OrgWlan#nai_realms}
  */
  readonly naiRealms?: string[];
  /**
  * List of operators to support
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_wlan#operators OrgWlan#operators}
  */
  readonly operators?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_wlan#rcoi OrgWlan#rcoi}
  */
  readonly rcoi?: string[];
  /**
  * Venue name, default is site name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_wlan#venue_name OrgWlan#venue_name}
  */
  readonly venueName?: string;
}

export function orgWlanHotspot20ToTerraform(struct?: OrgWlanHotspot20 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    domain_name: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.domainName),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    nai_realms: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.naiRealms),
    operators: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.operators),
    rcoi: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.rcoi),
    venue_name: cdktf.stringToTerraform(struct!.venueName),
  }
}


export function orgWlanHotspot20ToHclTerraform(struct?: OrgWlanHotspot20 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    domain_name: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.domainName),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    nai_realms: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.naiRealms),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    operators: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.operators),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    rcoi: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.rcoi),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    venue_name: {
      value: cdktf.stringToHclTerraform(struct!.venueName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrgWlanHotspot20OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OrgWlanHotspot20 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._domainName !== undefined) {
      hasAnyValues = true;
      internalValueResult.domainName = this._domainName;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._naiRealms !== undefined) {
      hasAnyValues = true;
      internalValueResult.naiRealms = this._naiRealms;
    }
    if (this._operators !== undefined) {
      hasAnyValues = true;
      internalValueResult.operators = this._operators;
    }
    if (this._rcoi !== undefined) {
      hasAnyValues = true;
      internalValueResult.rcoi = this._rcoi;
    }
    if (this._venueName !== undefined) {
      hasAnyValues = true;
      internalValueResult.venueName = this._venueName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrgWlanHotspot20 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._domainName = undefined;
      this._enabled = undefined;
      this._naiRealms = undefined;
      this._operators = undefined;
      this._rcoi = undefined;
      this._venueName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._domainName = value.domainName;
      this._enabled = value.enabled;
      this._naiRealms = value.naiRealms;
      this._operators = value.operators;
      this._rcoi = value.rcoi;
      this._venueName = value.venueName;
    }
  }

  // domain_name - computed: false, optional: true, required: false
  private _domainName?: string[]; 
  public get domainName() {
    return this.getListAttribute('domain_name');
  }
  public set domainName(value: string[]) {
    this._domainName = value;
  }
  public resetDomainName() {
    this._domainName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainNameInput() {
    return this._domainName;
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

  // nai_realms - computed: false, optional: true, required: false
  private _naiRealms?: string[]; 
  public get naiRealms() {
    return this.getListAttribute('nai_realms');
  }
  public set naiRealms(value: string[]) {
    this._naiRealms = value;
  }
  public resetNaiRealms() {
    this._naiRealms = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get naiRealmsInput() {
    return this._naiRealms;
  }

  // operators - computed: false, optional: true, required: false
  private _operators?: string[]; 
  public get operators() {
    return this.getListAttribute('operators');
  }
  public set operators(value: string[]) {
    this._operators = value;
  }
  public resetOperators() {
    this._operators = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorsInput() {
    return this._operators;
  }

  // rcoi - computed: false, optional: true, required: false
  private _rcoi?: string[]; 
  public get rcoi() {
    return this.getListAttribute('rcoi');
  }
  public set rcoi(value: string[]) {
    this._rcoi = value;
  }
  public resetRcoi() {
    this._rcoi = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rcoiInput() {
    return this._rcoi;
  }

  // venue_name - computed: false, optional: true, required: false
  private _venueName?: string; 
  public get venueName() {
    return this.getStringAttribute('venue_name');
  }
  public set venueName(value: string) {
    this._venueName = value;
  }
  public resetVenueName() {
    this._venueName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get venueNameInput() {
    return this._venueName;
  }
}
export interface OrgWlanInjectDhcpOption82 {
  /**
  * Information to set in the `circuit_id` field of the DHCP Option 82. It is possible to use static string or the following variables (e.g. `{{SSID}}:{{AP_MAC}}`):
  *   * {{AP_MAC}}
  *   * {{AP_MAC_DASHED}}
  *   * {{AP_MODEL}}
  *   * {{AP_NAME}}
  *   * {{SITE_NAME}}
  *   * {{SSID}}
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_wlan#circuit_id OrgWlan#circuit_id}
  */
  readonly circuitId?: string;
  /**
  * Whether to inject option 82 when forwarding DHCP packets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_wlan#enabled OrgWlan#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function orgWlanInjectDhcpOption82ToTerraform(struct?: OrgWlanInjectDhcpOption82 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    circuit_id: cdktf.stringToTerraform(struct!.circuitId),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function orgWlanInjectDhcpOption82ToHclTerraform(struct?: OrgWlanInjectDhcpOption82 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    circuit_id: {
      value: cdktf.stringToHclTerraform(struct!.circuitId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrgWlanInjectDhcpOption82OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OrgWlanInjectDhcpOption82 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._circuitId !== undefined) {
      hasAnyValues = true;
      internalValueResult.circuitId = this._circuitId;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrgWlanInjectDhcpOption82 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._circuitId = undefined;
      this._enabled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._circuitId = value.circuitId;
      this._enabled = value.enabled;
    }
  }

  // circuit_id - computed: false, optional: true, required: false
  private _circuitId?: string; 
  public get circuitId() {
    return this.getStringAttribute('circuit_id');
  }
  public set circuitId(value: string) {
    this._circuitId = value;
  }
  public resetCircuitId() {
    this._circuitId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get circuitIdInput() {
    return this._circuitId;
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
}
export interface OrgWlanMistNac {
  /**
  * How frequently should interim accounting be reported, 60-65535. default is 0 (use one specified in Access-Accept request from Server). Very frequent messages can affect the performance of the radius server, 600 and up is recommended when enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_wlan#acct_interim_interval OrgWlan#acct_interim_interval}
  */
  readonly acctInterimInterval?: number;
  /**
  * Radius auth session retries. Following fast timers are set if `fast_dot1x_timers` knob is enabled. "retries" are set to value of `auth_servers_timeout`. "max-requests" is also set when setting `auth_servers_retries` is set to default value to 3.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_wlan#auth_servers_retries OrgWlan#auth_servers_retries}
  */
  readonly authServersRetries?: number;
  /**
  * Radius auth session timeout. Following fast timers are set if `fast_dot1x_timers` knob is enabled. "quite-period" and "transmit-period" are set to half the value of `auth_servers_timeout`. "supplicant-timeout" is also set when setting `auth_servers_timeout` is set to default value of 10.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_wlan#auth_servers_timeout OrgWlan#auth_servers_timeout}
  */
  readonly authServersTimeout?: number;
  /**
  * Allows a RADIUS server to dynamically modify the authorization status of a user session.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_wlan#coa_enabled OrgWlan#coa_enabled}
  */
  readonly coaEnabled?: boolean | cdktf.IResolvable;
  /**
  * the communication port used for “Change of Authorization” (CoA) messages
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_wlan#coa_port OrgWlan#coa_port}
  */
  readonly coaPort?: number;
  /**
  * When enabled:
  *   * `auth_servers` is ignored
  *   * `acct_servers` is ignored
  *   * `auth_servers_*` are ignored
  *   * `coa_servers` is ignored
  *   * `radsec` is ignored
  *   * `coa_enabled` is assumed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_wlan#enabled OrgWlan#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * If set to true, sets default fast-timers with values calculated from `auth_servers_timeout` and `auth_server_retries`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_wlan#fast_dot1x_timers OrgWlan#fast_dot1x_timers}
  */
  readonly fastDot1XTimers?: boolean | cdktf.IResolvable;
  /**
  * Which network the mist nac server resides in
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_wlan#network OrgWlan#network}
  */
  readonly network?: string;
  /**
  * In case there is a static IP for this network, we can specify it using source ip
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_wlan#source_ip OrgWlan#source_ip}
  */
  readonly sourceIp?: string;
}

export function orgWlanMistNacToTerraform(struct?: OrgWlanMistNac | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    acct_interim_interval: cdktf.numberToTerraform(struct!.acctInterimInterval),
    auth_servers_retries: cdktf.numberToTerraform(struct!.authServersRetries),
    auth_servers_timeout: cdktf.numberToTerraform(struct!.authServersTimeout),
    coa_enabled: cdktf.booleanToTerraform(struct!.coaEnabled),
    coa_port: cdktf.numberToTerraform(struct!.coaPort),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    fast_dot1x_timers: cdktf.booleanToTerraform(struct!.fastDot1XTimers),
    network: cdktf.stringToTerraform(struct!.network),
    source_ip: cdktf.stringToTerraform(struct!.sourceIp),
  }
}


export function orgWlanMistNacToHclTerraform(struct?: OrgWlanMistNac | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    acct_interim_interval: {
      value: cdktf.numberToHclTerraform(struct!.acctInterimInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    auth_servers_retries: {
      value: cdktf.numberToHclTerraform(struct!.authServersRetries),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    auth_servers_timeout: {
      value: cdktf.numberToHclTerraform(struct!.authServersTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    coa_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.coaEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    coa_port: {
      value: cdktf.numberToHclTerraform(struct!.coaPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    fast_dot1x_timers: {
      value: cdktf.booleanToHclTerraform(struct!.fastDot1XTimers),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    network: {
      value: cdktf.stringToHclTerraform(struct!.network),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_ip: {
      value: cdktf.stringToHclTerraform(struct!.sourceIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrgWlanMistNacOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OrgWlanMistNac | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._acctInterimInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.acctInterimInterval = this._acctInterimInterval;
    }
    if (this._authServersRetries !== undefined) {
      hasAnyValues = true;
      internalValueResult.authServersRetries = this._authServersRetries;
    }
    if (this._authServersTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.authServersTimeout = this._authServersTimeout;
    }
    if (this._coaEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.coaEnabled = this._coaEnabled;
    }
    if (this._coaPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.coaPort = this._coaPort;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._fastDot1XTimers !== undefined) {
      hasAnyValues = true;
      internalValueResult.fastDot1XTimers = this._fastDot1XTimers;
    }
    if (this._network !== undefined) {
      hasAnyValues = true;
      internalValueResult.network = this._network;
    }
    if (this._sourceIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceIp = this._sourceIp;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrgWlanMistNac | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._acctInterimInterval = undefined;
      this._authServersRetries = undefined;
      this._authServersTimeout = undefined;
      this._coaEnabled = undefined;
      this._coaPort = undefined;
      this._enabled = undefined;
      this._fastDot1XTimers = undefined;
      this._network = undefined;
      this._sourceIp = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._acctInterimInterval = value.acctInterimInterval;
      this._authServersRetries = value.authServersRetries;
      this._authServersTimeout = value.authServersTimeout;
      this._coaEnabled = value.coaEnabled;
      this._coaPort = value.coaPort;
      this._enabled = value.enabled;
      this._fastDot1XTimers = value.fastDot1XTimers;
      this._network = value.network;
      this._sourceIp = value.sourceIp;
    }
  }

  // acct_interim_interval - computed: true, optional: true, required: false
  private _acctInterimInterval?: number; 
  public get acctInterimInterval() {
    return this.getNumberAttribute('acct_interim_interval');
  }
  public set acctInterimInterval(value: number) {
    this._acctInterimInterval = value;
  }
  public resetAcctInterimInterval() {
    this._acctInterimInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acctInterimIntervalInput() {
    return this._acctInterimInterval;
  }

  // auth_servers_retries - computed: true, optional: true, required: false
  private _authServersRetries?: number; 
  public get authServersRetries() {
    return this.getNumberAttribute('auth_servers_retries');
  }
  public set authServersRetries(value: number) {
    this._authServersRetries = value;
  }
  public resetAuthServersRetries() {
    this._authServersRetries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authServersRetriesInput() {
    return this._authServersRetries;
  }

  // auth_servers_timeout - computed: true, optional: true, required: false
  private _authServersTimeout?: number; 
  public get authServersTimeout() {
    return this.getNumberAttribute('auth_servers_timeout');
  }
  public set authServersTimeout(value: number) {
    this._authServersTimeout = value;
  }
  public resetAuthServersTimeout() {
    this._authServersTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authServersTimeoutInput() {
    return this._authServersTimeout;
  }

  // coa_enabled - computed: true, optional: true, required: false
  private _coaEnabled?: boolean | cdktf.IResolvable; 
  public get coaEnabled() {
    return this.getBooleanAttribute('coa_enabled');
  }
  public set coaEnabled(value: boolean | cdktf.IResolvable) {
    this._coaEnabled = value;
  }
  public resetCoaEnabled() {
    this._coaEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get coaEnabledInput() {
    return this._coaEnabled;
  }

  // coa_port - computed: true, optional: true, required: false
  private _coaPort?: number; 
  public get coaPort() {
    return this.getNumberAttribute('coa_port');
  }
  public set coaPort(value: number) {
    this._coaPort = value;
  }
  public resetCoaPort() {
    this._coaPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get coaPortInput() {
    return this._coaPort;
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

  // fast_dot1x_timers - computed: true, optional: true, required: false
  private _fastDot1XTimers?: boolean | cdktf.IResolvable; 
  public get fastDot1XTimers() {
    return this.getBooleanAttribute('fast_dot1x_timers');
  }
  public set fastDot1XTimers(value: boolean | cdktf.IResolvable) {
    this._fastDot1XTimers = value;
  }
  public resetFastDot1XTimers() {
    this._fastDot1XTimers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fastDot1XTimersInput() {
    return this._fastDot1XTimers;
  }

  // network - computed: true, optional: true, required: false
  private _network?: string; 
  public get network() {
    return this.getStringAttribute('network');
  }
  public set network(value: string) {
    this._network = value;
  }
  public resetNetwork() {
    this._network = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network;
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
}
export interface OrgWlanPortal {
  /**
  * Optional if `amazon_enabled`==`true`. Whether to allow guest to connect to other Guest WLANs (with different `WLAN.ssid`) of same org without reauthentication (disable random_mac for seamless roaming)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_wlan#allow_wlan_id_roam OrgWlan#allow_wlan_id_roam}
  */
  readonly allowWlanIdRoam?: boolean | cdktf.IResolvable;
  /**
  * Optional if `amazon_enabled`==`true`. Amazon OAuth2 client id. This is optional. If not provided, it will use a default one.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_wlan#amazon_client_id OrgWlan#amazon_client_id}
  */
  readonly amazonClientId?: string;
  /**
  * Optional if `amazon_enabled`==`true`. Amazon OAuth2 client secret. If amazon_client_id was provided, provide a corresponding value. Else leave blank.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_wlan#amazon_client_secret OrgWlan#amazon_client_secret}
  */
  readonly amazonClientSecret?: string;
  /**
  * Optional if `amazon_enabled`==`true`. Matches authenticated user email against provided domains. If null or [], all authenticated emails will be allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_wlan#amazon_email_domains OrgWlan#amazon_email_domains}
  */
  readonly amazonEmailDomains?: string[];
  /**
  * Whether amazon is enabled as a login method
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_wlan#amazon_enabled OrgWlan#amazon_enabled}
  */
  readonly amazonEnabled?: boolean | cdktf.IResolvable;
  /**
  * Optional if `amazon_enabled`==`true`. Interval for which guest remains authorized using amazon auth (in minutes), if not provided, uses expire`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_wlan#amazon_expire OrgWlan#amazon_expire}
  */
  readonly amazonExpire?: number;
  /**
  * authentication scheme. enum: `amazon`, `azure`, `email`, `external`, `facebook`, `google`, `microsoft`, `multi`, `none`, `password`, `sms`, `sponsor`, `sso`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_wlan#auth OrgWlan#auth}
  */
  readonly auth?: string;
  /**
  * Required if `azure_enabled`==`true`. Azure active directory app client id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_wlan#azure_client_id OrgWlan#azure_client_id}
  */
  readonly azureClientId?: string;
  /**
  * Required if `azure_enabled`==`true`. Azure active directory app client secret
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_wlan#azure_client_secret OrgWlan#azure_client_secret}
  */
  readonly azureClientSecret?: string;
  /**
  * Whether Azure Active Directory is enabled as a login method
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_wlan#azure_enabled OrgWlan#azure_enabled}
  */
  readonly azureEnabled?: boolean | cdktf.IResolvable;
  /**
  * Interval for which guest remains authorized using azure auth (in minutes), if not provided, uses expire`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_wlan#azure_expire OrgWlan#azure_expire}
  */
  readonly azureExpire?: number;
  /**
  * Required if `azure_enabled`==`true`. Azure active directory tenant id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_wlan#azure_tenant_id OrgWlan#azure_tenant_id}
  */
  readonly azureTenantId?: string;
  /**
  * Required if `sms_provider`==`broadnet`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_wlan#broadnet_password OrgWlan#broadnet_password}
  */
  readonly broadnetPassword?: string;
  /**
  * Required if `sms_provider`==`broadnet`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_wlan#broadnet_sid OrgWlan#broadnet_sid}
  */
  readonly broadnetSid?: string;
  /**
  * Required if `sms_provider`==`broadnet`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_wlan#broadnet_user_id OrgWlan#broadnet_user_id}
  */
  readonly broadnetUserId?: string;
  /**
  * Whether to bypass the guest portal when cloud not reachable (and apply the default policies)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_wlan#bypass_when_cloud_down OrgWlan#bypass_when_cloud_down}
  */
  readonly bypassWhenCloudDown?: boolean | cdktf.IResolvable;
  /**
  * Required if `sms_provider`==`clickatell`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_wlan#clickatell_api_key OrgWlan#clickatell_api_key}
  */
  readonly clickatellApiKey?: string;
  /**
  * Whether to allow guest to roam between WLANs (with same `WLAN.ssid`, regardless of variables) of different sites of same org without reauthentication (disable random_mac for seamless roaming)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_wlan#cross_site OrgWlan#cross_site}
  */
  readonly crossSite?: boolean | cdktf.IResolvable;
  /**
  * Whether email (access code verification) is enabled as a login method
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_wlan#email_enabled OrgWlan#email_enabled}
  */
  readonly emailEnabled?: boolean | cdktf.IResolvable;
  /**
  * Whether guest portal is enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_wlan#enabled OrgWlan#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * How long to remain authorized, in minutes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_wlan#expire OrgWlan#expire}
  */
  readonly expire?: number;
  /**
  * Required if `wlan_portal_auth`==`external`. External portal URL (e.g. https://host/url) where we can append our query parameters to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_wlan#external_portal_url OrgWlan#external_portal_url}
  */
  readonly externalPortalUrl?: string;
  /**
  * Required if `facebook_enabled`==`true`. Facebook OAuth2 app id. This is optional. If not provided, it will use a default one.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_wlan#facebook_client_id OrgWlan#facebook_client_id}
  */
  readonly facebookClientId?: string;
  /**
  * Required if `facebook_enabled`==`true`. Facebook OAuth2 app secret. If facebook_client_id was provided, provide a corresponding value. Else leave blank.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_wlan#facebook_client_secret OrgWlan#facebook_client_secret}
  */
  readonly facebookClientSecret?: string;
  /**
  * Optional if `facebook_enabled`==`true`. Matches authenticated user email against provided domains. If null or [], all authenticated emails will be allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_wlan#facebook_email_domains OrgWlan#facebook_email_domains}
  */
  readonly facebookEmailDomains?: string[];
  /**
  * Whether facebook is enabled as a login method
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_wlan#facebook_enabled OrgWlan#facebook_enabled}
  */
  readonly facebookEnabled?: boolean | cdktf.IResolvable;
  /**
  * Optional if `facebook_enabled`==`true`. Interval for which guest remains authorized using facebook auth (in minutes), if not provided, uses expire`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_wlan#facebook_expire OrgWlan#facebook_expire}
  */
  readonly facebookExpire?: number;
  /**
  * Whether to forward the user to another URL after authorized
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_wlan#forward OrgWlan#forward}
  */
  readonly forward?: boolean | cdktf.IResolvable;
  /**
  * URL to forward the user to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_wlan#forward_url OrgWlan#forward_url}
  */
  readonly forwardUrl?: string;
  /**
  * Google OAuth2 app id. This is optional. If not provided, it will use a default one.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_wlan#google_client_id OrgWlan#google_client_id}
  */
  readonly googleClientId?: string;
  /**
  * Optional if `google_enabled`==`true`. Google OAuth2 app secret. If google_client_id was provided, provide a corresponding value. Else leave blank.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_wlan#google_client_secret OrgWlan#google_client_secret}
  */
  readonly googleClientSecret?: string;
  /**
  * Optional if `google_enabled`==`true`. Matches authenticated user email against provided domains. If null or [], all authenticated emails will be allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_wlan#google_email_domains OrgWlan#google_email_domains}
  */
  readonly googleEmailDomains?: string[];
  /**
  * Whether Google is enabled as login method
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_wlan#google_enabled OrgWlan#google_enabled}
  */
  readonly googleEnabled?: boolean | cdktf.IResolvable;
  /**
  * Optional if `google_enabled`==`true`. Interval for which guest remains authorized using Google Auth (in minutes), if not provided, uses expire`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_wlan#google_expire OrgWlan#google_expire}
  */
  readonly googleExpire?: number;
  /**
  * Required if `sms_provider`==`gupshup`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_wlan#gupshup_password OrgWlan#gupshup_password}
  */
  readonly gupshupPassword?: string;
  /**
  * Required if `sms_provider`==`gupshup`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_wlan#gupshup_userid OrgWlan#gupshup_userid}
  */
  readonly gupshupUserid?: string;
  /**
  * Optional if `microsoft_enabled`==`true`. Microsoft 365 OAuth2 client id. This is optional. If not provided, it will use a default one.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_wlan#microsoft_client_id OrgWlan#microsoft_client_id}
  */
  readonly microsoftClientId?: string;
  /**
  * Optional if `microsoft_enabled`==`true`. Microsoft 365 OAuth2 client secret. If microsoft_client_id was provided, provide a corresponding value. Else leave blank.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_wlan#microsoft_client_secret OrgWlan#microsoft_client_secret}
  */
  readonly microsoftClientSecret?: string;
  /**
  * Optional if `microsoft_enabled`==`true`. Matches authenticated user email against provided domains. If null or [], all authenticated emails will be allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_wlan#microsoft_email_domains OrgWlan#microsoft_email_domains}
  */
  readonly microsoftEmailDomains?: string[];
  /**
  * Whether microsoft 365 is enabled as a login method
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_wlan#microsoft_enabled OrgWlan#microsoft_enabled}
  */
  readonly microsoftEnabled?: boolean | cdktf.IResolvable;
  /**
  * Optional if `microsoft_enabled`==`true`. Interval for which guest remains authorized using microsoft auth (in minutes), if not provided, uses expire`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_wlan#microsoft_expire OrgWlan#microsoft_expire}
  */
  readonly microsoftExpire?: number;
  /**
  * Whether password is enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_wlan#passphrase_enabled OrgWlan#passphrase_enabled}
  */
  readonly passphraseEnabled?: boolean | cdktf.IResolvable;
  /**
  * Optional if `passphrase_enabled`==`true`. Interval for which guest remains authorized using passphrase auth (in minutes), if not provided, uses `expire`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_wlan#passphrase_expire OrgWlan#passphrase_expire}
  */
  readonly passphraseExpire?: number;
  /**
  * Required if `passphrase_enabled`==`true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_wlan#password OrgWlan#password}
  */
  readonly password?: string;
  /**
  * Whether to show list of sponsor emails mentioned in `sponsors` object as a dropdown. If both `sponsor_notify_all` and `predefined_sponsors_enabled` are false, behavior is acc to `sponsor_email_domains`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_wlan#predefined_sponsors_enabled OrgWlan#predefined_sponsors_enabled}
  */
  readonly predefinedSponsorsEnabled?: boolean | cdktf.IResolvable;
  /**
  * Whether to hide sponsor’s email from list of sponsors
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_wlan#predefined_sponsors_hide_email OrgWlan#predefined_sponsors_hide_email}
  */
  readonly predefinedSponsorsHideEmail?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_wlan#privacy OrgWlan#privacy}
  */
  readonly privacy?: boolean | cdktf.IResolvable;
  /**
  * Required if `sms_provider`==`puzzel`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_wlan#puzzel_password OrgWlan#puzzel_password}
  */
  readonly puzzelPassword?: string;
  /**
  * Required if `sms_provider`==`puzzel`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_wlan#puzzel_service_id OrgWlan#puzzel_service_id}
  */
  readonly puzzelServiceId?: string;
  /**
  * Required if `sms_provider`==`puzzel`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_wlan#puzzel_username OrgWlan#puzzel_username}
  */
  readonly puzzelUsername?: string;
  /**
  * Whether sms is enabled as a login method
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_wlan#sms_enabled OrgWlan#sms_enabled}
  */
  readonly smsEnabled?: boolean | cdktf.IResolvable;
  /**
  * Optional if `sms_enabled`==`true`. Interval for which guest remains authorized using sms auth (in minutes), if not provided, uses expire`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_wlan#sms_expire OrgWlan#sms_expire}
  */
  readonly smsExpire?: number;
  /**
  * Optional if `sms_enabled`==`true`. SMS Message format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_wlan#sms_message_format OrgWlan#sms_message_format}
  */
  readonly smsMessageFormat?: string;
  /**
  * Optional if `sms_enabled`==`true`. enum: `broadnet`, `clickatell`, `gupshup`, `manual`, `puzzel`, `smsglobal`, `telstra`, `twilio`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_wlan#sms_provider OrgWlan#sms_provider}
  */
  readonly smsProvider?: string;
  /**
  * Required if `sms_provider`==`smsglobal`, Client API Key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_wlan#smsglobal_api_key OrgWlan#smsglobal_api_key}
  */
  readonly smsglobalApiKey?: string;
  /**
  * Required if `sms_provider`==`smsglobal`, Client secret
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_wlan#smsglobal_api_secret OrgWlan#smsglobal_api_secret}
  */
  readonly smsglobalApiSecret?: string;
  /**
  * Optional if `sponsor_enabled`==`true`. Whether to automatically approve guest and allow sponsor to revoke guest access, needs predefined_sponsors_enabled enabled and sponsor_notify_all disabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_wlan#sponsor_auto_approve OrgWlan#sponsor_auto_approve}
  */
  readonly sponsorAutoApprove?: boolean | cdktf.IResolvable;
  /**
  * List of domain allowed for sponsor email. Required if `sponsor_enabled` is `true` and `sponsors` is empty.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_wlan#sponsor_email_domains OrgWlan#sponsor_email_domains}
  */
  readonly sponsorEmailDomains?: string[];
  /**
  * Whether sponsor is enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_wlan#sponsor_enabled OrgWlan#sponsor_enabled}
  */
  readonly sponsorEnabled?: boolean | cdktf.IResolvable;
  /**
  * Optional if `sponsor_enabled`==`true`. Interval for which guest remains authorized using sponsor auth (in minutes), if not provided, uses expire`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_wlan#sponsor_expire OrgWlan#sponsor_expire}
  */
  readonly sponsorExpire?: number;
  /**
  * Optional if `sponsor_enabled`==`true`. How long to remain valid sponsored guest request approve/deny link received in email, in minutes. Default is 60 minutes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_wlan#sponsor_link_validity_duration OrgWlan#sponsor_link_validity_duration}
  */
  readonly sponsorLinkValidityDuration?: string;
  /**
  * Optional if `sponsor_enabled`==`true`. whether to notify all sponsors that are mentioned in `sponsors` object. Both `sponsor_notify_all` and `predefined_sponsors_enabled` should be true in order to notify sponsors. If true, email sent to 10 sponsors in no particular order.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_wlan#sponsor_notify_all OrgWlan#sponsor_notify_all}
  */
  readonly sponsorNotifyAll?: boolean | cdktf.IResolvable;
  /**
  * Optional if `sponsor_enabled`==`true`. If enabled, guest will get email about sponsor's action (approve/deny)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_wlan#sponsor_status_notify OrgWlan#sponsor_status_notify}
  */
  readonly sponsorStatusNotify?: boolean | cdktf.IResolvable;
  /**
  * object of allowed sponsors email with name. Required if `sponsor_enabled`
  *             is `true` and `sponsor_email_domains` is empty.
  * 
  *             Property key is the sponsor email, Property value is the sponsor name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_wlan#sponsors OrgWlan#sponsors}
  */
  readonly sponsors?: { [key: string]: string };
  /**
  * Optional if `wlan_portal_auth`==`sso`, default role to assign if there’s no match. By default, an assertion is treated as invalid when there’s no role matched
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_wlan#sso_default_role OrgWlan#sso_default_role}
  */
  readonly ssoDefaultRole?: string;
  /**
  * Optional if `wlan_portal_auth`==`sso`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_wlan#sso_forced_role OrgWlan#sso_forced_role}
  */
  readonly ssoForcedRole?: string;
  /**
  * Required if `wlan_portal_auth`==`sso`. IDP Cert (used to verify the signed response)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_wlan#sso_idp_cert OrgWlan#sso_idp_cert}
  */
  readonly ssoIdpCert?: string;
  /**
  * Optional if `wlan_portal_auth`==`sso`, Signing algorithm for SAML Assertion. enum: `sha1`, `sha256`, `sha384`, `sha512`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_wlan#sso_idp_sign_algo OrgWlan#sso_idp_sign_algo}
  */
  readonly ssoIdpSignAlgo?: string;
  /**
  * Required if `wlan_portal_auth`==`sso`, IDP Single-Sign-On URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_wlan#sso_idp_sso_url OrgWlan#sso_idp_sso_url}
  */
  readonly ssoIdpSsoUrl?: string;
  /**
  * Required if `wlan_portal_auth`==`sso`, IDP issuer URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_wlan#sso_issuer OrgWlan#sso_issuer}
  */
  readonly ssoIssuer?: string;
  /**
  * Optional if `wlan_portal_auth`==`sso`. enum: `email`, `unspecified`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_wlan#sso_nameid_format OrgWlan#sso_nameid_format}
  */
  readonly ssoNameidFormat?: string;
  /**
  * Required if `sms_provider`==`telstra`, Client ID provided by Telstra
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_wlan#telstra_client_id OrgWlan#telstra_client_id}
  */
  readonly telstraClientId?: string;
  /**
  * Required if `sms_provider`==`telstra`, Client secret provided by Telstra
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_wlan#telstra_client_secret OrgWlan#telstra_client_secret}
  */
  readonly telstraClientSecret?: string;
  /**
  * Required if `sms_provider`==`twilio`, Auth token account with twilio account
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_wlan#twilio_auth_token OrgWlan#twilio_auth_token}
  */
  readonly twilioAuthToken?: string;
  /**
  * Required if `sms_provider`==`twilio`, Twilio phone number associated with the account. See example for accepted format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_wlan#twilio_phone_number OrgWlan#twilio_phone_number}
  */
  readonly twilioPhoneNumber?: string;
  /**
  * Required if `sms_provider`==`twilio`, Account SID provided by Twilio
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_wlan#twilio_sid OrgWlan#twilio_sid}
  */
  readonly twilioSid?: string;
}

export function orgWlanPortalToTerraform(struct?: OrgWlanPortal | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_wlan_id_roam: cdktf.booleanToTerraform(struct!.allowWlanIdRoam),
    amazon_client_id: cdktf.stringToTerraform(struct!.amazonClientId),
    amazon_client_secret: cdktf.stringToTerraform(struct!.amazonClientSecret),
    amazon_email_domains: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.amazonEmailDomains),
    amazon_enabled: cdktf.booleanToTerraform(struct!.amazonEnabled),
    amazon_expire: cdktf.numberToTerraform(struct!.amazonExpire),
    auth: cdktf.stringToTerraform(struct!.auth),
    azure_client_id: cdktf.stringToTerraform(struct!.azureClientId),
    azure_client_secret: cdktf.stringToTerraform(struct!.azureClientSecret),
    azure_enabled: cdktf.booleanToTerraform(struct!.azureEnabled),
    azure_expire: cdktf.numberToTerraform(struct!.azureExpire),
    azure_tenant_id: cdktf.stringToTerraform(struct!.azureTenantId),
    broadnet_password: cdktf.stringToTerraform(struct!.broadnetPassword),
    broadnet_sid: cdktf.stringToTerraform(struct!.broadnetSid),
    broadnet_user_id: cdktf.stringToTerraform(struct!.broadnetUserId),
    bypass_when_cloud_down: cdktf.booleanToTerraform(struct!.bypassWhenCloudDown),
    clickatell_api_key: cdktf.stringToTerraform(struct!.clickatellApiKey),
    cross_site: cdktf.booleanToTerraform(struct!.crossSite),
    email_enabled: cdktf.booleanToTerraform(struct!.emailEnabled),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    expire: cdktf.numberToTerraform(struct!.expire),
    external_portal_url: cdktf.stringToTerraform(struct!.externalPortalUrl),
    facebook_client_id: cdktf.stringToTerraform(struct!.facebookClientId),
    facebook_client_secret: cdktf.stringToTerraform(struct!.facebookClientSecret),
    facebook_email_domains: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.facebookEmailDomains),
    facebook_enabled: cdktf.booleanToTerraform(struct!.facebookEnabled),
    facebook_expire: cdktf.numberToTerraform(struct!.facebookExpire),
    forward: cdktf.booleanToTerraform(struct!.forward),
    forward_url: cdktf.stringToTerraform(struct!.forwardUrl),
    google_client_id: cdktf.stringToTerraform(struct!.googleClientId),
    google_client_secret: cdktf.stringToTerraform(struct!.googleClientSecret),
    google_email_domains: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.googleEmailDomains),
    google_enabled: cdktf.booleanToTerraform(struct!.googleEnabled),
    google_expire: cdktf.numberToTerraform(struct!.googleExpire),
    gupshup_password: cdktf.stringToTerraform(struct!.gupshupPassword),
    gupshup_userid: cdktf.stringToTerraform(struct!.gupshupUserid),
    microsoft_client_id: cdktf.stringToTerraform(struct!.microsoftClientId),
    microsoft_client_secret: cdktf.stringToTerraform(struct!.microsoftClientSecret),
    microsoft_email_domains: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.microsoftEmailDomains),
    microsoft_enabled: cdktf.booleanToTerraform(struct!.microsoftEnabled),
    microsoft_expire: cdktf.numberToTerraform(struct!.microsoftExpire),
    passphrase_enabled: cdktf.booleanToTerraform(struct!.passphraseEnabled),
    passphrase_expire: cdktf.numberToTerraform(struct!.passphraseExpire),
    password: cdktf.stringToTerraform(struct!.password),
    predefined_sponsors_enabled: cdktf.booleanToTerraform(struct!.predefinedSponsorsEnabled),
    predefined_sponsors_hide_email: cdktf.booleanToTerraform(struct!.predefinedSponsorsHideEmail),
    privacy: cdktf.booleanToTerraform(struct!.privacy),
    puzzel_password: cdktf.stringToTerraform(struct!.puzzelPassword),
    puzzel_service_id: cdktf.stringToTerraform(struct!.puzzelServiceId),
    puzzel_username: cdktf.stringToTerraform(struct!.puzzelUsername),
    sms_enabled: cdktf.booleanToTerraform(struct!.smsEnabled),
    sms_expire: cdktf.numberToTerraform(struct!.smsExpire),
    sms_message_format: cdktf.stringToTerraform(struct!.smsMessageFormat),
    sms_provider: cdktf.stringToTerraform(struct!.smsProvider),
    smsglobal_api_key: cdktf.stringToTerraform(struct!.smsglobalApiKey),
    smsglobal_api_secret: cdktf.stringToTerraform(struct!.smsglobalApiSecret),
    sponsor_auto_approve: cdktf.booleanToTerraform(struct!.sponsorAutoApprove),
    sponsor_email_domains: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sponsorEmailDomains),
    sponsor_enabled: cdktf.booleanToTerraform(struct!.sponsorEnabled),
    sponsor_expire: cdktf.numberToTerraform(struct!.sponsorExpire),
    sponsor_link_validity_duration: cdktf.stringToTerraform(struct!.sponsorLinkValidityDuration),
    sponsor_notify_all: cdktf.booleanToTerraform(struct!.sponsorNotifyAll),
    sponsor_status_notify: cdktf.booleanToTerraform(struct!.sponsorStatusNotify),
    sponsors: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.sponsors),
    sso_default_role: cdktf.stringToTerraform(struct!.ssoDefaultRole),
    sso_forced_role: cdktf.stringToTerraform(struct!.ssoForcedRole),
    sso_idp_cert: cdktf.stringToTerraform(struct!.ssoIdpCert),
    sso_idp_sign_algo: cdktf.stringToTerraform(struct!.ssoIdpSignAlgo),
    sso_idp_sso_url: cdktf.stringToTerraform(struct!.ssoIdpSsoUrl),
    sso_issuer: cdktf.stringToTerraform(struct!.ssoIssuer),
    sso_nameid_format: cdktf.stringToTerraform(struct!.ssoNameidFormat),
    telstra_client_id: cdktf.stringToTerraform(struct!.telstraClientId),
    telstra_client_secret: cdktf.stringToTerraform(struct!.telstraClientSecret),
    twilio_auth_token: cdktf.stringToTerraform(struct!.twilioAuthToken),
    twilio_phone_number: cdktf.stringToTerraform(struct!.twilioPhoneNumber),
    twilio_sid: cdktf.stringToTerraform(struct!.twilioSid),
  }
}


export function orgWlanPortalToHclTerraform(struct?: OrgWlanPortal | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_wlan_id_roam: {
      value: cdktf.booleanToHclTerraform(struct!.allowWlanIdRoam),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    amazon_client_id: {
      value: cdktf.stringToHclTerraform(struct!.amazonClientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    amazon_client_secret: {
      value: cdktf.stringToHclTerraform(struct!.amazonClientSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    amazon_email_domains: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.amazonEmailDomains),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    amazon_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.amazonEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    amazon_expire: {
      value: cdktf.numberToHclTerraform(struct!.amazonExpire),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    auth: {
      value: cdktf.stringToHclTerraform(struct!.auth),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    azure_client_id: {
      value: cdktf.stringToHclTerraform(struct!.azureClientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    azure_client_secret: {
      value: cdktf.stringToHclTerraform(struct!.azureClientSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    azure_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.azureEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    azure_expire: {
      value: cdktf.numberToHclTerraform(struct!.azureExpire),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    azure_tenant_id: {
      value: cdktf.stringToHclTerraform(struct!.azureTenantId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    broadnet_password: {
      value: cdktf.stringToHclTerraform(struct!.broadnetPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    broadnet_sid: {
      value: cdktf.stringToHclTerraform(struct!.broadnetSid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    broadnet_user_id: {
      value: cdktf.stringToHclTerraform(struct!.broadnetUserId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bypass_when_cloud_down: {
      value: cdktf.booleanToHclTerraform(struct!.bypassWhenCloudDown),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    clickatell_api_key: {
      value: cdktf.stringToHclTerraform(struct!.clickatellApiKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cross_site: {
      value: cdktf.booleanToHclTerraform(struct!.crossSite),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    email_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.emailEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    expire: {
      value: cdktf.numberToHclTerraform(struct!.expire),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    external_portal_url: {
      value: cdktf.stringToHclTerraform(struct!.externalPortalUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    facebook_client_id: {
      value: cdktf.stringToHclTerraform(struct!.facebookClientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    facebook_client_secret: {
      value: cdktf.stringToHclTerraform(struct!.facebookClientSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    facebook_email_domains: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.facebookEmailDomains),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    facebook_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.facebookEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    facebook_expire: {
      value: cdktf.numberToHclTerraform(struct!.facebookExpire),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    forward: {
      value: cdktf.booleanToHclTerraform(struct!.forward),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    forward_url: {
      value: cdktf.stringToHclTerraform(struct!.forwardUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    google_client_id: {
      value: cdktf.stringToHclTerraform(struct!.googleClientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    google_client_secret: {
      value: cdktf.stringToHclTerraform(struct!.googleClientSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    google_email_domains: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.googleEmailDomains),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    google_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.googleEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    google_expire: {
      value: cdktf.numberToHclTerraform(struct!.googleExpire),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gupshup_password: {
      value: cdktf.stringToHclTerraform(struct!.gupshupPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gupshup_userid: {
      value: cdktf.stringToHclTerraform(struct!.gupshupUserid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    microsoft_client_id: {
      value: cdktf.stringToHclTerraform(struct!.microsoftClientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    microsoft_client_secret: {
      value: cdktf.stringToHclTerraform(struct!.microsoftClientSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    microsoft_email_domains: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.microsoftEmailDomains),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    microsoft_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.microsoftEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    microsoft_expire: {
      value: cdktf.numberToHclTerraform(struct!.microsoftExpire),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    passphrase_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.passphraseEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    passphrase_expire: {
      value: cdktf.numberToHclTerraform(struct!.passphraseExpire),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    predefined_sponsors_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.predefinedSponsorsEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    predefined_sponsors_hide_email: {
      value: cdktf.booleanToHclTerraform(struct!.predefinedSponsorsHideEmail),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    privacy: {
      value: cdktf.booleanToHclTerraform(struct!.privacy),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    puzzel_password: {
      value: cdktf.stringToHclTerraform(struct!.puzzelPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    puzzel_service_id: {
      value: cdktf.stringToHclTerraform(struct!.puzzelServiceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    puzzel_username: {
      value: cdktf.stringToHclTerraform(struct!.puzzelUsername),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sms_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.smsEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    sms_expire: {
      value: cdktf.numberToHclTerraform(struct!.smsExpire),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sms_message_format: {
      value: cdktf.stringToHclTerraform(struct!.smsMessageFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sms_provider: {
      value: cdktf.stringToHclTerraform(struct!.smsProvider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    smsglobal_api_key: {
      value: cdktf.stringToHclTerraform(struct!.smsglobalApiKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    smsglobal_api_secret: {
      value: cdktf.stringToHclTerraform(struct!.smsglobalApiSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sponsor_auto_approve: {
      value: cdktf.booleanToHclTerraform(struct!.sponsorAutoApprove),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    sponsor_email_domains: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sponsorEmailDomains),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    sponsor_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.sponsorEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    sponsor_expire: {
      value: cdktf.numberToHclTerraform(struct!.sponsorExpire),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sponsor_link_validity_duration: {
      value: cdktf.stringToHclTerraform(struct!.sponsorLinkValidityDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sponsor_notify_all: {
      value: cdktf.booleanToHclTerraform(struct!.sponsorNotifyAll),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    sponsor_status_notify: {
      value: cdktf.booleanToHclTerraform(struct!.sponsorStatusNotify),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    sponsors: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.sponsors),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    sso_default_role: {
      value: cdktf.stringToHclTerraform(struct!.ssoDefaultRole),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sso_forced_role: {
      value: cdktf.stringToHclTerraform(struct!.ssoForcedRole),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sso_idp_cert: {
      value: cdktf.stringToHclTerraform(struct!.ssoIdpCert),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sso_idp_sign_algo: {
      value: cdktf.stringToHclTerraform(struct!.ssoIdpSignAlgo),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sso_idp_sso_url: {
      value: cdktf.stringToHclTerraform(struct!.ssoIdpSsoUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sso_issuer: {
      value: cdktf.stringToHclTerraform(struct!.ssoIssuer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sso_nameid_format: {
      value: cdktf.stringToHclTerraform(struct!.ssoNameidFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    telstra_client_id: {
      value: cdktf.stringToHclTerraform(struct!.telstraClientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    telstra_client_secret: {
      value: cdktf.stringToHclTerraform(struct!.telstraClientSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    twilio_auth_token: {
      value: cdktf.stringToHclTerraform(struct!.twilioAuthToken),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    twilio_phone_number: {
      value: cdktf.stringToHclTerraform(struct!.twilioPhoneNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    twilio_sid: {
      value: cdktf.stringToHclTerraform(struct!.twilioSid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrgWlanPortalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OrgWlanPortal | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowWlanIdRoam !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowWlanIdRoam = this._allowWlanIdRoam;
    }
    if (this._amazonClientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.amazonClientId = this._amazonClientId;
    }
    if (this._amazonClientSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.amazonClientSecret = this._amazonClientSecret;
    }
    if (this._amazonEmailDomains !== undefined) {
      hasAnyValues = true;
      internalValueResult.amazonEmailDomains = this._amazonEmailDomains;
    }
    if (this._amazonEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.amazonEnabled = this._amazonEnabled;
    }
    if (this._amazonExpire !== undefined) {
      hasAnyValues = true;
      internalValueResult.amazonExpire = this._amazonExpire;
    }
    if (this._auth !== undefined) {
      hasAnyValues = true;
      internalValueResult.auth = this._auth;
    }
    if (this._azureClientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureClientId = this._azureClientId;
    }
    if (this._azureClientSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureClientSecret = this._azureClientSecret;
    }
    if (this._azureEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureEnabled = this._azureEnabled;
    }
    if (this._azureExpire !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureExpire = this._azureExpire;
    }
    if (this._azureTenantId !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureTenantId = this._azureTenantId;
    }
    if (this._broadnetPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.broadnetPassword = this._broadnetPassword;
    }
    if (this._broadnetSid !== undefined) {
      hasAnyValues = true;
      internalValueResult.broadnetSid = this._broadnetSid;
    }
    if (this._broadnetUserId !== undefined) {
      hasAnyValues = true;
      internalValueResult.broadnetUserId = this._broadnetUserId;
    }
    if (this._bypassWhenCloudDown !== undefined) {
      hasAnyValues = true;
      internalValueResult.bypassWhenCloudDown = this._bypassWhenCloudDown;
    }
    if (this._clickatellApiKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.clickatellApiKey = this._clickatellApiKey;
    }
    if (this._crossSite !== undefined) {
      hasAnyValues = true;
      internalValueResult.crossSite = this._crossSite;
    }
    if (this._emailEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.emailEnabled = this._emailEnabled;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._expire !== undefined) {
      hasAnyValues = true;
      internalValueResult.expire = this._expire;
    }
    if (this._externalPortalUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalPortalUrl = this._externalPortalUrl;
    }
    if (this._facebookClientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.facebookClientId = this._facebookClientId;
    }
    if (this._facebookClientSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.facebookClientSecret = this._facebookClientSecret;
    }
    if (this._facebookEmailDomains !== undefined) {
      hasAnyValues = true;
      internalValueResult.facebookEmailDomains = this._facebookEmailDomains;
    }
    if (this._facebookEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.facebookEnabled = this._facebookEnabled;
    }
    if (this._facebookExpire !== undefined) {
      hasAnyValues = true;
      internalValueResult.facebookExpire = this._facebookExpire;
    }
    if (this._forward !== undefined) {
      hasAnyValues = true;
      internalValueResult.forward = this._forward;
    }
    if (this._forwardUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.forwardUrl = this._forwardUrl;
    }
    if (this._googleClientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.googleClientId = this._googleClientId;
    }
    if (this._googleClientSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.googleClientSecret = this._googleClientSecret;
    }
    if (this._googleEmailDomains !== undefined) {
      hasAnyValues = true;
      internalValueResult.googleEmailDomains = this._googleEmailDomains;
    }
    if (this._googleEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.googleEnabled = this._googleEnabled;
    }
    if (this._googleExpire !== undefined) {
      hasAnyValues = true;
      internalValueResult.googleExpire = this._googleExpire;
    }
    if (this._gupshupPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.gupshupPassword = this._gupshupPassword;
    }
    if (this._gupshupUserid !== undefined) {
      hasAnyValues = true;
      internalValueResult.gupshupUserid = this._gupshupUserid;
    }
    if (this._microsoftClientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.microsoftClientId = this._microsoftClientId;
    }
    if (this._microsoftClientSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.microsoftClientSecret = this._microsoftClientSecret;
    }
    if (this._microsoftEmailDomains !== undefined) {
      hasAnyValues = true;
      internalValueResult.microsoftEmailDomains = this._microsoftEmailDomains;
    }
    if (this._microsoftEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.microsoftEnabled = this._microsoftEnabled;
    }
    if (this._microsoftExpire !== undefined) {
      hasAnyValues = true;
      internalValueResult.microsoftExpire = this._microsoftExpire;
    }
    if (this._passphraseEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.passphraseEnabled = this._passphraseEnabled;
    }
    if (this._passphraseExpire !== undefined) {
      hasAnyValues = true;
      internalValueResult.passphraseExpire = this._passphraseExpire;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._predefinedSponsorsEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.predefinedSponsorsEnabled = this._predefinedSponsorsEnabled;
    }
    if (this._predefinedSponsorsHideEmail !== undefined) {
      hasAnyValues = true;
      internalValueResult.predefinedSponsorsHideEmail = this._predefinedSponsorsHideEmail;
    }
    if (this._privacy !== undefined) {
      hasAnyValues = true;
      internalValueResult.privacy = this._privacy;
    }
    if (this._puzzelPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.puzzelPassword = this._puzzelPassword;
    }
    if (this._puzzelServiceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.puzzelServiceId = this._puzzelServiceId;
    }
    if (this._puzzelUsername !== undefined) {
      hasAnyValues = true;
      internalValueResult.puzzelUsername = this._puzzelUsername;
    }
    if (this._smsEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.smsEnabled = this._smsEnabled;
    }
    if (this._smsExpire !== undefined) {
      hasAnyValues = true;
      internalValueResult.smsExpire = this._smsExpire;
    }
    if (this._smsMessageFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.smsMessageFormat = this._smsMessageFormat;
    }
    if (this._smsProvider !== undefined) {
      hasAnyValues = true;
      internalValueResult.smsProvider = this._smsProvider;
    }
    if (this._smsglobalApiKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.smsglobalApiKey = this._smsglobalApiKey;
    }
    if (this._smsglobalApiSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.smsglobalApiSecret = this._smsglobalApiSecret;
    }
    if (this._sponsorAutoApprove !== undefined) {
      hasAnyValues = true;
      internalValueResult.sponsorAutoApprove = this._sponsorAutoApprove;
    }
    if (this._sponsorEmailDomains !== undefined) {
      hasAnyValues = true;
      internalValueResult.sponsorEmailDomains = this._sponsorEmailDomains;
    }
    if (this._sponsorEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.sponsorEnabled = this._sponsorEnabled;
    }
    if (this._sponsorExpire !== undefined) {
      hasAnyValues = true;
      internalValueResult.sponsorExpire = this._sponsorExpire;
    }
    if (this._sponsorLinkValidityDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.sponsorLinkValidityDuration = this._sponsorLinkValidityDuration;
    }
    if (this._sponsorNotifyAll !== undefined) {
      hasAnyValues = true;
      internalValueResult.sponsorNotifyAll = this._sponsorNotifyAll;
    }
    if (this._sponsorStatusNotify !== undefined) {
      hasAnyValues = true;
      internalValueResult.sponsorStatusNotify = this._sponsorStatusNotify;
    }
    if (this._sponsors !== undefined) {
      hasAnyValues = true;
      internalValueResult.sponsors = this._sponsors;
    }
    if (this._ssoDefaultRole !== undefined) {
      hasAnyValues = true;
      internalValueResult.ssoDefaultRole = this._ssoDefaultRole;
    }
    if (this._ssoForcedRole !== undefined) {
      hasAnyValues = true;
      internalValueResult.ssoForcedRole = this._ssoForcedRole;
    }
    if (this._ssoIdpCert !== undefined) {
      hasAnyValues = true;
      internalValueResult.ssoIdpCert = this._ssoIdpCert;
    }
    if (this._ssoIdpSignAlgo !== undefined) {
      hasAnyValues = true;
      internalValueResult.ssoIdpSignAlgo = this._ssoIdpSignAlgo;
    }
    if (this._ssoIdpSsoUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.ssoIdpSsoUrl = this._ssoIdpSsoUrl;
    }
    if (this._ssoIssuer !== undefined) {
      hasAnyValues = true;
      internalValueResult.ssoIssuer = this._ssoIssuer;
    }
    if (this._ssoNameidFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.ssoNameidFormat = this._ssoNameidFormat;
    }
    if (this._telstraClientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.telstraClientId = this._telstraClientId;
    }
    if (this._telstraClientSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.telstraClientSecret = this._telstraClientSecret;
    }
    if (this._twilioAuthToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.twilioAuthToken = this._twilioAuthToken;
    }
    if (this._twilioPhoneNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.twilioPhoneNumber = this._twilioPhoneNumber;
    }
    if (this._twilioSid !== undefined) {
      hasAnyValues = true;
      internalValueResult.twilioSid = this._twilioSid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrgWlanPortal | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowWlanIdRoam = undefined;
      this._amazonClientId = undefined;
      this._amazonClientSecret = undefined;
      this._amazonEmailDomains = undefined;
      this._amazonEnabled = undefined;
      this._amazonExpire = undefined;
      this._auth = undefined;
      this._azureClientId = undefined;
      this._azureClientSecret = undefined;
      this._azureEnabled = undefined;
      this._azureExpire = undefined;
      this._azureTenantId = undefined;
      this._broadnetPassword = undefined;
      this._broadnetSid = undefined;
      this._broadnetUserId = undefined;
      this._bypassWhenCloudDown = undefined;
      this._clickatellApiKey = undefined;
      this._crossSite = undefined;
      this._emailEnabled = undefined;
      this._enabled = undefined;
      this._expire = undefined;
      this._externalPortalUrl = undefined;
      this._facebookClientId = undefined;
      this._facebookClientSecret = undefined;
      this._facebookEmailDomains = undefined;
      this._facebookEnabled = undefined;
      this._facebookExpire = undefined;
      this._forward = undefined;
      this._forwardUrl = undefined;
      this._googleClientId = undefined;
      this._googleClientSecret = undefined;
      this._googleEmailDomains = undefined;
      this._googleEnabled = undefined;
      this._googleExpire = undefined;
      this._gupshupPassword = undefined;
      this._gupshupUserid = undefined;
      this._microsoftClientId = undefined;
      this._microsoftClientSecret = undefined;
      this._microsoftEmailDomains = undefined;
      this._microsoftEnabled = undefined;
      this._microsoftExpire = undefined;
      this._passphraseEnabled = undefined;
      this._passphraseExpire = undefined;
      this._password = undefined;
      this._predefinedSponsorsEnabled = undefined;
      this._predefinedSponsorsHideEmail = undefined;
      this._privacy = undefined;
      this._puzzelPassword = undefined;
      this._puzzelServiceId = undefined;
      this._puzzelUsername = undefined;
      this._smsEnabled = undefined;
      this._smsExpire = undefined;
      this._smsMessageFormat = undefined;
      this._smsProvider = undefined;
      this._smsglobalApiKey = undefined;
      this._smsglobalApiSecret = undefined;
      this._sponsorAutoApprove = undefined;
      this._sponsorEmailDomains = undefined;
      this._sponsorEnabled = undefined;
      this._sponsorExpire = undefined;
      this._sponsorLinkValidityDuration = undefined;
      this._sponsorNotifyAll = undefined;
      this._sponsorStatusNotify = undefined;
      this._sponsors = undefined;
      this._ssoDefaultRole = undefined;
      this._ssoForcedRole = undefined;
      this._ssoIdpCert = undefined;
      this._ssoIdpSignAlgo = undefined;
      this._ssoIdpSsoUrl = undefined;
      this._ssoIssuer = undefined;
      this._ssoNameidFormat = undefined;
      this._telstraClientId = undefined;
      this._telstraClientSecret = undefined;
      this._twilioAuthToken = undefined;
      this._twilioPhoneNumber = undefined;
      this._twilioSid = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowWlanIdRoam = value.allowWlanIdRoam;
      this._amazonClientId = value.amazonClientId;
      this._amazonClientSecret = value.amazonClientSecret;
      this._amazonEmailDomains = value.amazonEmailDomains;
      this._amazonEnabled = value.amazonEnabled;
      this._amazonExpire = value.amazonExpire;
      this._auth = value.auth;
      this._azureClientId = value.azureClientId;
      this._azureClientSecret = value.azureClientSecret;
      this._azureEnabled = value.azureEnabled;
      this._azureExpire = value.azureExpire;
      this._azureTenantId = value.azureTenantId;
      this._broadnetPassword = value.broadnetPassword;
      this._broadnetSid = value.broadnetSid;
      this._broadnetUserId = value.broadnetUserId;
      this._bypassWhenCloudDown = value.bypassWhenCloudDown;
      this._clickatellApiKey = value.clickatellApiKey;
      this._crossSite = value.crossSite;
      this._emailEnabled = value.emailEnabled;
      this._enabled = value.enabled;
      this._expire = value.expire;
      this._externalPortalUrl = value.externalPortalUrl;
      this._facebookClientId = value.facebookClientId;
      this._facebookClientSecret = value.facebookClientSecret;
      this._facebookEmailDomains = value.facebookEmailDomains;
      this._facebookEnabled = value.facebookEnabled;
      this._facebookExpire = value.facebookExpire;
      this._forward = value.forward;
      this._forwardUrl = value.forwardUrl;
      this._googleClientId = value.googleClientId;
      this._googleClientSecret = value.googleClientSecret;
      this._googleEmailDomains = value.googleEmailDomains;
      this._googleEnabled = value.googleEnabled;
      this._googleExpire = value.googleExpire;
      this._gupshupPassword = value.gupshupPassword;
      this._gupshupUserid = value.gupshupUserid;
      this._microsoftClientId = value.microsoftClientId;
      this._microsoftClientSecret = value.microsoftClientSecret;
      this._microsoftEmailDomains = value.microsoftEmailDomains;
      this._microsoftEnabled = value.microsoftEnabled;
      this._microsoftExpire = value.microsoftExpire;
      this._passphraseEnabled = value.passphraseEnabled;
      this._passphraseExpire = value.passphraseExpire;
      this._password = value.password;
      this._predefinedSponsorsEnabled = value.predefinedSponsorsEnabled;
      this._predefinedSponsorsHideEmail = value.predefinedSponsorsHideEmail;
      this._privacy = value.privacy;
      this._puzzelPassword = value.puzzelPassword;
      this._puzzelServiceId = value.puzzelServiceId;
      this._puzzelUsername = value.puzzelUsername;
      this._smsEnabled = value.smsEnabled;
      this._smsExpire = value.smsExpire;
      this._smsMessageFormat = value.smsMessageFormat;
      this._smsProvider = value.smsProvider;
      this._smsglobalApiKey = value.smsglobalApiKey;
      this._smsglobalApiSecret = value.smsglobalApiSecret;
      this._sponsorAutoApprove = value.sponsorAutoApprove;
      this._sponsorEmailDomains = value.sponsorEmailDomains;
      this._sponsorEnabled = value.sponsorEnabled;
      this._sponsorExpire = value.sponsorExpire;
      this._sponsorLinkValidityDuration = value.sponsorLinkValidityDuration;
      this._sponsorNotifyAll = value.sponsorNotifyAll;
      this._sponsorStatusNotify = value.sponsorStatusNotify;
      this._sponsors = value.sponsors;
      this._ssoDefaultRole = value.ssoDefaultRole;
      this._ssoForcedRole = value.ssoForcedRole;
      this._ssoIdpCert = value.ssoIdpCert;
      this._ssoIdpSignAlgo = value.ssoIdpSignAlgo;
      this._ssoIdpSsoUrl = value.ssoIdpSsoUrl;
      this._ssoIssuer = value.ssoIssuer;
      this._ssoNameidFormat = value.ssoNameidFormat;
      this._telstraClientId = value.telstraClientId;
      this._telstraClientSecret = value.telstraClientSecret;
      this._twilioAuthToken = value.twilioAuthToken;
      this._twilioPhoneNumber = value.twilioPhoneNumber;
      this._twilioSid = value.twilioSid;
    }
  }

  // allow_wlan_id_roam - computed: true, optional: true, required: false
  private _allowWlanIdRoam?: boolean | cdktf.IResolvable; 
  public get allowWlanIdRoam() {
    return this.getBooleanAttribute('allow_wlan_id_roam');
  }
  public set allowWlanIdRoam(value: boolean | cdktf.IResolvable) {
    this._allowWlanIdRoam = value;
  }
  public resetAllowWlanIdRoam() {
    this._allowWlanIdRoam = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowWlanIdRoamInput() {
    return this._allowWlanIdRoam;
  }

  // amazon_client_id - computed: true, optional: true, required: false
  private _amazonClientId?: string; 
  public get amazonClientId() {
    return this.getStringAttribute('amazon_client_id');
  }
  public set amazonClientId(value: string) {
    this._amazonClientId = value;
  }
  public resetAmazonClientId() {
    this._amazonClientId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get amazonClientIdInput() {
    return this._amazonClientId;
  }

  // amazon_client_secret - computed: true, optional: true, required: false
  private _amazonClientSecret?: string; 
  public get amazonClientSecret() {
    return this.getStringAttribute('amazon_client_secret');
  }
  public set amazonClientSecret(value: string) {
    this._amazonClientSecret = value;
  }
  public resetAmazonClientSecret() {
    this._amazonClientSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get amazonClientSecretInput() {
    return this._amazonClientSecret;
  }

  // amazon_email_domains - computed: true, optional: true, required: false
  private _amazonEmailDomains?: string[]; 
  public get amazonEmailDomains() {
    return this.getListAttribute('amazon_email_domains');
  }
  public set amazonEmailDomains(value: string[]) {
    this._amazonEmailDomains = value;
  }
  public resetAmazonEmailDomains() {
    this._amazonEmailDomains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get amazonEmailDomainsInput() {
    return this._amazonEmailDomains;
  }

  // amazon_enabled - computed: true, optional: true, required: false
  private _amazonEnabled?: boolean | cdktf.IResolvable; 
  public get amazonEnabled() {
    return this.getBooleanAttribute('amazon_enabled');
  }
  public set amazonEnabled(value: boolean | cdktf.IResolvable) {
    this._amazonEnabled = value;
  }
  public resetAmazonEnabled() {
    this._amazonEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get amazonEnabledInput() {
    return this._amazonEnabled;
  }

  // amazon_expire - computed: true, optional: true, required: false
  private _amazonExpire?: number; 
  public get amazonExpire() {
    return this.getNumberAttribute('amazon_expire');
  }
  public set amazonExpire(value: number) {
    this._amazonExpire = value;
  }
  public resetAmazonExpire() {
    this._amazonExpire = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get amazonExpireInput() {
    return this._amazonExpire;
  }

  // auth - computed: true, optional: true, required: false
  private _auth?: string; 
  public get auth() {
    return this.getStringAttribute('auth');
  }
  public set auth(value: string) {
    this._auth = value;
  }
  public resetAuth() {
    this._auth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authInput() {
    return this._auth;
  }

  // azure_client_id - computed: true, optional: true, required: false
  private _azureClientId?: string; 
  public get azureClientId() {
    return this.getStringAttribute('azure_client_id');
  }
  public set azureClientId(value: string) {
    this._azureClientId = value;
  }
  public resetAzureClientId() {
    this._azureClientId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureClientIdInput() {
    return this._azureClientId;
  }

  // azure_client_secret - computed: true, optional: true, required: false
  private _azureClientSecret?: string; 
  public get azureClientSecret() {
    return this.getStringAttribute('azure_client_secret');
  }
  public set azureClientSecret(value: string) {
    this._azureClientSecret = value;
  }
  public resetAzureClientSecret() {
    this._azureClientSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureClientSecretInput() {
    return this._azureClientSecret;
  }

  // azure_enabled - computed: true, optional: true, required: false
  private _azureEnabled?: boolean | cdktf.IResolvable; 
  public get azureEnabled() {
    return this.getBooleanAttribute('azure_enabled');
  }
  public set azureEnabled(value: boolean | cdktf.IResolvable) {
    this._azureEnabled = value;
  }
  public resetAzureEnabled() {
    this._azureEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureEnabledInput() {
    return this._azureEnabled;
  }

  // azure_expire - computed: true, optional: true, required: false
  private _azureExpire?: number; 
  public get azureExpire() {
    return this.getNumberAttribute('azure_expire');
  }
  public set azureExpire(value: number) {
    this._azureExpire = value;
  }
  public resetAzureExpire() {
    this._azureExpire = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureExpireInput() {
    return this._azureExpire;
  }

  // azure_tenant_id - computed: true, optional: true, required: false
  private _azureTenantId?: string; 
  public get azureTenantId() {
    return this.getStringAttribute('azure_tenant_id');
  }
  public set azureTenantId(value: string) {
    this._azureTenantId = value;
  }
  public resetAzureTenantId() {
    this._azureTenantId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureTenantIdInput() {
    return this._azureTenantId;
  }

  // broadnet_password - computed: true, optional: true, required: false
  private _broadnetPassword?: string; 
  public get broadnetPassword() {
    return this.getStringAttribute('broadnet_password');
  }
  public set broadnetPassword(value: string) {
    this._broadnetPassword = value;
  }
  public resetBroadnetPassword() {
    this._broadnetPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get broadnetPasswordInput() {
    return this._broadnetPassword;
  }

  // broadnet_sid - computed: true, optional: true, required: false
  private _broadnetSid?: string; 
  public get broadnetSid() {
    return this.getStringAttribute('broadnet_sid');
  }
  public set broadnetSid(value: string) {
    this._broadnetSid = value;
  }
  public resetBroadnetSid() {
    this._broadnetSid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get broadnetSidInput() {
    return this._broadnetSid;
  }

  // broadnet_user_id - computed: true, optional: true, required: false
  private _broadnetUserId?: string; 
  public get broadnetUserId() {
    return this.getStringAttribute('broadnet_user_id');
  }
  public set broadnetUserId(value: string) {
    this._broadnetUserId = value;
  }
  public resetBroadnetUserId() {
    this._broadnetUserId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get broadnetUserIdInput() {
    return this._broadnetUserId;
  }

  // bypass_when_cloud_down - computed: true, optional: true, required: false
  private _bypassWhenCloudDown?: boolean | cdktf.IResolvable; 
  public get bypassWhenCloudDown() {
    return this.getBooleanAttribute('bypass_when_cloud_down');
  }
  public set bypassWhenCloudDown(value: boolean | cdktf.IResolvable) {
    this._bypassWhenCloudDown = value;
  }
  public resetBypassWhenCloudDown() {
    this._bypassWhenCloudDown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bypassWhenCloudDownInput() {
    return this._bypassWhenCloudDown;
  }

  // clickatell_api_key - computed: true, optional: true, required: false
  private _clickatellApiKey?: string; 
  public get clickatellApiKey() {
    return this.getStringAttribute('clickatell_api_key');
  }
  public set clickatellApiKey(value: string) {
    this._clickatellApiKey = value;
  }
  public resetClickatellApiKey() {
    this._clickatellApiKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clickatellApiKeyInput() {
    return this._clickatellApiKey;
  }

  // cross_site - computed: true, optional: true, required: false
  private _crossSite?: boolean | cdktf.IResolvable; 
  public get crossSite() {
    return this.getBooleanAttribute('cross_site');
  }
  public set crossSite(value: boolean | cdktf.IResolvable) {
    this._crossSite = value;
  }
  public resetCrossSite() {
    this._crossSite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crossSiteInput() {
    return this._crossSite;
  }

  // email_enabled - computed: true, optional: true, required: false
  private _emailEnabled?: boolean | cdktf.IResolvable; 
  public get emailEnabled() {
    return this.getBooleanAttribute('email_enabled');
  }
  public set emailEnabled(value: boolean | cdktf.IResolvable) {
    this._emailEnabled = value;
  }
  public resetEmailEnabled() {
    this._emailEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailEnabledInput() {
    return this._emailEnabled;
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

  // expire - computed: true, optional: true, required: false
  private _expire?: number; 
  public get expire() {
    return this.getNumberAttribute('expire');
  }
  public set expire(value: number) {
    this._expire = value;
  }
  public resetExpire() {
    this._expire = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expireInput() {
    return this._expire;
  }

  // external_portal_url - computed: true, optional: true, required: false
  private _externalPortalUrl?: string; 
  public get externalPortalUrl() {
    return this.getStringAttribute('external_portal_url');
  }
  public set externalPortalUrl(value: string) {
    this._externalPortalUrl = value;
  }
  public resetExternalPortalUrl() {
    this._externalPortalUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalPortalUrlInput() {
    return this._externalPortalUrl;
  }

  // facebook_client_id - computed: true, optional: true, required: false
  private _facebookClientId?: string; 
  public get facebookClientId() {
    return this.getStringAttribute('facebook_client_id');
  }
  public set facebookClientId(value: string) {
    this._facebookClientId = value;
  }
  public resetFacebookClientId() {
    this._facebookClientId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get facebookClientIdInput() {
    return this._facebookClientId;
  }

  // facebook_client_secret - computed: true, optional: true, required: false
  private _facebookClientSecret?: string; 
  public get facebookClientSecret() {
    return this.getStringAttribute('facebook_client_secret');
  }
  public set facebookClientSecret(value: string) {
    this._facebookClientSecret = value;
  }
  public resetFacebookClientSecret() {
    this._facebookClientSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get facebookClientSecretInput() {
    return this._facebookClientSecret;
  }

  // facebook_email_domains - computed: true, optional: true, required: false
  private _facebookEmailDomains?: string[]; 
  public get facebookEmailDomains() {
    return this.getListAttribute('facebook_email_domains');
  }
  public set facebookEmailDomains(value: string[]) {
    this._facebookEmailDomains = value;
  }
  public resetFacebookEmailDomains() {
    this._facebookEmailDomains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get facebookEmailDomainsInput() {
    return this._facebookEmailDomains;
  }

  // facebook_enabled - computed: true, optional: true, required: false
  private _facebookEnabled?: boolean | cdktf.IResolvable; 
  public get facebookEnabled() {
    return this.getBooleanAttribute('facebook_enabled');
  }
  public set facebookEnabled(value: boolean | cdktf.IResolvable) {
    this._facebookEnabled = value;
  }
  public resetFacebookEnabled() {
    this._facebookEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get facebookEnabledInput() {
    return this._facebookEnabled;
  }

  // facebook_expire - computed: true, optional: true, required: false
  private _facebookExpire?: number; 
  public get facebookExpire() {
    return this.getNumberAttribute('facebook_expire');
  }
  public set facebookExpire(value: number) {
    this._facebookExpire = value;
  }
  public resetFacebookExpire() {
    this._facebookExpire = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get facebookExpireInput() {
    return this._facebookExpire;
  }

  // forward - computed: true, optional: true, required: false
  private _forward?: boolean | cdktf.IResolvable; 
  public get forward() {
    return this.getBooleanAttribute('forward');
  }
  public set forward(value: boolean | cdktf.IResolvable) {
    this._forward = value;
  }
  public resetForward() {
    this._forward = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardInput() {
    return this._forward;
  }

  // forward_url - computed: true, optional: true, required: false
  private _forwardUrl?: string; 
  public get forwardUrl() {
    return this.getStringAttribute('forward_url');
  }
  public set forwardUrl(value: string) {
    this._forwardUrl = value;
  }
  public resetForwardUrl() {
    this._forwardUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardUrlInput() {
    return this._forwardUrl;
  }

  // google_client_id - computed: true, optional: true, required: false
  private _googleClientId?: string; 
  public get googleClientId() {
    return this.getStringAttribute('google_client_id');
  }
  public set googleClientId(value: string) {
    this._googleClientId = value;
  }
  public resetGoogleClientId() {
    this._googleClientId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get googleClientIdInput() {
    return this._googleClientId;
  }

  // google_client_secret - computed: true, optional: true, required: false
  private _googleClientSecret?: string; 
  public get googleClientSecret() {
    return this.getStringAttribute('google_client_secret');
  }
  public set googleClientSecret(value: string) {
    this._googleClientSecret = value;
  }
  public resetGoogleClientSecret() {
    this._googleClientSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get googleClientSecretInput() {
    return this._googleClientSecret;
  }

  // google_email_domains - computed: true, optional: true, required: false
  private _googleEmailDomains?: string[]; 
  public get googleEmailDomains() {
    return this.getListAttribute('google_email_domains');
  }
  public set googleEmailDomains(value: string[]) {
    this._googleEmailDomains = value;
  }
  public resetGoogleEmailDomains() {
    this._googleEmailDomains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get googleEmailDomainsInput() {
    return this._googleEmailDomains;
  }

  // google_enabled - computed: true, optional: true, required: false
  private _googleEnabled?: boolean | cdktf.IResolvable; 
  public get googleEnabled() {
    return this.getBooleanAttribute('google_enabled');
  }
  public set googleEnabled(value: boolean | cdktf.IResolvable) {
    this._googleEnabled = value;
  }
  public resetGoogleEnabled() {
    this._googleEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get googleEnabledInput() {
    return this._googleEnabled;
  }

  // google_expire - computed: true, optional: true, required: false
  private _googleExpire?: number; 
  public get googleExpire() {
    return this.getNumberAttribute('google_expire');
  }
  public set googleExpire(value: number) {
    this._googleExpire = value;
  }
  public resetGoogleExpire() {
    this._googleExpire = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get googleExpireInput() {
    return this._googleExpire;
  }

  // gupshup_password - computed: true, optional: true, required: false
  private _gupshupPassword?: string; 
  public get gupshupPassword() {
    return this.getStringAttribute('gupshup_password');
  }
  public set gupshupPassword(value: string) {
    this._gupshupPassword = value;
  }
  public resetGupshupPassword() {
    this._gupshupPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gupshupPasswordInput() {
    return this._gupshupPassword;
  }

  // gupshup_userid - computed: true, optional: true, required: false
  private _gupshupUserid?: string; 
  public get gupshupUserid() {
    return this.getStringAttribute('gupshup_userid');
  }
  public set gupshupUserid(value: string) {
    this._gupshupUserid = value;
  }
  public resetGupshupUserid() {
    this._gupshupUserid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gupshupUseridInput() {
    return this._gupshupUserid;
  }

  // microsoft_client_id - computed: true, optional: true, required: false
  private _microsoftClientId?: string; 
  public get microsoftClientId() {
    return this.getStringAttribute('microsoft_client_id');
  }
  public set microsoftClientId(value: string) {
    this._microsoftClientId = value;
  }
  public resetMicrosoftClientId() {
    this._microsoftClientId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get microsoftClientIdInput() {
    return this._microsoftClientId;
  }

  // microsoft_client_secret - computed: true, optional: true, required: false
  private _microsoftClientSecret?: string; 
  public get microsoftClientSecret() {
    return this.getStringAttribute('microsoft_client_secret');
  }
  public set microsoftClientSecret(value: string) {
    this._microsoftClientSecret = value;
  }
  public resetMicrosoftClientSecret() {
    this._microsoftClientSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get microsoftClientSecretInput() {
    return this._microsoftClientSecret;
  }

  // microsoft_email_domains - computed: true, optional: true, required: false
  private _microsoftEmailDomains?: string[]; 
  public get microsoftEmailDomains() {
    return this.getListAttribute('microsoft_email_domains');
  }
  public set microsoftEmailDomains(value: string[]) {
    this._microsoftEmailDomains = value;
  }
  public resetMicrosoftEmailDomains() {
    this._microsoftEmailDomains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get microsoftEmailDomainsInput() {
    return this._microsoftEmailDomains;
  }

  // microsoft_enabled - computed: true, optional: true, required: false
  private _microsoftEnabled?: boolean | cdktf.IResolvable; 
  public get microsoftEnabled() {
    return this.getBooleanAttribute('microsoft_enabled');
  }
  public set microsoftEnabled(value: boolean | cdktf.IResolvable) {
    this._microsoftEnabled = value;
  }
  public resetMicrosoftEnabled() {
    this._microsoftEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get microsoftEnabledInput() {
    return this._microsoftEnabled;
  }

  // microsoft_expire - computed: true, optional: true, required: false
  private _microsoftExpire?: number; 
  public get microsoftExpire() {
    return this.getNumberAttribute('microsoft_expire');
  }
  public set microsoftExpire(value: number) {
    this._microsoftExpire = value;
  }
  public resetMicrosoftExpire() {
    this._microsoftExpire = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get microsoftExpireInput() {
    return this._microsoftExpire;
  }

  // passphrase_enabled - computed: true, optional: true, required: false
  private _passphraseEnabled?: boolean | cdktf.IResolvable; 
  public get passphraseEnabled() {
    return this.getBooleanAttribute('passphrase_enabled');
  }
  public set passphraseEnabled(value: boolean | cdktf.IResolvable) {
    this._passphraseEnabled = value;
  }
  public resetPassphraseEnabled() {
    this._passphraseEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passphraseEnabledInput() {
    return this._passphraseEnabled;
  }

  // passphrase_expire - computed: true, optional: true, required: false
  private _passphraseExpire?: number; 
  public get passphraseExpire() {
    return this.getNumberAttribute('passphrase_expire');
  }
  public set passphraseExpire(value: number) {
    this._passphraseExpire = value;
  }
  public resetPassphraseExpire() {
    this._passphraseExpire = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passphraseExpireInput() {
    return this._passphraseExpire;
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

  // predefined_sponsors_enabled - computed: true, optional: true, required: false
  private _predefinedSponsorsEnabled?: boolean | cdktf.IResolvable; 
  public get predefinedSponsorsEnabled() {
    return this.getBooleanAttribute('predefined_sponsors_enabled');
  }
  public set predefinedSponsorsEnabled(value: boolean | cdktf.IResolvable) {
    this._predefinedSponsorsEnabled = value;
  }
  public resetPredefinedSponsorsEnabled() {
    this._predefinedSponsorsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get predefinedSponsorsEnabledInput() {
    return this._predefinedSponsorsEnabled;
  }

  // predefined_sponsors_hide_email - computed: true, optional: true, required: false
  private _predefinedSponsorsHideEmail?: boolean | cdktf.IResolvable; 
  public get predefinedSponsorsHideEmail() {
    return this.getBooleanAttribute('predefined_sponsors_hide_email');
  }
  public set predefinedSponsorsHideEmail(value: boolean | cdktf.IResolvable) {
    this._predefinedSponsorsHideEmail = value;
  }
  public resetPredefinedSponsorsHideEmail() {
    this._predefinedSponsorsHideEmail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get predefinedSponsorsHideEmailInput() {
    return this._predefinedSponsorsHideEmail;
  }

  // privacy - computed: true, optional: true, required: false
  private _privacy?: boolean | cdktf.IResolvable; 
  public get privacy() {
    return this.getBooleanAttribute('privacy');
  }
  public set privacy(value: boolean | cdktf.IResolvable) {
    this._privacy = value;
  }
  public resetPrivacy() {
    this._privacy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privacyInput() {
    return this._privacy;
  }

  // puzzel_password - computed: true, optional: true, required: false
  private _puzzelPassword?: string; 
  public get puzzelPassword() {
    return this.getStringAttribute('puzzel_password');
  }
  public set puzzelPassword(value: string) {
    this._puzzelPassword = value;
  }
  public resetPuzzelPassword() {
    this._puzzelPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get puzzelPasswordInput() {
    return this._puzzelPassword;
  }

  // puzzel_service_id - computed: true, optional: true, required: false
  private _puzzelServiceId?: string; 
  public get puzzelServiceId() {
    return this.getStringAttribute('puzzel_service_id');
  }
  public set puzzelServiceId(value: string) {
    this._puzzelServiceId = value;
  }
  public resetPuzzelServiceId() {
    this._puzzelServiceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get puzzelServiceIdInput() {
    return this._puzzelServiceId;
  }

  // puzzel_username - computed: true, optional: true, required: false
  private _puzzelUsername?: string; 
  public get puzzelUsername() {
    return this.getStringAttribute('puzzel_username');
  }
  public set puzzelUsername(value: string) {
    this._puzzelUsername = value;
  }
  public resetPuzzelUsername() {
    this._puzzelUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get puzzelUsernameInput() {
    return this._puzzelUsername;
  }

  // sms_enabled - computed: true, optional: true, required: false
  private _smsEnabled?: boolean | cdktf.IResolvable; 
  public get smsEnabled() {
    return this.getBooleanAttribute('sms_enabled');
  }
  public set smsEnabled(value: boolean | cdktf.IResolvable) {
    this._smsEnabled = value;
  }
  public resetSmsEnabled() {
    this._smsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smsEnabledInput() {
    return this._smsEnabled;
  }

  // sms_expire - computed: true, optional: true, required: false
  private _smsExpire?: number; 
  public get smsExpire() {
    return this.getNumberAttribute('sms_expire');
  }
  public set smsExpire(value: number) {
    this._smsExpire = value;
  }
  public resetSmsExpire() {
    this._smsExpire = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smsExpireInput() {
    return this._smsExpire;
  }

  // sms_message_format - computed: true, optional: true, required: false
  private _smsMessageFormat?: string; 
  public get smsMessageFormat() {
    return this.getStringAttribute('sms_message_format');
  }
  public set smsMessageFormat(value: string) {
    this._smsMessageFormat = value;
  }
  public resetSmsMessageFormat() {
    this._smsMessageFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smsMessageFormatInput() {
    return this._smsMessageFormat;
  }

  // sms_provider - computed: true, optional: true, required: false
  private _smsProvider?: string; 
  public get smsProvider() {
    return this.getStringAttribute('sms_provider');
  }
  public set smsProvider(value: string) {
    this._smsProvider = value;
  }
  public resetSmsProvider() {
    this._smsProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smsProviderInput() {
    return this._smsProvider;
  }

  // smsglobal_api_key - computed: true, optional: true, required: false
  private _smsglobalApiKey?: string; 
  public get smsglobalApiKey() {
    return this.getStringAttribute('smsglobal_api_key');
  }
  public set smsglobalApiKey(value: string) {
    this._smsglobalApiKey = value;
  }
  public resetSmsglobalApiKey() {
    this._smsglobalApiKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smsglobalApiKeyInput() {
    return this._smsglobalApiKey;
  }

  // smsglobal_api_secret - computed: true, optional: true, required: false
  private _smsglobalApiSecret?: string; 
  public get smsglobalApiSecret() {
    return this.getStringAttribute('smsglobal_api_secret');
  }
  public set smsglobalApiSecret(value: string) {
    this._smsglobalApiSecret = value;
  }
  public resetSmsglobalApiSecret() {
    this._smsglobalApiSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smsglobalApiSecretInput() {
    return this._smsglobalApiSecret;
  }

  // sponsor_auto_approve - computed: true, optional: true, required: false
  private _sponsorAutoApprove?: boolean | cdktf.IResolvable; 
  public get sponsorAutoApprove() {
    return this.getBooleanAttribute('sponsor_auto_approve');
  }
  public set sponsorAutoApprove(value: boolean | cdktf.IResolvable) {
    this._sponsorAutoApprove = value;
  }
  public resetSponsorAutoApprove() {
    this._sponsorAutoApprove = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sponsorAutoApproveInput() {
    return this._sponsorAutoApprove;
  }

  // sponsor_email_domains - computed: true, optional: true, required: false
  private _sponsorEmailDomains?: string[]; 
  public get sponsorEmailDomains() {
    return this.getListAttribute('sponsor_email_domains');
  }
  public set sponsorEmailDomains(value: string[]) {
    this._sponsorEmailDomains = value;
  }
  public resetSponsorEmailDomains() {
    this._sponsorEmailDomains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sponsorEmailDomainsInput() {
    return this._sponsorEmailDomains;
  }

  // sponsor_enabled - computed: true, optional: true, required: false
  private _sponsorEnabled?: boolean | cdktf.IResolvable; 
  public get sponsorEnabled() {
    return this.getBooleanAttribute('sponsor_enabled');
  }
  public set sponsorEnabled(value: boolean | cdktf.IResolvable) {
    this._sponsorEnabled = value;
  }
  public resetSponsorEnabled() {
    this._sponsorEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sponsorEnabledInput() {
    return this._sponsorEnabled;
  }

  // sponsor_expire - computed: true, optional: true, required: false
  private _sponsorExpire?: number; 
  public get sponsorExpire() {
    return this.getNumberAttribute('sponsor_expire');
  }
  public set sponsorExpire(value: number) {
    this._sponsorExpire = value;
  }
  public resetSponsorExpire() {
    this._sponsorExpire = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sponsorExpireInput() {
    return this._sponsorExpire;
  }

  // sponsor_link_validity_duration - computed: true, optional: true, required: false
  private _sponsorLinkValidityDuration?: string; 
  public get sponsorLinkValidityDuration() {
    return this.getStringAttribute('sponsor_link_validity_duration');
  }
  public set sponsorLinkValidityDuration(value: string) {
    this._sponsorLinkValidityDuration = value;
  }
  public resetSponsorLinkValidityDuration() {
    this._sponsorLinkValidityDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sponsorLinkValidityDurationInput() {
    return this._sponsorLinkValidityDuration;
  }

  // sponsor_notify_all - computed: true, optional: true, required: false
  private _sponsorNotifyAll?: boolean | cdktf.IResolvable; 
  public get sponsorNotifyAll() {
    return this.getBooleanAttribute('sponsor_notify_all');
  }
  public set sponsorNotifyAll(value: boolean | cdktf.IResolvable) {
    this._sponsorNotifyAll = value;
  }
  public resetSponsorNotifyAll() {
    this._sponsorNotifyAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sponsorNotifyAllInput() {
    return this._sponsorNotifyAll;
  }

  // sponsor_status_notify - computed: true, optional: true, required: false
  private _sponsorStatusNotify?: boolean | cdktf.IResolvable; 
  public get sponsorStatusNotify() {
    return this.getBooleanAttribute('sponsor_status_notify');
  }
  public set sponsorStatusNotify(value: boolean | cdktf.IResolvable) {
    this._sponsorStatusNotify = value;
  }
  public resetSponsorStatusNotify() {
    this._sponsorStatusNotify = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sponsorStatusNotifyInput() {
    return this._sponsorStatusNotify;
  }

  // sponsors - computed: true, optional: true, required: false
  private _sponsors?: { [key: string]: string }; 
  public get sponsors() {
    return this.getStringMapAttribute('sponsors');
  }
  public set sponsors(value: { [key: string]: string }) {
    this._sponsors = value;
  }
  public resetSponsors() {
    this._sponsors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sponsorsInput() {
    return this._sponsors;
  }

  // sso_default_role - computed: true, optional: true, required: false
  private _ssoDefaultRole?: string; 
  public get ssoDefaultRole() {
    return this.getStringAttribute('sso_default_role');
  }
  public set ssoDefaultRole(value: string) {
    this._ssoDefaultRole = value;
  }
  public resetSsoDefaultRole() {
    this._ssoDefaultRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssoDefaultRoleInput() {
    return this._ssoDefaultRole;
  }

  // sso_forced_role - computed: true, optional: true, required: false
  private _ssoForcedRole?: string; 
  public get ssoForcedRole() {
    return this.getStringAttribute('sso_forced_role');
  }
  public set ssoForcedRole(value: string) {
    this._ssoForcedRole = value;
  }
  public resetSsoForcedRole() {
    this._ssoForcedRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssoForcedRoleInput() {
    return this._ssoForcedRole;
  }

  // sso_idp_cert - computed: true, optional: true, required: false
  private _ssoIdpCert?: string; 
  public get ssoIdpCert() {
    return this.getStringAttribute('sso_idp_cert');
  }
  public set ssoIdpCert(value: string) {
    this._ssoIdpCert = value;
  }
  public resetSsoIdpCert() {
    this._ssoIdpCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssoIdpCertInput() {
    return this._ssoIdpCert;
  }

  // sso_idp_sign_algo - computed: true, optional: true, required: false
  private _ssoIdpSignAlgo?: string; 
  public get ssoIdpSignAlgo() {
    return this.getStringAttribute('sso_idp_sign_algo');
  }
  public set ssoIdpSignAlgo(value: string) {
    this._ssoIdpSignAlgo = value;
  }
  public resetSsoIdpSignAlgo() {
    this._ssoIdpSignAlgo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssoIdpSignAlgoInput() {
    return this._ssoIdpSignAlgo;
  }

  // sso_idp_sso_url - computed: true, optional: true, required: false
  private _ssoIdpSsoUrl?: string; 
  public get ssoIdpSsoUrl() {
    return this.getStringAttribute('sso_idp_sso_url');
  }
  public set ssoIdpSsoUrl(value: string) {
    this._ssoIdpSsoUrl = value;
  }
  public resetSsoIdpSsoUrl() {
    this._ssoIdpSsoUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssoIdpSsoUrlInput() {
    return this._ssoIdpSsoUrl;
  }

  // sso_issuer - computed: true, optional: true, required: false
  private _ssoIssuer?: string; 
  public get ssoIssuer() {
    return this.getStringAttribute('sso_issuer');
  }
  public set ssoIssuer(value: string) {
    this._ssoIssuer = value;
  }
  public resetSsoIssuer() {
    this._ssoIssuer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssoIssuerInput() {
    return this._ssoIssuer;
  }

  // sso_nameid_format - computed: true, optional: true, required: false
  private _ssoNameidFormat?: string; 
  public get ssoNameidFormat() {
    return this.getStringAttribute('sso_nameid_format');
  }
  public set ssoNameidFormat(value: string) {
    this._ssoNameidFormat = value;
  }
  public resetSsoNameidFormat() {
    this._ssoNameidFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssoNameidFormatInput() {
    return this._ssoNameidFormat;
  }

  // telstra_client_id - computed: true, optional: true, required: false
  private _telstraClientId?: string; 
  public get telstraClientId() {
    return this.getStringAttribute('telstra_client_id');
  }
  public set telstraClientId(value: string) {
    this._telstraClientId = value;
  }
  public resetTelstraClientId() {
    this._telstraClientId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get telstraClientIdInput() {
    return this._telstraClientId;
  }

  // telstra_client_secret - computed: true, optional: true, required: false
  private _telstraClientSecret?: string; 
  public get telstraClientSecret() {
    return this.getStringAttribute('telstra_client_secret');
  }
  public set telstraClientSecret(value: string) {
    this._telstraClientSecret = value;
  }
  public resetTelstraClientSecret() {
    this._telstraClientSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get telstraClientSecretInput() {
    return this._telstraClientSecret;
  }

  // twilio_auth_token - computed: true, optional: true, required: false
  private _twilioAuthToken?: string; 
  public get twilioAuthToken() {
    return this.getStringAttribute('twilio_auth_token');
  }
  public set twilioAuthToken(value: string) {
    this._twilioAuthToken = value;
  }
  public resetTwilioAuthToken() {
    this._twilioAuthToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get twilioAuthTokenInput() {
    return this._twilioAuthToken;
  }

  // twilio_phone_number - computed: true, optional: true, required: false
  private _twilioPhoneNumber?: string; 
  public get twilioPhoneNumber() {
    return this.getStringAttribute('twilio_phone_number');
  }
  public set twilioPhoneNumber(value: string) {
    this._twilioPhoneNumber = value;
  }
  public resetTwilioPhoneNumber() {
    this._twilioPhoneNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get twilioPhoneNumberInput() {
    return this._twilioPhoneNumber;
  }

  // twilio_sid - computed: true, optional: true, required: false
  private _twilioSid?: string; 
  public get twilioSid() {
    return this.getStringAttribute('twilio_sid');
  }
  public set twilioSid(value: string) {
    this._twilioSid = value;
  }
  public resetTwilioSid() {
    this._twilioSid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get twilioSidInput() {
    return this._twilioSid;
  }
}
export interface OrgWlanQos {
  /**
  * enum: `background`, `best_effort`, `video`, `voice`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_wlan#class OrgWlan#class}
  */
  readonly class?: string;
  /**
  * Whether to overwrite QoS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_wlan#overwrite OrgWlan#overwrite}
  */
  readonly overwrite?: boolean | cdktf.IResolvable;
}

export function orgWlanQosToTerraform(struct?: OrgWlanQos | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    class: cdktf.stringToTerraform(struct!.class),
    overwrite: cdktf.booleanToTerraform(struct!.overwrite),
  }
}


export function orgWlanQosToHclTerraform(struct?: OrgWlanQos | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    class: {
      value: cdktf.stringToHclTerraform(struct!.class),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    overwrite: {
      value: cdktf.booleanToHclTerraform(struct!.overwrite),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrgWlanQosOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OrgWlanQos | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._class !== undefined) {
      hasAnyValues = true;
      internalValueResult.class = this._class;
    }
    if (this._overwrite !== undefined) {
      hasAnyValues = true;
      internalValueResult.overwrite = this._overwrite;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrgWlanQos | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._class = undefined;
      this._overwrite = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._class = value.class;
      this._overwrite = value.overwrite;
    }
  }

  // class - computed: true, optional: true, required: false
  private _class?: string; 
  public get class() {
    return this.getStringAttribute('class');
  }
  public set class(value: string) {
    this._class = value;
  }
  public resetClass() {
    this._class = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classInput() {
    return this._class;
  }

  // overwrite - computed: true, optional: true, required: false
  private _overwrite?: boolean | cdktf.IResolvable; 
  public get overwrite() {
    return this.getBooleanAttribute('overwrite');
  }
  public set overwrite(value: boolean | cdktf.IResolvable) {
    this._overwrite = value;
  }
  public resetOverwrite() {
    this._overwrite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overwriteInput() {
    return this._overwrite;
  }
}
export interface OrgWlanRadsecServers {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_wlan#host OrgWlan#host}
  */
  readonly host?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_wlan#port OrgWlan#port}
  */
  readonly port?: number;
}

export function orgWlanRadsecServersToTerraform(struct?: OrgWlanRadsecServers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    port: cdktf.numberToTerraform(struct!.port),
  }
}


export function orgWlanRadsecServersToHclTerraform(struct?: OrgWlanRadsecServers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrgWlanRadsecServersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OrgWlanRadsecServers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrgWlanRadsecServers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._host = undefined;
      this._port = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._host = value.host;
      this._port = value.port;
    }
  }

  // host - computed: true, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // port - computed: true, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }
}

export class OrgWlanRadsecServersList extends cdktf.ComplexList {
  public internalValue? : OrgWlanRadsecServers[] | cdktf.IResolvable

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
  public get(index: number): OrgWlanRadsecServersOutputReference {
    return new OrgWlanRadsecServersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OrgWlanRadsec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_wlan#coa_enabled OrgWlan#coa_enabled}
  */
  readonly coaEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_wlan#enabled OrgWlan#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_wlan#idle_timeout OrgWlan#idle_timeout}
  */
  readonly idleTimeout?: string;
  /**
  * To use Org mxedges when this WLAN does not use mxtunnel, specify their mxcluster_ids. Org mxedge(s) identified by mxcluster_ids
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_wlan#mxcluster_ids OrgWlan#mxcluster_ids}
  */
  readonly mxclusterIds?: string[];
  /**
  * Default is site.mxedge.radsec.proxy_hosts which must be a superset of all `wlans[*].radsec.proxy_hosts`. When `radsec.proxy_hosts` are not used, tunnel peers (org or site mxedges) are used irrespective of `use_site_mxedge`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_wlan#proxy_hosts OrgWlan#proxy_hosts}
  */
  readonly proxyHosts?: string[];
  /**
  * Name of the server to verify (against the cacerts in Org Setting). Only if not Mist Edge.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_wlan#server_name OrgWlan#server_name}
  */
  readonly serverName?: string;
  /**
  * List of RadSec Servers. Only if not Mist Edge.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_wlan#servers OrgWlan#servers}
  */
  readonly servers?: OrgWlanRadsecServers[] | cdktf.IResolvable;
  /**
  * use mxedge(s) as RadSec Proxy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_wlan#use_mxedge OrgWlan#use_mxedge}
  */
  readonly useMxedge?: boolean | cdktf.IResolvable;
  /**
  * To use Site mxedges when this WLAN does not use mxtunnel
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_wlan#use_site_mxedge OrgWlan#use_site_mxedge}
  */
  readonly useSiteMxedge?: boolean | cdktf.IResolvable;
}

export function orgWlanRadsecToTerraform(struct?: OrgWlanRadsec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    coa_enabled: cdktf.booleanToTerraform(struct!.coaEnabled),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    idle_timeout: cdktf.stringToTerraform(struct!.idleTimeout),
    mxcluster_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.mxclusterIds),
    proxy_hosts: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.proxyHosts),
    server_name: cdktf.stringToTerraform(struct!.serverName),
    servers: cdktf.listMapper(orgWlanRadsecServersToTerraform, false)(struct!.servers),
    use_mxedge: cdktf.booleanToTerraform(struct!.useMxedge),
    use_site_mxedge: cdktf.booleanToTerraform(struct!.useSiteMxedge),
  }
}


export function orgWlanRadsecToHclTerraform(struct?: OrgWlanRadsec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    coa_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.coaEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    idle_timeout: {
      value: cdktf.stringToHclTerraform(struct!.idleTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mxcluster_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.mxclusterIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    proxy_hosts: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.proxyHosts),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    server_name: {
      value: cdktf.stringToHclTerraform(struct!.serverName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    servers: {
      value: cdktf.listMapperHcl(orgWlanRadsecServersToHclTerraform, false)(struct!.servers),
      isBlock: true,
      type: "list",
      storageClassType: "OrgWlanRadsecServersList",
    },
    use_mxedge: {
      value: cdktf.booleanToHclTerraform(struct!.useMxedge),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    use_site_mxedge: {
      value: cdktf.booleanToHclTerraform(struct!.useSiteMxedge),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrgWlanRadsecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OrgWlanRadsec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._coaEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.coaEnabled = this._coaEnabled;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._idleTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.idleTimeout = this._idleTimeout;
    }
    if (this._mxclusterIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.mxclusterIds = this._mxclusterIds;
    }
    if (this._proxyHosts !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxyHosts = this._proxyHosts;
    }
    if (this._serverName !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverName = this._serverName;
    }
    if (this._servers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.servers = this._servers?.internalValue;
    }
    if (this._useMxedge !== undefined) {
      hasAnyValues = true;
      internalValueResult.useMxedge = this._useMxedge;
    }
    if (this._useSiteMxedge !== undefined) {
      hasAnyValues = true;
      internalValueResult.useSiteMxedge = this._useSiteMxedge;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrgWlanRadsec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._coaEnabled = undefined;
      this._enabled = undefined;
      this._idleTimeout = undefined;
      this._mxclusterIds = undefined;
      this._proxyHosts = undefined;
      this._serverName = undefined;
      this._servers.internalValue = undefined;
      this._useMxedge = undefined;
      this._useSiteMxedge = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._coaEnabled = value.coaEnabled;
      this._enabled = value.enabled;
      this._idleTimeout = value.idleTimeout;
      this._mxclusterIds = value.mxclusterIds;
      this._proxyHosts = value.proxyHosts;
      this._serverName = value.serverName;
      this._servers.internalValue = value.servers;
      this._useMxedge = value.useMxedge;
      this._useSiteMxedge = value.useSiteMxedge;
    }
  }

  // coa_enabled - computed: true, optional: true, required: false
  private _coaEnabled?: boolean | cdktf.IResolvable; 
  public get coaEnabled() {
    return this.getBooleanAttribute('coa_enabled');
  }
  public set coaEnabled(value: boolean | cdktf.IResolvable) {
    this._coaEnabled = value;
  }
  public resetCoaEnabled() {
    this._coaEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get coaEnabledInput() {
    return this._coaEnabled;
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

  // idle_timeout - computed: true, optional: true, required: false
  private _idleTimeout?: string; 
  public get idleTimeout() {
    return this.getStringAttribute('idle_timeout');
  }
  public set idleTimeout(value: string) {
    this._idleTimeout = value;
  }
  public resetIdleTimeout() {
    this._idleTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idleTimeoutInput() {
    return this._idleTimeout;
  }

  // mxcluster_ids - computed: true, optional: true, required: false
  private _mxclusterIds?: string[]; 
  public get mxclusterIds() {
    return this.getListAttribute('mxcluster_ids');
  }
  public set mxclusterIds(value: string[]) {
    this._mxclusterIds = value;
  }
  public resetMxclusterIds() {
    this._mxclusterIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mxclusterIdsInput() {
    return this._mxclusterIds;
  }

  // proxy_hosts - computed: true, optional: true, required: false
  private _proxyHosts?: string[]; 
  public get proxyHosts() {
    return this.getListAttribute('proxy_hosts');
  }
  public set proxyHosts(value: string[]) {
    this._proxyHosts = value;
  }
  public resetProxyHosts() {
    this._proxyHosts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyHostsInput() {
    return this._proxyHosts;
  }

  // server_name - computed: true, optional: true, required: false
  private _serverName?: string; 
  public get serverName() {
    return this.getStringAttribute('server_name');
  }
  public set serverName(value: string) {
    this._serverName = value;
  }
  public resetServerName() {
    this._serverName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverNameInput() {
    return this._serverName;
  }

  // servers - computed: true, optional: true, required: false
  private _servers = new OrgWlanRadsecServersList(this, "servers", false);
  public get servers() {
    return this._servers;
  }
  public putServers(value: OrgWlanRadsecServers[] | cdktf.IResolvable) {
    this._servers.internalValue = value;
  }
  public resetServers() {
    this._servers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serversInput() {
    return this._servers.internalValue;
  }

  // use_mxedge - computed: true, optional: true, required: false
  private _useMxedge?: boolean | cdktf.IResolvable; 
  public get useMxedge() {
    return this.getBooleanAttribute('use_mxedge');
  }
  public set useMxedge(value: boolean | cdktf.IResolvable) {
    this._useMxedge = value;
  }
  public resetUseMxedge() {
    this._useMxedge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useMxedgeInput() {
    return this._useMxedge;
  }

  // use_site_mxedge - computed: true, optional: true, required: false
  private _useSiteMxedge?: boolean | cdktf.IResolvable; 
  public get useSiteMxedge() {
    return this.getBooleanAttribute('use_site_mxedge');
  }
  public set useSiteMxedge(value: boolean | cdktf.IResolvable) {
    this._useSiteMxedge = value;
  }
  public resetUseSiteMxedge() {
    this._useSiteMxedge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useSiteMxedgeInput() {
    return this._useSiteMxedge;
  }
}
export interface OrgWlanRateset {
  /**
  * If `template`==`custom`. EHT MCS bitmasks for 4 streams (16-bit for each stream, MCS0 is least significant bit)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_wlan#eht OrgWlan#eht}
  */
  readonly eht?: string;
  /**
  * If `template`==`custom`. HE MCS bitmasks for 4 streams (16-bit for each stream, MCS0 is least significant bit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_wlan#he OrgWlan#he}
  */
  readonly he?: string;
  /**
  * If `template`==`custom`. MCS bitmasks for 4 streams (16-bit for each stream, MCS0 is least significant bit), e.g. 00ff 00f0 001f limits HT rates to MCS 0-7 for 1 stream, MCS 4-7 for 2 stream (i.e. MCS 12-15), MCS 1-5 for 3 stream (i.e. MCS 16-20)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_wlan#ht OrgWlan#ht}
  */
  readonly ht?: string;
  /**
  * if `template`==`custom`. List of supported rates (IE=1) and extended supported rates (IE=50) for custom template, append ‘b’ at the end to indicate a rate being basic/mandatory. If `template`==`custom` is configured and legacy does not define at least one basic rate, it will use `no-legacy` default values. enum: `1`, `11`, `11b`, `12`, `12b`, `18`, `18b`, `1b`, `2`, `24`, `24b`, `2b`, `36`, `36b`, `48`, `48b`, `5.5`, `5.5b`, `54`, `54b`, `6`, `6b`, `9`, `9b`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_wlan#legacy OrgWlan#legacy}
  */
  readonly legacy?: string[];
  /**
  * Minimum RSSI for client to connect, 0 means not enforcing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_wlan#min_rssi OrgWlan#min_rssi}
  */
  readonly minRssi?: number;
  /**
  * Data Rates template to apply. enum: 
  *   * `no-legacy`: no 11b
  *   * `compatible`: all, like before, default setting that Broadcom/Atheros used
  *   * `legacy-only`: disable 802.11n and 802.11ac
  *   * `high-density`: no 11b, no low rates
  *   * `custom`: user defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_wlan#template OrgWlan#template}
  */
  readonly template?: string;
  /**
  * If `template`==`custom`. MCS bitmasks for 4 streams (16-bit for each stream, MCS0 is least significant bit), e.g. 03ff 01ff 00ff limits VHT rates to MCS 0-9 for 1 stream, MCS 0-8 for 2 streams, and MCS 0-7 for 3 streams.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_wlan#vht OrgWlan#vht}
  */
  readonly vht?: string;
}

export function orgWlanRatesetToTerraform(struct?: OrgWlanRateset | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    eht: cdktf.stringToTerraform(struct!.eht),
    he: cdktf.stringToTerraform(struct!.he),
    ht: cdktf.stringToTerraform(struct!.ht),
    legacy: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.legacy),
    min_rssi: cdktf.numberToTerraform(struct!.minRssi),
    template: cdktf.stringToTerraform(struct!.template),
    vht: cdktf.stringToTerraform(struct!.vht),
  }
}


export function orgWlanRatesetToHclTerraform(struct?: OrgWlanRateset | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    eht: {
      value: cdktf.stringToHclTerraform(struct!.eht),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    he: {
      value: cdktf.stringToHclTerraform(struct!.he),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ht: {
      value: cdktf.stringToHclTerraform(struct!.ht),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    legacy: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.legacy),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    min_rssi: {
      value: cdktf.numberToHclTerraform(struct!.minRssi),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    template: {
      value: cdktf.stringToHclTerraform(struct!.template),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vht: {
      value: cdktf.stringToHclTerraform(struct!.vht),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrgWlanRatesetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): OrgWlanRateset | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._eht !== undefined) {
      hasAnyValues = true;
      internalValueResult.eht = this._eht;
    }
    if (this._he !== undefined) {
      hasAnyValues = true;
      internalValueResult.he = this._he;
    }
    if (this._ht !== undefined) {
      hasAnyValues = true;
      internalValueResult.ht = this._ht;
    }
    if (this._legacy !== undefined) {
      hasAnyValues = true;
      internalValueResult.legacy = this._legacy;
    }
    if (this._minRssi !== undefined) {
      hasAnyValues = true;
      internalValueResult.minRssi = this._minRssi;
    }
    if (this._template !== undefined) {
      hasAnyValues = true;
      internalValueResult.template = this._template;
    }
    if (this._vht !== undefined) {
      hasAnyValues = true;
      internalValueResult.vht = this._vht;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrgWlanRateset | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._eht = undefined;
      this._he = undefined;
      this._ht = undefined;
      this._legacy = undefined;
      this._minRssi = undefined;
      this._template = undefined;
      this._vht = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._eht = value.eht;
      this._he = value.he;
      this._ht = value.ht;
      this._legacy = value.legacy;
      this._minRssi = value.minRssi;
      this._template = value.template;
      this._vht = value.vht;
    }
  }

  // eht - computed: true, optional: true, required: false
  private _eht?: string; 
  public get eht() {
    return this.getStringAttribute('eht');
  }
  public set eht(value: string) {
    this._eht = value;
  }
  public resetEht() {
    this._eht = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ehtInput() {
    return this._eht;
  }

  // he - computed: true, optional: true, required: false
  private _he?: string; 
  public get he() {
    return this.getStringAttribute('he');
  }
  public set he(value: string) {
    this._he = value;
  }
  public resetHe() {
    this._he = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get heInput() {
    return this._he;
  }

  // ht - computed: true, optional: true, required: false
  private _ht?: string; 
  public get ht() {
    return this.getStringAttribute('ht');
  }
  public set ht(value: string) {
    this._ht = value;
  }
  public resetHt() {
    this._ht = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get htInput() {
    return this._ht;
  }

  // legacy - computed: true, optional: true, required: false
  private _legacy?: string[]; 
  public get legacy() {
    return this.getListAttribute('legacy');
  }
  public set legacy(value: string[]) {
    this._legacy = value;
  }
  public resetLegacy() {
    this._legacy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get legacyInput() {
    return this._legacy;
  }

  // min_rssi - computed: true, optional: true, required: false
  private _minRssi?: number; 
  public get minRssi() {
    return this.getNumberAttribute('min_rssi');
  }
  public set minRssi(value: number) {
    this._minRssi = value;
  }
  public resetMinRssi() {
    this._minRssi = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minRssiInput() {
    return this._minRssi;
  }

  // template - computed: true, optional: true, required: false
  private _template?: string; 
  public get template() {
    return this.getStringAttribute('template');
  }
  public set template(value: string) {
    this._template = value;
  }
  public resetTemplate() {
    this._template = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateInput() {
    return this._template;
  }

  // vht - computed: true, optional: true, required: false
  private _vht?: string; 
  public get vht() {
    return this.getStringAttribute('vht');
  }
  public set vht(value: string) {
    this._vht = value;
  }
  public resetVht() {
    this._vht = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vhtInput() {
    return this._vht;
  }
}

export class OrgWlanRatesetMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: OrgWlanRateset } | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): OrgWlanRatesetOutputReference {
    return new OrgWlanRatesetOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface OrgWlanScheduleHours {
  /**
  * Hour range of the day (e.g. `09:00-17:00`). If the hour is not defined then it's treated as 00:00-23:59.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_wlan#fri OrgWlan#fri}
  */
  readonly fri?: string;
  /**
  * Hour range of the day (e.g. `09:00-17:00`). If the hour is not defined then it's treated as 00:00-23:59.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_wlan#mon OrgWlan#mon}
  */
  readonly mon?: string;
  /**
  * Hour range of the day (e.g. `09:00-17:00`). If the hour is not defined then it's treated as 00:00-23:59.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_wlan#sat OrgWlan#sat}
  */
  readonly sat?: string;
  /**
  * Hour range of the day (e.g. `09:00-17:00`). If the hour is not defined then it's treated as 00:00-23:59.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_wlan#sun OrgWlan#sun}
  */
  readonly sun?: string;
  /**
  * Hour range of the day (e.g. `09:00-17:00`). If the hour is not defined then it's treated as 00:00-23:59.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_wlan#thu OrgWlan#thu}
  */
  readonly thu?: string;
  /**
  * Hour range of the day (e.g. `09:00-17:00`). If the hour is not defined then it's treated as 00:00-23:59.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_wlan#tue OrgWlan#tue}
  */
  readonly tue?: string;
  /**
  * Hour range of the day (e.g. `09:00-17:00`). If the hour is not defined then it's treated as 00:00-23:59.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_wlan#wed OrgWlan#wed}
  */
  readonly wed?: string;
}

export function orgWlanScheduleHoursToTerraform(struct?: OrgWlanScheduleHours | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fri: cdktf.stringToTerraform(struct!.fri),
    mon: cdktf.stringToTerraform(struct!.mon),
    sat: cdktf.stringToTerraform(struct!.sat),
    sun: cdktf.stringToTerraform(struct!.sun),
    thu: cdktf.stringToTerraform(struct!.thu),
    tue: cdktf.stringToTerraform(struct!.tue),
    wed: cdktf.stringToTerraform(struct!.wed),
  }
}


export function orgWlanScheduleHoursToHclTerraform(struct?: OrgWlanScheduleHours | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fri: {
      value: cdktf.stringToHclTerraform(struct!.fri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mon: {
      value: cdktf.stringToHclTerraform(struct!.mon),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sat: {
      value: cdktf.stringToHclTerraform(struct!.sat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sun: {
      value: cdktf.stringToHclTerraform(struct!.sun),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    thu: {
      value: cdktf.stringToHclTerraform(struct!.thu),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tue: {
      value: cdktf.stringToHclTerraform(struct!.tue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    wed: {
      value: cdktf.stringToHclTerraform(struct!.wed),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrgWlanScheduleHoursOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OrgWlanScheduleHours | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fri !== undefined) {
      hasAnyValues = true;
      internalValueResult.fri = this._fri;
    }
    if (this._mon !== undefined) {
      hasAnyValues = true;
      internalValueResult.mon = this._mon;
    }
    if (this._sat !== undefined) {
      hasAnyValues = true;
      internalValueResult.sat = this._sat;
    }
    if (this._sun !== undefined) {
      hasAnyValues = true;
      internalValueResult.sun = this._sun;
    }
    if (this._thu !== undefined) {
      hasAnyValues = true;
      internalValueResult.thu = this._thu;
    }
    if (this._tue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tue = this._tue;
    }
    if (this._wed !== undefined) {
      hasAnyValues = true;
      internalValueResult.wed = this._wed;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrgWlanScheduleHours | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fri = undefined;
      this._mon = undefined;
      this._sat = undefined;
      this._sun = undefined;
      this._thu = undefined;
      this._tue = undefined;
      this._wed = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fri = value.fri;
      this._mon = value.mon;
      this._sat = value.sat;
      this._sun = value.sun;
      this._thu = value.thu;
      this._tue = value.tue;
      this._wed = value.wed;
    }
  }

  // fri - computed: true, optional: true, required: false
  private _fri?: string; 
  public get fri() {
    return this.getStringAttribute('fri');
  }
  public set fri(value: string) {
    this._fri = value;
  }
  public resetFri() {
    this._fri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get friInput() {
    return this._fri;
  }

  // mon - computed: true, optional: true, required: false
  private _mon?: string; 
  public get mon() {
    return this.getStringAttribute('mon');
  }
  public set mon(value: string) {
    this._mon = value;
  }
  public resetMon() {
    this._mon = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monInput() {
    return this._mon;
  }

  // sat - computed: true, optional: true, required: false
  private _sat?: string; 
  public get sat() {
    return this.getStringAttribute('sat');
  }
  public set sat(value: string) {
    this._sat = value;
  }
  public resetSat() {
    this._sat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get satInput() {
    return this._sat;
  }

  // sun - computed: true, optional: true, required: false
  private _sun?: string; 
  public get sun() {
    return this.getStringAttribute('sun');
  }
  public set sun(value: string) {
    this._sun = value;
  }
  public resetSun() {
    this._sun = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sunInput() {
    return this._sun;
  }

  // thu - computed: true, optional: true, required: false
  private _thu?: string; 
  public get thu() {
    return this.getStringAttribute('thu');
  }
  public set thu(value: string) {
    this._thu = value;
  }
  public resetThu() {
    this._thu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thuInput() {
    return this._thu;
  }

  // tue - computed: true, optional: true, required: false
  private _tue?: string; 
  public get tue() {
    return this.getStringAttribute('tue');
  }
  public set tue(value: string) {
    this._tue = value;
  }
  public resetTue() {
    this._tue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tueInput() {
    return this._tue;
  }

  // wed - computed: true, optional: true, required: false
  private _wed?: string; 
  public get wed() {
    return this.getStringAttribute('wed');
  }
  public set wed(value: string) {
    this._wed = value;
  }
  public resetWed() {
    this._wed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wedInput() {
    return this._wed;
  }
}
export interface OrgWlanSchedule {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_wlan#enabled OrgWlan#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Days/Hours of operation filter, the available days (mon, tue, wed, thu, fri, sat, sun)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_wlan#hours OrgWlan#hours}
  */
  readonly hours?: OrgWlanScheduleHours;
}

export function orgWlanScheduleToTerraform(struct?: OrgWlanSchedule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    hours: orgWlanScheduleHoursToTerraform(struct!.hours),
  }
}


export function orgWlanScheduleToHclTerraform(struct?: OrgWlanSchedule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    hours: {
      value: orgWlanScheduleHoursToHclTerraform(struct!.hours),
      isBlock: true,
      type: "struct",
      storageClassType: "OrgWlanScheduleHours",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrgWlanScheduleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OrgWlanSchedule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._hours?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hours = this._hours?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrgWlanSchedule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._hours.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._hours.internalValue = value.hours;
    }
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

  // hours - computed: true, optional: true, required: false
  private _hours = new OrgWlanScheduleHoursOutputReference(this, "hours");
  public get hours() {
    return this._hours;
  }
  public putHours(value: OrgWlanScheduleHours) {
    this._hours.internalValue = value;
  }
  public resetHours() {
    this._hours.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hoursInput() {
    return this._hours.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_wlan mist_org_wlan}
*/
export class OrgWlan extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mist_org_wlan";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OrgWlan resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OrgWlan to import
  * @param importFromId The id of the existing OrgWlan that should be imported. Refer to the {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_wlan#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OrgWlan to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "mist_org_wlan", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_wlan mist_org_wlan} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OrgWlanConfig
  */
  public constructor(scope: Construct, id: string, config: OrgWlanConfig) {
    super(scope, id, {
      terraformResourceType: 'mist_org_wlan',
      terraformGeneratorMetadata: {
        providerName: 'mist',
        providerVersion: '0.6.3',
        providerVersionConstraint: '0.6.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._acctImmediateUpdate = config.acctImmediateUpdate;
    this._acctInterimInterval = config.acctInterimInterval;
    this._acctServers.internalValue = config.acctServers;
    this._airwatch.internalValue = config.airwatch;
    this._allowIpv6Ndp = config.allowIpv6Ndp;
    this._allowMdns = config.allowMdns;
    this._allowSsdp = config.allowSsdp;
    this._apIds = config.apIds;
    this._appLimit.internalValue = config.appLimit;
    this._appQos.internalValue = config.appQos;
    this._applyTo = config.applyTo;
    this._arpFilter = config.arpFilter;
    this._auth.internalValue = config.auth;
    this._authServerSelection = config.authServerSelection;
    this._authServers.internalValue = config.authServers;
    this._authServersNasId = config.authServersNasId;
    this._authServersNasIp = config.authServersNasIp;
    this._authServersRetries = config.authServersRetries;
    this._authServersTimeout = config.authServersTimeout;
    this._bandSteer = config.bandSteer;
    this._bandSteerForceBand5 = config.bandSteerForceBand5;
    this._bands = config.bands;
    this._blockBlacklistClients = config.blockBlacklistClients;
    this._bonjour.internalValue = config.bonjour;
    this._ciscoCwa.internalValue = config.ciscoCwa;
    this._clientLimitDown = config.clientLimitDown;
    this._clientLimitDownEnabled = config.clientLimitDownEnabled;
    this._clientLimitUp = config.clientLimitUp;
    this._clientLimitUpEnabled = config.clientLimitUpEnabled;
    this._coaServers.internalValue = config.coaServers;
    this._disable11Ax = config.disable11Ax;
    this._disable11Be = config.disable11Be;
    this._disableHtVhtRates = config.disableHtVhtRates;
    this._disableUapsd = config.disableUapsd;
    this._disableV1RoamNotify = config.disableV1RoamNotify;
    this._disableV2RoamNotify = config.disableV2RoamNotify;
    this._disableWhenGatewayUnreachable = config.disableWhenGatewayUnreachable;
    this._disableWhenMxtunnelDown = config.disableWhenMxtunnelDown;
    this._disableWmm = config.disableWmm;
    this._dnsServerRewrite.internalValue = config.dnsServerRewrite;
    this._dtim = config.dtim;
    this._dynamicPsk.internalValue = config.dynamicPsk;
    this._dynamicVlan.internalValue = config.dynamicVlan;
    this._enableLocalKeycaching = config.enableLocalKeycaching;
    this._enableWirelessBridging = config.enableWirelessBridging;
    this._enableWirelessBridgingDhcpTracking = config.enableWirelessBridgingDhcpTracking;
    this._enabled = config.enabled;
    this._fastDot1XTimers = config.fastDot1XTimers;
    this._hideSsid = config.hideSsid;
    this._hostnameIe = config.hostnameIe;
    this._hotspot20.internalValue = config.hotspot20;
    this._injectDhcpOption82.internalValue = config.injectDhcpOption82;
    this._interface = config.interface;
    this._isolation = config.isolation;
    this._l2Isolation = config.l2Isolation;
    this._legacyOverds = config.legacyOverds;
    this._limitBcast = config.limitBcast;
    this._limitProbeResponse = config.limitProbeResponse;
    this._maxIdletime = config.maxIdletime;
    this._maxNumClients = config.maxNumClients;
    this._mistNac.internalValue = config.mistNac;
    this._mxtunnelIds = config.mxtunnelIds;
    this._mxtunnelName = config.mxtunnelName;
    this._noStaticDns = config.noStaticDns;
    this._noStaticIp = config.noStaticIp;
    this._orgId = config.orgId;
    this._portal.internalValue = config.portal;
    this._portalAllowedHostnames = config.portalAllowedHostnames;
    this._portalAllowedSubnets = config.portalAllowedSubnets;
    this._portalDeniedHostnames = config.portalDeniedHostnames;
    this._qos.internalValue = config.qos;
    this._radsec.internalValue = config.radsec;
    this._rateset.internalValue = config.rateset;
    this._reconnectClientsWhenRoamingMxcluster = config.reconnectClientsWhenRoamingMxcluster;
    this._roamMode = config.roamMode;
    this._schedule.internalValue = config.schedule;
    this._sleExcluded = config.sleExcluded;
    this._ssid = config.ssid;
    this._templateId = config.templateId;
    this._useEapolV1 = config.useEapolV1;
    this._vlanEnabled = config.vlanEnabled;
    this._vlanId = config.vlanId;
    this._vlanIds = config.vlanIds;
    this._vlanPooling = config.vlanPooling;
    this._wlanLimitDown = config.wlanLimitDown;
    this._wlanLimitDownEnabled = config.wlanLimitDownEnabled;
    this._wlanLimitUp = config.wlanLimitUp;
    this._wlanLimitUpEnabled = config.wlanLimitUpEnabled;
    this._wxtagIds = config.wxtagIds;
    this._wxtunnelId = config.wxtunnelId;
    this._wxtunnelRemoteId = config.wxtunnelRemoteId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // acct_immediate_update - computed: true, optional: true, required: false
  private _acctImmediateUpdate?: boolean | cdktf.IResolvable; 
  public get acctImmediateUpdate() {
    return this.getBooleanAttribute('acct_immediate_update');
  }
  public set acctImmediateUpdate(value: boolean | cdktf.IResolvable) {
    this._acctImmediateUpdate = value;
  }
  public resetAcctImmediateUpdate() {
    this._acctImmediateUpdate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acctImmediateUpdateInput() {
    return this._acctImmediateUpdate;
  }

  // acct_interim_interval - computed: true, optional: true, required: false
  private _acctInterimInterval?: number; 
  public get acctInterimInterval() {
    return this.getNumberAttribute('acct_interim_interval');
  }
  public set acctInterimInterval(value: number) {
    this._acctInterimInterval = value;
  }
  public resetAcctInterimInterval() {
    this._acctInterimInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acctInterimIntervalInput() {
    return this._acctInterimInterval;
  }

  // acct_servers - computed: true, optional: true, required: false
  private _acctServers = new OrgWlanAcctServersList(this, "acct_servers", false);
  public get acctServers() {
    return this._acctServers;
  }
  public putAcctServers(value: OrgWlanAcctServers[] | cdktf.IResolvable) {
    this._acctServers.internalValue = value;
  }
  public resetAcctServers() {
    this._acctServers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acctServersInput() {
    return this._acctServers.internalValue;
  }

  // airwatch - computed: true, optional: true, required: false
  private _airwatch = new OrgWlanAirwatchOutputReference(this, "airwatch");
  public get airwatch() {
    return this._airwatch;
  }
  public putAirwatch(value: OrgWlanAirwatch) {
    this._airwatch.internalValue = value;
  }
  public resetAirwatch() {
    this._airwatch.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get airwatchInput() {
    return this._airwatch.internalValue;
  }

  // allow_ipv6_ndp - computed: true, optional: true, required: false
  private _allowIpv6Ndp?: boolean | cdktf.IResolvable; 
  public get allowIpv6Ndp() {
    return this.getBooleanAttribute('allow_ipv6_ndp');
  }
  public set allowIpv6Ndp(value: boolean | cdktf.IResolvable) {
    this._allowIpv6Ndp = value;
  }
  public resetAllowIpv6Ndp() {
    this._allowIpv6Ndp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowIpv6NdpInput() {
    return this._allowIpv6Ndp;
  }

  // allow_mdns - computed: true, optional: true, required: false
  private _allowMdns?: boolean | cdktf.IResolvable; 
  public get allowMdns() {
    return this.getBooleanAttribute('allow_mdns');
  }
  public set allowMdns(value: boolean | cdktf.IResolvable) {
    this._allowMdns = value;
  }
  public resetAllowMdns() {
    this._allowMdns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowMdnsInput() {
    return this._allowMdns;
  }

  // allow_ssdp - computed: true, optional: true, required: false
  private _allowSsdp?: boolean | cdktf.IResolvable; 
  public get allowSsdp() {
    return this.getBooleanAttribute('allow_ssdp');
  }
  public set allowSsdp(value: boolean | cdktf.IResolvable) {
    this._allowSsdp = value;
  }
  public resetAllowSsdp() {
    this._allowSsdp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowSsdpInput() {
    return this._allowSsdp;
  }

  // ap_ids - computed: true, optional: true, required: false
  private _apIds?: string[]; 
  public get apIds() {
    return this.getListAttribute('ap_ids');
  }
  public set apIds(value: string[]) {
    this._apIds = value;
  }
  public resetApIds() {
    this._apIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apIdsInput() {
    return this._apIds;
  }

  // app_limit - computed: false, optional: true, required: false
  private _appLimit = new OrgWlanAppLimitOutputReference(this, "app_limit");
  public get appLimit() {
    return this._appLimit;
  }
  public putAppLimit(value: OrgWlanAppLimit) {
    this._appLimit.internalValue = value;
  }
  public resetAppLimit() {
    this._appLimit.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appLimitInput() {
    return this._appLimit.internalValue;
  }

  // app_qos - computed: true, optional: true, required: false
  private _appQos = new OrgWlanAppQosOutputReference(this, "app_qos");
  public get appQos() {
    return this._appQos;
  }
  public putAppQos(value: OrgWlanAppQos) {
    this._appQos.internalValue = value;
  }
  public resetAppQos() {
    this._appQos.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appQosInput() {
    return this._appQos.internalValue;
  }

  // apply_to - computed: true, optional: true, required: false
  private _applyTo?: string; 
  public get applyTo() {
    return this.getStringAttribute('apply_to');
  }
  public set applyTo(value: string) {
    this._applyTo = value;
  }
  public resetApplyTo() {
    this._applyTo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applyToInput() {
    return this._applyTo;
  }

  // arp_filter - computed: true, optional: true, required: false
  private _arpFilter?: boolean | cdktf.IResolvable; 
  public get arpFilter() {
    return this.getBooleanAttribute('arp_filter');
  }
  public set arpFilter(value: boolean | cdktf.IResolvable) {
    this._arpFilter = value;
  }
  public resetArpFilter() {
    this._arpFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arpFilterInput() {
    return this._arpFilter;
  }

  // auth - computed: false, optional: true, required: false
  private _auth = new OrgWlanAuthOutputReference(this, "auth");
  public get auth() {
    return this._auth;
  }
  public putAuth(value: OrgWlanAuth) {
    this._auth.internalValue = value;
  }
  public resetAuth() {
    this._auth.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authInput() {
    return this._auth.internalValue;
  }

  // auth_server_selection - computed: true, optional: true, required: false
  private _authServerSelection?: string; 
  public get authServerSelection() {
    return this.getStringAttribute('auth_server_selection');
  }
  public set authServerSelection(value: string) {
    this._authServerSelection = value;
  }
  public resetAuthServerSelection() {
    this._authServerSelection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authServerSelectionInput() {
    return this._authServerSelection;
  }

  // auth_servers - computed: true, optional: true, required: false
  private _authServers = new OrgWlanAuthServersList(this, "auth_servers", false);
  public get authServers() {
    return this._authServers;
  }
  public putAuthServers(value: OrgWlanAuthServers[] | cdktf.IResolvable) {
    this._authServers.internalValue = value;
  }
  public resetAuthServers() {
    this._authServers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authServersInput() {
    return this._authServers.internalValue;
  }

  // auth_servers_nas_id - computed: true, optional: true, required: false
  private _authServersNasId?: string; 
  public get authServersNasId() {
    return this.getStringAttribute('auth_servers_nas_id');
  }
  public set authServersNasId(value: string) {
    this._authServersNasId = value;
  }
  public resetAuthServersNasId() {
    this._authServersNasId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authServersNasIdInput() {
    return this._authServersNasId;
  }

  // auth_servers_nas_ip - computed: true, optional: true, required: false
  private _authServersNasIp?: string; 
  public get authServersNasIp() {
    return this.getStringAttribute('auth_servers_nas_ip');
  }
  public set authServersNasIp(value: string) {
    this._authServersNasIp = value;
  }
  public resetAuthServersNasIp() {
    this._authServersNasIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authServersNasIpInput() {
    return this._authServersNasIp;
  }

  // auth_servers_retries - computed: false, optional: true, required: false
  private _authServersRetries?: number; 
  public get authServersRetries() {
    return this.getNumberAttribute('auth_servers_retries');
  }
  public set authServersRetries(value: number) {
    this._authServersRetries = value;
  }
  public resetAuthServersRetries() {
    this._authServersRetries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authServersRetriesInput() {
    return this._authServersRetries;
  }

  // auth_servers_timeout - computed: false, optional: true, required: false
  private _authServersTimeout?: number; 
  public get authServersTimeout() {
    return this.getNumberAttribute('auth_servers_timeout');
  }
  public set authServersTimeout(value: number) {
    this._authServersTimeout = value;
  }
  public resetAuthServersTimeout() {
    this._authServersTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authServersTimeoutInput() {
    return this._authServersTimeout;
  }

  // band_steer - computed: true, optional: true, required: false
  private _bandSteer?: boolean | cdktf.IResolvable; 
  public get bandSteer() {
    return this.getBooleanAttribute('band_steer');
  }
  public set bandSteer(value: boolean | cdktf.IResolvable) {
    this._bandSteer = value;
  }
  public resetBandSteer() {
    this._bandSteer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bandSteerInput() {
    return this._bandSteer;
  }

  // band_steer_force_band5 - computed: false, optional: true, required: false
  private _bandSteerForceBand5?: boolean | cdktf.IResolvable; 
  public get bandSteerForceBand5() {
    return this.getBooleanAttribute('band_steer_force_band5');
  }
  public set bandSteerForceBand5(value: boolean | cdktf.IResolvable) {
    this._bandSteerForceBand5 = value;
  }
  public resetBandSteerForceBand5() {
    this._bandSteerForceBand5 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bandSteerForceBand5Input() {
    return this._bandSteerForceBand5;
  }

  // bands - computed: false, optional: true, required: false
  private _bands?: string[]; 
  public get bands() {
    return this.getListAttribute('bands');
  }
  public set bands(value: string[]) {
    this._bands = value;
  }
  public resetBands() {
    this._bands = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bandsInput() {
    return this._bands;
  }

  // block_blacklist_clients - computed: false, optional: true, required: false
  private _blockBlacklistClients?: boolean | cdktf.IResolvable; 
  public get blockBlacklistClients() {
    return this.getBooleanAttribute('block_blacklist_clients');
  }
  public set blockBlacklistClients(value: boolean | cdktf.IResolvable) {
    this._blockBlacklistClients = value;
  }
  public resetBlockBlacklistClients() {
    this._blockBlacklistClients = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockBlacklistClientsInput() {
    return this._blockBlacklistClients;
  }

  // bonjour - computed: false, optional: true, required: false
  private _bonjour = new OrgWlanBonjourOutputReference(this, "bonjour");
  public get bonjour() {
    return this._bonjour;
  }
  public putBonjour(value: OrgWlanBonjour) {
    this._bonjour.internalValue = value;
  }
  public resetBonjour() {
    this._bonjour.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bonjourInput() {
    return this._bonjour.internalValue;
  }

  // cisco_cwa - computed: true, optional: true, required: false
  private _ciscoCwa = new OrgWlanCiscoCwaOutputReference(this, "cisco_cwa");
  public get ciscoCwa() {
    return this._ciscoCwa;
  }
  public putCiscoCwa(value: OrgWlanCiscoCwa) {
    this._ciscoCwa.internalValue = value;
  }
  public resetCiscoCwa() {
    this._ciscoCwa.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ciscoCwaInput() {
    return this._ciscoCwa.internalValue;
  }

  // client_limit_down - computed: true, optional: true, required: false
  private _clientLimitDown?: string; 
  public get clientLimitDown() {
    return this.getStringAttribute('client_limit_down');
  }
  public set clientLimitDown(value: string) {
    this._clientLimitDown = value;
  }
  public resetClientLimitDown() {
    this._clientLimitDown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientLimitDownInput() {
    return this._clientLimitDown;
  }

  // client_limit_down_enabled - computed: false, optional: true, required: false
  private _clientLimitDownEnabled?: boolean | cdktf.IResolvable; 
  public get clientLimitDownEnabled() {
    return this.getBooleanAttribute('client_limit_down_enabled');
  }
  public set clientLimitDownEnabled(value: boolean | cdktf.IResolvable) {
    this._clientLimitDownEnabled = value;
  }
  public resetClientLimitDownEnabled() {
    this._clientLimitDownEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientLimitDownEnabledInput() {
    return this._clientLimitDownEnabled;
  }

  // client_limit_up - computed: true, optional: true, required: false
  private _clientLimitUp?: string; 
  public get clientLimitUp() {
    return this.getStringAttribute('client_limit_up');
  }
  public set clientLimitUp(value: string) {
    this._clientLimitUp = value;
  }
  public resetClientLimitUp() {
    this._clientLimitUp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientLimitUpInput() {
    return this._clientLimitUp;
  }

  // client_limit_up_enabled - computed: false, optional: true, required: false
  private _clientLimitUpEnabled?: boolean | cdktf.IResolvable; 
  public get clientLimitUpEnabled() {
    return this.getBooleanAttribute('client_limit_up_enabled');
  }
  public set clientLimitUpEnabled(value: boolean | cdktf.IResolvable) {
    this._clientLimitUpEnabled = value;
  }
  public resetClientLimitUpEnabled() {
    this._clientLimitUpEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientLimitUpEnabledInput() {
    return this._clientLimitUpEnabled;
  }

  // coa_servers - computed: false, optional: true, required: false
  private _coaServers = new OrgWlanCoaServersList(this, "coa_servers", false);
  public get coaServers() {
    return this._coaServers;
  }
  public putCoaServers(value: OrgWlanCoaServers[] | cdktf.IResolvable) {
    this._coaServers.internalValue = value;
  }
  public resetCoaServers() {
    this._coaServers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get coaServersInput() {
    return this._coaServers.internalValue;
  }

  // disable_11ax - computed: true, optional: true, required: false
  private _disable11Ax?: boolean | cdktf.IResolvable; 
  public get disable11Ax() {
    return this.getBooleanAttribute('disable_11ax');
  }
  public set disable11Ax(value: boolean | cdktf.IResolvable) {
    this._disable11Ax = value;
  }
  public resetDisable11Ax() {
    this._disable11Ax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disable11AxInput() {
    return this._disable11Ax;
  }

  // disable_11be - computed: false, optional: true, required: false
  private _disable11Be?: boolean | cdktf.IResolvable; 
  public get disable11Be() {
    return this.getBooleanAttribute('disable_11be');
  }
  public set disable11Be(value: boolean | cdktf.IResolvable) {
    this._disable11Be = value;
  }
  public resetDisable11Be() {
    this._disable11Be = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disable11BeInput() {
    return this._disable11Be;
  }

  // disable_ht_vht_rates - computed: false, optional: true, required: false
  private _disableHtVhtRates?: boolean | cdktf.IResolvable; 
  public get disableHtVhtRates() {
    return this.getBooleanAttribute('disable_ht_vht_rates');
  }
  public set disableHtVhtRates(value: boolean | cdktf.IResolvable) {
    this._disableHtVhtRates = value;
  }
  public resetDisableHtVhtRates() {
    this._disableHtVhtRates = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableHtVhtRatesInput() {
    return this._disableHtVhtRates;
  }

  // disable_uapsd - computed: true, optional: true, required: false
  private _disableUapsd?: boolean | cdktf.IResolvable; 
  public get disableUapsd() {
    return this.getBooleanAttribute('disable_uapsd');
  }
  public set disableUapsd(value: boolean | cdktf.IResolvable) {
    this._disableUapsd = value;
  }
  public resetDisableUapsd() {
    this._disableUapsd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableUapsdInput() {
    return this._disableUapsd;
  }

  // disable_v1_roam_notify - computed: false, optional: true, required: false
  private _disableV1RoamNotify?: boolean | cdktf.IResolvable; 
  public get disableV1RoamNotify() {
    return this.getBooleanAttribute('disable_v1_roam_notify');
  }
  public set disableV1RoamNotify(value: boolean | cdktf.IResolvable) {
    this._disableV1RoamNotify = value;
  }
  public resetDisableV1RoamNotify() {
    this._disableV1RoamNotify = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableV1RoamNotifyInput() {
    return this._disableV1RoamNotify;
  }

  // disable_v2_roam_notify - computed: false, optional: true, required: false
  private _disableV2RoamNotify?: boolean | cdktf.IResolvable; 
  public get disableV2RoamNotify() {
    return this.getBooleanAttribute('disable_v2_roam_notify');
  }
  public set disableV2RoamNotify(value: boolean | cdktf.IResolvable) {
    this._disableV2RoamNotify = value;
  }
  public resetDisableV2RoamNotify() {
    this._disableV2RoamNotify = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableV2RoamNotifyInput() {
    return this._disableV2RoamNotify;
  }

  // disable_when_gateway_unreachable - computed: false, optional: true, required: false
  private _disableWhenGatewayUnreachable?: boolean | cdktf.IResolvable; 
  public get disableWhenGatewayUnreachable() {
    return this.getBooleanAttribute('disable_when_gateway_unreachable');
  }
  public set disableWhenGatewayUnreachable(value: boolean | cdktf.IResolvable) {
    this._disableWhenGatewayUnreachable = value;
  }
  public resetDisableWhenGatewayUnreachable() {
    this._disableWhenGatewayUnreachable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableWhenGatewayUnreachableInput() {
    return this._disableWhenGatewayUnreachable;
  }

  // disable_when_mxtunnel_down - computed: false, optional: true, required: false
  private _disableWhenMxtunnelDown?: boolean | cdktf.IResolvable; 
  public get disableWhenMxtunnelDown() {
    return this.getBooleanAttribute('disable_when_mxtunnel_down');
  }
  public set disableWhenMxtunnelDown(value: boolean | cdktf.IResolvable) {
    this._disableWhenMxtunnelDown = value;
  }
  public resetDisableWhenMxtunnelDown() {
    this._disableWhenMxtunnelDown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableWhenMxtunnelDownInput() {
    return this._disableWhenMxtunnelDown;
  }

  // disable_wmm - computed: true, optional: true, required: false
  private _disableWmm?: boolean | cdktf.IResolvable; 
  public get disableWmm() {
    return this.getBooleanAttribute('disable_wmm');
  }
  public set disableWmm(value: boolean | cdktf.IResolvable) {
    this._disableWmm = value;
  }
  public resetDisableWmm() {
    this._disableWmm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableWmmInput() {
    return this._disableWmm;
  }

  // dns_server_rewrite - computed: false, optional: true, required: false
  private _dnsServerRewrite = new OrgWlanDnsServerRewriteOutputReference(this, "dns_server_rewrite");
  public get dnsServerRewrite() {
    return this._dnsServerRewrite;
  }
  public putDnsServerRewrite(value: OrgWlanDnsServerRewrite) {
    this._dnsServerRewrite.internalValue = value;
  }
  public resetDnsServerRewrite() {
    this._dnsServerRewrite.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsServerRewriteInput() {
    return this._dnsServerRewrite.internalValue;
  }

  // dtim - computed: true, optional: true, required: false
  private _dtim?: number; 
  public get dtim() {
    return this.getNumberAttribute('dtim');
  }
  public set dtim(value: number) {
    this._dtim = value;
  }
  public resetDtim() {
    this._dtim = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dtimInput() {
    return this._dtim;
  }

  // dynamic_psk - computed: false, optional: true, required: false
  private _dynamicPsk = new OrgWlanDynamicPskOutputReference(this, "dynamic_psk");
  public get dynamicPsk() {
    return this._dynamicPsk;
  }
  public putDynamicPsk(value: OrgWlanDynamicPsk) {
    this._dynamicPsk.internalValue = value;
  }
  public resetDynamicPsk() {
    this._dynamicPsk.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicPskInput() {
    return this._dynamicPsk.internalValue;
  }

  // dynamic_vlan - computed: false, optional: true, required: false
  private _dynamicVlan = new OrgWlanDynamicVlanOutputReference(this, "dynamic_vlan");
  public get dynamicVlan() {
    return this._dynamicVlan;
  }
  public putDynamicVlan(value: OrgWlanDynamicVlan) {
    this._dynamicVlan.internalValue = value;
  }
  public resetDynamicVlan() {
    this._dynamicVlan.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicVlanInput() {
    return this._dynamicVlan.internalValue;
  }

  // enable_local_keycaching - computed: false, optional: true, required: false
  private _enableLocalKeycaching?: boolean | cdktf.IResolvable; 
  public get enableLocalKeycaching() {
    return this.getBooleanAttribute('enable_local_keycaching');
  }
  public set enableLocalKeycaching(value: boolean | cdktf.IResolvable) {
    this._enableLocalKeycaching = value;
  }
  public resetEnableLocalKeycaching() {
    this._enableLocalKeycaching = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableLocalKeycachingInput() {
    return this._enableLocalKeycaching;
  }

  // enable_wireless_bridging - computed: false, optional: true, required: false
  private _enableWirelessBridging?: boolean | cdktf.IResolvable; 
  public get enableWirelessBridging() {
    return this.getBooleanAttribute('enable_wireless_bridging');
  }
  public set enableWirelessBridging(value: boolean | cdktf.IResolvable) {
    this._enableWirelessBridging = value;
  }
  public resetEnableWirelessBridging() {
    this._enableWirelessBridging = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableWirelessBridgingInput() {
    return this._enableWirelessBridging;
  }

  // enable_wireless_bridging_dhcp_tracking - computed: false, optional: true, required: false
  private _enableWirelessBridgingDhcpTracking?: boolean | cdktf.IResolvable; 
  public get enableWirelessBridgingDhcpTracking() {
    return this.getBooleanAttribute('enable_wireless_bridging_dhcp_tracking');
  }
  public set enableWirelessBridgingDhcpTracking(value: boolean | cdktf.IResolvable) {
    this._enableWirelessBridgingDhcpTracking = value;
  }
  public resetEnableWirelessBridgingDhcpTracking() {
    this._enableWirelessBridgingDhcpTracking = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableWirelessBridgingDhcpTrackingInput() {
    return this._enableWirelessBridgingDhcpTracking;
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

  // fast_dot1x_timers - computed: false, optional: true, required: false
  private _fastDot1XTimers?: boolean | cdktf.IResolvable; 
  public get fastDot1XTimers() {
    return this.getBooleanAttribute('fast_dot1x_timers');
  }
  public set fastDot1XTimers(value: boolean | cdktf.IResolvable) {
    this._fastDot1XTimers = value;
  }
  public resetFastDot1XTimers() {
    this._fastDot1XTimers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fastDot1XTimersInput() {
    return this._fastDot1XTimers;
  }

  // hide_ssid - computed: true, optional: true, required: false
  private _hideSsid?: boolean | cdktf.IResolvable; 
  public get hideSsid() {
    return this.getBooleanAttribute('hide_ssid');
  }
  public set hideSsid(value: boolean | cdktf.IResolvable) {
    this._hideSsid = value;
  }
  public resetHideSsid() {
    this._hideSsid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hideSsidInput() {
    return this._hideSsid;
  }

  // hostname_ie - computed: true, optional: true, required: false
  private _hostnameIe?: boolean | cdktf.IResolvable; 
  public get hostnameIe() {
    return this.getBooleanAttribute('hostname_ie');
  }
  public set hostnameIe(value: boolean | cdktf.IResolvable) {
    this._hostnameIe = value;
  }
  public resetHostnameIe() {
    this._hostnameIe = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameIeInput() {
    return this._hostnameIe;
  }

  // hotspot20 - computed: false, optional: true, required: false
  private _hotspot20 = new OrgWlanHotspot20OutputReference(this, "hotspot20");
  public get hotspot20() {
    return this._hotspot20;
  }
  public putHotspot20(value: OrgWlanHotspot20) {
    this._hotspot20.internalValue = value;
  }
  public resetHotspot20() {
    this._hotspot20.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hotspot20Input() {
    return this._hotspot20.internalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // inject_dhcp_option_82 - computed: false, optional: true, required: false
  private _injectDhcpOption82 = new OrgWlanInjectDhcpOption82OutputReference(this, "inject_dhcp_option_82");
  public get injectDhcpOption82() {
    return this._injectDhcpOption82;
  }
  public putInjectDhcpOption82(value: OrgWlanInjectDhcpOption82) {
    this._injectDhcpOption82.internalValue = value;
  }
  public resetInjectDhcpOption82() {
    this._injectDhcpOption82.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get injectDhcpOption82Input() {
    return this._injectDhcpOption82.internalValue;
  }

  // interface - computed: true, optional: true, required: false
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

  // isolation - computed: false, optional: true, required: false
  private _isolation?: boolean | cdktf.IResolvable; 
  public get isolation() {
    return this.getBooleanAttribute('isolation');
  }
  public set isolation(value: boolean | cdktf.IResolvable) {
    this._isolation = value;
  }
  public resetIsolation() {
    this._isolation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isolationInput() {
    return this._isolation;
  }

  // l2_isolation - computed: false, optional: true, required: false
  private _l2Isolation?: boolean | cdktf.IResolvable; 
  public get l2Isolation() {
    return this.getBooleanAttribute('l2_isolation');
  }
  public set l2Isolation(value: boolean | cdktf.IResolvable) {
    this._l2Isolation = value;
  }
  public resetL2Isolation() {
    this._l2Isolation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l2IsolationInput() {
    return this._l2Isolation;
  }

  // legacy_overds - computed: false, optional: true, required: false
  private _legacyOverds?: boolean | cdktf.IResolvable; 
  public get legacyOverds() {
    return this.getBooleanAttribute('legacy_overds');
  }
  public set legacyOverds(value: boolean | cdktf.IResolvable) {
    this._legacyOverds = value;
  }
  public resetLegacyOverds() {
    this._legacyOverds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get legacyOverdsInput() {
    return this._legacyOverds;
  }

  // limit_bcast - computed: true, optional: true, required: false
  private _limitBcast?: boolean | cdktf.IResolvable; 
  public get limitBcast() {
    return this.getBooleanAttribute('limit_bcast');
  }
  public set limitBcast(value: boolean | cdktf.IResolvable) {
    this._limitBcast = value;
  }
  public resetLimitBcast() {
    this._limitBcast = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitBcastInput() {
    return this._limitBcast;
  }

  // limit_probe_response - computed: true, optional: true, required: false
  private _limitProbeResponse?: boolean | cdktf.IResolvable; 
  public get limitProbeResponse() {
    return this.getBooleanAttribute('limit_probe_response');
  }
  public set limitProbeResponse(value: boolean | cdktf.IResolvable) {
    this._limitProbeResponse = value;
  }
  public resetLimitProbeResponse() {
    this._limitProbeResponse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitProbeResponseInput() {
    return this._limitProbeResponse;
  }

  // max_idletime - computed: true, optional: true, required: false
  private _maxIdletime?: number; 
  public get maxIdletime() {
    return this.getNumberAttribute('max_idletime');
  }
  public set maxIdletime(value: number) {
    this._maxIdletime = value;
  }
  public resetMaxIdletime() {
    this._maxIdletime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxIdletimeInput() {
    return this._maxIdletime;
  }

  // max_num_clients - computed: false, optional: true, required: false
  private _maxNumClients?: number; 
  public get maxNumClients() {
    return this.getNumberAttribute('max_num_clients');
  }
  public set maxNumClients(value: number) {
    this._maxNumClients = value;
  }
  public resetMaxNumClients() {
    this._maxNumClients = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxNumClientsInput() {
    return this._maxNumClients;
  }

  // mist_nac - computed: true, optional: true, required: false
  private _mistNac = new OrgWlanMistNacOutputReference(this, "mist_nac");
  public get mistNac() {
    return this._mistNac;
  }
  public putMistNac(value: OrgWlanMistNac) {
    this._mistNac.internalValue = value;
  }
  public resetMistNac() {
    this._mistNac.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mistNacInput() {
    return this._mistNac.internalValue;
  }

  // msp_id - computed: true, optional: false, required: false
  public get mspId() {
    return this.getStringAttribute('msp_id');
  }

  // mxtunnel_ids - computed: true, optional: true, required: false
  private _mxtunnelIds?: string[]; 
  public get mxtunnelIds() {
    return this.getListAttribute('mxtunnel_ids');
  }
  public set mxtunnelIds(value: string[]) {
    this._mxtunnelIds = value;
  }
  public resetMxtunnelIds() {
    this._mxtunnelIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mxtunnelIdsInput() {
    return this._mxtunnelIds;
  }

  // mxtunnel_name - computed: true, optional: true, required: false
  private _mxtunnelName?: string[]; 
  public get mxtunnelName() {
    return this.getListAttribute('mxtunnel_name');
  }
  public set mxtunnelName(value: string[]) {
    this._mxtunnelName = value;
  }
  public resetMxtunnelName() {
    this._mxtunnelName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mxtunnelNameInput() {
    return this._mxtunnelName;
  }

  // no_static_dns - computed: true, optional: true, required: false
  private _noStaticDns?: boolean | cdktf.IResolvable; 
  public get noStaticDns() {
    return this.getBooleanAttribute('no_static_dns');
  }
  public set noStaticDns(value: boolean | cdktf.IResolvable) {
    this._noStaticDns = value;
  }
  public resetNoStaticDns() {
    this._noStaticDns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noStaticDnsInput() {
    return this._noStaticDns;
  }

  // no_static_ip - computed: true, optional: true, required: false
  private _noStaticIp?: boolean | cdktf.IResolvable; 
  public get noStaticIp() {
    return this.getBooleanAttribute('no_static_ip');
  }
  public set noStaticIp(value: boolean | cdktf.IResolvable) {
    this._noStaticIp = value;
  }
  public resetNoStaticIp() {
    this._noStaticIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noStaticIpInput() {
    return this._noStaticIp;
  }

  // org_id - computed: false, optional: false, required: true
  private _orgId?: string; 
  public get orgId() {
    return this.getStringAttribute('org_id');
  }
  public set orgId(value: string) {
    this._orgId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get orgIdInput() {
    return this._orgId;
  }

  // portal - computed: true, optional: true, required: false
  private _portal = new OrgWlanPortalOutputReference(this, "portal");
  public get portal() {
    return this._portal;
  }
  public putPortal(value: OrgWlanPortal) {
    this._portal.internalValue = value;
  }
  public resetPortal() {
    this._portal.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portalInput() {
    return this._portal.internalValue;
  }

  // portal_allowed_hostnames - computed: true, optional: true, required: false
  private _portalAllowedHostnames?: string[]; 
  public get portalAllowedHostnames() {
    return this.getListAttribute('portal_allowed_hostnames');
  }
  public set portalAllowedHostnames(value: string[]) {
    this._portalAllowedHostnames = value;
  }
  public resetPortalAllowedHostnames() {
    this._portalAllowedHostnames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portalAllowedHostnamesInput() {
    return this._portalAllowedHostnames;
  }

  // portal_allowed_subnets - computed: true, optional: true, required: false
  private _portalAllowedSubnets?: string[]; 
  public get portalAllowedSubnets() {
    return this.getListAttribute('portal_allowed_subnets');
  }
  public set portalAllowedSubnets(value: string[]) {
    this._portalAllowedSubnets = value;
  }
  public resetPortalAllowedSubnets() {
    this._portalAllowedSubnets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portalAllowedSubnetsInput() {
    return this._portalAllowedSubnets;
  }

  // portal_api_secret - computed: true, optional: false, required: false
  public get portalApiSecret() {
    return this.getStringAttribute('portal_api_secret');
  }

  // portal_denied_hostnames - computed: true, optional: true, required: false
  private _portalDeniedHostnames?: string[]; 
  public get portalDeniedHostnames() {
    return this.getListAttribute('portal_denied_hostnames');
  }
  public set portalDeniedHostnames(value: string[]) {
    this._portalDeniedHostnames = value;
  }
  public resetPortalDeniedHostnames() {
    this._portalDeniedHostnames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portalDeniedHostnamesInput() {
    return this._portalDeniedHostnames;
  }

  // portal_image - computed: true, optional: false, required: false
  public get portalImage() {
    return this.getStringAttribute('portal_image');
  }

  // portal_sso_url - computed: true, optional: false, required: false
  public get portalSsoUrl() {
    return this.getStringAttribute('portal_sso_url');
  }

  // qos - computed: true, optional: true, required: false
  private _qos = new OrgWlanQosOutputReference(this, "qos");
  public get qos() {
    return this._qos;
  }
  public putQos(value: OrgWlanQos) {
    this._qos.internalValue = value;
  }
  public resetQos() {
    this._qos.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get qosInput() {
    return this._qos.internalValue;
  }

  // radsec - computed: true, optional: true, required: false
  private _radsec = new OrgWlanRadsecOutputReference(this, "radsec");
  public get radsec() {
    return this._radsec;
  }
  public putRadsec(value: OrgWlanRadsec) {
    this._radsec.internalValue = value;
  }
  public resetRadsec() {
    this._radsec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radsecInput() {
    return this._radsec.internalValue;
  }

  // rateset - computed: true, optional: true, required: false
  private _rateset = new OrgWlanRatesetMap(this, "rateset");
  public get rateset() {
    return this._rateset;
  }
  public putRateset(value: { [key: string]: OrgWlanRateset } | cdktf.IResolvable) {
    this._rateset.internalValue = value;
  }
  public resetRateset() {
    this._rateset.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ratesetInput() {
    return this._rateset.internalValue;
  }

  // reconnect_clients_when_roaming_mxcluster - computed: false, optional: true, required: false
  private _reconnectClientsWhenRoamingMxcluster?: boolean | cdktf.IResolvable; 
  public get reconnectClientsWhenRoamingMxcluster() {
    return this.getBooleanAttribute('reconnect_clients_when_roaming_mxcluster');
  }
  public set reconnectClientsWhenRoamingMxcluster(value: boolean | cdktf.IResolvable) {
    this._reconnectClientsWhenRoamingMxcluster = value;
  }
  public resetReconnectClientsWhenRoamingMxcluster() {
    this._reconnectClientsWhenRoamingMxcluster = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reconnectClientsWhenRoamingMxclusterInput() {
    return this._reconnectClientsWhenRoamingMxcluster;
  }

  // roam_mode - computed: false, optional: true, required: false
  private _roamMode?: string; 
  public get roamMode() {
    return this.getStringAttribute('roam_mode');
  }
  public set roamMode(value: string) {
    this._roamMode = value;
  }
  public resetRoamMode() {
    this._roamMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roamModeInput() {
    return this._roamMode;
  }

  // schedule - computed: true, optional: true, required: false
  private _schedule = new OrgWlanScheduleOutputReference(this, "schedule");
  public get schedule() {
    return this._schedule;
  }
  public putSchedule(value: OrgWlanSchedule) {
    this._schedule.internalValue = value;
  }
  public resetSchedule() {
    this._schedule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleInput() {
    return this._schedule.internalValue;
  }

  // sle_excluded - computed: false, optional: true, required: false
  private _sleExcluded?: boolean | cdktf.IResolvable; 
  public get sleExcluded() {
    return this.getBooleanAttribute('sle_excluded');
  }
  public set sleExcluded(value: boolean | cdktf.IResolvable) {
    this._sleExcluded = value;
  }
  public resetSleExcluded() {
    this._sleExcluded = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sleExcludedInput() {
    return this._sleExcluded;
  }

  // ssid - computed: false, optional: false, required: true
  private _ssid?: string; 
  public get ssid() {
    return this.getStringAttribute('ssid');
  }
  public set ssid(value: string) {
    this._ssid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ssidInput() {
    return this._ssid;
  }

  // template_id - computed: false, optional: false, required: true
  private _templateId?: string; 
  public get templateId() {
    return this.getStringAttribute('template_id');
  }
  public set templateId(value: string) {
    this._templateId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get templateIdInput() {
    return this._templateId;
  }

  // use_eapol_v1 - computed: true, optional: true, required: false
  private _useEapolV1?: boolean | cdktf.IResolvable; 
  public get useEapolV1() {
    return this.getBooleanAttribute('use_eapol_v1');
  }
  public set useEapolV1(value: boolean | cdktf.IResolvable) {
    this._useEapolV1 = value;
  }
  public resetUseEapolV1() {
    this._useEapolV1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useEapolV1Input() {
    return this._useEapolV1;
  }

  // vlan_enabled - computed: true, optional: true, required: false
  private _vlanEnabled?: boolean | cdktf.IResolvable; 
  public get vlanEnabled() {
    return this.getBooleanAttribute('vlan_enabled');
  }
  public set vlanEnabled(value: boolean | cdktf.IResolvable) {
    this._vlanEnabled = value;
  }
  public resetVlanEnabled() {
    this._vlanEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanEnabledInput() {
    return this._vlanEnabled;
  }

  // vlan_id - computed: false, optional: true, required: false
  private _vlanId?: string; 
  public get vlanId() {
    return this.getStringAttribute('vlan_id');
  }
  public set vlanId(value: string) {
    this._vlanId = value;
  }
  public resetVlanId() {
    this._vlanId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanIdInput() {
    return this._vlanId;
  }

  // vlan_ids - computed: true, optional: true, required: false
  private _vlanIds?: string[]; 
  public get vlanIds() {
    return this.getListAttribute('vlan_ids');
  }
  public set vlanIds(value: string[]) {
    this._vlanIds = value;
  }
  public resetVlanIds() {
    this._vlanIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanIdsInput() {
    return this._vlanIds;
  }

  // vlan_pooling - computed: true, optional: true, required: false
  private _vlanPooling?: boolean | cdktf.IResolvable; 
  public get vlanPooling() {
    return this.getBooleanAttribute('vlan_pooling');
  }
  public set vlanPooling(value: boolean | cdktf.IResolvable) {
    this._vlanPooling = value;
  }
  public resetVlanPooling() {
    this._vlanPooling = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanPoolingInput() {
    return this._vlanPooling;
  }

  // wlan_limit_down - computed: true, optional: true, required: false
  private _wlanLimitDown?: string; 
  public get wlanLimitDown() {
    return this.getStringAttribute('wlan_limit_down');
  }
  public set wlanLimitDown(value: string) {
    this._wlanLimitDown = value;
  }
  public resetWlanLimitDown() {
    this._wlanLimitDown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wlanLimitDownInput() {
    return this._wlanLimitDown;
  }

  // wlan_limit_down_enabled - computed: false, optional: true, required: false
  private _wlanLimitDownEnabled?: boolean | cdktf.IResolvable; 
  public get wlanLimitDownEnabled() {
    return this.getBooleanAttribute('wlan_limit_down_enabled');
  }
  public set wlanLimitDownEnabled(value: boolean | cdktf.IResolvable) {
    this._wlanLimitDownEnabled = value;
  }
  public resetWlanLimitDownEnabled() {
    this._wlanLimitDownEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wlanLimitDownEnabledInput() {
    return this._wlanLimitDownEnabled;
  }

  // wlan_limit_up - computed: true, optional: true, required: false
  private _wlanLimitUp?: string; 
  public get wlanLimitUp() {
    return this.getStringAttribute('wlan_limit_up');
  }
  public set wlanLimitUp(value: string) {
    this._wlanLimitUp = value;
  }
  public resetWlanLimitUp() {
    this._wlanLimitUp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wlanLimitUpInput() {
    return this._wlanLimitUp;
  }

  // wlan_limit_up_enabled - computed: false, optional: true, required: false
  private _wlanLimitUpEnabled?: boolean | cdktf.IResolvable; 
  public get wlanLimitUpEnabled() {
    return this.getBooleanAttribute('wlan_limit_up_enabled');
  }
  public set wlanLimitUpEnabled(value: boolean | cdktf.IResolvable) {
    this._wlanLimitUpEnabled = value;
  }
  public resetWlanLimitUpEnabled() {
    this._wlanLimitUpEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wlanLimitUpEnabledInput() {
    return this._wlanLimitUpEnabled;
  }

  // wxtag_ids - computed: true, optional: true, required: false
  private _wxtagIds?: string[]; 
  public get wxtagIds() {
    return this.getListAttribute('wxtag_ids');
  }
  public set wxtagIds(value: string[]) {
    this._wxtagIds = value;
  }
  public resetWxtagIds() {
    this._wxtagIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wxtagIdsInput() {
    return this._wxtagIds;
  }

  // wxtunnel_id - computed: true, optional: true, required: false
  private _wxtunnelId?: string; 
  public get wxtunnelId() {
    return this.getStringAttribute('wxtunnel_id');
  }
  public set wxtunnelId(value: string) {
    this._wxtunnelId = value;
  }
  public resetWxtunnelId() {
    this._wxtunnelId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wxtunnelIdInput() {
    return this._wxtunnelId;
  }

  // wxtunnel_remote_id - computed: true, optional: true, required: false
  private _wxtunnelRemoteId?: string; 
  public get wxtunnelRemoteId() {
    return this.getStringAttribute('wxtunnel_remote_id');
  }
  public set wxtunnelRemoteId(value: string) {
    this._wxtunnelRemoteId = value;
  }
  public resetWxtunnelRemoteId() {
    this._wxtunnelRemoteId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wxtunnelRemoteIdInput() {
    return this._wxtunnelRemoteId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      acct_immediate_update: cdktf.booleanToTerraform(this._acctImmediateUpdate),
      acct_interim_interval: cdktf.numberToTerraform(this._acctInterimInterval),
      acct_servers: cdktf.listMapper(orgWlanAcctServersToTerraform, false)(this._acctServers.internalValue),
      airwatch: orgWlanAirwatchToTerraform(this._airwatch.internalValue),
      allow_ipv6_ndp: cdktf.booleanToTerraform(this._allowIpv6Ndp),
      allow_mdns: cdktf.booleanToTerraform(this._allowMdns),
      allow_ssdp: cdktf.booleanToTerraform(this._allowSsdp),
      ap_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._apIds),
      app_limit: orgWlanAppLimitToTerraform(this._appLimit.internalValue),
      app_qos: orgWlanAppQosToTerraform(this._appQos.internalValue),
      apply_to: cdktf.stringToTerraform(this._applyTo),
      arp_filter: cdktf.booleanToTerraform(this._arpFilter),
      auth: orgWlanAuthToTerraform(this._auth.internalValue),
      auth_server_selection: cdktf.stringToTerraform(this._authServerSelection),
      auth_servers: cdktf.listMapper(orgWlanAuthServersToTerraform, false)(this._authServers.internalValue),
      auth_servers_nas_id: cdktf.stringToTerraform(this._authServersNasId),
      auth_servers_nas_ip: cdktf.stringToTerraform(this._authServersNasIp),
      auth_servers_retries: cdktf.numberToTerraform(this._authServersRetries),
      auth_servers_timeout: cdktf.numberToTerraform(this._authServersTimeout),
      band_steer: cdktf.booleanToTerraform(this._bandSteer),
      band_steer_force_band5: cdktf.booleanToTerraform(this._bandSteerForceBand5),
      bands: cdktf.listMapper(cdktf.stringToTerraform, false)(this._bands),
      block_blacklist_clients: cdktf.booleanToTerraform(this._blockBlacklistClients),
      bonjour: orgWlanBonjourToTerraform(this._bonjour.internalValue),
      cisco_cwa: orgWlanCiscoCwaToTerraform(this._ciscoCwa.internalValue),
      client_limit_down: cdktf.stringToTerraform(this._clientLimitDown),
      client_limit_down_enabled: cdktf.booleanToTerraform(this._clientLimitDownEnabled),
      client_limit_up: cdktf.stringToTerraform(this._clientLimitUp),
      client_limit_up_enabled: cdktf.booleanToTerraform(this._clientLimitUpEnabled),
      coa_servers: cdktf.listMapper(orgWlanCoaServersToTerraform, false)(this._coaServers.internalValue),
      disable_11ax: cdktf.booleanToTerraform(this._disable11Ax),
      disable_11be: cdktf.booleanToTerraform(this._disable11Be),
      disable_ht_vht_rates: cdktf.booleanToTerraform(this._disableHtVhtRates),
      disable_uapsd: cdktf.booleanToTerraform(this._disableUapsd),
      disable_v1_roam_notify: cdktf.booleanToTerraform(this._disableV1RoamNotify),
      disable_v2_roam_notify: cdktf.booleanToTerraform(this._disableV2RoamNotify),
      disable_when_gateway_unreachable: cdktf.booleanToTerraform(this._disableWhenGatewayUnreachable),
      disable_when_mxtunnel_down: cdktf.booleanToTerraform(this._disableWhenMxtunnelDown),
      disable_wmm: cdktf.booleanToTerraform(this._disableWmm),
      dns_server_rewrite: orgWlanDnsServerRewriteToTerraform(this._dnsServerRewrite.internalValue),
      dtim: cdktf.numberToTerraform(this._dtim),
      dynamic_psk: orgWlanDynamicPskToTerraform(this._dynamicPsk.internalValue),
      dynamic_vlan: orgWlanDynamicVlanToTerraform(this._dynamicVlan.internalValue),
      enable_local_keycaching: cdktf.booleanToTerraform(this._enableLocalKeycaching),
      enable_wireless_bridging: cdktf.booleanToTerraform(this._enableWirelessBridging),
      enable_wireless_bridging_dhcp_tracking: cdktf.booleanToTerraform(this._enableWirelessBridgingDhcpTracking),
      enabled: cdktf.booleanToTerraform(this._enabled),
      fast_dot1x_timers: cdktf.booleanToTerraform(this._fastDot1XTimers),
      hide_ssid: cdktf.booleanToTerraform(this._hideSsid),
      hostname_ie: cdktf.booleanToTerraform(this._hostnameIe),
      hotspot20: orgWlanHotspot20ToTerraform(this._hotspot20.internalValue),
      inject_dhcp_option_82: orgWlanInjectDhcpOption82ToTerraform(this._injectDhcpOption82.internalValue),
      interface: cdktf.stringToTerraform(this._interface),
      isolation: cdktf.booleanToTerraform(this._isolation),
      l2_isolation: cdktf.booleanToTerraform(this._l2Isolation),
      legacy_overds: cdktf.booleanToTerraform(this._legacyOverds),
      limit_bcast: cdktf.booleanToTerraform(this._limitBcast),
      limit_probe_response: cdktf.booleanToTerraform(this._limitProbeResponse),
      max_idletime: cdktf.numberToTerraform(this._maxIdletime),
      max_num_clients: cdktf.numberToTerraform(this._maxNumClients),
      mist_nac: orgWlanMistNacToTerraform(this._mistNac.internalValue),
      mxtunnel_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._mxtunnelIds),
      mxtunnel_name: cdktf.listMapper(cdktf.stringToTerraform, false)(this._mxtunnelName),
      no_static_dns: cdktf.booleanToTerraform(this._noStaticDns),
      no_static_ip: cdktf.booleanToTerraform(this._noStaticIp),
      org_id: cdktf.stringToTerraform(this._orgId),
      portal: orgWlanPortalToTerraform(this._portal.internalValue),
      portal_allowed_hostnames: cdktf.listMapper(cdktf.stringToTerraform, false)(this._portalAllowedHostnames),
      portal_allowed_subnets: cdktf.listMapper(cdktf.stringToTerraform, false)(this._portalAllowedSubnets),
      portal_denied_hostnames: cdktf.listMapper(cdktf.stringToTerraform, false)(this._portalDeniedHostnames),
      qos: orgWlanQosToTerraform(this._qos.internalValue),
      radsec: orgWlanRadsecToTerraform(this._radsec.internalValue),
      rateset: cdktf.hashMapper(orgWlanRatesetToTerraform)(this._rateset.internalValue),
      reconnect_clients_when_roaming_mxcluster: cdktf.booleanToTerraform(this._reconnectClientsWhenRoamingMxcluster),
      roam_mode: cdktf.stringToTerraform(this._roamMode),
      schedule: orgWlanScheduleToTerraform(this._schedule.internalValue),
      sle_excluded: cdktf.booleanToTerraform(this._sleExcluded),
      ssid: cdktf.stringToTerraform(this._ssid),
      template_id: cdktf.stringToTerraform(this._templateId),
      use_eapol_v1: cdktf.booleanToTerraform(this._useEapolV1),
      vlan_enabled: cdktf.booleanToTerraform(this._vlanEnabled),
      vlan_id: cdktf.stringToTerraform(this._vlanId),
      vlan_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._vlanIds),
      vlan_pooling: cdktf.booleanToTerraform(this._vlanPooling),
      wlan_limit_down: cdktf.stringToTerraform(this._wlanLimitDown),
      wlan_limit_down_enabled: cdktf.booleanToTerraform(this._wlanLimitDownEnabled),
      wlan_limit_up: cdktf.stringToTerraform(this._wlanLimitUp),
      wlan_limit_up_enabled: cdktf.booleanToTerraform(this._wlanLimitUpEnabled),
      wxtag_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._wxtagIds),
      wxtunnel_id: cdktf.stringToTerraform(this._wxtunnelId),
      wxtunnel_remote_id: cdktf.stringToTerraform(this._wxtunnelRemoteId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      acct_immediate_update: {
        value: cdktf.booleanToHclTerraform(this._acctImmediateUpdate),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      acct_interim_interval: {
        value: cdktf.numberToHclTerraform(this._acctInterimInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      acct_servers: {
        value: cdktf.listMapperHcl(orgWlanAcctServersToHclTerraform, false)(this._acctServers.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OrgWlanAcctServersList",
      },
      airwatch: {
        value: orgWlanAirwatchToHclTerraform(this._airwatch.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "OrgWlanAirwatch",
      },
      allow_ipv6_ndp: {
        value: cdktf.booleanToHclTerraform(this._allowIpv6Ndp),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      allow_mdns: {
        value: cdktf.booleanToHclTerraform(this._allowMdns),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      allow_ssdp: {
        value: cdktf.booleanToHclTerraform(this._allowSsdp),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ap_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._apIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      app_limit: {
        value: orgWlanAppLimitToHclTerraform(this._appLimit.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "OrgWlanAppLimit",
      },
      app_qos: {
        value: orgWlanAppQosToHclTerraform(this._appQos.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "OrgWlanAppQos",
      },
      apply_to: {
        value: cdktf.stringToHclTerraform(this._applyTo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      arp_filter: {
        value: cdktf.booleanToHclTerraform(this._arpFilter),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      auth: {
        value: orgWlanAuthToHclTerraform(this._auth.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "OrgWlanAuth",
      },
      auth_server_selection: {
        value: cdktf.stringToHclTerraform(this._authServerSelection),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auth_servers: {
        value: cdktf.listMapperHcl(orgWlanAuthServersToHclTerraform, false)(this._authServers.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OrgWlanAuthServersList",
      },
      auth_servers_nas_id: {
        value: cdktf.stringToHclTerraform(this._authServersNasId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auth_servers_nas_ip: {
        value: cdktf.stringToHclTerraform(this._authServersNasIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auth_servers_retries: {
        value: cdktf.numberToHclTerraform(this._authServersRetries),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      auth_servers_timeout: {
        value: cdktf.numberToHclTerraform(this._authServersTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      band_steer: {
        value: cdktf.booleanToHclTerraform(this._bandSteer),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      band_steer_force_band5: {
        value: cdktf.booleanToHclTerraform(this._bandSteerForceBand5),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      bands: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._bands),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      block_blacklist_clients: {
        value: cdktf.booleanToHclTerraform(this._blockBlacklistClients),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      bonjour: {
        value: orgWlanBonjourToHclTerraform(this._bonjour.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "OrgWlanBonjour",
      },
      cisco_cwa: {
        value: orgWlanCiscoCwaToHclTerraform(this._ciscoCwa.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "OrgWlanCiscoCwa",
      },
      client_limit_down: {
        value: cdktf.stringToHclTerraform(this._clientLimitDown),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_limit_down_enabled: {
        value: cdktf.booleanToHclTerraform(this._clientLimitDownEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      client_limit_up: {
        value: cdktf.stringToHclTerraform(this._clientLimitUp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_limit_up_enabled: {
        value: cdktf.booleanToHclTerraform(this._clientLimitUpEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      coa_servers: {
        value: cdktf.listMapperHcl(orgWlanCoaServersToHclTerraform, false)(this._coaServers.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OrgWlanCoaServersList",
      },
      disable_11ax: {
        value: cdktf.booleanToHclTerraform(this._disable11Ax),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      disable_11be: {
        value: cdktf.booleanToHclTerraform(this._disable11Be),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      disable_ht_vht_rates: {
        value: cdktf.booleanToHclTerraform(this._disableHtVhtRates),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      disable_uapsd: {
        value: cdktf.booleanToHclTerraform(this._disableUapsd),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      disable_v1_roam_notify: {
        value: cdktf.booleanToHclTerraform(this._disableV1RoamNotify),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      disable_v2_roam_notify: {
        value: cdktf.booleanToHclTerraform(this._disableV2RoamNotify),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      disable_when_gateway_unreachable: {
        value: cdktf.booleanToHclTerraform(this._disableWhenGatewayUnreachable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      disable_when_mxtunnel_down: {
        value: cdktf.booleanToHclTerraform(this._disableWhenMxtunnelDown),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      disable_wmm: {
        value: cdktf.booleanToHclTerraform(this._disableWmm),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      dns_server_rewrite: {
        value: orgWlanDnsServerRewriteToHclTerraform(this._dnsServerRewrite.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "OrgWlanDnsServerRewrite",
      },
      dtim: {
        value: cdktf.numberToHclTerraform(this._dtim),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dynamic_psk: {
        value: orgWlanDynamicPskToHclTerraform(this._dynamicPsk.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "OrgWlanDynamicPsk",
      },
      dynamic_vlan: {
        value: orgWlanDynamicVlanToHclTerraform(this._dynamicVlan.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "OrgWlanDynamicVlan",
      },
      enable_local_keycaching: {
        value: cdktf.booleanToHclTerraform(this._enableLocalKeycaching),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_wireless_bridging: {
        value: cdktf.booleanToHclTerraform(this._enableWirelessBridging),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_wireless_bridging_dhcp_tracking: {
        value: cdktf.booleanToHclTerraform(this._enableWirelessBridgingDhcpTracking),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      fast_dot1x_timers: {
        value: cdktf.booleanToHclTerraform(this._fastDot1XTimers),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      hide_ssid: {
        value: cdktf.booleanToHclTerraform(this._hideSsid),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      hostname_ie: {
        value: cdktf.booleanToHclTerraform(this._hostnameIe),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      hotspot20: {
        value: orgWlanHotspot20ToHclTerraform(this._hotspot20.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "OrgWlanHotspot20",
      },
      inject_dhcp_option_82: {
        value: orgWlanInjectDhcpOption82ToHclTerraform(this._injectDhcpOption82.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "OrgWlanInjectDhcpOption82",
      },
      interface: {
        value: cdktf.stringToHclTerraform(this._interface),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      isolation: {
        value: cdktf.booleanToHclTerraform(this._isolation),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      l2_isolation: {
        value: cdktf.booleanToHclTerraform(this._l2Isolation),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      legacy_overds: {
        value: cdktf.booleanToHclTerraform(this._legacyOverds),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      limit_bcast: {
        value: cdktf.booleanToHclTerraform(this._limitBcast),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      limit_probe_response: {
        value: cdktf.booleanToHclTerraform(this._limitProbeResponse),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      max_idletime: {
        value: cdktf.numberToHclTerraform(this._maxIdletime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_num_clients: {
        value: cdktf.numberToHclTerraform(this._maxNumClients),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      mist_nac: {
        value: orgWlanMistNacToHclTerraform(this._mistNac.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "OrgWlanMistNac",
      },
      mxtunnel_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._mxtunnelIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      mxtunnel_name: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._mxtunnelName),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      no_static_dns: {
        value: cdktf.booleanToHclTerraform(this._noStaticDns),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      no_static_ip: {
        value: cdktf.booleanToHclTerraform(this._noStaticIp),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      org_id: {
        value: cdktf.stringToHclTerraform(this._orgId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      portal: {
        value: orgWlanPortalToHclTerraform(this._portal.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "OrgWlanPortal",
      },
      portal_allowed_hostnames: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._portalAllowedHostnames),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      portal_allowed_subnets: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._portalAllowedSubnets),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      portal_denied_hostnames: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._portalDeniedHostnames),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      qos: {
        value: orgWlanQosToHclTerraform(this._qos.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "OrgWlanQos",
      },
      radsec: {
        value: orgWlanRadsecToHclTerraform(this._radsec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "OrgWlanRadsec",
      },
      rateset: {
        value: cdktf.hashMapperHcl(orgWlanRatesetToHclTerraform)(this._rateset.internalValue),
        isBlock: true,
        type: "map",
        storageClassType: "OrgWlanRatesetMap",
      },
      reconnect_clients_when_roaming_mxcluster: {
        value: cdktf.booleanToHclTerraform(this._reconnectClientsWhenRoamingMxcluster),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      roam_mode: {
        value: cdktf.stringToHclTerraform(this._roamMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      schedule: {
        value: orgWlanScheduleToHclTerraform(this._schedule.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "OrgWlanSchedule",
      },
      sle_excluded: {
        value: cdktf.booleanToHclTerraform(this._sleExcluded),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ssid: {
        value: cdktf.stringToHclTerraform(this._ssid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      template_id: {
        value: cdktf.stringToHclTerraform(this._templateId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      use_eapol_v1: {
        value: cdktf.booleanToHclTerraform(this._useEapolV1),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      vlan_enabled: {
        value: cdktf.booleanToHclTerraform(this._vlanEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      vlan_id: {
        value: cdktf.stringToHclTerraform(this._vlanId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vlan_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._vlanIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      vlan_pooling: {
        value: cdktf.booleanToHclTerraform(this._vlanPooling),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      wlan_limit_down: {
        value: cdktf.stringToHclTerraform(this._wlanLimitDown),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wlan_limit_down_enabled: {
        value: cdktf.booleanToHclTerraform(this._wlanLimitDownEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      wlan_limit_up: {
        value: cdktf.stringToHclTerraform(this._wlanLimitUp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wlan_limit_up_enabled: {
        value: cdktf.booleanToHclTerraform(this._wlanLimitUpEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      wxtag_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._wxtagIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      wxtunnel_id: {
        value: cdktf.stringToHclTerraform(this._wxtunnelId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wxtunnel_remote_id: {
        value: cdktf.stringToHclTerraform(this._wxtunnelRemoteId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
