// https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpn_ssl_web_portal
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ObjectVpnSslWebPortalConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpn_ssl_web_portal#adom ObjectVpnSslWebPortal#adom}
  */
  readonly adom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpn_ssl_web_portal#allow_user_access ObjectVpnSslWebPortal#allow_user_access}
  */
  readonly allowUserAccess?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpn_ssl_web_portal#auto_connect ObjectVpnSslWebPortal#auto_connect}
  */
  readonly autoConnect?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpn_ssl_web_portal#client_src_range ObjectVpnSslWebPortal#client_src_range}
  */
  readonly clientSrcRange?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpn_ssl_web_portal#clipboard ObjectVpnSslWebPortal#clipboard}
  */
  readonly clipboard?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpn_ssl_web_portal#custom_lang ObjectVpnSslWebPortal#custom_lang}
  */
  readonly customLang?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpn_ssl_web_portal#customize_forticlient_download_url ObjectVpnSslWebPortal#customize_forticlient_download_url}
  */
  readonly customizeForticlientDownloadUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpn_ssl_web_portal#default_protocol ObjectVpnSslWebPortal#default_protocol}
  */
  readonly defaultProtocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpn_ssl_web_portal#default_window_height ObjectVpnSslWebPortal#default_window_height}
  */
  readonly defaultWindowHeight?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpn_ssl_web_portal#default_window_width ObjectVpnSslWebPortal#default_window_width}
  */
  readonly defaultWindowWidth?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpn_ssl_web_portal#dhcp6_ra_linkaddr ObjectVpnSslWebPortal#dhcp6_ra_linkaddr}
  */
  readonly dhcp6RaLinkaddr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpn_ssl_web_portal#dhcp_ip_overlap ObjectVpnSslWebPortal#dhcp_ip_overlap}
  */
  readonly dhcpIpOverlap?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpn_ssl_web_portal#dhcp_ra_giaddr ObjectVpnSslWebPortal#dhcp_ra_giaddr}
  */
  readonly dhcpRaGiaddr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpn_ssl_web_portal#dhcp_reservation ObjectVpnSslWebPortal#dhcp_reservation}
  */
  readonly dhcpReservation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpn_ssl_web_portal#display_bookmark ObjectVpnSslWebPortal#display_bookmark}
  */
  readonly displayBookmark?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpn_ssl_web_portal#display_connection_tools ObjectVpnSslWebPortal#display_connection_tools}
  */
  readonly displayConnectionTools?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpn_ssl_web_portal#display_history ObjectVpnSslWebPortal#display_history}
  */
  readonly displayHistory?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpn_ssl_web_portal#display_status ObjectVpnSslWebPortal#display_status}
  */
  readonly displayStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpn_ssl_web_portal#dns_server1 ObjectVpnSslWebPortal#dns_server1}
  */
  readonly dnsServer1?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpn_ssl_web_portal#dns_server2 ObjectVpnSslWebPortal#dns_server2}
  */
  readonly dnsServer2?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpn_ssl_web_portal#dns_suffix ObjectVpnSslWebPortal#dns_suffix}
  */
  readonly dnsSuffix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpn_ssl_web_portal#dynamic_sort_subtable ObjectVpnSslWebPortal#dynamic_sort_subtable}
  */
  readonly dynamicSortSubtable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpn_ssl_web_portal#exclusive_routing ObjectVpnSslWebPortal#exclusive_routing}
  */
  readonly exclusiveRouting?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpn_ssl_web_portal#focus_bookmark ObjectVpnSslWebPortal#focus_bookmark}
  */
  readonly focusBookmark?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpn_ssl_web_portal#forticlient_download ObjectVpnSslWebPortal#forticlient_download}
  */
  readonly forticlientDownload?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpn_ssl_web_portal#forticlient_download_method ObjectVpnSslWebPortal#forticlient_download_method}
  */
  readonly forticlientDownloadMethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpn_ssl_web_portal#heading ObjectVpnSslWebPortal#heading}
  */
  readonly heading?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpn_ssl_web_portal#hide_sso_credential ObjectVpnSslWebPortal#hide_sso_credential}
  */
  readonly hideSsoCredential?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpn_ssl_web_portal#host_check ObjectVpnSslWebPortal#host_check}
  */
  readonly hostCheck?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpn_ssl_web_portal#host_check_interval ObjectVpnSslWebPortal#host_check_interval}
  */
  readonly hostCheckInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpn_ssl_web_portal#host_check_policy ObjectVpnSslWebPortal#host_check_policy}
  */
  readonly hostCheckPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpn_ssl_web_portal#id ObjectVpnSslWebPortal#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpn_ssl_web_portal#ip_mode ObjectVpnSslWebPortal#ip_mode}
  */
  readonly ipMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpn_ssl_web_portal#ip_pools ObjectVpnSslWebPortal#ip_pools}
  */
  readonly ipPools?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpn_ssl_web_portal#ipv6_dns_server1 ObjectVpnSslWebPortal#ipv6_dns_server1}
  */
  readonly ipv6DnsServer1?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpn_ssl_web_portal#ipv6_dns_server2 ObjectVpnSslWebPortal#ipv6_dns_server2}
  */
  readonly ipv6DnsServer2?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpn_ssl_web_portal#ipv6_exclusive_routing ObjectVpnSslWebPortal#ipv6_exclusive_routing}
  */
  readonly ipv6ExclusiveRouting?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpn_ssl_web_portal#ipv6_pools ObjectVpnSslWebPortal#ipv6_pools}
  */
  readonly ipv6Pools?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpn_ssl_web_portal#ipv6_service_restriction ObjectVpnSslWebPortal#ipv6_service_restriction}
  */
  readonly ipv6ServiceRestriction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpn_ssl_web_portal#ipv6_split_tunneling ObjectVpnSslWebPortal#ipv6_split_tunneling}
  */
  readonly ipv6SplitTunneling?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpn_ssl_web_portal#ipv6_split_tunneling_routing_address ObjectVpnSslWebPortal#ipv6_split_tunneling_routing_address}
  */
  readonly ipv6SplitTunnelingRoutingAddress?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpn_ssl_web_portal#ipv6_split_tunneling_routing_negate ObjectVpnSslWebPortal#ipv6_split_tunneling_routing_negate}
  */
  readonly ipv6SplitTunnelingRoutingNegate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpn_ssl_web_portal#ipv6_tunnel_mode ObjectVpnSslWebPortal#ipv6_tunnel_mode}
  */
  readonly ipv6TunnelMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpn_ssl_web_portal#ipv6_wins_server1 ObjectVpnSslWebPortal#ipv6_wins_server1}
  */
  readonly ipv6WinsServer1?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpn_ssl_web_portal#ipv6_wins_server2 ObjectVpnSslWebPortal#ipv6_wins_server2}
  */
  readonly ipv6WinsServer2?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpn_ssl_web_portal#keep_alive ObjectVpnSslWebPortal#keep_alive}
  */
  readonly keepAlive?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpn_ssl_web_portal#landing_page_mode ObjectVpnSslWebPortal#landing_page_mode}
  */
  readonly landingPageMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpn_ssl_web_portal#limit_user_logins ObjectVpnSslWebPortal#limit_user_logins}
  */
  readonly limitUserLogins?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpn_ssl_web_portal#mac_addr_action ObjectVpnSslWebPortal#mac_addr_action}
  */
  readonly macAddrAction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpn_ssl_web_portal#mac_addr_check ObjectVpnSslWebPortal#mac_addr_check}
  */
  readonly macAddrCheck?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpn_ssl_web_portal#macos_forticlient_download_url ObjectVpnSslWebPortal#macos_forticlient_download_url}
  */
  readonly macosForticlientDownloadUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpn_ssl_web_portal#name ObjectVpnSslWebPortal#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpn_ssl_web_portal#os_check ObjectVpnSslWebPortal#os_check}
  */
  readonly osCheck?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpn_ssl_web_portal#prefer_ipv6_dns ObjectVpnSslWebPortal#prefer_ipv6_dns}
  */
  readonly preferIpv6Dns?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpn_ssl_web_portal#redir_url ObjectVpnSslWebPortal#redir_url}
  */
  readonly redirUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpn_ssl_web_portal#rewrite_ip_uri_ui ObjectVpnSslWebPortal#rewrite_ip_uri_ui}
  */
  readonly rewriteIpUriUi?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpn_ssl_web_portal#save_password ObjectVpnSslWebPortal#save_password}
  */
  readonly savePassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpn_ssl_web_portal#scopetype ObjectVpnSslWebPortal#scopetype}
  */
  readonly scopetype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpn_ssl_web_portal#service_restriction ObjectVpnSslWebPortal#service_restriction}
  */
  readonly serviceRestriction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpn_ssl_web_portal#skip_check_for_browser ObjectVpnSslWebPortal#skip_check_for_browser}
  */
  readonly skipCheckForBrowser?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpn_ssl_web_portal#skip_check_for_unsupported_browser ObjectVpnSslWebPortal#skip_check_for_unsupported_browser}
  */
  readonly skipCheckForUnsupportedBrowser?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpn_ssl_web_portal#skip_check_for_unsupported_os ObjectVpnSslWebPortal#skip_check_for_unsupported_os}
  */
  readonly skipCheckForUnsupportedOs?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpn_ssl_web_portal#smb_max_version ObjectVpnSslWebPortal#smb_max_version}
  */
  readonly smbMaxVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpn_ssl_web_portal#smb_min_version ObjectVpnSslWebPortal#smb_min_version}
  */
  readonly smbMinVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpn_ssl_web_portal#smb_ntlmv1_auth ObjectVpnSslWebPortal#smb_ntlmv1_auth}
  */
  readonly smbNtlmv1Auth?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpn_ssl_web_portal#smbv1 ObjectVpnSslWebPortal#smbv1}
  */
  readonly smbv1?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpn_ssl_web_portal#split_tunneling ObjectVpnSslWebPortal#split_tunneling}
  */
  readonly splitTunneling?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpn_ssl_web_portal#split_tunneling_routing_address ObjectVpnSslWebPortal#split_tunneling_routing_address}
  */
  readonly splitTunnelingRoutingAddress?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpn_ssl_web_portal#split_tunneling_routing_negate ObjectVpnSslWebPortal#split_tunneling_routing_negate}
  */
  readonly splitTunnelingRoutingNegate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpn_ssl_web_portal#theme ObjectVpnSslWebPortal#theme}
  */
  readonly theme?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpn_ssl_web_portal#transform_backward_slashes ObjectVpnSslWebPortal#transform_backward_slashes}
  */
  readonly transformBackwardSlashes?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpn_ssl_web_portal#tunnel_mode ObjectVpnSslWebPortal#tunnel_mode}
  */
  readonly tunnelMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpn_ssl_web_portal#use_sdwan ObjectVpnSslWebPortal#use_sdwan}
  */
  readonly useSdwan?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpn_ssl_web_portal#user_bookmark ObjectVpnSslWebPortal#user_bookmark}
  */
  readonly userBookmark?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpn_ssl_web_portal#user_group_bookmark ObjectVpnSslWebPortal#user_group_bookmark}
  */
  readonly userGroupBookmark?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpn_ssl_web_portal#web_mode ObjectVpnSslWebPortal#web_mode}
  */
  readonly webMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpn_ssl_web_portal#windows_forticlient_download_url ObjectVpnSslWebPortal#windows_forticlient_download_url}
  */
  readonly windowsForticlientDownloadUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpn_ssl_web_portal#wins_server1 ObjectVpnSslWebPortal#wins_server1}
  */
  readonly winsServer1?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpn_ssl_web_portal#wins_server2 ObjectVpnSslWebPortal#wins_server2}
  */
  readonly winsServer2?: string;
  /**
  * bookmark_group block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpn_ssl_web_portal#bookmark_group ObjectVpnSslWebPortal#bookmark_group}
  */
  readonly bookmarkGroup?: ObjectVpnSslWebPortalBookmarkGroup[] | cdktf.IResolvable;
  /**
  * landing_page block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpn_ssl_web_portal#landing_page ObjectVpnSslWebPortal#landing_page}
  */
  readonly landingPage?: ObjectVpnSslWebPortalLandingPage;
  /**
  * mac_addr_check_rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpn_ssl_web_portal#mac_addr_check_rule ObjectVpnSslWebPortal#mac_addr_check_rule}
  */
  readonly macAddrCheckRule?: ObjectVpnSslWebPortalMacAddrCheckRule[] | cdktf.IResolvable;
  /**
  * os_check_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpn_ssl_web_portal#os_check_list ObjectVpnSslWebPortal#os_check_list}
  */
  readonly osCheckList?: ObjectVpnSslWebPortalOsCheckListStruct;
  /**
  * split_dns block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpn_ssl_web_portal#split_dns ObjectVpnSslWebPortal#split_dns}
  */
  readonly splitDns?: ObjectVpnSslWebPortalSplitDns[] | cdktf.IResolvable;
}
export interface ObjectVpnSslWebPortalBookmarkGroupBookmarksFormData {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpn_ssl_web_portal#name ObjectVpnSslWebPortal#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpn_ssl_web_portal#value ObjectVpnSslWebPortal#value}
  */
  readonly value?: string;
}

