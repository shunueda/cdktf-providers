// https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/system
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemConfig extends cdktf.TerraformMetaArguments {
  /**
  * Deny MAC moves (clears existing session)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/system#access_session_mac_move_deny System#access_session_mac_move_deny}
  */
  readonly accessSessionMacMoveDeny?: boolean | cdktf.IResolvable;
  /**
  * Enable the config logger
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/system#archive_log_config_logging_enable System#archive_log_config_logging_enable}
  */
  readonly archiveLogConfigLoggingEnable?: boolean | cdktf.IResolvable;
  /**
  * Maximum number of logged commands that will be kept by the config log
  *   - Range: `1`-`1000`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/system#archive_log_config_logging_size System#archive_log_config_logging_size}
  */
  readonly archiveLogConfigLoggingSize?: number;
  /**
  * maximum number of backup copies
  *   - Range: `1`-`14`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/system#archive_maximum System#archive_maximum}
  */
  readonly archiveMaximum?: number;
  /**
  * path for backups
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/system#archive_path System#archive_path}
  */
  readonly archivePath?: string;
  /**
  * Period of time in minutes to automatically archive the running-config
  *   - Range: `1`-`525600`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/system#archive_time_period System#archive_time_period}
  */
  readonly archiveTimePeriod?: number;
  /**
  * Enable automatic backup generation during write memory
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/system#archive_write_memory System#archive_write_memory}
  */
  readonly archiveWriteMemory?: boolean | cdktf.IResolvable;
  /**
  * Deny MAC move to uncontrolled port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/system#authentication_mac_move_deny_uncontrolled System#authentication_mac_move_deny_uncontrolled}
  */
  readonly authenticationMacMoveDenyUncontrolled?: boolean | cdktf.IResolvable;
  /**
  * PERMIT MAC moves (clears existing session)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/system#authentication_mac_move_permit System#authentication_mac_move_permit}
  */
  readonly authenticationMacMovePermit?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/system#boot_system_bootfiles System#boot_system_bootfiles}
  */
  readonly bootSystemBootfiles?: SystemBootSystemBootfiles[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/system#boot_system_flash_files System#boot_system_flash_files}
  */
  readonly bootSystemFlashFiles?: SystemBootSystemFlashFiles[] | cdktf.IResolvable;
  /**
  * To specify transport method for this profile
  *   - Choices: `email`, `http`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/system#call_home_cisco_tac_1_destination_transport_method System#call_home_cisco_tac_1_destination_transport_method}
  */
  readonly callHomeCiscoTac1DestinationTransportMethod?: string;
  /**
  * Activate the current profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/system#call_home_cisco_tac_1_profile_active System#call_home_cisco_tac_1_profile_active}
  */
  readonly callHomeCiscoTac1ProfileActive?: boolean | cdktf.IResolvable;
  /**
  * Use email address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/system#call_home_contact_email System#call_home_contact_email}
  */
  readonly callHomeContactEmail?: string;
  /**
  * Enable CISP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/system#cisp_enable System#cisp_enable}
  */
  readonly cispEnable?: boolean | cdktf.IResolvable;
  /**
  * Assign policy-map to the input of an interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/system#control_plane_service_policy_input System#control_plane_service_policy_input}
  */
  readonly controlPlaneServicePolicyInput?: string;
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/system#device System#device}
  */
  readonly device?: string;
  /**
  * Enable/Disable classification of attached devices
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/system#device_classifier System#device_classifier}
  */
  readonly deviceClassifier?: boolean | cdktf.IResolvable;
  /**
  * Select diagnostic level
  *   - Choices: `complete`, `minimal`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/system#diagnostic_bootup_level System#diagnostic_bootup_level}
  */
  readonly diagnosticBootupLevel?: string;
  /**
  * Configure event log size Number of entries <1-10000>
  *   - Range: `1`-`10000`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/system#diagnostic_event_log_size System#diagnostic_event_log_size}
  */
  readonly diagnosticEventLogSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/system#enable_secret System#enable_secret}
  */
  readonly enableSecret?: string;
  /**
  * Set exec level password
  *   - Range: `0`-`255`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/system#enable_secret_level System#enable_secret_level}
  */
  readonly enableSecretLevel?: number;
  /**
  * 
  *   - Choices: `0`, `4`, `5`, `8`, `9`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/system#enable_secret_type System#enable_secret_type}
  */
  readonly enableSecretType?: string;
  /**
  * Enable EPM logging
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/system#epm_logging System#epm_logging}
  */
  readonly epmLogging?: boolean | cdktf.IResolvable;
  /**
  * msec (default 2500 msec)
  *   - Range: `2500`-`10000`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/system#ethernet_cfm_alarm_config_delay System#ethernet_cfm_alarm_config_delay}
  */
  readonly ethernetCfmAlarmConfigDelay?: number;
  /**
  * msec (default 10000 msec)
  *   - Range: `2500`-`10000`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/system#ethernet_cfm_alarm_config_reset System#ethernet_cfm_alarm_config_reset}
  */
  readonly ethernetCfmAlarmConfigReset?: number;
  /**
  * Set system's network name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/system#hostname System#hostname}
  */
  readonly hostname?: string;
  /**
  * IGMP Snooping Querier disable/enable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/system#igmp_snooping_querier System#igmp_snooping_querier}
  */
  readonly igmpSnoopingQuerier?: boolean | cdktf.IResolvable;
  /**
  * IGMP Snooping Querier maximum response time (sec)
  *   - Range: `1`-`25`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/system#igmp_snooping_querier_max_response_time System#igmp_snooping_querier_max_response_time}
  */
  readonly igmpSnoopingQuerierMaxResponseTime?: number;
  /**
  * IGMP Snooping Querier time out (sec)
  *   - Range: `60`-`300`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/system#igmp_snooping_querier_timer_expiry System#igmp_snooping_querier_timer_expiry}
  */
  readonly igmpSnoopingQuerierTimerExpiry?: number;
  /**
  * IGMP Snooping Querier version
  *   - Range: `1`-`3`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/system#igmp_snooping_querier_version System#igmp_snooping_querier_version}
  */
  readonly igmpSnoopingQuerierVersion?: number;
  /**
  * select aa:nn format for BGP community
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/system#ip_bgp_community_new_format System#ip_bgp_community_new_format}
  */
  readonly ipBgpCommunityNewFormat?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/system#ip_cef_load_sharing_algorithm_include_ports_destination System#ip_cef_load_sharing_algorithm_include_ports_destination}
  */
  readonly ipCefLoadSharingAlgorithmIncludePortsDestination?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/system#ip_cef_load_sharing_algorithm_include_ports_source System#ip_cef_load_sharing_algorithm_include_ports_source}
  */
  readonly ipCefLoadSharingAlgorithmIncludePortsSource?: boolean | cdktf.IResolvable;
  /**
  * Specify default gateway (if not routing IP)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/system#ip_default_gateway System#ip_default_gateway}
  */
  readonly ipDefaultGateway?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/system#ip_domain_list_names System#ip_domain_list_names}
  */
  readonly ipDomainListNames?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/system#ip_domain_list_vrf System#ip_domain_list_vrf}
  */
  readonly ipDomainListVrf?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/system#ip_domain_list_vrf_domain System#ip_domain_list_vrf_domain}
  */
  readonly ipDomainListVrfDomain?: string;
  /**
  * Enable IP Domain Name System hostname translation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/system#ip_domain_lookup System#ip_domain_lookup}
  */
  readonly ipDomainLookup?: boolean | cdktf.IResolvable;
  /**
  * Enable IP DNS queries for CLNS NSAP addresses
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/system#ip_domain_lookup_nsap System#ip_domain_lookup_nsap}
  */
  readonly ipDomainLookupNsap?: boolean | cdktf.IResolvable;
  /**
  * Enable IP DNS recursive lookup
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/system#ip_domain_lookup_recursive System#ip_domain_lookup_recursive}
  */
  readonly ipDomainLookupRecursive?: boolean | cdktf.IResolvable;
  /**
  * Five GigabitEthernet 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/system#ip_domain_lookup_source_interface_five_gigabit_ethernet System#ip_domain_lookup_source_interface_five_gigabit_ethernet}
  */
  readonly ipDomainLookupSourceInterfaceFiveGigabitEthernet?: string;
  /**
  * Forty GigabitEthernet 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/system#ip_domain_lookup_source_interface_forty_gigabit_ethernet System#ip_domain_lookup_source_interface_forty_gigabit_ethernet}
  */
  readonly ipDomainLookupSourceInterfaceFortyGigabitEthernet?: string;
  /**
  * GigabitEthernet IEEE 802.3z
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/system#ip_domain_lookup_source_interface_gigabit_ethernet System#ip_domain_lookup_source_interface_gigabit_ethernet}
  */
  readonly ipDomainLookupSourceInterfaceGigabitEthernet?: string;
  /**
  * Hundred GigabitEthernet
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/system#ip_domain_lookup_source_interface_hundred_gigabit_ethernet System#ip_domain_lookup_source_interface_hundred_gigabit_ethernet}
  */
  readonly ipDomainLookupSourceInterfaceHundredGigabitEthernet?: string;
  /**
  * Loopback interface
  *   - Range: `0`-`2147483647`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/system#ip_domain_lookup_source_interface_loopback System#ip_domain_lookup_source_interface_loopback}
  */
  readonly ipDomainLookupSourceInterfaceLoopback?: number;
  /**
  * Ten Gigabit Ethernet
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/system#ip_domain_lookup_source_interface_ten_gigabit_ethernet System#ip_domain_lookup_source_interface_ten_gigabit_ethernet}
  */
  readonly ipDomainLookupSourceInterfaceTenGigabitEthernet?: string;
  /**
  * Twenty Five GigabitEthernet 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/system#ip_domain_lookup_source_interface_twenty_five_gigabit_ethernet System#ip_domain_lookup_source_interface_twenty_five_gigabit_ethernet}
  */
  readonly ipDomainLookupSourceInterfaceTwentyFiveGigabitEthernet?: string;
  /**
  * Two GigabitEthernet 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/system#ip_domain_lookup_source_interface_two_gigabit_ethernet System#ip_domain_lookup_source_interface_two_gigabit_ethernet}
  */
  readonly ipDomainLookupSourceInterfaceTwoGigabitEthernet?: string;
  /**
  * Iosxr Vlans
  *   - Range: `0`-`65535`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/system#ip_domain_lookup_source_interface_vlan System#ip_domain_lookup_source_interface_vlan}
  */
  readonly ipDomainLookupSourceInterfaceVlan?: number;
  /**
  * Specify VRF
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/system#ip_domain_lookup_vrfs System#ip_domain_lookup_vrfs}
  */
  readonly ipDomainLookupVrfs?: SystemIpDomainLookupVrfs[] | cdktf.IResolvable;
  /**
  * Define the default domain name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/system#ip_domain_name System#ip_domain_name}
  */
  readonly ipDomainName?: string;
  /**
  * Sun's Network Disk protocol
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/system#ip_forward_protocol_nd System#ip_forward_protocol_nd}
  */
  readonly ipForwardProtocolNd?: boolean | cdktf.IResolvable;
  /**
  * Connect using passive mode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/system#ip_ftp_passive System#ip_ftp_passive}
  */
  readonly ipFtpPassive?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/system#ip_hosts System#ip_hosts}
  */
  readonly ipHosts?: SystemIpHosts[] | cdktf.IResolvable;
  /**
  * Specify VRF
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/system#ip_hosts_vrf System#ip_hosts_vrf}
  */
  readonly ipHostsVrf?: SystemIpHostsVrf[] | cdktf.IResolvable;
  /**
  * Restrict http server access by access-class
  *   - Range: `1`-`99`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/system#ip_http_access_class System#ip_http_access_class}
  */
  readonly ipHttpAccessClass?: number;
  /**
  * Set active session modules
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/system#ip_http_active_session_modules System#ip_http_active_session_modules}
  */
  readonly ipHttpActiveSessionModules?: string;
  /**
  * Use AAA access control methods
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/system#ip_http_authentication_aaa System#ip_http_authentication_aaa}
  */
  readonly ipHttpAuthenticationAaa?: boolean | cdktf.IResolvable;
  /**
  * Set method list for command authorization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/system#ip_http_authentication_aaa_command_authorization System#ip_http_authentication_aaa_command_authorization}
  */
  readonly ipHttpAuthenticationAaaCommandAuthorization?: SystemIpHttpAuthenticationAaaCommandAuthorization[] | cdktf.IResolvable;
  /**
  * Set method list for exec authorization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/system#ip_http_authentication_aaa_exec_authorization System#ip_http_authentication_aaa_exec_authorization}
  */
  readonly ipHttpAuthenticationAaaExecAuthorization?: string;
  /**
  * Set method list for login authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/system#ip_http_authentication_aaa_login_authentication System#ip_http_authentication_aaa_login_authentication}
  */
  readonly ipHttpAuthenticationAaaLoginAuthentication?: string;
  /**
  * Use local username and passwords
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/system#ip_http_authentication_local System#ip_http_authentication_local}
  */
  readonly ipHttpAuthenticationLocal?: boolean | cdktf.IResolvable;
  /**
  * Set http client certificate secure trustpoint
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/system#ip_http_client_secure_trustpoint System#ip_http_client_secure_trustpoint}
  */
  readonly ipHttpClientSecureTrustpoint?: string;
  /**
  * Specify interface for source address in all HTTP(S) client connections
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/system#ip_http_client_source_interface System#ip_http_client_source_interface}
  */
  readonly ipHttpClientSourceInterface?: string;
  /**
  * max http connections
  *   - Range: `1`-`50`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/system#ip_http_max_connections System#ip_http_max_connections}
  */
  readonly ipHttpMaxConnections?: number;
  /**
  * Set secure active session modules
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/system#ip_http_secure_active_session_modules System#ip_http_secure_active_session_modules}
  */
  readonly ipHttpSecureActiveSessionModules?: string;
  /**
  * Enable HTTP secure server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/system#ip_http_secure_server System#ip_http_secure_server}
  */
  readonly ipHttpSecureServer?: boolean | cdktf.IResolvable;
  /**
  * Set http secure server certificate trustpoint
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/system#ip_http_secure_trustpoint System#ip_http_secure_trustpoint}
  */
  readonly ipHttpSecureTrustpoint?: string;
  /**
  * Enable http server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/system#ip_http_server System#ip_http_server}
  */
  readonly ipHttpServer?: boolean | cdktf.IResolvable;
  /**
  * Set TLS version for HTTP secure server
  *   - Choices: `TLSv1.0`, `TLSv1.1`, `TLSv1.2`, `TLSv1.3`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/system#ip_http_tls_version System#ip_http_tls_version}
  */
  readonly ipHttpTlsVersion?: string;
  /**
  * Maximum number of multicast routes
  *   - Range: `1`-`2147483647`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/system#ip_multicast_route_limit System#ip_multicast_route_limit}
  */
  readonly ipMulticastRouteLimit?: number;
  /**
  * Enable IP multicast forwarding
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/system#ip_multicast_routing System#ip_multicast_routing}
  */
  readonly ipMulticastRouting?: boolean | cdktf.IResolvable;
  /**
  * Distributed multicast switching
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/system#ip_multicast_routing_distributed System#ip_multicast_routing_distributed}
  */
  readonly ipMulticastRoutingDistributed?: boolean | cdktf.IResolvable;
  /**
  * Domain server IPv4/IPv6 address (maximum of 6)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/system#ip_name_servers System#ip_name_servers}
  */
  readonly ipNameServers?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/system#ip_name_servers_vrf System#ip_name_servers_vrf}
  */
  readonly ipNameServersVrf?: SystemIpNameServersVrf[] | cdktf.IResolvable;
  /**
  * dns classification by domain
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/system#ip_nbar_classification_dns_classify_by_domain System#ip_nbar_classification_dns_classify_by_domain}
  */
  readonly ipNbarClassificationDnsClassifyByDomain?: boolean | cdktf.IResolvable;
  /**
  * Five GigabitEthernet 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/system#ip_radius_source_interface_five_gigabit_ethernet System#ip_radius_source_interface_five_gigabit_ethernet}
  */
  readonly ipRadiusSourceInterfaceFiveGigabitEthernet?: string;
  /**
  * Forty GigabitEthernet 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/system#ip_radius_source_interface_forty_gigabit_ethernet System#ip_radius_source_interface_forty_gigabit_ethernet}
  */
  readonly ipRadiusSourceInterfaceFortyGigabitEthernet?: string;
  /**
  * GigabitEthernet IEEE 802.3z
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/system#ip_radius_source_interface_gigabit_ethernet System#ip_radius_source_interface_gigabit_ethernet}
  */
  readonly ipRadiusSourceInterfaceGigabitEthernet?: string;
  /**
  * Hundred GigabitEthernet
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/system#ip_radius_source_interface_hundred_gigabit_ethernet System#ip_radius_source_interface_hundred_gigabit_ethernet}
  */
  readonly ipRadiusSourceInterfaceHundredGigabitEthernet?: string;
  /**
  * Loopback interface
  *   - Range: `0`-`2147483647`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/system#ip_radius_source_interface_loopback System#ip_radius_source_interface_loopback}
  */
  readonly ipRadiusSourceInterfaceLoopback?: number;
  /**
  * Ten Gigabit Ethernet
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/system#ip_radius_source_interface_ten_gigabit_ethernet System#ip_radius_source_interface_ten_gigabit_ethernet}
  */
  readonly ipRadiusSourceInterfaceTenGigabitEthernet?: string;
  /**
  * Twenty Five GigabitEthernet 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/system#ip_radius_source_interface_twenty_five_gigabit_ethernet System#ip_radius_source_interface_twenty_five_gigabit_ethernet}
  */
  readonly ipRadiusSourceInterfaceTwentyFiveGigabitEthernet?: string;
  /**
  * Two GigabitEthernet 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/system#ip_radius_source_interface_two_gigabit_ethernet System#ip_radius_source_interface_two_gigabit_ethernet}
  */
  readonly ipRadiusSourceInterfaceTwoGigabitEthernet?: string;
  /**
  * Iosxr Vlans
  *   - Range: `0`-`65535`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/system#ip_radius_source_interface_vlan System#ip_radius_source_interface_vlan}
  */
  readonly ipRadiusSourceInterfaceVlan?: number;
  /**
  * VPN Routing/Forwarding parameters
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/system#ip_radius_source_interface_vrf System#ip_radius_source_interface_vrf}
  */
  readonly ipRadiusSourceInterfaceVrf?: string;
  /**
  * Enable or disable IP routing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/system#ip_routing System#ip_routing}
  */
  readonly ipRouting?: boolean | cdktf.IResolvable;
  /**
  * Perform IP routing protocol routes purge on link failures
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/system#ip_routing_protocol_purge_interface System#ip_routing_protocol_purge_interface}
  */
  readonly ipRoutingProtocolPurgeInterface?: boolean | cdktf.IResolvable;
  /**
  * Enable server side of SCP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/system#ip_scp_server_enable System#ip_scp_server_enable}
  */
  readonly ipScpServerEnable?: boolean | cdktf.IResolvable;
  /**
  * Process packets with source routing header options
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/system#ip_source_route System#ip_source_route}
  */
  readonly ipSourceRoute?: boolean | cdktf.IResolvable;
  /**
  * Specify number of authentication retries
  *   - Range: `0`-`5`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/system#ip_ssh_authentication_retries System#ip_ssh_authentication_retries}
  */
  readonly ipSshAuthenticationRetries?: number;
  /**
  * Enable optimizations for bulk data transfer procedures
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/system#ip_ssh_bulk_mode System#ip_ssh_bulk_mode}
  */
  readonly ipSshBulkMode?: boolean | cdktf.IResolvable;
  /**
  * Window-size value
  *   - Range: `131072`-`1073741824`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/system#ip_ssh_bulk_mode_window_size System#ip_ssh_bulk_mode_window_size}
  */
  readonly ipSshBulkModeWindowSize?: number;
  /**
  * Five GigabitEthernet 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/system#ip_ssh_source_interface_five_gigabit_ethernet System#ip_ssh_source_interface_five_gigabit_ethernet}
  */
  readonly ipSshSourceInterfaceFiveGigabitEthernet?: string;
  /**
  * Forty GigabitEthernet 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/system#ip_ssh_source_interface_forty_gigabit_ethernet System#ip_ssh_source_interface_forty_gigabit_ethernet}
  */
  readonly ipSshSourceInterfaceFortyGigabitEthernet?: string;
  /**
  * GigabitEthernet IEEE 802.3z
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/system#ip_ssh_source_interface_gigabit_ethernet System#ip_ssh_source_interface_gigabit_ethernet}
  */
  readonly ipSshSourceInterfaceGigabitEthernet?: string;
  /**
  * Hundred GigabitEthernet
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/system#ip_ssh_source_interface_hundred_gigabit_ethernet System#ip_ssh_source_interface_hundred_gigabit_ethernet}
  */
  readonly ipSshSourceInterfaceHundredGigabitEthernet?: string;
  /**
  * Loopback interface
  *   - Range: `0`-`2147483647`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/system#ip_ssh_source_interface_loopback System#ip_ssh_source_interface_loopback}
  */
  readonly ipSshSourceInterfaceLoopback?: number;
  /**
  * Ten Gigabit Ethernet
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/system#ip_ssh_source_interface_ten_gigabit_ethernet System#ip_ssh_source_interface_ten_gigabit_ethernet}
  */
  readonly ipSshSourceInterfaceTenGigabitEthernet?: string;
  /**
  * Twenty Five GigabitEthernet 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/system#ip_ssh_source_interface_twenty_five_gigabit_ethernet System#ip_ssh_source_interface_twenty_five_gigabit_ethernet}
  */
  readonly ipSshSourceInterfaceTwentyFiveGigabitEthernet?: string;
  /**
  * Two GigabitEthernet 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/system#ip_ssh_source_interface_two_gigabit_ethernet System#ip_ssh_source_interface_two_gigabit_ethernet}
  */
  readonly ipSshSourceInterfaceTwoGigabitEthernet?: string;
  /**
  * Iosxr Vlans
  *   - Range: `0`-`65535`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/system#ip_ssh_source_interface_vlan System#ip_ssh_source_interface_vlan}
  */
  readonly ipSshSourceInterfaceVlan?: number;
  /**
  * Specify SSH time-out interval
  *   - Range: `1`-`120`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/system#ip_ssh_time_out System#ip_ssh_time_out}
  */
  readonly ipSshTimeOut?: number;
  /**
  * Specify protocol version supported
  *   - Choices: `2`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/system#ip_ssh_version System#ip_ssh_version}
  */
  readonly ipSshVersion?: string;
  /**
  * Specify protocol version supported. DEPRECATED, Use ssh-version instead
  *   - Range: `1`-`2`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/system#ip_ssh_version_legacy System#ip_ssh_version_legacy}
  */
  readonly ipSshVersionLegacy?: number;
  /**
  * Five GigabitEthernet 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/system#ip_tacacs_source_interface_five_gigabit_ethernet System#ip_tacacs_source_interface_five_gigabit_ethernet}
  */
  readonly ipTacacsSourceInterfaceFiveGigabitEthernet?: string;
  /**
  * Forty GigabitEthernet 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/system#ip_tacacs_source_interface_forty_gigabit_ethernet System#ip_tacacs_source_interface_forty_gigabit_ethernet}
  */
  readonly ipTacacsSourceInterfaceFortyGigabitEthernet?: string;
  /**
  * GigabitEthernet IEEE 802.3z
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/system#ip_tacacs_source_interface_gigabit_ethernet System#ip_tacacs_source_interface_gigabit_ethernet}
  */
  readonly ipTacacsSourceInterfaceGigabitEthernet?: string;
  /**
  * Hundred GigabitEthernet
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/system#ip_tacacs_source_interface_hundred_gigabit_ethernet System#ip_tacacs_source_interface_hundred_gigabit_ethernet}
  */
  readonly ipTacacsSourceInterfaceHundredGigabitEthernet?: string;
  /**
  * Loopback interface
  *   - Range: `0`-`2147483647`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/system#ip_tacacs_source_interface_loopback System#ip_tacacs_source_interface_loopback}
  */
  readonly ipTacacsSourceInterfaceLoopback?: number;
  /**
  * Ten Gigabit Ethernet
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/system#ip_tacacs_source_interface_ten_gigabit_ethernet System#ip_tacacs_source_interface_ten_gigabit_ethernet}
  */
  readonly ipTacacsSourceInterfaceTenGigabitEthernet?: string;
  /**
  * Twenty Five GigabitEthernet 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/system#ip_tacacs_source_interface_twenty_five_gigabit_ethernet System#ip_tacacs_source_interface_twenty_five_gigabit_ethernet}
  */
  readonly ipTacacsSourceInterfaceTwentyFiveGigabitEthernet?: string;
  /**
  * Two GigabitEthernet 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/system#ip_tacacs_source_interface_two_gigabit_ethernet System#ip_tacacs_source_interface_two_gigabit_ethernet}
  */
  readonly ipTacacsSourceInterfaceTwoGigabitEthernet?: string;
  /**
  * Iosxr Vlans
  *   - Range: `0`-`65535`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/system#ip_tacacs_source_interface_vlan System#ip_tacacs_source_interface_vlan}
  */
  readonly ipTacacsSourceInterfaceVlan?: number;
  /**
  * VPN Routing/Forwarding parameters
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/system#ip_tacacs_source_interface_vrf System#ip_tacacs_source_interface_vrf}
  */
  readonly ipTacacsSourceInterfaceVrf?: string;
  /**
  * TCP initial maximum segment size
  *   - Range: `0`-`10000`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/system#ip_tcp_mss System#ip_tcp_mss}
  */
  readonly ipTcpMss?: number;
  /**
  * Enable path-MTU discovery on new TCP connections
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/system#ip_tcp_path_mtu_discovery System#ip_tcp_path_mtu_discovery}
  */
  readonly ipTcpPathMtuDiscovery?: boolean | cdktf.IResolvable;
  /**
  * TCP window size. Note - IOS-XE 17.15.1 and later uses a default of 131072 when not specified. For consistent behavior across mixed-version environments, always specify this value explicitly.
  *   - Range: `0`-`1073741823`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/system#ip_tcp_window_size System#ip_tcp_window_size}
  */
  readonly ipTcpWindowSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/system#ipv6_cef_load_sharing_algorithm_include_ports_destination System#ipv6_cef_load_sharing_algorithm_include_ports_destination}
  */
  readonly ipv6CefLoadSharingAlgorithmIncludePortsDestination?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/system#ipv6_cef_load_sharing_algorithm_include_ports_source System#ipv6_cef_load_sharing_algorithm_include_ports_source}
  */
  readonly ipv6CefLoadSharingAlgorithmIncludePortsSource?: boolean | cdktf.IResolvable;
  /**
  * Enable IPV6 multicast forwarding
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/system#ipv6_multicast_routing System#ipv6_multicast_routing}
  */
  readonly ipv6MulticastRouting?: boolean | cdktf.IResolvable;
  /**
  * Enable unicast routing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/system#ipv6_unicast_routing System#ipv6_unicast_routing}
  */
  readonly ipv6UnicastRouting?: boolean | cdktf.IResolvable;
  /**
  * Set delay between successive fail login
  *   - Range: `1`-`10`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/system#login_delay System#login_delay}
  */
  readonly loginDelay?: number;
  /**
  * Set options for failed login attempt
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/system#login_on_failure System#login_on_failure}
  */
  readonly loginOnFailure?: boolean | cdktf.IResolvable;
  /**
  * Generate syslogs on failure logins
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/system#login_on_failure_log System#login_on_failure_log}
  */
  readonly loginOnFailureLog?: boolean | cdktf.IResolvable;
  /**
  * Set options for successful login attempt
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/system#login_on_success System#login_on_success}
  */
  readonly loginOnSuccess?: boolean | cdktf.IResolvable;
  /**
  * Generate syslogs on successful logins
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/system#login_on_success_log System#login_on_success_log}
  */
  readonly loginOnSuccessLog?: boolean | cdktf.IResolvable;
  /**
  * low water mark of memory in KB
  *   - Range: `1`-`3994575`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/system#memory_free_low_watermark_processor System#memory_free_low_watermark_processor}
  */
  readonly memoryFreeLowWatermarkProcessor?: number;
  /**
  * Global MLD Snooping enable for Catalyst Vlans
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/system#mld_snooping System#mld_snooping}
  */
  readonly mldSnooping?: boolean | cdktf.IResolvable;
  /**
  * MLD querier disable/enable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/system#mld_snooping_querier System#mld_snooping_querier}
  */
  readonly mldSnoopingQuerier?: boolean | cdktf.IResolvable;
  /**
  * 
  *   - Range: `1500`-`9198`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/system#mtu System#mtu}
  */
  readonly mtu?: number;
  /**
  * Enable IP multicast forwarding, some XE devices use this option instead of `multicast_routing`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/system#multicast_routing_switch System#multicast_routing_switch}
  */
  readonly multicastRoutingSwitch?: boolean | cdktf.IResolvable;
  /**
  * Select VPN Routing/Forwarding instance
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/system#multicast_routing_vrfs System#multicast_routing_vrfs}
  */
  readonly multicastRoutingVrfs?: SystemMulticastRoutingVrfs[] | cdktf.IResolvable;
  /**
  * Select method for naming multilink bundles
  *   - Choices: `authenticated`, `both`, `endpoint`, `rfc`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/system#multilink_ppp_bundle_name System#multilink_ppp_bundle_name}
  */
  readonly multilinkPppBundleName?: string;
  /**
  * PNP profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/system#pnp_profiles System#pnp_profiles}
  */
  readonly pnpProfiles?: SystemPnpProfiles[] | cdktf.IResolvable;
  /**
  * 
  *   - Choices: `dst-ip`, `dst-mac`, `dst-mixed-ip-port`, `dst-port`, `mpls`, `src-dst-ip`, `src-dst-mac`, `src-dst-mixed-ip-port`, `src-dst-port`, `src-ip`, `src-mac`, `src-mixed-ip-port`, `src-port`, `vlan-dst-ip`, `vlan-dst-mixed-ip-port`, `vlan-src-dst-ip`, `vlan-src-dst-mixed-ip-port`, `vlan-src-ip`, `vlan-src-mixed-ip-port`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/system#port_channel_load_balance System#port_channel_load_balance}
  */
  readonly portChannelLoadBalance?: string;
  /**
  * Enter redundancy mode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/system#redundancy System#redundancy}
  */
  readonly redundancy?: boolean | cdktf.IResolvable;
  /**
  * redundancy mode for this chassis
  *   - Choices: `none`, `rpr`, `rpr-plus`, `sso`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/system#redundancy_mode System#redundancy_mode}
  */
  readonly redundancyMode?: string;
  /**
  * Minimum length of passwords
  *   - Range: `1`-`16`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/system#security_passwords_min_length System#security_passwords_min_length}
  */
  readonly securityPasswordsMinLength?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/system#standby_redirects System#standby_redirects}
  */
  readonly standbyRedirects?: boolean | cdktf.IResolvable;
  /**
  * 
  *   - Choices: `disable`, `enable`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/system#standby_redirects_enable_disable System#standby_redirects_enable_disable}
  */
  readonly standbyRedirectsEnableDisable?: string;
  /**
  * Configure subscriber templating
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/system#subscriber_templating System#subscriber_templating}
  */
  readonly subscriberTemplating?: boolean | cdktf.IResolvable;
  /**
  * Configure Table Map
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/system#table_maps System#table_maps}
  */
  readonly tableMaps?: SystemTableMaps[] | cdktf.IResolvable;
  /**
  * Five GigabitEthernet 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/system#tftp_source_interface_five_gigabit_ethernet System#tftp_source_interface_five_gigabit_ethernet}
  */
  readonly tftpSourceInterfaceFiveGigabitEthernet?: string;
  /**
  * Forty GigabitEthernet 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/system#tftp_source_interface_forty_gigabit_ethernet System#tftp_source_interface_forty_gigabit_ethernet}
  */
  readonly tftpSourceInterfaceFortyGigabitEthernet?: string;
  /**
  * GigabitEthernet IEEE 802.3z
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/system#tftp_source_interface_gigabit_ethernet System#tftp_source_interface_gigabit_ethernet}
  */
  readonly tftpSourceInterfaceGigabitEthernet?: string;
  /**
  * Hundred GigabitEthernet
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/system#tftp_source_interface_hundred_gigabit_ethernet System#tftp_source_interface_hundred_gigabit_ethernet}
  */
  readonly tftpSourceInterfaceHundredGigabitEthernet?: string;
  /**
  * Loopback interface
  *   - Range: `0`-`2147483647`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/system#tftp_source_interface_loopback System#tftp_source_interface_loopback}
  */
  readonly tftpSourceInterfaceLoopback?: number;
  /**
  * Ten Gigabit Ethernet
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/system#tftp_source_interface_ten_gigabit_ethernet System#tftp_source_interface_ten_gigabit_ethernet}
  */
  readonly tftpSourceInterfaceTenGigabitEthernet?: string;
  /**
  * Twenty Five GigabitEthernet 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/system#tftp_source_interface_twenty_five_gigabit_ethernet System#tftp_source_interface_twenty_five_gigabit_ethernet}
  */
  readonly tftpSourceInterfaceTwentyFiveGigabitEthernet?: string;
  /**
  * Two GigabitEthernet 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/system#tftp_source_interface_two_gigabit_ethernet System#tftp_source_interface_two_gigabit_ethernet}
  */
  readonly tftpSourceInterfaceTwoGigabitEthernet?: string;
  /**
  * Iosxr Vlans
  *   - Range: `0`-`65535`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/system#tftp_source_interface_vlan System#tftp_source_interface_vlan}
  */
  readonly tftpSourceInterfaceVlan?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/system#track_objects System#track_objects}
  */
  readonly trackObjects?: SystemTrackObjects[] | cdktf.IResolvable;
  /**
  * Enable/disable monitoring
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/system#transceiver_type_all_monitoring System#transceiver_type_all_monitoring}
  */
  readonly transceiverTypeAllMonitoring?: boolean | cdktf.IResolvable;
  /**
  * Version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/system#version System#version}
  */
  readonly version?: string;
}
export interface SystemBootSystemBootfiles {
  /**
  * WORD - TFTP filename or URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/system#path System#path}
  */
  readonly path: string;
}

export function systemBootSystemBootfilesToTerraform(struct?: SystemBootSystemBootfiles | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    path: cdktf.stringToTerraform(struct!.path),
  }
}


