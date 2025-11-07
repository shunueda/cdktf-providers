// https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_ssid
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WirelessSsidConfig extends cdktf.TerraformMetaArguments {
  /**
  * The logon name of the Active Directory account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_ssid#active_directory_credentials_logon_name WirelessSsid#active_directory_credentials_logon_name}
  */
  readonly activeDirectoryCredentialsLogonName?: string;
  /**
  * The password to the Active Directory user account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_ssid#active_directory_credentials_password WirelessSsid#active_directory_credentials_password}
  */
  readonly activeDirectoryCredentialsPassword?: string;
  /**
  * The Active Directory servers to be used for authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_ssid#active_directory_servers WirelessSsid#active_directory_servers}
  */
  readonly activeDirectoryServers?: WirelessSsidActiveDirectoryServers[] | cdktf.IResolvable;
  /**
  * Adaptive policy group ID this SSID is assigned to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_ssid#adaptive_policy_group_id WirelessSsid#adaptive_policy_group_id}
  */
  readonly adaptivePolicyGroupId?: string;
  /**
  * Boolean indicating whether or not adult content will be blocked
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_ssid#adult_content_filtering_enabled WirelessSsid#adult_content_filtering_enabled}
  */
  readonly adultContentFilteringEnabled?: boolean | cdktf.IResolvable;
  /**
  * The list of tags and VLAN IDs used for VLAN tagging. This param is only valid when the ipAssignmentMode is `Bridge mode` or `Layer 3 roaming`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_ssid#ap_tags_and_vlan_ids WirelessSsid#ap_tags_and_vlan_ids}
  */
  readonly apTagsAndVlanIds?: WirelessSsidApTagsAndVlanIds[] | cdktf.IResolvable;
  /**
  * The association control method for the SSID (`open`, `open-enhanced`, `psk`, `open-with-radius`, `open-with-nac`, `8021x-meraki`, `8021x-nac`, `8021x-radius`, `8021x-google`, `8021x-entra`, `8021x-localradius`, `ipsk-with-radius`, `ipsk-without-radius` or `ipsk-with-nac`)
  *   - Choices: `8021x-entra`, `8021x-google`, `8021x-localradius`, `8021x-meraki`, `8021x-nac`, `8021x-radius`, `ipsk-with-nac`, `ipsk-with-radius`, `ipsk-without-radius`, `open`, `open-enhanced`, `open-with-nac`, `open-with-radius`, `psk`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_ssid#auth_mode WirelessSsid#auth_mode}
  */
  readonly authMode?: string;
  /**
  * Accepts a list of tags for this SSID. If availableOnAllAps is false, then the SSID will only be broadcast by APs with tags matching any of the tags in this list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_ssid#availability_tags WirelessSsid#availability_tags}
  */
  readonly availabilityTags?: string[];
  /**
  * Boolean indicating whether all APs should broadcast the SSID or if it should be restricted to APs matching any availability tags. Can only be false if the SSID has availability tags.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_ssid#available_on_all_aps WirelessSsid#available_on_all_aps}
  */
  readonly availableOnAllAps?: boolean | cdktf.IResolvable;
  /**
  * The client-serving radio frequencies of this SSID in the default indoor RF profile. (`Dual band operation`, `5 GHz band only` or `Dual band operation with Band Steering`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_ssid#band_selection WirelessSsid#band_selection}
  */
  readonly bandSelection?: string;
  /**
  * The concentrator to use when the ipAssignmentMode is `Layer 3 roaming with a concentrator` or `VPN`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_ssid#concentrator_network_id WirelessSsid#concentrator_network_id}
  */
  readonly concentratorNetworkId?: string;
  /**
  * The default VLAN ID used for `all other APs`. This param is only valid when the ipAssignmentMode is `Bridge mode` or `Layer 3 roaming`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_ssid#default_vlan_id WirelessSsid#default_vlan_id}
  */
  readonly defaultVlanId?: number;
  /**
  * Disassociate clients when `VPN` concentrator failover occurs in order to trigger clients to re-associate and generate new DHCP requests. This param is only valid if ipAssignmentMode is `VPN`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_ssid#disassociate_clients_on_vpn_failover WirelessSsid#disassociate_clients_on_vpn_failover}
  */
  readonly disassociateClientsOnVpnFailover?: boolean | cdktf.IResolvable;
  /**
  * User specified DNS servers (up to two servers)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_ssid#dns_rewrite_dns_custom_nameservers WirelessSsid#dns_rewrite_dns_custom_nameservers}
  */
  readonly dnsRewriteDnsCustomNameservers?: string[];
  /**
  * Boolean indicating whether or not DNS server rewrite is enabled. If disabled, upstream DNS will be used
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_ssid#dns_rewrite_enabled WirelessSsid#dns_rewrite_enabled}
  */
  readonly dnsRewriteEnabled?: boolean | cdktf.IResolvable;
  /**
  * (Optional) Whether 802.11r is adaptive or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_ssid#dot11r_adaptive WirelessSsid#dot11r_adaptive}
  */
  readonly dot11RAdaptive?: boolean | cdktf.IResolvable;
  /**
  * Whether 802.11r is enabled or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_ssid#dot11r_enabled WirelessSsid#dot11r_enabled}
  */
  readonly dot11REnabled?: boolean | cdktf.IResolvable;
  /**
  * Whether 802.11w is enabled or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_ssid#dot11w_enabled WirelessSsid#dot11w_enabled}
  */
  readonly dot11WEnabled?: boolean | cdktf.IResolvable;
  /**
  * (Optional) Whether 802.11w is required or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_ssid#dot11w_required WirelessSsid#dot11w_required}
  */
  readonly dot11WRequired?: boolean | cdktf.IResolvable;
  /**
  * Whether or not the SSID is enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_ssid#enabled WirelessSsid#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * The psk encryption mode for the SSID (`wep` or `wpa`). This param is only valid if the authMode is `psk`
  *   - Choices: `open`, `wep`, `wpa`, `wpa-eap`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_ssid#encryption_mode WirelessSsid#encryption_mode}
  */
  readonly encryptionMode?: string;
  /**
  * Whether or not an SSID is accessible by `enterprise` administrators (`access disabled` or `access enabled`)
  *   - Choices: `access disabled`, `access enabled`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_ssid#enterprise_admin_access WirelessSsid#enterprise_admin_access}
  */
  readonly enterpriseAdminAccess?: string;
  /**
  * The EoGRE concentrator's IP or FQDN. This param is required when ipAssignmentMode is `Ethernet over GRE`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_ssid#gre_concentrator_host WirelessSsid#gre_concentrator_host}
  */
  readonly greConcentratorHost?: string;
  /**
  * Optional numerical identifier that will add the GRE key field to the GRE header. Used to identify an individual traffic flow within a tunnel.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_ssid#gre_key WirelessSsid#gre_key}
  */
  readonly greKey?: number;
  /**
  * The client IP assignment mode (`NAT mode`, `Bridge mode`, `Layer 3 roaming`, `Ethernet over GRE`, `Layer 3 roaming with a concentrator` or `VPN`)
  *   - Choices: `Bridge mode`, `Ethernet over GRE`, `Layer 3 roaming`, `Layer 3 roaming with a concentrator`, `NAT mode`, `VPN`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_ssid#ip_assignment_mode WirelessSsid#ip_assignment_mode}
  */
  readonly ipAssignmentMode?: string;
  /**
  * Boolean indicating whether Layer 2 LAN isolation should be enabled or disabled. Only configurable when ipAssignmentMode is `Bridge mode`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_ssid#lan_isolation_enabled WirelessSsid#lan_isolation_enabled}
  */
  readonly lanIsolationEnabled?: boolean | cdktf.IResolvable;
  /**
  * The base distinguished name of users on the LDAP server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_ssid#ldap_base_distinguished_name WirelessSsid#ldap_base_distinguished_name}
  */
  readonly ldapBaseDistinguishedName?: string;
  /**
  * The distinguished name of the LDAP user account (example: cn=user,dc=meraki,dc=com).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_ssid#ldap_credentials_distinguished_name WirelessSsid#ldap_credentials_distinguished_name}
  */
  readonly ldapCredentialsDistinguishedName?: string;
  /**
  * The password of the LDAP user account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_ssid#ldap_credentials_password WirelessSsid#ldap_credentials_password}
  */
  readonly ldapCredentialsPassword?: string;
  /**
  * The contents of the CA certificate. Must be in PEM or DER format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_ssid#ldap_server_ca_certificate_contents WirelessSsid#ldap_server_ca_certificate_contents}
  */
  readonly ldapServerCaCertificateContents?: string;
  /**
  * The LDAP servers to be used for authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_ssid#ldap_servers WirelessSsid#ldap_servers}
  */
  readonly ldapServers?: WirelessSsidLdapServers[] | cdktf.IResolvable;
  /**
  * The duration (in seconds) for which auths are cached. The timeout is measured from the user`s most recent non-cached authentication to the network. Between 3600 (1 hour) and 86400 (1 day)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_ssid#local_auth_fallback_cache_timeout WirelessSsid#local_auth_fallback_cache_timeout}
  */
  readonly localAuthFallbackCacheTimeout?: number;
  /**
  * If true, MR devices will cache authentication credentials for EAP-TLS or for MAC based authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_ssid#local_auth_fallback_enabled WirelessSsid#local_auth_fallback_enabled}
  */
  readonly localAuthFallbackEnabled?: boolean | cdktf.IResolvable;
  /**
  * The contents of the Server CA Certificate. Must be in PEM or DER format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_ssid#local_auth_fallback_server_ca_certificate_contents WirelessSsid#local_auth_fallback_server_ca_certificate_contents}
  */
  readonly localAuthFallbackServerCaCertificateContents?: string;
  /**
  * The duration (in seconds) for which LDAP and OCSP lookups are cached.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_ssid#local_radius_cache_timeout WirelessSsid#local_radius_cache_timeout}
  */
  readonly localRadiusCacheTimeout?: number;
  /**
  * The contents of the Client CA Certificate. Must be in PEM or DER format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_ssid#local_radius_certificate_authentication_client_root_ca_certificate_contents WirelessSsid#local_radius_certificate_authentication_client_root_ca_certificate_contents}
  */
  readonly localRadiusCertificateAuthenticationClientRootCaCertificateContents?: string;
  /**
  * Whether or not to use EAP-TLS certificate-based authentication to validate wireless clients.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_ssid#local_radius_certificate_authentication_enabled WirelessSsid#local_radius_certificate_authentication_enabled}
  */
  readonly localRadiusCertificateAuthenticationEnabled?: boolean | cdktf.IResolvable;
  /**
  * (Optional) The URL of the OCSP responder to verify client certificate status.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_ssid#local_radius_certificate_authentication_ocsp_responder_url WirelessSsid#local_radius_certificate_authentication_ocsp_responder_url}
  */
  readonly localRadiusCertificateAuthenticationOcspResponderUrl?: string;
  /**
  * Whether or not to verify the certificate with LDAP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_ssid#local_radius_certificate_authentication_use_ldap WirelessSsid#local_radius_certificate_authentication_use_ldap}
  */
  readonly localRadiusCertificateAuthenticationUseLdap?: boolean | cdktf.IResolvable;
  /**
  * Whether or not to verify the certificate with OCSP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_ssid#local_radius_certificate_authentication_use_ocsp WirelessSsid#local_radius_certificate_authentication_use_ocsp}
  */
  readonly localRadiusCertificateAuthenticationUseOcsp?: boolean | cdktf.IResolvable;
  /**
  * Whether or not to use EAP-TTLS/PAP or PEAP-GTC password-based authentication via LDAP lookup.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_ssid#local_radius_password_authentication_enabled WirelessSsid#local_radius_password_authentication_enabled}
  */
  readonly localRadiusPasswordAuthenticationEnabled?: boolean | cdktf.IResolvable;
  /**
  * If true, Mandatory DHCP will enforce that clients connecting to this SSID must use the IP address assigned by the DHCP server. Clients who use a static IP address won`t be able to associate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_ssid#mandatory_dhcp_enabled WirelessSsid#mandatory_dhcp_enabled}
  */
  readonly mandatoryDhcpEnabled?: boolean | cdktf.IResolvable;
  /**
  * The minimum bitrate in Mbps of this SSID in the default indoor RF profile. (`1`, `2`, `5.5`, `6`, `9`, `11`, `12`, `18`, `24`, `36`, `48` or `54`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_ssid#min_bitrate WirelessSsid#min_bitrate}
  */
  readonly minBitrate?: number;
  /**
  * The name of the SSID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_ssid#name WirelessSsid#name}
  */
  readonly name: string;
  /**
  * Whether or not RADIUS guest named VLAN is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_ssid#named_vlans_radius_guest_vlan_enabled WirelessSsid#named_vlans_radius_guest_vlan_enabled}
  */
  readonly namedVlansRadiusGuestVlanEnabled?: boolean | cdktf.IResolvable;
  /**
  * RADIUS guest VLAN name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_ssid#named_vlans_radius_guest_vlan_name WirelessSsid#named_vlans_radius_guest_vlan_name}
  */
  readonly namedVlansRadiusGuestVlanName?: string;
  /**
  * The list of AP tags and VLAN names used for named VLAN tagging. If an AP has a tag matching one in the list, then traffic on this SSID will be directed to use the VLAN name associated to the tag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_ssid#named_vlans_tagging_by_ap_tags WirelessSsid#named_vlans_tagging_by_ap_tags}
  */
  readonly namedVlansTaggingByApTags?: WirelessSsidNamedVlansTaggingByApTags[] | cdktf.IResolvable;
  /**
  * The default VLAN name used to tag traffic in the absence of a matching AP tag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_ssid#named_vlans_tagging_default_vlan_name WirelessSsid#named_vlans_tagging_default_vlan_name}
  */
  readonly namedVlansTaggingDefaultVlanName?: string;
  /**
  * Whether or not traffic should be directed to use specific VLAN names.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_ssid#named_vlans_tagging_enabled WirelessSsid#named_vlans_tagging_enabled}
  */
  readonly namedVlansTaggingEnabled?: boolean | cdktf.IResolvable;
  /**
  * Network ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_ssid#network_id WirelessSsid#network_id}
  */
  readonly networkId: string;
  /**
  * Wireless SSID number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_ssid#number WirelessSsid#number}
  */
  readonly number: string;
  /**
  * (Optional) The list of domains allowed access to the network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_ssid#oauth_allowed_domains WirelessSsid#oauth_allowed_domains}
  */
  readonly oauthAllowedDomains?: string[];
  /**
  * The download bandwidth limit in Kbps. (0 represents no limit.)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_ssid#per_client_bandwidth_limit_down WirelessSsid#per_client_bandwidth_limit_down}
  */
  readonly perClientBandwidthLimitDown?: number;
  /**
  * The upload bandwidth limit in Kbps. (0 represents no limit.)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_ssid#per_client_bandwidth_limit_up WirelessSsid#per_client_bandwidth_limit_up}
  */
  readonly perClientBandwidthLimitUp?: number;
  /**
  * The total download bandwidth limit in Kbps. (0 represents no limit.)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_ssid#per_ssid_bandwidth_limit_down WirelessSsid#per_ssid_bandwidth_limit_down}
  */
  readonly perSsidBandwidthLimitDown?: number;
  /**
  * The total upload bandwidth limit in Kbps. (0 represents no limit.)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_ssid#per_ssid_bandwidth_limit_up WirelessSsid#per_ssid_bandwidth_limit_up}
  */
  readonly perSsidBandwidthLimitUp?: number;
  /**
  * The passkey for the SSID. This param is only valid if the authMode is `psk`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_ssid#psk WirelessSsid#psk}
  */
  readonly psk?: string;
  /**
  * Whether or not RADIUS accounting is enabled. This param is only valid if the authMode is `open-with-radius`, `8021x-radius` or `ipsk-with-radius`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_ssid#radius_accounting_enabled WirelessSsid#radius_accounting_enabled}
  */
  readonly radiusAccountingEnabled?: boolean | cdktf.IResolvable;
  /**
  * The interval (in seconds) in which accounting information is updated and sent to the RADIUS accounting server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_ssid#radius_accounting_interim_interval WirelessSsid#radius_accounting_interim_interval}
  */
  readonly radiusAccountingInterimInterval?: number;
  /**
  * The RADIUS accounting 802.1X servers to be used for authentication. This param is only valid if the authMode is `open-with-radius`, `8021x-radius` or `ipsk-with-radius` and radiusAccountingEnabled is `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_ssid#radius_accounting_servers WirelessSsid#radius_accounting_servers}
  */
  readonly radiusAccountingServers?: WirelessSsidRadiusAccountingServers[] | cdktf.IResolvable;
  /**
  * Specify the RADIUS attribute used to look up group policies (`Filter-Id`, `Reply-Message`, `Airespace-ACL-Name` or `Aruba-User-Role`). Access points must receive this attribute in the RADIUS Access-Accept message
  *   - Choices: `Airespace-ACL-Name`, `Aruba-User-Role`, `Filter-Id`, `Reply-Message`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_ssid#radius_attribute_for_group_policies WirelessSsid#radius_attribute_for_group_policies}
  */
  readonly radiusAttributeForGroupPolicies?: string;
  /**
  * The template of the NAS identifier to be used for RADIUS authentication (ex. $NODE_MAC$:$VAP_NUM$).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_ssid#radius_authentication_nas_id WirelessSsid#radius_authentication_nas_id}
  */
  readonly radiusAuthenticationNasId?: string;
  /**
  * The template of the called station identifier to be used for RADIUS (ex. $NODE_MAC$:$VAP_NUM$).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_ssid#radius_called_station_id WirelessSsid#radius_called_station_id}
  */
  readonly radiusCalledStationId?: string;
  /**
  * If true, Meraki devices will act as a RADIUS Dynamic Authorization Server and will respond to RADIUS Change-of-Authorization and Disconnect messages sent by the RADIUS server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_ssid#radius_coa_enabled WirelessSsid#radius_coa_enabled}
  */
  readonly radiusCoaEnabled?: boolean | cdktf.IResolvable;
  /**
  * List of DAS (Dynamic Authorization Server) IPs. This is an unsupported attribute and is subject to breaking changes without prior notice.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_ssid#radius_das_clients_ips WirelessSsid#radius_das_clients_ips}
  */
  readonly radiusDasClientsIps?: string[];
  /**
  * Shared secret for DAS (Dynamic Authorization Server). This is an unsupported attribute and is subject to breaking changes without prior notice.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_ssid#radius_das_clients_shared_secret WirelessSsid#radius_das_clients_shared_secret}
  */
  readonly radiusDasClientsSharedSecret?: string;
  /**
  * This policy determines how authentication requests should be handled in the event that all of the configured RADIUS servers are unreachable (`Deny access` or `Allow access`)
  *   - Choices: `Allow access`, `Deny access`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_ssid#radius_failover_policy WirelessSsid#radius_failover_policy}
  */
  readonly radiusFailoverPolicy?: string;
  /**
  * Whether or not higher priority RADIUS servers should be retried after 60 seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_ssid#radius_fallback_enabled WirelessSsid#radius_fallback_enabled}
  */
  readonly radiusFallbackEnabled?: boolean | cdktf.IResolvable;
  /**
  * Whether or not RADIUS Guest VLAN is enabled. This param is only valid if the authMode is `open-with-radius` and addressing mode is not set to `isolated` or `nat` mode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_ssid#radius_guest_vlan_enabled WirelessSsid#radius_guest_vlan_enabled}
  */
  readonly radiusGuestVlanEnabled?: boolean | cdktf.IResolvable;
  /**
  * VLAN ID of the RADIUS Guest VLAN. This param is only valid if the authMode is `open-with-radius` and addressing mode is not set to `isolated` or `nat` mode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_ssid#radius_guest_vlan_id WirelessSsid#radius_guest_vlan_id}
  */
  readonly radiusGuestVlanId?: number;
  /**
  * This policy determines which RADIUS server will be contacted first in an authentication attempt and the ordering of any necessary retry attempts (`Strict priority order` or `Round robin`)
  *   - Choices: `Round robin`, `Strict priority order`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_ssid#radius_load_balancing_policy WirelessSsid#radius_load_balancing_policy}
  */
  readonly radiusLoadBalancingPolicy?: string;
  /**
  * If true, the RADIUS response can override VLAN tag. This is not valid when ipAssignmentMode is `NAT mode`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_ssid#radius_override WirelessSsid#radius_override}
  */
  readonly radiusOverride?: boolean | cdktf.IResolvable;
  /**
  * If true, Meraki devices will proxy RADIUS messages through the Meraki cloud to the configured RADIUS auth and accounting servers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_ssid#radius_proxy_enabled WirelessSsid#radius_proxy_enabled}
  */
  readonly radiusProxyEnabled?: boolean | cdktf.IResolvable;
  /**
  * The interval (in seconds) to determines how long a TLS session can remain idle for a RADSec server before it is automatically terminated
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_ssid#radius_radsec_tls_tunnel_timeout WirelessSsid#radius_radsec_tls_tunnel_timeout}
  */
  readonly radiusRadsecTlsTunnelTimeout?: number;
  /**
  * The maximum number of transmit attempts after which a RADIUS server is failed over (must be between 1-5).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_ssid#radius_server_attempts_limit WirelessSsid#radius_server_attempts_limit}
  */
  readonly radiusServerAttemptsLimit?: number;
  /**
  * The amount of time for which a RADIUS client waits for a reply from the RADIUS server (must be between 1-10 seconds).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_ssid#radius_server_timeout WirelessSsid#radius_server_timeout}
  */
  readonly radiusServerTimeout?: number;
  /**
  * The RADIUS 802.1X servers to be used for authentication. This param is only valid if the authMode is `open-with-radius`, `8021x-radius` or `ipsk-with-radius`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_ssid#radius_servers WirelessSsid#radius_servers}
  */
  readonly radiusServers?: WirelessSsidRadiusServers[] | cdktf.IResolvable;
  /**
  * If true, Meraki devices will periodically send Access-Request messages to configured RADIUS servers using identity `meraki_8021x_test` to ensure that the RADIUS servers are reachable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_ssid#radius_testing_enabled WirelessSsid#radius_testing_enabled}
  */
  readonly radiusTestingEnabled?: boolean | cdktf.IResolvable;
  /**
  * The secondary concentrator to use when the ipAssignmentMode is `VPN`. If configured, the APs will switch to using this concentrator if the primary concentrator is unreachable. This param is optional. (`disabled` represents no secondary concentrator.)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_ssid#secondary_concentrator_network_id WirelessSsid#secondary_concentrator_network_id}
  */
  readonly secondaryConcentratorNetworkId?: string;
  /**
  * Boolean indicating whether or not to allow users to temporarily exceed the bandwidth limit for short periods while still keeping them under the bandwidth limit over time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_ssid#speed_burst_enabled WirelessSsid#speed_burst_enabled}
  */
  readonly speedBurstEnabled?: boolean | cdktf.IResolvable;
  /**
  * Array of valid sponsor email domains for sponsored guest splash type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_ssid#splash_guest_sponsor_domains WirelessSsid#splash_guest_sponsor_domains}
  */
  readonly splashGuestSponsorDomains?: string[];
  /**
  * The type of splash page for the SSID (`None`, `Click-through splash page`, `Billing`, `Password-protected with Meraki RADIUS`, `Password-protected with custom RADIUS`, `Password-protected with Active Directory`, `Password-protected with LDAP`, `SMS authentication`, `Systems Manager Sentry`, `Facebook Wi-Fi`, `Google OAuth`, `Microsoft Entra ID`, `Sponsored guest`, `Cisco ISE` or `Google Apps domain`). This attribute is not supported for template children.
  *   - Choices: `Billing`, `Cisco ISE`, `Click-through splash page`, `Facebook Wi-Fi`, `Google Apps domain`, `Google OAuth`, `Microsoft Entra ID`, `None`, `Password-protected with Active Directory`, `Password-protected with LDAP`, `Password-protected with Meraki RADIUS`, `Password-protected with custom RADIUS`, `SMS authentication`, `Sponsored guest`, `Systems Manager Sentry`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_ssid#splash_page WirelessSsid#splash_page}
  */
  readonly splashPage?: string;
  /**
  * Whether or not traffic should be directed to use specific VLANs. This param is only valid if the ipAssignmentMode is `Bridge mode` or `Layer 3 roaming`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_ssid#use_vlan_tagging WirelessSsid#use_vlan_tagging}
  */
  readonly useVlanTagging?: boolean | cdktf.IResolvable;
  /**
  * Boolean indicating whether APs should advertise or hide this SSID. APs will only broadcast this SSID if set to true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_ssid#visible WirelessSsid#visible}
  */
  readonly visible?: boolean | cdktf.IResolvable;
  /**
  * The VLAN ID used for VLAN tagging. This param is only valid when the ipAssignmentMode is `Layer 3 roaming with a concentrator` or `VPN`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_ssid#vlan_id WirelessSsid#vlan_id}
  */
  readonly vlanId?: number;
  /**
  * Allow access to a configurable list of IP ranges, which users may access prior to sign-on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_ssid#walled_garden_enabled WirelessSsid#walled_garden_enabled}
  */
  readonly walledGardenEnabled?: boolean | cdktf.IResolvable;
  /**
  * Specify your walled garden by entering an array of addresses, ranges using CIDR notation, domain names, and domain wildcards (e.g. `192.168.1.1/24`, `192.168.37.10/32`, `www.yahoo.com`, `*.google.com`]). Meraki`s splash page is automatically included in your walled garden.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_ssid#walled_garden_ranges WirelessSsid#walled_garden_ranges}
  */
  readonly walledGardenRanges?: string[];
  /**
  * The types of WPA encryption. (`WPA1 only`, `WPA1 and WPA2`, `WPA2 only`, `WPA3 Transition Mode`, `WPA3 only` or `WPA3 192-bit Security`)
  *   - Choices: `WPA1 and WPA2`, `WPA1 only`, `WPA2 only`, `WPA3 192-bit Security`, `WPA3 Transition Mode`, `WPA3 only`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_ssid#wpa_encryption_mode WirelessSsid#wpa_encryption_mode}
  */
  readonly wpaEncryptionMode?: string;
}
export interface WirelessSsidActiveDirectoryServers {
  /**
  * IP address (or FQDN) of your Active Directory server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_ssid#host WirelessSsid#host}
  */
  readonly host: string;
  /**
  * (Optional) UDP port the Active Directory server listens on. By default, uses port 3268.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_ssid#port WirelessSsid#port}
  */
  readonly port?: number;
}

