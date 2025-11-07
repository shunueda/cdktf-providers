// https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/wireless_ssid
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WirelessSsidConfig extends cdktf.TerraformMetaArguments {
  /**
  * Activate the AAA Override feature when set to true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/wireless_ssid#aaa_override WirelessSsid#aaa_override}
  */
  readonly aaaOverride?: boolean | cdktf.IResolvable;
  /**
  * List of Accounting server IpAddresses
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/wireless_ssid#acct_servers WirelessSsid#acct_servers}
  */
  readonly acctServers?: string[];
  /**
  * Pre-Auth Access Control List (ACL) Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/wireless_ssid#acl_name WirelessSsid#acl_name}
  */
  readonly aclName?: string;
  /**
  * When set to true, the Access Point (AP) Beacon Protection feature is activated, enhancing the security of the network
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/wireless_ssid#ap_beacon_protection WirelessSsid#ap_beacon_protection}
  */
  readonly apBeaconProtection?: boolean | cdktf.IResolvable;
  /**
  * When set to true, the 802.1X authentication key is in use
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/wireless_ssid#auth_key8021x WirelessSsid#auth_key8021x}
  */
  readonly authKey8021X?: boolean | cdktf.IResolvable;
  /**
  * When set to true, the 802.1X-Plus-FT authentication key is in use
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/wireless_ssid#auth_key8021x_plus_ft WirelessSsid#auth_key8021x_plus_ft}
  */
  readonly authKey8021XPlusFt?: boolean | cdktf.IResolvable;
  /**
  * When set to true, the feature that enables 802.1X authentication using the SHA256 algorithm is turned on
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/wireless_ssid#auth_key8021x_sha256 WirelessSsid#auth_key8021x_sha256}
  */
  readonly authKey8021XSha256?: boolean | cdktf.IResolvable;
  /**
  * When set to true, the feature that enables the use of Easy Pre-shared Key (PSK) authentication is activated
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/wireless_ssid#auth_key_easy_psk WirelessSsid#auth_key_easy_psk}
  */
  readonly authKeyEasyPsk?: boolean | cdktf.IResolvable;
  /**
  * The feature that allows the use of Pre-shared Key (PSK) authentication with the SHA256 algorithm is enabled when it is set to true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/wireless_ssid#auth_key_easy_psk_sha256 WirelessSsid#auth_key_easy_psk_sha256}
  */
  readonly authKeyEasyPskSha256?: boolean | cdktf.IResolvable;
  /**
  * When set to true, the Opportunistic Wireless Encryption (OWE) authentication key feature is turned on
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/wireless_ssid#auth_key_owe WirelessSsid#auth_key_owe}
  */
  readonly authKeyOwe?: boolean | cdktf.IResolvable;
  /**
  * When set to true, the Pre-shared Key (PSK) authentication feature is enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/wireless_ssid#auth_key_psk WirelessSsid#auth_key_psk}
  */
  readonly authKeyPsk?: boolean | cdktf.IResolvable;
  /**
  * When set to true, the feature that enables the combination of Pre-shared Key (PSK) and Fast Transition (FT) authentication keys is activated
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/wireless_ssid#auth_key_psk_plus_ft WirelessSsid#auth_key_psk_plus_ft}
  */
  readonly authKeyPskPlusFt?: boolean | cdktf.IResolvable;
  /**
  * When set to true, the feature enabling the Simultaneous Authentication of Equals (SAE) authentication key is activated
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/wireless_ssid#auth_key_sae WirelessSsid#auth_key_sae}
  */
  readonly authKeySae?: boolean | cdktf.IResolvable;
  /**
  * When set to true, the Simultaneous Authentication of Equals (SAE) Extended Authentication key feature is turned on
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/wireless_ssid#auth_key_sae_ext WirelessSsid#auth_key_sae_ext}
  */
  readonly authKeySaeExt?: boolean | cdktf.IResolvable;
  /**
  * When set to true, the Simultaneous Authentication of Equals (SAE) combined with Fast Transition (FT) Authentication Key feature is enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/wireless_ssid#auth_key_sae_ext_plus_ft WirelessSsid#auth_key_sae_ext_plus_ft}
  */
  readonly authKeySaeExtPlusFt?: boolean | cdktf.IResolvable;
  /**
  * When set to true, the feature that enables the combination of Pre-shared Key (PSK) and Fast Transition (FT) authentication keys is activated
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/wireless_ssid#auth_key_sae_plus_ft WirelessSsid#auth_key_sae_plus_ft}
  */
  readonly authKeySaePlusFt?: boolean | cdktf.IResolvable;
  /**
  * When set to true, the SuiteB192-1x authentication key feature is enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/wireless_ssid#auth_key_suite_b1921x WirelessSsid#auth_key_suite_b1921x}
  */
  readonly authKeySuiteB1921X?: boolean | cdktf.IResolvable;
  /**
  * When activated by setting it to true, the SuiteB-1x authentication key feature is engaged
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/wireless_ssid#auth_key_suite_b1x WirelessSsid#auth_key_suite_b1x}
  */
  readonly authKeySuiteB1X?: boolean | cdktf.IResolvable;
  /**
  * Authentication Server, Mandatory for Guest SSIDs with wlanType=Guest and l3AuthType=web_auth
  *   - Choices: `auth_ise`, `auth_external`, `auth_internal`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/wireless_ssid#auth_server WirelessSsid#auth_server}
  */
  readonly authServer?: string;
  /**
  * List of Authentication/Authorization server IpAddresses
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/wireless_ssid#auth_servers WirelessSsid#auth_servers}
  */
  readonly authServers?: string[];
  /**
  * L2 Authentication Type. If authType is not open, then at least one RSN Cipher Suite and corresponding valid AKM must be enabled.
  *   - Choices: `WPA2_ENTERPRISE`, `WPA2_PERSONAL`, `OPEN`, `WPA3_ENTERPRISE`, `WPA3_PERSONAL`, `WPA2_WPA3_PERSONAL`, `WPA2_WPA3_ENTERPRISE`, `OPEN_SECURED`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/wireless_ssid#auth_type WirelessSsid#auth_type}
  */
  readonly authType: string;
  /**
  * This refers to the duration of inactivity, measured in seconds, before a client connected to the Basic Service Set is considered idle and timed out
  *   - Range: `15`-`100000`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/wireless_ssid#basic_service_set_client_idle_timeout WirelessSsid#basic_service_set_client_idle_timeout}
  */
  readonly basicServiceSetClientIdleTimeout?: number;
  /**
  * Activate the maximum idle feature for the Basic Service Set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/wireless_ssid#basic_service_set_max_idle WirelessSsid#basic_service_set_max_idle}
  */
  readonly basicServiceSetMaxIdle?: boolean | cdktf.IResolvable;
  /**
  * When activated by setting it to true, the Broadcast SSID feature will make the SSID publicly visible to wireless devices searching for available networks
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/wireless_ssid#broadcast_ssid WirelessSsid#broadcast_ssid}
  */
  readonly broadcastSsid?: boolean | cdktf.IResolvable;
  /**
  * True if CCKM is enabled, else False
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/wireless_ssid#cckm WirelessSsid#cckm}
  */
  readonly cckm?: boolean | cdktf.IResolvable;
  /**
  * Cckm TImestamp Tolerance(in milliseconds)
  *   - Range: `1000`-`5000`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/wireless_ssid#cckm_tsf_tolerance WirelessSsid#cckm_tsf_tolerance}
  */
  readonly cckmTsfTolerance?: number;
  /**
  * Activate the feature that allows for the exclusion of clients
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/wireless_ssid#client_exclusion WirelessSsid#client_exclusion}
  */
  readonly clientExclusion?: boolean | cdktf.IResolvable;
  /**
  * This refers to the length of time, in seconds, a client is excluded or blocked from accessing the network after a specified number of unsuccessful attempts
  *   - Range: `0`-`2147483647`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/wireless_ssid#client_exclusion_timeout WirelessSsid#client_exclusion_timeout}
  */
  readonly clientExclusionTimeout?: number;
  /**
  * This pertains to the maximum data transfer rate, specified in bits per second, that a client is permitted to achieve
  *   - Range: `8000`-`100000000000`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/wireless_ssid#client_rate_limit WirelessSsid#client_rate_limit}
  */
  readonly clientRateLimit?: number;
  /**
  * Coverage Hole Detection Enable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/wireless_ssid#coverage_hole_detection WirelessSsid#coverage_hole_detection}
  */
  readonly coverageHoleDetection?: boolean | cdktf.IResolvable;
  /**
  * The Directed Multicast Service feature becomes operational when it is set to true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/wireless_ssid#directed_multicast_service WirelessSsid#directed_multicast_service}
  */
  readonly directedMulticastService?: boolean | cdktf.IResolvable;
  /**
  * Egress QOS
  *   - Choices: `PLATINUM`, `SILVER`, `GOLD`, `BRONZE`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/wireless_ssid#egress_qos WirelessSsid#egress_qos}
  */
  readonly egressQos?: string;
  /**
  * Set SSID's admin status as 'Enabled' when set to true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/wireless_ssid#enabled WirelessSsid#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * External WebAuth URL (Mandatory for Guest SSIDs with wlanType = Guest, l3AuthType = web_auth and authServer = auth_external)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/wireless_ssid#external_auth_ip_address WirelessSsid#external_auth_ip_address}
  */
  readonly externalAuthIpAddress?: string;
  /**
  * True if FastLane is enabled, else False
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/wireless_ssid#fast_lane WirelessSsid#fast_lane}
  */
  readonly fastLane?: boolean | cdktf.IResolvable;
  /**
  * Fast Transition
  *   - Choices: `ADAPTIVE`, `ENABLE`, `DISABLE`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/wireless_ssid#fast_transition WirelessSsid#fast_transition}
  */
  readonly fastTransition?: string;
  /**
  * Enable Fast Transition over the Distributed System when set to true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/wireless_ssid#fast_transition_over_the_distributed_system WirelessSsid#fast_transition_over_the_distributed_system}
  */
  readonly fastTransitionOverTheDistributedSystem?: boolean | cdktf.IResolvable;
  /**
  * 2.4 Ghz Band Policy value. Allowed only when 2.4 Radio Band is enabled in ssidRadioType
  *   - Choices: `dot11-g-only`, `dot11-bg-only`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/wireless_ssid#ghz24_policy WirelessSsid#ghz24_policy}
  */
  readonly ghz24Policy?: string;
  /**
  * True if 6 GHz Policy Client Steering is enabled, else False
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/wireless_ssid#ghz6_policy_client_steering WirelessSsid#ghz6_policy_client_steering}
  */
  readonly ghz6PolicyClientSteering?: boolean | cdktf.IResolvable;
  /**
  * True if passphrase is in Hex format, else False
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/wireless_ssid#hex WirelessSsid#hex}
  */
  readonly hex?: boolean | cdktf.IResolvable;
  /**
  * Ingress QOS
  *   - Choices: `PLATINUM-UP`, `SILVER-UP`, `GOLD-UP`, `BRONZE-UP`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/wireless_ssid#ingress_qos WirelessSsid#ingress_qos}
  */
  readonly ingressQos?: string;
  /**
  * L3 Authentication Type
  *   - Choices: `open`, `web_auth`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/wireless_ssid#l3_auth_type WirelessSsid#l3_auth_type}
  */
  readonly l3AuthType?: string;
  /**
  * When set to true, MAC Filtering will be activated, allowing control over network access based on the MAC address of the device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/wireless_ssid#mac_filtering WirelessSsid#mac_filtering}
  */
  readonly macFiltering?: boolean | cdktf.IResolvable;
  /**
  * Management Frame Protection Client
  *   - Choices: `OPTIONAL`, `DISABLED`, `REQUIRED`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/wireless_ssid#mft_client_protection WirelessSsid#mft_client_protection}
  */
  readonly mftClientProtection?: string;
  /**
  * Multi PSK Settings (Only applicable for SSID with PERSONAL auth type and PSK)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/wireless_ssid#multi_psk_settings WirelessSsid#multi_psk_settings}
  */
  readonly multiPskSettings?: WirelessSsidMultiPskSettings[] | cdktf.IResolvable;
  /**
  * Nas Options
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/wireless_ssid#nas_options WirelessSsid#nas_options}
  */
  readonly nasOptions?: string[];
  /**
  * The Neighbor List feature is enabled when it is set to true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/wireless_ssid#neighbor_list WirelessSsid#neighbor_list}
  */
  readonly neighborList?: boolean | cdktf.IResolvable;
  /**
  * Open SSID which is already created in the design and not associated to any other OPEN-SECURED SSID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/wireless_ssid#open_ssid WirelessSsid#open_ssid}
  */
  readonly openSsid?: string;
  /**
  * Passphrase (Only applicable for SSID with PERSONAL security level). Passphrase needs to be between 8 and 63 characters for ASCII type. HEX passphrase needs to be 64 characters
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/wireless_ssid#passphrase WirelessSsid#passphrase}
  */
  readonly passphrase?: string;
  /**
  * Applicable only for Enterprise SSIDs. When set to True, Posturing will enabled. Required to be set to True if ACL needs to be mapped for Enterprise SSID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/wireless_ssid#posturing WirelessSsid#posturing}
  */
  readonly posturing?: boolean | cdktf.IResolvable;
  /**
  * WLAN Profile Name, if not passed autogenerated profile name will be assigned. The same wlanProfileName will also be used for policyProfileName
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/wireless_ssid#profile_name WirelessSsid#profile_name}
  */
  readonly profileName?: string;
  /**
  * (REQUIRED is applicable for authType WPA3_PERSONAL, WPA3_ENTERPRISE, OPEN_SECURED) and (OPTIONAL/REQUIRED is applicable for authType WPA2_WPA3_PERSONAL and WPA2_WPA3_ENTERPRISE)
  *   - Choices: `OPTIONAL`, `DISABLED`, `REQUIRED`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/wireless_ssid#protected_management_frame WirelessSsid#protected_management_frame}
  */
  readonly protectedManagementFrame?: string;
  /**
  * Deny clients using randomized MAC addresses when set to true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/wireless_ssid#random_mac_filter WirelessSsid#random_mac_filter}
  */
  readonly randomMacFilter?: boolean | cdktf.IResolvable;
  /**
  * When set to true, the Robust Security Network (RSN) Cipher Suite CCMP128 encryption protocol is activated
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/wireless_ssid#rsn_cipher_suite_ccmp128 WirelessSsid#rsn_cipher_suite_ccmp128}
  */
  readonly rsnCipherSuiteCcmp128?: boolean | cdktf.IResolvable;
  /**
  * When set to true, the Robust Security Network (RSN) Cipher Suite CCMP256 encryption protocol is activated
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/wireless_ssid#rsn_cipher_suite_ccmp256 WirelessSsid#rsn_cipher_suite_ccmp256}
  */
  readonly rsnCipherSuiteCcmp256?: boolean | cdktf.IResolvable;
  /**
  * When set to true, the Robust Security Network (RSN) Cipher Suite GCMP128 encryption protocol is activated
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/wireless_ssid#rsn_cipher_suite_gcmp128 WirelessSsid#rsn_cipher_suite_gcmp128}
  */
  readonly rsnCipherSuiteGcmp128?: boolean | cdktf.IResolvable;
  /**
  * When set to true, the Robust Security Network (RSN) Cipher Suite GCMP256 encryption protocol is activated
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/wireless_ssid#rsn_cipher_suite_gcmp256 WirelessSsid#rsn_cipher_suite_gcmp256}
  */
  readonly rsnCipherSuiteGcmp256?: boolean | cdktf.IResolvable;
  /**
  * This denotes the allotted time span, expressed in seconds, before a session is automatically terminated due to inactivity
  *   - Range: `1`-`86400`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/wireless_ssid#session_timeout WirelessSsid#session_timeout}
  */
  readonly sessionTimeout?: number;
  /**
  * Turn on the feature that imposes a time limit on user sessions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/wireless_ssid#session_timeout_enable WirelessSsid#session_timeout_enable}
  */
  readonly sessionTimeoutEnable?: boolean | cdktf.IResolvable;
  /**
  * Site ID - only site level Global is supported
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/wireless_ssid#site_id WirelessSsid#site_id}
  */
  readonly siteId: string;
  /**
  * When set to true, this will activate the timeout settings that apply to clients in sleep mode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/wireless_ssid#sleeping_client WirelessSsid#sleeping_client}
  */
  readonly sleepingClient?: boolean | cdktf.IResolvable;
  /**
  * This refers to the amount of time, measured in minutes, before a sleeping (inactive) client is timed out of the network
  *   - Range: `10`-`43200`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/wireless_ssid#sleeping_client_timeout WirelessSsid#sleeping_client_timeout}
  */
  readonly sleepingClientTimeout?: number;
  /**
  * Name of the SSID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/wireless_ssid#ssid WirelessSsid#ssid}
  */
  readonly ssid: string;
  /**
  * Radio Policy
  *   - Choices: `Triple band operation(2.4GHz, 5GHz and 6GHz)`, `5GHz only`, `2.4GHz only`, `6GHz only`, `2.4 and 5 GHz`, `2.4 and 6 GHz`, `5 and 6 GHz`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/wireless_ssid#ssid_radio_type WirelessSsid#ssid_radio_type}
  */
  readonly ssidRadioType?: string;
  /**
  * When set to true, the Web-Passthrough feature will be activated for the Guest SSID, allowing guests to bypass certain login requirements
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/wireless_ssid#web_passthrough WirelessSsid#web_passthrough}
  */
  readonly webPassthrough?: boolean | cdktf.IResolvable;
  /**
  * Band select is allowed only when band options selected contains at least 2.4 GHz and 5 GHz band
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/wireless_ssid#wlan_band_select WirelessSsid#wlan_band_select}
  */
  readonly wlanBandSelect?: boolean | cdktf.IResolvable;
  /**
  * Wlan Type
  *   - Choices: `Enterprise`, `Guest`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/wireless_ssid#wlan_type WirelessSsid#wlan_type}
  */
  readonly wlanType: string;
}
export interface WirelessSsidMultiPskSettings {
  /**
  * Passphrase
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/wireless_ssid#passphrase WirelessSsid#passphrase}
  */
  readonly passphrase?: string;
  /**
  * Passphrase Type
  *   - Choices: `ASCII`, `HEX`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/wireless_ssid#passphrase_type WirelessSsid#passphrase_type}
  */
  readonly passphraseType?: string;
  /**
  * Priority
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/wireless_ssid#priority WirelessSsid#priority}
  */
  readonly priority: string;
}