export function objectVpnSslWebPortalBookmarkGroupBookmarksFormDataToTerraform(struct?: ObjectVpnSslWebPortalBookmarkGroupBookmarksFormData | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function objectVpnSslWebPortalBookmarkGroupBookmarksFormDataToHclTerraform(struct?: ObjectVpnSslWebPortalBookmarkGroupBookmarksFormData | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectVpnSslWebPortalBookmarkGroupBookmarksFormDataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObjectVpnSslWebPortalBookmarkGroupBookmarksFormData | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectVpnSslWebPortalBookmarkGroupBookmarksFormData | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
    }
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ObjectVpnSslWebPortalBookmarkGroupBookmarksFormDataList extends cdktf.ComplexList {
  public internalValue? : ObjectVpnSslWebPortalBookmarkGroupBookmarksFormData[] | cdktf.IResolvable

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
  public get(index: number): ObjectVpnSslWebPortalBookmarkGroupBookmarksFormDataOutputReference {
    return new ObjectVpnSslWebPortalBookmarkGroupBookmarksFormDataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObjectVpnSslWebPortalBookmarkGroupBookmarks {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpn_ssl_web_portal#additional_params ObjectVpnSslWebPortal#additional_params}
  */
  readonly additionalParams?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpn_ssl_web_portal#apptype ObjectVpnSslWebPortal#apptype}
  */
  readonly apptype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpn_ssl_web_portal#color_depth ObjectVpnSslWebPortal#color_depth}
  */
  readonly colorDepth?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpn_ssl_web_portal#description ObjectVpnSslWebPortal#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpn_ssl_web_portal#domain ObjectVpnSslWebPortal#domain}
  */
  readonly domain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpn_ssl_web_portal#folder ObjectVpnSslWebPortal#folder}
  */
  readonly folder?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpn_ssl_web_portal#height ObjectVpnSslWebPortal#height}
  */
  readonly height?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpn_ssl_web_portal#host ObjectVpnSslWebPortal#host}
  */
  readonly host?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpn_ssl_web_portal#keyboard_layout ObjectVpnSslWebPortal#keyboard_layout}
  */
  readonly keyboardLayout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpn_ssl_web_portal#listening_port ObjectVpnSslWebPortal#listening_port}
  */
  readonly listeningPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpn_ssl_web_portal#load_balancing_info ObjectVpnSslWebPortal#load_balancing_info}
  */
  readonly loadBalancingInfo?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpn_ssl_web_portal#logon_password ObjectVpnSslWebPortal#logon_password}
  */
  readonly logonPassword?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpn_ssl_web_portal#logon_user ObjectVpnSslWebPortal#logon_user}
  */
  readonly logonUser?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpn_ssl_web_portal#name ObjectVpnSslWebPortal#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpn_ssl_web_portal#port ObjectVpnSslWebPortal#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpn_ssl_web_portal#preconnection_blob ObjectVpnSslWebPortal#preconnection_blob}
  */
  readonly preconnectionBlob?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpn_ssl_web_portal#preconnection_id ObjectVpnSslWebPortal#preconnection_id}
  */
  readonly preconnectionId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpn_ssl_web_portal#remote_port ObjectVpnSslWebPortal#remote_port}
  */
  readonly remotePort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpn_ssl_web_portal#restricted_admin ObjectVpnSslWebPortal#restricted_admin}
  */
  readonly restrictedAdmin?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpn_ssl_web_portal#security ObjectVpnSslWebPortal#security}
  */
  readonly security?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpn_ssl_web_portal#send_preconnection_id ObjectVpnSslWebPortal#send_preconnection_id}
  */
  readonly sendPreconnectionId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpn_ssl_web_portal#server_layout ObjectVpnSslWebPortal#server_layout}
  */
  readonly serverLayout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpn_ssl_web_portal#show_status_window ObjectVpnSslWebPortal#show_status_window}
  */
  readonly showStatusWindow?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpn_ssl_web_portal#sso ObjectVpnSslWebPortal#sso}
  */
  readonly sso?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpn_ssl_web_portal#sso_credential ObjectVpnSslWebPortal#sso_credential}
  */
  readonly ssoCredential?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpn_ssl_web_portal#sso_credential_sent_once ObjectVpnSslWebPortal#sso_credential_sent_once}
  */
  readonly ssoCredentialSentOnce?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpn_ssl_web_portal#sso_password ObjectVpnSslWebPortal#sso_password}
  */
  readonly ssoPassword?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpn_ssl_web_portal#sso_username ObjectVpnSslWebPortal#sso_username}
  */
  readonly ssoUsername?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpn_ssl_web_portal#url ObjectVpnSslWebPortal#url}
  */
  readonly url?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpn_ssl_web_portal#vnc_keyboard_layout ObjectVpnSslWebPortal#vnc_keyboard_layout}
  */
  readonly vncKeyboardLayout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpn_ssl_web_portal#width ObjectVpnSslWebPortal#width}
  */
  readonly width?: number;
  /**
  * form_data block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpn_ssl_web_portal#form_data ObjectVpnSslWebPortal#form_data}
  */
  readonly formData?: ObjectVpnSslWebPortalBookmarkGroupBookmarksFormData[] | cdktf.IResolvable;
}

export function objectVpnSslWebPortalBookmarkGroupBookmarksToTerraform(struct?: ObjectVpnSslWebPortalBookmarkGroupBookmarks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_params: cdktf.stringToTerraform(struct!.additionalParams),
    apptype: cdktf.stringToTerraform(struct!.apptype),
    color_depth: cdktf.stringToTerraform(struct!.colorDepth),
    description: cdktf.stringToTerraform(struct!.description),
    domain: cdktf.stringToTerraform(struct!.domain),
    folder: cdktf.stringToTerraform(struct!.folder),
    height: cdktf.numberToTerraform(struct!.height),
    host: cdktf.stringToTerraform(struct!.host),
    keyboard_layout: cdktf.stringToTerraform(struct!.keyboardLayout),
    listening_port: cdktf.numberToTerraform(struct!.listeningPort),
    load_balancing_info: cdktf.stringToTerraform(struct!.loadBalancingInfo),
    logon_password: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.logonPassword),
    logon_user: cdktf.stringToTerraform(struct!.logonUser),
    name: cdktf.stringToTerraform(struct!.name),
    port: cdktf.numberToTerraform(struct!.port),
    preconnection_blob: cdktf.stringToTerraform(struct!.preconnectionBlob),
    preconnection_id: cdktf.numberToTerraform(struct!.preconnectionId),
    remote_port: cdktf.numberToTerraform(struct!.remotePort),
    restricted_admin: cdktf.stringToTerraform(struct!.restrictedAdmin),
    security: cdktf.stringToTerraform(struct!.security),
    send_preconnection_id: cdktf.stringToTerraform(struct!.sendPreconnectionId),
    server_layout: cdktf.stringToTerraform(struct!.serverLayout),
    show_status_window: cdktf.stringToTerraform(struct!.showStatusWindow),
    sso: cdktf.stringToTerraform(struct!.sso),
    sso_credential: cdktf.stringToTerraform(struct!.ssoCredential),
    sso_credential_sent_once: cdktf.stringToTerraform(struct!.ssoCredentialSentOnce),
    sso_password: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ssoPassword),
    sso_username: cdktf.stringToTerraform(struct!.ssoUsername),
    url: cdktf.stringToTerraform(struct!.url),
    vnc_keyboard_layout: cdktf.stringToTerraform(struct!.vncKeyboardLayout),
    width: cdktf.numberToTerraform(struct!.width),
    form_data: cdktf.listMapper(objectVpnSslWebPortalBookmarkGroupBookmarksFormDataToTerraform, true)(struct!.formData),
  }
}