export function wirelessSsidActiveDirectoryServersToTerraform(struct?: WirelessSsidActiveDirectoryServers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    port: cdktf.numberToTerraform(struct!.port),
  }
}


export function wirelessSsidActiveDirectoryServersToHclTerraform(struct?: WirelessSsidActiveDirectoryServers | cdktf.IResolvable): any {
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

export class WirelessSsidActiveDirectoryServersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WirelessSsidActiveDirectoryServers | cdktf.IResolvable | undefined {
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

  public set internalValue(value: WirelessSsidActiveDirectoryServers | cdktf.IResolvable | undefined) {
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

  // host - computed: false, optional: false, required: true
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
}

export class WirelessSsidActiveDirectoryServersList extends cdktf.ComplexList {
  public internalValue? : WirelessSsidActiveDirectoryServers[] | cdktf.IResolvable

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
  public get(index: number): WirelessSsidActiveDirectoryServersOutputReference {
    return new WirelessSsidActiveDirectoryServersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WirelessSsidApTagsAndVlanIds {
  /**
  * Array of AP tags
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_ssid#tags WirelessSsid#tags}
  */
  readonly tags?: string[];
  /**
  * Numerical identifier that is assigned to the VLAN
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_ssid#vlan_id WirelessSsid#vlan_id}
  */
  readonly vlanId?: number;
}

export function wirelessSsidApTagsAndVlanIdsToTerraform(struct?: WirelessSsidApTagsAndVlanIds | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    tags: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tags),
    vlan_id: cdktf.numberToTerraform(struct!.vlanId),
  }
}


export function wirelessSsidApTagsAndVlanIdsToHclTerraform(struct?: WirelessSsidApTagsAndVlanIds | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    tags: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.tags),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    vlan_id: {
      value: cdktf.numberToHclTerraform(struct!.vlanId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WirelessSsidApTagsAndVlanIdsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WirelessSsidApTagsAndVlanIds | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    if (this._vlanId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vlanId = this._vlanId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WirelessSsidApTagsAndVlanIds | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._tags = undefined;
      this._vlanId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._tags = value.tags;
      this._vlanId = value.vlanId;
    }
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return cdktf.Fn.tolist(this.getListAttribute('tags'));
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // vlan_id - computed: false, optional: true, required: false
  private _vlanId?: number; 
  public get vlanId() {
    return this.getNumberAttribute('vlan_id');
  }
  public set vlanId(value: number) {
    this._vlanId = value;
  }
  public resetVlanId() {
    this._vlanId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanIdInput() {
    return this._vlanId;
  }
}

export class WirelessSsidApTagsAndVlanIdsList extends cdktf.ComplexList {
  public internalValue? : WirelessSsidApTagsAndVlanIds[] | cdktf.IResolvable

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
  public get(index: number): WirelessSsidApTagsAndVlanIdsOutputReference {
    return new WirelessSsidApTagsAndVlanIdsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WirelessSsidLdapServers {
  /**
  * IP address (or FQDN) of your LDAP server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_ssid#host WirelessSsid#host}
  */
  readonly host: string;
  /**
  * UDP port the LDAP server listens on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_ssid#port WirelessSsid#port}
  */
  readonly port: number;
}

export function wirelessSsidLdapServersToTerraform(struct?: WirelessSsidLdapServers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    port: cdktf.numberToTerraform(struct!.port),
  }
}


export function wirelessSsidLdapServersToHclTerraform(struct?: WirelessSsidLdapServers | cdktf.IResolvable): any {
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

export class WirelessSsidLdapServersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WirelessSsidLdapServers | cdktf.IResolvable | undefined {
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

  public set internalValue(value: WirelessSsidLdapServers | cdktf.IResolvable | undefined) {
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

  // host - computed: false, optional: false, required: true
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

  // port - computed: false, optional: false, required: true
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }
}

export class WirelessSsidLdapServersList extends cdktf.ComplexList {
  public internalValue? : WirelessSsidLdapServers[] | cdktf.IResolvable

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
  public get(index: number): WirelessSsidLdapServersOutputReference {
    return new WirelessSsidLdapServersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WirelessSsidNamedVlansTaggingByApTags {
  /**
  * List of AP tags.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_ssid#tags WirelessSsid#tags}
  */
  readonly tags?: string[];
  /**
  * VLAN name that will be used to tag traffic.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_ssid#vlan_name WirelessSsid#vlan_name}
  */
  readonly vlanName?: string;
}

export function wirelessSsidNamedVlansTaggingByApTagsToTerraform(struct?: WirelessSsidNamedVlansTaggingByApTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    tags: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tags),
    vlan_name: cdktf.stringToTerraform(struct!.vlanName),
  }
}


export function wirelessSsidNamedVlansTaggingByApTagsToHclTerraform(struct?: WirelessSsidNamedVlansTaggingByApTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    tags: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.tags),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    vlan_name: {
      value: cdktf.stringToHclTerraform(struct!.vlanName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WirelessSsidNamedVlansTaggingByApTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WirelessSsidNamedVlansTaggingByApTags | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    if (this._vlanName !== undefined) {
      hasAnyValues = true;
      internalValueResult.vlanName = this._vlanName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WirelessSsidNamedVlansTaggingByApTags | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._tags = undefined;
      this._vlanName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._tags = value.tags;
      this._vlanName = value.vlanName;
    }
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return cdktf.Fn.tolist(this.getListAttribute('tags'));
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // vlan_name - computed: false, optional: true, required: false
  private _vlanName?: string; 
  public get vlanName() {
    return this.getStringAttribute('vlan_name');
  }
  public set vlanName(value: string) {
    this._vlanName = value;
  }
  public resetVlanName() {
    this._vlanName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanNameInput() {
    return this._vlanName;
  }
}

export class WirelessSsidNamedVlansTaggingByApTagsList extends cdktf.ComplexList {
  public internalValue? : WirelessSsidNamedVlansTaggingByApTags[] | cdktf.IResolvable

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
  public get(index: number): WirelessSsidNamedVlansTaggingByApTagsOutputReference {
    return new WirelessSsidNamedVlansTaggingByApTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WirelessSsidRadiusAccountingServers {
  /**
  * Certificate used for authorization for the RADSEC Server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_ssid#ca_certificate WirelessSsid#ca_certificate}
  */
  readonly caCertificate?: string;
  /**
  * IP address (or FQDN) to which the APs will send RADIUS accounting messages
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_ssid#host WirelessSsid#host}
  */
  readonly host: string;
  /**
  * Port on the RADIUS server that is listening for accounting messages
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_ssid#port WirelessSsid#port}
  */
  readonly port?: number;
  /**
  * Use RADSEC (TLS over TCP) to connect to this RADIUS accounting server. Requires radiusProxyEnabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_ssid#radsec_enabled WirelessSsid#radsec_enabled}
  */
  readonly radsecEnabled?: boolean | cdktf.IResolvable;
  /**
  * Shared key used to authenticate messages between the APs and RADIUS server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_ssid#secret WirelessSsid#secret}
  */
  readonly secret?: string;
}

export function wirelessSsidRadiusAccountingServersToTerraform(struct?: WirelessSsidRadiusAccountingServers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ca_certificate: cdktf.stringToTerraform(struct!.caCertificate),
    host: cdktf.stringToTerraform(struct!.host),
    port: cdktf.numberToTerraform(struct!.port),
    radsec_enabled: cdktf.booleanToTerraform(struct!.radsecEnabled),
    secret: cdktf.stringToTerraform(struct!.secret),
  }
}


export function wirelessSsidRadiusAccountingServersToHclTerraform(struct?: WirelessSsidRadiusAccountingServers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ca_certificate: {
      value: cdktf.stringToHclTerraform(struct!.caCertificate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
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
    radsec_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.radsecEnabled),
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

export class WirelessSsidRadiusAccountingServersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WirelessSsidRadiusAccountingServers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caCertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.caCertificate = this._caCertificate;
    }
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._radsecEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.radsecEnabled = this._radsecEnabled;
    }
    if (this._secret !== undefined) {
      hasAnyValues = true;
      internalValueResult.secret = this._secret;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WirelessSsidRadiusAccountingServers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._caCertificate = undefined;
      this._host = undefined;
      this._port = undefined;
      this._radsecEnabled = undefined;
      this._secret = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._caCertificate = value.caCertificate;
      this._host = value.host;
      this._port = value.port;
      this._radsecEnabled = value.radsecEnabled;
      this._secret = value.secret;
    }
  }

  // ca_certificate - computed: false, optional: true, required: false
  private _caCertificate?: string; 
  public get caCertificate() {
    return this.getStringAttribute('ca_certificate');
  }
  public set caCertificate(value: string) {
    this._caCertificate = value;
  }
  public resetCaCertificate() {
    this._caCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caCertificateInput() {
    return this._caCertificate;
  }

  // host - computed: false, optional: false, required: true
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

  // radsec_enabled - computed: false, optional: true, required: false
  private _radsecEnabled?: boolean | cdktf.IResolvable; 
  public get radsecEnabled() {
    return this.getBooleanAttribute('radsec_enabled');
  }
  public set radsecEnabled(value: boolean | cdktf.IResolvable) {
    this._radsecEnabled = value;
  }
  public resetRadsecEnabled() {
    this._radsecEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radsecEnabledInput() {
    return this._radsecEnabled;
  }

  // secret - computed: false, optional: true, required: false
  private _secret?: string; 
  public get secret() {
    return this.getStringAttribute('secret');
  }
  public set secret(value: string) {
    this._secret = value;
  }
  public resetSecret() {
    this._secret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret;
  }
}

export class WirelessSsidRadiusAccountingServersList extends cdktf.ComplexList {
  public internalValue? : WirelessSsidRadiusAccountingServers[] | cdktf.IResolvable

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
  public get(index: number): WirelessSsidRadiusAccountingServersOutputReference {
    return new WirelessSsidRadiusAccountingServersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WirelessSsidRadiusServers {
  /**
  * Certificate used for authorization for the RADSEC Server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_ssid#ca_certificate WirelessSsid#ca_certificate}
  */
  readonly caCertificate?: string;
  /**
  * IP address (or FQDN) of your RADIUS server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_ssid#host WirelessSsid#host}
  */
  readonly host: string;
  /**
  * The ID of the Openroaming Certificate attached to radius server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_ssid#open_roaming_certificate_id WirelessSsid#open_roaming_certificate_id}
  */
  readonly openRoamingCertificateId?: number;
  /**
  * UDP port the RADIUS server listens on for Access-requests
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_ssid#port WirelessSsid#port}
  */
  readonly port?: number;
  /**
  * Use RADSEC (TLS over TCP) to connect to this RADIUS server. Requires radiusProxyEnabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_ssid#radsec_enabled WirelessSsid#radsec_enabled}
  */
  readonly radsecEnabled?: boolean | cdktf.IResolvable;
  /**
  * RADIUS client shared secret
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_ssid#secret WirelessSsid#secret}
  */
  readonly secret?: string;
}

export function wirelessSsidRadiusServersToTerraform(struct?: WirelessSsidRadiusServers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ca_certificate: cdktf.stringToTerraform(struct!.caCertificate),
    host: cdktf.stringToTerraform(struct!.host),
    open_roaming_certificate_id: cdktf.numberToTerraform(struct!.openRoamingCertificateId),
    port: cdktf.numberToTerraform(struct!.port),
    radsec_enabled: cdktf.booleanToTerraform(struct!.radsecEnabled),
    secret: cdktf.stringToTerraform(struct!.secret),
  }
}


export function wirelessSsidRadiusServersToHclTerraform(struct?: WirelessSsidRadiusServers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ca_certificate: {
      value: cdktf.stringToHclTerraform(struct!.caCertificate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    open_roaming_certificate_id: {
      value: cdktf.numberToHclTerraform(struct!.openRoamingCertificateId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    radsec_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.radsecEnabled),
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

export class WirelessSsidRadiusServersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WirelessSsidRadiusServers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caCertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.caCertificate = this._caCertificate;
    }
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._openRoamingCertificateId !== undefined) {
      hasAnyValues = true;
      internalValueResult.openRoamingCertificateId = this._openRoamingCertificateId;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._radsecEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.radsecEnabled = this._radsecEnabled;
    }
    if (this._secret !== undefined) {
      hasAnyValues = true;
      internalValueResult.secret = this._secret;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WirelessSsidRadiusServers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._caCertificate = undefined;
      this._host = undefined;
      this._openRoamingCertificateId = undefined;
      this._port = undefined;
      this._radsecEnabled = undefined;
      this._secret = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._caCertificate = value.caCertificate;
      this._host = value.host;
      this._openRoamingCertificateId = value.openRoamingCertificateId;
      this._port = value.port;
      this._radsecEnabled = value.radsecEnabled;
      this._secret = value.secret;
    }
  }

  // ca_certificate - computed: false, optional: true, required: false
  private _caCertificate?: string; 
  public get caCertificate() {
    return this.getStringAttribute('ca_certificate');
  }
  public set caCertificate(value: string) {
    this._caCertificate = value;
  }
  public resetCaCertificate() {
    this._caCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caCertificateInput() {
    return this._caCertificate;
  }

  // host - computed: false, optional: false, required: true
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

  // open_roaming_certificate_id - computed: false, optional: true, required: false
  private _openRoamingCertificateId?: number; 
  public get openRoamingCertificateId() {
    return this.getNumberAttribute('open_roaming_certificate_id');
  }
  public set openRoamingCertificateId(value: number) {
    this._openRoamingCertificateId = value;
  }
  public resetOpenRoamingCertificateId() {
    this._openRoamingCertificateId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get openRoamingCertificateIdInput() {
    return this._openRoamingCertificateId;
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

  // radsec_enabled - computed: false, optional: true, required: false
  private _radsecEnabled?: boolean | cdktf.IResolvable; 
  public get radsecEnabled() {
    return this.getBooleanAttribute('radsec_enabled');
  }
  public set radsecEnabled(value: boolean | cdktf.IResolvable) {
    this._radsecEnabled = value;
  }
  public resetRadsecEnabled() {
    this._radsecEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radsecEnabledInput() {
    return this._radsecEnabled;
  }

  // secret - computed: false, optional: true, required: false
  private _secret?: string; 
  public get secret() {
    return this.getStringAttribute('secret');
  }
  public set secret(value: string) {
    this._secret = value;
  }
  public resetSecret() {
    this._secret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret;
  }
}

export class WirelessSsidRadiusServersList extends cdktf.ComplexList {
  public internalValue? : WirelessSsidRadiusServers[] | cdktf.IResolvable

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
  public get(index: number): WirelessSsidRadiusServersOutputReference {
    return new WirelessSsidRadiusServersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_ssid meraki_wireless_ssid}
*/
export class WirelessSsid extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "meraki_wireless_ssid";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WirelessSsid resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WirelessSsid to import
  * @param importFromId The id of the existing WirelessSsid that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_ssid#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WirelessSsid to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "meraki_wireless_ssid", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_ssid meraki_wireless_ssid} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WirelessSsidConfig
  */
  public constructor(scope: Construct, id: string, config: WirelessSsidConfig) {
    super(scope, id, {
      terraformResourceType: 'meraki_wireless_ssid',
      terraformGeneratorMetadata: {
        providerName: 'meraki',
        providerVersion: '1.7.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._activeDirectoryCredentialsLogonName = config.activeDirectoryCredentialsLogonName;
    this._activeDirectoryCredentialsPassword = config.activeDirectoryCredentialsPassword;
    this._activeDirectoryServers.internalValue = config.activeDirectoryServers;
    this._adaptivePolicyGroupId = config.adaptivePolicyGroupId;
    this._adultContentFilteringEnabled = config.adultContentFilteringEnabled;
    this._apTagsAndVlanIds.internalValue = config.apTagsAndVlanIds;
    this._authMode = config.authMode;
    this._availabilityTags = config.availabilityTags;
    this._availableOnAllAps = config.availableOnAllAps;
    this._bandSelection = config.bandSelection;
    this._concentratorNetworkId = config.concentratorNetworkId;
    this._defaultVlanId = config.defaultVlanId;
    this._disassociateClientsOnVpnFailover = config.disassociateClientsOnVpnFailover;
    this._dnsRewriteDnsCustomNameservers = config.dnsRewriteDnsCustomNameservers;
    this._dnsRewriteEnabled = config.dnsRewriteEnabled;
    this._dot11RAdaptive = config.dot11RAdaptive;
    this._dot11REnabled = config.dot11REnabled;
    this._dot11WEnabled = config.dot11WEnabled;
    this._dot11WRequired = config.dot11WRequired;
    this._enabled = config.enabled;
    this._encryptionMode = config.encryptionMode;
    this._enterpriseAdminAccess = config.enterpriseAdminAccess;
    this._greConcentratorHost = config.greConcentratorHost;
    this._greKey = config.greKey;
    this._ipAssignmentMode = config.ipAssignmentMode;
    this._lanIsolationEnabled = config.lanIsolationEnabled;
    this._ldapBaseDistinguishedName = config.ldapBaseDistinguishedName;
    this._ldapCredentialsDistinguishedName = config.ldapCredentialsDistinguishedName;
    this._ldapCredentialsPassword = config.ldapCredentialsPassword;
    this._ldapServerCaCertificateContents = config.ldapServerCaCertificateContents;
    this._ldapServers.internalValue = config.ldapServers;
    this._localAuthFallbackCacheTimeout = config.localAuthFallbackCacheTimeout;
    this._localAuthFallbackEnabled = config.localAuthFallbackEnabled;
    this._localAuthFallbackServerCaCertificateContents = config.localAuthFallbackServerCaCertificateContents;
    this._localRadiusCacheTimeout = config.localRadiusCacheTimeout;
    this._localRadiusCertificateAuthenticationClientRootCaCertificateContents = config.localRadiusCertificateAuthenticationClientRootCaCertificateContents;
    this._localRadiusCertificateAuthenticationEnabled = config.localRadiusCertificateAuthenticationEnabled;
    this._localRadiusCertificateAuthenticationOcspResponderUrl = config.localRadiusCertificateAuthenticationOcspResponderUrl;
    this._localRadiusCertificateAuthenticationUseLdap = config.localRadiusCertificateAuthenticationUseLdap;
    this._localRadiusCertificateAuthenticationUseOcsp = config.localRadiusCertificateAuthenticationUseOcsp;
    this._localRadiusPasswordAuthenticationEnabled = config.localRadiusPasswordAuthenticationEnabled;
    this._mandatoryDhcpEnabled = config.mandatoryDhcpEnabled;
    this._minBitrate = config.minBitrate;
    this._name = config.name;
    this._namedVlansRadiusGuestVlanEnabled = config.namedVlansRadiusGuestVlanEnabled;
    this._namedVlansRadiusGuestVlanName = config.namedVlansRadiusGuestVlanName;
    this._namedVlansTaggingByApTags.internalValue = config.namedVlansTaggingByApTags;
    this._namedVlansTaggingDefaultVlanName = config.namedVlansTaggingDefaultVlanName;
    this._namedVlansTaggingEnabled = config.namedVlansTaggingEnabled;
    this._networkId = config.networkId;
    this._number = config.number;
    this._oauthAllowedDomains = config.oauthAllowedDomains;
    this._perClientBandwidthLimitDown = config.perClientBandwidthLimitDown;
    this._perClientBandwidthLimitUp = config.perClientBandwidthLimitUp;
    this._perSsidBandwidthLimitDown = config.perSsidBandwidthLimitDown;
    this._perSsidBandwidthLimitUp = config.perSsidBandwidthLimitUp;
    this._psk = config.psk;
    this._radiusAccountingEnabled = config.radiusAccountingEnabled;
    this._radiusAccountingInterimInterval = config.radiusAccountingInterimInterval;
    this._radiusAccountingServers.internalValue = config.radiusAccountingServers;
    this._radiusAttributeForGroupPolicies = config.radiusAttributeForGroupPolicies;
    this._radiusAuthenticationNasId = config.radiusAuthenticationNasId;
    this._radiusCalledStationId = config.radiusCalledStationId;
    this._radiusCoaEnabled = config.radiusCoaEnabled;
    this._radiusDasClientsIps = config.radiusDasClientsIps;
    this._radiusDasClientsSharedSecret = config.radiusDasClientsSharedSecret;
    this._radiusFailoverPolicy = config.radiusFailoverPolicy;
    this._radiusFallbackEnabled = config.radiusFallbackEnabled;
    this._radiusGuestVlanEnabled = config.radiusGuestVlanEnabled;
    this._radiusGuestVlanId = config.radiusGuestVlanId;
    this._radiusLoadBalancingPolicy = config.radiusLoadBalancingPolicy;
    this._radiusOverride = config.radiusOverride;
    this._radiusProxyEnabled = config.radiusProxyEnabled;
    this._radiusRadsecTlsTunnelTimeout = config.radiusRadsecTlsTunnelTimeout;
    this._radiusServerAttemptsLimit = config.radiusServerAttemptsLimit;
    this._radiusServerTimeout = config.radiusServerTimeout;
    this._radiusServers.internalValue = config.radiusServers;
    this._radiusTestingEnabled = config.radiusTestingEnabled;
    this._secondaryConcentratorNetworkId = config.secondaryConcentratorNetworkId;
    this._speedBurstEnabled = config.speedBurstEnabled;
    this._splashGuestSponsorDomains = config.splashGuestSponsorDomains;
    this._splashPage = config.splashPage;
    this._useVlanTagging = config.useVlanTagging;
    this._visible = config.visible;
    this._vlanId = config.vlanId;
    this._walledGardenEnabled = config.walledGardenEnabled;
    this._walledGardenRanges = config.walledGardenRanges;
    this._wpaEncryptionMode = config.wpaEncryptionMode;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // active_directory_credentials_logon_name - computed: false, optional: true, required: false
  private _activeDirectoryCredentialsLogonName?: string; 
  public get activeDirectoryCredentialsLogonName() {
    return this.getStringAttribute('active_directory_credentials_logon_name');
  }
  public set activeDirectoryCredentialsLogonName(value: string) {
    this._activeDirectoryCredentialsLogonName = value;
  }
  public resetActiveDirectoryCredentialsLogonName() {
    this._activeDirectoryCredentialsLogonName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeDirectoryCredentialsLogonNameInput() {
    return this._activeDirectoryCredentialsLogonName;
  }

  // active_directory_credentials_password - computed: false, optional: true, required: false
  private _activeDirectoryCredentialsPassword?: string; 
  public get activeDirectoryCredentialsPassword() {
    return this.getStringAttribute('active_directory_credentials_password');
  }
  public set activeDirectoryCredentialsPassword(value: string) {
    this._activeDirectoryCredentialsPassword = value;
  }
  public resetActiveDirectoryCredentialsPassword() {
    this._activeDirectoryCredentialsPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeDirectoryCredentialsPasswordInput() {
    return this._activeDirectoryCredentialsPassword;
  }

  // active_directory_servers - computed: false, optional: true, required: false
  private _activeDirectoryServers = new WirelessSsidActiveDirectoryServersList(this, "active_directory_servers", false);
  public get activeDirectoryServers() {
    return this._activeDirectoryServers;
  }
  public putActiveDirectoryServers(value: WirelessSsidActiveDirectoryServers[] | cdktf.IResolvable) {
    this._activeDirectoryServers.internalValue = value;
  }
  public resetActiveDirectoryServers() {
    this._activeDirectoryServers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeDirectoryServersInput() {
    return this._activeDirectoryServers.internalValue;
  }

  // adaptive_policy_group_id - computed: false, optional: true, required: false
  private _adaptivePolicyGroupId?: string; 
  public get adaptivePolicyGroupId() {
    return this.getStringAttribute('adaptive_policy_group_id');
  }
  public set adaptivePolicyGroupId(value: string) {
    this._adaptivePolicyGroupId = value;
  }
  public resetAdaptivePolicyGroupId() {
    this._adaptivePolicyGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adaptivePolicyGroupIdInput() {
    return this._adaptivePolicyGroupId;
  }

  // adult_content_filtering_enabled - computed: false, optional: true, required: false
  private _adultContentFilteringEnabled?: boolean | cdktf.IResolvable; 
  public get adultContentFilteringEnabled() {
    return this.getBooleanAttribute('adult_content_filtering_enabled');
  }
  public set adultContentFilteringEnabled(value: boolean | cdktf.IResolvable) {
    this._adultContentFilteringEnabled = value;
  }
  public resetAdultContentFilteringEnabled() {
    this._adultContentFilteringEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adultContentFilteringEnabledInput() {
    return this._adultContentFilteringEnabled;
  }

  // ap_tags_and_vlan_ids - computed: false, optional: true, required: false
  private _apTagsAndVlanIds = new WirelessSsidApTagsAndVlanIdsList(this, "ap_tags_and_vlan_ids", false);
  public get apTagsAndVlanIds() {
    return this._apTagsAndVlanIds;
  }
  public putApTagsAndVlanIds(value: WirelessSsidApTagsAndVlanIds[] | cdktf.IResolvable) {
    this._apTagsAndVlanIds.internalValue = value;
  }
  public resetApTagsAndVlanIds() {
    this._apTagsAndVlanIds.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apTagsAndVlanIdsInput() {
    return this._apTagsAndVlanIds.internalValue;
  }

  // auth_mode - computed: false, optional: true, required: false
  private _authMode?: string; 
  public get authMode() {
    return this.getStringAttribute('auth_mode');
  }
  public set authMode(value: string) {
    this._authMode = value;
  }
  public resetAuthMode() {
    this._authMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authModeInput() {
    return this._authMode;
  }

  // availability_tags - computed: false, optional: true, required: false
  private _availabilityTags?: string[]; 
  public get availabilityTags() {
    return cdktf.Fn.tolist(this.getListAttribute('availability_tags'));
  }
  public set availabilityTags(value: string[]) {
    this._availabilityTags = value;
  }
  public resetAvailabilityTags() {
    this._availabilityTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityTagsInput() {
    return this._availabilityTags;
  }

  // available_on_all_aps - computed: false, optional: true, required: false
  private _availableOnAllAps?: boolean | cdktf.IResolvable; 
  public get availableOnAllAps() {
    return this.getBooleanAttribute('available_on_all_aps');
  }
  public set availableOnAllAps(value: boolean | cdktf.IResolvable) {
    this._availableOnAllAps = value;
  }
  public resetAvailableOnAllAps() {
    this._availableOnAllAps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availableOnAllApsInput() {
    return this._availableOnAllAps;
  }

  // band_selection - computed: false, optional: true, required: false
  private _bandSelection?: string; 
  public get bandSelection() {
    return this.getStringAttribute('band_selection');
  }
  public set bandSelection(value: string) {
    this._bandSelection = value;
  }
  public resetBandSelection() {
    this._bandSelection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bandSelectionInput() {
    return this._bandSelection;
  }

  // concentrator_network_id - computed: false, optional: true, required: false
  private _concentratorNetworkId?: string; 
  public get concentratorNetworkId() {
    return this.getStringAttribute('concentrator_network_id');
  }
  public set concentratorNetworkId(value: string) {
    this._concentratorNetworkId = value;
  }
  public resetConcentratorNetworkId() {
    this._concentratorNetworkId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get concentratorNetworkIdInput() {
    return this._concentratorNetworkId;
  }

  // default_vlan_id - computed: false, optional: true, required: false
  private _defaultVlanId?: number; 
  public get defaultVlanId() {
    return this.getNumberAttribute('default_vlan_id');
  }
  public set defaultVlanId(value: number) {
    this._defaultVlanId = value;
  }
  public resetDefaultVlanId() {
    this._defaultVlanId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultVlanIdInput() {
    return this._defaultVlanId;
  }

  // disassociate_clients_on_vpn_failover - computed: false, optional: true, required: false
  private _disassociateClientsOnVpnFailover?: boolean | cdktf.IResolvable; 
  public get disassociateClientsOnVpnFailover() {
    return this.getBooleanAttribute('disassociate_clients_on_vpn_failover');
  }
  public set disassociateClientsOnVpnFailover(value: boolean | cdktf.IResolvable) {
    this._disassociateClientsOnVpnFailover = value;
  }
  public resetDisassociateClientsOnVpnFailover() {
    this._disassociateClientsOnVpnFailover = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disassociateClientsOnVpnFailoverInput() {
    return this._disassociateClientsOnVpnFailover;
  }

  // dns_rewrite_dns_custom_nameservers - computed: false, optional: true, required: false
  private _dnsRewriteDnsCustomNameservers?: string[]; 
  public get dnsRewriteDnsCustomNameservers() {
    return this.getListAttribute('dns_rewrite_dns_custom_nameservers');
  }
  public set dnsRewriteDnsCustomNameservers(value: string[]) {
    this._dnsRewriteDnsCustomNameservers = value;
  }
  public resetDnsRewriteDnsCustomNameservers() {
    this._dnsRewriteDnsCustomNameservers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsRewriteDnsCustomNameserversInput() {
    return this._dnsRewriteDnsCustomNameservers;
  }

  // dns_rewrite_enabled - computed: false, optional: true, required: false
  private _dnsRewriteEnabled?: boolean | cdktf.IResolvable; 
  public get dnsRewriteEnabled() {
    return this.getBooleanAttribute('dns_rewrite_enabled');
  }
  public set dnsRewriteEnabled(value: boolean | cdktf.IResolvable) {
    this._dnsRewriteEnabled = value;
  }
  public resetDnsRewriteEnabled() {
    this._dnsRewriteEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsRewriteEnabledInput() {
    return this._dnsRewriteEnabled;
  }

  // dot11r_adaptive - computed: false, optional: true, required: false
  private _dot11RAdaptive?: boolean | cdktf.IResolvable; 
  public get dot11RAdaptive() {
    return this.getBooleanAttribute('dot11r_adaptive');
  }
  public set dot11RAdaptive(value: boolean | cdktf.IResolvable) {
    this._dot11RAdaptive = value;
  }
  public resetDot11RAdaptive() {
    this._dot11RAdaptive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dot11RAdaptiveInput() {
    return this._dot11RAdaptive;
  }

  // dot11r_enabled - computed: false, optional: true, required: false
  private _dot11REnabled?: boolean | cdktf.IResolvable; 
  public get dot11REnabled() {
    return this.getBooleanAttribute('dot11r_enabled');
  }
  public set dot11REnabled(value: boolean | cdktf.IResolvable) {
    this._dot11REnabled = value;
  }
  public resetDot11REnabled() {
    this._dot11REnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dot11REnabledInput() {
    return this._dot11REnabled;
  }

  // dot11w_enabled - computed: false, optional: true, required: false
  private _dot11WEnabled?: boolean | cdktf.IResolvable; 
  public get dot11WEnabled() {
    return this.getBooleanAttribute('dot11w_enabled');
  }
  public set dot11WEnabled(value: boolean | cdktf.IResolvable) {
    this._dot11WEnabled = value;
  }
  public resetDot11WEnabled() {
    this._dot11WEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dot11WEnabledInput() {
    return this._dot11WEnabled;
  }

  // dot11w_required - computed: false, optional: true, required: false
  private _dot11WRequired?: boolean | cdktf.IResolvable; 
  public get dot11WRequired() {
    return this.getBooleanAttribute('dot11w_required');
  }
  public set dot11WRequired(value: boolean | cdktf.IResolvable) {
    this._dot11WRequired = value;
  }
  public resetDot11WRequired() {
    this._dot11WRequired = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dot11WRequiredInput() {
    return this._dot11WRequired;
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

  // encryption_mode - computed: false, optional: true, required: false
  private _encryptionMode?: string; 
  public get encryptionMode() {
    return this.getStringAttribute('encryption_mode');
  }
  public set encryptionMode(value: string) {
    this._encryptionMode = value;
  }
  public resetEncryptionMode() {
    this._encryptionMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionModeInput() {
    return this._encryptionMode;
  }

  // enterprise_admin_access - computed: false, optional: true, required: false
  private _enterpriseAdminAccess?: string; 
  public get enterpriseAdminAccess() {
    return this.getStringAttribute('enterprise_admin_access');
  }
  public set enterpriseAdminAccess(value: string) {
    this._enterpriseAdminAccess = value;
  }
  public resetEnterpriseAdminAccess() {
    this._enterpriseAdminAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enterpriseAdminAccessInput() {
    return this._enterpriseAdminAccess;
  }

  // gre_concentrator_host - computed: false, optional: true, required: false
  private _greConcentratorHost?: string; 
  public get greConcentratorHost() {
    return this.getStringAttribute('gre_concentrator_host');
  }
  public set greConcentratorHost(value: string) {
    this._greConcentratorHost = value;
  }
  public resetGreConcentratorHost() {
    this._greConcentratorHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get greConcentratorHostInput() {
    return this._greConcentratorHost;
  }

  // gre_key - computed: false, optional: true, required: false
  private _greKey?: number; 
  public get greKey() {
    return this.getNumberAttribute('gre_key');
  }
  public set greKey(value: number) {
    this._greKey = value;
  }
  public resetGreKey() {
    this._greKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get greKeyInput() {
    return this._greKey;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ip_assignment_mode - computed: false, optional: true, required: false
  private _ipAssignmentMode?: string; 
  public get ipAssignmentMode() {
    return this.getStringAttribute('ip_assignment_mode');
  }
  public set ipAssignmentMode(value: string) {
    this._ipAssignmentMode = value;
  }
  public resetIpAssignmentMode() {
    this._ipAssignmentMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAssignmentModeInput() {
    return this._ipAssignmentMode;
  }

  // lan_isolation_enabled - computed: false, optional: true, required: false
  private _lanIsolationEnabled?: boolean | cdktf.IResolvable; 
  public get lanIsolationEnabled() {
    return this.getBooleanAttribute('lan_isolation_enabled');
  }
  public set lanIsolationEnabled(value: boolean | cdktf.IResolvable) {
    this._lanIsolationEnabled = value;
  }
  public resetLanIsolationEnabled() {
    this._lanIsolationEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lanIsolationEnabledInput() {
    return this._lanIsolationEnabled;
  }

  // ldap_base_distinguished_name - computed: false, optional: true, required: false
  private _ldapBaseDistinguishedName?: string; 
  public get ldapBaseDistinguishedName() {
    return this.getStringAttribute('ldap_base_distinguished_name');
  }
  public set ldapBaseDistinguishedName(value: string) {
    this._ldapBaseDistinguishedName = value;
  }
  public resetLdapBaseDistinguishedName() {
    this._ldapBaseDistinguishedName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ldapBaseDistinguishedNameInput() {
    return this._ldapBaseDistinguishedName;
  }

  // ldap_credentials_distinguished_name - computed: false, optional: true, required: false
  private _ldapCredentialsDistinguishedName?: string; 
  public get ldapCredentialsDistinguishedName() {
    return this.getStringAttribute('ldap_credentials_distinguished_name');
  }
  public set ldapCredentialsDistinguishedName(value: string) {
    this._ldapCredentialsDistinguishedName = value;
  }
  public resetLdapCredentialsDistinguishedName() {
    this._ldapCredentialsDistinguishedName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ldapCredentialsDistinguishedNameInput() {
    return this._ldapCredentialsDistinguishedName;
  }

  // ldap_credentials_password - computed: false, optional: true, required: false
  private _ldapCredentialsPassword?: string; 
  public get ldapCredentialsPassword() {
    return this.getStringAttribute('ldap_credentials_password');
  }
  public set ldapCredentialsPassword(value: string) {
    this._ldapCredentialsPassword = value;
  }
  public resetLdapCredentialsPassword() {
    this._ldapCredentialsPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ldapCredentialsPasswordInput() {
    return this._ldapCredentialsPassword;
  }

  // ldap_server_ca_certificate_contents - computed: false, optional: true, required: false
  private _ldapServerCaCertificateContents?: string; 
  public get ldapServerCaCertificateContents() {
    return this.getStringAttribute('ldap_server_ca_certificate_contents');
  }
  public set ldapServerCaCertificateContents(value: string) {
    this._ldapServerCaCertificateContents = value;
  }
  public resetLdapServerCaCertificateContents() {
    this._ldapServerCaCertificateContents = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ldapServerCaCertificateContentsInput() {
    return this._ldapServerCaCertificateContents;
  }

  // ldap_servers - computed: false, optional: true, required: false
  private _ldapServers = new WirelessSsidLdapServersList(this, "ldap_servers", false);
  public get ldapServers() {
    return this._ldapServers;
  }
  public putLdapServers(value: WirelessSsidLdapServers[] | cdktf.IResolvable) {
    this._ldapServers.internalValue = value;
  }
  public resetLdapServers() {
    this._ldapServers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ldapServersInput() {
    return this._ldapServers.internalValue;
  }

  // local_auth_fallback_cache_timeout - computed: false, optional: true, required: false
  private _localAuthFallbackCacheTimeout?: number; 
  public get localAuthFallbackCacheTimeout() {
    return this.getNumberAttribute('local_auth_fallback_cache_timeout');
  }
  public set localAuthFallbackCacheTimeout(value: number) {
    this._localAuthFallbackCacheTimeout = value;
  }
  public resetLocalAuthFallbackCacheTimeout() {
    this._localAuthFallbackCacheTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localAuthFallbackCacheTimeoutInput() {
    return this._localAuthFallbackCacheTimeout;
  }

  // local_auth_fallback_enabled - computed: false, optional: true, required: false
  private _localAuthFallbackEnabled?: boolean | cdktf.IResolvable; 
  public get localAuthFallbackEnabled() {
    return this.getBooleanAttribute('local_auth_fallback_enabled');
  }
  public set localAuthFallbackEnabled(value: boolean | cdktf.IResolvable) {
    this._localAuthFallbackEnabled = value;
  }
  public resetLocalAuthFallbackEnabled() {
    this._localAuthFallbackEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localAuthFallbackEnabledInput() {
    return this._localAuthFallbackEnabled;
  }

  // local_auth_fallback_server_ca_certificate_contents - computed: false, optional: true, required: false
  private _localAuthFallbackServerCaCertificateContents?: string; 
  public get localAuthFallbackServerCaCertificateContents() {
    return this.getStringAttribute('local_auth_fallback_server_ca_certificate_contents');
  }
  public set localAuthFallbackServerCaCertificateContents(value: string) {
    this._localAuthFallbackServerCaCertificateContents = value;
  }
  public resetLocalAuthFallbackServerCaCertificateContents() {
    this._localAuthFallbackServerCaCertificateContents = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localAuthFallbackServerCaCertificateContentsInput() {
    return this._localAuthFallbackServerCaCertificateContents;
  }

  // local_radius_cache_timeout - computed: false, optional: true, required: false
  private _localRadiusCacheTimeout?: number; 
  public get localRadiusCacheTimeout() {
    return this.getNumberAttribute('local_radius_cache_timeout');
  }
  public set localRadiusCacheTimeout(value: number) {
    this._localRadiusCacheTimeout = value;
  }
  public resetLocalRadiusCacheTimeout() {
    this._localRadiusCacheTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localRadiusCacheTimeoutInput() {
    return this._localRadiusCacheTimeout;
  }

  // local_radius_certificate_authentication_client_root_ca_certificate_contents - computed: false, optional: true, required: false
  private _localRadiusCertificateAuthenticationClientRootCaCertificateContents?: string; 
  public get localRadiusCertificateAuthenticationClientRootCaCertificateContents() {
    return this.getStringAttribute('local_radius_certificate_authentication_client_root_ca_certificate_contents');
  }
  public set localRadiusCertificateAuthenticationClientRootCaCertificateContents(value: string) {
    this._localRadiusCertificateAuthenticationClientRootCaCertificateContents = value;
  }
  public resetLocalRadiusCertificateAuthenticationClientRootCaCertificateContents() {
    this._localRadiusCertificateAuthenticationClientRootCaCertificateContents = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localRadiusCertificateAuthenticationClientRootCaCertificateContentsInput() {
    return this._localRadiusCertificateAuthenticationClientRootCaCertificateContents;
  }

  // local_radius_certificate_authentication_enabled - computed: false, optional: true, required: false
  private _localRadiusCertificateAuthenticationEnabled?: boolean | cdktf.IResolvable; 
  public get localRadiusCertificateAuthenticationEnabled() {
    return this.getBooleanAttribute('local_radius_certificate_authentication_enabled');
  }
  public set localRadiusCertificateAuthenticationEnabled(value: boolean | cdktf.IResolvable) {
    this._localRadiusCertificateAuthenticationEnabled = value;
  }
  public resetLocalRadiusCertificateAuthenticationEnabled() {
    this._localRadiusCertificateAuthenticationEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localRadiusCertificateAuthenticationEnabledInput() {
    return this._localRadiusCertificateAuthenticationEnabled;
  }

  // local_radius_certificate_authentication_ocsp_responder_url - computed: false, optional: true, required: false
  private _localRadiusCertificateAuthenticationOcspResponderUrl?: string; 
  public get localRadiusCertificateAuthenticationOcspResponderUrl() {
    return this.getStringAttribute('local_radius_certificate_authentication_ocsp_responder_url');
  }
  public set localRadiusCertificateAuthenticationOcspResponderUrl(value: string) {
    this._localRadiusCertificateAuthenticationOcspResponderUrl = value;
  }
  public resetLocalRadiusCertificateAuthenticationOcspResponderUrl() {
    this._localRadiusCertificateAuthenticationOcspResponderUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localRadiusCertificateAuthenticationOcspResponderUrlInput() {
    return this._localRadiusCertificateAuthenticationOcspResponderUrl;
  }

  // local_radius_certificate_authentication_use_ldap - computed: false, optional: true, required: false
  private _localRadiusCertificateAuthenticationUseLdap?: boolean | cdktf.IResolvable; 
  public get localRadiusCertificateAuthenticationUseLdap() {
    return this.getBooleanAttribute('local_radius_certificate_authentication_use_ldap');
  }
  public set localRadiusCertificateAuthenticationUseLdap(value: boolean | cdktf.IResolvable) {
    this._localRadiusCertificateAuthenticationUseLdap = value;
  }
  public resetLocalRadiusCertificateAuthenticationUseLdap() {
    this._localRadiusCertificateAuthenticationUseLdap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localRadiusCertificateAuthenticationUseLdapInput() {
    return this._localRadiusCertificateAuthenticationUseLdap;
  }

  // local_radius_certificate_authentication_use_ocsp - computed: false, optional: true, required: false
  private _localRadiusCertificateAuthenticationUseOcsp?: boolean | cdktf.IResolvable; 
  public get localRadiusCertificateAuthenticationUseOcsp() {
    return this.getBooleanAttribute('local_radius_certificate_authentication_use_ocsp');
  }
  public set localRadiusCertificateAuthenticationUseOcsp(value: boolean | cdktf.IResolvable) {
    this._localRadiusCertificateAuthenticationUseOcsp = value;
  }
  public resetLocalRadiusCertificateAuthenticationUseOcsp() {
    this._localRadiusCertificateAuthenticationUseOcsp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localRadiusCertificateAuthenticationUseOcspInput() {
    return this._localRadiusCertificateAuthenticationUseOcsp;
  }

  // local_radius_password_authentication_enabled - computed: false, optional: true, required: false
  private _localRadiusPasswordAuthenticationEnabled?: boolean | cdktf.IResolvable; 
  public get localRadiusPasswordAuthenticationEnabled() {
    return this.getBooleanAttribute('local_radius_password_authentication_enabled');
  }
  public set localRadiusPasswordAuthenticationEnabled(value: boolean | cdktf.IResolvable) {
    this._localRadiusPasswordAuthenticationEnabled = value;
  }
  public resetLocalRadiusPasswordAuthenticationEnabled() {
    this._localRadiusPasswordAuthenticationEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localRadiusPasswordAuthenticationEnabledInput() {
    return this._localRadiusPasswordAuthenticationEnabled;
  }

  // mandatory_dhcp_enabled - computed: false, optional: true, required: false
  private _mandatoryDhcpEnabled?: boolean | cdktf.IResolvable; 
  public get mandatoryDhcpEnabled() {
    return this.getBooleanAttribute('mandatory_dhcp_enabled');
  }
  public set mandatoryDhcpEnabled(value: boolean | cdktf.IResolvable) {
    this._mandatoryDhcpEnabled = value;
  }
  public resetMandatoryDhcpEnabled() {
    this._mandatoryDhcpEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mandatoryDhcpEnabledInput() {
    return this._mandatoryDhcpEnabled;
  }

  // min_bitrate - computed: false, optional: true, required: false
  private _minBitrate?: number; 
  public get minBitrate() {
    return this.getNumberAttribute('min_bitrate');
  }
  public set minBitrate(value: number) {
    this._minBitrate = value;
  }
  public resetMinBitrate() {
    this._minBitrate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minBitrateInput() {
    return this._minBitrate;
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

  // named_vlans_radius_guest_vlan_enabled - computed: false, optional: true, required: false
  private _namedVlansRadiusGuestVlanEnabled?: boolean | cdktf.IResolvable; 
  public get namedVlansRadiusGuestVlanEnabled() {
    return this.getBooleanAttribute('named_vlans_radius_guest_vlan_enabled');
  }
  public set namedVlansRadiusGuestVlanEnabled(value: boolean | cdktf.IResolvable) {
    this._namedVlansRadiusGuestVlanEnabled = value;
  }
  public resetNamedVlansRadiusGuestVlanEnabled() {
    this._namedVlansRadiusGuestVlanEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namedVlansRadiusGuestVlanEnabledInput() {
    return this._namedVlansRadiusGuestVlanEnabled;
  }

  // named_vlans_radius_guest_vlan_name - computed: false, optional: true, required: false
  private _namedVlansRadiusGuestVlanName?: string; 
  public get namedVlansRadiusGuestVlanName() {
    return this.getStringAttribute('named_vlans_radius_guest_vlan_name');
  }
  public set namedVlansRadiusGuestVlanName(value: string) {
    this._namedVlansRadiusGuestVlanName = value;
  }
  public resetNamedVlansRadiusGuestVlanName() {
    this._namedVlansRadiusGuestVlanName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namedVlansRadiusGuestVlanNameInput() {
    return this._namedVlansRadiusGuestVlanName;
  }

  // named_vlans_tagging_by_ap_tags - computed: false, optional: true, required: false
  private _namedVlansTaggingByApTags = new WirelessSsidNamedVlansTaggingByApTagsList(this, "named_vlans_tagging_by_ap_tags", false);
  public get namedVlansTaggingByApTags() {
    return this._namedVlansTaggingByApTags;
  }
  public putNamedVlansTaggingByApTags(value: WirelessSsidNamedVlansTaggingByApTags[] | cdktf.IResolvable) {
    this._namedVlansTaggingByApTags.internalValue = value;
  }
  public resetNamedVlansTaggingByApTags() {
    this._namedVlansTaggingByApTags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namedVlansTaggingByApTagsInput() {
    return this._namedVlansTaggingByApTags.internalValue;
  }

  // named_vlans_tagging_default_vlan_name - computed: false, optional: true, required: false
  private _namedVlansTaggingDefaultVlanName?: string; 
  public get namedVlansTaggingDefaultVlanName() {
    return this.getStringAttribute('named_vlans_tagging_default_vlan_name');
  }
  public set namedVlansTaggingDefaultVlanName(value: string) {
    this._namedVlansTaggingDefaultVlanName = value;
  }
  public resetNamedVlansTaggingDefaultVlanName() {
    this._namedVlansTaggingDefaultVlanName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namedVlansTaggingDefaultVlanNameInput() {
    return this._namedVlansTaggingDefaultVlanName;
  }

  // named_vlans_tagging_enabled - computed: false, optional: true, required: false
  private _namedVlansTaggingEnabled?: boolean | cdktf.IResolvable; 
  public get namedVlansTaggingEnabled() {
    return this.getBooleanAttribute('named_vlans_tagging_enabled');
  }
  public set namedVlansTaggingEnabled(value: boolean | cdktf.IResolvable) {
    this._namedVlansTaggingEnabled = value;
  }
  public resetNamedVlansTaggingEnabled() {
    this._namedVlansTaggingEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namedVlansTaggingEnabledInput() {
    return this._namedVlansTaggingEnabled;
  }

  // network_id - computed: false, optional: false, required: true
  private _networkId?: string; 
  public get networkId() {
    return this.getStringAttribute('network_id');
  }
  public set networkId(value: string) {
    this._networkId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkIdInput() {
    return this._networkId;
  }

  // number - computed: false, optional: false, required: true
  private _number?: string; 
  public get number() {
    return this.getStringAttribute('number');
  }
  public set number(value: string) {
    this._number = value;
  }
  // Temporarily expose input value. Use with caution.
  public get numberInput() {
    return this._number;
  }

  // oauth_allowed_domains - computed: false, optional: true, required: false
  private _oauthAllowedDomains?: string[]; 
  public get oauthAllowedDomains() {
    return cdktf.Fn.tolist(this.getListAttribute('oauth_allowed_domains'));
  }
  public set oauthAllowedDomains(value: string[]) {
    this._oauthAllowedDomains = value;
  }
  public resetOauthAllowedDomains() {
    this._oauthAllowedDomains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauthAllowedDomainsInput() {
    return this._oauthAllowedDomains;
  }

  // per_client_bandwidth_limit_down - computed: false, optional: true, required: false
  private _perClientBandwidthLimitDown?: number; 
  public get perClientBandwidthLimitDown() {
    return this.getNumberAttribute('per_client_bandwidth_limit_down');
  }
  public set perClientBandwidthLimitDown(value: number) {
    this._perClientBandwidthLimitDown = value;
  }
  public resetPerClientBandwidthLimitDown() {
    this._perClientBandwidthLimitDown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perClientBandwidthLimitDownInput() {
    return this._perClientBandwidthLimitDown;
  }

  // per_client_bandwidth_limit_up - computed: false, optional: true, required: false
  private _perClientBandwidthLimitUp?: number; 
  public get perClientBandwidthLimitUp() {
    return this.getNumberAttribute('per_client_bandwidth_limit_up');
  }
  public set perClientBandwidthLimitUp(value: number) {
    this._perClientBandwidthLimitUp = value;
  }
  public resetPerClientBandwidthLimitUp() {
    this._perClientBandwidthLimitUp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perClientBandwidthLimitUpInput() {
    return this._perClientBandwidthLimitUp;
  }

  // per_ssid_bandwidth_limit_down - computed: false, optional: true, required: false
  private _perSsidBandwidthLimitDown?: number; 
  public get perSsidBandwidthLimitDown() {
    return this.getNumberAttribute('per_ssid_bandwidth_limit_down');
  }
  public set perSsidBandwidthLimitDown(value: number) {
    this._perSsidBandwidthLimitDown = value;
  }
  public resetPerSsidBandwidthLimitDown() {
    this._perSsidBandwidthLimitDown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perSsidBandwidthLimitDownInput() {
    return this._perSsidBandwidthLimitDown;
  }

  // per_ssid_bandwidth_limit_up - computed: false, optional: true, required: false
  private _perSsidBandwidthLimitUp?: number; 
  public get perSsidBandwidthLimitUp() {
    return this.getNumberAttribute('per_ssid_bandwidth_limit_up');
  }
  public set perSsidBandwidthLimitUp(value: number) {
    this._perSsidBandwidthLimitUp = value;
  }
  public resetPerSsidBandwidthLimitUp() {
    this._perSsidBandwidthLimitUp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perSsidBandwidthLimitUpInput() {
    return this._perSsidBandwidthLimitUp;
  }

  // psk - computed: false, optional: true, required: false
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

  // radius_accounting_enabled - computed: false, optional: true, required: false
  private _radiusAccountingEnabled?: boolean | cdktf.IResolvable; 
  public get radiusAccountingEnabled() {
    return this.getBooleanAttribute('radius_accounting_enabled');
  }
  public set radiusAccountingEnabled(value: boolean | cdktf.IResolvable) {
    this._radiusAccountingEnabled = value;
  }
  public resetRadiusAccountingEnabled() {
    this._radiusAccountingEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radiusAccountingEnabledInput() {
    return this._radiusAccountingEnabled;
  }

  // radius_accounting_interim_interval - computed: false, optional: true, required: false
  private _radiusAccountingInterimInterval?: number; 
  public get radiusAccountingInterimInterval() {
    return this.getNumberAttribute('radius_accounting_interim_interval');
  }
  public set radiusAccountingInterimInterval(value: number) {
    this._radiusAccountingInterimInterval = value;
  }
  public resetRadiusAccountingInterimInterval() {
    this._radiusAccountingInterimInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radiusAccountingInterimIntervalInput() {
    return this._radiusAccountingInterimInterval;
  }

  // radius_accounting_servers - computed: false, optional: true, required: false
  private _radiusAccountingServers = new WirelessSsidRadiusAccountingServersList(this, "radius_accounting_servers", false);
  public get radiusAccountingServers() {
    return this._radiusAccountingServers;
  }
  public putRadiusAccountingServers(value: WirelessSsidRadiusAccountingServers[] | cdktf.IResolvable) {
    this._radiusAccountingServers.internalValue = value;
  }
  public resetRadiusAccountingServers() {
    this._radiusAccountingServers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radiusAccountingServersInput() {
    return this._radiusAccountingServers.internalValue;
  }

  // radius_attribute_for_group_policies - computed: false, optional: true, required: false
  private _radiusAttributeForGroupPolicies?: string; 
  public get radiusAttributeForGroupPolicies() {
    return this.getStringAttribute('radius_attribute_for_group_policies');
  }
  public set radiusAttributeForGroupPolicies(value: string) {
    this._radiusAttributeForGroupPolicies = value;
  }
  public resetRadiusAttributeForGroupPolicies() {
    this._radiusAttributeForGroupPolicies = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radiusAttributeForGroupPoliciesInput() {
    return this._radiusAttributeForGroupPolicies;
  }

  // radius_authentication_nas_id - computed: false, optional: true, required: false
  private _radiusAuthenticationNasId?: string; 
  public get radiusAuthenticationNasId() {
    return this.getStringAttribute('radius_authentication_nas_id');
  }
  public set radiusAuthenticationNasId(value: string) {
    this._radiusAuthenticationNasId = value;
  }
  public resetRadiusAuthenticationNasId() {
    this._radiusAuthenticationNasId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radiusAuthenticationNasIdInput() {
    return this._radiusAuthenticationNasId;
  }

  // radius_called_station_id - computed: false, optional: true, required: false
  private _radiusCalledStationId?: string; 
  public get radiusCalledStationId() {
    return this.getStringAttribute('radius_called_station_id');
  }
  public set radiusCalledStationId(value: string) {
    this._radiusCalledStationId = value;
  }
  public resetRadiusCalledStationId() {
    this._radiusCalledStationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radiusCalledStationIdInput() {
    return this._radiusCalledStationId;
  }

  // radius_coa_enabled - computed: false, optional: true, required: false
  private _radiusCoaEnabled?: boolean | cdktf.IResolvable; 
  public get radiusCoaEnabled() {
    return this.getBooleanAttribute('radius_coa_enabled');
  }
  public set radiusCoaEnabled(value: boolean | cdktf.IResolvable) {
    this._radiusCoaEnabled = value;
  }
  public resetRadiusCoaEnabled() {
    this._radiusCoaEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radiusCoaEnabledInput() {
    return this._radiusCoaEnabled;
  }

  // radius_das_clients_ips - computed: false, optional: true, required: false
  private _radiusDasClientsIps?: string[]; 
  public get radiusDasClientsIps() {
    return cdktf.Fn.tolist(this.getListAttribute('radius_das_clients_ips'));
  }
  public set radiusDasClientsIps(value: string[]) {
    this._radiusDasClientsIps = value;
  }
  public resetRadiusDasClientsIps() {
    this._radiusDasClientsIps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radiusDasClientsIpsInput() {
    return this._radiusDasClientsIps;
  }

  // radius_das_clients_shared_secret - computed: false, optional: true, required: false
  private _radiusDasClientsSharedSecret?: string; 
  public get radiusDasClientsSharedSecret() {
    return this.getStringAttribute('radius_das_clients_shared_secret');
  }
  public set radiusDasClientsSharedSecret(value: string) {
    this._radiusDasClientsSharedSecret = value;
  }
  public resetRadiusDasClientsSharedSecret() {
    this._radiusDasClientsSharedSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radiusDasClientsSharedSecretInput() {
    return this._radiusDasClientsSharedSecret;
  }

  // radius_failover_policy - computed: false, optional: true, required: false
  private _radiusFailoverPolicy?: string; 
  public get radiusFailoverPolicy() {
    return this.getStringAttribute('radius_failover_policy');
  }
  public set radiusFailoverPolicy(value: string) {
    this._radiusFailoverPolicy = value;
  }
  public resetRadiusFailoverPolicy() {
    this._radiusFailoverPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radiusFailoverPolicyInput() {
    return this._radiusFailoverPolicy;
  }

  // radius_fallback_enabled - computed: false, optional: true, required: false
  private _radiusFallbackEnabled?: boolean | cdktf.IResolvable; 
  public get radiusFallbackEnabled() {
    return this.getBooleanAttribute('radius_fallback_enabled');
  }
  public set radiusFallbackEnabled(value: boolean | cdktf.IResolvable) {
    this._radiusFallbackEnabled = value;
  }
  public resetRadiusFallbackEnabled() {
    this._radiusFallbackEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radiusFallbackEnabledInput() {
    return this._radiusFallbackEnabled;
  }

  // radius_guest_vlan_enabled - computed: false, optional: true, required: false
  private _radiusGuestVlanEnabled?: boolean | cdktf.IResolvable; 
  public get radiusGuestVlanEnabled() {
    return this.getBooleanAttribute('radius_guest_vlan_enabled');
  }
  public set radiusGuestVlanEnabled(value: boolean | cdktf.IResolvable) {
    this._radiusGuestVlanEnabled = value;
  }
  public resetRadiusGuestVlanEnabled() {
    this._radiusGuestVlanEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radiusGuestVlanEnabledInput() {
    return this._radiusGuestVlanEnabled;
  }

  // radius_guest_vlan_id - computed: false, optional: true, required: false
  private _radiusGuestVlanId?: number; 
  public get radiusGuestVlanId() {
    return this.getNumberAttribute('radius_guest_vlan_id');
  }
  public set radiusGuestVlanId(value: number) {
    this._radiusGuestVlanId = value;
  }
  public resetRadiusGuestVlanId() {
    this._radiusGuestVlanId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radiusGuestVlanIdInput() {
    return this._radiusGuestVlanId;
  }

  // radius_load_balancing_policy - computed: false, optional: true, required: false
  private _radiusLoadBalancingPolicy?: string; 
  public get radiusLoadBalancingPolicy() {
    return this.getStringAttribute('radius_load_balancing_policy');
  }
  public set radiusLoadBalancingPolicy(value: string) {
    this._radiusLoadBalancingPolicy = value;
  }
  public resetRadiusLoadBalancingPolicy() {
    this._radiusLoadBalancingPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radiusLoadBalancingPolicyInput() {
    return this._radiusLoadBalancingPolicy;
  }

  // radius_override - computed: false, optional: true, required: false
  private _radiusOverride?: boolean | cdktf.IResolvable; 
  public get radiusOverride() {
    return this.getBooleanAttribute('radius_override');
  }
  public set radiusOverride(value: boolean | cdktf.IResolvable) {
    this._radiusOverride = value;
  }
  public resetRadiusOverride() {
    this._radiusOverride = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radiusOverrideInput() {
    return this._radiusOverride;
  }

  // radius_proxy_enabled - computed: false, optional: true, required: false
  private _radiusProxyEnabled?: boolean | cdktf.IResolvable; 
  public get radiusProxyEnabled() {
    return this.getBooleanAttribute('radius_proxy_enabled');
  }
  public set radiusProxyEnabled(value: boolean | cdktf.IResolvable) {
    this._radiusProxyEnabled = value;
  }
  public resetRadiusProxyEnabled() {
    this._radiusProxyEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radiusProxyEnabledInput() {
    return this._radiusProxyEnabled;
  }

  // radius_radsec_tls_tunnel_timeout - computed: false, optional: true, required: false
  private _radiusRadsecTlsTunnelTimeout?: number; 
  public get radiusRadsecTlsTunnelTimeout() {
    return this.getNumberAttribute('radius_radsec_tls_tunnel_timeout');
  }
  public set radiusRadsecTlsTunnelTimeout(value: number) {
    this._radiusRadsecTlsTunnelTimeout = value;
  }
  public resetRadiusRadsecTlsTunnelTimeout() {
    this._radiusRadsecTlsTunnelTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radiusRadsecTlsTunnelTimeoutInput() {
    return this._radiusRadsecTlsTunnelTimeout;
  }

  // radius_server_attempts_limit - computed: false, optional: true, required: false
  private _radiusServerAttemptsLimit?: number; 
  public get radiusServerAttemptsLimit() {
    return this.getNumberAttribute('radius_server_attempts_limit');
  }
  public set radiusServerAttemptsLimit(value: number) {
    this._radiusServerAttemptsLimit = value;
  }
  public resetRadiusServerAttemptsLimit() {
    this._radiusServerAttemptsLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radiusServerAttemptsLimitInput() {
    return this._radiusServerAttemptsLimit;
  }

  // radius_server_timeout - computed: false, optional: true, required: false
  private _radiusServerTimeout?: number; 
  public get radiusServerTimeout() {
    return this.getNumberAttribute('radius_server_timeout');
  }
  public set radiusServerTimeout(value: number) {
    this._radiusServerTimeout = value;
  }
  public resetRadiusServerTimeout() {
    this._radiusServerTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radiusServerTimeoutInput() {
    return this._radiusServerTimeout;
  }

  // radius_servers - computed: false, optional: true, required: false
  private _radiusServers = new WirelessSsidRadiusServersList(this, "radius_servers", false);
  public get radiusServers() {
    return this._radiusServers;
  }
  public putRadiusServers(value: WirelessSsidRadiusServers[] | cdktf.IResolvable) {
    this._radiusServers.internalValue = value;
  }
  public resetRadiusServers() {
    this._radiusServers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radiusServersInput() {
    return this._radiusServers.internalValue;
  }

  // radius_testing_enabled - computed: false, optional: true, required: false
  private _radiusTestingEnabled?: boolean | cdktf.IResolvable; 
  public get radiusTestingEnabled() {
    return this.getBooleanAttribute('radius_testing_enabled');
  }
  public set radiusTestingEnabled(value: boolean | cdktf.IResolvable) {
    this._radiusTestingEnabled = value;
  }
  public resetRadiusTestingEnabled() {
    this._radiusTestingEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radiusTestingEnabledInput() {
    return this._radiusTestingEnabled;
  }

  // secondary_concentrator_network_id - computed: false, optional: true, required: false
  private _secondaryConcentratorNetworkId?: string; 
  public get secondaryConcentratorNetworkId() {
    return this.getStringAttribute('secondary_concentrator_network_id');
  }
  public set secondaryConcentratorNetworkId(value: string) {
    this._secondaryConcentratorNetworkId = value;
  }
  public resetSecondaryConcentratorNetworkId() {
    this._secondaryConcentratorNetworkId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryConcentratorNetworkIdInput() {
    return this._secondaryConcentratorNetworkId;
  }

  // speed_burst_enabled - computed: false, optional: true, required: false
  private _speedBurstEnabled?: boolean | cdktf.IResolvable; 
  public get speedBurstEnabled() {
    return this.getBooleanAttribute('speed_burst_enabled');
  }
  public set speedBurstEnabled(value: boolean | cdktf.IResolvable) {
    this._speedBurstEnabled = value;
  }
  public resetSpeedBurstEnabled() {
    this._speedBurstEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get speedBurstEnabledInput() {
    return this._speedBurstEnabled;
  }

  // splash_guest_sponsor_domains - computed: false, optional: true, required: false
  private _splashGuestSponsorDomains?: string[]; 
  public get splashGuestSponsorDomains() {
    return cdktf.Fn.tolist(this.getListAttribute('splash_guest_sponsor_domains'));
  }
  public set splashGuestSponsorDomains(value: string[]) {
    this._splashGuestSponsorDomains = value;
  }
  public resetSplashGuestSponsorDomains() {
    this._splashGuestSponsorDomains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get splashGuestSponsorDomainsInput() {
    return this._splashGuestSponsorDomains;
  }

  // splash_page - computed: false, optional: true, required: false
  private _splashPage?: string; 
  public get splashPage() {
    return this.getStringAttribute('splash_page');
  }
  public set splashPage(value: string) {
    this._splashPage = value;
  }
  public resetSplashPage() {
    this._splashPage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get splashPageInput() {
    return this._splashPage;
  }

  // use_vlan_tagging - computed: false, optional: true, required: false
  private _useVlanTagging?: boolean | cdktf.IResolvable; 
  public get useVlanTagging() {
    return this.getBooleanAttribute('use_vlan_tagging');
  }
  public set useVlanTagging(value: boolean | cdktf.IResolvable) {
    this._useVlanTagging = value;
  }
  public resetUseVlanTagging() {
    this._useVlanTagging = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useVlanTaggingInput() {
    return this._useVlanTagging;
  }

  // visible - computed: false, optional: true, required: false
  private _visible?: boolean | cdktf.IResolvable; 
  public get visible() {
    return this.getBooleanAttribute('visible');
  }
  public set visible(value: boolean | cdktf.IResolvable) {
    this._visible = value;
  }
  public resetVisible() {
    this._visible = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get visibleInput() {
    return this._visible;
  }

  // vlan_id - computed: false, optional: true, required: false
  private _vlanId?: number; 
  public get vlanId() {
    return this.getNumberAttribute('vlan_id');
  }
  public set vlanId(value: number) {
    this._vlanId = value;
  }
  public resetVlanId() {
    this._vlanId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanIdInput() {
    return this._vlanId;
  }

  // walled_garden_enabled - computed: false, optional: true, required: false
  private _walledGardenEnabled?: boolean | cdktf.IResolvable; 
  public get walledGardenEnabled() {
    return this.getBooleanAttribute('walled_garden_enabled');
  }
  public set walledGardenEnabled(value: boolean | cdktf.IResolvable) {
    this._walledGardenEnabled = value;
  }
  public resetWalledGardenEnabled() {
    this._walledGardenEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get walledGardenEnabledInput() {
    return this._walledGardenEnabled;
  }

  // walled_garden_ranges - computed: false, optional: true, required: false
  private _walledGardenRanges?: string[]; 
  public get walledGardenRanges() {
    return cdktf.Fn.tolist(this.getListAttribute('walled_garden_ranges'));
  }
  public set walledGardenRanges(value: string[]) {
    this._walledGardenRanges = value;
  }
  public resetWalledGardenRanges() {
    this._walledGardenRanges = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get walledGardenRangesInput() {
    return this._walledGardenRanges;
  }

  // wpa_encryption_mode - computed: false, optional: true, required: false
  private _wpaEncryptionMode?: string; 
  public get wpaEncryptionMode() {
    return this.getStringAttribute('wpa_encryption_mode');
  }
  public set wpaEncryptionMode(value: string) {
    this._wpaEncryptionMode = value;
  }
  public resetWpaEncryptionMode() {
    this._wpaEncryptionMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wpaEncryptionModeInput() {
    return this._wpaEncryptionMode;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      active_directory_credentials_logon_name: cdktf.stringToTerraform(this._activeDirectoryCredentialsLogonName),
      active_directory_credentials_password: cdktf.stringToTerraform(this._activeDirectoryCredentialsPassword),
      active_directory_servers: cdktf.listMapper(wirelessSsidActiveDirectoryServersToTerraform, false)(this._activeDirectoryServers.internalValue),
      adaptive_policy_group_id: cdktf.stringToTerraform(this._adaptivePolicyGroupId),
      adult_content_filtering_enabled: cdktf.booleanToTerraform(this._adultContentFilteringEnabled),
      ap_tags_and_vlan_ids: cdktf.listMapper(wirelessSsidApTagsAndVlanIdsToTerraform, false)(this._apTagsAndVlanIds.internalValue),
      auth_mode: cdktf.stringToTerraform(this._authMode),
      availability_tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._availabilityTags),
      available_on_all_aps: cdktf.booleanToTerraform(this._availableOnAllAps),
      band_selection: cdktf.stringToTerraform(this._bandSelection),
      concentrator_network_id: cdktf.stringToTerraform(this._concentratorNetworkId),
      default_vlan_id: cdktf.numberToTerraform(this._defaultVlanId),
      disassociate_clients_on_vpn_failover: cdktf.booleanToTerraform(this._disassociateClientsOnVpnFailover),
      dns_rewrite_dns_custom_nameservers: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dnsRewriteDnsCustomNameservers),
      dns_rewrite_enabled: cdktf.booleanToTerraform(this._dnsRewriteEnabled),
      dot11r_adaptive: cdktf.booleanToTerraform(this._dot11RAdaptive),
      dot11r_enabled: cdktf.booleanToTerraform(this._dot11REnabled),
      dot11w_enabled: cdktf.booleanToTerraform(this._dot11WEnabled),
      dot11w_required: cdktf.booleanToTerraform(this._dot11WRequired),
      enabled: cdktf.booleanToTerraform(this._enabled),
      encryption_mode: cdktf.stringToTerraform(this._encryptionMode),
      enterprise_admin_access: cdktf.stringToTerraform(this._enterpriseAdminAccess),
      gre_concentrator_host: cdktf.stringToTerraform(this._greConcentratorHost),
      gre_key: cdktf.numberToTerraform(this._greKey),
      ip_assignment_mode: cdktf.stringToTerraform(this._ipAssignmentMode),
      lan_isolation_enabled: cdktf.booleanToTerraform(this._lanIsolationEnabled),
      ldap_base_distinguished_name: cdktf.stringToTerraform(this._ldapBaseDistinguishedName),
      ldap_credentials_distinguished_name: cdktf.stringToTerraform(this._ldapCredentialsDistinguishedName),
      ldap_credentials_password: cdktf.stringToTerraform(this._ldapCredentialsPassword),
      ldap_server_ca_certificate_contents: cdktf.stringToTerraform(this._ldapServerCaCertificateContents),
      ldap_servers: cdktf.listMapper(wirelessSsidLdapServersToTerraform, false)(this._ldapServers.internalValue),
      local_auth_fallback_cache_timeout: cdktf.numberToTerraform(this._localAuthFallbackCacheTimeout),
      local_auth_fallback_enabled: cdktf.booleanToTerraform(this._localAuthFallbackEnabled),
      local_auth_fallback_server_ca_certificate_contents: cdktf.stringToTerraform(this._localAuthFallbackServerCaCertificateContents),
      local_radius_cache_timeout: cdktf.numberToTerraform(this._localRadiusCacheTimeout),
      local_radius_certificate_authentication_client_root_ca_certificate_contents: cdktf.stringToTerraform(this._localRadiusCertificateAuthenticationClientRootCaCertificateContents),
      local_radius_certificate_authentication_enabled: cdktf.booleanToTerraform(this._localRadiusCertificateAuthenticationEnabled),
      local_radius_certificate_authentication_ocsp_responder_url: cdktf.stringToTerraform(this._localRadiusCertificateAuthenticationOcspResponderUrl),
      local_radius_certificate_authentication_use_ldap: cdktf.booleanToTerraform(this._localRadiusCertificateAuthenticationUseLdap),
      local_radius_certificate_authentication_use_ocsp: cdktf.booleanToTerraform(this._localRadiusCertificateAuthenticationUseOcsp),
      local_radius_password_authentication_enabled: cdktf.booleanToTerraform(this._localRadiusPasswordAuthenticationEnabled),
      mandatory_dhcp_enabled: cdktf.booleanToTerraform(this._mandatoryDhcpEnabled),
      min_bitrate: cdktf.numberToTerraform(this._minBitrate),
      name: cdktf.stringToTerraform(this._name),
      named_vlans_radius_guest_vlan_enabled: cdktf.booleanToTerraform(this._namedVlansRadiusGuestVlanEnabled),
      named_vlans_radius_guest_vlan_name: cdktf.stringToTerraform(this._namedVlansRadiusGuestVlanName),
      named_vlans_tagging_by_ap_tags: cdktf.listMapper(wirelessSsidNamedVlansTaggingByApTagsToTerraform, false)(this._namedVlansTaggingByApTags.internalValue),
      named_vlans_tagging_default_vlan_name: cdktf.stringToTerraform(this._namedVlansTaggingDefaultVlanName),
      named_vlans_tagging_enabled: cdktf.booleanToTerraform(this._namedVlansTaggingEnabled),
      network_id: cdktf.stringToTerraform(this._networkId),
      number: cdktf.stringToTerraform(this._number),
      oauth_allowed_domains: cdktf.listMapper(cdktf.stringToTerraform, false)(this._oauthAllowedDomains),
      per_client_bandwidth_limit_down: cdktf.numberToTerraform(this._perClientBandwidthLimitDown),
      per_client_bandwidth_limit_up: cdktf.numberToTerraform(this._perClientBandwidthLimitUp),
      per_ssid_bandwidth_limit_down: cdktf.numberToTerraform(this._perSsidBandwidthLimitDown),
      per_ssid_bandwidth_limit_up: cdktf.numberToTerraform(this._perSsidBandwidthLimitUp),
      psk: cdktf.stringToTerraform(this._psk),
      radius_accounting_enabled: cdktf.booleanToTerraform(this._radiusAccountingEnabled),
      radius_accounting_interim_interval: cdktf.numberToTerraform(this._radiusAccountingInterimInterval),
      radius_accounting_servers: cdktf.listMapper(wirelessSsidRadiusAccountingServersToTerraform, false)(this._radiusAccountingServers.internalValue),
      radius_attribute_for_group_policies: cdktf.stringToTerraform(this._radiusAttributeForGroupPolicies),
      radius_authentication_nas_id: cdktf.stringToTerraform(this._radiusAuthenticationNasId),
      radius_called_station_id: cdktf.stringToTerraform(this._radiusCalledStationId),
      radius_coa_enabled: cdktf.booleanToTerraform(this._radiusCoaEnabled),
      radius_das_clients_ips: cdktf.listMapper(cdktf.stringToTerraform, false)(this._radiusDasClientsIps),
      radius_das_clients_shared_secret: cdktf.stringToTerraform(this._radiusDasClientsSharedSecret),
      radius_failover_policy: cdktf.stringToTerraform(this._radiusFailoverPolicy),
      radius_fallback_enabled: cdktf.booleanToTerraform(this._radiusFallbackEnabled),
      radius_guest_vlan_enabled: cdktf.booleanToTerraform(this._radiusGuestVlanEnabled),
      radius_guest_vlan_id: cdktf.numberToTerraform(this._radiusGuestVlanId),
      radius_load_balancing_policy: cdktf.stringToTerraform(this._radiusLoadBalancingPolicy),
      radius_override: cdktf.booleanToTerraform(this._radiusOverride),
      radius_proxy_enabled: cdktf.booleanToTerraform(this._radiusProxyEnabled),
      radius_radsec_tls_tunnel_timeout: cdktf.numberToTerraform(this._radiusRadsecTlsTunnelTimeout),
      radius_server_attempts_limit: cdktf.numberToTerraform(this._radiusServerAttemptsLimit),
      radius_server_timeout: cdktf.numberToTerraform(this._radiusServerTimeout),
      radius_servers: cdktf.listMapper(wirelessSsidRadiusServersToTerraform, false)(this._radiusServers.internalValue),
      radius_testing_enabled: cdktf.booleanToTerraform(this._radiusTestingEnabled),
      secondary_concentrator_network_id: cdktf.stringToTerraform(this._secondaryConcentratorNetworkId),
      speed_burst_enabled: cdktf.booleanToTerraform(this._speedBurstEnabled),
      splash_guest_sponsor_domains: cdktf.listMapper(cdktf.stringToTerraform, false)(this._splashGuestSponsorDomains),
      splash_page: cdktf.stringToTerraform(this._splashPage),
      use_vlan_tagging: cdktf.booleanToTerraform(this._useVlanTagging),
      visible: cdktf.booleanToTerraform(this._visible),
      vlan_id: cdktf.numberToTerraform(this._vlanId),
      walled_garden_enabled: cdktf.booleanToTerraform(this._walledGardenEnabled),
      walled_garden_ranges: cdktf.listMapper(cdktf.stringToTerraform, false)(this._walledGardenRanges),
      wpa_encryption_mode: cdktf.stringToTerraform(this._wpaEncryptionMode),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      active_directory_credentials_logon_name: {
        value: cdktf.stringToHclTerraform(this._activeDirectoryCredentialsLogonName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      active_directory_credentials_password: {
        value: cdktf.stringToHclTerraform(this._activeDirectoryCredentialsPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      active_directory_servers: {
        value: cdktf.listMapperHcl(wirelessSsidActiveDirectoryServersToHclTerraform, false)(this._activeDirectoryServers.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WirelessSsidActiveDirectoryServersList",
      },
      adaptive_policy_group_id: {
        value: cdktf.stringToHclTerraform(this._adaptivePolicyGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      adult_content_filtering_enabled: {
        value: cdktf.booleanToHclTerraform(this._adultContentFilteringEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ap_tags_and_vlan_ids: {
        value: cdktf.listMapperHcl(wirelessSsidApTagsAndVlanIdsToHclTerraform, false)(this._apTagsAndVlanIds.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WirelessSsidApTagsAndVlanIdsList",
      },
      auth_mode: {
        value: cdktf.stringToHclTerraform(this._authMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      availability_tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._availabilityTags),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      available_on_all_aps: {
        value: cdktf.booleanToHclTerraform(this._availableOnAllAps),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      band_selection: {
        value: cdktf.stringToHclTerraform(this._bandSelection),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      concentrator_network_id: {
        value: cdktf.stringToHclTerraform(this._concentratorNetworkId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_vlan_id: {
        value: cdktf.numberToHclTerraform(this._defaultVlanId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      disassociate_clients_on_vpn_failover: {
        value: cdktf.booleanToHclTerraform(this._disassociateClientsOnVpnFailover),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      dns_rewrite_dns_custom_nameservers: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dnsRewriteDnsCustomNameservers),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      dns_rewrite_enabled: {
        value: cdktf.booleanToHclTerraform(this._dnsRewriteEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      dot11r_adaptive: {
        value: cdktf.booleanToHclTerraform(this._dot11RAdaptive),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      dot11r_enabled: {
        value: cdktf.booleanToHclTerraform(this._dot11REnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      dot11w_enabled: {
        value: cdktf.booleanToHclTerraform(this._dot11WEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      dot11w_required: {
        value: cdktf.booleanToHclTerraform(this._dot11WRequired),
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
      encryption_mode: {
        value: cdktf.stringToHclTerraform(this._encryptionMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enterprise_admin_access: {
        value: cdktf.stringToHclTerraform(this._enterpriseAdminAccess),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gre_concentrator_host: {
        value: cdktf.stringToHclTerraform(this._greConcentratorHost),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gre_key: {
        value: cdktf.numberToHclTerraform(this._greKey),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ip_assignment_mode: {
        value: cdktf.stringToHclTerraform(this._ipAssignmentMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      lan_isolation_enabled: {
        value: cdktf.booleanToHclTerraform(this._lanIsolationEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ldap_base_distinguished_name: {
        value: cdktf.stringToHclTerraform(this._ldapBaseDistinguishedName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ldap_credentials_distinguished_name: {
        value: cdktf.stringToHclTerraform(this._ldapCredentialsDistinguishedName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ldap_credentials_password: {
        value: cdktf.stringToHclTerraform(this._ldapCredentialsPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ldap_server_ca_certificate_contents: {
        value: cdktf.stringToHclTerraform(this._ldapServerCaCertificateContents),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ldap_servers: {
        value: cdktf.listMapperHcl(wirelessSsidLdapServersToHclTerraform, false)(this._ldapServers.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WirelessSsidLdapServersList",
      },
      local_auth_fallback_cache_timeout: {
        value: cdktf.numberToHclTerraform(this._localAuthFallbackCacheTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      local_auth_fallback_enabled: {
        value: cdktf.booleanToHclTerraform(this._localAuthFallbackEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      local_auth_fallback_server_ca_certificate_contents: {
        value: cdktf.stringToHclTerraform(this._localAuthFallbackServerCaCertificateContents),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      local_radius_cache_timeout: {
        value: cdktf.numberToHclTerraform(this._localRadiusCacheTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      local_radius_certificate_authentication_client_root_ca_certificate_contents: {
        value: cdktf.stringToHclTerraform(this._localRadiusCertificateAuthenticationClientRootCaCertificateContents),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      local_radius_certificate_authentication_enabled: {
        value: cdktf.booleanToHclTerraform(this._localRadiusCertificateAuthenticationEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      local_radius_certificate_authentication_ocsp_responder_url: {
        value: cdktf.stringToHclTerraform(this._localRadiusCertificateAuthenticationOcspResponderUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      local_radius_certificate_authentication_use_ldap: {
        value: cdktf.booleanToHclTerraform(this._localRadiusCertificateAuthenticationUseLdap),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      local_radius_certificate_authentication_use_ocsp: {
        value: cdktf.booleanToHclTerraform(this._localRadiusCertificateAuthenticationUseOcsp),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      local_radius_password_authentication_enabled: {
        value: cdktf.booleanToHclTerraform(this._localRadiusPasswordAuthenticationEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      mandatory_dhcp_enabled: {
        value: cdktf.booleanToHclTerraform(this._mandatoryDhcpEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      min_bitrate: {
        value: cdktf.numberToHclTerraform(this._minBitrate),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      named_vlans_radius_guest_vlan_enabled: {
        value: cdktf.booleanToHclTerraform(this._namedVlansRadiusGuestVlanEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      named_vlans_radius_guest_vlan_name: {
        value: cdktf.stringToHclTerraform(this._namedVlansRadiusGuestVlanName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      named_vlans_tagging_by_ap_tags: {
        value: cdktf.listMapperHcl(wirelessSsidNamedVlansTaggingByApTagsToHclTerraform, false)(this._namedVlansTaggingByApTags.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WirelessSsidNamedVlansTaggingByApTagsList",
      },
      named_vlans_tagging_default_vlan_name: {
        value: cdktf.stringToHclTerraform(this._namedVlansTaggingDefaultVlanName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      named_vlans_tagging_enabled: {
        value: cdktf.booleanToHclTerraform(this._namedVlansTaggingEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      network_id: {
        value: cdktf.stringToHclTerraform(this._networkId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      number: {
        value: cdktf.stringToHclTerraform(this._number),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oauth_allowed_domains: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._oauthAllowedDomains),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      per_client_bandwidth_limit_down: {
        value: cdktf.numberToHclTerraform(this._perClientBandwidthLimitDown),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      per_client_bandwidth_limit_up: {
        value: cdktf.numberToHclTerraform(this._perClientBandwidthLimitUp),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      per_ssid_bandwidth_limit_down: {
        value: cdktf.numberToHclTerraform(this._perSsidBandwidthLimitDown),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      per_ssid_bandwidth_limit_up: {
        value: cdktf.numberToHclTerraform(this._perSsidBandwidthLimitUp),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      psk: {
        value: cdktf.stringToHclTerraform(this._psk),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      radius_accounting_enabled: {
        value: cdktf.booleanToHclTerraform(this._radiusAccountingEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      radius_accounting_interim_interval: {
        value: cdktf.numberToHclTerraform(this._radiusAccountingInterimInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      radius_accounting_servers: {
        value: cdktf.listMapperHcl(wirelessSsidRadiusAccountingServersToHclTerraform, false)(this._radiusAccountingServers.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WirelessSsidRadiusAccountingServersList",
      },
      radius_attribute_for_group_policies: {
        value: cdktf.stringToHclTerraform(this._radiusAttributeForGroupPolicies),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      radius_authentication_nas_id: {
        value: cdktf.stringToHclTerraform(this._radiusAuthenticationNasId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      radius_called_station_id: {
        value: cdktf.stringToHclTerraform(this._radiusCalledStationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      radius_coa_enabled: {
        value: cdktf.booleanToHclTerraform(this._radiusCoaEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      radius_das_clients_ips: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._radiusDasClientsIps),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      radius_das_clients_shared_secret: {
        value: cdktf.stringToHclTerraform(this._radiusDasClientsSharedSecret),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      radius_failover_policy: {
        value: cdktf.stringToHclTerraform(this._radiusFailoverPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      radius_fallback_enabled: {
        value: cdktf.booleanToHclTerraform(this._radiusFallbackEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      radius_guest_vlan_enabled: {
        value: cdktf.booleanToHclTerraform(this._radiusGuestVlanEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      radius_guest_vlan_id: {
        value: cdktf.numberToHclTerraform(this._radiusGuestVlanId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      radius_load_balancing_policy: {
        value: cdktf.stringToHclTerraform(this._radiusLoadBalancingPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      radius_override: {
        value: cdktf.booleanToHclTerraform(this._radiusOverride),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      radius_proxy_enabled: {
        value: cdktf.booleanToHclTerraform(this._radiusProxyEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      radius_radsec_tls_tunnel_timeout: {
        value: cdktf.numberToHclTerraform(this._radiusRadsecTlsTunnelTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      radius_server_attempts_limit: {
        value: cdktf.numberToHclTerraform(this._radiusServerAttemptsLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      radius_server_timeout: {
        value: cdktf.numberToHclTerraform(this._radiusServerTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      radius_servers: {
        value: cdktf.listMapperHcl(wirelessSsidRadiusServersToHclTerraform, false)(this._radiusServers.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WirelessSsidRadiusServersList",
      },
      radius_testing_enabled: {
        value: cdktf.booleanToHclTerraform(this._radiusTestingEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      secondary_concentrator_network_id: {
        value: cdktf.stringToHclTerraform(this._secondaryConcentratorNetworkId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      speed_burst_enabled: {
        value: cdktf.booleanToHclTerraform(this._speedBurstEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      splash_guest_sponsor_domains: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._splashGuestSponsorDomains),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      splash_page: {
        value: cdktf.stringToHclTerraform(this._splashPage),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      use_vlan_tagging: {
        value: cdktf.booleanToHclTerraform(this._useVlanTagging),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      visible: {
        value: cdktf.booleanToHclTerraform(this._visible),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      vlan_id: {
        value: cdktf.numberToHclTerraform(this._vlanId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      walled_garden_enabled: {
        value: cdktf.booleanToHclTerraform(this._walledGardenEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      walled_garden_ranges: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._walledGardenRanges),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      wpa_encryption_mode: {
        value: cdktf.stringToHclTerraform(this._wpaEncryptionMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