export function systemBootSystemBootfilesToHclTerraform(struct?: SystemBootSystemBootfiles | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemBootSystemBootfilesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemBootSystemBootfiles | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemBootSystemBootfiles | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._path = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._path = value.path;
    }
  }

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }
}

export class SystemBootSystemBootfilesList extends cdktf.ComplexList {
  public internalValue? : SystemBootSystemBootfiles[] | cdktf.IResolvable

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
  public get(index: number): SystemBootSystemBootfilesOutputReference {
    return new SystemBootSystemBootfilesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemBootSystemFlashFiles {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/system#path System#path}
  */
  readonly path: string;
}

export function systemBootSystemFlashFilesToTerraform(struct?: SystemBootSystemFlashFiles | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    path: cdktf.stringToTerraform(struct!.path),
  }
}


export function systemBootSystemFlashFilesToHclTerraform(struct?: SystemBootSystemFlashFiles | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemBootSystemFlashFilesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemBootSystemFlashFiles | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemBootSystemFlashFiles | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._path = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._path = value.path;
    }
  }

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }
}

export class SystemBootSystemFlashFilesList extends cdktf.ComplexList {
  public internalValue? : SystemBootSystemFlashFiles[] | cdktf.IResolvable

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
  public get(index: number): SystemBootSystemFlashFilesOutputReference {
    return new SystemBootSystemFlashFilesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemIpDomainLookupVrfs {
  /**
  * Five GigabitEthernet 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/system#source_interface_five_gigabit_ethernet System#source_interface_five_gigabit_ethernet}
  */
  readonly sourceInterfaceFiveGigabitEthernet?: string;
  /**
  * Forty GigabitEthernet 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/system#source_interface_forty_gigabit_ethernet System#source_interface_forty_gigabit_ethernet}
  */
  readonly sourceInterfaceFortyGigabitEthernet?: string;
  /**
  * GigabitEthernet IEEE 802.3z
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/system#source_interface_gigabit_ethernet System#source_interface_gigabit_ethernet}
  */
  readonly sourceInterfaceGigabitEthernet?: string;
  /**
  * Hundred GigabitEthernet
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/system#source_interface_hundred_gigabit_ethernet System#source_interface_hundred_gigabit_ethernet}
  */
  readonly sourceInterfaceHundredGigabitEthernet?: string;
  /**
  * Loopback interface
  *   - Range: `0`-`2147483647`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/system#source_interface_loopback System#source_interface_loopback}
  */
  readonly sourceInterfaceLoopback?: number;
  /**
  * Ten Gigabit Ethernet
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/system#source_interface_ten_gigabit_ethernet System#source_interface_ten_gigabit_ethernet}
  */
  readonly sourceInterfaceTenGigabitEthernet?: string;
  /**
  * Twenty Five GigabitEthernet 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/system#source_interface_twenty_five_gigabit_ethernet System#source_interface_twenty_five_gigabit_ethernet}
  */
  readonly sourceInterfaceTwentyFiveGigabitEthernet?: string;
  /**
  * Two GigabitEthernet 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/system#source_interface_two_gigabit_ethernet System#source_interface_two_gigabit_ethernet}
  */
  readonly sourceInterfaceTwoGigabitEthernet?: string;
  /**
  * Iosxr Vlans
  *   - Range: `0`-`65535`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/system#source_interface_vlan System#source_interface_vlan}
  */
  readonly sourceInterfaceVlan?: number;
  /**
  * VRF name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/system#vrf System#vrf}
  */
  readonly vrf: string;
}

export function systemIpDomainLookupVrfsToTerraform(struct?: SystemIpDomainLookupVrfs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    source_interface_five_gigabit_ethernet: cdktf.stringToTerraform(struct!.sourceInterfaceFiveGigabitEthernet),
    source_interface_forty_gigabit_ethernet: cdktf.stringToTerraform(struct!.sourceInterfaceFortyGigabitEthernet),
    source_interface_gigabit_ethernet: cdktf.stringToTerraform(struct!.sourceInterfaceGigabitEthernet),
    source_interface_hundred_gigabit_ethernet: cdktf.stringToTerraform(struct!.sourceInterfaceHundredGigabitEthernet),
    source_interface_loopback: cdktf.numberToTerraform(struct!.sourceInterfaceLoopback),
    source_interface_ten_gigabit_ethernet: cdktf.stringToTerraform(struct!.sourceInterfaceTenGigabitEthernet),
    source_interface_twenty_five_gigabit_ethernet: cdktf.stringToTerraform(struct!.sourceInterfaceTwentyFiveGigabitEthernet),
    source_interface_two_gigabit_ethernet: cdktf.stringToTerraform(struct!.sourceInterfaceTwoGigabitEthernet),
    source_interface_vlan: cdktf.numberToTerraform(struct!.sourceInterfaceVlan),
    vrf: cdktf.stringToTerraform(struct!.vrf),
  }
}


export function systemIpDomainLookupVrfsToHclTerraform(struct?: SystemIpDomainLookupVrfs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    source_interface_five_gigabit_ethernet: {
      value: cdktf.stringToHclTerraform(struct!.sourceInterfaceFiveGigabitEthernet),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_interface_forty_gigabit_ethernet: {
      value: cdktf.stringToHclTerraform(struct!.sourceInterfaceFortyGigabitEthernet),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_interface_gigabit_ethernet: {
      value: cdktf.stringToHclTerraform(struct!.sourceInterfaceGigabitEthernet),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_interface_hundred_gigabit_ethernet: {
      value: cdktf.stringToHclTerraform(struct!.sourceInterfaceHundredGigabitEthernet),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_interface_loopback: {
      value: cdktf.numberToHclTerraform(struct!.sourceInterfaceLoopback),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    source_interface_ten_gigabit_ethernet: {
      value: cdktf.stringToHclTerraform(struct!.sourceInterfaceTenGigabitEthernet),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_interface_twenty_five_gigabit_ethernet: {
      value: cdktf.stringToHclTerraform(struct!.sourceInterfaceTwentyFiveGigabitEthernet),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_interface_two_gigabit_ethernet: {
      value: cdktf.stringToHclTerraform(struct!.sourceInterfaceTwoGigabitEthernet),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_interface_vlan: {
      value: cdktf.numberToHclTerraform(struct!.sourceInterfaceVlan),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    vrf: {
      value: cdktf.stringToHclTerraform(struct!.vrf),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemIpDomainLookupVrfsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemIpDomainLookupVrfs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sourceInterfaceFiveGigabitEthernet !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceInterfaceFiveGigabitEthernet = this._sourceInterfaceFiveGigabitEthernet;
    }
    if (this._sourceInterfaceFortyGigabitEthernet !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceInterfaceFortyGigabitEthernet = this._sourceInterfaceFortyGigabitEthernet;
    }
    if (this._sourceInterfaceGigabitEthernet !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceInterfaceGigabitEthernet = this._sourceInterfaceGigabitEthernet;
    }
    if (this._sourceInterfaceHundredGigabitEthernet !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceInterfaceHundredGigabitEthernet = this._sourceInterfaceHundredGigabitEthernet;
    }
    if (this._sourceInterfaceLoopback !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceInterfaceLoopback = this._sourceInterfaceLoopback;
    }
    if (this._sourceInterfaceTenGigabitEthernet !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceInterfaceTenGigabitEthernet = this._sourceInterfaceTenGigabitEthernet;
    }
    if (this._sourceInterfaceTwentyFiveGigabitEthernet !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceInterfaceTwentyFiveGigabitEthernet = this._sourceInterfaceTwentyFiveGigabitEthernet;
    }
    if (this._sourceInterfaceTwoGigabitEthernet !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceInterfaceTwoGigabitEthernet = this._sourceInterfaceTwoGigabitEthernet;
    }
    if (this._sourceInterfaceVlan !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceInterfaceVlan = this._sourceInterfaceVlan;
    }
    if (this._vrf !== undefined) {
      hasAnyValues = true;
      internalValueResult.vrf = this._vrf;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemIpDomainLookupVrfs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._sourceInterfaceFiveGigabitEthernet = undefined;
      this._sourceInterfaceFortyGigabitEthernet = undefined;
      this._sourceInterfaceGigabitEthernet = undefined;
      this._sourceInterfaceHundredGigabitEthernet = undefined;
      this._sourceInterfaceLoopback = undefined;
      this._sourceInterfaceTenGigabitEthernet = undefined;
      this._sourceInterfaceTwentyFiveGigabitEthernet = undefined;
      this._sourceInterfaceTwoGigabitEthernet = undefined;
      this._sourceInterfaceVlan = undefined;
      this._vrf = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._sourceInterfaceFiveGigabitEthernet = value.sourceInterfaceFiveGigabitEthernet;
      this._sourceInterfaceFortyGigabitEthernet = value.sourceInterfaceFortyGigabitEthernet;
      this._sourceInterfaceGigabitEthernet = value.sourceInterfaceGigabitEthernet;
      this._sourceInterfaceHundredGigabitEthernet = value.sourceInterfaceHundredGigabitEthernet;
      this._sourceInterfaceLoopback = value.sourceInterfaceLoopback;
      this._sourceInterfaceTenGigabitEthernet = value.sourceInterfaceTenGigabitEthernet;
      this._sourceInterfaceTwentyFiveGigabitEthernet = value.sourceInterfaceTwentyFiveGigabitEthernet;
      this._sourceInterfaceTwoGigabitEthernet = value.sourceInterfaceTwoGigabitEthernet;
      this._sourceInterfaceVlan = value.sourceInterfaceVlan;
      this._vrf = value.vrf;
    }
  }

  // source_interface_five_gigabit_ethernet - computed: false, optional: true, required: false
  private _sourceInterfaceFiveGigabitEthernet?: string; 
  public get sourceInterfaceFiveGigabitEthernet() {
    return this.getStringAttribute('source_interface_five_gigabit_ethernet');
  }
  public set sourceInterfaceFiveGigabitEthernet(value: string) {
    this._sourceInterfaceFiveGigabitEthernet = value;
  }
  public resetSourceInterfaceFiveGigabitEthernet() {
    this._sourceInterfaceFiveGigabitEthernet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInterfaceFiveGigabitEthernetInput() {
    return this._sourceInterfaceFiveGigabitEthernet;
  }

  // source_interface_forty_gigabit_ethernet - computed: false, optional: true, required: false
  private _sourceInterfaceFortyGigabitEthernet?: string; 
  public get sourceInterfaceFortyGigabitEthernet() {
    return this.getStringAttribute('source_interface_forty_gigabit_ethernet');
  }
  public set sourceInterfaceFortyGigabitEthernet(value: string) {
    this._sourceInterfaceFortyGigabitEthernet = value;
  }
  public resetSourceInterfaceFortyGigabitEthernet() {
    this._sourceInterfaceFortyGigabitEthernet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInterfaceFortyGigabitEthernetInput() {
    return this._sourceInterfaceFortyGigabitEthernet;
  }

  // source_interface_gigabit_ethernet - computed: false, optional: true, required: false
  private _sourceInterfaceGigabitEthernet?: string; 
  public get sourceInterfaceGigabitEthernet() {
    return this.getStringAttribute('source_interface_gigabit_ethernet');
  }
  public set sourceInterfaceGigabitEthernet(value: string) {
    this._sourceInterfaceGigabitEthernet = value;
  }
  public resetSourceInterfaceGigabitEthernet() {
    this._sourceInterfaceGigabitEthernet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInterfaceGigabitEthernetInput() {
    return this._sourceInterfaceGigabitEthernet;
  }

  // source_interface_hundred_gigabit_ethernet - computed: false, optional: true, required: false
  private _sourceInterfaceHundredGigabitEthernet?: string; 
  public get sourceInterfaceHundredGigabitEthernet() {
    return this.getStringAttribute('source_interface_hundred_gigabit_ethernet');
  }
  public set sourceInterfaceHundredGigabitEthernet(value: string) {
    this._sourceInterfaceHundredGigabitEthernet = value;
  }
  public resetSourceInterfaceHundredGigabitEthernet() {
    this._sourceInterfaceHundredGigabitEthernet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInterfaceHundredGigabitEthernetInput() {
    return this._sourceInterfaceHundredGigabitEthernet;
  }

  // source_interface_loopback - computed: false, optional: true, required: false
  private _sourceInterfaceLoopback?: number; 
  public get sourceInterfaceLoopback() {
    return this.getNumberAttribute('source_interface_loopback');
  }
  public set sourceInterfaceLoopback(value: number) {
    this._sourceInterfaceLoopback = value;
  }
  public resetSourceInterfaceLoopback() {
    this._sourceInterfaceLoopback = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInterfaceLoopbackInput() {
    return this._sourceInterfaceLoopback;
  }

  // source_interface_ten_gigabit_ethernet - computed: false, optional: true, required: false
  private _sourceInterfaceTenGigabitEthernet?: string; 
  public get sourceInterfaceTenGigabitEthernet() {
    return this.getStringAttribute('source_interface_ten_gigabit_ethernet');
  }
  public set sourceInterfaceTenGigabitEthernet(value: string) {
    this._sourceInterfaceTenGigabitEthernet = value;
  }
  public resetSourceInterfaceTenGigabitEthernet() {
    this._sourceInterfaceTenGigabitEthernet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInterfaceTenGigabitEthernetInput() {
    return this._sourceInterfaceTenGigabitEthernet;
  }

  // source_interface_twenty_five_gigabit_ethernet - computed: false, optional: true, required: false
  private _sourceInterfaceTwentyFiveGigabitEthernet?: string; 
  public get sourceInterfaceTwentyFiveGigabitEthernet() {
    return this.getStringAttribute('source_interface_twenty_five_gigabit_ethernet');
  }
  public set sourceInterfaceTwentyFiveGigabitEthernet(value: string) {
    this._sourceInterfaceTwentyFiveGigabitEthernet = value;
  }
  public resetSourceInterfaceTwentyFiveGigabitEthernet() {
    this._sourceInterfaceTwentyFiveGigabitEthernet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInterfaceTwentyFiveGigabitEthernetInput() {
    return this._sourceInterfaceTwentyFiveGigabitEthernet;
  }

  // source_interface_two_gigabit_ethernet - computed: false, optional: true, required: false
  private _sourceInterfaceTwoGigabitEthernet?: string; 
  public get sourceInterfaceTwoGigabitEthernet() {
    return this.getStringAttribute('source_interface_two_gigabit_ethernet');
  }
  public set sourceInterfaceTwoGigabitEthernet(value: string) {
    this._sourceInterfaceTwoGigabitEthernet = value;
  }
  public resetSourceInterfaceTwoGigabitEthernet() {
    this._sourceInterfaceTwoGigabitEthernet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInterfaceTwoGigabitEthernetInput() {
    return this._sourceInterfaceTwoGigabitEthernet;
  }

  // source_interface_vlan - computed: false, optional: true, required: false
  private _sourceInterfaceVlan?: number; 
  public get sourceInterfaceVlan() {
    return this.getNumberAttribute('source_interface_vlan');
  }
  public set sourceInterfaceVlan(value: number) {
    this._sourceInterfaceVlan = value;
  }
  public resetSourceInterfaceVlan() {
    this._sourceInterfaceVlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInterfaceVlanInput() {
    return this._sourceInterfaceVlan;
  }

  // vrf - computed: false, optional: false, required: true
  private _vrf?: string; 
  public get vrf() {
    return this.getStringAttribute('vrf');
  }
  public set vrf(value: string) {
    this._vrf = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vrfInput() {
    return this._vrf;
  }
}

export class SystemIpDomainLookupVrfsList extends cdktf.ComplexList {
  public internalValue? : SystemIpDomainLookupVrfs[] | cdktf.IResolvable

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
  public get(index: number): SystemIpDomainLookupVrfsOutputReference {
    return new SystemIpDomainLookupVrfsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemIpHosts {
  /**
  * Host IP address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/system#ips System#ips}
  */
  readonly ips?: string[];
  /**
  * Name of host
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/system#name System#name}
  */
  readonly name: string;
}

export function systemIpHostsToTerraform(struct?: SystemIpHosts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ips: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ips),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function systemIpHostsToHclTerraform(struct?: SystemIpHosts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ips: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ips),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
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

export class SystemIpHostsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemIpHosts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ips !== undefined) {
      hasAnyValues = true;
      internalValueResult.ips = this._ips;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemIpHosts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ips = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ips = value.ips;
      this._name = value.name;
    }
  }

  // ips - computed: false, optional: true, required: false
  private _ips?: string[]; 
  public get ips() {
    return this.getListAttribute('ips');
  }
  public set ips(value: string[]) {
    this._ips = value;
  }
  public resetIps() {
    this._ips = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsInput() {
    return this._ips;
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
}

export class SystemIpHostsList extends cdktf.ComplexList {
  public internalValue? : SystemIpHosts[] | cdktf.IResolvable

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
  public get(index: number): SystemIpHostsOutputReference {
    return new SystemIpHostsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemIpHostsVrfHosts {
  /**
  * Host IP address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/system#ips System#ips}
  */
  readonly ips?: string[];
  /**
  * Name of host
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/system#name System#name}
  */
  readonly name: string;
}

export function systemIpHostsVrfHostsToTerraform(struct?: SystemIpHostsVrfHosts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ips: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ips),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function systemIpHostsVrfHostsToHclTerraform(struct?: SystemIpHostsVrfHosts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ips: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ips),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
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

export class SystemIpHostsVrfHostsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemIpHostsVrfHosts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ips !== undefined) {
      hasAnyValues = true;
      internalValueResult.ips = this._ips;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemIpHostsVrfHosts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ips = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ips = value.ips;
      this._name = value.name;
    }
  }

  // ips - computed: false, optional: true, required: false
  private _ips?: string[]; 
  public get ips() {
    return this.getListAttribute('ips');
  }
  public set ips(value: string[]) {
    this._ips = value;
  }
  public resetIps() {
    this._ips = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsInput() {
    return this._ips;
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
}

export class SystemIpHostsVrfHostsList extends cdktf.ComplexList {
  public internalValue? : SystemIpHostsVrfHosts[] | cdktf.IResolvable

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
  public get(index: number): SystemIpHostsVrfHostsOutputReference {
    return new SystemIpHostsVrfHostsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemIpHostsVrf {
  /**
  * Name of host
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/system#hosts System#hosts}
  */
  readonly hosts?: SystemIpHostsVrfHosts[] | cdktf.IResolvable;
  /**
  * VRF name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/system#vrf System#vrf}
  */
  readonly vrf: string;
}

export function systemIpHostsVrfToTerraform(struct?: SystemIpHostsVrf | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hosts: cdktf.listMapper(systemIpHostsVrfHostsToTerraform, false)(struct!.hosts),
    vrf: cdktf.stringToTerraform(struct!.vrf),
  }
}


export function systemIpHostsVrfToHclTerraform(struct?: SystemIpHostsVrf | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hosts: {
      value: cdktf.listMapperHcl(systemIpHostsVrfHostsToHclTerraform, false)(struct!.hosts),
      isBlock: true,
      type: "list",
      storageClassType: "SystemIpHostsVrfHostsList",
    },
    vrf: {
      value: cdktf.stringToHclTerraform(struct!.vrf),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemIpHostsVrfOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemIpHostsVrf | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hosts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hosts = this._hosts?.internalValue;
    }
    if (this._vrf !== undefined) {
      hasAnyValues = true;
      internalValueResult.vrf = this._vrf;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemIpHostsVrf | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hosts.internalValue = undefined;
      this._vrf = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hosts.internalValue = value.hosts;
      this._vrf = value.vrf;
    }
  }

  // hosts - computed: false, optional: true, required: false
  private _hosts = new SystemIpHostsVrfHostsList(this, "hosts", false);
  public get hosts() {
    return this._hosts;
  }
  public putHosts(value: SystemIpHostsVrfHosts[] | cdktf.IResolvable) {
    this._hosts.internalValue = value;
  }
  public resetHosts() {
    this._hosts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostsInput() {
    return this._hosts.internalValue;
  }

  // vrf - computed: false, optional: false, required: true
  private _vrf?: string; 
  public get vrf() {
    return this.getStringAttribute('vrf');
  }
  public set vrf(value: string) {
    this._vrf = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vrfInput() {
    return this._vrf;
  }
}

export class SystemIpHostsVrfList extends cdktf.ComplexList {
  public internalValue? : SystemIpHostsVrf[] | cdktf.IResolvable

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
  public get(index: number): SystemIpHostsVrfOutputReference {
    return new SystemIpHostsVrfOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemIpHttpAuthenticationAaaCommandAuthorization {
  /**
  * Enable level
  *   - Range: `0`-`15`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/system#level System#level}
  */
  readonly level: number;
  /**
  * Use an authorization list with this name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/system#name System#name}
  */
  readonly name?: string;
}

export function systemIpHttpAuthenticationAaaCommandAuthorizationToTerraform(struct?: SystemIpHttpAuthenticationAaaCommandAuthorization | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    level: cdktf.numberToTerraform(struct!.level),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function systemIpHttpAuthenticationAaaCommandAuthorizationToHclTerraform(struct?: SystemIpHttpAuthenticationAaaCommandAuthorization | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    level: {
      value: cdktf.numberToHclTerraform(struct!.level),
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

export class SystemIpHttpAuthenticationAaaCommandAuthorizationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemIpHttpAuthenticationAaaCommandAuthorization | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._level !== undefined) {
      hasAnyValues = true;
      internalValueResult.level = this._level;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemIpHttpAuthenticationAaaCommandAuthorization | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._level = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._level = value.level;
      this._name = value.name;
    }
  }

  // level - computed: false, optional: false, required: true
  private _level?: number; 
  public get level() {
    return this.getNumberAttribute('level');
  }
  public set level(value: number) {
    this._level = value;
  }
  // Temporarily expose input value. Use with caution.
  public get levelInput() {
    return this._level;
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

export class SystemIpHttpAuthenticationAaaCommandAuthorizationList extends cdktf.ComplexList {
  public internalValue? : SystemIpHttpAuthenticationAaaCommandAuthorization[] | cdktf.IResolvable

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
  public get(index: number): SystemIpHttpAuthenticationAaaCommandAuthorizationOutputReference {
    return new SystemIpHttpAuthenticationAaaCommandAuthorizationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemIpNameServersVrf {
  /**
  * Domain server IPv4/IPv6 address (maximum of 6)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/system#servers System#servers}
  */
  readonly servers?: string[];
  /**
  * Specify VRF Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/system#vrf System#vrf}
  */
  readonly vrf: string;
}

export function systemIpNameServersVrfToTerraform(struct?: SystemIpNameServersVrf | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    servers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.servers),
    vrf: cdktf.stringToTerraform(struct!.vrf),
  }
}


export function systemIpNameServersVrfToHclTerraform(struct?: SystemIpNameServersVrf | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    servers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.servers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    vrf: {
      value: cdktf.stringToHclTerraform(struct!.vrf),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemIpNameServersVrfOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemIpNameServersVrf | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._servers !== undefined) {
      hasAnyValues = true;
      internalValueResult.servers = this._servers;
    }
    if (this._vrf !== undefined) {
      hasAnyValues = true;
      internalValueResult.vrf = this._vrf;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemIpNameServersVrf | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._servers = undefined;
      this._vrf = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._servers = value.servers;
      this._vrf = value.vrf;
    }
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

  // vrf - computed: false, optional: false, required: true
  private _vrf?: string; 
  public get vrf() {
    return this.getStringAttribute('vrf');
  }
  public set vrf(value: string) {
    this._vrf = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vrfInput() {
    return this._vrf;
  }
}

export class SystemIpNameServersVrfList extends cdktf.ComplexList {
  public internalValue? : SystemIpNameServersVrf[] | cdktf.IResolvable

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
  public get(index: number): SystemIpNameServersVrfOutputReference {
    return new SystemIpNameServersVrfOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemMulticastRoutingVrfs {
  /**
  * Distributed multicast switching
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/system#distributed System#distributed}
  */
  readonly distributed?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/system#vrf System#vrf}
  */
  readonly vrf: string;
}

export function systemMulticastRoutingVrfsToTerraform(struct?: SystemMulticastRoutingVrfs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    distributed: cdktf.booleanToTerraform(struct!.distributed),
    vrf: cdktf.stringToTerraform(struct!.vrf),
  }
}


export function systemMulticastRoutingVrfsToHclTerraform(struct?: SystemMulticastRoutingVrfs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    distributed: {
      value: cdktf.booleanToHclTerraform(struct!.distributed),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    vrf: {
      value: cdktf.stringToHclTerraform(struct!.vrf),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemMulticastRoutingVrfsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemMulticastRoutingVrfs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._distributed !== undefined) {
      hasAnyValues = true;
      internalValueResult.distributed = this._distributed;
    }
    if (this._vrf !== undefined) {
      hasAnyValues = true;
      internalValueResult.vrf = this._vrf;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemMulticastRoutingVrfs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._distributed = undefined;
      this._vrf = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._distributed = value.distributed;
      this._vrf = value.vrf;
    }
  }

  // distributed - computed: false, optional: true, required: false
  private _distributed?: boolean | cdktf.IResolvable; 
  public get distributed() {
    return this.getBooleanAttribute('distributed');
  }
  public set distributed(value: boolean | cdktf.IResolvable) {
    this._distributed = value;
  }
  public resetDistributed() {
    this._distributed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get distributedInput() {
    return this._distributed;
  }

  // vrf - computed: false, optional: false, required: true
  private _vrf?: string; 
  public get vrf() {
    return this.getStringAttribute('vrf');
  }
  public set vrf(value: string) {
    this._vrf = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vrfInput() {
    return this._vrf;
  }
}

export class SystemMulticastRoutingVrfsList extends cdktf.ComplexList {
  public internalValue? : SystemMulticastRoutingVrfs[] | cdktf.IResolvable

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
  public get(index: number): SystemMulticastRoutingVrfsOutputReference {
    return new SystemMulticastRoutingVrfsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemPnpProfiles {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/system#name System#name}
  */
  readonly name: string;
  /**
  * IPv4 address of the server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/system#transport_https_ipv4_ipv4_address System#transport_https_ipv4_ipv4_address}
  */
  readonly transportHttpsIpv4Ipv4Address?: string;
  /**
  * port number
  *   - Range: `1`-`65535`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/system#transport_https_ipv4_port System#transport_https_ipv4_port}
  */
  readonly transportHttpsIpv4Port?: number;
}

export function systemPnpProfilesToTerraform(struct?: SystemPnpProfiles | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    transport_https_ipv4_ipv4_address: cdktf.stringToTerraform(struct!.transportHttpsIpv4Ipv4Address),
    transport_https_ipv4_port: cdktf.numberToTerraform(struct!.transportHttpsIpv4Port),
  }
}


export function systemPnpProfilesToHclTerraform(struct?: SystemPnpProfiles | cdktf.IResolvable): any {
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
    transport_https_ipv4_ipv4_address: {
      value: cdktf.stringToHclTerraform(struct!.transportHttpsIpv4Ipv4Address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    transport_https_ipv4_port: {
      value: cdktf.numberToHclTerraform(struct!.transportHttpsIpv4Port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemPnpProfilesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemPnpProfiles | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._transportHttpsIpv4Ipv4Address !== undefined) {
      hasAnyValues = true;
      internalValueResult.transportHttpsIpv4Ipv4Address = this._transportHttpsIpv4Ipv4Address;
    }
    if (this._transportHttpsIpv4Port !== undefined) {
      hasAnyValues = true;
      internalValueResult.transportHttpsIpv4Port = this._transportHttpsIpv4Port;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemPnpProfiles | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._transportHttpsIpv4Ipv4Address = undefined;
      this._transportHttpsIpv4Port = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._transportHttpsIpv4Ipv4Address = value.transportHttpsIpv4Ipv4Address;
      this._transportHttpsIpv4Port = value.transportHttpsIpv4Port;
    }
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

  // transport_https_ipv4_ipv4_address - computed: false, optional: true, required: false
  private _transportHttpsIpv4Ipv4Address?: string; 
  public get transportHttpsIpv4Ipv4Address() {
    return this.getStringAttribute('transport_https_ipv4_ipv4_address');
  }
  public set transportHttpsIpv4Ipv4Address(value: string) {
    this._transportHttpsIpv4Ipv4Address = value;
  }
  public resetTransportHttpsIpv4Ipv4Address() {
    this._transportHttpsIpv4Ipv4Address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transportHttpsIpv4Ipv4AddressInput() {
    return this._transportHttpsIpv4Ipv4Address;
  }

  // transport_https_ipv4_port - computed: false, optional: true, required: false
  private _transportHttpsIpv4Port?: number; 
  public get transportHttpsIpv4Port() {
    return this.getNumberAttribute('transport_https_ipv4_port');
  }
  public set transportHttpsIpv4Port(value: number) {
    this._transportHttpsIpv4Port = value;
  }
  public resetTransportHttpsIpv4Port() {
    this._transportHttpsIpv4Port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transportHttpsIpv4PortInput() {
    return this._transportHttpsIpv4Port;
  }
}

export class SystemPnpProfilesList extends cdktf.ComplexList {
  public internalValue? : SystemPnpProfiles[] | cdktf.IResolvable

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
  public get(index: number): SystemPnpProfilesOutputReference {
    return new SystemPnpProfilesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemTableMapsMappings {
  /**
  * map from value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/system#from System#from}
  */
  readonly from: number;
  /**
  * map to value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/system#to System#to}
  */
  readonly to?: number;
}

export function systemTableMapsMappingsToTerraform(struct?: SystemTableMapsMappings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    from: cdktf.numberToTerraform(struct!.from),
    to: cdktf.numberToTerraform(struct!.to),
  }
}


export function systemTableMapsMappingsToHclTerraform(struct?: SystemTableMapsMappings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    from: {
      value: cdktf.numberToHclTerraform(struct!.from),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    to: {
      value: cdktf.numberToHclTerraform(struct!.to),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemTableMapsMappingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemTableMapsMappings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._from !== undefined) {
      hasAnyValues = true;
      internalValueResult.from = this._from;
    }
    if (this._to !== undefined) {
      hasAnyValues = true;
      internalValueResult.to = this._to;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemTableMapsMappings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._from = undefined;
      this._to = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._from = value.from;
      this._to = value.to;
    }
  }

  // from - computed: false, optional: false, required: true
  private _from?: number; 
  public get from() {
    return this.getNumberAttribute('from');
  }
  public set from(value: number) {
    this._from = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fromInput() {
    return this._from;
  }

  // to - computed: false, optional: true, required: false
  private _to?: number; 
  public get to() {
    return this.getNumberAttribute('to');
  }
  public set to(value: number) {
    this._to = value;
  }
  public resetTo() {
    this._to = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toInput() {
    return this._to;
  }
}

export class SystemTableMapsMappingsList extends cdktf.ComplexList {
  public internalValue? : SystemTableMapsMappings[] | cdktf.IResolvable

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
  public get(index: number): SystemTableMapsMappingsOutputReference {
    return new SystemTableMapsMappingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemTableMaps {
  /**
  * the default behavior for setting value not found in the table map
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/system#default System#default}
  */
  readonly default?: string;
  /**
  * map to-value from from-value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/system#mappings System#mappings}
  */
  readonly mappings?: SystemTableMapsMappings[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/system#name System#name}
  */
  readonly name: string;
}

export function systemTableMapsToTerraform(struct?: SystemTableMaps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default: cdktf.stringToTerraform(struct!.default),
    mappings: cdktf.listMapper(systemTableMapsMappingsToTerraform, false)(struct!.mappings),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function systemTableMapsToHclTerraform(struct?: SystemTableMaps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default: {
      value: cdktf.stringToHclTerraform(struct!.default),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mappings: {
      value: cdktf.listMapperHcl(systemTableMapsMappingsToHclTerraform, false)(struct!.mappings),
      isBlock: true,
      type: "list",
      storageClassType: "SystemTableMapsMappingsList",
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

export class SystemTableMapsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemTableMaps | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._default !== undefined) {
      hasAnyValues = true;
      internalValueResult.default = this._default;
    }
    if (this._mappings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mappings = this._mappings?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemTableMaps | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._default = undefined;
      this._mappings.internalValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._default = value.default;
      this._mappings.internalValue = value.mappings;
      this._name = value.name;
    }
  }

  // default - computed: false, optional: true, required: false
  private _default?: string; 
  public get default() {
    return this.getStringAttribute('default');
  }
  public set default(value: string) {
    this._default = value;
  }
  public resetDefault() {
    this._default = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInput() {
    return this._default;
  }

  // mappings - computed: false, optional: true, required: false
  private _mappings = new SystemTableMapsMappingsList(this, "mappings", false);
  public get mappings() {
    return this._mappings;
  }
  public putMappings(value: SystemTableMapsMappings[] | cdktf.IResolvable) {
    this._mappings.internalValue = value;
  }
  public resetMappings() {
    this._mappings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mappingsInput() {
    return this._mappings.internalValue;
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
}

export class SystemTableMapsList extends cdktf.ComplexList {
  public internalValue? : SystemTableMaps[] | cdktf.IResolvable

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
  public get(index: number): SystemTableMapsOutputReference {
    return new SystemTableMapsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemTrackObjects {
  /**
  * Entry number
  *   - Range: `0`-`4294967295`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/system#ip_sla_number System#ip_sla_number}
  */
  readonly ipSlaNumber?: number;
  /**
  * Reachability
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/system#ip_sla_reachability System#ip_sla_reachability}
  */
  readonly ipSlaReachability?: boolean | cdktf.IResolvable;
  /**
  * Tracked object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/system#number System#number}
  */
  readonly number: string;
}

export function systemTrackObjectsToTerraform(struct?: SystemTrackObjects | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_sla_number: cdktf.numberToTerraform(struct!.ipSlaNumber),
    ip_sla_reachability: cdktf.booleanToTerraform(struct!.ipSlaReachability),
    number: cdktf.stringToTerraform(struct!.number),
  }
}


export function systemTrackObjectsToHclTerraform(struct?: SystemTrackObjects | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip_sla_number: {
      value: cdktf.numberToHclTerraform(struct!.ipSlaNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ip_sla_reachability: {
      value: cdktf.booleanToHclTerraform(struct!.ipSlaReachability),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    number: {
      value: cdktf.stringToHclTerraform(struct!.number),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemTrackObjectsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemTrackObjects | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipSlaNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipSlaNumber = this._ipSlaNumber;
    }
    if (this._ipSlaReachability !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipSlaReachability = this._ipSlaReachability;
    }
    if (this._number !== undefined) {
      hasAnyValues = true;
      internalValueResult.number = this._number;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemTrackObjects | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipSlaNumber = undefined;
      this._ipSlaReachability = undefined;
      this._number = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipSlaNumber = value.ipSlaNumber;
      this._ipSlaReachability = value.ipSlaReachability;
      this._number = value.number;
    }
  }

  // ip_sla_number - computed: false, optional: true, required: false
  private _ipSlaNumber?: number; 
  public get ipSlaNumber() {
    return this.getNumberAttribute('ip_sla_number');
  }
  public set ipSlaNumber(value: number) {
    this._ipSlaNumber = value;
  }
  public resetIpSlaNumber() {
    this._ipSlaNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipSlaNumberInput() {
    return this._ipSlaNumber;
  }

  // ip_sla_reachability - computed: false, optional: true, required: false
  private _ipSlaReachability?: boolean | cdktf.IResolvable; 
  public get ipSlaReachability() {
    return this.getBooleanAttribute('ip_sla_reachability');
  }
  public set ipSlaReachability(value: boolean | cdktf.IResolvable) {
    this._ipSlaReachability = value;
  }
  public resetIpSlaReachability() {
    this._ipSlaReachability = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipSlaReachabilityInput() {
    return this._ipSlaReachability;
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
}

export class SystemTrackObjectsList extends cdktf.ComplexList {
  public internalValue? : SystemTrackObjects[] | cdktf.IResolvable

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
  public get(index: number): SystemTrackObjectsOutputReference {
    return new SystemTrackObjectsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/system iosxe_system}
*/
export class System extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "iosxe_system";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a System resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the System to import
  * @param importFromId The id of the existing System that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/system#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the System to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "iosxe_system", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/system iosxe_system} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SystemConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'iosxe_system',
      terraformGeneratorMetadata: {
        providerName: 'iosxe',
        providerVersion: '0.14.4',
        providerVersionConstraint: '0.14.4'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accessSessionMacMoveDeny = config.accessSessionMacMoveDeny;
    this._archiveLogConfigLoggingEnable = config.archiveLogConfigLoggingEnable;
    this._archiveLogConfigLoggingSize = config.archiveLogConfigLoggingSize;
    this._archiveMaximum = config.archiveMaximum;
    this._archivePath = config.archivePath;
    this._archiveTimePeriod = config.archiveTimePeriod;
    this._archiveWriteMemory = config.archiveWriteMemory;
    this._authenticationMacMoveDenyUncontrolled = config.authenticationMacMoveDenyUncontrolled;
    this._authenticationMacMovePermit = config.authenticationMacMovePermit;
    this._bootSystemBootfiles.internalValue = config.bootSystemBootfiles;
    this._bootSystemFlashFiles.internalValue = config.bootSystemFlashFiles;
    this._callHomeCiscoTac1DestinationTransportMethod = config.callHomeCiscoTac1DestinationTransportMethod;
    this._callHomeCiscoTac1ProfileActive = config.callHomeCiscoTac1ProfileActive;
    this._callHomeContactEmail = config.callHomeContactEmail;
    this._cispEnable = config.cispEnable;
    this._controlPlaneServicePolicyInput = config.controlPlaneServicePolicyInput;
    this._device = config.device;
    this._deviceClassifier = config.deviceClassifier;
    this._diagnosticBootupLevel = config.diagnosticBootupLevel;
    this._diagnosticEventLogSize = config.diagnosticEventLogSize;
    this._enableSecret = config.enableSecret;
    this._enableSecretLevel = config.enableSecretLevel;
    this._enableSecretType = config.enableSecretType;
    this._epmLogging = config.epmLogging;
    this._ethernetCfmAlarmConfigDelay = config.ethernetCfmAlarmConfigDelay;
    this._ethernetCfmAlarmConfigReset = config.ethernetCfmAlarmConfigReset;
    this._hostname = config.hostname;
    this._igmpSnoopingQuerier = config.igmpSnoopingQuerier;
    this._igmpSnoopingQuerierMaxResponseTime = config.igmpSnoopingQuerierMaxResponseTime;
    this._igmpSnoopingQuerierTimerExpiry = config.igmpSnoopingQuerierTimerExpiry;
    this._igmpSnoopingQuerierVersion = config.igmpSnoopingQuerierVersion;
    this._ipBgpCommunityNewFormat = config.ipBgpCommunityNewFormat;
    this._ipCefLoadSharingAlgorithmIncludePortsDestination = config.ipCefLoadSharingAlgorithmIncludePortsDestination;
    this._ipCefLoadSharingAlgorithmIncludePortsSource = config.ipCefLoadSharingAlgorithmIncludePortsSource;
    this._ipDefaultGateway = config.ipDefaultGateway;
    this._ipDomainListNames = config.ipDomainListNames;
    this._ipDomainListVrf = config.ipDomainListVrf;
    this._ipDomainListVrfDomain = config.ipDomainListVrfDomain;
    this._ipDomainLookup = config.ipDomainLookup;
    this._ipDomainLookupNsap = config.ipDomainLookupNsap;
    this._ipDomainLookupRecursive = config.ipDomainLookupRecursive;
    this._ipDomainLookupSourceInterfaceFiveGigabitEthernet = config.ipDomainLookupSourceInterfaceFiveGigabitEthernet;
    this._ipDomainLookupSourceInterfaceFortyGigabitEthernet = config.ipDomainLookupSourceInterfaceFortyGigabitEthernet;
    this._ipDomainLookupSourceInterfaceGigabitEthernet = config.ipDomainLookupSourceInterfaceGigabitEthernet;
    this._ipDomainLookupSourceInterfaceHundredGigabitEthernet = config.ipDomainLookupSourceInterfaceHundredGigabitEthernet;
    this._ipDomainLookupSourceInterfaceLoopback = config.ipDomainLookupSourceInterfaceLoopback;
    this._ipDomainLookupSourceInterfaceTenGigabitEthernet = config.ipDomainLookupSourceInterfaceTenGigabitEthernet;
    this._ipDomainLookupSourceInterfaceTwentyFiveGigabitEthernet = config.ipDomainLookupSourceInterfaceTwentyFiveGigabitEthernet;
    this._ipDomainLookupSourceInterfaceTwoGigabitEthernet = config.ipDomainLookupSourceInterfaceTwoGigabitEthernet;
    this._ipDomainLookupSourceInterfaceVlan = config.ipDomainLookupSourceInterfaceVlan;
    this._ipDomainLookupVrfs.internalValue = config.ipDomainLookupVrfs;
    this._ipDomainName = config.ipDomainName;
    this._ipForwardProtocolNd = config.ipForwardProtocolNd;
    this._ipFtpPassive = config.ipFtpPassive;
    this._ipHosts.internalValue = config.ipHosts;
    this._ipHostsVrf.internalValue = config.ipHostsVrf;
    this._ipHttpAccessClass = config.ipHttpAccessClass;
    this._ipHttpActiveSessionModules = config.ipHttpActiveSessionModules;
    this._ipHttpAuthenticationAaa = config.ipHttpAuthenticationAaa;
    this._ipHttpAuthenticationAaaCommandAuthorization.internalValue = config.ipHttpAuthenticationAaaCommandAuthorization;
    this._ipHttpAuthenticationAaaExecAuthorization = config.ipHttpAuthenticationAaaExecAuthorization;
    this._ipHttpAuthenticationAaaLoginAuthentication = config.ipHttpAuthenticationAaaLoginAuthentication;
    this._ipHttpAuthenticationLocal = config.ipHttpAuthenticationLocal;
    this._ipHttpClientSecureTrustpoint = config.ipHttpClientSecureTrustpoint;
    this._ipHttpClientSourceInterface = config.ipHttpClientSourceInterface;
    this._ipHttpMaxConnections = config.ipHttpMaxConnections;
    this._ipHttpSecureActiveSessionModules = config.ipHttpSecureActiveSessionModules;
    this._ipHttpSecureServer = config.ipHttpSecureServer;
    this._ipHttpSecureTrustpoint = config.ipHttpSecureTrustpoint;
    this._ipHttpServer = config.ipHttpServer;
    this._ipHttpTlsVersion = config.ipHttpTlsVersion;
    this._ipMulticastRouteLimit = config.ipMulticastRouteLimit;
    this._ipMulticastRouting = config.ipMulticastRouting;
    this._ipMulticastRoutingDistributed = config.ipMulticastRoutingDistributed;
    this._ipNameServers = config.ipNameServers;
    this._ipNameServersVrf.internalValue = config.ipNameServersVrf;
    this._ipNbarClassificationDnsClassifyByDomain = config.ipNbarClassificationDnsClassifyByDomain;
    this._ipRadiusSourceInterfaceFiveGigabitEthernet = config.ipRadiusSourceInterfaceFiveGigabitEthernet;
    this._ipRadiusSourceInterfaceFortyGigabitEthernet = config.ipRadiusSourceInterfaceFortyGigabitEthernet;
    this._ipRadiusSourceInterfaceGigabitEthernet = config.ipRadiusSourceInterfaceGigabitEthernet;
    this._ipRadiusSourceInterfaceHundredGigabitEthernet = config.ipRadiusSourceInterfaceHundredGigabitEthernet;
    this._ipRadiusSourceInterfaceLoopback = config.ipRadiusSourceInterfaceLoopback;
    this._ipRadiusSourceInterfaceTenGigabitEthernet = config.ipRadiusSourceInterfaceTenGigabitEthernet;
    this._ipRadiusSourceInterfaceTwentyFiveGigabitEthernet = config.ipRadiusSourceInterfaceTwentyFiveGigabitEthernet;
    this._ipRadiusSourceInterfaceTwoGigabitEthernet = config.ipRadiusSourceInterfaceTwoGigabitEthernet;
    this._ipRadiusSourceInterfaceVlan = config.ipRadiusSourceInterfaceVlan;
    this._ipRadiusSourceInterfaceVrf = config.ipRadiusSourceInterfaceVrf;
    this._ipRouting = config.ipRouting;
    this._ipRoutingProtocolPurgeInterface = config.ipRoutingProtocolPurgeInterface;
    this._ipScpServerEnable = config.ipScpServerEnable;
    this._ipSourceRoute = config.ipSourceRoute;
    this._ipSshAuthenticationRetries = config.ipSshAuthenticationRetries;
    this._ipSshBulkMode = config.ipSshBulkMode;
    this._ipSshBulkModeWindowSize = config.ipSshBulkModeWindowSize;
    this._ipSshSourceInterfaceFiveGigabitEthernet = config.ipSshSourceInterfaceFiveGigabitEthernet;
    this._ipSshSourceInterfaceFortyGigabitEthernet = config.ipSshSourceInterfaceFortyGigabitEthernet;
    this._ipSshSourceInterfaceGigabitEthernet = config.ipSshSourceInterfaceGigabitEthernet;
    this._ipSshSourceInterfaceHundredGigabitEthernet = config.ipSshSourceInterfaceHundredGigabitEthernet;
    this._ipSshSourceInterfaceLoopback = config.ipSshSourceInterfaceLoopback;
    this._ipSshSourceInterfaceTenGigabitEthernet = config.ipSshSourceInterfaceTenGigabitEthernet;
    this._ipSshSourceInterfaceTwentyFiveGigabitEthernet = config.ipSshSourceInterfaceTwentyFiveGigabitEthernet;
    this._ipSshSourceInterfaceTwoGigabitEthernet = config.ipSshSourceInterfaceTwoGigabitEthernet;
    this._ipSshSourceInterfaceVlan = config.ipSshSourceInterfaceVlan;
    this._ipSshTimeOut = config.ipSshTimeOut;
    this._ipSshVersion = config.ipSshVersion;
    this._ipSshVersionLegacy = config.ipSshVersionLegacy;
    this._ipTacacsSourceInterfaceFiveGigabitEthernet = config.ipTacacsSourceInterfaceFiveGigabitEthernet;
    this._ipTacacsSourceInterfaceFortyGigabitEthernet = config.ipTacacsSourceInterfaceFortyGigabitEthernet;
    this._ipTacacsSourceInterfaceGigabitEthernet = config.ipTacacsSourceInterfaceGigabitEthernet;
    this._ipTacacsSourceInterfaceHundredGigabitEthernet = config.ipTacacsSourceInterfaceHundredGigabitEthernet;
    this._ipTacacsSourceInterfaceLoopback = config.ipTacacsSourceInterfaceLoopback;
    this._ipTacacsSourceInterfaceTenGigabitEthernet = config.ipTacacsSourceInterfaceTenGigabitEthernet;
    this._ipTacacsSourceInterfaceTwentyFiveGigabitEthernet = config.ipTacacsSourceInterfaceTwentyFiveGigabitEthernet;
    this._ipTacacsSourceInterfaceTwoGigabitEthernet = config.ipTacacsSourceInterfaceTwoGigabitEthernet;
    this._ipTacacsSourceInterfaceVlan = config.ipTacacsSourceInterfaceVlan;
    this._ipTacacsSourceInterfaceVrf = config.ipTacacsSourceInterfaceVrf;
    this._ipTcpMss = config.ipTcpMss;
    this._ipTcpPathMtuDiscovery = config.ipTcpPathMtuDiscovery;
    this._ipTcpWindowSize = config.ipTcpWindowSize;
    this._ipv6CefLoadSharingAlgorithmIncludePortsDestination = config.ipv6CefLoadSharingAlgorithmIncludePortsDestination;
    this._ipv6CefLoadSharingAlgorithmIncludePortsSource = config.ipv6CefLoadSharingAlgorithmIncludePortsSource;
    this._ipv6MulticastRouting = config.ipv6MulticastRouting;
    this._ipv6UnicastRouting = config.ipv6UnicastRouting;
    this._loginDelay = config.loginDelay;
    this._loginOnFailure = config.loginOnFailure;
    this._loginOnFailureLog = config.loginOnFailureLog;
    this._loginOnSuccess = config.loginOnSuccess;
    this._loginOnSuccessLog = config.loginOnSuccessLog;
    this._memoryFreeLowWatermarkProcessor = config.memoryFreeLowWatermarkProcessor;
    this._mldSnooping = config.mldSnooping;
    this._mldSnoopingQuerier = config.mldSnoopingQuerier;
    this._mtu = config.mtu;
    this._multicastRoutingSwitch = config.multicastRoutingSwitch;
    this._multicastRoutingVrfs.internalValue = config.multicastRoutingVrfs;
    this._multilinkPppBundleName = config.multilinkPppBundleName;
    this._pnpProfiles.internalValue = config.pnpProfiles;
    this._portChannelLoadBalance = config.portChannelLoadBalance;
    this._redundancy = config.redundancy;
    this._redundancyMode = config.redundancyMode;
    this._securityPasswordsMinLength = config.securityPasswordsMinLength;
    this._standbyRedirects = config.standbyRedirects;
    this._standbyRedirectsEnableDisable = config.standbyRedirectsEnableDisable;
    this._subscriberTemplating = config.subscriberTemplating;
    this._tableMaps.internalValue = config.tableMaps;
    this._tftpSourceInterfaceFiveGigabitEthernet = config.tftpSourceInterfaceFiveGigabitEthernet;
    this._tftpSourceInterfaceFortyGigabitEthernet = config.tftpSourceInterfaceFortyGigabitEthernet;
    this._tftpSourceInterfaceGigabitEthernet = config.tftpSourceInterfaceGigabitEthernet;
    this._tftpSourceInterfaceHundredGigabitEthernet = config.tftpSourceInterfaceHundredGigabitEthernet;
    this._tftpSourceInterfaceLoopback = config.tftpSourceInterfaceLoopback;
    this._tftpSourceInterfaceTenGigabitEthernet = config.tftpSourceInterfaceTenGigabitEthernet;
    this._tftpSourceInterfaceTwentyFiveGigabitEthernet = config.tftpSourceInterfaceTwentyFiveGigabitEthernet;
    this._tftpSourceInterfaceTwoGigabitEthernet = config.tftpSourceInterfaceTwoGigabitEthernet;
    this._tftpSourceInterfaceVlan = config.tftpSourceInterfaceVlan;
    this._trackObjects.internalValue = config.trackObjects;
    this._transceiverTypeAllMonitoring = config.transceiverTypeAllMonitoring;
    this._version = config.version;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_session_mac_move_deny - computed: false, optional: true, required: false
  private _accessSessionMacMoveDeny?: boolean | cdktf.IResolvable; 
  public get accessSessionMacMoveDeny() {
    return this.getBooleanAttribute('access_session_mac_move_deny');
  }
  public set accessSessionMacMoveDeny(value: boolean | cdktf.IResolvable) {
    this._accessSessionMacMoveDeny = value;
  }
  public resetAccessSessionMacMoveDeny() {
    this._accessSessionMacMoveDeny = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessSessionMacMoveDenyInput() {
    return this._accessSessionMacMoveDeny;
  }

  // archive_log_config_logging_enable - computed: false, optional: true, required: false
  private _archiveLogConfigLoggingEnable?: boolean | cdktf.IResolvable; 
  public get archiveLogConfigLoggingEnable() {
    return this.getBooleanAttribute('archive_log_config_logging_enable');
  }
  public set archiveLogConfigLoggingEnable(value: boolean | cdktf.IResolvable) {
    this._archiveLogConfigLoggingEnable = value;
  }
  public resetArchiveLogConfigLoggingEnable() {
    this._archiveLogConfigLoggingEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get archiveLogConfigLoggingEnableInput() {
    return this._archiveLogConfigLoggingEnable;
  }

  // archive_log_config_logging_size - computed: false, optional: true, required: false
  private _archiveLogConfigLoggingSize?: number; 
  public get archiveLogConfigLoggingSize() {
    return this.getNumberAttribute('archive_log_config_logging_size');
  }
  public set archiveLogConfigLoggingSize(value: number) {
    this._archiveLogConfigLoggingSize = value;
  }
  public resetArchiveLogConfigLoggingSize() {
    this._archiveLogConfigLoggingSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get archiveLogConfigLoggingSizeInput() {
    return this._archiveLogConfigLoggingSize;
  }

  // archive_maximum - computed: false, optional: true, required: false
  private _archiveMaximum?: number; 
  public get archiveMaximum() {
    return this.getNumberAttribute('archive_maximum');
  }
  public set archiveMaximum(value: number) {
    this._archiveMaximum = value;
  }
  public resetArchiveMaximum() {
    this._archiveMaximum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get archiveMaximumInput() {
    return this._archiveMaximum;
  }

  // archive_path - computed: false, optional: true, required: false
  private _archivePath?: string; 
  public get archivePath() {
    return this.getStringAttribute('archive_path');
  }
  public set archivePath(value: string) {
    this._archivePath = value;
  }
  public resetArchivePath() {
    this._archivePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get archivePathInput() {
    return this._archivePath;
  }

  // archive_time_period - computed: false, optional: true, required: false
  private _archiveTimePeriod?: number; 
  public get archiveTimePeriod() {
    return this.getNumberAttribute('archive_time_period');
  }
  public set archiveTimePeriod(value: number) {
    this._archiveTimePeriod = value;
  }
  public resetArchiveTimePeriod() {
    this._archiveTimePeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get archiveTimePeriodInput() {
    return this._archiveTimePeriod;
  }

  // archive_write_memory - computed: false, optional: true, required: false
  private _archiveWriteMemory?: boolean | cdktf.IResolvable; 
  public get archiveWriteMemory() {
    return this.getBooleanAttribute('archive_write_memory');
  }
  public set archiveWriteMemory(value: boolean | cdktf.IResolvable) {
    this._archiveWriteMemory = value;
  }
  public resetArchiveWriteMemory() {
    this._archiveWriteMemory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get archiveWriteMemoryInput() {
    return this._archiveWriteMemory;
  }

  // authentication_mac_move_deny_uncontrolled - computed: false, optional: true, required: false
  private _authenticationMacMoveDenyUncontrolled?: boolean | cdktf.IResolvable; 
  public get authenticationMacMoveDenyUncontrolled() {
    return this.getBooleanAttribute('authentication_mac_move_deny_uncontrolled');
  }
  public set authenticationMacMoveDenyUncontrolled(value: boolean | cdktf.IResolvable) {
    this._authenticationMacMoveDenyUncontrolled = value;
  }
  public resetAuthenticationMacMoveDenyUncontrolled() {
    this._authenticationMacMoveDenyUncontrolled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationMacMoveDenyUncontrolledInput() {
    return this._authenticationMacMoveDenyUncontrolled;
  }

  // authentication_mac_move_permit - computed: false, optional: true, required: false
  private _authenticationMacMovePermit?: boolean | cdktf.IResolvable; 
  public get authenticationMacMovePermit() {
    return this.getBooleanAttribute('authentication_mac_move_permit');
  }
  public set authenticationMacMovePermit(value: boolean | cdktf.IResolvable) {
    this._authenticationMacMovePermit = value;
  }
  public resetAuthenticationMacMovePermit() {
    this._authenticationMacMovePermit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationMacMovePermitInput() {
    return this._authenticationMacMovePermit;
  }

  // boot_system_bootfiles - computed: false, optional: true, required: false
  private _bootSystemBootfiles = new SystemBootSystemBootfilesList(this, "boot_system_bootfiles", false);
  public get bootSystemBootfiles() {
    return this._bootSystemBootfiles;
  }
  public putBootSystemBootfiles(value: SystemBootSystemBootfiles[] | cdktf.IResolvable) {
    this._bootSystemBootfiles.internalValue = value;
  }
  public resetBootSystemBootfiles() {
    this._bootSystemBootfiles.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootSystemBootfilesInput() {
    return this._bootSystemBootfiles.internalValue;
  }

  // boot_system_flash_files - computed: false, optional: true, required: false
  private _bootSystemFlashFiles = new SystemBootSystemFlashFilesList(this, "boot_system_flash_files", false);
  public get bootSystemFlashFiles() {
    return this._bootSystemFlashFiles;
  }
  public putBootSystemFlashFiles(value: SystemBootSystemFlashFiles[] | cdktf.IResolvable) {
    this._bootSystemFlashFiles.internalValue = value;
  }
  public resetBootSystemFlashFiles() {
    this._bootSystemFlashFiles.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootSystemFlashFilesInput() {
    return this._bootSystemFlashFiles.internalValue;
  }

  // call_home_cisco_tac_1_destination_transport_method - computed: false, optional: true, required: false
  private _callHomeCiscoTac1DestinationTransportMethod?: string; 
  public get callHomeCiscoTac1DestinationTransportMethod() {
    return this.getStringAttribute('call_home_cisco_tac_1_destination_transport_method');
  }
  public set callHomeCiscoTac1DestinationTransportMethod(value: string) {
    this._callHomeCiscoTac1DestinationTransportMethod = value;
  }
  public resetCallHomeCiscoTac1DestinationTransportMethod() {
    this._callHomeCiscoTac1DestinationTransportMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get callHomeCiscoTac1DestinationTransportMethodInput() {
    return this._callHomeCiscoTac1DestinationTransportMethod;
  }

  // call_home_cisco_tac_1_profile_active - computed: false, optional: true, required: false
  private _callHomeCiscoTac1ProfileActive?: boolean | cdktf.IResolvable; 
  public get callHomeCiscoTac1ProfileActive() {
    return this.getBooleanAttribute('call_home_cisco_tac_1_profile_active');
  }
  public set callHomeCiscoTac1ProfileActive(value: boolean | cdktf.IResolvable) {
    this._callHomeCiscoTac1ProfileActive = value;
  }
  public resetCallHomeCiscoTac1ProfileActive() {
    this._callHomeCiscoTac1ProfileActive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get callHomeCiscoTac1ProfileActiveInput() {
    return this._callHomeCiscoTac1ProfileActive;
  }

  // call_home_contact_email - computed: false, optional: true, required: false
  private _callHomeContactEmail?: string; 
  public get callHomeContactEmail() {
    return this.getStringAttribute('call_home_contact_email');
  }
  public set callHomeContactEmail(value: string) {
    this._callHomeContactEmail = value;
  }
  public resetCallHomeContactEmail() {
    this._callHomeContactEmail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get callHomeContactEmailInput() {
    return this._callHomeContactEmail;
  }

  // cisp_enable - computed: false, optional: true, required: false
  private _cispEnable?: boolean | cdktf.IResolvable; 
  public get cispEnable() {
    return this.getBooleanAttribute('cisp_enable');
  }
  public set cispEnable(value: boolean | cdktf.IResolvable) {
    this._cispEnable = value;
  }
  public resetCispEnable() {
    this._cispEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cispEnableInput() {
    return this._cispEnable;
  }

  // control_plane_service_policy_input - computed: false, optional: true, required: false
  private _controlPlaneServicePolicyInput?: string; 
  public get controlPlaneServicePolicyInput() {
    return this.getStringAttribute('control_plane_service_policy_input');
  }
  public set controlPlaneServicePolicyInput(value: string) {
    this._controlPlaneServicePolicyInput = value;
  }
  public resetControlPlaneServicePolicyInput() {
    this._controlPlaneServicePolicyInput = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get controlPlaneServicePolicyInputInput() {
    return this._controlPlaneServicePolicyInput;
  }

  // device - computed: false, optional: true, required: false
  private _device?: string; 
  public get device() {
    return this.getStringAttribute('device');
  }
  public set device(value: string) {
    this._device = value;
  }
  public resetDevice() {
    this._device = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceInput() {
    return this._device;
  }

  // device_classifier - computed: false, optional: true, required: false
  private _deviceClassifier?: boolean | cdktf.IResolvable; 
  public get deviceClassifier() {
    return this.getBooleanAttribute('device_classifier');
  }
  public set deviceClassifier(value: boolean | cdktf.IResolvable) {
    this._deviceClassifier = value;
  }
  public resetDeviceClassifier() {
    this._deviceClassifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceClassifierInput() {
    return this._deviceClassifier;
  }

  // diagnostic_bootup_level - computed: false, optional: true, required: false
  private _diagnosticBootupLevel?: string; 
  public get diagnosticBootupLevel() {
    return this.getStringAttribute('diagnostic_bootup_level');
  }
  public set diagnosticBootupLevel(value: string) {
    this._diagnosticBootupLevel = value;
  }
  public resetDiagnosticBootupLevel() {
    this._diagnosticBootupLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diagnosticBootupLevelInput() {
    return this._diagnosticBootupLevel;
  }

  // diagnostic_event_log_size - computed: false, optional: true, required: false
  private _diagnosticEventLogSize?: number; 
  public get diagnosticEventLogSize() {
    return this.getNumberAttribute('diagnostic_event_log_size');
  }
  public set diagnosticEventLogSize(value: number) {
    this._diagnosticEventLogSize = value;
  }
  public resetDiagnosticEventLogSize() {
    this._diagnosticEventLogSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diagnosticEventLogSizeInput() {
    return this._diagnosticEventLogSize;
  }

  // enable_secret - computed: false, optional: true, required: false
  private _enableSecret?: string; 
  public get enableSecret() {
    return this.getStringAttribute('enable_secret');
  }
  public set enableSecret(value: string) {
    this._enableSecret = value;
  }
  public resetEnableSecret() {
    this._enableSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableSecretInput() {
    return this._enableSecret;
  }

  // enable_secret_level - computed: false, optional: true, required: false
  private _enableSecretLevel?: number; 
  public get enableSecretLevel() {
    return this.getNumberAttribute('enable_secret_level');
  }
  public set enableSecretLevel(value: number) {
    this._enableSecretLevel = value;
  }
  public resetEnableSecretLevel() {
    this._enableSecretLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableSecretLevelInput() {
    return this._enableSecretLevel;
  }

  // enable_secret_type - computed: false, optional: true, required: false
  private _enableSecretType?: string; 
  public get enableSecretType() {
    return this.getStringAttribute('enable_secret_type');
  }
  public set enableSecretType(value: string) {
    this._enableSecretType = value;
  }
  public resetEnableSecretType() {
    this._enableSecretType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableSecretTypeInput() {
    return this._enableSecretType;
  }

  // epm_logging - computed: false, optional: true, required: false
  private _epmLogging?: boolean | cdktf.IResolvable; 
  public get epmLogging() {
    return this.getBooleanAttribute('epm_logging');
  }
  public set epmLogging(value: boolean | cdktf.IResolvable) {
    this._epmLogging = value;
  }
  public resetEpmLogging() {
    this._epmLogging = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get epmLoggingInput() {
    return this._epmLogging;
  }

  // ethernet_cfm_alarm_config_delay - computed: false, optional: true, required: false
  private _ethernetCfmAlarmConfigDelay?: number; 
  public get ethernetCfmAlarmConfigDelay() {
    return this.getNumberAttribute('ethernet_cfm_alarm_config_delay');
  }
  public set ethernetCfmAlarmConfigDelay(value: number) {
    this._ethernetCfmAlarmConfigDelay = value;
  }
  public resetEthernetCfmAlarmConfigDelay() {
    this._ethernetCfmAlarmConfigDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ethernetCfmAlarmConfigDelayInput() {
    return this._ethernetCfmAlarmConfigDelay;
  }

  // ethernet_cfm_alarm_config_reset - computed: false, optional: true, required: false
  private _ethernetCfmAlarmConfigReset?: number; 
  public get ethernetCfmAlarmConfigReset() {
    return this.getNumberAttribute('ethernet_cfm_alarm_config_reset');
  }
  public set ethernetCfmAlarmConfigReset(value: number) {
    this._ethernetCfmAlarmConfigReset = value;
  }
  public resetEthernetCfmAlarmConfigReset() {
    this._ethernetCfmAlarmConfigReset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ethernetCfmAlarmConfigResetInput() {
    return this._ethernetCfmAlarmConfigReset;
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // igmp_snooping_querier - computed: false, optional: true, required: false
  private _igmpSnoopingQuerier?: boolean | cdktf.IResolvable; 
  public get igmpSnoopingQuerier() {
    return this.getBooleanAttribute('igmp_snooping_querier');
  }
  public set igmpSnoopingQuerier(value: boolean | cdktf.IResolvable) {
    this._igmpSnoopingQuerier = value;
  }
  public resetIgmpSnoopingQuerier() {
    this._igmpSnoopingQuerier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get igmpSnoopingQuerierInput() {
    return this._igmpSnoopingQuerier;
  }

  // igmp_snooping_querier_max_response_time - computed: false, optional: true, required: false
  private _igmpSnoopingQuerierMaxResponseTime?: number; 
  public get igmpSnoopingQuerierMaxResponseTime() {
    return this.getNumberAttribute('igmp_snooping_querier_max_response_time');
  }
  public set igmpSnoopingQuerierMaxResponseTime(value: number) {
    this._igmpSnoopingQuerierMaxResponseTime = value;
  }
  public resetIgmpSnoopingQuerierMaxResponseTime() {
    this._igmpSnoopingQuerierMaxResponseTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get igmpSnoopingQuerierMaxResponseTimeInput() {
    return this._igmpSnoopingQuerierMaxResponseTime;
  }

  // igmp_snooping_querier_timer_expiry - computed: false, optional: true, required: false
  private _igmpSnoopingQuerierTimerExpiry?: number; 
  public get igmpSnoopingQuerierTimerExpiry() {
    return this.getNumberAttribute('igmp_snooping_querier_timer_expiry');
  }
  public set igmpSnoopingQuerierTimerExpiry(value: number) {
    this._igmpSnoopingQuerierTimerExpiry = value;
  }
  public resetIgmpSnoopingQuerierTimerExpiry() {
    this._igmpSnoopingQuerierTimerExpiry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get igmpSnoopingQuerierTimerExpiryInput() {
    return this._igmpSnoopingQuerierTimerExpiry;
  }

  // igmp_snooping_querier_version - computed: false, optional: true, required: false
  private _igmpSnoopingQuerierVersion?: number; 
  public get igmpSnoopingQuerierVersion() {
    return this.getNumberAttribute('igmp_snooping_querier_version');
  }
  public set igmpSnoopingQuerierVersion(value: number) {
    this._igmpSnoopingQuerierVersion = value;
  }
  public resetIgmpSnoopingQuerierVersion() {
    this._igmpSnoopingQuerierVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get igmpSnoopingQuerierVersionInput() {
    return this._igmpSnoopingQuerierVersion;
  }

  // ip_bgp_community_new_format - computed: false, optional: true, required: false
  private _ipBgpCommunityNewFormat?: boolean | cdktf.IResolvable; 
  public get ipBgpCommunityNewFormat() {
    return this.getBooleanAttribute('ip_bgp_community_new_format');
  }
  public set ipBgpCommunityNewFormat(value: boolean | cdktf.IResolvable) {
    this._ipBgpCommunityNewFormat = value;
  }
  public resetIpBgpCommunityNewFormat() {
    this._ipBgpCommunityNewFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipBgpCommunityNewFormatInput() {
    return this._ipBgpCommunityNewFormat;
  }

  // ip_cef_load_sharing_algorithm_include_ports_destination - computed: false, optional: true, required: false
  private _ipCefLoadSharingAlgorithmIncludePortsDestination?: boolean | cdktf.IResolvable; 
  public get ipCefLoadSharingAlgorithmIncludePortsDestination() {
    return this.getBooleanAttribute('ip_cef_load_sharing_algorithm_include_ports_destination');
  }
  public set ipCefLoadSharingAlgorithmIncludePortsDestination(value: boolean | cdktf.IResolvable) {
    this._ipCefLoadSharingAlgorithmIncludePortsDestination = value;
  }
  public resetIpCefLoadSharingAlgorithmIncludePortsDestination() {
    this._ipCefLoadSharingAlgorithmIncludePortsDestination = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipCefLoadSharingAlgorithmIncludePortsDestinationInput() {
    return this._ipCefLoadSharingAlgorithmIncludePortsDestination;
  }

  // ip_cef_load_sharing_algorithm_include_ports_source - computed: false, optional: true, required: false
  private _ipCefLoadSharingAlgorithmIncludePortsSource?: boolean | cdktf.IResolvable; 
  public get ipCefLoadSharingAlgorithmIncludePortsSource() {
    return this.getBooleanAttribute('ip_cef_load_sharing_algorithm_include_ports_source');
  }
  public set ipCefLoadSharingAlgorithmIncludePortsSource(value: boolean | cdktf.IResolvable) {
    this._ipCefLoadSharingAlgorithmIncludePortsSource = value;
  }
  public resetIpCefLoadSharingAlgorithmIncludePortsSource() {
    this._ipCefLoadSharingAlgorithmIncludePortsSource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipCefLoadSharingAlgorithmIncludePortsSourceInput() {
    return this._ipCefLoadSharingAlgorithmIncludePortsSource;
  }

  // ip_default_gateway - computed: false, optional: true, required: false
  private _ipDefaultGateway?: string; 
  public get ipDefaultGateway() {
    return this.getStringAttribute('ip_default_gateway');
  }
  public set ipDefaultGateway(value: string) {
    this._ipDefaultGateway = value;
  }
  public resetIpDefaultGateway() {
    this._ipDefaultGateway = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipDefaultGatewayInput() {
    return this._ipDefaultGateway;
  }

  // ip_domain_list_names - computed: false, optional: true, required: false
  private _ipDomainListNames?: string[]; 
  public get ipDomainListNames() {
    return this.getListAttribute('ip_domain_list_names');
  }
  public set ipDomainListNames(value: string[]) {
    this._ipDomainListNames = value;
  }
  public resetIpDomainListNames() {
    this._ipDomainListNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipDomainListNamesInput() {
    return this._ipDomainListNames;
  }

  // ip_domain_list_vrf - computed: false, optional: true, required: false
  private _ipDomainListVrf?: string; 
  public get ipDomainListVrf() {
    return this.getStringAttribute('ip_domain_list_vrf');
  }
  public set ipDomainListVrf(value: string) {
    this._ipDomainListVrf = value;
  }
  public resetIpDomainListVrf() {
    this._ipDomainListVrf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipDomainListVrfInput() {
    return this._ipDomainListVrf;
  }

  // ip_domain_list_vrf_domain - computed: false, optional: true, required: false
  private _ipDomainListVrfDomain?: string; 
  public get ipDomainListVrfDomain() {
    return this.getStringAttribute('ip_domain_list_vrf_domain');
  }
  public set ipDomainListVrfDomain(value: string) {
    this._ipDomainListVrfDomain = value;
  }
  public resetIpDomainListVrfDomain() {
    this._ipDomainListVrfDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipDomainListVrfDomainInput() {
    return this._ipDomainListVrfDomain;
  }

  // ip_domain_lookup - computed: false, optional: true, required: false
  private _ipDomainLookup?: boolean | cdktf.IResolvable; 
  public get ipDomainLookup() {
    return this.getBooleanAttribute('ip_domain_lookup');
  }
  public set ipDomainLookup(value: boolean | cdktf.IResolvable) {
    this._ipDomainLookup = value;
  }
  public resetIpDomainLookup() {
    this._ipDomainLookup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipDomainLookupInput() {
    return this._ipDomainLookup;
  }

  // ip_domain_lookup_nsap - computed: false, optional: true, required: false
  private _ipDomainLookupNsap?: boolean | cdktf.IResolvable; 
  public get ipDomainLookupNsap() {
    return this.getBooleanAttribute('ip_domain_lookup_nsap');
  }
  public set ipDomainLookupNsap(value: boolean | cdktf.IResolvable) {
    this._ipDomainLookupNsap = value;
  }
  public resetIpDomainLookupNsap() {
    this._ipDomainLookupNsap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipDomainLookupNsapInput() {
    return this._ipDomainLookupNsap;
  }

  // ip_domain_lookup_recursive - computed: false, optional: true, required: false
  private _ipDomainLookupRecursive?: boolean | cdktf.IResolvable; 
  public get ipDomainLookupRecursive() {
    return this.getBooleanAttribute('ip_domain_lookup_recursive');
  }
  public set ipDomainLookupRecursive(value: boolean | cdktf.IResolvable) {
    this._ipDomainLookupRecursive = value;
  }
  public resetIpDomainLookupRecursive() {
    this._ipDomainLookupRecursive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipDomainLookupRecursiveInput() {
    return this._ipDomainLookupRecursive;
  }

  // ip_domain_lookup_source_interface_five_gigabit_ethernet - computed: false, optional: true, required: false
  private _ipDomainLookupSourceInterfaceFiveGigabitEthernet?: string; 
  public get ipDomainLookupSourceInterfaceFiveGigabitEthernet() {
    return this.getStringAttribute('ip_domain_lookup_source_interface_five_gigabit_ethernet');
  }
  public set ipDomainLookupSourceInterfaceFiveGigabitEthernet(value: string) {
    this._ipDomainLookupSourceInterfaceFiveGigabitEthernet = value;
  }
  public resetIpDomainLookupSourceInterfaceFiveGigabitEthernet() {
    this._ipDomainLookupSourceInterfaceFiveGigabitEthernet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipDomainLookupSourceInterfaceFiveGigabitEthernetInput() {
    return this._ipDomainLookupSourceInterfaceFiveGigabitEthernet;
  }

  // ip_domain_lookup_source_interface_forty_gigabit_ethernet - computed: false, optional: true, required: false
  private _ipDomainLookupSourceInterfaceFortyGigabitEthernet?: string; 
  public get ipDomainLookupSourceInterfaceFortyGigabitEthernet() {
    return this.getStringAttribute('ip_domain_lookup_source_interface_forty_gigabit_ethernet');
  }
  public set ipDomainLookupSourceInterfaceFortyGigabitEthernet(value: string) {
    this._ipDomainLookupSourceInterfaceFortyGigabitEthernet = value;
  }
  public resetIpDomainLookupSourceInterfaceFortyGigabitEthernet() {
    this._ipDomainLookupSourceInterfaceFortyGigabitEthernet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipDomainLookupSourceInterfaceFortyGigabitEthernetInput() {
    return this._ipDomainLookupSourceInterfaceFortyGigabitEthernet;
  }

  // ip_domain_lookup_source_interface_gigabit_ethernet - computed: false, optional: true, required: false
  private _ipDomainLookupSourceInterfaceGigabitEthernet?: string; 
  public get ipDomainLookupSourceInterfaceGigabitEthernet() {
    return this.getStringAttribute('ip_domain_lookup_source_interface_gigabit_ethernet');
  }
  public set ipDomainLookupSourceInterfaceGigabitEthernet(value: string) {
    this._ipDomainLookupSourceInterfaceGigabitEthernet = value;
  }
  public resetIpDomainLookupSourceInterfaceGigabitEthernet() {
    this._ipDomainLookupSourceInterfaceGigabitEthernet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipDomainLookupSourceInterfaceGigabitEthernetInput() {
    return this._ipDomainLookupSourceInterfaceGigabitEthernet;
  }

  // ip_domain_lookup_source_interface_hundred_gigabit_ethernet - computed: false, optional: true, required: false
  private _ipDomainLookupSourceInterfaceHundredGigabitEthernet?: string; 
  public get ipDomainLookupSourceInterfaceHundredGigabitEthernet() {
    return this.getStringAttribute('ip_domain_lookup_source_interface_hundred_gigabit_ethernet');
  }
  public set ipDomainLookupSourceInterfaceHundredGigabitEthernet(value: string) {
    this._ipDomainLookupSourceInterfaceHundredGigabitEthernet = value;
  }
  public resetIpDomainLookupSourceInterfaceHundredGigabitEthernet() {
    this._ipDomainLookupSourceInterfaceHundredGigabitEthernet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipDomainLookupSourceInterfaceHundredGigabitEthernetInput() {
    return this._ipDomainLookupSourceInterfaceHundredGigabitEthernet;
  }

  // ip_domain_lookup_source_interface_loopback - computed: false, optional: true, required: false
  private _ipDomainLookupSourceInterfaceLoopback?: number; 
  public get ipDomainLookupSourceInterfaceLoopback() {
    return this.getNumberAttribute('ip_domain_lookup_source_interface_loopback');
  }
  public set ipDomainLookupSourceInterfaceLoopback(value: number) {
    this._ipDomainLookupSourceInterfaceLoopback = value;
  }
  public resetIpDomainLookupSourceInterfaceLoopback() {
    this._ipDomainLookupSourceInterfaceLoopback = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipDomainLookupSourceInterfaceLoopbackInput() {
    return this._ipDomainLookupSourceInterfaceLoopback;
  }

  // ip_domain_lookup_source_interface_ten_gigabit_ethernet - computed: false, optional: true, required: false
  private _ipDomainLookupSourceInterfaceTenGigabitEthernet?: string; 
  public get ipDomainLookupSourceInterfaceTenGigabitEthernet() {
    return this.getStringAttribute('ip_domain_lookup_source_interface_ten_gigabit_ethernet');
  }
  public set ipDomainLookupSourceInterfaceTenGigabitEthernet(value: string) {
    this._ipDomainLookupSourceInterfaceTenGigabitEthernet = value;
  }
  public resetIpDomainLookupSourceInterfaceTenGigabitEthernet() {
    this._ipDomainLookupSourceInterfaceTenGigabitEthernet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipDomainLookupSourceInterfaceTenGigabitEthernetInput() {
    return this._ipDomainLookupSourceInterfaceTenGigabitEthernet;
  }

  // ip_domain_lookup_source_interface_twenty_five_gigabit_ethernet - computed: false, optional: true, required: false
  private _ipDomainLookupSourceInterfaceTwentyFiveGigabitEthernet?: string; 
  public get ipDomainLookupSourceInterfaceTwentyFiveGigabitEthernet() {
    return this.getStringAttribute('ip_domain_lookup_source_interface_twenty_five_gigabit_ethernet');
  }
  public set ipDomainLookupSourceInterfaceTwentyFiveGigabitEthernet(value: string) {
    this._ipDomainLookupSourceInterfaceTwentyFiveGigabitEthernet = value;
  }
  public resetIpDomainLookupSourceInterfaceTwentyFiveGigabitEthernet() {
    this._ipDomainLookupSourceInterfaceTwentyFiveGigabitEthernet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipDomainLookupSourceInterfaceTwentyFiveGigabitEthernetInput() {
    return this._ipDomainLookupSourceInterfaceTwentyFiveGigabitEthernet;
  }

  // ip_domain_lookup_source_interface_two_gigabit_ethernet - computed: false, optional: true, required: false
  private _ipDomainLookupSourceInterfaceTwoGigabitEthernet?: string; 
  public get ipDomainLookupSourceInterfaceTwoGigabitEthernet() {
    return this.getStringAttribute('ip_domain_lookup_source_interface_two_gigabit_ethernet');
  }
  public set ipDomainLookupSourceInterfaceTwoGigabitEthernet(value: string) {
    this._ipDomainLookupSourceInterfaceTwoGigabitEthernet = value;
  }
  public resetIpDomainLookupSourceInterfaceTwoGigabitEthernet() {
    this._ipDomainLookupSourceInterfaceTwoGigabitEthernet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipDomainLookupSourceInterfaceTwoGigabitEthernetInput() {
    return this._ipDomainLookupSourceInterfaceTwoGigabitEthernet;
  }

  // ip_domain_lookup_source_interface_vlan - computed: false, optional: true, required: false
  private _ipDomainLookupSourceInterfaceVlan?: number; 
  public get ipDomainLookupSourceInterfaceVlan() {
    return this.getNumberAttribute('ip_domain_lookup_source_interface_vlan');
  }
  public set ipDomainLookupSourceInterfaceVlan(value: number) {
    this._ipDomainLookupSourceInterfaceVlan = value;
  }
  public resetIpDomainLookupSourceInterfaceVlan() {
    this._ipDomainLookupSourceInterfaceVlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipDomainLookupSourceInterfaceVlanInput() {
    return this._ipDomainLookupSourceInterfaceVlan;
  }

  // ip_domain_lookup_vrfs - computed: false, optional: true, required: false
  private _ipDomainLookupVrfs = new SystemIpDomainLookupVrfsList(this, "ip_domain_lookup_vrfs", false);
  public get ipDomainLookupVrfs() {
    return this._ipDomainLookupVrfs;
  }
  public putIpDomainLookupVrfs(value: SystemIpDomainLookupVrfs[] | cdktf.IResolvable) {
    this._ipDomainLookupVrfs.internalValue = value;
  }
  public resetIpDomainLookupVrfs() {
    this._ipDomainLookupVrfs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipDomainLookupVrfsInput() {
    return this._ipDomainLookupVrfs.internalValue;
  }

  // ip_domain_name - computed: false, optional: true, required: false
  private _ipDomainName?: string; 
  public get ipDomainName() {
    return this.getStringAttribute('ip_domain_name');
  }
  public set ipDomainName(value: string) {
    this._ipDomainName = value;
  }
  public resetIpDomainName() {
    this._ipDomainName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipDomainNameInput() {
    return this._ipDomainName;
  }

  // ip_forward_protocol_nd - computed: false, optional: true, required: false
  private _ipForwardProtocolNd?: boolean | cdktf.IResolvable; 
  public get ipForwardProtocolNd() {
    return this.getBooleanAttribute('ip_forward_protocol_nd');
  }
  public set ipForwardProtocolNd(value: boolean | cdktf.IResolvable) {
    this._ipForwardProtocolNd = value;
  }
  public resetIpForwardProtocolNd() {
    this._ipForwardProtocolNd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipForwardProtocolNdInput() {
    return this._ipForwardProtocolNd;
  }

  // ip_ftp_passive - computed: false, optional: true, required: false
  private _ipFtpPassive?: boolean | cdktf.IResolvable; 
  public get ipFtpPassive() {
    return this.getBooleanAttribute('ip_ftp_passive');
  }
  public set ipFtpPassive(value: boolean | cdktf.IResolvable) {
    this._ipFtpPassive = value;
  }
  public resetIpFtpPassive() {
    this._ipFtpPassive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipFtpPassiveInput() {
    return this._ipFtpPassive;
  }

  // ip_hosts - computed: false, optional: true, required: false
  private _ipHosts = new SystemIpHostsList(this, "ip_hosts", false);
  public get ipHosts() {
    return this._ipHosts;
  }
  public putIpHosts(value: SystemIpHosts[] | cdktf.IResolvable) {
    this._ipHosts.internalValue = value;
  }
  public resetIpHosts() {
    this._ipHosts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipHostsInput() {
    return this._ipHosts.internalValue;
  }

  // ip_hosts_vrf - computed: false, optional: true, required: false
  private _ipHostsVrf = new SystemIpHostsVrfList(this, "ip_hosts_vrf", false);
  public get ipHostsVrf() {
    return this._ipHostsVrf;
  }
  public putIpHostsVrf(value: SystemIpHostsVrf[] | cdktf.IResolvable) {
    this._ipHostsVrf.internalValue = value;
  }
  public resetIpHostsVrf() {
    this._ipHostsVrf.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipHostsVrfInput() {
    return this._ipHostsVrf.internalValue;
  }

  // ip_http_access_class - computed: false, optional: true, required: false
  private _ipHttpAccessClass?: number; 
  public get ipHttpAccessClass() {
    return this.getNumberAttribute('ip_http_access_class');
  }
  public set ipHttpAccessClass(value: number) {
    this._ipHttpAccessClass = value;
  }
  public resetIpHttpAccessClass() {
    this._ipHttpAccessClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipHttpAccessClassInput() {
    return this._ipHttpAccessClass;
  }

  // ip_http_active_session_modules - computed: false, optional: true, required: false
  private _ipHttpActiveSessionModules?: string; 
  public get ipHttpActiveSessionModules() {
    return this.getStringAttribute('ip_http_active_session_modules');
  }
  public set ipHttpActiveSessionModules(value: string) {
    this._ipHttpActiveSessionModules = value;
  }
  public resetIpHttpActiveSessionModules() {
    this._ipHttpActiveSessionModules = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipHttpActiveSessionModulesInput() {
    return this._ipHttpActiveSessionModules;
  }

  // ip_http_authentication_aaa - computed: false, optional: true, required: false
  private _ipHttpAuthenticationAaa?: boolean | cdktf.IResolvable; 
  public get ipHttpAuthenticationAaa() {
    return this.getBooleanAttribute('ip_http_authentication_aaa');
  }
  public set ipHttpAuthenticationAaa(value: boolean | cdktf.IResolvable) {
    this._ipHttpAuthenticationAaa = value;
  }
  public resetIpHttpAuthenticationAaa() {
    this._ipHttpAuthenticationAaa = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipHttpAuthenticationAaaInput() {
    return this._ipHttpAuthenticationAaa;
  }

  // ip_http_authentication_aaa_command_authorization - computed: false, optional: true, required: false
  private _ipHttpAuthenticationAaaCommandAuthorization = new SystemIpHttpAuthenticationAaaCommandAuthorizationList(this, "ip_http_authentication_aaa_command_authorization", false);
  public get ipHttpAuthenticationAaaCommandAuthorization() {
    return this._ipHttpAuthenticationAaaCommandAuthorization;
  }
  public putIpHttpAuthenticationAaaCommandAuthorization(value: SystemIpHttpAuthenticationAaaCommandAuthorization[] | cdktf.IResolvable) {
    this._ipHttpAuthenticationAaaCommandAuthorization.internalValue = value;
  }
  public resetIpHttpAuthenticationAaaCommandAuthorization() {
    this._ipHttpAuthenticationAaaCommandAuthorization.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipHttpAuthenticationAaaCommandAuthorizationInput() {
    return this._ipHttpAuthenticationAaaCommandAuthorization.internalValue;
  }

  // ip_http_authentication_aaa_exec_authorization - computed: false, optional: true, required: false
  private _ipHttpAuthenticationAaaExecAuthorization?: string; 
  public get ipHttpAuthenticationAaaExecAuthorization() {
    return this.getStringAttribute('ip_http_authentication_aaa_exec_authorization');
  }
  public set ipHttpAuthenticationAaaExecAuthorization(value: string) {
    this._ipHttpAuthenticationAaaExecAuthorization = value;
  }
  public resetIpHttpAuthenticationAaaExecAuthorization() {
    this._ipHttpAuthenticationAaaExecAuthorization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipHttpAuthenticationAaaExecAuthorizationInput() {
    return this._ipHttpAuthenticationAaaExecAuthorization;
  }

  // ip_http_authentication_aaa_login_authentication - computed: false, optional: true, required: false
  private _ipHttpAuthenticationAaaLoginAuthentication?: string; 
  public get ipHttpAuthenticationAaaLoginAuthentication() {
    return this.getStringAttribute('ip_http_authentication_aaa_login_authentication');
  }
  public set ipHttpAuthenticationAaaLoginAuthentication(value: string) {
    this._ipHttpAuthenticationAaaLoginAuthentication = value;
  }
  public resetIpHttpAuthenticationAaaLoginAuthentication() {
    this._ipHttpAuthenticationAaaLoginAuthentication = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipHttpAuthenticationAaaLoginAuthenticationInput() {
    return this._ipHttpAuthenticationAaaLoginAuthentication;
  }

  // ip_http_authentication_local - computed: false, optional: true, required: false
  private _ipHttpAuthenticationLocal?: boolean | cdktf.IResolvable; 
  public get ipHttpAuthenticationLocal() {
    return this.getBooleanAttribute('ip_http_authentication_local');
  }
  public set ipHttpAuthenticationLocal(value: boolean | cdktf.IResolvable) {
    this._ipHttpAuthenticationLocal = value;
  }
  public resetIpHttpAuthenticationLocal() {
    this._ipHttpAuthenticationLocal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipHttpAuthenticationLocalInput() {
    return this._ipHttpAuthenticationLocal;
  }

  // ip_http_client_secure_trustpoint - computed: false, optional: true, required: false
  private _ipHttpClientSecureTrustpoint?: string; 
  public get ipHttpClientSecureTrustpoint() {
    return this.getStringAttribute('ip_http_client_secure_trustpoint');
  }
  public set ipHttpClientSecureTrustpoint(value: string) {
    this._ipHttpClientSecureTrustpoint = value;
  }
  public resetIpHttpClientSecureTrustpoint() {
    this._ipHttpClientSecureTrustpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipHttpClientSecureTrustpointInput() {
    return this._ipHttpClientSecureTrustpoint;
  }

  // ip_http_client_source_interface - computed: false, optional: true, required: false
  private _ipHttpClientSourceInterface?: string; 
  public get ipHttpClientSourceInterface() {
    return this.getStringAttribute('ip_http_client_source_interface');
  }
  public set ipHttpClientSourceInterface(value: string) {
    this._ipHttpClientSourceInterface = value;
  }
  public resetIpHttpClientSourceInterface() {
    this._ipHttpClientSourceInterface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipHttpClientSourceInterfaceInput() {
    return this._ipHttpClientSourceInterface;
  }

  // ip_http_max_connections - computed: false, optional: true, required: false
  private _ipHttpMaxConnections?: number; 
  public get ipHttpMaxConnections() {
    return this.getNumberAttribute('ip_http_max_connections');
  }
  public set ipHttpMaxConnections(value: number) {
    this._ipHttpMaxConnections = value;
  }
  public resetIpHttpMaxConnections() {
    this._ipHttpMaxConnections = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipHttpMaxConnectionsInput() {
    return this._ipHttpMaxConnections;
  }

  // ip_http_secure_active_session_modules - computed: false, optional: true, required: false
  private _ipHttpSecureActiveSessionModules?: string; 
  public get ipHttpSecureActiveSessionModules() {
    return this.getStringAttribute('ip_http_secure_active_session_modules');
  }
  public set ipHttpSecureActiveSessionModules(value: string) {
    this._ipHttpSecureActiveSessionModules = value;
  }
  public resetIpHttpSecureActiveSessionModules() {
    this._ipHttpSecureActiveSessionModules = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipHttpSecureActiveSessionModulesInput() {
    return this._ipHttpSecureActiveSessionModules;
  }

  // ip_http_secure_server - computed: false, optional: true, required: false
  private _ipHttpSecureServer?: boolean | cdktf.IResolvable; 
  public get ipHttpSecureServer() {
    return this.getBooleanAttribute('ip_http_secure_server');
  }
  public set ipHttpSecureServer(value: boolean | cdktf.IResolvable) {
    this._ipHttpSecureServer = value;
  }
  public resetIpHttpSecureServer() {
    this._ipHttpSecureServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipHttpSecureServerInput() {
    return this._ipHttpSecureServer;
  }

  // ip_http_secure_trustpoint - computed: false, optional: true, required: false
  private _ipHttpSecureTrustpoint?: string; 
  public get ipHttpSecureTrustpoint() {
    return this.getStringAttribute('ip_http_secure_trustpoint');
  }
  public set ipHttpSecureTrustpoint(value: string) {
    this._ipHttpSecureTrustpoint = value;
  }
  public resetIpHttpSecureTrustpoint() {
    this._ipHttpSecureTrustpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipHttpSecureTrustpointInput() {
    return this._ipHttpSecureTrustpoint;
  }

  // ip_http_server - computed: false, optional: true, required: false
  private _ipHttpServer?: boolean | cdktf.IResolvable; 
  public get ipHttpServer() {
    return this.getBooleanAttribute('ip_http_server');
  }
  public set ipHttpServer(value: boolean | cdktf.IResolvable) {
    this._ipHttpServer = value;
  }
  public resetIpHttpServer() {
    this._ipHttpServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipHttpServerInput() {
    return this._ipHttpServer;
  }

  // ip_http_tls_version - computed: false, optional: true, required: false
  private _ipHttpTlsVersion?: string; 
  public get ipHttpTlsVersion() {
    return this.getStringAttribute('ip_http_tls_version');
  }
  public set ipHttpTlsVersion(value: string) {
    this._ipHttpTlsVersion = value;
  }
  public resetIpHttpTlsVersion() {
    this._ipHttpTlsVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipHttpTlsVersionInput() {
    return this._ipHttpTlsVersion;
  }

  // ip_multicast_route_limit - computed: false, optional: true, required: false
  private _ipMulticastRouteLimit?: number; 
  public get ipMulticastRouteLimit() {
    return this.getNumberAttribute('ip_multicast_route_limit');
  }
  public set ipMulticastRouteLimit(value: number) {
    this._ipMulticastRouteLimit = value;
  }
  public resetIpMulticastRouteLimit() {
    this._ipMulticastRouteLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipMulticastRouteLimitInput() {
    return this._ipMulticastRouteLimit;
  }

  // ip_multicast_routing - computed: false, optional: true, required: false
  private _ipMulticastRouting?: boolean | cdktf.IResolvable; 
  public get ipMulticastRouting() {
    return this.getBooleanAttribute('ip_multicast_routing');
  }
  public set ipMulticastRouting(value: boolean | cdktf.IResolvable) {
    this._ipMulticastRouting = value;
  }
  public resetIpMulticastRouting() {
    this._ipMulticastRouting = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipMulticastRoutingInput() {
    return this._ipMulticastRouting;
  }

  // ip_multicast_routing_distributed - computed: false, optional: true, required: false
  private _ipMulticastRoutingDistributed?: boolean | cdktf.IResolvable; 
  public get ipMulticastRoutingDistributed() {
    return this.getBooleanAttribute('ip_multicast_routing_distributed');
  }
  public set ipMulticastRoutingDistributed(value: boolean | cdktf.IResolvable) {
    this._ipMulticastRoutingDistributed = value;
  }
  public resetIpMulticastRoutingDistributed() {
    this._ipMulticastRoutingDistributed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipMulticastRoutingDistributedInput() {
    return this._ipMulticastRoutingDistributed;
  }

  // ip_name_servers - computed: false, optional: true, required: false
  private _ipNameServers?: string[]; 
  public get ipNameServers() {
    return this.getListAttribute('ip_name_servers');
  }
  public set ipNameServers(value: string[]) {
    this._ipNameServers = value;
  }
  public resetIpNameServers() {
    this._ipNameServers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipNameServersInput() {
    return this._ipNameServers;
  }

  // ip_name_servers_vrf - computed: false, optional: true, required: false
  private _ipNameServersVrf = new SystemIpNameServersVrfList(this, "ip_name_servers_vrf", false);
  public get ipNameServersVrf() {
    return this._ipNameServersVrf;
  }
  public putIpNameServersVrf(value: SystemIpNameServersVrf[] | cdktf.IResolvable) {
    this._ipNameServersVrf.internalValue = value;
  }
  public resetIpNameServersVrf() {
    this._ipNameServersVrf.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipNameServersVrfInput() {
    return this._ipNameServersVrf.internalValue;
  }

  // ip_nbar_classification_dns_classify_by_domain - computed: false, optional: true, required: false
  private _ipNbarClassificationDnsClassifyByDomain?: boolean | cdktf.IResolvable; 
  public get ipNbarClassificationDnsClassifyByDomain() {
    return this.getBooleanAttribute('ip_nbar_classification_dns_classify_by_domain');
  }
  public set ipNbarClassificationDnsClassifyByDomain(value: boolean | cdktf.IResolvable) {
    this._ipNbarClassificationDnsClassifyByDomain = value;
  }
  public resetIpNbarClassificationDnsClassifyByDomain() {
    this._ipNbarClassificationDnsClassifyByDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipNbarClassificationDnsClassifyByDomainInput() {
    return this._ipNbarClassificationDnsClassifyByDomain;
  }

  // ip_radius_source_interface_five_gigabit_ethernet - computed: false, optional: true, required: false
  private _ipRadiusSourceInterfaceFiveGigabitEthernet?: string; 
  public get ipRadiusSourceInterfaceFiveGigabitEthernet() {
    return this.getStringAttribute('ip_radius_source_interface_five_gigabit_ethernet');
  }
  public set ipRadiusSourceInterfaceFiveGigabitEthernet(value: string) {
    this._ipRadiusSourceInterfaceFiveGigabitEthernet = value;
  }
  public resetIpRadiusSourceInterfaceFiveGigabitEthernet() {
    this._ipRadiusSourceInterfaceFiveGigabitEthernet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipRadiusSourceInterfaceFiveGigabitEthernetInput() {
    return this._ipRadiusSourceInterfaceFiveGigabitEthernet;
  }

  // ip_radius_source_interface_forty_gigabit_ethernet - computed: false, optional: true, required: false
  private _ipRadiusSourceInterfaceFortyGigabitEthernet?: string; 
  public get ipRadiusSourceInterfaceFortyGigabitEthernet() {
    return this.getStringAttribute('ip_radius_source_interface_forty_gigabit_ethernet');
  }
  public set ipRadiusSourceInterfaceFortyGigabitEthernet(value: string) {
    this._ipRadiusSourceInterfaceFortyGigabitEthernet = value;
  }
  public resetIpRadiusSourceInterfaceFortyGigabitEthernet() {
    this._ipRadiusSourceInterfaceFortyGigabitEthernet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipRadiusSourceInterfaceFortyGigabitEthernetInput() {
    return this._ipRadiusSourceInterfaceFortyGigabitEthernet;
  }

  // ip_radius_source_interface_gigabit_ethernet - computed: false, optional: true, required: false
  private _ipRadiusSourceInterfaceGigabitEthernet?: string; 
  public get ipRadiusSourceInterfaceGigabitEthernet() {
    return this.getStringAttribute('ip_radius_source_interface_gigabit_ethernet');
  }
  public set ipRadiusSourceInterfaceGigabitEthernet(value: string) {
    this._ipRadiusSourceInterfaceGigabitEthernet = value;
  }
  public resetIpRadiusSourceInterfaceGigabitEthernet() {
    this._ipRadiusSourceInterfaceGigabitEthernet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipRadiusSourceInterfaceGigabitEthernetInput() {
    return this._ipRadiusSourceInterfaceGigabitEthernet;
  }

  // ip_radius_source_interface_hundred_gigabit_ethernet - computed: false, optional: true, required: false
  private _ipRadiusSourceInterfaceHundredGigabitEthernet?: string; 
  public get ipRadiusSourceInterfaceHundredGigabitEthernet() {
    return this.getStringAttribute('ip_radius_source_interface_hundred_gigabit_ethernet');
  }
  public set ipRadiusSourceInterfaceHundredGigabitEthernet(value: string) {
    this._ipRadiusSourceInterfaceHundredGigabitEthernet = value;
  }
  public resetIpRadiusSourceInterfaceHundredGigabitEthernet() {
    this._ipRadiusSourceInterfaceHundredGigabitEthernet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipRadiusSourceInterfaceHundredGigabitEthernetInput() {
    return this._ipRadiusSourceInterfaceHundredGigabitEthernet;
  }

  // ip_radius_source_interface_loopback - computed: false, optional: true, required: false
  private _ipRadiusSourceInterfaceLoopback?: number; 
  public get ipRadiusSourceInterfaceLoopback() {
    return this.getNumberAttribute('ip_radius_source_interface_loopback');
  }
  public set ipRadiusSourceInterfaceLoopback(value: number) {
    this._ipRadiusSourceInterfaceLoopback = value;
  }
  public resetIpRadiusSourceInterfaceLoopback() {
    this._ipRadiusSourceInterfaceLoopback = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipRadiusSourceInterfaceLoopbackInput() {
    return this._ipRadiusSourceInterfaceLoopback;
  }

  // ip_radius_source_interface_ten_gigabit_ethernet - computed: false, optional: true, required: false
  private _ipRadiusSourceInterfaceTenGigabitEthernet?: string; 
  public get ipRadiusSourceInterfaceTenGigabitEthernet() {
    return this.getStringAttribute('ip_radius_source_interface_ten_gigabit_ethernet');
  }
  public set ipRadiusSourceInterfaceTenGigabitEthernet(value: string) {
    this._ipRadiusSourceInterfaceTenGigabitEthernet = value;
  }
  public resetIpRadiusSourceInterfaceTenGigabitEthernet() {
    this._ipRadiusSourceInterfaceTenGigabitEthernet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipRadiusSourceInterfaceTenGigabitEthernetInput() {
    return this._ipRadiusSourceInterfaceTenGigabitEthernet;
  }

  // ip_radius_source_interface_twenty_five_gigabit_ethernet - computed: false, optional: true, required: false
  private _ipRadiusSourceInterfaceTwentyFiveGigabitEthernet?: string; 
  public get ipRadiusSourceInterfaceTwentyFiveGigabitEthernet() {
    return this.getStringAttribute('ip_radius_source_interface_twenty_five_gigabit_ethernet');
  }
  public set ipRadiusSourceInterfaceTwentyFiveGigabitEthernet(value: string) {
    this._ipRadiusSourceInterfaceTwentyFiveGigabitEthernet = value;
  }
  public resetIpRadiusSourceInterfaceTwentyFiveGigabitEthernet() {
    this._ipRadiusSourceInterfaceTwentyFiveGigabitEthernet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipRadiusSourceInterfaceTwentyFiveGigabitEthernetInput() {
    return this._ipRadiusSourceInterfaceTwentyFiveGigabitEthernet;
  }

  // ip_radius_source_interface_two_gigabit_ethernet - computed: false, optional: true, required: false
  private _ipRadiusSourceInterfaceTwoGigabitEthernet?: string; 
  public get ipRadiusSourceInterfaceTwoGigabitEthernet() {
    return this.getStringAttribute('ip_radius_source_interface_two_gigabit_ethernet');
  }
  public set ipRadiusSourceInterfaceTwoGigabitEthernet(value: string) {
    this._ipRadiusSourceInterfaceTwoGigabitEthernet = value;
  }
  public resetIpRadiusSourceInterfaceTwoGigabitEthernet() {
    this._ipRadiusSourceInterfaceTwoGigabitEthernet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipRadiusSourceInterfaceTwoGigabitEthernetInput() {
    return this._ipRadiusSourceInterfaceTwoGigabitEthernet;
  }

  // ip_radius_source_interface_vlan - computed: false, optional: true, required: false
  private _ipRadiusSourceInterfaceVlan?: number; 
  public get ipRadiusSourceInterfaceVlan() {
    return this.getNumberAttribute('ip_radius_source_interface_vlan');
  }
  public set ipRadiusSourceInterfaceVlan(value: number) {
    this._ipRadiusSourceInterfaceVlan = value;
  }
  public resetIpRadiusSourceInterfaceVlan() {
    this._ipRadiusSourceInterfaceVlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipRadiusSourceInterfaceVlanInput() {
    return this._ipRadiusSourceInterfaceVlan;
  }

  // ip_radius_source_interface_vrf - computed: false, optional: true, required: false
  private _ipRadiusSourceInterfaceVrf?: string; 
  public get ipRadiusSourceInterfaceVrf() {
    return this.getStringAttribute('ip_radius_source_interface_vrf');
  }
  public set ipRadiusSourceInterfaceVrf(value: string) {
    this._ipRadiusSourceInterfaceVrf = value;
  }
  public resetIpRadiusSourceInterfaceVrf() {
    this._ipRadiusSourceInterfaceVrf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipRadiusSourceInterfaceVrfInput() {
    return this._ipRadiusSourceInterfaceVrf;
  }

  // ip_routing - computed: false, optional: true, required: false
  private _ipRouting?: boolean | cdktf.IResolvable; 
  public get ipRouting() {
    return this.getBooleanAttribute('ip_routing');
  }
  public set ipRouting(value: boolean | cdktf.IResolvable) {
    this._ipRouting = value;
  }
  public resetIpRouting() {
    this._ipRouting = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipRoutingInput() {
    return this._ipRouting;
  }

  // ip_routing_protocol_purge_interface - computed: false, optional: true, required: false
  private _ipRoutingProtocolPurgeInterface?: boolean | cdktf.IResolvable; 
  public get ipRoutingProtocolPurgeInterface() {
    return this.getBooleanAttribute('ip_routing_protocol_purge_interface');
  }
  public set ipRoutingProtocolPurgeInterface(value: boolean | cdktf.IResolvable) {
    this._ipRoutingProtocolPurgeInterface = value;
  }
  public resetIpRoutingProtocolPurgeInterface() {
    this._ipRoutingProtocolPurgeInterface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipRoutingProtocolPurgeInterfaceInput() {
    return this._ipRoutingProtocolPurgeInterface;
  }

  // ip_scp_server_enable - computed: false, optional: true, required: false
  private _ipScpServerEnable?: boolean | cdktf.IResolvable; 
  public get ipScpServerEnable() {
    return this.getBooleanAttribute('ip_scp_server_enable');
  }
  public set ipScpServerEnable(value: boolean | cdktf.IResolvable) {
    this._ipScpServerEnable = value;
  }
  public resetIpScpServerEnable() {
    this._ipScpServerEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipScpServerEnableInput() {
    return this._ipScpServerEnable;
  }

  // ip_source_route - computed: false, optional: true, required: false
  private _ipSourceRoute?: boolean | cdktf.IResolvable; 
  public get ipSourceRoute() {
    return this.getBooleanAttribute('ip_source_route');
  }
  public set ipSourceRoute(value: boolean | cdktf.IResolvable) {
    this._ipSourceRoute = value;
  }
  public resetIpSourceRoute() {
    this._ipSourceRoute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipSourceRouteInput() {
    return this._ipSourceRoute;
  }

  // ip_ssh_authentication_retries - computed: false, optional: true, required: false
  private _ipSshAuthenticationRetries?: number; 
  public get ipSshAuthenticationRetries() {
    return this.getNumberAttribute('ip_ssh_authentication_retries');
  }
  public set ipSshAuthenticationRetries(value: number) {
    this._ipSshAuthenticationRetries = value;
  }
  public resetIpSshAuthenticationRetries() {
    this._ipSshAuthenticationRetries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipSshAuthenticationRetriesInput() {
    return this._ipSshAuthenticationRetries;
  }

  // ip_ssh_bulk_mode - computed: false, optional: true, required: false
  private _ipSshBulkMode?: boolean | cdktf.IResolvable; 
  public get ipSshBulkMode() {
    return this.getBooleanAttribute('ip_ssh_bulk_mode');
  }
  public set ipSshBulkMode(value: boolean | cdktf.IResolvable) {
    this._ipSshBulkMode = value;
  }
  public resetIpSshBulkMode() {
    this._ipSshBulkMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipSshBulkModeInput() {
    return this._ipSshBulkMode;
  }

  // ip_ssh_bulk_mode_window_size - computed: false, optional: true, required: false
  private _ipSshBulkModeWindowSize?: number; 
  public get ipSshBulkModeWindowSize() {
    return this.getNumberAttribute('ip_ssh_bulk_mode_window_size');
  }
  public set ipSshBulkModeWindowSize(value: number) {
    this._ipSshBulkModeWindowSize = value;
  }
  public resetIpSshBulkModeWindowSize() {
    this._ipSshBulkModeWindowSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipSshBulkModeWindowSizeInput() {
    return this._ipSshBulkModeWindowSize;
  }

  // ip_ssh_source_interface_five_gigabit_ethernet - computed: false, optional: true, required: false
  private _ipSshSourceInterfaceFiveGigabitEthernet?: string; 
  public get ipSshSourceInterfaceFiveGigabitEthernet() {
    return this.getStringAttribute('ip_ssh_source_interface_five_gigabit_ethernet');
  }
  public set ipSshSourceInterfaceFiveGigabitEthernet(value: string) {
    this._ipSshSourceInterfaceFiveGigabitEthernet = value;
  }
  public resetIpSshSourceInterfaceFiveGigabitEthernet() {
    this._ipSshSourceInterfaceFiveGigabitEthernet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipSshSourceInterfaceFiveGigabitEthernetInput() {
    return this._ipSshSourceInterfaceFiveGigabitEthernet;
  }

  // ip_ssh_source_interface_forty_gigabit_ethernet - computed: false, optional: true, required: false
  private _ipSshSourceInterfaceFortyGigabitEthernet?: string; 
  public get ipSshSourceInterfaceFortyGigabitEthernet() {
    return this.getStringAttribute('ip_ssh_source_interface_forty_gigabit_ethernet');
  }
  public set ipSshSourceInterfaceFortyGigabitEthernet(value: string) {
    this._ipSshSourceInterfaceFortyGigabitEthernet = value;
  }
  public resetIpSshSourceInterfaceFortyGigabitEthernet() {
    this._ipSshSourceInterfaceFortyGigabitEthernet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipSshSourceInterfaceFortyGigabitEthernetInput() {
    return this._ipSshSourceInterfaceFortyGigabitEthernet;
  }

  // ip_ssh_source_interface_gigabit_ethernet - computed: false, optional: true, required: false
  private _ipSshSourceInterfaceGigabitEthernet?: string; 
  public get ipSshSourceInterfaceGigabitEthernet() {
    return this.getStringAttribute('ip_ssh_source_interface_gigabit_ethernet');
  }
  public set ipSshSourceInterfaceGigabitEthernet(value: string) {
    this._ipSshSourceInterfaceGigabitEthernet = value;
  }
  public resetIpSshSourceInterfaceGigabitEthernet() {
    this._ipSshSourceInterfaceGigabitEthernet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipSshSourceInterfaceGigabitEthernetInput() {
    return this._ipSshSourceInterfaceGigabitEthernet;
  }

  // ip_ssh_source_interface_hundred_gigabit_ethernet - computed: false, optional: true, required: false
  private _ipSshSourceInterfaceHundredGigabitEthernet?: string; 
  public get ipSshSourceInterfaceHundredGigabitEthernet() {
    return this.getStringAttribute('ip_ssh_source_interface_hundred_gigabit_ethernet');
  }
  public set ipSshSourceInterfaceHundredGigabitEthernet(value: string) {
    this._ipSshSourceInterfaceHundredGigabitEthernet = value;
  }
  public resetIpSshSourceInterfaceHundredGigabitEthernet() {
    this._ipSshSourceInterfaceHundredGigabitEthernet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipSshSourceInterfaceHundredGigabitEthernetInput() {
    return this._ipSshSourceInterfaceHundredGigabitEthernet;
  }

  // ip_ssh_source_interface_loopback - computed: false, optional: true, required: false
  private _ipSshSourceInterfaceLoopback?: number; 
  public get ipSshSourceInterfaceLoopback() {
    return this.getNumberAttribute('ip_ssh_source_interface_loopback');
  }
  public set ipSshSourceInterfaceLoopback(value: number) {
    this._ipSshSourceInterfaceLoopback = value;
  }
  public resetIpSshSourceInterfaceLoopback() {
    this._ipSshSourceInterfaceLoopback = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipSshSourceInterfaceLoopbackInput() {
    return this._ipSshSourceInterfaceLoopback;
  }

  // ip_ssh_source_interface_ten_gigabit_ethernet - computed: false, optional: true, required: false
  private _ipSshSourceInterfaceTenGigabitEthernet?: string; 
  public get ipSshSourceInterfaceTenGigabitEthernet() {
    return this.getStringAttribute('ip_ssh_source_interface_ten_gigabit_ethernet');
  }
  public set ipSshSourceInterfaceTenGigabitEthernet(value: string) {
    this._ipSshSourceInterfaceTenGigabitEthernet = value;
  }
  public resetIpSshSourceInterfaceTenGigabitEthernet() {
    this._ipSshSourceInterfaceTenGigabitEthernet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipSshSourceInterfaceTenGigabitEthernetInput() {
    return this._ipSshSourceInterfaceTenGigabitEthernet;
  }

  // ip_ssh_source_interface_twenty_five_gigabit_ethernet - computed: false, optional: true, required: false
  private _ipSshSourceInterfaceTwentyFiveGigabitEthernet?: string; 
  public get ipSshSourceInterfaceTwentyFiveGigabitEthernet() {
    return this.getStringAttribute('ip_ssh_source_interface_twenty_five_gigabit_ethernet');
  }
  public set ipSshSourceInterfaceTwentyFiveGigabitEthernet(value: string) {
    this._ipSshSourceInterfaceTwentyFiveGigabitEthernet = value;
  }
  public resetIpSshSourceInterfaceTwentyFiveGigabitEthernet() {
    this._ipSshSourceInterfaceTwentyFiveGigabitEthernet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipSshSourceInterfaceTwentyFiveGigabitEthernetInput() {
    return this._ipSshSourceInterfaceTwentyFiveGigabitEthernet;
  }

  // ip_ssh_source_interface_two_gigabit_ethernet - computed: false, optional: true, required: false
  private _ipSshSourceInterfaceTwoGigabitEthernet?: string; 
  public get ipSshSourceInterfaceTwoGigabitEthernet() {
    return this.getStringAttribute('ip_ssh_source_interface_two_gigabit_ethernet');
  }
  public set ipSshSourceInterfaceTwoGigabitEthernet(value: string) {
    this._ipSshSourceInterfaceTwoGigabitEthernet = value;
  }
  public resetIpSshSourceInterfaceTwoGigabitEthernet() {
    this._ipSshSourceInterfaceTwoGigabitEthernet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipSshSourceInterfaceTwoGigabitEthernetInput() {
    return this._ipSshSourceInterfaceTwoGigabitEthernet;
  }

  // ip_ssh_source_interface_vlan - computed: false, optional: true, required: false
  private _ipSshSourceInterfaceVlan?: number; 
  public get ipSshSourceInterfaceVlan() {
    return this.getNumberAttribute('ip_ssh_source_interface_vlan');
  }
  public set ipSshSourceInterfaceVlan(value: number) {
    this._ipSshSourceInterfaceVlan = value;
  }
  public resetIpSshSourceInterfaceVlan() {
    this._ipSshSourceInterfaceVlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipSshSourceInterfaceVlanInput() {
    return this._ipSshSourceInterfaceVlan;
  }

  // ip_ssh_time_out - computed: false, optional: true, required: false
  private _ipSshTimeOut?: number; 
  public get ipSshTimeOut() {
    return this.getNumberAttribute('ip_ssh_time_out');
  }
  public set ipSshTimeOut(value: number) {
    this._ipSshTimeOut = value;
  }
  public resetIpSshTimeOut() {
    this._ipSshTimeOut = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipSshTimeOutInput() {
    return this._ipSshTimeOut;
  }

  // ip_ssh_version - computed: false, optional: true, required: false
  private _ipSshVersion?: string; 
  public get ipSshVersion() {
    return this.getStringAttribute('ip_ssh_version');
  }
  public set ipSshVersion(value: string) {
    this._ipSshVersion = value;
  }
  public resetIpSshVersion() {
    this._ipSshVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipSshVersionInput() {
    return this._ipSshVersion;
  }

  // ip_ssh_version_legacy - computed: false, optional: true, required: false
  private _ipSshVersionLegacy?: number; 
  public get ipSshVersionLegacy() {
    return this.getNumberAttribute('ip_ssh_version_legacy');
  }
  public set ipSshVersionLegacy(value: number) {
    this._ipSshVersionLegacy = value;
  }
  public resetIpSshVersionLegacy() {
    this._ipSshVersionLegacy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipSshVersionLegacyInput() {
    return this._ipSshVersionLegacy;
  }

  // ip_tacacs_source_interface_five_gigabit_ethernet - computed: false, optional: true, required: false
  private _ipTacacsSourceInterfaceFiveGigabitEthernet?: string; 
  public get ipTacacsSourceInterfaceFiveGigabitEthernet() {
    return this.getStringAttribute('ip_tacacs_source_interface_five_gigabit_ethernet');
  }
  public set ipTacacsSourceInterfaceFiveGigabitEthernet(value: string) {
    this._ipTacacsSourceInterfaceFiveGigabitEthernet = value;
  }
  public resetIpTacacsSourceInterfaceFiveGigabitEthernet() {
    this._ipTacacsSourceInterfaceFiveGigabitEthernet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipTacacsSourceInterfaceFiveGigabitEthernetInput() {
    return this._ipTacacsSourceInterfaceFiveGigabitEthernet;
  }

  // ip_tacacs_source_interface_forty_gigabit_ethernet - computed: false, optional: true, required: false
  private _ipTacacsSourceInterfaceFortyGigabitEthernet?: string; 
  public get ipTacacsSourceInterfaceFortyGigabitEthernet() {
    return this.getStringAttribute('ip_tacacs_source_interface_forty_gigabit_ethernet');
  }
  public set ipTacacsSourceInterfaceFortyGigabitEthernet(value: string) {
    this._ipTacacsSourceInterfaceFortyGigabitEthernet = value;
  }
  public resetIpTacacsSourceInterfaceFortyGigabitEthernet() {
    this._ipTacacsSourceInterfaceFortyGigabitEthernet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipTacacsSourceInterfaceFortyGigabitEthernetInput() {
    return this._ipTacacsSourceInterfaceFortyGigabitEthernet;
  }

  // ip_tacacs_source_interface_gigabit_ethernet - computed: false, optional: true, required: false
  private _ipTacacsSourceInterfaceGigabitEthernet?: string; 
  public get ipTacacsSourceInterfaceGigabitEthernet() {
    return this.getStringAttribute('ip_tacacs_source_interface_gigabit_ethernet');
  }
  public set ipTacacsSourceInterfaceGigabitEthernet(value: string) {
    this._ipTacacsSourceInterfaceGigabitEthernet = value;
  }
  public resetIpTacacsSourceInterfaceGigabitEthernet() {
    this._ipTacacsSourceInterfaceGigabitEthernet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipTacacsSourceInterfaceGigabitEthernetInput() {
    return this._ipTacacsSourceInterfaceGigabitEthernet;
  }

  // ip_tacacs_source_interface_hundred_gigabit_ethernet - computed: false, optional: true, required: false
  private _ipTacacsSourceInterfaceHundredGigabitEthernet?: string; 
  public get ipTacacsSourceInterfaceHundredGigabitEthernet() {
    return this.getStringAttribute('ip_tacacs_source_interface_hundred_gigabit_ethernet');
  }
  public set ipTacacsSourceInterfaceHundredGigabitEthernet(value: string) {
    this._ipTacacsSourceInterfaceHundredGigabitEthernet = value;
  }
  public resetIpTacacsSourceInterfaceHundredGigabitEthernet() {
    this._ipTacacsSourceInterfaceHundredGigabitEthernet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipTacacsSourceInterfaceHundredGigabitEthernetInput() {
    return this._ipTacacsSourceInterfaceHundredGigabitEthernet;
  }

  // ip_tacacs_source_interface_loopback - computed: false, optional: true, required: false
  private _ipTacacsSourceInterfaceLoopback?: number; 
  public get ipTacacsSourceInterfaceLoopback() {
    return this.getNumberAttribute('ip_tacacs_source_interface_loopback');
  }
  public set ipTacacsSourceInterfaceLoopback(value: number) {
    this._ipTacacsSourceInterfaceLoopback = value;
  }
  public resetIpTacacsSourceInterfaceLoopback() {
    this._ipTacacsSourceInterfaceLoopback = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipTacacsSourceInterfaceLoopbackInput() {
    return this._ipTacacsSourceInterfaceLoopback;
  }

  // ip_tacacs_source_interface_ten_gigabit_ethernet - computed: false, optional: true, required: false
  private _ipTacacsSourceInterfaceTenGigabitEthernet?: string; 
  public get ipTacacsSourceInterfaceTenGigabitEthernet() {
    return this.getStringAttribute('ip_tacacs_source_interface_ten_gigabit_ethernet');
  }
  public set ipTacacsSourceInterfaceTenGigabitEthernet(value: string) {
    this._ipTacacsSourceInterfaceTenGigabitEthernet = value;
  }
  public resetIpTacacsSourceInterfaceTenGigabitEthernet() {
    this._ipTacacsSourceInterfaceTenGigabitEthernet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipTacacsSourceInterfaceTenGigabitEthernetInput() {
    return this._ipTacacsSourceInterfaceTenGigabitEthernet;
  }

  // ip_tacacs_source_interface_twenty_five_gigabit_ethernet - computed: false, optional: true, required: false
  private _ipTacacsSourceInterfaceTwentyFiveGigabitEthernet?: string; 
  public get ipTacacsSourceInterfaceTwentyFiveGigabitEthernet() {
    return this.getStringAttribute('ip_tacacs_source_interface_twenty_five_gigabit_ethernet');
  }
  public set ipTacacsSourceInterfaceTwentyFiveGigabitEthernet(value: string) {
    this._ipTacacsSourceInterfaceTwentyFiveGigabitEthernet = value;
  }
  public resetIpTacacsSourceInterfaceTwentyFiveGigabitEthernet() {
    this._ipTacacsSourceInterfaceTwentyFiveGigabitEthernet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipTacacsSourceInterfaceTwentyFiveGigabitEthernetInput() {
    return this._ipTacacsSourceInterfaceTwentyFiveGigabitEthernet;
  }

  // ip_tacacs_source_interface_two_gigabit_ethernet - computed: false, optional: true, required: false
  private _ipTacacsSourceInterfaceTwoGigabitEthernet?: string; 
  public get ipTacacsSourceInterfaceTwoGigabitEthernet() {
    return this.getStringAttribute('ip_tacacs_source_interface_two_gigabit_ethernet');
  }
  public set ipTacacsSourceInterfaceTwoGigabitEthernet(value: string) {
    this._ipTacacsSourceInterfaceTwoGigabitEthernet = value;
  }
  public resetIpTacacsSourceInterfaceTwoGigabitEthernet() {
    this._ipTacacsSourceInterfaceTwoGigabitEthernet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipTacacsSourceInterfaceTwoGigabitEthernetInput() {
    return this._ipTacacsSourceInterfaceTwoGigabitEthernet;
  }

  // ip_tacacs_source_interface_vlan - computed: false, optional: true, required: false
  private _ipTacacsSourceInterfaceVlan?: number; 
  public get ipTacacsSourceInterfaceVlan() {
    return this.getNumberAttribute('ip_tacacs_source_interface_vlan');
  }
  public set ipTacacsSourceInterfaceVlan(value: number) {
    this._ipTacacsSourceInterfaceVlan = value;
  }
  public resetIpTacacsSourceInterfaceVlan() {
    this._ipTacacsSourceInterfaceVlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipTacacsSourceInterfaceVlanInput() {
    return this._ipTacacsSourceInterfaceVlan;
  }

  // ip_tacacs_source_interface_vrf - computed: false, optional: true, required: false
  private _ipTacacsSourceInterfaceVrf?: string; 
  public get ipTacacsSourceInterfaceVrf() {
    return this.getStringAttribute('ip_tacacs_source_interface_vrf');
  }
  public set ipTacacsSourceInterfaceVrf(value: string) {
    this._ipTacacsSourceInterfaceVrf = value;
  }
  public resetIpTacacsSourceInterfaceVrf() {
    this._ipTacacsSourceInterfaceVrf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipTacacsSourceInterfaceVrfInput() {
    return this._ipTacacsSourceInterfaceVrf;
  }

  // ip_tcp_mss - computed: false, optional: true, required: false
  private _ipTcpMss?: number; 
  public get ipTcpMss() {
    return this.getNumberAttribute('ip_tcp_mss');
  }
  public set ipTcpMss(value: number) {
    this._ipTcpMss = value;
  }
  public resetIpTcpMss() {
    this._ipTcpMss = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipTcpMssInput() {
    return this._ipTcpMss;
  }

  // ip_tcp_path_mtu_discovery - computed: false, optional: true, required: false
  private _ipTcpPathMtuDiscovery?: boolean | cdktf.IResolvable; 
  public get ipTcpPathMtuDiscovery() {
    return this.getBooleanAttribute('ip_tcp_path_mtu_discovery');
  }
  public set ipTcpPathMtuDiscovery(value: boolean | cdktf.IResolvable) {
    this._ipTcpPathMtuDiscovery = value;
  }
  public resetIpTcpPathMtuDiscovery() {
    this._ipTcpPathMtuDiscovery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipTcpPathMtuDiscoveryInput() {
    return this._ipTcpPathMtuDiscovery;
  }

  // ip_tcp_window_size - computed: false, optional: true, required: false
  private _ipTcpWindowSize?: number; 
  public get ipTcpWindowSize() {
    return this.getNumberAttribute('ip_tcp_window_size');
  }
  public set ipTcpWindowSize(value: number) {
    this._ipTcpWindowSize = value;
  }
  public resetIpTcpWindowSize() {
    this._ipTcpWindowSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipTcpWindowSizeInput() {
    return this._ipTcpWindowSize;
  }

  // ipv6_cef_load_sharing_algorithm_include_ports_destination - computed: false, optional: true, required: false
  private _ipv6CefLoadSharingAlgorithmIncludePortsDestination?: boolean | cdktf.IResolvable; 
  public get ipv6CefLoadSharingAlgorithmIncludePortsDestination() {
    return this.getBooleanAttribute('ipv6_cef_load_sharing_algorithm_include_ports_destination');
  }
  public set ipv6CefLoadSharingAlgorithmIncludePortsDestination(value: boolean | cdktf.IResolvable) {
    this._ipv6CefLoadSharingAlgorithmIncludePortsDestination = value;
  }
  public resetIpv6CefLoadSharingAlgorithmIncludePortsDestination() {
    this._ipv6CefLoadSharingAlgorithmIncludePortsDestination = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6CefLoadSharingAlgorithmIncludePortsDestinationInput() {
    return this._ipv6CefLoadSharingAlgorithmIncludePortsDestination;
  }

  // ipv6_cef_load_sharing_algorithm_include_ports_source - computed: false, optional: true, required: false
  private _ipv6CefLoadSharingAlgorithmIncludePortsSource?: boolean | cdktf.IResolvable; 
  public get ipv6CefLoadSharingAlgorithmIncludePortsSource() {
    return this.getBooleanAttribute('ipv6_cef_load_sharing_algorithm_include_ports_source');
  }
  public set ipv6CefLoadSharingAlgorithmIncludePortsSource(value: boolean | cdktf.IResolvable) {
    this._ipv6CefLoadSharingAlgorithmIncludePortsSource = value;
  }
  public resetIpv6CefLoadSharingAlgorithmIncludePortsSource() {
    this._ipv6CefLoadSharingAlgorithmIncludePortsSource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6CefLoadSharingAlgorithmIncludePortsSourceInput() {
    return this._ipv6CefLoadSharingAlgorithmIncludePortsSource;
  }

  // ipv6_multicast_routing - computed: false, optional: true, required: false
  private _ipv6MulticastRouting?: boolean | cdktf.IResolvable; 
  public get ipv6MulticastRouting() {
    return this.getBooleanAttribute('ipv6_multicast_routing');
  }
  public set ipv6MulticastRouting(value: boolean | cdktf.IResolvable) {
    this._ipv6MulticastRouting = value;
  }
  public resetIpv6MulticastRouting() {
    this._ipv6MulticastRouting = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6MulticastRoutingInput() {
    return this._ipv6MulticastRouting;
  }

  // ipv6_unicast_routing - computed: false, optional: true, required: false
  private _ipv6UnicastRouting?: boolean | cdktf.IResolvable; 
  public get ipv6UnicastRouting() {
    return this.getBooleanAttribute('ipv6_unicast_routing');
  }
  public set ipv6UnicastRouting(value: boolean | cdktf.IResolvable) {
    this._ipv6UnicastRouting = value;
  }
  public resetIpv6UnicastRouting() {
    this._ipv6UnicastRouting = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6UnicastRoutingInput() {
    return this._ipv6UnicastRouting;
  }

  // login_delay - computed: false, optional: true, required: false
  private _loginDelay?: number; 
  public get loginDelay() {
    return this.getNumberAttribute('login_delay');
  }
  public set loginDelay(value: number) {
    this._loginDelay = value;
  }
  public resetLoginDelay() {
    this._loginDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loginDelayInput() {
    return this._loginDelay;
  }

  // login_on_failure - computed: false, optional: true, required: false
  private _loginOnFailure?: boolean | cdktf.IResolvable; 
  public get loginOnFailure() {
    return this.getBooleanAttribute('login_on_failure');
  }
  public set loginOnFailure(value: boolean | cdktf.IResolvable) {
    this._loginOnFailure = value;
  }
  public resetLoginOnFailure() {
    this._loginOnFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loginOnFailureInput() {
    return this._loginOnFailure;
  }

  // login_on_failure_log - computed: false, optional: true, required: false
  private _loginOnFailureLog?: boolean | cdktf.IResolvable; 
  public get loginOnFailureLog() {
    return this.getBooleanAttribute('login_on_failure_log');
  }
  public set loginOnFailureLog(value: boolean | cdktf.IResolvable) {
    this._loginOnFailureLog = value;
  }
  public resetLoginOnFailureLog() {
    this._loginOnFailureLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loginOnFailureLogInput() {
    return this._loginOnFailureLog;
  }

  // login_on_success - computed: false, optional: true, required: false
  private _loginOnSuccess?: boolean | cdktf.IResolvable; 
  public get loginOnSuccess() {
    return this.getBooleanAttribute('login_on_success');
  }
  public set loginOnSuccess(value: boolean | cdktf.IResolvable) {
    this._loginOnSuccess = value;
  }
  public resetLoginOnSuccess() {
    this._loginOnSuccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loginOnSuccessInput() {
    return this._loginOnSuccess;
  }

  // login_on_success_log - computed: false, optional: true, required: false
  private _loginOnSuccessLog?: boolean | cdktf.IResolvable; 
  public get loginOnSuccessLog() {
    return this.getBooleanAttribute('login_on_success_log');
  }
  public set loginOnSuccessLog(value: boolean | cdktf.IResolvable) {
    this._loginOnSuccessLog = value;
  }
  public resetLoginOnSuccessLog() {
    this._loginOnSuccessLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loginOnSuccessLogInput() {
    return this._loginOnSuccessLog;
  }

  // memory_free_low_watermark_processor - computed: false, optional: true, required: false
  private _memoryFreeLowWatermarkProcessor?: number; 
  public get memoryFreeLowWatermarkProcessor() {
    return this.getNumberAttribute('memory_free_low_watermark_processor');
  }
  public set memoryFreeLowWatermarkProcessor(value: number) {
    this._memoryFreeLowWatermarkProcessor = value;
  }
  public resetMemoryFreeLowWatermarkProcessor() {
    this._memoryFreeLowWatermarkProcessor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryFreeLowWatermarkProcessorInput() {
    return this._memoryFreeLowWatermarkProcessor;
  }

  // mld_snooping - computed: false, optional: true, required: false
  private _mldSnooping?: boolean | cdktf.IResolvable; 
  public get mldSnooping() {
    return this.getBooleanAttribute('mld_snooping');
  }
  public set mldSnooping(value: boolean | cdktf.IResolvable) {
    this._mldSnooping = value;
  }
  public resetMldSnooping() {
    this._mldSnooping = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mldSnoopingInput() {
    return this._mldSnooping;
  }

  // mld_snooping_querier - computed: false, optional: true, required: false
  private _mldSnoopingQuerier?: boolean | cdktf.IResolvable; 
  public get mldSnoopingQuerier() {
    return this.getBooleanAttribute('mld_snooping_querier');
  }
  public set mldSnoopingQuerier(value: boolean | cdktf.IResolvable) {
    this._mldSnoopingQuerier = value;
  }
  public resetMldSnoopingQuerier() {
    this._mldSnoopingQuerier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mldSnoopingQuerierInput() {
    return this._mldSnoopingQuerier;
  }

  // mtu - computed: false, optional: true, required: false
  private _mtu?: number; 
  public get mtu() {
    return this.getNumberAttribute('mtu');
  }
  public set mtu(value: number) {
    this._mtu = value;
  }
  public resetMtu() {
    this._mtu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mtuInput() {
    return this._mtu;
  }

  // multicast_routing_switch - computed: false, optional: true, required: false
  private _multicastRoutingSwitch?: boolean | cdktf.IResolvable; 
  public get multicastRoutingSwitch() {
    return this.getBooleanAttribute('multicast_routing_switch');
  }
  public set multicastRoutingSwitch(value: boolean | cdktf.IResolvable) {
    this._multicastRoutingSwitch = value;
  }
  public resetMulticastRoutingSwitch() {
    this._multicastRoutingSwitch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multicastRoutingSwitchInput() {
    return this._multicastRoutingSwitch;
  }

  // multicast_routing_vrfs - computed: false, optional: true, required: false
  private _multicastRoutingVrfs = new SystemMulticastRoutingVrfsList(this, "multicast_routing_vrfs", false);
  public get multicastRoutingVrfs() {
    return this._multicastRoutingVrfs;
  }
  public putMulticastRoutingVrfs(value: SystemMulticastRoutingVrfs[] | cdktf.IResolvable) {
    this._multicastRoutingVrfs.internalValue = value;
  }
  public resetMulticastRoutingVrfs() {
    this._multicastRoutingVrfs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multicastRoutingVrfsInput() {
    return this._multicastRoutingVrfs.internalValue;
  }

  // multilink_ppp_bundle_name - computed: false, optional: true, required: false
  private _multilinkPppBundleName?: string; 
  public get multilinkPppBundleName() {
    return this.getStringAttribute('multilink_ppp_bundle_name');
  }
  public set multilinkPppBundleName(value: string) {
    this._multilinkPppBundleName = value;
  }
  public resetMultilinkPppBundleName() {
    this._multilinkPppBundleName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multilinkPppBundleNameInput() {
    return this._multilinkPppBundleName;
  }

  // pnp_profiles - computed: false, optional: true, required: false
  private _pnpProfiles = new SystemPnpProfilesList(this, "pnp_profiles", false);
  public get pnpProfiles() {
    return this._pnpProfiles;
  }
  public putPnpProfiles(value: SystemPnpProfiles[] | cdktf.IResolvable) {
    this._pnpProfiles.internalValue = value;
  }
  public resetPnpProfiles() {
    this._pnpProfiles.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pnpProfilesInput() {
    return this._pnpProfiles.internalValue;
  }

  // port_channel_load_balance - computed: false, optional: true, required: false
  private _portChannelLoadBalance?: string; 
  public get portChannelLoadBalance() {
    return this.getStringAttribute('port_channel_load_balance');
  }
  public set portChannelLoadBalance(value: string) {
    this._portChannelLoadBalance = value;
  }
  public resetPortChannelLoadBalance() {
    this._portChannelLoadBalance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portChannelLoadBalanceInput() {
    return this._portChannelLoadBalance;
  }

  // redundancy - computed: false, optional: true, required: false
  private _redundancy?: boolean | cdktf.IResolvable; 
  public get redundancy() {
    return this.getBooleanAttribute('redundancy');
  }
  public set redundancy(value: boolean | cdktf.IResolvable) {
    this._redundancy = value;
  }
  public resetRedundancy() {
    this._redundancy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redundancyInput() {
    return this._redundancy;
  }

  // redundancy_mode - computed: false, optional: true, required: false
  private _redundancyMode?: string; 
  public get redundancyMode() {
    return this.getStringAttribute('redundancy_mode');
  }
  public set redundancyMode(value: string) {
    this._redundancyMode = value;
  }
  public resetRedundancyMode() {
    this._redundancyMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redundancyModeInput() {
    return this._redundancyMode;
  }

  // security_passwords_min_length - computed: false, optional: true, required: false
  private _securityPasswordsMinLength?: number; 
  public get securityPasswordsMinLength() {
    return this.getNumberAttribute('security_passwords_min_length');
  }
  public set securityPasswordsMinLength(value: number) {
    this._securityPasswordsMinLength = value;
  }
  public resetSecurityPasswordsMinLength() {
    this._securityPasswordsMinLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityPasswordsMinLengthInput() {
    return this._securityPasswordsMinLength;
  }

  // standby_redirects - computed: false, optional: true, required: false
  private _standbyRedirects?: boolean | cdktf.IResolvable; 
  public get standbyRedirects() {
    return this.getBooleanAttribute('standby_redirects');
  }
  public set standbyRedirects(value: boolean | cdktf.IResolvable) {
    this._standbyRedirects = value;
  }
  public resetStandbyRedirects() {
    this._standbyRedirects = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get standbyRedirectsInput() {
    return this._standbyRedirects;
  }

  // standby_redirects_enable_disable - computed: false, optional: true, required: false
  private _standbyRedirectsEnableDisable?: string; 
  public get standbyRedirectsEnableDisable() {
    return this.getStringAttribute('standby_redirects_enable_disable');
  }
  public set standbyRedirectsEnableDisable(value: string) {
    this._standbyRedirectsEnableDisable = value;
  }
  public resetStandbyRedirectsEnableDisable() {
    this._standbyRedirectsEnableDisable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get standbyRedirectsEnableDisableInput() {
    return this._standbyRedirectsEnableDisable;
  }

  // subscriber_templating - computed: false, optional: true, required: false
  private _subscriberTemplating?: boolean | cdktf.IResolvable; 
  public get subscriberTemplating() {
    return this.getBooleanAttribute('subscriber_templating');
  }
  public set subscriberTemplating(value: boolean | cdktf.IResolvable) {
    this._subscriberTemplating = value;
  }
  public resetSubscriberTemplating() {
    this._subscriberTemplating = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subscriberTemplatingInput() {
    return this._subscriberTemplating;
  }

  // table_maps - computed: false, optional: true, required: false
  private _tableMaps = new SystemTableMapsList(this, "table_maps", false);
  public get tableMaps() {
    return this._tableMaps;
  }
  public putTableMaps(value: SystemTableMaps[] | cdktf.IResolvable) {
    this._tableMaps.internalValue = value;
  }
  public resetTableMaps() {
    this._tableMaps.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tableMapsInput() {
    return this._tableMaps.internalValue;
  }

  // tftp_source_interface_five_gigabit_ethernet - computed: false, optional: true, required: false
  private _tftpSourceInterfaceFiveGigabitEthernet?: string; 
  public get tftpSourceInterfaceFiveGigabitEthernet() {
    return this.getStringAttribute('tftp_source_interface_five_gigabit_ethernet');
  }
  public set tftpSourceInterfaceFiveGigabitEthernet(value: string) {
    this._tftpSourceInterfaceFiveGigabitEthernet = value;
  }
  public resetTftpSourceInterfaceFiveGigabitEthernet() {
    this._tftpSourceInterfaceFiveGigabitEthernet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tftpSourceInterfaceFiveGigabitEthernetInput() {
    return this._tftpSourceInterfaceFiveGigabitEthernet;
  }

  // tftp_source_interface_forty_gigabit_ethernet - computed: false, optional: true, required: false
  private _tftpSourceInterfaceFortyGigabitEthernet?: string; 
  public get tftpSourceInterfaceFortyGigabitEthernet() {
    return this.getStringAttribute('tftp_source_interface_forty_gigabit_ethernet');
  }
  public set tftpSourceInterfaceFortyGigabitEthernet(value: string) {
    this._tftpSourceInterfaceFortyGigabitEthernet = value;
  }
  public resetTftpSourceInterfaceFortyGigabitEthernet() {
    this._tftpSourceInterfaceFortyGigabitEthernet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tftpSourceInterfaceFortyGigabitEthernetInput() {
    return this._tftpSourceInterfaceFortyGigabitEthernet;
  }

  // tftp_source_interface_gigabit_ethernet - computed: false, optional: true, required: false
  private _tftpSourceInterfaceGigabitEthernet?: string; 
  public get tftpSourceInterfaceGigabitEthernet() {
    return this.getStringAttribute('tftp_source_interface_gigabit_ethernet');
  }
  public set tftpSourceInterfaceGigabitEthernet(value: string) {
    this._tftpSourceInterfaceGigabitEthernet = value;
  }
  public resetTftpSourceInterfaceGigabitEthernet() {
    this._tftpSourceInterfaceGigabitEthernet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tftpSourceInterfaceGigabitEthernetInput() {
    return this._tftpSourceInterfaceGigabitEthernet;
  }

  // tftp_source_interface_hundred_gigabit_ethernet - computed: false, optional: true, required: false
  private _tftpSourceInterfaceHundredGigabitEthernet?: string; 
  public get tftpSourceInterfaceHundredGigabitEthernet() {
    return this.getStringAttribute('tftp_source_interface_hundred_gigabit_ethernet');
  }
  public set tftpSourceInterfaceHundredGigabitEthernet(value: string) {
    this._tftpSourceInterfaceHundredGigabitEthernet = value;
  }
  public resetTftpSourceInterfaceHundredGigabitEthernet() {
    this._tftpSourceInterfaceHundredGigabitEthernet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tftpSourceInterfaceHundredGigabitEthernetInput() {
    return this._tftpSourceInterfaceHundredGigabitEthernet;
  }

  // tftp_source_interface_loopback - computed: false, optional: true, required: false
  private _tftpSourceInterfaceLoopback?: number; 
  public get tftpSourceInterfaceLoopback() {
    return this.getNumberAttribute('tftp_source_interface_loopback');
  }
  public set tftpSourceInterfaceLoopback(value: number) {
    this._tftpSourceInterfaceLoopback = value;
  }
  public resetTftpSourceInterfaceLoopback() {
    this._tftpSourceInterfaceLoopback = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tftpSourceInterfaceLoopbackInput() {
    return this._tftpSourceInterfaceLoopback;
  }

  // tftp_source_interface_ten_gigabit_ethernet - computed: false, optional: true, required: false
  private _tftpSourceInterfaceTenGigabitEthernet?: string; 
  public get tftpSourceInterfaceTenGigabitEthernet() {
    return this.getStringAttribute('tftp_source_interface_ten_gigabit_ethernet');
  }
  public set tftpSourceInterfaceTenGigabitEthernet(value: string) {
    this._tftpSourceInterfaceTenGigabitEthernet = value;
  }
  public resetTftpSourceInterfaceTenGigabitEthernet() {
    this._tftpSourceInterfaceTenGigabitEthernet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tftpSourceInterfaceTenGigabitEthernetInput() {
    return this._tftpSourceInterfaceTenGigabitEthernet;
  }

  // tftp_source_interface_twenty_five_gigabit_ethernet - computed: false, optional: true, required: false
  private _tftpSourceInterfaceTwentyFiveGigabitEthernet?: string; 
  public get tftpSourceInterfaceTwentyFiveGigabitEthernet() {
    return this.getStringAttribute('tftp_source_interface_twenty_five_gigabit_ethernet');
  }
  public set tftpSourceInterfaceTwentyFiveGigabitEthernet(value: string) {
    this._tftpSourceInterfaceTwentyFiveGigabitEthernet = value;
  }
  public resetTftpSourceInterfaceTwentyFiveGigabitEthernet() {
    this._tftpSourceInterfaceTwentyFiveGigabitEthernet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tftpSourceInterfaceTwentyFiveGigabitEthernetInput() {
    return this._tftpSourceInterfaceTwentyFiveGigabitEthernet;
  }

  // tftp_source_interface_two_gigabit_ethernet - computed: false, optional: true, required: false
  private _tftpSourceInterfaceTwoGigabitEthernet?: string; 
  public get tftpSourceInterfaceTwoGigabitEthernet() {
    return this.getStringAttribute('tftp_source_interface_two_gigabit_ethernet');
  }
  public set tftpSourceInterfaceTwoGigabitEthernet(value: string) {
    this._tftpSourceInterfaceTwoGigabitEthernet = value;
  }
  public resetTftpSourceInterfaceTwoGigabitEthernet() {
    this._tftpSourceInterfaceTwoGigabitEthernet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tftpSourceInterfaceTwoGigabitEthernetInput() {
    return this._tftpSourceInterfaceTwoGigabitEthernet;
  }

  // tftp_source_interface_vlan - computed: false, optional: true, required: false
  private _tftpSourceInterfaceVlan?: number; 
  public get tftpSourceInterfaceVlan() {
    return this.getNumberAttribute('tftp_source_interface_vlan');
  }
  public set tftpSourceInterfaceVlan(value: number) {
    this._tftpSourceInterfaceVlan = value;
  }
  public resetTftpSourceInterfaceVlan() {
    this._tftpSourceInterfaceVlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tftpSourceInterfaceVlanInput() {
    return this._tftpSourceInterfaceVlan;
  }

  // track_objects - computed: false, optional: true, required: false
  private _trackObjects = new SystemTrackObjectsList(this, "track_objects", false);
  public get trackObjects() {
    return this._trackObjects;
  }
  public putTrackObjects(value: SystemTrackObjects[] | cdktf.IResolvable) {
    this._trackObjects.internalValue = value;
  }
  public resetTrackObjects() {
    this._trackObjects.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trackObjectsInput() {
    return this._trackObjects.internalValue;
  }

  // transceiver_type_all_monitoring - computed: false, optional: true, required: false
  private _transceiverTypeAllMonitoring?: boolean | cdktf.IResolvable; 
  public get transceiverTypeAllMonitoring() {
    return this.getBooleanAttribute('transceiver_type_all_monitoring');
  }
  public set transceiverTypeAllMonitoring(value: boolean | cdktf.IResolvable) {
    this._transceiverTypeAllMonitoring = value;
  }
  public resetTransceiverTypeAllMonitoring() {
    this._transceiverTypeAllMonitoring = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transceiverTypeAllMonitoringInput() {
    return this._transceiverTypeAllMonitoring;
  }

  // version - computed: false, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_session_mac_move_deny: cdktf.booleanToTerraform(this._accessSessionMacMoveDeny),
      archive_log_config_logging_enable: cdktf.booleanToTerraform(this._archiveLogConfigLoggingEnable),
      archive_log_config_logging_size: cdktf.numberToTerraform(this._archiveLogConfigLoggingSize),
      archive_maximum: cdktf.numberToTerraform(this._archiveMaximum),
      archive_path: cdktf.stringToTerraform(this._archivePath),
      archive_time_period: cdktf.numberToTerraform(this._archiveTimePeriod),
      archive_write_memory: cdktf.booleanToTerraform(this._archiveWriteMemory),
      authentication_mac_move_deny_uncontrolled: cdktf.booleanToTerraform(this._authenticationMacMoveDenyUncontrolled),
      authentication_mac_move_permit: cdktf.booleanToTerraform(this._authenticationMacMovePermit),
      boot_system_bootfiles: cdktf.listMapper(systemBootSystemBootfilesToTerraform, false)(this._bootSystemBootfiles.internalValue),
      boot_system_flash_files: cdktf.listMapper(systemBootSystemFlashFilesToTerraform, false)(this._bootSystemFlashFiles.internalValue),
      call_home_cisco_tac_1_destination_transport_method: cdktf.stringToTerraform(this._callHomeCiscoTac1DestinationTransportMethod),
      call_home_cisco_tac_1_profile_active: cdktf.booleanToTerraform(this._callHomeCiscoTac1ProfileActive),
      call_home_contact_email: cdktf.stringToTerraform(this._callHomeContactEmail),
      cisp_enable: cdktf.booleanToTerraform(this._cispEnable),
      control_plane_service_policy_input: cdktf.stringToTerraform(this._controlPlaneServicePolicyInput),
      device: cdktf.stringToTerraform(this._device),
      device_classifier: cdktf.booleanToTerraform(this._deviceClassifier),
      diagnostic_bootup_level: cdktf.stringToTerraform(this._diagnosticBootupLevel),
      diagnostic_event_log_size: cdktf.numberToTerraform(this._diagnosticEventLogSize),
      enable_secret: cdktf.stringToTerraform(this._enableSecret),
      enable_secret_level: cdktf.numberToTerraform(this._enableSecretLevel),
      enable_secret_type: cdktf.stringToTerraform(this._enableSecretType),
      epm_logging: cdktf.booleanToTerraform(this._epmLogging),
      ethernet_cfm_alarm_config_delay: cdktf.numberToTerraform(this._ethernetCfmAlarmConfigDelay),
      ethernet_cfm_alarm_config_reset: cdktf.numberToTerraform(this._ethernetCfmAlarmConfigReset),
      hostname: cdktf.stringToTerraform(this._hostname),
      igmp_snooping_querier: cdktf.booleanToTerraform(this._igmpSnoopingQuerier),
      igmp_snooping_querier_max_response_time: cdktf.numberToTerraform(this._igmpSnoopingQuerierMaxResponseTime),
      igmp_snooping_querier_timer_expiry: cdktf.numberToTerraform(this._igmpSnoopingQuerierTimerExpiry),
      igmp_snooping_querier_version: cdktf.numberToTerraform(this._igmpSnoopingQuerierVersion),
      ip_bgp_community_new_format: cdktf.booleanToTerraform(this._ipBgpCommunityNewFormat),
      ip_cef_load_sharing_algorithm_include_ports_destination: cdktf.booleanToTerraform(this._ipCefLoadSharingAlgorithmIncludePortsDestination),
      ip_cef_load_sharing_algorithm_include_ports_source: cdktf.booleanToTerraform(this._ipCefLoadSharingAlgorithmIncludePortsSource),
      ip_default_gateway: cdktf.stringToTerraform(this._ipDefaultGateway),
      ip_domain_list_names: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ipDomainListNames),
      ip_domain_list_vrf: cdktf.stringToTerraform(this._ipDomainListVrf),
      ip_domain_list_vrf_domain: cdktf.stringToTerraform(this._ipDomainListVrfDomain),
      ip_domain_lookup: cdktf.booleanToTerraform(this._ipDomainLookup),
      ip_domain_lookup_nsap: cdktf.booleanToTerraform(this._ipDomainLookupNsap),
      ip_domain_lookup_recursive: cdktf.booleanToTerraform(this._ipDomainLookupRecursive),
      ip_domain_lookup_source_interface_five_gigabit_ethernet: cdktf.stringToTerraform(this._ipDomainLookupSourceInterfaceFiveGigabitEthernet),
      ip_domain_lookup_source_interface_forty_gigabit_ethernet: cdktf.stringToTerraform(this._ipDomainLookupSourceInterfaceFortyGigabitEthernet),
      ip_domain_lookup_source_interface_gigabit_ethernet: cdktf.stringToTerraform(this._ipDomainLookupSourceInterfaceGigabitEthernet),
      ip_domain_lookup_source_interface_hundred_gigabit_ethernet: cdktf.stringToTerraform(this._ipDomainLookupSourceInterfaceHundredGigabitEthernet),
      ip_domain_lookup_source_interface_loopback: cdktf.numberToTerraform(this._ipDomainLookupSourceInterfaceLoopback),
      ip_domain_lookup_source_interface_ten_gigabit_ethernet: cdktf.stringToTerraform(this._ipDomainLookupSourceInterfaceTenGigabitEthernet),
      ip_domain_lookup_source_interface_twenty_five_gigabit_ethernet: cdktf.stringToTerraform(this._ipDomainLookupSourceInterfaceTwentyFiveGigabitEthernet),
      ip_domain_lookup_source_interface_two_gigabit_ethernet: cdktf.stringToTerraform(this._ipDomainLookupSourceInterfaceTwoGigabitEthernet),
      ip_domain_lookup_source_interface_vlan: cdktf.numberToTerraform(this._ipDomainLookupSourceInterfaceVlan),
      ip_domain_lookup_vrfs: cdktf.listMapper(systemIpDomainLookupVrfsToTerraform, false)(this._ipDomainLookupVrfs.internalValue),
      ip_domain_name: cdktf.stringToTerraform(this._ipDomainName),
      ip_forward_protocol_nd: cdktf.booleanToTerraform(this._ipForwardProtocolNd),
      ip_ftp_passive: cdktf.booleanToTerraform(this._ipFtpPassive),
      ip_hosts: cdktf.listMapper(systemIpHostsToTerraform, false)(this._ipHosts.internalValue),
      ip_hosts_vrf: cdktf.listMapper(systemIpHostsVrfToTerraform, false)(this._ipHostsVrf.internalValue),
      ip_http_access_class: cdktf.numberToTerraform(this._ipHttpAccessClass),
      ip_http_active_session_modules: cdktf.stringToTerraform(this._ipHttpActiveSessionModules),
      ip_http_authentication_aaa: cdktf.booleanToTerraform(this._ipHttpAuthenticationAaa),
      ip_http_authentication_aaa_command_authorization: cdktf.listMapper(systemIpHttpAuthenticationAaaCommandAuthorizationToTerraform, false)(this._ipHttpAuthenticationAaaCommandAuthorization.internalValue),
      ip_http_authentication_aaa_exec_authorization: cdktf.stringToTerraform(this._ipHttpAuthenticationAaaExecAuthorization),
      ip_http_authentication_aaa_login_authentication: cdktf.stringToTerraform(this._ipHttpAuthenticationAaaLoginAuthentication),
      ip_http_authentication_local: cdktf.booleanToTerraform(this._ipHttpAuthenticationLocal),
      ip_http_client_secure_trustpoint: cdktf.stringToTerraform(this._ipHttpClientSecureTrustpoint),
      ip_http_client_source_interface: cdktf.stringToTerraform(this._ipHttpClientSourceInterface),
      ip_http_max_connections: cdktf.numberToTerraform(this._ipHttpMaxConnections),
      ip_http_secure_active_session_modules: cdktf.stringToTerraform(this._ipHttpSecureActiveSessionModules),
      ip_http_secure_server: cdktf.booleanToTerraform(this._ipHttpSecureServer),
      ip_http_secure_trustpoint: cdktf.stringToTerraform(this._ipHttpSecureTrustpoint),
      ip_http_server: cdktf.booleanToTerraform(this._ipHttpServer),
      ip_http_tls_version: cdktf.stringToTerraform(this._ipHttpTlsVersion),
      ip_multicast_route_limit: cdktf.numberToTerraform(this._ipMulticastRouteLimit),
      ip_multicast_routing: cdktf.booleanToTerraform(this._ipMulticastRouting),
      ip_multicast_routing_distributed: cdktf.booleanToTerraform(this._ipMulticastRoutingDistributed),
      ip_name_servers: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ipNameServers),
      ip_name_servers_vrf: cdktf.listMapper(systemIpNameServersVrfToTerraform, false)(this._ipNameServersVrf.internalValue),
      ip_nbar_classification_dns_classify_by_domain: cdktf.booleanToTerraform(this._ipNbarClassificationDnsClassifyByDomain),
      ip_radius_source_interface_five_gigabit_ethernet: cdktf.stringToTerraform(this._ipRadiusSourceInterfaceFiveGigabitEthernet),
      ip_radius_source_interface_forty_gigabit_ethernet: cdktf.stringToTerraform(this._ipRadiusSourceInterfaceFortyGigabitEthernet),
      ip_radius_source_interface_gigabit_ethernet: cdktf.stringToTerraform(this._ipRadiusSourceInterfaceGigabitEthernet),
      ip_radius_source_interface_hundred_gigabit_ethernet: cdktf.stringToTerraform(this._ipRadiusSourceInterfaceHundredGigabitEthernet),
      ip_radius_source_interface_loopback: cdktf.numberToTerraform(this._ipRadiusSourceInterfaceLoopback),
      ip_radius_source_interface_ten_gigabit_ethernet: cdktf.stringToTerraform(this._ipRadiusSourceInterfaceTenGigabitEthernet),
      ip_radius_source_interface_twenty_five_gigabit_ethernet: cdktf.stringToTerraform(this._ipRadiusSourceInterfaceTwentyFiveGigabitEthernet),
      ip_radius_source_interface_two_gigabit_ethernet: cdktf.stringToTerraform(this._ipRadiusSourceInterfaceTwoGigabitEthernet),
      ip_radius_source_interface_vlan: cdktf.numberToTerraform(this._ipRadiusSourceInterfaceVlan),
      ip_radius_source_interface_vrf: cdktf.stringToTerraform(this._ipRadiusSourceInterfaceVrf),
      ip_routing: cdktf.booleanToTerraform(this._ipRouting),
      ip_routing_protocol_purge_interface: cdktf.booleanToTerraform(this._ipRoutingProtocolPurgeInterface),
      ip_scp_server_enable: cdktf.booleanToTerraform(this._ipScpServerEnable),
      ip_source_route: cdktf.booleanToTerraform(this._ipSourceRoute),
      ip_ssh_authentication_retries: cdktf.numberToTerraform(this._ipSshAuthenticationRetries),
      ip_ssh_bulk_mode: cdktf.booleanToTerraform(this._ipSshBulkMode),
      ip_ssh_bulk_mode_window_size: cdktf.numberToTerraform(this._ipSshBulkModeWindowSize),
      ip_ssh_source_interface_five_gigabit_ethernet: cdktf.stringToTerraform(this._ipSshSourceInterfaceFiveGigabitEthernet),
      ip_ssh_source_interface_forty_gigabit_ethernet: cdktf.stringToTerraform(this._ipSshSourceInterfaceFortyGigabitEthernet),
      ip_ssh_source_interface_gigabit_ethernet: cdktf.stringToTerraform(this._ipSshSourceInterfaceGigabitEthernet),
      ip_ssh_source_interface_hundred_gigabit_ethernet: cdktf.stringToTerraform(this._ipSshSourceInterfaceHundredGigabitEthernet),
      ip_ssh_source_interface_loopback: cdktf.numberToTerraform(this._ipSshSourceInterfaceLoopback),
      ip_ssh_source_interface_ten_gigabit_ethernet: cdktf.stringToTerraform(this._ipSshSourceInterfaceTenGigabitEthernet),
      ip_ssh_source_interface_twenty_five_gigabit_ethernet: cdktf.stringToTerraform(this._ipSshSourceInterfaceTwentyFiveGigabitEthernet),
      ip_ssh_source_interface_two_gigabit_ethernet: cdktf.stringToTerraform(this._ipSshSourceInterfaceTwoGigabitEthernet),
      ip_ssh_source_interface_vlan: cdktf.numberToTerraform(this._ipSshSourceInterfaceVlan),
      ip_ssh_time_out: cdktf.numberToTerraform(this._ipSshTimeOut),
      ip_ssh_version: cdktf.stringToTerraform(this._ipSshVersion),
      ip_ssh_version_legacy: cdktf.numberToTerraform(this._ipSshVersionLegacy),
      ip_tacacs_source_interface_five_gigabit_ethernet: cdktf.stringToTerraform(this._ipTacacsSourceInterfaceFiveGigabitEthernet),
      ip_tacacs_source_interface_forty_gigabit_ethernet: cdktf.stringToTerraform(this._ipTacacsSourceInterfaceFortyGigabitEthernet),
      ip_tacacs_source_interface_gigabit_ethernet: cdktf.stringToTerraform(this._ipTacacsSourceInterfaceGigabitEthernet),
      ip_tacacs_source_interface_hundred_gigabit_ethernet: cdktf.stringToTerraform(this._ipTacacsSourceInterfaceHundredGigabitEthernet),
      ip_tacacs_source_interface_loopback: cdktf.numberToTerraform(this._ipTacacsSourceInterfaceLoopback),
      ip_tacacs_source_interface_ten_gigabit_ethernet: cdktf.stringToTerraform(this._ipTacacsSourceInterfaceTenGigabitEthernet),
      ip_tacacs_source_interface_twenty_five_gigabit_ethernet: cdktf.stringToTerraform(this._ipTacacsSourceInterfaceTwentyFiveGigabitEthernet),
      ip_tacacs_source_interface_two_gigabit_ethernet: cdktf.stringToTerraform(this._ipTacacsSourceInterfaceTwoGigabitEthernet),
      ip_tacacs_source_interface_vlan: cdktf.numberToTerraform(this._ipTacacsSourceInterfaceVlan),
      ip_tacacs_source_interface_vrf: cdktf.stringToTerraform(this._ipTacacsSourceInterfaceVrf),
      ip_tcp_mss: cdktf.numberToTerraform(this._ipTcpMss),
      ip_tcp_path_mtu_discovery: cdktf.booleanToTerraform(this._ipTcpPathMtuDiscovery),
      ip_tcp_window_size: cdktf.numberToTerraform(this._ipTcpWindowSize),
      ipv6_cef_load_sharing_algorithm_include_ports_destination: cdktf.booleanToTerraform(this._ipv6CefLoadSharingAlgorithmIncludePortsDestination),
      ipv6_cef_load_sharing_algorithm_include_ports_source: cdktf.booleanToTerraform(this._ipv6CefLoadSharingAlgorithmIncludePortsSource),
      ipv6_multicast_routing: cdktf.booleanToTerraform(this._ipv6MulticastRouting),
      ipv6_unicast_routing: cdktf.booleanToTerraform(this._ipv6UnicastRouting),
      login_delay: cdktf.numberToTerraform(this._loginDelay),
      login_on_failure: cdktf.booleanToTerraform(this._loginOnFailure),
      login_on_failure_log: cdktf.booleanToTerraform(this._loginOnFailureLog),
      login_on_success: cdktf.booleanToTerraform(this._loginOnSuccess),
      login_on_success_log: cdktf.booleanToTerraform(this._loginOnSuccessLog),
      memory_free_low_watermark_processor: cdktf.numberToTerraform(this._memoryFreeLowWatermarkProcessor),
      mld_snooping: cdktf.booleanToTerraform(this._mldSnooping),
      mld_snooping_querier: cdktf.booleanToTerraform(this._mldSnoopingQuerier),
      mtu: cdktf.numberToTerraform(this._mtu),
      multicast_routing_switch: cdktf.booleanToTerraform(this._multicastRoutingSwitch),
      multicast_routing_vrfs: cdktf.listMapper(systemMulticastRoutingVrfsToTerraform, false)(this._multicastRoutingVrfs.internalValue),
      multilink_ppp_bundle_name: cdktf.stringToTerraform(this._multilinkPppBundleName),
      pnp_profiles: cdktf.listMapper(systemPnpProfilesToTerraform, false)(this._pnpProfiles.internalValue),
      port_channel_load_balance: cdktf.stringToTerraform(this._portChannelLoadBalance),
      redundancy: cdktf.booleanToTerraform(this._redundancy),
      redundancy_mode: cdktf.stringToTerraform(this._redundancyMode),
      security_passwords_min_length: cdktf.numberToTerraform(this._securityPasswordsMinLength),
      standby_redirects: cdktf.booleanToTerraform(this._standbyRedirects),
      standby_redirects_enable_disable: cdktf.stringToTerraform(this._standbyRedirectsEnableDisable),
      subscriber_templating: cdktf.booleanToTerraform(this._subscriberTemplating),
      table_maps: cdktf.listMapper(systemTableMapsToTerraform, false)(this._tableMaps.internalValue),
      tftp_source_interface_five_gigabit_ethernet: cdktf.stringToTerraform(this._tftpSourceInterfaceFiveGigabitEthernet),
      tftp_source_interface_forty_gigabit_ethernet: cdktf.stringToTerraform(this._tftpSourceInterfaceFortyGigabitEthernet),
      tftp_source_interface_gigabit_ethernet: cdktf.stringToTerraform(this._tftpSourceInterfaceGigabitEthernet),
      tftp_source_interface_hundred_gigabit_ethernet: cdktf.stringToTerraform(this._tftpSourceInterfaceHundredGigabitEthernet),
      tftp_source_interface_loopback: cdktf.numberToTerraform(this._tftpSourceInterfaceLoopback),
      tftp_source_interface_ten_gigabit_ethernet: cdktf.stringToTerraform(this._tftpSourceInterfaceTenGigabitEthernet),
      tftp_source_interface_twenty_five_gigabit_ethernet: cdktf.stringToTerraform(this._tftpSourceInterfaceTwentyFiveGigabitEthernet),
      tftp_source_interface_two_gigabit_ethernet: cdktf.stringToTerraform(this._tftpSourceInterfaceTwoGigabitEthernet),
      tftp_source_interface_vlan: cdktf.numberToTerraform(this._tftpSourceInterfaceVlan),
      track_objects: cdktf.listMapper(systemTrackObjectsToTerraform, false)(this._trackObjects.internalValue),
      transceiver_type_all_monitoring: cdktf.booleanToTerraform(this._transceiverTypeAllMonitoring),
      version: cdktf.stringToTerraform(this._version),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_session_mac_move_deny: {
        value: cdktf.booleanToHclTerraform(this._accessSessionMacMoveDeny),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      archive_log_config_logging_enable: {
        value: cdktf.booleanToHclTerraform(this._archiveLogConfigLoggingEnable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      archive_log_config_logging_size: {
        value: cdktf.numberToHclTerraform(this._archiveLogConfigLoggingSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      archive_maximum: {
        value: cdktf.numberToHclTerraform(this._archiveMaximum),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      archive_path: {
        value: cdktf.stringToHclTerraform(this._archivePath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      archive_time_period: {
        value: cdktf.numberToHclTerraform(this._archiveTimePeriod),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      archive_write_memory: {
        value: cdktf.booleanToHclTerraform(this._archiveWriteMemory),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      authentication_mac_move_deny_uncontrolled: {
        value: cdktf.booleanToHclTerraform(this._authenticationMacMoveDenyUncontrolled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      authentication_mac_move_permit: {
        value: cdktf.booleanToHclTerraform(this._authenticationMacMovePermit),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      boot_system_bootfiles: {
        value: cdktf.listMapperHcl(systemBootSystemBootfilesToHclTerraform, false)(this._bootSystemBootfiles.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SystemBootSystemBootfilesList",
      },
      boot_system_flash_files: {
        value: cdktf.listMapperHcl(systemBootSystemFlashFilesToHclTerraform, false)(this._bootSystemFlashFiles.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SystemBootSystemFlashFilesList",
      },
      call_home_cisco_tac_1_destination_transport_method: {
        value: cdktf.stringToHclTerraform(this._callHomeCiscoTac1DestinationTransportMethod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      call_home_cisco_tac_1_profile_active: {
        value: cdktf.booleanToHclTerraform(this._callHomeCiscoTac1ProfileActive),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      call_home_contact_email: {
        value: cdktf.stringToHclTerraform(this._callHomeContactEmail),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cisp_enable: {
        value: cdktf.booleanToHclTerraform(this._cispEnable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      control_plane_service_policy_input: {
        value: cdktf.stringToHclTerraform(this._controlPlaneServicePolicyInput),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device: {
        value: cdktf.stringToHclTerraform(this._device),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device_classifier: {
        value: cdktf.booleanToHclTerraform(this._deviceClassifier),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      diagnostic_bootup_level: {
        value: cdktf.stringToHclTerraform(this._diagnosticBootupLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      diagnostic_event_log_size: {
        value: cdktf.numberToHclTerraform(this._diagnosticEventLogSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      enable_secret: {
        value: cdktf.stringToHclTerraform(this._enableSecret),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_secret_level: {
        value: cdktf.numberToHclTerraform(this._enableSecretLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      enable_secret_type: {
        value: cdktf.stringToHclTerraform(this._enableSecretType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      epm_logging: {
        value: cdktf.booleanToHclTerraform(this._epmLogging),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ethernet_cfm_alarm_config_delay: {
        value: cdktf.numberToHclTerraform(this._ethernetCfmAlarmConfigDelay),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ethernet_cfm_alarm_config_reset: {
        value: cdktf.numberToHclTerraform(this._ethernetCfmAlarmConfigReset),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      hostname: {
        value: cdktf.stringToHclTerraform(this._hostname),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      igmp_snooping_querier: {
        value: cdktf.booleanToHclTerraform(this._igmpSnoopingQuerier),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      igmp_snooping_querier_max_response_time: {
        value: cdktf.numberToHclTerraform(this._igmpSnoopingQuerierMaxResponseTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      igmp_snooping_querier_timer_expiry: {
        value: cdktf.numberToHclTerraform(this._igmpSnoopingQuerierTimerExpiry),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      igmp_snooping_querier_version: {
        value: cdktf.numberToHclTerraform(this._igmpSnoopingQuerierVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ip_bgp_community_new_format: {
        value: cdktf.booleanToHclTerraform(this._ipBgpCommunityNewFormat),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ip_cef_load_sharing_algorithm_include_ports_destination: {
        value: cdktf.booleanToHclTerraform(this._ipCefLoadSharingAlgorithmIncludePortsDestination),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ip_cef_load_sharing_algorithm_include_ports_source: {
        value: cdktf.booleanToHclTerraform(this._ipCefLoadSharingAlgorithmIncludePortsSource),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ip_default_gateway: {
        value: cdktf.stringToHclTerraform(this._ipDefaultGateway),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip_domain_list_names: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ipDomainListNames),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      ip_domain_list_vrf: {
        value: cdktf.stringToHclTerraform(this._ipDomainListVrf),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip_domain_list_vrf_domain: {
        value: cdktf.stringToHclTerraform(this._ipDomainListVrfDomain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip_domain_lookup: {
        value: cdktf.booleanToHclTerraform(this._ipDomainLookup),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ip_domain_lookup_nsap: {
        value: cdktf.booleanToHclTerraform(this._ipDomainLookupNsap),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ip_domain_lookup_recursive: {
        value: cdktf.booleanToHclTerraform(this._ipDomainLookupRecursive),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ip_domain_lookup_source_interface_five_gigabit_ethernet: {
        value: cdktf.stringToHclTerraform(this._ipDomainLookupSourceInterfaceFiveGigabitEthernet),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip_domain_lookup_source_interface_forty_gigabit_ethernet: {
        value: cdktf.stringToHclTerraform(this._ipDomainLookupSourceInterfaceFortyGigabitEthernet),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip_domain_lookup_source_interface_gigabit_ethernet: {
        value: cdktf.stringToHclTerraform(this._ipDomainLookupSourceInterfaceGigabitEthernet),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip_domain_lookup_source_interface_hundred_gigabit_ethernet: {
        value: cdktf.stringToHclTerraform(this._ipDomainLookupSourceInterfaceHundredGigabitEthernet),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip_domain_lookup_source_interface_loopback: {
        value: cdktf.numberToHclTerraform(this._ipDomainLookupSourceInterfaceLoopback),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ip_domain_lookup_source_interface_ten_gigabit_ethernet: {
        value: cdktf.stringToHclTerraform(this._ipDomainLookupSourceInterfaceTenGigabitEthernet),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip_domain_lookup_source_interface_twenty_five_gigabit_ethernet: {
        value: cdktf.stringToHclTerraform(this._ipDomainLookupSourceInterfaceTwentyFiveGigabitEthernet),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip_domain_lookup_source_interface_two_gigabit_ethernet: {
        value: cdktf.stringToHclTerraform(this._ipDomainLookupSourceInterfaceTwoGigabitEthernet),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip_domain_lookup_source_interface_vlan: {
        value: cdktf.numberToHclTerraform(this._ipDomainLookupSourceInterfaceVlan),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ip_domain_lookup_vrfs: {
        value: cdktf.listMapperHcl(systemIpDomainLookupVrfsToHclTerraform, false)(this._ipDomainLookupVrfs.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SystemIpDomainLookupVrfsList",
      },
      ip_domain_name: {
        value: cdktf.stringToHclTerraform(this._ipDomainName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip_forward_protocol_nd: {
        value: cdktf.booleanToHclTerraform(this._ipForwardProtocolNd),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ip_ftp_passive: {
        value: cdktf.booleanToHclTerraform(this._ipFtpPassive),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ip_hosts: {
        value: cdktf.listMapperHcl(systemIpHostsToHclTerraform, false)(this._ipHosts.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SystemIpHostsList",
      },
      ip_hosts_vrf: {
        value: cdktf.listMapperHcl(systemIpHostsVrfToHclTerraform, false)(this._ipHostsVrf.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SystemIpHostsVrfList",
      },
      ip_http_access_class: {
        value: cdktf.numberToHclTerraform(this._ipHttpAccessClass),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ip_http_active_session_modules: {
        value: cdktf.stringToHclTerraform(this._ipHttpActiveSessionModules),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip_http_authentication_aaa: {
        value: cdktf.booleanToHclTerraform(this._ipHttpAuthenticationAaa),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ip_http_authentication_aaa_command_authorization: {
        value: cdktf.listMapperHcl(systemIpHttpAuthenticationAaaCommandAuthorizationToHclTerraform, false)(this._ipHttpAuthenticationAaaCommandAuthorization.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SystemIpHttpAuthenticationAaaCommandAuthorizationList",
      },
      ip_http_authentication_aaa_exec_authorization: {
        value: cdktf.stringToHclTerraform(this._ipHttpAuthenticationAaaExecAuthorization),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip_http_authentication_aaa_login_authentication: {
        value: cdktf.stringToHclTerraform(this._ipHttpAuthenticationAaaLoginAuthentication),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip_http_authentication_local: {
        value: cdktf.booleanToHclTerraform(this._ipHttpAuthenticationLocal),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ip_http_client_secure_trustpoint: {
        value: cdktf.stringToHclTerraform(this._ipHttpClientSecureTrustpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip_http_client_source_interface: {
        value: cdktf.stringToHclTerraform(this._ipHttpClientSourceInterface),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip_http_max_connections: {
        value: cdktf.numberToHclTerraform(this._ipHttpMaxConnections),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ip_http_secure_active_session_modules: {
        value: cdktf.stringToHclTerraform(this._ipHttpSecureActiveSessionModules),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip_http_secure_server: {
        value: cdktf.booleanToHclTerraform(this._ipHttpSecureServer),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ip_http_secure_trustpoint: {
        value: cdktf.stringToHclTerraform(this._ipHttpSecureTrustpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip_http_server: {
        value: cdktf.booleanToHclTerraform(this._ipHttpServer),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ip_http_tls_version: {
        value: cdktf.stringToHclTerraform(this._ipHttpTlsVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip_multicast_route_limit: {
        value: cdktf.numberToHclTerraform(this._ipMulticastRouteLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ip_multicast_routing: {
        value: cdktf.booleanToHclTerraform(this._ipMulticastRouting),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ip_multicast_routing_distributed: {
        value: cdktf.booleanToHclTerraform(this._ipMulticastRoutingDistributed),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ip_name_servers: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ipNameServers),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      ip_name_servers_vrf: {
        value: cdktf.listMapperHcl(systemIpNameServersVrfToHclTerraform, false)(this._ipNameServersVrf.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SystemIpNameServersVrfList",
      },
      ip_nbar_classification_dns_classify_by_domain: {
        value: cdktf.booleanToHclTerraform(this._ipNbarClassificationDnsClassifyByDomain),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ip_radius_source_interface_five_gigabit_ethernet: {
        value: cdktf.stringToHclTerraform(this._ipRadiusSourceInterfaceFiveGigabitEthernet),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip_radius_source_interface_forty_gigabit_ethernet: {
        value: cdktf.stringToHclTerraform(this._ipRadiusSourceInterfaceFortyGigabitEthernet),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip_radius_source_interface_gigabit_ethernet: {
        value: cdktf.stringToHclTerraform(this._ipRadiusSourceInterfaceGigabitEthernet),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip_radius_source_interface_hundred_gigabit_ethernet: {
        value: cdktf.stringToHclTerraform(this._ipRadiusSourceInterfaceHundredGigabitEthernet),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip_radius_source_interface_loopback: {
        value: cdktf.numberToHclTerraform(this._ipRadiusSourceInterfaceLoopback),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ip_radius_source_interface_ten_gigabit_ethernet: {
        value: cdktf.stringToHclTerraform(this._ipRadiusSourceInterfaceTenGigabitEthernet),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip_radius_source_interface_twenty_five_gigabit_ethernet: {
        value: cdktf.stringToHclTerraform(this._ipRadiusSourceInterfaceTwentyFiveGigabitEthernet),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip_radius_source_interface_two_gigabit_ethernet: {
        value: cdktf.stringToHclTerraform(this._ipRadiusSourceInterfaceTwoGigabitEthernet),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip_radius_source_interface_vlan: {
        value: cdktf.numberToHclTerraform(this._ipRadiusSourceInterfaceVlan),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ip_radius_source_interface_vrf: {
        value: cdktf.stringToHclTerraform(this._ipRadiusSourceInterfaceVrf),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip_routing: {
        value: cdktf.booleanToHclTerraform(this._ipRouting),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ip_routing_protocol_purge_interface: {
        value: cdktf.booleanToHclTerraform(this._ipRoutingProtocolPurgeInterface),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ip_scp_server_enable: {
        value: cdktf.booleanToHclTerraform(this._ipScpServerEnable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ip_source_route: {
        value: cdktf.booleanToHclTerraform(this._ipSourceRoute),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ip_ssh_authentication_retries: {
        value: cdktf.numberToHclTerraform(this._ipSshAuthenticationRetries),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ip_ssh_bulk_mode: {
        value: cdktf.booleanToHclTerraform(this._ipSshBulkMode),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ip_ssh_bulk_mode_window_size: {
        value: cdktf.numberToHclTerraform(this._ipSshBulkModeWindowSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ip_ssh_source_interface_five_gigabit_ethernet: {
        value: cdktf.stringToHclTerraform(this._ipSshSourceInterfaceFiveGigabitEthernet),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip_ssh_source_interface_forty_gigabit_ethernet: {
        value: cdktf.stringToHclTerraform(this._ipSshSourceInterfaceFortyGigabitEthernet),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip_ssh_source_interface_gigabit_ethernet: {
        value: cdktf.stringToHclTerraform(this._ipSshSourceInterfaceGigabitEthernet),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip_ssh_source_interface_hundred_gigabit_ethernet: {
        value: cdktf.stringToHclTerraform(this._ipSshSourceInterfaceHundredGigabitEthernet),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip_ssh_source_interface_loopback: {
        value: cdktf.numberToHclTerraform(this._ipSshSourceInterfaceLoopback),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ip_ssh_source_interface_ten_gigabit_ethernet: {
        value: cdktf.stringToHclTerraform(this._ipSshSourceInterfaceTenGigabitEthernet),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip_ssh_source_interface_twenty_five_gigabit_ethernet: {
        value: cdktf.stringToHclTerraform(this._ipSshSourceInterfaceTwentyFiveGigabitEthernet),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip_ssh_source_interface_two_gigabit_ethernet: {
        value: cdktf.stringToHclTerraform(this._ipSshSourceInterfaceTwoGigabitEthernet),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip_ssh_source_interface_vlan: {
        value: cdktf.numberToHclTerraform(this._ipSshSourceInterfaceVlan),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ip_ssh_time_out: {
        value: cdktf.numberToHclTerraform(this._ipSshTimeOut),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ip_ssh_version: {
        value: cdktf.stringToHclTerraform(this._ipSshVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip_ssh_version_legacy: {
        value: cdktf.numberToHclTerraform(this._ipSshVersionLegacy),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ip_tacacs_source_interface_five_gigabit_ethernet: {
        value: cdktf.stringToHclTerraform(this._ipTacacsSourceInterfaceFiveGigabitEthernet),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip_tacacs_source_interface_forty_gigabit_ethernet: {
        value: cdktf.stringToHclTerraform(this._ipTacacsSourceInterfaceFortyGigabitEthernet),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip_tacacs_source_interface_gigabit_ethernet: {
        value: cdktf.stringToHclTerraform(this._ipTacacsSourceInterfaceGigabitEthernet),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip_tacacs_source_interface_hundred_gigabit_ethernet: {
        value: cdktf.stringToHclTerraform(this._ipTacacsSourceInterfaceHundredGigabitEthernet),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip_tacacs_source_interface_loopback: {
        value: cdktf.numberToHclTerraform(this._ipTacacsSourceInterfaceLoopback),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ip_tacacs_source_interface_ten_gigabit_ethernet: {
        value: cdktf.stringToHclTerraform(this._ipTacacsSourceInterfaceTenGigabitEthernet),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip_tacacs_source_interface_twenty_five_gigabit_ethernet: {
        value: cdktf.stringToHclTerraform(this._ipTacacsSourceInterfaceTwentyFiveGigabitEthernet),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip_tacacs_source_interface_two_gigabit_ethernet: {
        value: cdktf.stringToHclTerraform(this._ipTacacsSourceInterfaceTwoGigabitEthernet),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip_tacacs_source_interface_vlan: {
        value: cdktf.numberToHclTerraform(this._ipTacacsSourceInterfaceVlan),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ip_tacacs_source_interface_vrf: {
        value: cdktf.stringToHclTerraform(this._ipTacacsSourceInterfaceVrf),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip_tcp_mss: {
        value: cdktf.numberToHclTerraform(this._ipTcpMss),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ip_tcp_path_mtu_discovery: {
        value: cdktf.booleanToHclTerraform(this._ipTcpPathMtuDiscovery),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ip_tcp_window_size: {
        value: cdktf.numberToHclTerraform(this._ipTcpWindowSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ipv6_cef_load_sharing_algorithm_include_ports_destination: {
        value: cdktf.booleanToHclTerraform(this._ipv6CefLoadSharingAlgorithmIncludePortsDestination),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ipv6_cef_load_sharing_algorithm_include_ports_source: {
        value: cdktf.booleanToHclTerraform(this._ipv6CefLoadSharingAlgorithmIncludePortsSource),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ipv6_multicast_routing: {
        value: cdktf.booleanToHclTerraform(this._ipv6MulticastRouting),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ipv6_unicast_routing: {
        value: cdktf.booleanToHclTerraform(this._ipv6UnicastRouting),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      login_delay: {
        value: cdktf.numberToHclTerraform(this._loginDelay),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      login_on_failure: {
        value: cdktf.booleanToHclTerraform(this._loginOnFailure),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      login_on_failure_log: {
        value: cdktf.booleanToHclTerraform(this._loginOnFailureLog),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      login_on_success: {
        value: cdktf.booleanToHclTerraform(this._loginOnSuccess),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      login_on_success_log: {
        value: cdktf.booleanToHclTerraform(this._loginOnSuccessLog),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      memory_free_low_watermark_processor: {
        value: cdktf.numberToHclTerraform(this._memoryFreeLowWatermarkProcessor),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      mld_snooping: {
        value: cdktf.booleanToHclTerraform(this._mldSnooping),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      mld_snooping_querier: {
        value: cdktf.booleanToHclTerraform(this._mldSnoopingQuerier),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      mtu: {
        value: cdktf.numberToHclTerraform(this._mtu),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      multicast_routing_switch: {
        value: cdktf.booleanToHclTerraform(this._multicastRoutingSwitch),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      multicast_routing_vrfs: {
        value: cdktf.listMapperHcl(systemMulticastRoutingVrfsToHclTerraform, false)(this._multicastRoutingVrfs.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SystemMulticastRoutingVrfsList",
      },
      multilink_ppp_bundle_name: {
        value: cdktf.stringToHclTerraform(this._multilinkPppBundleName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pnp_profiles: {
        value: cdktf.listMapperHcl(systemPnpProfilesToHclTerraform, false)(this._pnpProfiles.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SystemPnpProfilesList",
      },
      port_channel_load_balance: {
        value: cdktf.stringToHclTerraform(this._portChannelLoadBalance),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      redundancy: {
        value: cdktf.booleanToHclTerraform(this._redundancy),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      redundancy_mode: {
        value: cdktf.stringToHclTerraform(this._redundancyMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      security_passwords_min_length: {
        value: cdktf.numberToHclTerraform(this._securityPasswordsMinLength),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      standby_redirects: {
        value: cdktf.booleanToHclTerraform(this._standbyRedirects),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      standby_redirects_enable_disable: {
        value: cdktf.stringToHclTerraform(this._standbyRedirectsEnableDisable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subscriber_templating: {
        value: cdktf.booleanToHclTerraform(this._subscriberTemplating),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      table_maps: {
        value: cdktf.listMapperHcl(systemTableMapsToHclTerraform, false)(this._tableMaps.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SystemTableMapsList",
      },
      tftp_source_interface_five_gigabit_ethernet: {
        value: cdktf.stringToHclTerraform(this._tftpSourceInterfaceFiveGigabitEthernet),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tftp_source_interface_forty_gigabit_ethernet: {
        value: cdktf.stringToHclTerraform(this._tftpSourceInterfaceFortyGigabitEthernet),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tftp_source_interface_gigabit_ethernet: {
        value: cdktf.stringToHclTerraform(this._tftpSourceInterfaceGigabitEthernet),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tftp_source_interface_hundred_gigabit_ethernet: {
        value: cdktf.stringToHclTerraform(this._tftpSourceInterfaceHundredGigabitEthernet),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tftp_source_interface_loopback: {
        value: cdktf.numberToHclTerraform(this._tftpSourceInterfaceLoopback),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tftp_source_interface_ten_gigabit_ethernet: {
        value: cdktf.stringToHclTerraform(this._tftpSourceInterfaceTenGigabitEthernet),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tftp_source_interface_twenty_five_gigabit_ethernet: {
        value: cdktf.stringToHclTerraform(this._tftpSourceInterfaceTwentyFiveGigabitEthernet),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tftp_source_interface_two_gigabit_ethernet: {
        value: cdktf.stringToHclTerraform(this._tftpSourceInterfaceTwoGigabitEthernet),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tftp_source_interface_vlan: {
        value: cdktf.numberToHclTerraform(this._tftpSourceInterfaceVlan),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      track_objects: {
        value: cdktf.listMapperHcl(systemTrackObjectsToHclTerraform, false)(this._trackObjects.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SystemTrackObjectsList",
      },
      transceiver_type_all_monitoring: {
        value: cdktf.booleanToHclTerraform(this._transceiverTypeAllMonitoring),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      version: {
        value: cdktf.stringToHclTerraform(this._version),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