export function objectVpnSslWebPortalBookmarkGroupBookmarksToHclTerraform(struct?: ObjectVpnSslWebPortalBookmarkGroupBookmarks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_params: {
      value: cdktf.stringToHclTerraform(struct!.additionalParams),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    apptype: {
      value: cdktf.stringToHclTerraform(struct!.apptype),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    color_depth: {
      value: cdktf.stringToHclTerraform(struct!.colorDepth),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    domain: {
      value: cdktf.stringToHclTerraform(struct!.domain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    folder: {
      value: cdktf.stringToHclTerraform(struct!.folder),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    height: {
      value: cdktf.numberToHclTerraform(struct!.height),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    keyboard_layout: {
      value: cdktf.stringToHclTerraform(struct!.keyboardLayout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    listening_port: {
      value: cdktf.numberToHclTerraform(struct!.listeningPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    load_balancing_info: {
      value: cdktf.stringToHclTerraform(struct!.loadBalancingInfo),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    logon_password: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.logonPassword),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    logon_user: {
      value: cdktf.stringToHclTerraform(struct!.logonUser),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
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
    preconnection_blob: {
      value: cdktf.stringToHclTerraform(struct!.preconnectionBlob),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    preconnection_id: {
      value: cdktf.numberToHclTerraform(struct!.preconnectionId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    remote_port: {
      value: cdktf.numberToHclTerraform(struct!.remotePort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    restricted_admin: {
      value: cdktf.stringToHclTerraform(struct!.restrictedAdmin),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    security: {
      value: cdktf.stringToHclTerraform(struct!.security),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    send_preconnection_id: {
      value: cdktf.stringToHclTerraform(struct!.sendPreconnectionId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server_layout: {
      value: cdktf.stringToHclTerraform(struct!.serverLayout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    show_status_window: {
      value: cdktf.stringToHclTerraform(struct!.showStatusWindow),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sso: {
      value: cdktf.stringToHclTerraform(struct!.sso),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sso_credential: {
      value: cdktf.stringToHclTerraform(struct!.ssoCredential),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sso_credential_sent_once: {
      value: cdktf.stringToHclTerraform(struct!.ssoCredentialSentOnce),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sso_password: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ssoPassword),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    sso_username: {
      value: cdktf.stringToHclTerraform(struct!.ssoUsername),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vnc_keyboard_layout: {
      value: cdktf.stringToHclTerraform(struct!.vncKeyboardLayout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    width: {
      value: cdktf.numberToHclTerraform(struct!.width),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    form_data: {
      value: cdktf.listMapperHcl(objectVpnSslWebPortalBookmarkGroupBookmarksFormDataToHclTerraform, true)(struct!.formData),
      isBlock: true,
      type: "list",
      storageClassType: "ObjectVpnSslWebPortalBookmarkGroupBookmarksFormDataList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectVpnSslWebPortalBookmarkGroupBookmarksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObjectVpnSslWebPortalBookmarkGroupBookmarks | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalParams !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalParams = this._additionalParams;
    }
    if (this._apptype !== undefined) {
      hasAnyValues = true;
      internalValueResult.apptype = this._apptype;
    }
    if (this._colorDepth !== undefined) {
      hasAnyValues = true;
      internalValueResult.colorDepth = this._colorDepth;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._domain !== undefined) {
      hasAnyValues = true;
      internalValueResult.domain = this._domain;
    }
    if (this._folder !== undefined) {
      hasAnyValues = true;
      internalValueResult.folder = this._folder;
    }
    if (this._height !== undefined) {
      hasAnyValues = true;
      internalValueResult.height = this._height;
    }
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._keyboardLayout !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyboardLayout = this._keyboardLayout;
    }
    if (this._listeningPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.listeningPort = this._listeningPort;
    }
    if (this._loadBalancingInfo !== undefined) {
      hasAnyValues = true;
      internalValueResult.loadBalancingInfo = this._loadBalancingInfo;
    }
    if (this._logonPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.logonPassword = this._logonPassword;
    }
    if (this._logonUser !== undefined) {
      hasAnyValues = true;
      internalValueResult.logonUser = this._logonUser;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._preconnectionBlob !== undefined) {
      hasAnyValues = true;
      internalValueResult.preconnectionBlob = this._preconnectionBlob;
    }
    if (this._preconnectionId !== undefined) {
      hasAnyValues = true;
      internalValueResult.preconnectionId = this._preconnectionId;
    }
    if (this._remotePort !== undefined) {
      hasAnyValues = true;
      internalValueResult.remotePort = this._remotePort;
    }
    if (this._restrictedAdmin !== undefined) {
      hasAnyValues = true;
      internalValueResult.restrictedAdmin = this._restrictedAdmin;
    }
    if (this._security !== undefined) {
      hasAnyValues = true;
      internalValueResult.security = this._security;
    }
    if (this._sendPreconnectionId !== undefined) {
      hasAnyValues = true;
      internalValueResult.sendPreconnectionId = this._sendPreconnectionId;
    }
    if (this._serverLayout !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverLayout = this._serverLayout;
    }
    if (this._showStatusWindow !== undefined) {
      hasAnyValues = true;
      internalValueResult.showStatusWindow = this._showStatusWindow;
    }
    if (this._sso !== undefined) {
      hasAnyValues = true;
      internalValueResult.sso = this._sso;
    }
    if (this._ssoCredential !== undefined) {
      hasAnyValues = true;
      internalValueResult.ssoCredential = this._ssoCredential;
    }
    if (this._ssoCredentialSentOnce !== undefined) {
      hasAnyValues = true;
      internalValueResult.ssoCredentialSentOnce = this._ssoCredentialSentOnce;
    }
    if (this._ssoPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.ssoPassword = this._ssoPassword;
    }
    if (this._ssoUsername !== undefined) {
      hasAnyValues = true;
      internalValueResult.ssoUsername = this._ssoUsername;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    if (this._vncKeyboardLayout !== undefined) {
      hasAnyValues = true;
      internalValueResult.vncKeyboardLayout = this._vncKeyboardLayout;
    }
    if (this._width !== undefined) {
      hasAnyValues = true;
      internalValueResult.width = this._width;
    }
    if (this._formData?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.formData = this._formData?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectVpnSslWebPortalBookmarkGroupBookmarks | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalParams = undefined;
      this._apptype = undefined;
      this._colorDepth = undefined;
      this._description = undefined;
      this._domain = undefined;
      this._folder = undefined;
      this._height = undefined;
      this._host = undefined;
      this._keyboardLayout = undefined;
      this._listeningPort = undefined;
      this._loadBalancingInfo = undefined;
      this._logonPassword = undefined;
      this._logonUser = undefined;
      this._name = undefined;
      this._port = undefined;
      this._preconnectionBlob = undefined;
      this._preconnectionId = undefined;
      this._remotePort = undefined;
      this._restrictedAdmin = undefined;
      this._security = undefined;
      this._sendPreconnectionId = undefined;
      this._serverLayout = undefined;
      this._showStatusWindow = undefined;
      this._sso = undefined;
      this._ssoCredential = undefined;
      this._ssoCredentialSentOnce = undefined;
      this._ssoPassword = undefined;
      this._ssoUsername = undefined;
      this._url = undefined;
      this._vncKeyboardLayout = undefined;
      this._width = undefined;
      this._formData.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalParams = value.additionalParams;
      this._apptype = value.apptype;
      this._colorDepth = value.colorDepth;
      this._description = value.description;
      this._domain = value.domain;
      this._folder = value.folder;
      this._height = value.height;
      this._host = value.host;
      this._keyboardLayout = value.keyboardLayout;
      this._listeningPort = value.listeningPort;
      this._loadBalancingInfo = value.loadBalancingInfo;
      this._logonPassword = value.logonPassword;
      this._logonUser = value.logonUser;
      this._name = value.name;
      this._port = value.port;
      this._preconnectionBlob = value.preconnectionBlob;
      this._preconnectionId = value.preconnectionId;
      this._remotePort = value.remotePort;
      this._restrictedAdmin = value.restrictedAdmin;
      this._security = value.security;
      this._sendPreconnectionId = value.sendPreconnectionId;
      this._serverLayout = value.serverLayout;
      this._showStatusWindow = value.showStatusWindow;
      this._sso = value.sso;
      this._ssoCredential = value.ssoCredential;
      this._ssoCredentialSentOnce = value.ssoCredentialSentOnce;
      this._ssoPassword = value.ssoPassword;
      this._ssoUsername = value.ssoUsername;
      this._url = value.url;
      this._vncKeyboardLayout = value.vncKeyboardLayout;
      this._width = value.width;
      this._formData.internalValue = value.formData;
    }
  }

  // additional_params - computed: false, optional: true, required: false
  private _additionalParams?: string; 
  public get additionalParams() {
    return this.getStringAttribute('additional_params');
  }
  public set additionalParams(value: string) {
    this._additionalParams = value;
  }
  public resetAdditionalParams() {
    this._additionalParams = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalParamsInput() {
    return this._additionalParams;
  }

  // apptype - computed: false, optional: true, required: false
  private _apptype?: string; 
  public get apptype() {
    return this.getStringAttribute('apptype');
  }
  public set apptype(value: string) {
    this._apptype = value;
  }
  public resetApptype() {
    this._apptype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apptypeInput() {
    return this._apptype;
  }

  // color_depth - computed: false, optional: true, required: false
  private _colorDepth?: string; 
  public get colorDepth() {
    return this.getStringAttribute('color_depth');
  }
  public set colorDepth(value: string) {
    this._colorDepth = value;
  }
  public resetColorDepth() {
    this._colorDepth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get colorDepthInput() {
    return this._colorDepth;
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

  // folder - computed: false, optional: true, required: false
  private _folder?: string; 
  public get folder() {
    return this.getStringAttribute('folder');
  }
  public set folder(value: string) {
    this._folder = value;
  }
  public resetFolder() {
    this._folder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get folderInput() {
    return this._folder;
  }

  // height - computed: false, optional: true, required: false
  private _height?: number; 
  public get height() {
    return this.getNumberAttribute('height');
  }
  public set height(value: number) {
    this._height = value;
  }
  public resetHeight() {
    this._height = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get heightInput() {
    return this._height;
  }

  // host - computed: false, optional: true, required: false
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

  // keyboard_layout - computed: false, optional: true, required: false
  private _keyboardLayout?: string; 
  public get keyboardLayout() {
    return this.getStringAttribute('keyboard_layout');
  }
  public set keyboardLayout(value: string) {
    this._keyboardLayout = value;
  }
  public resetKeyboardLayout() {
    this._keyboardLayout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyboardLayoutInput() {
    return this._keyboardLayout;
  }

  // listening_port - computed: false, optional: true, required: false
  private _listeningPort?: number; 
  public get listeningPort() {
    return this.getNumberAttribute('listening_port');
  }
  public set listeningPort(value: number) {
    this._listeningPort = value;
  }
  public resetListeningPort() {
    this._listeningPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get listeningPortInput() {
    return this._listeningPort;
  }

  // load_balancing_info - computed: false, optional: true, required: false
  private _loadBalancingInfo?: string; 
  public get loadBalancingInfo() {
    return this.getStringAttribute('load_balancing_info');
  }
  public set loadBalancingInfo(value: string) {
    this._loadBalancingInfo = value;
  }
  public resetLoadBalancingInfo() {
    this._loadBalancingInfo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalancingInfoInput() {
    return this._loadBalancingInfo;
  }

  // logon_password - computed: true, optional: true, required: false
  private _logonPassword?: string[]; 
  public get logonPassword() {
    return cdktf.Fn.tolist(this.getListAttribute('logon_password'));
  }
  public set logonPassword(value: string[]) {
    this._logonPassword = value;
  }
  public resetLogonPassword() {
    this._logonPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logonPasswordInput() {
    return this._logonPassword;
  }

  // logon_user - computed: false, optional: true, required: false
  private _logonUser?: string; 
  public get logonUser() {
    return this.getStringAttribute('logon_user');
  }
  public set logonUser(value: string) {
    this._logonUser = value;
  }
  public resetLogonUser() {
    this._logonUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logonUserInput() {
    return this._logonUser;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // port - computed: false, optional: true, required: false
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

  // preconnection_blob - computed: false, optional: true, required: false
  private _preconnectionBlob?: string; 
  public get preconnectionBlob() {
    return this.getStringAttribute('preconnection_blob');
  }
  public set preconnectionBlob(value: string) {
    this._preconnectionBlob = value;
  }
  public resetPreconnectionBlob() {
    this._preconnectionBlob = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preconnectionBlobInput() {
    return this._preconnectionBlob;
  }

  // preconnection_id - computed: false, optional: true, required: false
  private _preconnectionId?: number; 
  public get preconnectionId() {
    return this.getNumberAttribute('preconnection_id');
  }
  public set preconnectionId(value: number) {
    this._preconnectionId = value;
  }
  public resetPreconnectionId() {
    this._preconnectionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preconnectionIdInput() {
    return this._preconnectionId;
  }

  // remote_port - computed: false, optional: true, required: false
  private _remotePort?: number; 
  public get remotePort() {
    return this.getNumberAttribute('remote_port');
  }
  public set remotePort(value: number) {
    this._remotePort = value;
  }
  public resetRemotePort() {
    this._remotePort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remotePortInput() {
    return this._remotePort;
  }

  // restricted_admin - computed: false, optional: true, required: false
  private _restrictedAdmin?: string; 
  public get restrictedAdmin() {
    return this.getStringAttribute('restricted_admin');
  }
  public set restrictedAdmin(value: string) {
    this._restrictedAdmin = value;
  }
  public resetRestrictedAdmin() {
    this._restrictedAdmin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictedAdminInput() {
    return this._restrictedAdmin;
  }

  // security - computed: false, optional: true, required: false
  private _security?: string; 
  public get security() {
    return this.getStringAttribute('security');
  }
  public set security(value: string) {
    this._security = value;
  }
  public resetSecurity() {
    this._security = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityInput() {
    return this._security;
  }

  // send_preconnection_id - computed: false, optional: true, required: false
  private _sendPreconnectionId?: string; 
  public get sendPreconnectionId() {
    return this.getStringAttribute('send_preconnection_id');
  }
  public set sendPreconnectionId(value: string) {
    this._sendPreconnectionId = value;
  }
  public resetSendPreconnectionId() {
    this._sendPreconnectionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendPreconnectionIdInput() {
    return this._sendPreconnectionId;
  }

  // server_layout - computed: false, optional: true, required: false
  private _serverLayout?: string; 
  public get serverLayout() {
    return this.getStringAttribute('server_layout');
  }
  public set serverLayout(value: string) {
    this._serverLayout = value;
  }
  public resetServerLayout() {
    this._serverLayout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverLayoutInput() {
    return this._serverLayout;
  }

  // show_status_window - computed: false, optional: true, required: false
  private _showStatusWindow?: string; 
  public get showStatusWindow() {
    return this.getStringAttribute('show_status_window');
  }
  public set showStatusWindow(value: string) {
    this._showStatusWindow = value;
  }
  public resetShowStatusWindow() {
    this._showStatusWindow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showStatusWindowInput() {
    return this._showStatusWindow;
  }

  // sso - computed: false, optional: true, required: false
  private _sso?: string; 
  public get sso() {
    return this.getStringAttribute('sso');
  }
  public set sso(value: string) {
    this._sso = value;
  }
  public resetSso() {
    this._sso = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssoInput() {
    return this._sso;
  }

  // sso_credential - computed: false, optional: true, required: false
  private _ssoCredential?: string; 
  public get ssoCredential() {
    return this.getStringAttribute('sso_credential');
  }
  public set ssoCredential(value: string) {
    this._ssoCredential = value;
  }
  public resetSsoCredential() {
    this._ssoCredential = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssoCredentialInput() {
    return this._ssoCredential;
  }

  // sso_credential_sent_once - computed: false, optional: true, required: false
  private _ssoCredentialSentOnce?: string; 
  public get ssoCredentialSentOnce() {
    return this.getStringAttribute('sso_credential_sent_once');
  }
  public set ssoCredentialSentOnce(value: string) {
    this._ssoCredentialSentOnce = value;
  }
  public resetSsoCredentialSentOnce() {
    this._ssoCredentialSentOnce = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssoCredentialSentOnceInput() {
    return this._ssoCredentialSentOnce;
  }

  // sso_password - computed: true, optional: true, required: false
  private _ssoPassword?: string[]; 
  public get ssoPassword() {
    return cdktf.Fn.tolist(this.getListAttribute('sso_password'));
  }
  public set ssoPassword(value: string[]) {
    this._ssoPassword = value;
  }
  public resetSsoPassword() {
    this._ssoPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssoPasswordInput() {
    return this._ssoPassword;
  }

  // sso_username - computed: false, optional: true, required: false
  private _ssoUsername?: string; 
  public get ssoUsername() {
    return this.getStringAttribute('sso_username');
  }
  public set ssoUsername(value: string) {
    this._ssoUsername = value;
  }
  public resetSsoUsername() {
    this._ssoUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssoUsernameInput() {
    return this._ssoUsername;
  }

  // url - computed: false, optional: true, required: false
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }

  // vnc_keyboard_layout - computed: false, optional: true, required: false
  private _vncKeyboardLayout?: string; 
  public get vncKeyboardLayout() {
    return this.getStringAttribute('vnc_keyboard_layout');
  }
  public set vncKeyboardLayout(value: string) {
    this._vncKeyboardLayout = value;
  }
  public resetVncKeyboardLayout() {
    this._vncKeyboardLayout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vncKeyboardLayoutInput() {
    return this._vncKeyboardLayout;
  }

  // width - computed: false, optional: true, required: false
  private _width?: number; 
  public get width() {
    return this.getNumberAttribute('width');
  }
  public set width(value: number) {
    this._width = value;
  }
  public resetWidth() {
    this._width = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get widthInput() {
    return this._width;
  }

  // form_data - computed: false, optional: true, required: false
  private _formData = new ObjectVpnSslWebPortalBookmarkGroupBookmarksFormDataList(this, "form_data", false);
  public get formData() {
    return this._formData;
  }
  public putFormData(value: ObjectVpnSslWebPortalBookmarkGroupBookmarksFormData[] | cdktf.IResolvable) {
    this._formData.internalValue = value;
  }
  public resetFormData() {
    this._formData.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get formDataInput() {
    return this._formData.internalValue;
  }
}

export class ObjectVpnSslWebPortalBookmarkGroupBookmarksList extends cdktf.ComplexList {
  public internalValue? : ObjectVpnSslWebPortalBookmarkGroupBookmarks[] | cdktf.IResolvable

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
  public get(index: number): ObjectVpnSslWebPortalBookmarkGroupBookmarksOutputReference {
    return new ObjectVpnSslWebPortalBookmarkGroupBookmarksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObjectVpnSslWebPortalBookmarkGroup {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpn_ssl_web_portal#name ObjectVpnSslWebPortal#name}
  */
  readonly name?: string;
  /**
  * bookmarks block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpn_ssl_web_portal#bookmarks ObjectVpnSslWebPortal#bookmarks}
  */
  readonly bookmarks?: ObjectVpnSslWebPortalBookmarkGroupBookmarks[] | cdktf.IResolvable;
}

export function objectVpnSslWebPortalBookmarkGroupToTerraform(struct?: ObjectVpnSslWebPortalBookmarkGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    bookmarks: cdktf.listMapper(objectVpnSslWebPortalBookmarkGroupBookmarksToTerraform, true)(struct!.bookmarks),
  }
}


export function objectVpnSslWebPortalBookmarkGroupToHclTerraform(struct?: ObjectVpnSslWebPortalBookmarkGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bookmarks: {
      value: cdktf.listMapperHcl(objectVpnSslWebPortalBookmarkGroupBookmarksToHclTerraform, true)(struct!.bookmarks),
      isBlock: true,
      type: "list",
      storageClassType: "ObjectVpnSslWebPortalBookmarkGroupBookmarksList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectVpnSslWebPortalBookmarkGroupOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObjectVpnSslWebPortalBookmarkGroup | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._bookmarks?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bookmarks = this._bookmarks?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectVpnSslWebPortalBookmarkGroup | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._bookmarks.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._bookmarks.internalValue = value.bookmarks;
    }
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // bookmarks - computed: false, optional: true, required: false
  private _bookmarks = new ObjectVpnSslWebPortalBookmarkGroupBookmarksList(this, "bookmarks", false);
  public get bookmarks() {
    return this._bookmarks;
  }
  public putBookmarks(value: ObjectVpnSslWebPortalBookmarkGroupBookmarks[] | cdktf.IResolvable) {
    this._bookmarks.internalValue = value;
  }
  public resetBookmarks() {
    this._bookmarks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bookmarksInput() {
    return this._bookmarks.internalValue;
  }
}

export class ObjectVpnSslWebPortalBookmarkGroupList extends cdktf.ComplexList {
  public internalValue? : ObjectVpnSslWebPortalBookmarkGroup[] | cdktf.IResolvable

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
  public get(index: number): ObjectVpnSslWebPortalBookmarkGroupOutputReference {
    return new ObjectVpnSslWebPortalBookmarkGroupOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObjectVpnSslWebPortalLandingPageFormData {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpn_ssl_web_portal#name ObjectVpnSslWebPortal#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpn_ssl_web_portal#value ObjectVpnSslWebPortal#value}
  */
  readonly value?: string;
}

export function objectVpnSslWebPortalLandingPageFormDataToTerraform(struct?: ObjectVpnSslWebPortalLandingPageFormData | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function objectVpnSslWebPortalLandingPageFormDataToHclTerraform(struct?: ObjectVpnSslWebPortalLandingPageFormData | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectVpnSslWebPortalLandingPageFormDataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObjectVpnSslWebPortalLandingPageFormData | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectVpnSslWebPortalLandingPageFormData | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
    }
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ObjectVpnSslWebPortalLandingPageFormDataList extends cdktf.ComplexList {
  public internalValue? : ObjectVpnSslWebPortalLandingPageFormData[] | cdktf.IResolvable

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
  public get(index: number): ObjectVpnSslWebPortalLandingPageFormDataOutputReference {
    return new ObjectVpnSslWebPortalLandingPageFormDataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObjectVpnSslWebPortalLandingPage {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpn_ssl_web_portal#logout_url ObjectVpnSslWebPortal#logout_url}
  */
  readonly logoutUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpn_ssl_web_portal#sso ObjectVpnSslWebPortal#sso}
  */
  readonly sso?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpn_ssl_web_portal#sso_credential ObjectVpnSslWebPortal#sso_credential}
  */
  readonly ssoCredential?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpn_ssl_web_portal#sso_password ObjectVpnSslWebPortal#sso_password}
  */
  readonly ssoPassword?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpn_ssl_web_portal#sso_username ObjectVpnSslWebPortal#sso_username}
  */
  readonly ssoUsername?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpn_ssl_web_portal#url ObjectVpnSslWebPortal#url}
  */
  readonly url?: string;
  /**
  * form_data block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpn_ssl_web_portal#form_data ObjectVpnSslWebPortal#form_data}
  */
  readonly formData?: ObjectVpnSslWebPortalLandingPageFormData[] | cdktf.IResolvable;
}

export function objectVpnSslWebPortalLandingPageToTerraform(struct?: ObjectVpnSslWebPortalLandingPageOutputReference | ObjectVpnSslWebPortalLandingPage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    logout_url: cdktf.stringToTerraform(struct!.logoutUrl),
    sso: cdktf.stringToTerraform(struct!.sso),
    sso_credential: cdktf.stringToTerraform(struct!.ssoCredential),
    sso_password: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ssoPassword),
    sso_username: cdktf.stringToTerraform(struct!.ssoUsername),
    url: cdktf.stringToTerraform(struct!.url),
    form_data: cdktf.listMapper(objectVpnSslWebPortalLandingPageFormDataToTerraform, true)(struct!.formData),
  }
}


export function objectVpnSslWebPortalLandingPageToHclTerraform(struct?: ObjectVpnSslWebPortalLandingPageOutputReference | ObjectVpnSslWebPortalLandingPage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    logout_url: {
      value: cdktf.stringToHclTerraform(struct!.logoutUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sso: {
      value: cdktf.stringToHclTerraform(struct!.sso),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sso_credential: {
      value: cdktf.stringToHclTerraform(struct!.ssoCredential),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sso_password: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ssoPassword),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    sso_username: {
      value: cdktf.stringToHclTerraform(struct!.ssoUsername),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    form_data: {
      value: cdktf.listMapperHcl(objectVpnSslWebPortalLandingPageFormDataToHclTerraform, true)(struct!.formData),
      isBlock: true,
      type: "list",
      storageClassType: "ObjectVpnSslWebPortalLandingPageFormDataList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectVpnSslWebPortalLandingPageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ObjectVpnSslWebPortalLandingPage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._logoutUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.logoutUrl = this._logoutUrl;
    }
    if (this._sso !== undefined) {
      hasAnyValues = true;
      internalValueResult.sso = this._sso;
    }
    if (this._ssoCredential !== undefined) {
      hasAnyValues = true;
      internalValueResult.ssoCredential = this._ssoCredential;
    }
    if (this._ssoPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.ssoPassword = this._ssoPassword;
    }
    if (this._ssoUsername !== undefined) {
      hasAnyValues = true;
      internalValueResult.ssoUsername = this._ssoUsername;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    if (this._formData?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.formData = this._formData?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectVpnSslWebPortalLandingPage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._logoutUrl = undefined;
      this._sso = undefined;
      this._ssoCredential = undefined;
      this._ssoPassword = undefined;
      this._ssoUsername = undefined;
      this._url = undefined;
      this._formData.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._logoutUrl = value.logoutUrl;
      this._sso = value.sso;
      this._ssoCredential = value.ssoCredential;
      this._ssoPassword = value.ssoPassword;
      this._ssoUsername = value.ssoUsername;
      this._url = value.url;
      this._formData.internalValue = value.formData;
    }
  }

  // logout_url - computed: false, optional: true, required: false
  private _logoutUrl?: string; 
  public get logoutUrl() {
    return this.getStringAttribute('logout_url');
  }
  public set logoutUrl(value: string) {
    this._logoutUrl = value;
  }
  public resetLogoutUrl() {
    this._logoutUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logoutUrlInput() {
    return this._logoutUrl;
  }

  // sso - computed: true, optional: true, required: false
  private _sso?: string; 
  public get sso() {
    return this.getStringAttribute('sso');
  }
  public set sso(value: string) {
    this._sso = value;
  }
  public resetSso() {
    this._sso = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssoInput() {
    return this._sso;
  }

  // sso_credential - computed: true, optional: true, required: false
  private _ssoCredential?: string; 
  public get ssoCredential() {
    return this.getStringAttribute('sso_credential');
  }
  public set ssoCredential(value: string) {
    this._ssoCredential = value;
  }
  public resetSsoCredential() {
    this._ssoCredential = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssoCredentialInput() {
    return this._ssoCredential;
  }

  // sso_password - computed: true, optional: true, required: false
  private _ssoPassword?: string[]; 
  public get ssoPassword() {
    return cdktf.Fn.tolist(this.getListAttribute('sso_password'));
  }
  public set ssoPassword(value: string[]) {
    this._ssoPassword = value;
  }
  public resetSsoPassword() {
    this._ssoPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssoPasswordInput() {
    return this._ssoPassword;
  }

  // sso_username - computed: false, optional: true, required: false
  private _ssoUsername?: string; 
  public get ssoUsername() {
    return this.getStringAttribute('sso_username');
  }
  public set ssoUsername(value: string) {
    this._ssoUsername = value;
  }
  public resetSsoUsername() {
    this._ssoUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssoUsernameInput() {
    return this._ssoUsername;
  }

  // url - computed: false, optional: true, required: false
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }

  // form_data - computed: false, optional: true, required: false
  private _formData = new ObjectVpnSslWebPortalLandingPageFormDataList(this, "form_data", false);
  public get formData() {
    return this._formData;
  }
  public putFormData(value: ObjectVpnSslWebPortalLandingPageFormData[] | cdktf.IResolvable) {
    this._formData.internalValue = value;
  }
  public resetFormData() {
    this._formData.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get formDataInput() {
    return this._formData.internalValue;
  }
}
export interface ObjectVpnSslWebPortalMacAddrCheckRule {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpn_ssl_web_portal#mac_addr_list ObjectVpnSslWebPortal#mac_addr_list}
  */
  readonly macAddrList?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpn_ssl_web_portal#mac_addr_mask ObjectVpnSslWebPortal#mac_addr_mask}
  */
  readonly macAddrMask?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpn_ssl_web_portal#name ObjectVpnSslWebPortal#name}
  */
  readonly name?: string;
}

export function objectVpnSslWebPortalMacAddrCheckRuleToTerraform(struct?: ObjectVpnSslWebPortalMacAddrCheckRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mac_addr_list: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.macAddrList),
    mac_addr_mask: cdktf.numberToTerraform(struct!.macAddrMask),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function objectVpnSslWebPortalMacAddrCheckRuleToHclTerraform(struct?: ObjectVpnSslWebPortalMacAddrCheckRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mac_addr_list: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.macAddrList),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    mac_addr_mask: {
      value: cdktf.numberToHclTerraform(struct!.macAddrMask),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectVpnSslWebPortalMacAddrCheckRuleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObjectVpnSslWebPortalMacAddrCheckRule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._macAddrList !== undefined) {
      hasAnyValues = true;
      internalValueResult.macAddrList = this._macAddrList;
    }
    if (this._macAddrMask !== undefined) {
      hasAnyValues = true;
      internalValueResult.macAddrMask = this._macAddrMask;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectVpnSslWebPortalMacAddrCheckRule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._macAddrList = undefined;
      this._macAddrMask = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._macAddrList = value.macAddrList;
      this._macAddrMask = value.macAddrMask;
      this._name = value.name;
    }
  }

  // mac_addr_list - computed: true, optional: true, required: false
  private _macAddrList?: string[]; 
  public get macAddrList() {
    return cdktf.Fn.tolist(this.getListAttribute('mac_addr_list'));
  }
  public set macAddrList(value: string[]) {
    this._macAddrList = value;
  }
  public resetMacAddrList() {
    this._macAddrList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macAddrListInput() {
    return this._macAddrList;
  }

  // mac_addr_mask - computed: false, optional: true, required: false
  private _macAddrMask?: number; 
  public get macAddrMask() {
    return this.getNumberAttribute('mac_addr_mask');
  }
  public set macAddrMask(value: number) {
    this._macAddrMask = value;
  }
  public resetMacAddrMask() {
    this._macAddrMask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macAddrMaskInput() {
    return this._macAddrMask;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }
}

export class ObjectVpnSslWebPortalMacAddrCheckRuleList extends cdktf.ComplexList {
  public internalValue? : ObjectVpnSslWebPortalMacAddrCheckRule[] | cdktf.IResolvable

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
  public get(index: number): ObjectVpnSslWebPortalMacAddrCheckRuleOutputReference {
    return new ObjectVpnSslWebPortalMacAddrCheckRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObjectVpnSslWebPortalOsCheckListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpn_ssl_web_portal#action ObjectVpnSslWebPortal#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpn_ssl_web_portal#latest_patch_level ObjectVpnSslWebPortal#latest_patch_level}
  */
  readonly latestPatchLevel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpn_ssl_web_portal#minor_version ObjectVpnSslWebPortal#minor_version}
  */
  readonly minorVersion?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpn_ssl_web_portal#name ObjectVpnSslWebPortal#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpn_ssl_web_portal#tolerance ObjectVpnSslWebPortal#tolerance}
  */
  readonly tolerance?: number;
}

export function objectVpnSslWebPortalOsCheckListStructToTerraform(struct?: ObjectVpnSslWebPortalOsCheckListStructOutputReference | ObjectVpnSslWebPortalOsCheckListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    latest_patch_level: cdktf.stringToTerraform(struct!.latestPatchLevel),
    minor_version: cdktf.numberToTerraform(struct!.minorVersion),
    name: cdktf.stringToTerraform(struct!.name),
    tolerance: cdktf.numberToTerraform(struct!.tolerance),
  }
}


export function objectVpnSslWebPortalOsCheckListStructToHclTerraform(struct?: ObjectVpnSslWebPortalOsCheckListStructOutputReference | ObjectVpnSslWebPortalOsCheckListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    latest_patch_level: {
      value: cdktf.stringToHclTerraform(struct!.latestPatchLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    minor_version: {
      value: cdktf.numberToHclTerraform(struct!.minorVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tolerance: {
      value: cdktf.numberToHclTerraform(struct!.tolerance),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectVpnSslWebPortalOsCheckListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ObjectVpnSslWebPortalOsCheckListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._latestPatchLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.latestPatchLevel = this._latestPatchLevel;
    }
    if (this._minorVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.minorVersion = this._minorVersion;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._tolerance !== undefined) {
      hasAnyValues = true;
      internalValueResult.tolerance = this._tolerance;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectVpnSslWebPortalOsCheckListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._action = undefined;
      this._latestPatchLevel = undefined;
      this._minorVersion = undefined;
      this._name = undefined;
      this._tolerance = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._action = value.action;
      this._latestPatchLevel = value.latestPatchLevel;
      this._minorVersion = value.minorVersion;
      this._name = value.name;
      this._tolerance = value.tolerance;
    }
  }

  // action - computed: false, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // latest_patch_level - computed: false, optional: true, required: false
  private _latestPatchLevel?: string; 
  public get latestPatchLevel() {
    return this.getStringAttribute('latest_patch_level');
  }
  public set latestPatchLevel(value: string) {
    this._latestPatchLevel = value;
  }
  public resetLatestPatchLevel() {
    this._latestPatchLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get latestPatchLevelInput() {
    return this._latestPatchLevel;
  }

  // minor_version - computed: false, optional: true, required: false
  private _minorVersion?: number; 
  public get minorVersion() {
    return this.getNumberAttribute('minor_version');
  }
  public set minorVersion(value: number) {
    this._minorVersion = value;
  }
  public resetMinorVersion() {
    this._minorVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minorVersionInput() {
    return this._minorVersion;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // tolerance - computed: false, optional: true, required: false
  private _tolerance?: number; 
  public get tolerance() {
    return this.getNumberAttribute('tolerance');
  }
  public set tolerance(value: number) {
    this._tolerance = value;
  }
  public resetTolerance() {
    this._tolerance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toleranceInput() {
    return this._tolerance;
  }
}
export interface ObjectVpnSslWebPortalSplitDns {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpn_ssl_web_portal#dns_server1 ObjectVpnSslWebPortal#dns_server1}
  */
  readonly dnsServer1?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpn_ssl_web_portal#dns_server2 ObjectVpnSslWebPortal#dns_server2}
  */
  readonly dnsServer2?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpn_ssl_web_portal#domains ObjectVpnSslWebPortal#domains}
  */
  readonly domains?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpn_ssl_web_portal#id ObjectVpnSslWebPortal#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpn_ssl_web_portal#ipv6_dns_server1 ObjectVpnSslWebPortal#ipv6_dns_server1}
  */
  readonly ipv6DnsServer1?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpn_ssl_web_portal#ipv6_dns_server2 ObjectVpnSslWebPortal#ipv6_dns_server2}
  */
  readonly ipv6DnsServer2?: string;
}

export function objectVpnSslWebPortalSplitDnsToTerraform(struct?: ObjectVpnSslWebPortalSplitDns | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dns_server1: cdktf.stringToTerraform(struct!.dnsServer1),
    dns_server2: cdktf.stringToTerraform(struct!.dnsServer2),
    domains: cdktf.stringToTerraform(struct!.domains),
    id: cdktf.numberToTerraform(struct!.id),
    ipv6_dns_server1: cdktf.stringToTerraform(struct!.ipv6DnsServer1),
    ipv6_dns_server2: cdktf.stringToTerraform(struct!.ipv6DnsServer2),
  }
}


export function objectVpnSslWebPortalSplitDnsToHclTerraform(struct?: ObjectVpnSslWebPortalSplitDns | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dns_server1: {
      value: cdktf.stringToHclTerraform(struct!.dnsServer1),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dns_server2: {
      value: cdktf.stringToHclTerraform(struct!.dnsServer2),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    domains: {
      value: cdktf.stringToHclTerraform(struct!.domains),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv6_dns_server1: {
      value: cdktf.stringToHclTerraform(struct!.ipv6DnsServer1),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6_dns_server2: {
      value: cdktf.stringToHclTerraform(struct!.ipv6DnsServer2),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectVpnSslWebPortalSplitDnsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObjectVpnSslWebPortalSplitDns | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dnsServer1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsServer1 = this._dnsServer1;
    }
    if (this._dnsServer2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsServer2 = this._dnsServer2;
    }
    if (this._domains !== undefined) {
      hasAnyValues = true;
      internalValueResult.domains = this._domains;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._ipv6DnsServer1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6DnsServer1 = this._ipv6DnsServer1;
    }
    if (this._ipv6DnsServer2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6DnsServer2 = this._ipv6DnsServer2;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectVpnSslWebPortalSplitDns | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dnsServer1 = undefined;
      this._dnsServer2 = undefined;
      this._domains = undefined;
      this._id = undefined;
      this._ipv6DnsServer1 = undefined;
      this._ipv6DnsServer2 = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dnsServer1 = value.dnsServer1;
      this._dnsServer2 = value.dnsServer2;
      this._domains = value.domains;
      this._id = value.id;
      this._ipv6DnsServer1 = value.ipv6DnsServer1;
      this._ipv6DnsServer2 = value.ipv6DnsServer2;
    }
  }

  // dns_server1 - computed: false, optional: true, required: false
  private _dnsServer1?: string; 
  public get dnsServer1() {
    return this.getStringAttribute('dns_server1');
  }
  public set dnsServer1(value: string) {
    this._dnsServer1 = value;
  }
  public resetDnsServer1() {
    this._dnsServer1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsServer1Input() {
    return this._dnsServer1;
  }

  // dns_server2 - computed: false, optional: true, required: false
  private _dnsServer2?: string; 
  public get dnsServer2() {
    return this.getStringAttribute('dns_server2');
  }
  public set dnsServer2(value: string) {
    this._dnsServer2 = value;
  }
  public resetDnsServer2() {
    this._dnsServer2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsServer2Input() {
    return this._dnsServer2;
  }

  // domains - computed: false, optional: true, required: false
  private _domains?: string; 
  public get domains() {
    return this.getStringAttribute('domains');
  }
  public set domains(value: string) {
    this._domains = value;
  }
  public resetDomains() {
    this._domains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainsInput() {
    return this._domains;
  }

  // id - computed: false, optional: true, required: false
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // ipv6_dns_server1 - computed: false, optional: true, required: false
  private _ipv6DnsServer1?: string; 
  public get ipv6DnsServer1() {
    return this.getStringAttribute('ipv6_dns_server1');
  }
  public set ipv6DnsServer1(value: string) {
    this._ipv6DnsServer1 = value;
  }
  public resetIpv6DnsServer1() {
    this._ipv6DnsServer1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6DnsServer1Input() {
    return this._ipv6DnsServer1;
  }

  // ipv6_dns_server2 - computed: false, optional: true, required: false
  private _ipv6DnsServer2?: string; 
  public get ipv6DnsServer2() {
    return this.getStringAttribute('ipv6_dns_server2');
  }
  public set ipv6DnsServer2(value: string) {
    this._ipv6DnsServer2 = value;
  }
  public resetIpv6DnsServer2() {
    this._ipv6DnsServer2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6DnsServer2Input() {
    return this._ipv6DnsServer2;
  }
}

export class ObjectVpnSslWebPortalSplitDnsList extends cdktf.ComplexList {
  public internalValue? : ObjectVpnSslWebPortalSplitDns[] | cdktf.IResolvable

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
  public get(index: number): ObjectVpnSslWebPortalSplitDnsOutputReference {
    return new ObjectVpnSslWebPortalSplitDnsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpn_ssl_web_portal fortimanager_object_vpn_ssl_web_portal}
*/
export class ObjectVpnSslWebPortal extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortimanager_object_vpn_ssl_web_portal";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ObjectVpnSslWebPortal resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ObjectVpnSslWebPortal to import
  * @param importFromId The id of the existing ObjectVpnSslWebPortal that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpn_ssl_web_portal#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ObjectVpnSslWebPortal to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortimanager_object_vpn_ssl_web_portal", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpn_ssl_web_portal fortimanager_object_vpn_ssl_web_portal} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ObjectVpnSslWebPortalConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ObjectVpnSslWebPortalConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortimanager_object_vpn_ssl_web_portal',
      terraformGeneratorMetadata: {
        providerName: 'fortimanager',
        providerVersion: '1.14.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._adom = config.adom;
    this._allowUserAccess = config.allowUserAccess;
    this._autoConnect = config.autoConnect;
    this._clientSrcRange = config.clientSrcRange;
    this._clipboard = config.clipboard;
    this._customLang = config.customLang;
    this._customizeForticlientDownloadUrl = config.customizeForticlientDownloadUrl;
    this._defaultProtocol = config.defaultProtocol;
    this._defaultWindowHeight = config.defaultWindowHeight;
    this._defaultWindowWidth = config.defaultWindowWidth;
    this._dhcp6RaLinkaddr = config.dhcp6RaLinkaddr;
    this._dhcpIpOverlap = config.dhcpIpOverlap;
    this._dhcpRaGiaddr = config.dhcpRaGiaddr;
    this._dhcpReservation = config.dhcpReservation;
    this._displayBookmark = config.displayBookmark;
    this._displayConnectionTools = config.displayConnectionTools;
    this._displayHistory = config.displayHistory;
    this._displayStatus = config.displayStatus;
    this._dnsServer1 = config.dnsServer1;
    this._dnsServer2 = config.dnsServer2;
    this._dnsSuffix = config.dnsSuffix;
    this._dynamicSortSubtable = config.dynamicSortSubtable;
    this._exclusiveRouting = config.exclusiveRouting;
    this._focusBookmark = config.focusBookmark;
    this._forticlientDownload = config.forticlientDownload;
    this._forticlientDownloadMethod = config.forticlientDownloadMethod;
    this._heading = config.heading;
    this._hideSsoCredential = config.hideSsoCredential;
    this._hostCheck = config.hostCheck;
    this._hostCheckInterval = config.hostCheckInterval;
    this._hostCheckPolicy = config.hostCheckPolicy;
    this._id = config.id;
    this._ipMode = config.ipMode;
    this._ipPools = config.ipPools;
    this._ipv6DnsServer1 = config.ipv6DnsServer1;
    this._ipv6DnsServer2 = config.ipv6DnsServer2;
    this._ipv6ExclusiveRouting = config.ipv6ExclusiveRouting;
    this._ipv6Pools = config.ipv6Pools;
    this._ipv6ServiceRestriction = config.ipv6ServiceRestriction;
    this._ipv6SplitTunneling = config.ipv6SplitTunneling;
    this._ipv6SplitTunnelingRoutingAddress = config.ipv6SplitTunnelingRoutingAddress;
    this._ipv6SplitTunnelingRoutingNegate = config.ipv6SplitTunnelingRoutingNegate;
    this._ipv6TunnelMode = config.ipv6TunnelMode;
    this._ipv6WinsServer1 = config.ipv6WinsServer1;
    this._ipv6WinsServer2 = config.ipv6WinsServer2;
    this._keepAlive = config.keepAlive;
    this._landingPageMode = config.landingPageMode;
    this._limitUserLogins = config.limitUserLogins;
    this._macAddrAction = config.macAddrAction;
    this._macAddrCheck = config.macAddrCheck;
    this._macosForticlientDownloadUrl = config.macosForticlientDownloadUrl;
    this._name = config.name;
    this._osCheck = config.osCheck;
    this._preferIpv6Dns = config.preferIpv6Dns;
    this._redirUrl = config.redirUrl;
    this._rewriteIpUriUi = config.rewriteIpUriUi;
    this._savePassword = config.savePassword;
    this._scopetype = config.scopetype;
    this._serviceRestriction = config.serviceRestriction;
    this._skipCheckForBrowser = config.skipCheckForBrowser;
    this._skipCheckForUnsupportedBrowser = config.skipCheckForUnsupportedBrowser;
    this._skipCheckForUnsupportedOs = config.skipCheckForUnsupportedOs;
    this._smbMaxVersion = config.smbMaxVersion;
    this._smbMinVersion = config.smbMinVersion;
    this._smbNtlmv1Auth = config.smbNtlmv1Auth;
    this._smbv1 = config.smbv1;
    this._splitTunneling = config.splitTunneling;
    this._splitTunnelingRoutingAddress = config.splitTunnelingRoutingAddress;
    this._splitTunnelingRoutingNegate = config.splitTunnelingRoutingNegate;
    this._theme = config.theme;
    this._transformBackwardSlashes = config.transformBackwardSlashes;
    this._tunnelMode = config.tunnelMode;
    this._useSdwan = config.useSdwan;
    this._userBookmark = config.userBookmark;
    this._userGroupBookmark = config.userGroupBookmark;
    this._webMode = config.webMode;
    this._windowsForticlientDownloadUrl = config.windowsForticlientDownloadUrl;
    this._winsServer1 = config.winsServer1;
    this._winsServer2 = config.winsServer2;
    this._bookmarkGroup.internalValue = config.bookmarkGroup;
    this._landingPage.internalValue = config.landingPage;
    this._macAddrCheckRule.internalValue = config.macAddrCheckRule;
    this._osCheckList.internalValue = config.osCheckList;
    this._splitDns.internalValue = config.splitDns;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // adom - computed: false, optional: true, required: false
  private _adom?: string; 
  public get adom() {
    return this.getStringAttribute('adom');
  }
  public set adom(value: string) {
    this._adom = value;
  }
  public resetAdom() {
    this._adom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adomInput() {
    return this._adom;
  }

  // allow_user_access - computed: true, optional: true, required: false
  private _allowUserAccess?: string[]; 
  public get allowUserAccess() {
    return cdktf.Fn.tolist(this.getListAttribute('allow_user_access'));
  }
  public set allowUserAccess(value: string[]) {
    this._allowUserAccess = value;
  }
  public resetAllowUserAccess() {
    this._allowUserAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowUserAccessInput() {
    return this._allowUserAccess;
  }

  // auto_connect - computed: false, optional: true, required: false
  private _autoConnect?: string; 
  public get autoConnect() {
    return this.getStringAttribute('auto_connect');
  }
  public set autoConnect(value: string) {
    this._autoConnect = value;
  }
  public resetAutoConnect() {
    this._autoConnect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoConnectInput() {
    return this._autoConnect;
  }

  // client_src_range - computed: true, optional: true, required: false
  private _clientSrcRange?: string; 
  public get clientSrcRange() {
    return this.getStringAttribute('client_src_range');
  }
  public set clientSrcRange(value: string) {
    this._clientSrcRange = value;
  }
  public resetClientSrcRange() {
    this._clientSrcRange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSrcRangeInput() {
    return this._clientSrcRange;
  }

  // clipboard - computed: true, optional: true, required: false
  private _clipboard?: string; 
  public get clipboard() {
    return this.getStringAttribute('clipboard');
  }
  public set clipboard(value: string) {
    this._clipboard = value;
  }
  public resetClipboard() {
    this._clipboard = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clipboardInput() {
    return this._clipboard;
  }

  // custom_lang - computed: false, optional: true, required: false
  private _customLang?: string; 
  public get customLang() {
    return this.getStringAttribute('custom_lang');
  }
  public set customLang(value: string) {
    this._customLang = value;
  }
  public resetCustomLang() {
    this._customLang = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customLangInput() {
    return this._customLang;
  }

  // customize_forticlient_download_url - computed: true, optional: true, required: false
  private _customizeForticlientDownloadUrl?: string; 
  public get customizeForticlientDownloadUrl() {
    return this.getStringAttribute('customize_forticlient_download_url');
  }
  public set customizeForticlientDownloadUrl(value: string) {
    this._customizeForticlientDownloadUrl = value;
  }
  public resetCustomizeForticlientDownloadUrl() {
    this._customizeForticlientDownloadUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customizeForticlientDownloadUrlInput() {
    return this._customizeForticlientDownloadUrl;
  }

  // default_protocol - computed: true, optional: true, required: false
  private _defaultProtocol?: string; 
  public get defaultProtocol() {
    return this.getStringAttribute('default_protocol');
  }
  public set defaultProtocol(value: string) {
    this._defaultProtocol = value;
  }
  public resetDefaultProtocol() {
    this._defaultProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultProtocolInput() {
    return this._defaultProtocol;
  }

  // default_window_height - computed: true, optional: true, required: false
  private _defaultWindowHeight?: number; 
  public get defaultWindowHeight() {
    return this.getNumberAttribute('default_window_height');
  }
  public set defaultWindowHeight(value: number) {
    this._defaultWindowHeight = value;
  }
  public resetDefaultWindowHeight() {
    this._defaultWindowHeight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultWindowHeightInput() {
    return this._defaultWindowHeight;
  }

  // default_window_width - computed: true, optional: true, required: false
  private _defaultWindowWidth?: number; 
  public get defaultWindowWidth() {
    return this.getNumberAttribute('default_window_width');
  }
  public set defaultWindowWidth(value: number) {
    this._defaultWindowWidth = value;
  }
  public resetDefaultWindowWidth() {
    this._defaultWindowWidth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultWindowWidthInput() {
    return this._defaultWindowWidth;
  }

  // dhcp6_ra_linkaddr - computed: true, optional: true, required: false
  private _dhcp6RaLinkaddr?: string; 
  public get dhcp6RaLinkaddr() {
    return this.getStringAttribute('dhcp6_ra_linkaddr');
  }
  public set dhcp6RaLinkaddr(value: string) {
    this._dhcp6RaLinkaddr = value;
  }
  public resetDhcp6RaLinkaddr() {
    this._dhcp6RaLinkaddr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcp6RaLinkaddrInput() {
    return this._dhcp6RaLinkaddr;
  }

  // dhcp_ip_overlap - computed: false, optional: true, required: false
  private _dhcpIpOverlap?: string; 
  public get dhcpIpOverlap() {
    return this.getStringAttribute('dhcp_ip_overlap');
  }
  public set dhcpIpOverlap(value: string) {
    this._dhcpIpOverlap = value;
  }
  public resetDhcpIpOverlap() {
    this._dhcpIpOverlap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpIpOverlapInput() {
    return this._dhcpIpOverlap;
  }

  // dhcp_ra_giaddr - computed: true, optional: true, required: false
  private _dhcpRaGiaddr?: string; 
  public get dhcpRaGiaddr() {
    return this.getStringAttribute('dhcp_ra_giaddr');
  }
  public set dhcpRaGiaddr(value: string) {
    this._dhcpRaGiaddr = value;
  }
  public resetDhcpRaGiaddr() {
    this._dhcpRaGiaddr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpRaGiaddrInput() {
    return this._dhcpRaGiaddr;
  }

  // dhcp_reservation - computed: true, optional: true, required: false
  private _dhcpReservation?: string; 
  public get dhcpReservation() {
    return this.getStringAttribute('dhcp_reservation');
  }
  public set dhcpReservation(value: string) {
    this._dhcpReservation = value;
  }
  public resetDhcpReservation() {
    this._dhcpReservation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpReservationInput() {
    return this._dhcpReservation;
  }

  // display_bookmark - computed: false, optional: true, required: false
  private _displayBookmark?: string; 
  public get displayBookmark() {
    return this.getStringAttribute('display_bookmark');
  }
  public set displayBookmark(value: string) {
    this._displayBookmark = value;
  }
  public resetDisplayBookmark() {
    this._displayBookmark = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayBookmarkInput() {
    return this._displayBookmark;
  }

  // display_connection_tools - computed: false, optional: true, required: false
  private _displayConnectionTools?: string; 
  public get displayConnectionTools() {
    return this.getStringAttribute('display_connection_tools');
  }
  public set displayConnectionTools(value: string) {
    this._displayConnectionTools = value;
  }
  public resetDisplayConnectionTools() {
    this._displayConnectionTools = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayConnectionToolsInput() {
    return this._displayConnectionTools;
  }

  // display_history - computed: false, optional: true, required: false
  private _displayHistory?: string; 
  public get displayHistory() {
    return this.getStringAttribute('display_history');
  }
  public set displayHistory(value: string) {
    this._displayHistory = value;
  }
  public resetDisplayHistory() {
    this._displayHistory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayHistoryInput() {
    return this._displayHistory;
  }

  // display_status - computed: false, optional: true, required: false
  private _displayStatus?: string; 
  public get displayStatus() {
    return this.getStringAttribute('display_status');
  }
  public set displayStatus(value: string) {
    this._displayStatus = value;
  }
  public resetDisplayStatus() {
    this._displayStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayStatusInput() {
    return this._displayStatus;
  }

  // dns_server1 - computed: false, optional: true, required: false
  private _dnsServer1?: string; 
  public get dnsServer1() {
    return this.getStringAttribute('dns_server1');
  }
  public set dnsServer1(value: string) {
    this._dnsServer1 = value;
  }
  public resetDnsServer1() {
    this._dnsServer1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsServer1Input() {
    return this._dnsServer1;
  }

  // dns_server2 - computed: false, optional: true, required: false
  private _dnsServer2?: string; 
  public get dnsServer2() {
    return this.getStringAttribute('dns_server2');
  }
  public set dnsServer2(value: string) {
    this._dnsServer2 = value;
  }
  public resetDnsServer2() {
    this._dnsServer2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsServer2Input() {
    return this._dnsServer2;
  }

  // dns_suffix - computed: false, optional: true, required: false
  private _dnsSuffix?: string; 
  public get dnsSuffix() {
    return this.getStringAttribute('dns_suffix');
  }
  public set dnsSuffix(value: string) {
    this._dnsSuffix = value;
  }
  public resetDnsSuffix() {
    this._dnsSuffix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsSuffixInput() {
    return this._dnsSuffix;
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

  // exclusive_routing - computed: true, optional: true, required: false
  private _exclusiveRouting?: string; 
  public get exclusiveRouting() {
    return this.getStringAttribute('exclusive_routing');
  }
  public set exclusiveRouting(value: string) {
    this._exclusiveRouting = value;
  }
  public resetExclusiveRouting() {
    this._exclusiveRouting = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exclusiveRoutingInput() {
    return this._exclusiveRouting;
  }

  // focus_bookmark - computed: true, optional: true, required: false
  private _focusBookmark?: string; 
  public get focusBookmark() {
    return this.getStringAttribute('focus_bookmark');
  }
  public set focusBookmark(value: string) {
    this._focusBookmark = value;
  }
  public resetFocusBookmark() {
    this._focusBookmark = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get focusBookmarkInput() {
    return this._focusBookmark;
  }

  // forticlient_download - computed: true, optional: true, required: false
  private _forticlientDownload?: string; 
  public get forticlientDownload() {
    return this.getStringAttribute('forticlient_download');
  }
  public set forticlientDownload(value: string) {
    this._forticlientDownload = value;
  }
  public resetForticlientDownload() {
    this._forticlientDownload = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forticlientDownloadInput() {
    return this._forticlientDownload;
  }

  // forticlient_download_method - computed: true, optional: true, required: false
  private _forticlientDownloadMethod?: string; 
  public get forticlientDownloadMethod() {
    return this.getStringAttribute('forticlient_download_method');
  }
  public set forticlientDownloadMethod(value: string) {
    this._forticlientDownloadMethod = value;
  }
  public resetForticlientDownloadMethod() {
    this._forticlientDownloadMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forticlientDownloadMethodInput() {
    return this._forticlientDownloadMethod;
  }

  // heading - computed: false, optional: true, required: false
  private _heading?: string; 
  public get heading() {
    return this.getStringAttribute('heading');
  }
  public set heading(value: string) {
    this._heading = value;
  }
  public resetHeading() {
    this._heading = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headingInput() {
    return this._heading;
  }

  // hide_sso_credential - computed: false, optional: true, required: false
  private _hideSsoCredential?: string; 
  public get hideSsoCredential() {
    return this.getStringAttribute('hide_sso_credential');
  }
  public set hideSsoCredential(value: string) {
    this._hideSsoCredential = value;
  }
  public resetHideSsoCredential() {
    this._hideSsoCredential = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hideSsoCredentialInput() {
    return this._hideSsoCredential;
  }

  // host_check - computed: false, optional: true, required: false
  private _hostCheck?: string; 
  public get hostCheck() {
    return this.getStringAttribute('host_check');
  }
  public set hostCheck(value: string) {
    this._hostCheck = value;
  }
  public resetHostCheck() {
    this._hostCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostCheckInput() {
    return this._hostCheck;
  }

  // host_check_interval - computed: false, optional: true, required: false
  private _hostCheckInterval?: number; 
  public get hostCheckInterval() {
    return this.getNumberAttribute('host_check_interval');
  }
  public set hostCheckInterval(value: number) {
    this._hostCheckInterval = value;
  }
  public resetHostCheckInterval() {
    this._hostCheckInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostCheckIntervalInput() {
    return this._hostCheckInterval;
  }

  // host_check_policy - computed: false, optional: true, required: false
  private _hostCheckPolicy?: string; 
  public get hostCheckPolicy() {
    return this.getStringAttribute('host_check_policy');
  }
  public set hostCheckPolicy(value: string) {
    this._hostCheckPolicy = value;
  }
  public resetHostCheckPolicy() {
    this._hostCheckPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostCheckPolicyInput() {
    return this._hostCheckPolicy;
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

  // ip_mode - computed: false, optional: true, required: false
  private _ipMode?: string; 
  public get ipMode() {
    return this.getStringAttribute('ip_mode');
  }
  public set ipMode(value: string) {
    this._ipMode = value;
  }
  public resetIpMode() {
    this._ipMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipModeInput() {
    return this._ipMode;
  }

  // ip_pools - computed: false, optional: true, required: false
  private _ipPools?: string; 
  public get ipPools() {
    return this.getStringAttribute('ip_pools');
  }
  public set ipPools(value: string) {
    this._ipPools = value;
  }
  public resetIpPools() {
    this._ipPools = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipPoolsInput() {
    return this._ipPools;
  }

  // ipv6_dns_server1 - computed: false, optional: true, required: false
  private _ipv6DnsServer1?: string; 
  public get ipv6DnsServer1() {
    return this.getStringAttribute('ipv6_dns_server1');
  }
  public set ipv6DnsServer1(value: string) {
    this._ipv6DnsServer1 = value;
  }
  public resetIpv6DnsServer1() {
    this._ipv6DnsServer1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6DnsServer1Input() {
    return this._ipv6DnsServer1;
  }

  // ipv6_dns_server2 - computed: false, optional: true, required: false
  private _ipv6DnsServer2?: string; 
  public get ipv6DnsServer2() {
    return this.getStringAttribute('ipv6_dns_server2');
  }
  public set ipv6DnsServer2(value: string) {
    this._ipv6DnsServer2 = value;
  }
  public resetIpv6DnsServer2() {
    this._ipv6DnsServer2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6DnsServer2Input() {
    return this._ipv6DnsServer2;
  }

  // ipv6_exclusive_routing - computed: true, optional: true, required: false
  private _ipv6ExclusiveRouting?: string; 
  public get ipv6ExclusiveRouting() {
    return this.getStringAttribute('ipv6_exclusive_routing');
  }
  public set ipv6ExclusiveRouting(value: string) {
    this._ipv6ExclusiveRouting = value;
  }
  public resetIpv6ExclusiveRouting() {
    this._ipv6ExclusiveRouting = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6ExclusiveRoutingInput() {
    return this._ipv6ExclusiveRouting;
  }

  // ipv6_pools - computed: false, optional: true, required: false
  private _ipv6Pools?: string; 
  public get ipv6Pools() {
    return this.getStringAttribute('ipv6_pools');
  }
  public set ipv6Pools(value: string) {
    this._ipv6Pools = value;
  }
  public resetIpv6Pools() {
    this._ipv6Pools = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6PoolsInput() {
    return this._ipv6Pools;
  }

  // ipv6_service_restriction - computed: true, optional: true, required: false
  private _ipv6ServiceRestriction?: string; 
  public get ipv6ServiceRestriction() {
    return this.getStringAttribute('ipv6_service_restriction');
  }
  public set ipv6ServiceRestriction(value: string) {
    this._ipv6ServiceRestriction = value;
  }
  public resetIpv6ServiceRestriction() {
    this._ipv6ServiceRestriction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6ServiceRestrictionInput() {
    return this._ipv6ServiceRestriction;
  }

  // ipv6_split_tunneling - computed: false, optional: true, required: false
  private _ipv6SplitTunneling?: string; 
  public get ipv6SplitTunneling() {
    return this.getStringAttribute('ipv6_split_tunneling');
  }
  public set ipv6SplitTunneling(value: string) {
    this._ipv6SplitTunneling = value;
  }
  public resetIpv6SplitTunneling() {
    this._ipv6SplitTunneling = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6SplitTunnelingInput() {
    return this._ipv6SplitTunneling;
  }

  // ipv6_split_tunneling_routing_address - computed: true, optional: true, required: false
  private _ipv6SplitTunnelingRoutingAddress?: string[]; 
  public get ipv6SplitTunnelingRoutingAddress() {
    return cdktf.Fn.tolist(this.getListAttribute('ipv6_split_tunneling_routing_address'));
  }
  public set ipv6SplitTunnelingRoutingAddress(value: string[]) {
    this._ipv6SplitTunnelingRoutingAddress = value;
  }
  public resetIpv6SplitTunnelingRoutingAddress() {
    this._ipv6SplitTunnelingRoutingAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6SplitTunnelingRoutingAddressInput() {
    return this._ipv6SplitTunnelingRoutingAddress;
  }

  // ipv6_split_tunneling_routing_negate - computed: true, optional: true, required: false
  private _ipv6SplitTunnelingRoutingNegate?: string; 
  public get ipv6SplitTunnelingRoutingNegate() {
    return this.getStringAttribute('ipv6_split_tunneling_routing_negate');
  }
  public set ipv6SplitTunnelingRoutingNegate(value: string) {
    this._ipv6SplitTunnelingRoutingNegate = value;
  }
  public resetIpv6SplitTunnelingRoutingNegate() {
    this._ipv6SplitTunnelingRoutingNegate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6SplitTunnelingRoutingNegateInput() {
    return this._ipv6SplitTunnelingRoutingNegate;
  }

  // ipv6_tunnel_mode - computed: true, optional: true, required: false
  private _ipv6TunnelMode?: string; 
  public get ipv6TunnelMode() {
    return this.getStringAttribute('ipv6_tunnel_mode');
  }
  public set ipv6TunnelMode(value: string) {
    this._ipv6TunnelMode = value;
  }
  public resetIpv6TunnelMode() {
    this._ipv6TunnelMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6TunnelModeInput() {
    return this._ipv6TunnelMode;
  }

  // ipv6_wins_server1 - computed: false, optional: true, required: false
  private _ipv6WinsServer1?: string; 
  public get ipv6WinsServer1() {
    return this.getStringAttribute('ipv6_wins_server1');
  }
  public set ipv6WinsServer1(value: string) {
    this._ipv6WinsServer1 = value;
  }
  public resetIpv6WinsServer1() {
    this._ipv6WinsServer1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6WinsServer1Input() {
    return this._ipv6WinsServer1;
  }

  // ipv6_wins_server2 - computed: false, optional: true, required: false
  private _ipv6WinsServer2?: string; 
  public get ipv6WinsServer2() {
    return this.getStringAttribute('ipv6_wins_server2');
  }
  public set ipv6WinsServer2(value: string) {
    this._ipv6WinsServer2 = value;
  }
  public resetIpv6WinsServer2() {
    this._ipv6WinsServer2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6WinsServer2Input() {
    return this._ipv6WinsServer2;
  }

  // keep_alive - computed: false, optional: true, required: false
  private _keepAlive?: string; 
  public get keepAlive() {
    return this.getStringAttribute('keep_alive');
  }
  public set keepAlive(value: string) {
    this._keepAlive = value;
  }
  public resetKeepAlive() {
    this._keepAlive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepAliveInput() {
    return this._keepAlive;
  }

  // landing_page_mode - computed: true, optional: true, required: false
  private _landingPageMode?: string; 
  public get landingPageMode() {
    return this.getStringAttribute('landing_page_mode');
  }
  public set landingPageMode(value: string) {
    this._landingPageMode = value;
  }
  public resetLandingPageMode() {
    this._landingPageMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get landingPageModeInput() {
    return this._landingPageMode;
  }

  // limit_user_logins - computed: true, optional: true, required: false
  private _limitUserLogins?: string; 
  public get limitUserLogins() {
    return this.getStringAttribute('limit_user_logins');
  }
  public set limitUserLogins(value: string) {
    this._limitUserLogins = value;
  }
  public resetLimitUserLogins() {
    this._limitUserLogins = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitUserLoginsInput() {
    return this._limitUserLogins;
  }

  // mac_addr_action - computed: false, optional: true, required: false
  private _macAddrAction?: string; 
  public get macAddrAction() {
    return this.getStringAttribute('mac_addr_action');
  }
  public set macAddrAction(value: string) {
    this._macAddrAction = value;
  }
  public resetMacAddrAction() {
    this._macAddrAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macAddrActionInput() {
    return this._macAddrAction;
  }

  // mac_addr_check - computed: false, optional: true, required: false
  private _macAddrCheck?: string; 
  public get macAddrCheck() {
    return this.getStringAttribute('mac_addr_check');
  }
  public set macAddrCheck(value: string) {
    this._macAddrCheck = value;
  }
  public resetMacAddrCheck() {
    this._macAddrCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macAddrCheckInput() {
    return this._macAddrCheck;
  }

  // macos_forticlient_download_url - computed: false, optional: true, required: false
  private _macosForticlientDownloadUrl?: string; 
  public get macosForticlientDownloadUrl() {
    return this.getStringAttribute('macos_forticlient_download_url');
  }
  public set macosForticlientDownloadUrl(value: string) {
    this._macosForticlientDownloadUrl = value;
  }
  public resetMacosForticlientDownloadUrl() {
    this._macosForticlientDownloadUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macosForticlientDownloadUrlInput() {
    return this._macosForticlientDownloadUrl;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // os_check - computed: false, optional: true, required: false
  private _osCheck?: string; 
  public get osCheck() {
    return this.getStringAttribute('os_check');
  }
  public set osCheck(value: string) {
    this._osCheck = value;
  }
  public resetOsCheck() {
    this._osCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osCheckInput() {
    return this._osCheck;
  }

  // prefer_ipv6_dns - computed: true, optional: true, required: false
  private _preferIpv6Dns?: string; 
  public get preferIpv6Dns() {
    return this.getStringAttribute('prefer_ipv6_dns');
  }
  public set preferIpv6Dns(value: string) {
    this._preferIpv6Dns = value;
  }
  public resetPreferIpv6Dns() {
    this._preferIpv6Dns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferIpv6DnsInput() {
    return this._preferIpv6Dns;
  }

  // redir_url - computed: false, optional: true, required: false
  private _redirUrl?: string; 
  public get redirUrl() {
    return this.getStringAttribute('redir_url');
  }
  public set redirUrl(value: string) {
    this._redirUrl = value;
  }
  public resetRedirUrl() {
    this._redirUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirUrlInput() {
    return this._redirUrl;
  }

  // rewrite_ip_uri_ui - computed: true, optional: true, required: false
  private _rewriteIpUriUi?: string; 
  public get rewriteIpUriUi() {
    return this.getStringAttribute('rewrite_ip_uri_ui');
  }
  public set rewriteIpUriUi(value: string) {
    this._rewriteIpUriUi = value;
  }
  public resetRewriteIpUriUi() {
    this._rewriteIpUriUi = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rewriteIpUriUiInput() {
    return this._rewriteIpUriUi;
  }

  // save_password - computed: false, optional: true, required: false
  private _savePassword?: string; 
  public get savePassword() {
    return this.getStringAttribute('save_password');
  }
  public set savePassword(value: string) {
    this._savePassword = value;
  }
  public resetSavePassword() {
    this._savePassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get savePasswordInput() {
    return this._savePassword;
  }

  // scopetype - computed: false, optional: true, required: false
  private _scopetype?: string; 
  public get scopetype() {
    return this.getStringAttribute('scopetype');
  }
  public set scopetype(value: string) {
    this._scopetype = value;
  }
  public resetScopetype() {
    this._scopetype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopetypeInput() {
    return this._scopetype;
  }

  // service_restriction - computed: true, optional: true, required: false
  private _serviceRestriction?: string; 
  public get serviceRestriction() {
    return this.getStringAttribute('service_restriction');
  }
  public set serviceRestriction(value: string) {
    this._serviceRestriction = value;
  }
  public resetServiceRestriction() {
    this._serviceRestriction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceRestrictionInput() {
    return this._serviceRestriction;
  }

  // skip_check_for_browser - computed: true, optional: true, required: false
  private _skipCheckForBrowser?: string; 
  public get skipCheckForBrowser() {
    return this.getStringAttribute('skip_check_for_browser');
  }
  public set skipCheckForBrowser(value: string) {
    this._skipCheckForBrowser = value;
  }
  public resetSkipCheckForBrowser() {
    this._skipCheckForBrowser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipCheckForBrowserInput() {
    return this._skipCheckForBrowser;
  }

  // skip_check_for_unsupported_browser - computed: false, optional: true, required: false
  private _skipCheckForUnsupportedBrowser?: string; 
  public get skipCheckForUnsupportedBrowser() {
    return this.getStringAttribute('skip_check_for_unsupported_browser');
  }
  public set skipCheckForUnsupportedBrowser(value: string) {
    this._skipCheckForUnsupportedBrowser = value;
  }
  public resetSkipCheckForUnsupportedBrowser() {
    this._skipCheckForUnsupportedBrowser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipCheckForUnsupportedBrowserInput() {
    return this._skipCheckForUnsupportedBrowser;
  }

  // skip_check_for_unsupported_os - computed: false, optional: true, required: false
  private _skipCheckForUnsupportedOs?: string; 
  public get skipCheckForUnsupportedOs() {
    return this.getStringAttribute('skip_check_for_unsupported_os');
  }
  public set skipCheckForUnsupportedOs(value: string) {
    this._skipCheckForUnsupportedOs = value;
  }
  public resetSkipCheckForUnsupportedOs() {
    this._skipCheckForUnsupportedOs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipCheckForUnsupportedOsInput() {
    return this._skipCheckForUnsupportedOs;
  }

  // smb_max_version - computed: false, optional: true, required: false
  private _smbMaxVersion?: string; 
  public get smbMaxVersion() {
    return this.getStringAttribute('smb_max_version');
  }
  public set smbMaxVersion(value: string) {
    this._smbMaxVersion = value;
  }
  public resetSmbMaxVersion() {
    this._smbMaxVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smbMaxVersionInput() {
    return this._smbMaxVersion;
  }

  // smb_min_version - computed: false, optional: true, required: false
  private _smbMinVersion?: string; 
  public get smbMinVersion() {
    return this.getStringAttribute('smb_min_version');
  }
  public set smbMinVersion(value: string) {
    this._smbMinVersion = value;
  }
  public resetSmbMinVersion() {
    this._smbMinVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smbMinVersionInput() {
    return this._smbMinVersion;
  }

  // smb_ntlmv1_auth - computed: false, optional: true, required: false
  private _smbNtlmv1Auth?: string; 
  public get smbNtlmv1Auth() {
    return this.getStringAttribute('smb_ntlmv1_auth');
  }
  public set smbNtlmv1Auth(value: string) {
    this._smbNtlmv1Auth = value;
  }
  public resetSmbNtlmv1Auth() {
    this._smbNtlmv1Auth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smbNtlmv1AuthInput() {
    return this._smbNtlmv1Auth;
  }

  // smbv1 - computed: false, optional: true, required: false
  private _smbv1?: string; 
  public get smbv1() {
    return this.getStringAttribute('smbv1');
  }
  public set smbv1(value: string) {
    this._smbv1 = value;
  }
  public resetSmbv1() {
    this._smbv1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smbv1Input() {
    return this._smbv1;
  }

  // split_tunneling - computed: false, optional: true, required: false
  private _splitTunneling?: string; 
  public get splitTunneling() {
    return this.getStringAttribute('split_tunneling');
  }
  public set splitTunneling(value: string) {
    this._splitTunneling = value;
  }
  public resetSplitTunneling() {
    this._splitTunneling = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get splitTunnelingInput() {
    return this._splitTunneling;
  }

  // split_tunneling_routing_address - computed: true, optional: true, required: false
  private _splitTunnelingRoutingAddress?: string[]; 
  public get splitTunnelingRoutingAddress() {
    return cdktf.Fn.tolist(this.getListAttribute('split_tunneling_routing_address'));
  }
  public set splitTunnelingRoutingAddress(value: string[]) {
    this._splitTunnelingRoutingAddress = value;
  }
  public resetSplitTunnelingRoutingAddress() {
    this._splitTunnelingRoutingAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get splitTunnelingRoutingAddressInput() {
    return this._splitTunnelingRoutingAddress;
  }

  // split_tunneling_routing_negate - computed: true, optional: true, required: false
  private _splitTunnelingRoutingNegate?: string; 
  public get splitTunnelingRoutingNegate() {
    return this.getStringAttribute('split_tunneling_routing_negate');
  }
  public set splitTunnelingRoutingNegate(value: string) {
    this._splitTunnelingRoutingNegate = value;
  }
  public resetSplitTunnelingRoutingNegate() {
    this._splitTunnelingRoutingNegate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get splitTunnelingRoutingNegateInput() {
    return this._splitTunnelingRoutingNegate;
  }

  // theme - computed: false, optional: true, required: false
  private _theme?: string; 
  public get theme() {
    return this.getStringAttribute('theme');
  }
  public set theme(value: string) {
    this._theme = value;
  }
  public resetTheme() {
    this._theme = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get themeInput() {
    return this._theme;
  }

  // transform_backward_slashes - computed: false, optional: true, required: false
  private _transformBackwardSlashes?: string; 
  public get transformBackwardSlashes() {
    return this.getStringAttribute('transform_backward_slashes');
  }
  public set transformBackwardSlashes(value: string) {
    this._transformBackwardSlashes = value;
  }
  public resetTransformBackwardSlashes() {
    this._transformBackwardSlashes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transformBackwardSlashesInput() {
    return this._transformBackwardSlashes;
  }

  // tunnel_mode - computed: true, optional: true, required: false
  private _tunnelMode?: string; 
  public get tunnelMode() {
    return this.getStringAttribute('tunnel_mode');
  }
  public set tunnelMode(value: string) {
    this._tunnelMode = value;
  }
  public resetTunnelMode() {
    this._tunnelMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelModeInput() {
    return this._tunnelMode;
  }

  // use_sdwan - computed: true, optional: true, required: false
  private _useSdwan?: string; 
  public get useSdwan() {
    return this.getStringAttribute('use_sdwan');
  }
  public set useSdwan(value: string) {
    this._useSdwan = value;
  }
  public resetUseSdwan() {
    this._useSdwan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useSdwanInput() {
    return this._useSdwan;
  }

  // user_bookmark - computed: false, optional: true, required: false
  private _userBookmark?: string; 
  public get userBookmark() {
    return this.getStringAttribute('user_bookmark');
  }
  public set userBookmark(value: string) {
    this._userBookmark = value;
  }
  public resetUserBookmark() {
    this._userBookmark = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userBookmarkInput() {
    return this._userBookmark;
  }

  // user_group_bookmark - computed: false, optional: true, required: false
  private _userGroupBookmark?: string; 
  public get userGroupBookmark() {
    return this.getStringAttribute('user_group_bookmark');
  }
  public set userGroupBookmark(value: string) {
    this._userGroupBookmark = value;
  }
  public resetUserGroupBookmark() {
    this._userGroupBookmark = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userGroupBookmarkInput() {
    return this._userGroupBookmark;
  }

  // web_mode - computed: true, optional: true, required: false
  private _webMode?: string; 
  public get webMode() {
    return this.getStringAttribute('web_mode');
  }
  public set webMode(value: string) {
    this._webMode = value;
  }
  public resetWebMode() {
    this._webMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webModeInput() {
    return this._webMode;
  }

  // windows_forticlient_download_url - computed: false, optional: true, required: false
  private _windowsForticlientDownloadUrl?: string; 
  public get windowsForticlientDownloadUrl() {
    return this.getStringAttribute('windows_forticlient_download_url');
  }
  public set windowsForticlientDownloadUrl(value: string) {
    this._windowsForticlientDownloadUrl = value;
  }
  public resetWindowsForticlientDownloadUrl() {
    this._windowsForticlientDownloadUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get windowsForticlientDownloadUrlInput() {
    return this._windowsForticlientDownloadUrl;
  }

  // wins_server1 - computed: false, optional: true, required: false
  private _winsServer1?: string; 
  public get winsServer1() {
    return this.getStringAttribute('wins_server1');
  }
  public set winsServer1(value: string) {
    this._winsServer1 = value;
  }
  public resetWinsServer1() {
    this._winsServer1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get winsServer1Input() {
    return this._winsServer1;
  }

  // wins_server2 - computed: false, optional: true, required: false
  private _winsServer2?: string; 
  public get winsServer2() {
    return this.getStringAttribute('wins_server2');
  }
  public set winsServer2(value: string) {
    this._winsServer2 = value;
  }
  public resetWinsServer2() {
    this._winsServer2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get winsServer2Input() {
    return this._winsServer2;
  }

  // bookmark_group - computed: false, optional: true, required: false
  private _bookmarkGroup = new ObjectVpnSslWebPortalBookmarkGroupList(this, "bookmark_group", false);
  public get bookmarkGroup() {
    return this._bookmarkGroup;
  }
  public putBookmarkGroup(value: ObjectVpnSslWebPortalBookmarkGroup[] | cdktf.IResolvable) {
    this._bookmarkGroup.internalValue = value;
  }
  public resetBookmarkGroup() {
    this._bookmarkGroup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bookmarkGroupInput() {
    return this._bookmarkGroup.internalValue;
  }

  // landing_page - computed: false, optional: true, required: false
  private _landingPage = new ObjectVpnSslWebPortalLandingPageOutputReference(this, "landing_page");
  public get landingPage() {
    return this._landingPage;
  }
  public putLandingPage(value: ObjectVpnSslWebPortalLandingPage) {
    this._landingPage.internalValue = value;
  }
  public resetLandingPage() {
    this._landingPage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get landingPageInput() {
    return this._landingPage.internalValue;
  }

  // mac_addr_check_rule - computed: false, optional: true, required: false
  private _macAddrCheckRule = new ObjectVpnSslWebPortalMacAddrCheckRuleList(this, "mac_addr_check_rule", false);
  public get macAddrCheckRule() {
    return this._macAddrCheckRule;
  }
  public putMacAddrCheckRule(value: ObjectVpnSslWebPortalMacAddrCheckRule[] | cdktf.IResolvable) {
    this._macAddrCheckRule.internalValue = value;
  }
  public resetMacAddrCheckRule() {
    this._macAddrCheckRule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macAddrCheckRuleInput() {
    return this._macAddrCheckRule.internalValue;
  }

  // os_check_list - computed: false, optional: true, required: false
  private _osCheckList = new ObjectVpnSslWebPortalOsCheckListStructOutputReference(this, "os_check_list");
  public get osCheckList() {
    return this._osCheckList;
  }
  public putOsCheckList(value: ObjectVpnSslWebPortalOsCheckListStruct) {
    this._osCheckList.internalValue = value;
  }
  public resetOsCheckList() {
    this._osCheckList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osCheckListInput() {
    return this._osCheckList.internalValue;
  }

  // split_dns - computed: false, optional: true, required: false
  private _splitDns = new ObjectVpnSslWebPortalSplitDnsList(this, "split_dns", false);
  public get splitDns() {
    return this._splitDns;
  }
  public putSplitDns(value: ObjectVpnSslWebPortalSplitDns[] | cdktf.IResolvable) {
    this._splitDns.internalValue = value;
  }
  public resetSplitDns() {
    this._splitDns.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get splitDnsInput() {
    return this._splitDns.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      adom: cdktf.stringToTerraform(this._adom),
      allow_user_access: cdktf.listMapper(cdktf.stringToTerraform, false)(this._allowUserAccess),
      auto_connect: cdktf.stringToTerraform(this._autoConnect),
      client_src_range: cdktf.stringToTerraform(this._clientSrcRange),
      clipboard: cdktf.stringToTerraform(this._clipboard),
      custom_lang: cdktf.stringToTerraform(this._customLang),
      customize_forticlient_download_url: cdktf.stringToTerraform(this._customizeForticlientDownloadUrl),
      default_protocol: cdktf.stringToTerraform(this._defaultProtocol),
      default_window_height: cdktf.numberToTerraform(this._defaultWindowHeight),
      default_window_width: cdktf.numberToTerraform(this._defaultWindowWidth),
      dhcp6_ra_linkaddr: cdktf.stringToTerraform(this._dhcp6RaLinkaddr),
      dhcp_ip_overlap: cdktf.stringToTerraform(this._dhcpIpOverlap),
      dhcp_ra_giaddr: cdktf.stringToTerraform(this._dhcpRaGiaddr),
      dhcp_reservation: cdktf.stringToTerraform(this._dhcpReservation),
      display_bookmark: cdktf.stringToTerraform(this._displayBookmark),
      display_connection_tools: cdktf.stringToTerraform(this._displayConnectionTools),
      display_history: cdktf.stringToTerraform(this._displayHistory),
      display_status: cdktf.stringToTerraform(this._displayStatus),
      dns_server1: cdktf.stringToTerraform(this._dnsServer1),
      dns_server2: cdktf.stringToTerraform(this._dnsServer2),
      dns_suffix: cdktf.stringToTerraform(this._dnsSuffix),
      dynamic_sort_subtable: cdktf.stringToTerraform(this._dynamicSortSubtable),
      exclusive_routing: cdktf.stringToTerraform(this._exclusiveRouting),
      focus_bookmark: cdktf.stringToTerraform(this._focusBookmark),
      forticlient_download: cdktf.stringToTerraform(this._forticlientDownload),
      forticlient_download_method: cdktf.stringToTerraform(this._forticlientDownloadMethod),
      heading: cdktf.stringToTerraform(this._heading),
      hide_sso_credential: cdktf.stringToTerraform(this._hideSsoCredential),
      host_check: cdktf.stringToTerraform(this._hostCheck),
      host_check_interval: cdktf.numberToTerraform(this._hostCheckInterval),
      host_check_policy: cdktf.stringToTerraform(this._hostCheckPolicy),
      id: cdktf.stringToTerraform(this._id),
      ip_mode: cdktf.stringToTerraform(this._ipMode),
      ip_pools: cdktf.stringToTerraform(this._ipPools),
      ipv6_dns_server1: cdktf.stringToTerraform(this._ipv6DnsServer1),
      ipv6_dns_server2: cdktf.stringToTerraform(this._ipv6DnsServer2),
      ipv6_exclusive_routing: cdktf.stringToTerraform(this._ipv6ExclusiveRouting),
      ipv6_pools: cdktf.stringToTerraform(this._ipv6Pools),
      ipv6_service_restriction: cdktf.stringToTerraform(this._ipv6ServiceRestriction),
      ipv6_split_tunneling: cdktf.stringToTerraform(this._ipv6SplitTunneling),
      ipv6_split_tunneling_routing_address: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ipv6SplitTunnelingRoutingAddress),
      ipv6_split_tunneling_routing_negate: cdktf.stringToTerraform(this._ipv6SplitTunnelingRoutingNegate),
      ipv6_tunnel_mode: cdktf.stringToTerraform(this._ipv6TunnelMode),
      ipv6_wins_server1: cdktf.stringToTerraform(this._ipv6WinsServer1),
      ipv6_wins_server2: cdktf.stringToTerraform(this._ipv6WinsServer2),
      keep_alive: cdktf.stringToTerraform(this._keepAlive),
      landing_page_mode: cdktf.stringToTerraform(this._landingPageMode),
      limit_user_logins: cdktf.stringToTerraform(this._limitUserLogins),
      mac_addr_action: cdktf.stringToTerraform(this._macAddrAction),
      mac_addr_check: cdktf.stringToTerraform(this._macAddrCheck),
      macos_forticlient_download_url: cdktf.stringToTerraform(this._macosForticlientDownloadUrl),
      name: cdktf.stringToTerraform(this._name),
      os_check: cdktf.stringToTerraform(this._osCheck),
      prefer_ipv6_dns: cdktf.stringToTerraform(this._preferIpv6Dns),
      redir_url: cdktf.stringToTerraform(this._redirUrl),
      rewrite_ip_uri_ui: cdktf.stringToTerraform(this._rewriteIpUriUi),
      save_password: cdktf.stringToTerraform(this._savePassword),
      scopetype: cdktf.stringToTerraform(this._scopetype),
      service_restriction: cdktf.stringToTerraform(this._serviceRestriction),
      skip_check_for_browser: cdktf.stringToTerraform(this._skipCheckForBrowser),
      skip_check_for_unsupported_browser: cdktf.stringToTerraform(this._skipCheckForUnsupportedBrowser),
      skip_check_for_unsupported_os: cdktf.stringToTerraform(this._skipCheckForUnsupportedOs),
      smb_max_version: cdktf.stringToTerraform(this._smbMaxVersion),
      smb_min_version: cdktf.stringToTerraform(this._smbMinVersion),
      smb_ntlmv1_auth: cdktf.stringToTerraform(this._smbNtlmv1Auth),
      smbv1: cdktf.stringToTerraform(this._smbv1),
      split_tunneling: cdktf.stringToTerraform(this._splitTunneling),
      split_tunneling_routing_address: cdktf.listMapper(cdktf.stringToTerraform, false)(this._splitTunnelingRoutingAddress),
      split_tunneling_routing_negate: cdktf.stringToTerraform(this._splitTunnelingRoutingNegate),
      theme: cdktf.stringToTerraform(this._theme),
      transform_backward_slashes: cdktf.stringToTerraform(this._transformBackwardSlashes),
      tunnel_mode: cdktf.stringToTerraform(this._tunnelMode),
      use_sdwan: cdktf.stringToTerraform(this._useSdwan),
      user_bookmark: cdktf.stringToTerraform(this._userBookmark),
      user_group_bookmark: cdktf.stringToTerraform(this._userGroupBookmark),
      web_mode: cdktf.stringToTerraform(this._webMode),
      windows_forticlient_download_url: cdktf.stringToTerraform(this._windowsForticlientDownloadUrl),
      wins_server1: cdktf.stringToTerraform(this._winsServer1),
      wins_server2: cdktf.stringToTerraform(this._winsServer2),
      bookmark_group: cdktf.listMapper(objectVpnSslWebPortalBookmarkGroupToTerraform, true)(this._bookmarkGroup.internalValue),
      landing_page: objectVpnSslWebPortalLandingPageToTerraform(this._landingPage.internalValue),
      mac_addr_check_rule: cdktf.listMapper(objectVpnSslWebPortalMacAddrCheckRuleToTerraform, true)(this._macAddrCheckRule.internalValue),
      os_check_list: objectVpnSslWebPortalOsCheckListStructToTerraform(this._osCheckList.internalValue),
      split_dns: cdktf.listMapper(objectVpnSslWebPortalSplitDnsToTerraform, true)(this._splitDns.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      adom: {
        value: cdktf.stringToHclTerraform(this._adom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      allow_user_access: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._allowUserAccess),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      auto_connect: {
        value: cdktf.stringToHclTerraform(this._autoConnect),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_src_range: {
        value: cdktf.stringToHclTerraform(this._clientSrcRange),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      clipboard: {
        value: cdktf.stringToHclTerraform(this._clipboard),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_lang: {
        value: cdktf.stringToHclTerraform(this._customLang),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      customize_forticlient_download_url: {
        value: cdktf.stringToHclTerraform(this._customizeForticlientDownloadUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_protocol: {
        value: cdktf.stringToHclTerraform(this._defaultProtocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_window_height: {
        value: cdktf.numberToHclTerraform(this._defaultWindowHeight),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      default_window_width: {
        value: cdktf.numberToHclTerraform(this._defaultWindowWidth),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dhcp6_ra_linkaddr: {
        value: cdktf.stringToHclTerraform(this._dhcp6RaLinkaddr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dhcp_ip_overlap: {
        value: cdktf.stringToHclTerraform(this._dhcpIpOverlap),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dhcp_ra_giaddr: {
        value: cdktf.stringToHclTerraform(this._dhcpRaGiaddr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dhcp_reservation: {
        value: cdktf.stringToHclTerraform(this._dhcpReservation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      display_bookmark: {
        value: cdktf.stringToHclTerraform(this._displayBookmark),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      display_connection_tools: {
        value: cdktf.stringToHclTerraform(this._displayConnectionTools),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      display_history: {
        value: cdktf.stringToHclTerraform(this._displayHistory),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      display_status: {
        value: cdktf.stringToHclTerraform(this._displayStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dns_server1: {
        value: cdktf.stringToHclTerraform(this._dnsServer1),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dns_server2: {
        value: cdktf.stringToHclTerraform(this._dnsServer2),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dns_suffix: {
        value: cdktf.stringToHclTerraform(this._dnsSuffix),
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
      exclusive_routing: {
        value: cdktf.stringToHclTerraform(this._exclusiveRouting),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      focus_bookmark: {
        value: cdktf.stringToHclTerraform(this._focusBookmark),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      forticlient_download: {
        value: cdktf.stringToHclTerraform(this._forticlientDownload),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      forticlient_download_method: {
        value: cdktf.stringToHclTerraform(this._forticlientDownloadMethod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      heading: {
        value: cdktf.stringToHclTerraform(this._heading),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hide_sso_credential: {
        value: cdktf.stringToHclTerraform(this._hideSsoCredential),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      host_check: {
        value: cdktf.stringToHclTerraform(this._hostCheck),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      host_check_interval: {
        value: cdktf.numberToHclTerraform(this._hostCheckInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      host_check_policy: {
        value: cdktf.stringToHclTerraform(this._hostCheckPolicy),
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
      ip_mode: {
        value: cdktf.stringToHclTerraform(this._ipMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip_pools: {
        value: cdktf.stringToHclTerraform(this._ipPools),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv6_dns_server1: {
        value: cdktf.stringToHclTerraform(this._ipv6DnsServer1),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv6_dns_server2: {
        value: cdktf.stringToHclTerraform(this._ipv6DnsServer2),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv6_exclusive_routing: {
        value: cdktf.stringToHclTerraform(this._ipv6ExclusiveRouting),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv6_pools: {
        value: cdktf.stringToHclTerraform(this._ipv6Pools),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv6_service_restriction: {
        value: cdktf.stringToHclTerraform(this._ipv6ServiceRestriction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv6_split_tunneling: {
        value: cdktf.stringToHclTerraform(this._ipv6SplitTunneling),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv6_split_tunneling_routing_address: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ipv6SplitTunnelingRoutingAddress),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      ipv6_split_tunneling_routing_negate: {
        value: cdktf.stringToHclTerraform(this._ipv6SplitTunnelingRoutingNegate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv6_tunnel_mode: {
        value: cdktf.stringToHclTerraform(this._ipv6TunnelMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv6_wins_server1: {
        value: cdktf.stringToHclTerraform(this._ipv6WinsServer1),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv6_wins_server2: {
        value: cdktf.stringToHclTerraform(this._ipv6WinsServer2),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      keep_alive: {
        value: cdktf.stringToHclTerraform(this._keepAlive),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      landing_page_mode: {
        value: cdktf.stringToHclTerraform(this._landingPageMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      limit_user_logins: {
        value: cdktf.stringToHclTerraform(this._limitUserLogins),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mac_addr_action: {
        value: cdktf.stringToHclTerraform(this._macAddrAction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mac_addr_check: {
        value: cdktf.stringToHclTerraform(this._macAddrCheck),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      macos_forticlient_download_url: {
        value: cdktf.stringToHclTerraform(this._macosForticlientDownloadUrl),
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
      os_check: {
        value: cdktf.stringToHclTerraform(this._osCheck),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      prefer_ipv6_dns: {
        value: cdktf.stringToHclTerraform(this._preferIpv6Dns),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      redir_url: {
        value: cdktf.stringToHclTerraform(this._redirUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rewrite_ip_uri_ui: {
        value: cdktf.stringToHclTerraform(this._rewriteIpUriUi),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      save_password: {
        value: cdktf.stringToHclTerraform(this._savePassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scopetype: {
        value: cdktf.stringToHclTerraform(this._scopetype),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_restriction: {
        value: cdktf.stringToHclTerraform(this._serviceRestriction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      skip_check_for_browser: {
        value: cdktf.stringToHclTerraform(this._skipCheckForBrowser),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      skip_check_for_unsupported_browser: {
        value: cdktf.stringToHclTerraform(this._skipCheckForUnsupportedBrowser),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      skip_check_for_unsupported_os: {
        value: cdktf.stringToHclTerraform(this._skipCheckForUnsupportedOs),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      smb_max_version: {
        value: cdktf.stringToHclTerraform(this._smbMaxVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      smb_min_version: {
        value: cdktf.stringToHclTerraform(this._smbMinVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      smb_ntlmv1_auth: {
        value: cdktf.stringToHclTerraform(this._smbNtlmv1Auth),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      smbv1: {
        value: cdktf.stringToHclTerraform(this._smbv1),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      split_tunneling: {
        value: cdktf.stringToHclTerraform(this._splitTunneling),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      split_tunneling_routing_address: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._splitTunnelingRoutingAddress),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      split_tunneling_routing_negate: {
        value: cdktf.stringToHclTerraform(this._splitTunnelingRoutingNegate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      theme: {
        value: cdktf.stringToHclTerraform(this._theme),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      transform_backward_slashes: {
        value: cdktf.stringToHclTerraform(this._transformBackwardSlashes),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tunnel_mode: {
        value: cdktf.stringToHclTerraform(this._tunnelMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      use_sdwan: {
        value: cdktf.stringToHclTerraform(this._useSdwan),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_bookmark: {
        value: cdktf.stringToHclTerraform(this._userBookmark),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_group_bookmark: {
        value: cdktf.stringToHclTerraform(this._userGroupBookmark),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      web_mode: {
        value: cdktf.stringToHclTerraform(this._webMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      windows_forticlient_download_url: {
        value: cdktf.stringToHclTerraform(this._windowsForticlientDownloadUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wins_server1: {
        value: cdktf.stringToHclTerraform(this._winsServer1),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wins_server2: {
        value: cdktf.stringToHclTerraform(this._winsServer2),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bookmark_group: {
        value: cdktf.listMapperHcl(objectVpnSslWebPortalBookmarkGroupToHclTerraform, true)(this._bookmarkGroup.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ObjectVpnSslWebPortalBookmarkGroupList",
      },
      landing_page: {
        value: objectVpnSslWebPortalLandingPageToHclTerraform(this._landingPage.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ObjectVpnSslWebPortalLandingPageList",
      },
      mac_addr_check_rule: {
        value: cdktf.listMapperHcl(objectVpnSslWebPortalMacAddrCheckRuleToHclTerraform, true)(this._macAddrCheckRule.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ObjectVpnSslWebPortalMacAddrCheckRuleList",
      },
      os_check_list: {
        value: objectVpnSslWebPortalOsCheckListStructToHclTerraform(this._osCheckList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ObjectVpnSslWebPortalOsCheckListStructList",
      },
      split_dns: {
        value: cdktf.listMapperHcl(objectVpnSslWebPortalSplitDnsToHclTerraform, true)(this._splitDns.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ObjectVpnSslWebPortalSplitDnsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