export function wirelessSsidMultiPskSettingsToTerraform(struct?: WirelessSsidMultiPskSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    passphrase: cdktf.stringToTerraform(struct!.passphrase),
    passphrase_type: cdktf.stringToTerraform(struct!.passphraseType),
    priority: cdktf.stringToTerraform(struct!.priority),
  }
}


export function wirelessSsidMultiPskSettingsToHclTerraform(struct?: WirelessSsidMultiPskSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    passphrase: {
      value: cdktf.stringToHclTerraform(struct!.passphrase),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    passphrase_type: {
      value: cdktf.stringToHclTerraform(struct!.passphraseType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    priority: {
      value: cdktf.stringToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WirelessSsidMultiPskSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WirelessSsidMultiPskSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._passphrase !== undefined) {
      hasAnyValues = true;
      internalValueResult.passphrase = this._passphrase;
    }
    if (this._passphraseType !== undefined) {
      hasAnyValues = true;
      internalValueResult.passphraseType = this._passphraseType;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WirelessSsidMultiPskSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._passphrase = undefined;
      this._passphraseType = undefined;
      this._priority = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._passphrase = value.passphrase;
      this._passphraseType = value.passphraseType;
      this._priority = value.priority;
    }
  }

  // passphrase - computed: false, optional: true, required: false
  private _passphrase?: string; 
  public get passphrase() {
    return this.getStringAttribute('passphrase');
  }
  public set passphrase(value: string) {
    this._passphrase = value;
  }
  public resetPassphrase() {
    this._passphrase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passphraseInput() {
    return this._passphrase;
  }

  // passphrase_type - computed: false, optional: true, required: false
  private _passphraseType?: string; 
  public get passphraseType() {
    return this.getStringAttribute('passphrase_type');
  }
  public set passphraseType(value: string) {
    this._passphraseType = value;
  }
  public resetPassphraseType() {
    this._passphraseType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passphraseTypeInput() {
    return this._passphraseType;
  }

  // priority - computed: false, optional: false, required: true
  private _priority?: string; 
  public get priority() {
    return this.getStringAttribute('priority');
  }
  public set priority(value: string) {
    this._priority = value;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }
}

export class WirelessSsidMultiPskSettingsList extends cdktf.ComplexList {
  public internalValue? : WirelessSsidMultiPskSettings[] | cdktf.IResolvable

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
  public get(index: number): WirelessSsidMultiPskSettingsOutputReference {
    return new WirelessSsidMultiPskSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/wireless_ssid catalystcenter_wireless_ssid}
*/
export class WirelessSsid extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "catalystcenter_wireless_ssid";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WirelessSsid resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WirelessSsid to import
  * @param importFromId The id of the existing WirelessSsid that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/wireless_ssid#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WirelessSsid to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "catalystcenter_wireless_ssid", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/wireless_ssid catalystcenter_wireless_ssid} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WirelessSsidConfig
  */
  public constructor(scope: Construct, id: string, config: WirelessSsidConfig) {
    super(scope, id, {
      terraformResourceType: 'catalystcenter_wireless_ssid',
      terraformGeneratorMetadata: {
        providerName: 'catalystcenter',
        providerVersion: '0.4.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._aaaOverride = config.aaaOverride;
    this._acctServers = config.acctServers;
    this._aclName = config.aclName;
    this._apBeaconProtection = config.apBeaconProtection;
    this._authKey8021X = config.authKey8021X;
    this._authKey8021XPlusFt = config.authKey8021XPlusFt;
    this._authKey8021XSha256 = config.authKey8021XSha256;
    this._authKeyEasyPsk = config.authKeyEasyPsk;
    this._authKeyEasyPskSha256 = config.authKeyEasyPskSha256;
    this._authKeyOwe = config.authKeyOwe;
    this._authKeyPsk = config.authKeyPsk;
    this._authKeyPskPlusFt = config.authKeyPskPlusFt;
    this._authKeySae = config.authKeySae;
    this._authKeySaeExt = config.authKeySaeExt;
    this._authKeySaeExtPlusFt = config.authKeySaeExtPlusFt;
    this._authKeySaePlusFt = config.authKeySaePlusFt;
    this._authKeySuiteB1921X = config.authKeySuiteB1921X;
    this._authKeySuiteB1X = config.authKeySuiteB1X;
    this._authServer = config.authServer;
    this._authServers = config.authServers;
    this._authType = config.authType;
    this._basicServiceSetClientIdleTimeout = config.basicServiceSetClientIdleTimeout;
    this._basicServiceSetMaxIdle = config.basicServiceSetMaxIdle;
    this._broadcastSsid = config.broadcastSsid;
    this._cckm = config.cckm;
    this._cckmTsfTolerance = config.cckmTsfTolerance;
    this._clientExclusion = config.clientExclusion;
    this._clientExclusionTimeout = config.clientExclusionTimeout;
    this._clientRateLimit = config.clientRateLimit;
    this._coverageHoleDetection = config.coverageHoleDetection;
    this._directedMulticastService = config.directedMulticastService;
    this._egressQos = config.egressQos;
    this._enabled = config.enabled;
    this._externalAuthIpAddress = config.externalAuthIpAddress;
    this._fastLane = config.fastLane;
    this._fastTransition = config.fastTransition;
    this._fastTransitionOverTheDistributedSystem = config.fastTransitionOverTheDistributedSystem;
    this._ghz24Policy = config.ghz24Policy;
    this._ghz6PolicyClientSteering = config.ghz6PolicyClientSteering;
    this._hex = config.hex;
    this._ingressQos = config.ingressQos;
    this._l3AuthType = config.l3AuthType;
    this._macFiltering = config.macFiltering;
    this._mftClientProtection = config.mftClientProtection;
    this._multiPskSettings.internalValue = config.multiPskSettings;
    this._nasOptions = config.nasOptions;
    this._neighborList = config.neighborList;
    this._openSsid = config.openSsid;
    this._passphrase = config.passphrase;
    this._posturing = config.posturing;
    this._profileName = config.profileName;
    this._protectedManagementFrame = config.protectedManagementFrame;
    this._randomMacFilter = config.randomMacFilter;
    this._rsnCipherSuiteCcmp128 = config.rsnCipherSuiteCcmp128;
    this._rsnCipherSuiteCcmp256 = config.rsnCipherSuiteCcmp256;
    this._rsnCipherSuiteGcmp128 = config.rsnCipherSuiteGcmp128;
    this._rsnCipherSuiteGcmp256 = config.rsnCipherSuiteGcmp256;
    this._sessionTimeout = config.sessionTimeout;
    this._sessionTimeoutEnable = config.sessionTimeoutEnable;
    this._siteId = config.siteId;
    this._sleepingClient = config.sleepingClient;
    this._sleepingClientTimeout = config.sleepingClientTimeout;
    this._ssid = config.ssid;
    this._ssidRadioType = config.ssidRadioType;
    this._webPassthrough = config.webPassthrough;
    this._wlanBandSelect = config.wlanBandSelect;
    this._wlanType = config.wlanType;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // aaa_override - computed: false, optional: true, required: false
  private _aaaOverride?: boolean | cdktf.IResolvable; 
  public get aaaOverride() {
    return this.getBooleanAttribute('aaa_override');
  }
  public set aaaOverride(value: boolean | cdktf.IResolvable) {
    this._aaaOverride = value;
  }
  public resetAaaOverride() {
    this._aaaOverride = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aaaOverrideInput() {
    return this._aaaOverride;
  }

  // acct_servers - computed: false, optional: true, required: false
  private _acctServers?: string[]; 
  public get acctServers() {
    return cdktf.Fn.tolist(this.getListAttribute('acct_servers'));
  }
  public set acctServers(value: string[]) {
    this._acctServers = value;
  }
  public resetAcctServers() {
    this._acctServers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acctServersInput() {
    return this._acctServers;
  }

  // acl_name - computed: false, optional: true, required: false
  private _aclName?: string; 
  public get aclName() {
    return this.getStringAttribute('acl_name');
  }
  public set aclName(value: string) {
    this._aclName = value;
  }
  public resetAclName() {
    this._aclName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aclNameInput() {
    return this._aclName;
  }

  // ap_beacon_protection - computed: false, optional: true, required: false
  private _apBeaconProtection?: boolean | cdktf.IResolvable; 
  public get apBeaconProtection() {
    return this.getBooleanAttribute('ap_beacon_protection');
  }
  public set apBeaconProtection(value: boolean | cdktf.IResolvable) {
    this._apBeaconProtection = value;
  }
  public resetApBeaconProtection() {
    this._apBeaconProtection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apBeaconProtectionInput() {
    return this._apBeaconProtection;
  }

  // auth_key8021x - computed: false, optional: true, required: false
  private _authKey8021X?: boolean | cdktf.IResolvable; 
  public get authKey8021X() {
    return this.getBooleanAttribute('auth_key8021x');
  }
  public set authKey8021X(value: boolean | cdktf.IResolvable) {
    this._authKey8021X = value;
  }
  public resetAuthKey8021X() {
    this._authKey8021X = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authKey8021XInput() {
    return this._authKey8021X;
  }

  // auth_key8021x_plus_ft - computed: false, optional: true, required: false
  private _authKey8021XPlusFt?: boolean | cdktf.IResolvable; 
  public get authKey8021XPlusFt() {
    return this.getBooleanAttribute('auth_key8021x_plus_ft');
  }
  public set authKey8021XPlusFt(value: boolean | cdktf.IResolvable) {
    this._authKey8021XPlusFt = value;
  }
  public resetAuthKey8021XPlusFt() {
    this._authKey8021XPlusFt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authKey8021XPlusFtInput() {
    return this._authKey8021XPlusFt;
  }

  // auth_key8021x_sha256 - computed: false, optional: true, required: false
  private _authKey8021XSha256?: boolean | cdktf.IResolvable; 
  public get authKey8021XSha256() {
    return this.getBooleanAttribute('auth_key8021x_sha256');
  }
  public set authKey8021XSha256(value: boolean | cdktf.IResolvable) {
    this._authKey8021XSha256 = value;
  }
  public resetAuthKey8021XSha256() {
    this._authKey8021XSha256 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authKey8021XSha256Input() {
    return this._authKey8021XSha256;
  }

  // auth_key_easy_psk - computed: false, optional: true, required: false
  private _authKeyEasyPsk?: boolean | cdktf.IResolvable; 
  public get authKeyEasyPsk() {
    return this.getBooleanAttribute('auth_key_easy_psk');
  }
  public set authKeyEasyPsk(value: boolean | cdktf.IResolvable) {
    this._authKeyEasyPsk = value;
  }
  public resetAuthKeyEasyPsk() {
    this._authKeyEasyPsk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authKeyEasyPskInput() {
    return this._authKeyEasyPsk;
  }

  // auth_key_easy_psk_sha256 - computed: false, optional: true, required: false
  private _authKeyEasyPskSha256?: boolean | cdktf.IResolvable; 
  public get authKeyEasyPskSha256() {
    return this.getBooleanAttribute('auth_key_easy_psk_sha256');
  }
  public set authKeyEasyPskSha256(value: boolean | cdktf.IResolvable) {
    this._authKeyEasyPskSha256 = value;
  }
  public resetAuthKeyEasyPskSha256() {
    this._authKeyEasyPskSha256 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authKeyEasyPskSha256Input() {
    return this._authKeyEasyPskSha256;
  }

  // auth_key_owe - computed: false, optional: true, required: false
  private _authKeyOwe?: boolean | cdktf.IResolvable; 
  public get authKeyOwe() {
    return this.getBooleanAttribute('auth_key_owe');
  }
  public set authKeyOwe(value: boolean | cdktf.IResolvable) {
    this._authKeyOwe = value;
  }
  public resetAuthKeyOwe() {
    this._authKeyOwe = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authKeyOweInput() {
    return this._authKeyOwe;
  }

  // auth_key_psk - computed: false, optional: true, required: false
  private _authKeyPsk?: boolean | cdktf.IResolvable; 
  public get authKeyPsk() {
    return this.getBooleanAttribute('auth_key_psk');
  }
  public set authKeyPsk(value: boolean | cdktf.IResolvable) {
    this._authKeyPsk = value;
  }
  public resetAuthKeyPsk() {
    this._authKeyPsk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authKeyPskInput() {
    return this._authKeyPsk;
  }

  // auth_key_psk_plus_ft - computed: false, optional: true, required: false
  private _authKeyPskPlusFt?: boolean | cdktf.IResolvable; 
  public get authKeyPskPlusFt() {
    return this.getBooleanAttribute('auth_key_psk_plus_ft');
  }
  public set authKeyPskPlusFt(value: boolean | cdktf.IResolvable) {
    this._authKeyPskPlusFt = value;
  }
  public resetAuthKeyPskPlusFt() {
    this._authKeyPskPlusFt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authKeyPskPlusFtInput() {
    return this._authKeyPskPlusFt;
  }

  // auth_key_sae - computed: false, optional: true, required: false
  private _authKeySae?: boolean | cdktf.IResolvable; 
  public get authKeySae() {
    return this.getBooleanAttribute('auth_key_sae');
  }
  public set authKeySae(value: boolean | cdktf.IResolvable) {
    this._authKeySae = value;
  }
  public resetAuthKeySae() {
    this._authKeySae = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authKeySaeInput() {
    return this._authKeySae;
  }

  // auth_key_sae_ext - computed: false, optional: true, required: false
  private _authKeySaeExt?: boolean | cdktf.IResolvable; 
  public get authKeySaeExt() {
    return this.getBooleanAttribute('auth_key_sae_ext');
  }
  public set authKeySaeExt(value: boolean | cdktf.IResolvable) {
    this._authKeySaeExt = value;
  }
  public resetAuthKeySaeExt() {
    this._authKeySaeExt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authKeySaeExtInput() {
    return this._authKeySaeExt;
  }

  // auth_key_sae_ext_plus_ft - computed: false, optional: true, required: false
  private _authKeySaeExtPlusFt?: boolean | cdktf.IResolvable; 
  public get authKeySaeExtPlusFt() {
    return this.getBooleanAttribute('auth_key_sae_ext_plus_ft');
  }
  public set authKeySaeExtPlusFt(value: boolean | cdktf.IResolvable) {
    this._authKeySaeExtPlusFt = value;
  }
  public resetAuthKeySaeExtPlusFt() {
    this._authKeySaeExtPlusFt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authKeySaeExtPlusFtInput() {
    return this._authKeySaeExtPlusFt;
  }

  // auth_key_sae_plus_ft - computed: false, optional: true, required: false
  private _authKeySaePlusFt?: boolean | cdktf.IResolvable; 
  public get authKeySaePlusFt() {
    return this.getBooleanAttribute('auth_key_sae_plus_ft');
  }
  public set authKeySaePlusFt(value: boolean | cdktf.IResolvable) {
    this._authKeySaePlusFt = value;
  }
  public resetAuthKeySaePlusFt() {
    this._authKeySaePlusFt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authKeySaePlusFtInput() {
    return this._authKeySaePlusFt;
  }

  // auth_key_suite_b1921x - computed: false, optional: true, required: false
  private _authKeySuiteB1921X?: boolean | cdktf.IResolvable; 
  public get authKeySuiteB1921X() {
    return this.getBooleanAttribute('auth_key_suite_b1921x');
  }
  public set authKeySuiteB1921X(value: boolean | cdktf.IResolvable) {
    this._authKeySuiteB1921X = value;
  }
  public resetAuthKeySuiteB1921X() {
    this._authKeySuiteB1921X = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authKeySuiteB1921XInput() {
    return this._authKeySuiteB1921X;
  }

  // auth_key_suite_b1x - computed: false, optional: true, required: false
  private _authKeySuiteB1X?: boolean | cdktf.IResolvable; 
  public get authKeySuiteB1X() {
    return this.getBooleanAttribute('auth_key_suite_b1x');
  }
  public set authKeySuiteB1X(value: boolean | cdktf.IResolvable) {
    this._authKeySuiteB1X = value;
  }
  public resetAuthKeySuiteB1X() {
    this._authKeySuiteB1X = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authKeySuiteB1XInput() {
    return this._authKeySuiteB1X;
  }

  // auth_server - computed: false, optional: true, required: false
  private _authServer?: string; 
  public get authServer() {
    return this.getStringAttribute('auth_server');
  }
  public set authServer(value: string) {
    this._authServer = value;
  }
  public resetAuthServer() {
    this._authServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authServerInput() {
    return this._authServer;
  }

  // auth_servers - computed: false, optional: true, required: false
  private _authServers?: string[]; 
  public get authServers() {
    return cdktf.Fn.tolist(this.getListAttribute('auth_servers'));
  }
  public set authServers(value: string[]) {
    this._authServers = value;
  }
  public resetAuthServers() {
    this._authServers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authServersInput() {
    return this._authServers;
  }

  // auth_type - computed: false, optional: false, required: true
  private _authType?: string; 
  public get authType() {
    return this.getStringAttribute('auth_type');
  }
  public set authType(value: string) {
    this._authType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authTypeInput() {
    return this._authType;
  }

  // basic_service_set_client_idle_timeout - computed: false, optional: true, required: false
  private _basicServiceSetClientIdleTimeout?: number; 
  public get basicServiceSetClientIdleTimeout() {
    return this.getNumberAttribute('basic_service_set_client_idle_timeout');
  }
  public set basicServiceSetClientIdleTimeout(value: number) {
    this._basicServiceSetClientIdleTimeout = value;
  }
  public resetBasicServiceSetClientIdleTimeout() {
    this._basicServiceSetClientIdleTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get basicServiceSetClientIdleTimeoutInput() {
    return this._basicServiceSetClientIdleTimeout;
  }

  // basic_service_set_max_idle - computed: false, optional: true, required: false
  private _basicServiceSetMaxIdle?: boolean | cdktf.IResolvable; 
  public get basicServiceSetMaxIdle() {
    return this.getBooleanAttribute('basic_service_set_max_idle');
  }
  public set basicServiceSetMaxIdle(value: boolean | cdktf.IResolvable) {
    this._basicServiceSetMaxIdle = value;
  }
  public resetBasicServiceSetMaxIdle() {
    this._basicServiceSetMaxIdle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get basicServiceSetMaxIdleInput() {
    return this._basicServiceSetMaxIdle;
  }

  // broadcast_ssid - computed: false, optional: true, required: false
  private _broadcastSsid?: boolean | cdktf.IResolvable; 
  public get broadcastSsid() {
    return this.getBooleanAttribute('broadcast_ssid');
  }
  public set broadcastSsid(value: boolean | cdktf.IResolvable) {
    this._broadcastSsid = value;
  }
  public resetBroadcastSsid() {
    this._broadcastSsid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get broadcastSsidInput() {
    return this._broadcastSsid;
  }

  // cckm - computed: false, optional: true, required: false
  private _cckm?: boolean | cdktf.IResolvable; 
  public get cckm() {
    return this.getBooleanAttribute('cckm');
  }
  public set cckm(value: boolean | cdktf.IResolvable) {
    this._cckm = value;
  }
  public resetCckm() {
    this._cckm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cckmInput() {
    return this._cckm;
  }

  // cckm_tsf_tolerance - computed: false, optional: true, required: false
  private _cckmTsfTolerance?: number; 
  public get cckmTsfTolerance() {
    return this.getNumberAttribute('cckm_tsf_tolerance');
  }
  public set cckmTsfTolerance(value: number) {
    this._cckmTsfTolerance = value;
  }
  public resetCckmTsfTolerance() {
    this._cckmTsfTolerance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cckmTsfToleranceInput() {
    return this._cckmTsfTolerance;
  }

  // client_exclusion - computed: false, optional: true, required: false
  private _clientExclusion?: boolean | cdktf.IResolvable; 
  public get clientExclusion() {
    return this.getBooleanAttribute('client_exclusion');
  }
  public set clientExclusion(value: boolean | cdktf.IResolvable) {
    this._clientExclusion = value;
  }
  public resetClientExclusion() {
    this._clientExclusion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientExclusionInput() {
    return this._clientExclusion;
  }

  // client_exclusion_timeout - computed: false, optional: true, required: false
  private _clientExclusionTimeout?: number; 
  public get clientExclusionTimeout() {
    return this.getNumberAttribute('client_exclusion_timeout');
  }
  public set clientExclusionTimeout(value: number) {
    this._clientExclusionTimeout = value;
  }
  public resetClientExclusionTimeout() {
    this._clientExclusionTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientExclusionTimeoutInput() {
    return this._clientExclusionTimeout;
  }

  // client_rate_limit - computed: false, optional: true, required: false
  private _clientRateLimit?: number; 
  public get clientRateLimit() {
    return this.getNumberAttribute('client_rate_limit');
  }
  public set clientRateLimit(value: number) {
    this._clientRateLimit = value;
  }
  public resetClientRateLimit() {
    this._clientRateLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientRateLimitInput() {
    return this._clientRateLimit;
  }

  // coverage_hole_detection - computed: false, optional: true, required: false
  private _coverageHoleDetection?: boolean | cdktf.IResolvable; 
  public get coverageHoleDetection() {
    return this.getBooleanAttribute('coverage_hole_detection');
  }
  public set coverageHoleDetection(value: boolean | cdktf.IResolvable) {
    this._coverageHoleDetection = value;
  }
  public resetCoverageHoleDetection() {
    this._coverageHoleDetection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get coverageHoleDetectionInput() {
    return this._coverageHoleDetection;
  }

  // directed_multicast_service - computed: false, optional: true, required: false
  private _directedMulticastService?: boolean | cdktf.IResolvable; 
  public get directedMulticastService() {
    return this.getBooleanAttribute('directed_multicast_service');
  }
  public set directedMulticastService(value: boolean | cdktf.IResolvable) {
    this._directedMulticastService = value;
  }
  public resetDirectedMulticastService() {
    this._directedMulticastService = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directedMulticastServiceInput() {
    return this._directedMulticastService;
  }

  // egress_qos - computed: false, optional: true, required: false
  private _egressQos?: string; 
  public get egressQos() {
    return this.getStringAttribute('egress_qos');
  }
  public set egressQos(value: string) {
    this._egressQos = value;
  }
  public resetEgressQos() {
    this._egressQos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get egressQosInput() {
    return this._egressQos;
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

  // external_auth_ip_address - computed: false, optional: true, required: false
  private _externalAuthIpAddress?: string; 
  public get externalAuthIpAddress() {
    return this.getStringAttribute('external_auth_ip_address');
  }
  public set externalAuthIpAddress(value: string) {
    this._externalAuthIpAddress = value;
  }
  public resetExternalAuthIpAddress() {
    this._externalAuthIpAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalAuthIpAddressInput() {
    return this._externalAuthIpAddress;
  }

  // fast_lane - computed: false, optional: true, required: false
  private _fastLane?: boolean | cdktf.IResolvable; 
  public get fastLane() {
    return this.getBooleanAttribute('fast_lane');
  }
  public set fastLane(value: boolean | cdktf.IResolvable) {
    this._fastLane = value;
  }
  public resetFastLane() {
    this._fastLane = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fastLaneInput() {
    return this._fastLane;
  }

  // fast_transition - computed: false, optional: true, required: false
  private _fastTransition?: string; 
  public get fastTransition() {
    return this.getStringAttribute('fast_transition');
  }
  public set fastTransition(value: string) {
    this._fastTransition = value;
  }
  public resetFastTransition() {
    this._fastTransition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fastTransitionInput() {
    return this._fastTransition;
  }

  // fast_transition_over_the_distributed_system - computed: false, optional: true, required: false
  private _fastTransitionOverTheDistributedSystem?: boolean | cdktf.IResolvable; 
  public get fastTransitionOverTheDistributedSystem() {
    return this.getBooleanAttribute('fast_transition_over_the_distributed_system');
  }
  public set fastTransitionOverTheDistributedSystem(value: boolean | cdktf.IResolvable) {
    this._fastTransitionOverTheDistributedSystem = value;
  }
  public resetFastTransitionOverTheDistributedSystem() {
    this._fastTransitionOverTheDistributedSystem = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fastTransitionOverTheDistributedSystemInput() {
    return this._fastTransitionOverTheDistributedSystem;
  }

  // ghz24_policy - computed: false, optional: true, required: false
  private _ghz24Policy?: string; 
  public get ghz24Policy() {
    return this.getStringAttribute('ghz24_policy');
  }
  public set ghz24Policy(value: string) {
    this._ghz24Policy = value;
  }
  public resetGhz24Policy() {
    this._ghz24Policy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ghz24PolicyInput() {
    return this._ghz24Policy;
  }

  // ghz6_policy_client_steering - computed: false, optional: true, required: false
  private _ghz6PolicyClientSteering?: boolean | cdktf.IResolvable; 
  public get ghz6PolicyClientSteering() {
    return this.getBooleanAttribute('ghz6_policy_client_steering');
  }
  public set ghz6PolicyClientSteering(value: boolean | cdktf.IResolvable) {
    this._ghz6PolicyClientSteering = value;
  }
  public resetGhz6PolicyClientSteering() {
    this._ghz6PolicyClientSteering = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ghz6PolicyClientSteeringInput() {
    return this._ghz6PolicyClientSteering;
  }

  // hex - computed: false, optional: true, required: false
  private _hex?: boolean | cdktf.IResolvable; 
  public get hex() {
    return this.getBooleanAttribute('hex');
  }
  public set hex(value: boolean | cdktf.IResolvable) {
    this._hex = value;
  }
  public resetHex() {
    this._hex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hexInput() {
    return this._hex;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ingress_qos - computed: false, optional: true, required: false
  private _ingressQos?: string; 
  public get ingressQos() {
    return this.getStringAttribute('ingress_qos');
  }
  public set ingressQos(value: string) {
    this._ingressQos = value;
  }
  public resetIngressQos() {
    this._ingressQos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ingressQosInput() {
    return this._ingressQos;
  }

  // l3_auth_type - computed: false, optional: true, required: false
  private _l3AuthType?: string; 
  public get l3AuthType() {
    return this.getStringAttribute('l3_auth_type');
  }
  public set l3AuthType(value: string) {
    this._l3AuthType = value;
  }
  public resetL3AuthType() {
    this._l3AuthType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l3AuthTypeInput() {
    return this._l3AuthType;
  }

  // mac_filtering - computed: false, optional: true, required: false
  private _macFiltering?: boolean | cdktf.IResolvable; 
  public get macFiltering() {
    return this.getBooleanAttribute('mac_filtering');
  }
  public set macFiltering(value: boolean | cdktf.IResolvable) {
    this._macFiltering = value;
  }
  public resetMacFiltering() {
    this._macFiltering = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macFilteringInput() {
    return this._macFiltering;
  }

  // mft_client_protection - computed: false, optional: true, required: false
  private _mftClientProtection?: string; 
  public get mftClientProtection() {
    return this.getStringAttribute('mft_client_protection');
  }
  public set mftClientProtection(value: string) {
    this._mftClientProtection = value;
  }
  public resetMftClientProtection() {
    this._mftClientProtection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mftClientProtectionInput() {
    return this._mftClientProtection;
  }

  // multi_psk_settings - computed: false, optional: true, required: false
  private _multiPskSettings = new WirelessSsidMultiPskSettingsList(this, "multi_psk_settings", false);
  public get multiPskSettings() {
    return this._multiPskSettings;
  }
  public putMultiPskSettings(value: WirelessSsidMultiPskSettings[] | cdktf.IResolvable) {
    this._multiPskSettings.internalValue = value;
  }
  public resetMultiPskSettings() {
    this._multiPskSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiPskSettingsInput() {
    return this._multiPskSettings.internalValue;
  }

  // nas_options - computed: false, optional: true, required: false
  private _nasOptions?: string[]; 
  public get nasOptions() {
    return cdktf.Fn.tolist(this.getListAttribute('nas_options'));
  }
  public set nasOptions(value: string[]) {
    this._nasOptions = value;
  }
  public resetNasOptions() {
    this._nasOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nasOptionsInput() {
    return this._nasOptions;
  }

  // neighbor_list - computed: false, optional: true, required: false
  private _neighborList?: boolean | cdktf.IResolvable; 
  public get neighborList() {
    return this.getBooleanAttribute('neighbor_list');
  }
  public set neighborList(value: boolean | cdktf.IResolvable) {
    this._neighborList = value;
  }
  public resetNeighborList() {
    this._neighborList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get neighborListInput() {
    return this._neighborList;
  }

  // open_ssid - computed: false, optional: true, required: false
  private _openSsid?: string; 
  public get openSsid() {
    return this.getStringAttribute('open_ssid');
  }
  public set openSsid(value: string) {
    this._openSsid = value;
  }
  public resetOpenSsid() {
    this._openSsid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get openSsidInput() {
    return this._openSsid;
  }

  // passphrase - computed: false, optional: true, required: false
  private _passphrase?: string; 
  public get passphrase() {
    return this.getStringAttribute('passphrase');
  }
  public set passphrase(value: string) {
    this._passphrase = value;
  }
  public resetPassphrase() {
    this._passphrase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passphraseInput() {
    return this._passphrase;
  }

  // posturing - computed: false, optional: true, required: false
  private _posturing?: boolean | cdktf.IResolvable; 
  public get posturing() {
    return this.getBooleanAttribute('posturing');
  }
  public set posturing(value: boolean | cdktf.IResolvable) {
    this._posturing = value;
  }
  public resetPosturing() {
    this._posturing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get posturingInput() {
    return this._posturing;
  }

  // profile_name - computed: false, optional: true, required: false
  private _profileName?: string; 
  public get profileName() {
    return this.getStringAttribute('profile_name');
  }
  public set profileName(value: string) {
    this._profileName = value;
  }
  public resetProfileName() {
    this._profileName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profileNameInput() {
    return this._profileName;
  }

  // protected_management_frame - computed: false, optional: true, required: false
  private _protectedManagementFrame?: string; 
  public get protectedManagementFrame() {
    return this.getStringAttribute('protected_management_frame');
  }
  public set protectedManagementFrame(value: string) {
    this._protectedManagementFrame = value;
  }
  public resetProtectedManagementFrame() {
    this._protectedManagementFrame = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protectedManagementFrameInput() {
    return this._protectedManagementFrame;
  }

  // random_mac_filter - computed: false, optional: true, required: false
  private _randomMacFilter?: boolean | cdktf.IResolvable; 
  public get randomMacFilter() {
    return this.getBooleanAttribute('random_mac_filter');
  }
  public set randomMacFilter(value: boolean | cdktf.IResolvable) {
    this._randomMacFilter = value;
  }
  public resetRandomMacFilter() {
    this._randomMacFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get randomMacFilterInput() {
    return this._randomMacFilter;
  }

  // rsn_cipher_suite_ccmp128 - computed: false, optional: true, required: false
  private _rsnCipherSuiteCcmp128?: boolean | cdktf.IResolvable; 
  public get rsnCipherSuiteCcmp128() {
    return this.getBooleanAttribute('rsn_cipher_suite_ccmp128');
  }
  public set rsnCipherSuiteCcmp128(value: boolean | cdktf.IResolvable) {
    this._rsnCipherSuiteCcmp128 = value;
  }
  public resetRsnCipherSuiteCcmp128() {
    this._rsnCipherSuiteCcmp128 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rsnCipherSuiteCcmp128Input() {
    return this._rsnCipherSuiteCcmp128;
  }

  // rsn_cipher_suite_ccmp256 - computed: false, optional: true, required: false
  private _rsnCipherSuiteCcmp256?: boolean | cdktf.IResolvable; 
  public get rsnCipherSuiteCcmp256() {
    return this.getBooleanAttribute('rsn_cipher_suite_ccmp256');
  }
  public set rsnCipherSuiteCcmp256(value: boolean | cdktf.IResolvable) {
    this._rsnCipherSuiteCcmp256 = value;
  }
  public resetRsnCipherSuiteCcmp256() {
    this._rsnCipherSuiteCcmp256 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rsnCipherSuiteCcmp256Input() {
    return this._rsnCipherSuiteCcmp256;
  }

  // rsn_cipher_suite_gcmp128 - computed: false, optional: true, required: false
  private _rsnCipherSuiteGcmp128?: boolean | cdktf.IResolvable; 
  public get rsnCipherSuiteGcmp128() {
    return this.getBooleanAttribute('rsn_cipher_suite_gcmp128');
  }
  public set rsnCipherSuiteGcmp128(value: boolean | cdktf.IResolvable) {
    this._rsnCipherSuiteGcmp128 = value;
  }
  public resetRsnCipherSuiteGcmp128() {
    this._rsnCipherSuiteGcmp128 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rsnCipherSuiteGcmp128Input() {
    return this._rsnCipherSuiteGcmp128;
  }

  // rsn_cipher_suite_gcmp256 - computed: false, optional: true, required: false
  private _rsnCipherSuiteGcmp256?: boolean | cdktf.IResolvable; 
  public get rsnCipherSuiteGcmp256() {
    return this.getBooleanAttribute('rsn_cipher_suite_gcmp256');
  }
  public set rsnCipherSuiteGcmp256(value: boolean | cdktf.IResolvable) {
    this._rsnCipherSuiteGcmp256 = value;
  }
  public resetRsnCipherSuiteGcmp256() {
    this._rsnCipherSuiteGcmp256 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rsnCipherSuiteGcmp256Input() {
    return this._rsnCipherSuiteGcmp256;
  }

  // session_timeout - computed: false, optional: true, required: false
  private _sessionTimeout?: number; 
  public get sessionTimeout() {
    return this.getNumberAttribute('session_timeout');
  }
  public set sessionTimeout(value: number) {
    this._sessionTimeout = value;
  }
  public resetSessionTimeout() {
    this._sessionTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionTimeoutInput() {
    return this._sessionTimeout;
  }

  // session_timeout_enable - computed: false, optional: true, required: false
  private _sessionTimeoutEnable?: boolean | cdktf.IResolvable; 
  public get sessionTimeoutEnable() {
    return this.getBooleanAttribute('session_timeout_enable');
  }
  public set sessionTimeoutEnable(value: boolean | cdktf.IResolvable) {
    this._sessionTimeoutEnable = value;
  }
  public resetSessionTimeoutEnable() {
    this._sessionTimeoutEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionTimeoutEnableInput() {
    return this._sessionTimeoutEnable;
  }

  // site_id - computed: false, optional: false, required: true
  private _siteId?: string; 
  public get siteId() {
    return this.getStringAttribute('site_id');
  }
  public set siteId(value: string) {
    this._siteId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get siteIdInput() {
    return this._siteId;
  }

  // sleeping_client - computed: false, optional: true, required: false
  private _sleepingClient?: boolean | cdktf.IResolvable; 
  public get sleepingClient() {
    return this.getBooleanAttribute('sleeping_client');
  }
  public set sleepingClient(value: boolean | cdktf.IResolvable) {
    this._sleepingClient = value;
  }
  public resetSleepingClient() {
    this._sleepingClient = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sleepingClientInput() {
    return this._sleepingClient;
  }

  // sleeping_client_timeout - computed: false, optional: true, required: false
  private _sleepingClientTimeout?: number; 
  public get sleepingClientTimeout() {
    return this.getNumberAttribute('sleeping_client_timeout');
  }
  public set sleepingClientTimeout(value: number) {
    this._sleepingClientTimeout = value;
  }
  public resetSleepingClientTimeout() {
    this._sleepingClientTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sleepingClientTimeoutInput() {
    return this._sleepingClientTimeout;
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

  // ssid_radio_type - computed: false, optional: true, required: false
  private _ssidRadioType?: string; 
  public get ssidRadioType() {
    return this.getStringAttribute('ssid_radio_type');
  }
  public set ssidRadioType(value: string) {
    this._ssidRadioType = value;
  }
  public resetSsidRadioType() {
    this._ssidRadioType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssidRadioTypeInput() {
    return this._ssidRadioType;
  }

  // web_passthrough - computed: false, optional: true, required: false
  private _webPassthrough?: boolean | cdktf.IResolvable; 
  public get webPassthrough() {
    return this.getBooleanAttribute('web_passthrough');
  }
  public set webPassthrough(value: boolean | cdktf.IResolvable) {
    this._webPassthrough = value;
  }
  public resetWebPassthrough() {
    this._webPassthrough = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webPassthroughInput() {
    return this._webPassthrough;
  }

  // wlan_band_select - computed: false, optional: true, required: false
  private _wlanBandSelect?: boolean | cdktf.IResolvable; 
  public get wlanBandSelect() {
    return this.getBooleanAttribute('wlan_band_select');
  }
  public set wlanBandSelect(value: boolean | cdktf.IResolvable) {
    this._wlanBandSelect = value;
  }
  public resetWlanBandSelect() {
    this._wlanBandSelect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wlanBandSelectInput() {
    return this._wlanBandSelect;
  }

  // wlan_type - computed: false, optional: false, required: true
  private _wlanType?: string; 
  public get wlanType() {
    return this.getStringAttribute('wlan_type');
  }
  public set wlanType(value: string) {
    this._wlanType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get wlanTypeInput() {
    return this._wlanType;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      aaa_override: cdktf.booleanToTerraform(this._aaaOverride),
      acct_servers: cdktf.listMapper(cdktf.stringToTerraform, false)(this._acctServers),
      acl_name: cdktf.stringToTerraform(this._aclName),
      ap_beacon_protection: cdktf.booleanToTerraform(this._apBeaconProtection),
      auth_key8021x: cdktf.booleanToTerraform(this._authKey8021X),
      auth_key8021x_plus_ft: cdktf.booleanToTerraform(this._authKey8021XPlusFt),
      auth_key8021x_sha256: cdktf.booleanToTerraform(this._authKey8021XSha256),
      auth_key_easy_psk: cdktf.booleanToTerraform(this._authKeyEasyPsk),
      auth_key_easy_psk_sha256: cdktf.booleanToTerraform(this._authKeyEasyPskSha256),
      auth_key_owe: cdktf.booleanToTerraform(this._authKeyOwe),
      auth_key_psk: cdktf.booleanToTerraform(this._authKeyPsk),
      auth_key_psk_plus_ft: cdktf.booleanToTerraform(this._authKeyPskPlusFt),
      auth_key_sae: cdktf.booleanToTerraform(this._authKeySae),
      auth_key_sae_ext: cdktf.booleanToTerraform(this._authKeySaeExt),
      auth_key_sae_ext_plus_ft: cdktf.booleanToTerraform(this._authKeySaeExtPlusFt),
      auth_key_sae_plus_ft: cdktf.booleanToTerraform(this._authKeySaePlusFt),
      auth_key_suite_b1921x: cdktf.booleanToTerraform(this._authKeySuiteB1921X),
      auth_key_suite_b1x: cdktf.booleanToTerraform(this._authKeySuiteB1X),
      auth_server: cdktf.stringToTerraform(this._authServer),
      auth_servers: cdktf.listMapper(cdktf.stringToTerraform, false)(this._authServers),
      auth_type: cdktf.stringToTerraform(this._authType),
      basic_service_set_client_idle_timeout: cdktf.numberToTerraform(this._basicServiceSetClientIdleTimeout),
      basic_service_set_max_idle: cdktf.booleanToTerraform(this._basicServiceSetMaxIdle),
      broadcast_ssid: cdktf.booleanToTerraform(this._broadcastSsid),
      cckm: cdktf.booleanToTerraform(this._cckm),
      cckm_tsf_tolerance: cdktf.numberToTerraform(this._cckmTsfTolerance),
      client_exclusion: cdktf.booleanToTerraform(this._clientExclusion),
      client_exclusion_timeout: cdktf.numberToTerraform(this._clientExclusionTimeout),
      client_rate_limit: cdktf.numberToTerraform(this._clientRateLimit),
      coverage_hole_detection: cdktf.booleanToTerraform(this._coverageHoleDetection),
      directed_multicast_service: cdktf.booleanToTerraform(this._directedMulticastService),
      egress_qos: cdktf.stringToTerraform(this._egressQos),
      enabled: cdktf.booleanToTerraform(this._enabled),
      external_auth_ip_address: cdktf.stringToTerraform(this._externalAuthIpAddress),
      fast_lane: cdktf.booleanToTerraform(this._fastLane),
      fast_transition: cdktf.stringToTerraform(this._fastTransition),
      fast_transition_over_the_distributed_system: cdktf.booleanToTerraform(this._fastTransitionOverTheDistributedSystem),
      ghz24_policy: cdktf.stringToTerraform(this._ghz24Policy),
      ghz6_policy_client_steering: cdktf.booleanToTerraform(this._ghz6PolicyClientSteering),
      hex: cdktf.booleanToTerraform(this._hex),
      ingress_qos: cdktf.stringToTerraform(this._ingressQos),
      l3_auth_type: cdktf.stringToTerraform(this._l3AuthType),
      mac_filtering: cdktf.booleanToTerraform(this._macFiltering),
      mft_client_protection: cdktf.stringToTerraform(this._mftClientProtection),
      multi_psk_settings: cdktf.listMapper(wirelessSsidMultiPskSettingsToTerraform, false)(this._multiPskSettings.internalValue),
      nas_options: cdktf.listMapper(cdktf.stringToTerraform, false)(this._nasOptions),
      neighbor_list: cdktf.booleanToTerraform(this._neighborList),
      open_ssid: cdktf.stringToTerraform(this._openSsid),
      passphrase: cdktf.stringToTerraform(this._passphrase),
      posturing: cdktf.booleanToTerraform(this._posturing),
      profile_name: cdktf.stringToTerraform(this._profileName),
      protected_management_frame: cdktf.stringToTerraform(this._protectedManagementFrame),
      random_mac_filter: cdktf.booleanToTerraform(this._randomMacFilter),
      rsn_cipher_suite_ccmp128: cdktf.booleanToTerraform(this._rsnCipherSuiteCcmp128),
      rsn_cipher_suite_ccmp256: cdktf.booleanToTerraform(this._rsnCipherSuiteCcmp256),
      rsn_cipher_suite_gcmp128: cdktf.booleanToTerraform(this._rsnCipherSuiteGcmp128),
      rsn_cipher_suite_gcmp256: cdktf.booleanToTerraform(this._rsnCipherSuiteGcmp256),
      session_timeout: cdktf.numberToTerraform(this._sessionTimeout),
      session_timeout_enable: cdktf.booleanToTerraform(this._sessionTimeoutEnable),
      site_id: cdktf.stringToTerraform(this._siteId),
      sleeping_client: cdktf.booleanToTerraform(this._sleepingClient),
      sleeping_client_timeout: cdktf.numberToTerraform(this._sleepingClientTimeout),
      ssid: cdktf.stringToTerraform(this._ssid),
      ssid_radio_type: cdktf.stringToTerraform(this._ssidRadioType),
      web_passthrough: cdktf.booleanToTerraform(this._webPassthrough),
      wlan_band_select: cdktf.booleanToTerraform(this._wlanBandSelect),
      wlan_type: cdktf.stringToTerraform(this._wlanType),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      aaa_override: {
        value: cdktf.booleanToHclTerraform(this._aaaOverride),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      acct_servers: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._acctServers),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      acl_name: {
        value: cdktf.stringToHclTerraform(this._aclName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ap_beacon_protection: {
        value: cdktf.booleanToHclTerraform(this._apBeaconProtection),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      auth_key8021x: {
        value: cdktf.booleanToHclTerraform(this._authKey8021X),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      auth_key8021x_plus_ft: {
        value: cdktf.booleanToHclTerraform(this._authKey8021XPlusFt),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      auth_key8021x_sha256: {
        value: cdktf.booleanToHclTerraform(this._authKey8021XSha256),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      auth_key_easy_psk: {
        value: cdktf.booleanToHclTerraform(this._authKeyEasyPsk),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      auth_key_easy_psk_sha256: {
        value: cdktf.booleanToHclTerraform(this._authKeyEasyPskSha256),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      auth_key_owe: {
        value: cdktf.booleanToHclTerraform(this._authKeyOwe),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      auth_key_psk: {
        value: cdktf.booleanToHclTerraform(this._authKeyPsk),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      auth_key_psk_plus_ft: {
        value: cdktf.booleanToHclTerraform(this._authKeyPskPlusFt),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      auth_key_sae: {
        value: cdktf.booleanToHclTerraform(this._authKeySae),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      auth_key_sae_ext: {
        value: cdktf.booleanToHclTerraform(this._authKeySaeExt),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      auth_key_sae_ext_plus_ft: {
        value: cdktf.booleanToHclTerraform(this._authKeySaeExtPlusFt),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      auth_key_sae_plus_ft: {
        value: cdktf.booleanToHclTerraform(this._authKeySaePlusFt),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      auth_key_suite_b1921x: {
        value: cdktf.booleanToHclTerraform(this._authKeySuiteB1921X),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      auth_key_suite_b1x: {
        value: cdktf.booleanToHclTerraform(this._authKeySuiteB1X),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      auth_server: {
        value: cdktf.stringToHclTerraform(this._authServer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auth_servers: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._authServers),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      auth_type: {
        value: cdktf.stringToHclTerraform(this._authType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      basic_service_set_client_idle_timeout: {
        value: cdktf.numberToHclTerraform(this._basicServiceSetClientIdleTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      basic_service_set_max_idle: {
        value: cdktf.booleanToHclTerraform(this._basicServiceSetMaxIdle),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      broadcast_ssid: {
        value: cdktf.booleanToHclTerraform(this._broadcastSsid),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      cckm: {
        value: cdktf.booleanToHclTerraform(this._cckm),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      cckm_tsf_tolerance: {
        value: cdktf.numberToHclTerraform(this._cckmTsfTolerance),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      client_exclusion: {
        value: cdktf.booleanToHclTerraform(this._clientExclusion),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      client_exclusion_timeout: {
        value: cdktf.numberToHclTerraform(this._clientExclusionTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      client_rate_limit: {
        value: cdktf.numberToHclTerraform(this._clientRateLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      coverage_hole_detection: {
        value: cdktf.booleanToHclTerraform(this._coverageHoleDetection),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      directed_multicast_service: {
        value: cdktf.booleanToHclTerraform(this._directedMulticastService),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      egress_qos: {
        value: cdktf.stringToHclTerraform(this._egressQos),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      external_auth_ip_address: {
        value: cdktf.stringToHclTerraform(this._externalAuthIpAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fast_lane: {
        value: cdktf.booleanToHclTerraform(this._fastLane),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      fast_transition: {
        value: cdktf.stringToHclTerraform(this._fastTransition),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fast_transition_over_the_distributed_system: {
        value: cdktf.booleanToHclTerraform(this._fastTransitionOverTheDistributedSystem),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ghz24_policy: {
        value: cdktf.stringToHclTerraform(this._ghz24Policy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ghz6_policy_client_steering: {
        value: cdktf.booleanToHclTerraform(this._ghz6PolicyClientSteering),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      hex: {
        value: cdktf.booleanToHclTerraform(this._hex),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ingress_qos: {
        value: cdktf.stringToHclTerraform(this._ingressQos),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      l3_auth_type: {
        value: cdktf.stringToHclTerraform(this._l3AuthType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mac_filtering: {
        value: cdktf.booleanToHclTerraform(this._macFiltering),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      mft_client_protection: {
        value: cdktf.stringToHclTerraform(this._mftClientProtection),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      multi_psk_settings: {
        value: cdktf.listMapperHcl(wirelessSsidMultiPskSettingsToHclTerraform, false)(this._multiPskSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WirelessSsidMultiPskSettingsList",
      },
      nas_options: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._nasOptions),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      neighbor_list: {
        value: cdktf.booleanToHclTerraform(this._neighborList),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      open_ssid: {
        value: cdktf.stringToHclTerraform(this._openSsid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      passphrase: {
        value: cdktf.stringToHclTerraform(this._passphrase),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      posturing: {
        value: cdktf.booleanToHclTerraform(this._posturing),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      profile_name: {
        value: cdktf.stringToHclTerraform(this._profileName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      protected_management_frame: {
        value: cdktf.stringToHclTerraform(this._protectedManagementFrame),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      random_mac_filter: {
        value: cdktf.booleanToHclTerraform(this._randomMacFilter),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      rsn_cipher_suite_ccmp128: {
        value: cdktf.booleanToHclTerraform(this._rsnCipherSuiteCcmp128),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      rsn_cipher_suite_ccmp256: {
        value: cdktf.booleanToHclTerraform(this._rsnCipherSuiteCcmp256),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      rsn_cipher_suite_gcmp128: {
        value: cdktf.booleanToHclTerraform(this._rsnCipherSuiteGcmp128),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      rsn_cipher_suite_gcmp256: {
        value: cdktf.booleanToHclTerraform(this._rsnCipherSuiteGcmp256),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      session_timeout: {
        value: cdktf.numberToHclTerraform(this._sessionTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      session_timeout_enable: {
        value: cdktf.booleanToHclTerraform(this._sessionTimeoutEnable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      site_id: {
        value: cdktf.stringToHclTerraform(this._siteId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sleeping_client: {
        value: cdktf.booleanToHclTerraform(this._sleepingClient),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      sleeping_client_timeout: {
        value: cdktf.numberToHclTerraform(this._sleepingClientTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ssid: {
        value: cdktf.stringToHclTerraform(this._ssid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssid_radio_type: {
        value: cdktf.stringToHclTerraform(this._ssidRadioType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      web_passthrough: {
        value: cdktf.booleanToHclTerraform(this._webPassthrough),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      wlan_band_select: {
        value: cdktf.booleanToHclTerraform(this._wlanBandSelect),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      wlan_type: {
        value: cdktf.stringToHclTerraform(this._wlanType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
