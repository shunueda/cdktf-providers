// https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/template
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TemplateConfig extends cdktf.TerraformMetaArguments {
  /**
  * Enable closed access on port (disabled by default, i.e. open access)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/template#access_session_closed Template#access_session_closed}
  */
  readonly accessSessionClosed?: boolean | cdktf.IResolvable;
  /**
  * Set the control-direction on the interface
  *   - Choices: `both`, `in`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/template#access_session_control_direction Template#access_session_control_direction}
  */
  readonly accessSessionControlDirection?: string;
  /**
  * Set the Host mode for authentication on this interface
  *   - Choices: `multi-auth`, `multi-domain`, `multi-host`, `single-host`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/template#access_session_host_mode Template#access_session_host_mode}
  */
  readonly accessSessionHostMode?: string;
  /**
  * Interface templates set to sticky
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/template#access_session_interface_template_sticky Template#access_session_interface_template_sticky}
  */
  readonly accessSessionInterfaceTemplateSticky?: boolean | cdktf.IResolvable;
  /**
  * Sticky timer value
  *   - Range: `1`-`65535`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/template#access_session_interface_template_sticky_timer Template#access_session_interface_template_sticky_timer}
  */
  readonly accessSessionInterfaceTemplateStickyTimer?: number;
  /**
  * Apply template to monitor access sessions on the port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/template#access_session_monitor Template#access_session_monitor}
  */
  readonly accessSessionMonitor?: boolean | cdktf.IResolvable;
  /**
  * Set the port-control value
  *   - Choices: `auto`, `force-authorized`, `force-unauthorized`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/template#access_session_port_control Template#access_session_port_control}
  */
  readonly accessSessionPortControl?: string;
  /**
  * Enable or Disable Reauthentication for this port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/template#authentication_periodic Template#authentication_periodic}
  */
  readonly authenticationPeriodic?: boolean | cdktf.IResolvable;
  /**
  * Enter a value between 1 and 1073741823
  *   - Range: `1`-`1073741823`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/template#authentication_timer_reauthenticate_range Template#authentication_timer_reauthenticate_range}
  */
  readonly authenticationTimerReauthenticateRange?: number;
  /**
  * Obtain re-authentication timeout value from the server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/template#authentication_timer_reauthenticate_server Template#authentication_timer_reauthenticate_server}
  */
  readonly authenticationTimerReauthenticateServer?: boolean | cdktf.IResolvable;
  /**
  * Supply local configuration for CTS parameters
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/template#cts_manual Template#cts_manual}
  */
  readonly ctsManual?: boolean | cdktf.IResolvable;
  /**
  * Source Security Group Tag to apply to untagged or non-trusted incoming traffic
  *   - Range: `2`-`65519`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/template#cts_manual_policy_static_sgt Template#cts_manual_policy_static_sgt}
  */
  readonly ctsManualPolicyStaticSgt?: number;
  /**
  * Trust the Source Group Tags (SGT) that the peer uses for sending
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/template#cts_manual_policy_static_trusted Template#cts_manual_policy_static_trusted}
  */
  readonly ctsManualPolicyStaticTrusted?: boolean | cdktf.IResolvable;
  /**
  * CTS SGT Propagation configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/template#cts_manual_propagate_sgt Template#cts_manual_propagate_sgt}
  */
  readonly ctsManualPropagateSgt?: boolean | cdktf.IResolvable;
  /**
  * Enable Role-based Access Control enforcement
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/template#cts_role_based_enforcement Template#cts_role_based_enforcement}
  */
  readonly ctsRoleBasedEnforcement?: boolean | cdktf.IResolvable;
  /**
  * Configure behavior when deleting/destroying the resource. Either delete the entire object (YANG container) being managed, or only delete the individual resource attributes configured explicitly and leave everything else as-is. Default value is `all`.
  *   - Choices: `all`, `attributes`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/template#delete_mode Template#delete_mode}
  */
  readonly deleteMode?: string;
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/template#device Template#device}
  */
  readonly device?: string;
  /**
  * Configure device-tracking on the interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/template#device_tracking Template#device_tracking}
  */
  readonly deviceTracking?: boolean | cdktf.IResolvable;
  /**
  * policy name for device tracking
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/template#device_tracking_attach_policy Template#device_tracking_attach_policy}
  */
  readonly deviceTrackingAttachPolicy?: TemplateDeviceTrackingAttachPolicy[] | cdktf.IResolvable;
  /**
  * VLAN IDs of the VLANs for which this policy applies
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/template#device_tracking_vlan_range Template#device_tracking_vlan_range}
  */
  readonly deviceTrackingVlanRange?: string;
  /**
  * Max No. of Reauthentication Attempts
  *   - Range: `1`-`10`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/template#dot1x_max_reauth_req Template#dot1x_max_reauth_req}
  */
  readonly dot1XMaxReauthReq?: number;
  /**
  * Max No. of Retries
  *   - Range: `1`-`10`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/template#dot1x_max_req Template#dot1x_max_req}
  */
  readonly dot1XMaxReq?: number;
  /**
  * Set 802.1x interface pae type
  *   - Choices: `authenticator`, `both`, `supplicant`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/template#dot1x_pae Template#dot1x_pae}
  */
  readonly dot1XPae?: string;
  /**
  * QuietPeriod in Seconds
  *   - Range: `1`-`65535`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/template#dot1x_timeout_quiet_period Template#dot1x_timeout_quiet_period}
  */
  readonly dot1XTimeoutQuietPeriod?: number;
  /**
  * Ratelimit Period in seconds
  *   - Range: `1`-`65535`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/template#dot1x_timeout_ratelimit_period Template#dot1x_timeout_ratelimit_period}
  */
  readonly dot1XTimeoutRatelimitPeriod?: number;
  /**
  * Timeout for Radius Retries
  *   - Range: `1`-`65535`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/template#dot1x_timeout_server_timeout Template#dot1x_timeout_server_timeout}
  */
  readonly dot1XTimeoutServerTimeout?: number;
  /**
  * Timeout for supplicant reply
  *   - Range: `1`-`65535`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/template#dot1x_timeout_supp_timeout Template#dot1x_timeout_supp_timeout}
  */
  readonly dot1XTimeoutSuppTimeout?: number;
  /**
  * Timeout for supplicant retries
  *   - Range: `1`-`65535`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/template#dot1x_timeout_tx_period Template#dot1x_timeout_tx_period}
  */
  readonly dot1XTimeoutTxPeriod?: number;
  /**
  * Access control list for IP packets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/template#ip_access_group Template#ip_access_group}
  */
  readonly ipAccessGroup?: TemplateIpAccessGroup[] | cdktf.IResolvable;
  /**
  * DHCP snooping rate limit
  *   - Range: `1`-`2048`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/template#ip_dhcp_snooping_limit_rate Template#ip_dhcp_snooping_limit_rate}
  */
  readonly ipDhcpSnoopingLimitRate?: number;
  /**
  * DHCP Snooping trust config
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/template#ip_dhcp_snooping_trust Template#ip_dhcp_snooping_trust}
  */
  readonly ipDhcpSnoopingTrust?: boolean | cdktf.IResolvable;
  /**
  * Load interval delay in seconds
  *   - Range: `30`-`600`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/template#load_interval Template#load_interval}
  */
  readonly loadInterval?: number;
  /**
  * MAC Authentication Bypass Interface Config Commands
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/template#mab Template#mab}
  */
  readonly mab?: boolean | cdktf.IResolvable;
  /**
  * Use EAP authentication for MAC Auth Bypass
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/template#mab_eap Template#mab_eap}
  */
  readonly mabEap?: boolean | cdktf.IResolvable;
  /**
  * policy-map name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/template#service_policy_input Template#service_policy_input}
  */
  readonly servicePolicyInput?: string;
  /**
  * policy-map name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/template#service_policy_output Template#service_policy_output}
  */
  readonly servicePolicyOutput?: string;
  /**
  * Apply a subscriber control policy to the interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/template#service_policy_type_control_subscriber Template#service_policy_type_control_subscriber}
  */
  readonly servicePolicyTypeControlSubscriber?: string;
  /**
  * Get config from a template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/template#source_template Template#source_template}
  */
  readonly sourceTemplate?: string;
  /**
  * Enable BPDU guard for this interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/template#spanning_tree_bpduguard_enable Template#spanning_tree_bpduguard_enable}
  */
  readonly spanningTreeBpduguardEnable?: boolean | cdktf.IResolvable;
  /**
  * Portfast options for the interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/template#spanning_tree_portfast Template#spanning_tree_portfast}
  */
  readonly spanningTreePortfast?: boolean | cdktf.IResolvable;
  /**
  * Disable portfast for this interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/template#spanning_tree_portfast_disable Template#spanning_tree_portfast_disable}
  */
  readonly spanningTreePortfastDisable?: boolean | cdktf.IResolvable;
  /**
  * Enable portfast edge on the interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/template#spanning_tree_portfast_edge Template#spanning_tree_portfast_edge}
  */
  readonly spanningTreePortfastEdge?: boolean | cdktf.IResolvable;
  /**
  * Enable portfast network on the interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/template#spanning_tree_portfast_network Template#spanning_tree_portfast_network}
  */
  readonly spanningTreePortfastNetwork?: boolean | cdktf.IResolvable;
  /**
  * help
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/template#spanning_tree_service_policy Template#spanning_tree_service_policy}
  */
  readonly spanningTreeServicePolicy?: boolean | cdktf.IResolvable;
  /**
  * Shutdown this interface if a storm occurs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/template#storm_control_action_shutdown Template#storm_control_action_shutdown}
  */
  readonly stormControlActionShutdown?: boolean | cdktf.IResolvable;
  /**
  * Send SNMP trap if a storm occurs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/template#storm_control_action_trap Template#storm_control_action_trap}
  */
  readonly stormControlActionTrap?: boolean | cdktf.IResolvable;
  /**
  * Enter threshold
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/template#storm_control_broadcast_level_bps_threshold Template#storm_control_broadcast_level_bps_threshold}
  */
  readonly stormControlBroadcastLevelBpsThreshold?: number;
  /**
  * Enter threshold
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/template#storm_control_broadcast_level_pps_threshold Template#storm_control_broadcast_level_pps_threshold}
  */
  readonly stormControlBroadcastLevelPpsThreshold?: string;
  /**
  * Enter threshold
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/template#storm_control_broadcast_level_threshold Template#storm_control_broadcast_level_threshold}
  */
  readonly stormControlBroadcastLevelThreshold?: number;
  /**
  * Enter threshold
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/template#storm_control_multicast_level_bps_threshold Template#storm_control_multicast_level_bps_threshold}
  */
  readonly stormControlMulticastLevelBpsThreshold?: number;
  /**
  * Enter threshold
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/template#storm_control_multicast_level_pps_threshold Template#storm_control_multicast_level_pps_threshold}
  */
  readonly stormControlMulticastLevelPpsThreshold?: string;
  /**
  * Enter threshold
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/template#storm_control_multicast_level_threshold Template#storm_control_multicast_level_threshold}
  */
  readonly stormControlMulticastLevelThreshold?: number;
  /**
  * ARP probe
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/template#subscriber_aging_inactivity_timer_probe Template#subscriber_aging_inactivity_timer_probe}
  */
  readonly subscriberAgingInactivityTimerProbe?: boolean | cdktf.IResolvable;
  /**
  * Enter a value between 1 and 65535 in seconds
  *   - Range: `1`-`65535`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/template#subscriber_aging_inactivity_timer_value Template#subscriber_aging_inactivity_timer_value}
  */
  readonly subscriberAgingInactivityTimerValue?: number;
  /**
  * ARP probe
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/template#subscriber_aging_probe Template#subscriber_aging_probe}
  */
  readonly subscriberAgingProbe?: boolean | cdktf.IResolvable;
  /**
  * VLAN ID of the VLAN when this port is in access mode
  *   - Range: `1`-`4094`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/template#switchport_access_vlan Template#switchport_access_vlan}
  */
  readonly switchportAccessVlan?: number;
  /**
  * Block unknown unicast addresses
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/template#switchport_block_unicast Template#switchport_block_unicast}
  */
  readonly switchportBlockUnicast?: boolean | cdktf.IResolvable;
  /**
  * Set trunking mode to ACCESS unconditionally
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/template#switchport_mode_access Template#switchport_mode_access}
  */
  readonly switchportModeAccess?: boolean | cdktf.IResolvable;
  /**
  * Set trunking mode to TRUNK unconditionally
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/template#switchport_mode_trunk Template#switchport_mode_trunk}
  */
  readonly switchportModeTrunk?: boolean | cdktf.IResolvable;
  /**
  * Device will not engage in negotiation protocol on this interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/template#switchport_nonegotiate Template#switchport_nonegotiate}
  */
  readonly switchportNonegotiate?: boolean | cdktf.IResolvable;
  /**
  * Security related command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/template#switchport_port_security Template#switchport_port_security}
  */
  readonly switchportPortSecurity?: boolean | cdktf.IResolvable;
  /**
  * Enable aging for configured secure addresses
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/template#switchport_port_security_aging_static Template#switchport_port_security_aging_static}
  */
  readonly switchportPortSecurityAgingStatic?: boolean | cdktf.IResolvable;
  /**
  * Port-security aging time
  *   - Range: `1`-`1440`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/template#switchport_port_security_aging_time Template#switchport_port_security_aging_time}
  */
  readonly switchportPortSecurityAgingTime?: number;
  /**
  * Port-security aging type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/template#switchport_port_security_aging_type Template#switchport_port_security_aging_type}
  */
  readonly switchportPortSecurityAgingType?: boolean | cdktf.IResolvable;
  /**
  * Aging based on inactivity time period
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/template#switchport_port_security_aging_type_inactivity Template#switchport_port_security_aging_type_inactivity}
  */
  readonly switchportPortSecurityAgingTypeInactivity?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/template#switchport_port_security_maximum_range Template#switchport_port_security_maximum_range}
  */
  readonly switchportPortSecurityMaximumRange?: TemplateSwitchportPortSecurityMaximumRange[] | cdktf.IResolvable;
  /**
  * Security violation protect mode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/template#switchport_port_security_violation_protect Template#switchport_port_security_violation_protect}
  */
  readonly switchportPortSecurityViolationProtect?: boolean | cdktf.IResolvable;
  /**
  * Security violation restrict mode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/template#switchport_port_security_violation_restrict Template#switchport_port_security_violation_restrict}
  */
  readonly switchportPortSecurityViolationRestrict?: boolean | cdktf.IResolvable;
  /**
  * Security violation shutdown mode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/template#switchport_port_security_violation_shutdown Template#switchport_port_security_violation_shutdown}
  */
  readonly switchportPortSecurityViolationShutdown?: boolean | cdktf.IResolvable;
  /**
  * Primary normal range VLAN ID of the private VLAN port association
  *   - Range: `2`-`1001`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/template#switchport_private_vlan_host_association_primary_range Template#switchport_private_vlan_host_association_primary_range}
  */
  readonly switchportPrivateVlanHostAssociationPrimaryRange?: number;
  /**
  * Secondary normal range VLAN ID of the private VLAN host port association
  *   - Range: `2`-`1001`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/template#switchport_private_vlan_host_association_secondary_range Template#switchport_private_vlan_host_association_secondary_range}
  */
  readonly switchportPrivateVlanHostAssociationSecondaryRange?: number;
  /**
  * VLAN IDs of the allowed VLANs when this port is in trunking mode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/template#switchport_trunk_allowed_vlans Template#switchport_trunk_allowed_vlans}
  */
  readonly switchportTrunkAllowedVlans?: string;
  /**
  * all VLANs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/template#switchport_trunk_allowed_vlans_all Template#switchport_trunk_allowed_vlans_all}
  */
  readonly switchportTrunkAllowedVlansAll?: boolean | cdktf.IResolvable;
  /**
  * no VLANs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/template#switchport_trunk_allowed_vlans_none Template#switchport_trunk_allowed_vlans_none}
  */
  readonly switchportTrunkAllowedVlansNone?: boolean | cdktf.IResolvable;
  /**
  * Set native VLAN tagging state
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/template#switchport_trunk_native_vlan_tag Template#switchport_trunk_native_vlan_tag}
  */
  readonly switchportTrunkNativeVlanTag?: boolean | cdktf.IResolvable;
  /**
  * VLAN ID of the native VLAN when this port is in trunking mode
  *   - Range: `1`-`4094`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/template#switchport_trunk_native_vlan_vlan_id Template#switchport_trunk_native_vlan_vlan_id}
  */
  readonly switchportTrunkNativeVlanVlanId?: number;
  /**
  * Vlan for voice traffic
  *   - Range: `1`-`4094`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/template#switchport_voice_vlan Template#switchport_voice_vlan}
  */
  readonly switchportVoiceVlan?: number;
  /**
  * Template name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/template#template_name Template#template_name}
  */
  readonly templateName: string;
}
export interface TemplateDeviceTrackingAttachPolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/template#policy_name Template#policy_name}
  */
  readonly policyName: string;
  /**
  * VLAN IDs of the VLANs for which this policy applies
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/template#vlan_range Template#vlan_range}
  */
  readonly vlanRange?: string;
}

export function templateDeviceTrackingAttachPolicyToTerraform(struct?: TemplateDeviceTrackingAttachPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    policy_name: cdktf.stringToTerraform(struct!.policyName),
    vlan_range: cdktf.stringToTerraform(struct!.vlanRange),
  }
}


export function templateDeviceTrackingAttachPolicyToHclTerraform(struct?: TemplateDeviceTrackingAttachPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    policy_name: {
      value: cdktf.stringToHclTerraform(struct!.policyName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vlan_range: {
      value: cdktf.stringToHclTerraform(struct!.vlanRange),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TemplateDeviceTrackingAttachPolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TemplateDeviceTrackingAttachPolicy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._policyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.policyName = this._policyName;
    }
    if (this._vlanRange !== undefined) {
      hasAnyValues = true;
      internalValueResult.vlanRange = this._vlanRange;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TemplateDeviceTrackingAttachPolicy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._policyName = undefined;
      this._vlanRange = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._policyName = value.policyName;
      this._vlanRange = value.vlanRange;
    }
  }

  // policy_name - computed: false, optional: false, required: true
  private _policyName?: string; 
  public get policyName() {
    return this.getStringAttribute('policy_name');
  }
  public set policyName(value: string) {
    this._policyName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyNameInput() {
    return this._policyName;
  }

  // vlan_range - computed: false, optional: true, required: false
  private _vlanRange?: string; 
  public get vlanRange() {
    return this.getStringAttribute('vlan_range');
  }
  public set vlanRange(value: string) {
    this._vlanRange = value;
  }
  public resetVlanRange() {
    this._vlanRange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanRangeInput() {
    return this._vlanRange;
  }
}

export class TemplateDeviceTrackingAttachPolicyList extends cdktf.ComplexList {
  public internalValue? : TemplateDeviceTrackingAttachPolicy[] | cdktf.IResolvable

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
  public get(index: number): TemplateDeviceTrackingAttachPolicyOutputReference {
    return new TemplateDeviceTrackingAttachPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TemplateIpAccessGroup {
  /**
  * Access control list name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/template#access_list Template#access_list}
  */
  readonly accessList?: string;
  /**
  * packet flow direction
  *   - Choices: `in`, `out`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/template#direction Template#direction}
  */
  readonly direction: string;
}

export function templateIpAccessGroupToTerraform(struct?: TemplateIpAccessGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_list: cdktf.stringToTerraform(struct!.accessList),
    direction: cdktf.stringToTerraform(struct!.direction),
  }
}


export function templateIpAccessGroupToHclTerraform(struct?: TemplateIpAccessGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_list: {
      value: cdktf.stringToHclTerraform(struct!.accessList),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    direction: {
      value: cdktf.stringToHclTerraform(struct!.direction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TemplateIpAccessGroupOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TemplateIpAccessGroup | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessList !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessList = this._accessList;
    }
    if (this._direction !== undefined) {
      hasAnyValues = true;
      internalValueResult.direction = this._direction;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TemplateIpAccessGroup | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessList = undefined;
      this._direction = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessList = value.accessList;
      this._direction = value.direction;
    }
  }

  // access_list - computed: false, optional: true, required: false
  private _accessList?: string; 
  public get accessList() {
    return this.getStringAttribute('access_list');
  }
  public set accessList(value: string) {
    this._accessList = value;
  }
  public resetAccessList() {
    this._accessList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessListInput() {
    return this._accessList;
  }

  // direction - computed: false, optional: false, required: true
  private _direction?: string; 
  public get direction() {
    return this.getStringAttribute('direction');
  }
  public set direction(value: string) {
    this._direction = value;
  }
  // Temporarily expose input value. Use with caution.
  public get directionInput() {
    return this._direction;
  }
}

export class TemplateIpAccessGroupList extends cdktf.ComplexList {
  public internalValue? : TemplateIpAccessGroup[] | cdktf.IResolvable

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
  public get(index: number): TemplateIpAccessGroupOutputReference {
    return new TemplateIpAccessGroupOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TemplateSwitchportPortSecurityMaximumRange {
  /**
  * Maximum addresses
  *   - Range: `1`-`3072`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/template#range Template#range}
  */
  readonly range: number;
  /**
  * Max secure addresses per vlan
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/template#vlan Template#vlan}
  */
  readonly vlan?: boolean | cdktf.IResolvable;
  /**
  * access vlan
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/template#vlan_access Template#vlan_access}
  */
  readonly vlanAccess?: boolean | cdktf.IResolvable;
}

export function templateSwitchportPortSecurityMaximumRangeToTerraform(struct?: TemplateSwitchportPortSecurityMaximumRange | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    range: cdktf.numberToTerraform(struct!.range),
    vlan: cdktf.booleanToTerraform(struct!.vlan),
    vlan_access: cdktf.booleanToTerraform(struct!.vlanAccess),
  }
}


export function templateSwitchportPortSecurityMaximumRangeToHclTerraform(struct?: TemplateSwitchportPortSecurityMaximumRange | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    range: {
      value: cdktf.numberToHclTerraform(struct!.range),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    vlan: {
      value: cdktf.booleanToHclTerraform(struct!.vlan),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    vlan_access: {
      value: cdktf.booleanToHclTerraform(struct!.vlanAccess),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TemplateSwitchportPortSecurityMaximumRangeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TemplateSwitchportPortSecurityMaximumRange | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._range !== undefined) {
      hasAnyValues = true;
      internalValueResult.range = this._range;
    }
    if (this._vlan !== undefined) {
      hasAnyValues = true;
      internalValueResult.vlan = this._vlan;
    }
    if (this._vlanAccess !== undefined) {
      hasAnyValues = true;
      internalValueResult.vlanAccess = this._vlanAccess;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TemplateSwitchportPortSecurityMaximumRange | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._range = undefined;
      this._vlan = undefined;
      this._vlanAccess = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._range = value.range;
      this._vlan = value.vlan;
      this._vlanAccess = value.vlanAccess;
    }
  }

  // range - computed: false, optional: false, required: true
  private _range?: number; 
  public get range() {
    return this.getNumberAttribute('range');
  }
  public set range(value: number) {
    this._range = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rangeInput() {
    return this._range;
  }

  // vlan - computed: false, optional: true, required: false
  private _vlan?: boolean | cdktf.IResolvable; 
  public get vlan() {
    return this.getBooleanAttribute('vlan');
  }
  public set vlan(value: boolean | cdktf.IResolvable) {
    this._vlan = value;
  }
  public resetVlan() {
    this._vlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanInput() {
    return this._vlan;
  }

  // vlan_access - computed: false, optional: true, required: false
  private _vlanAccess?: boolean | cdktf.IResolvable; 
  public get vlanAccess() {
    return this.getBooleanAttribute('vlan_access');
  }
  public set vlanAccess(value: boolean | cdktf.IResolvable) {
    this._vlanAccess = value;
  }
  public resetVlanAccess() {
    this._vlanAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanAccessInput() {
    return this._vlanAccess;
  }
}

export class TemplateSwitchportPortSecurityMaximumRangeList extends cdktf.ComplexList {
  public internalValue? : TemplateSwitchportPortSecurityMaximumRange[] | cdktf.IResolvable

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
  public get(index: number): TemplateSwitchportPortSecurityMaximumRangeOutputReference {
    return new TemplateSwitchportPortSecurityMaximumRangeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/template iosxe_template}
*/
export class Template extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "iosxe_template";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Template resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Template to import
  * @param importFromId The id of the existing Template that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/template#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Template to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "iosxe_template", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/template iosxe_template} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TemplateConfig
  */
  public constructor(scope: Construct, id: string, config: TemplateConfig) {
    super(scope, id, {
      terraformResourceType: 'iosxe_template',
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
    this._accessSessionClosed = config.accessSessionClosed;
    this._accessSessionControlDirection = config.accessSessionControlDirection;
    this._accessSessionHostMode = config.accessSessionHostMode;
    this._accessSessionInterfaceTemplateSticky = config.accessSessionInterfaceTemplateSticky;
    this._accessSessionInterfaceTemplateStickyTimer = config.accessSessionInterfaceTemplateStickyTimer;
    this._accessSessionMonitor = config.accessSessionMonitor;
    this._accessSessionPortControl = config.accessSessionPortControl;
    this._authenticationPeriodic = config.authenticationPeriodic;
    this._authenticationTimerReauthenticateRange = config.authenticationTimerReauthenticateRange;
    this._authenticationTimerReauthenticateServer = config.authenticationTimerReauthenticateServer;
    this._ctsManual = config.ctsManual;
    this._ctsManualPolicyStaticSgt = config.ctsManualPolicyStaticSgt;
    this._ctsManualPolicyStaticTrusted = config.ctsManualPolicyStaticTrusted;
    this._ctsManualPropagateSgt = config.ctsManualPropagateSgt;
    this._ctsRoleBasedEnforcement = config.ctsRoleBasedEnforcement;
    this._deleteMode = config.deleteMode;
    this._device = config.device;
    this._deviceTracking = config.deviceTracking;
    this._deviceTrackingAttachPolicy.internalValue = config.deviceTrackingAttachPolicy;
    this._deviceTrackingVlanRange = config.deviceTrackingVlanRange;
    this._dot1XMaxReauthReq = config.dot1XMaxReauthReq;
    this._dot1XMaxReq = config.dot1XMaxReq;
    this._dot1XPae = config.dot1XPae;
    this._dot1XTimeoutQuietPeriod = config.dot1XTimeoutQuietPeriod;
    this._dot1XTimeoutRatelimitPeriod = config.dot1XTimeoutRatelimitPeriod;
    this._dot1XTimeoutServerTimeout = config.dot1XTimeoutServerTimeout;
    this._dot1XTimeoutSuppTimeout = config.dot1XTimeoutSuppTimeout;
    this._dot1XTimeoutTxPeriod = config.dot1XTimeoutTxPeriod;
    this._ipAccessGroup.internalValue = config.ipAccessGroup;
    this._ipDhcpSnoopingLimitRate = config.ipDhcpSnoopingLimitRate;
    this._ipDhcpSnoopingTrust = config.ipDhcpSnoopingTrust;
    this._loadInterval = config.loadInterval;
    this._mab = config.mab;
    this._mabEap = config.mabEap;
    this._servicePolicyInput = config.servicePolicyInput;
    this._servicePolicyOutput = config.servicePolicyOutput;
    this._servicePolicyTypeControlSubscriber = config.servicePolicyTypeControlSubscriber;
    this._sourceTemplate = config.sourceTemplate;
    this._spanningTreeBpduguardEnable = config.spanningTreeBpduguardEnable;
    this._spanningTreePortfast = config.spanningTreePortfast;
    this._spanningTreePortfastDisable = config.spanningTreePortfastDisable;
    this._spanningTreePortfastEdge = config.spanningTreePortfastEdge;
    this._spanningTreePortfastNetwork = config.spanningTreePortfastNetwork;
    this._spanningTreeServicePolicy = config.spanningTreeServicePolicy;
    this._stormControlActionShutdown = config.stormControlActionShutdown;
    this._stormControlActionTrap = config.stormControlActionTrap;
    this._stormControlBroadcastLevelBpsThreshold = config.stormControlBroadcastLevelBpsThreshold;
    this._stormControlBroadcastLevelPpsThreshold = config.stormControlBroadcastLevelPpsThreshold;
    this._stormControlBroadcastLevelThreshold = config.stormControlBroadcastLevelThreshold;
    this._stormControlMulticastLevelBpsThreshold = config.stormControlMulticastLevelBpsThreshold;
    this._stormControlMulticastLevelPpsThreshold = config.stormControlMulticastLevelPpsThreshold;
    this._stormControlMulticastLevelThreshold = config.stormControlMulticastLevelThreshold;
    this._subscriberAgingInactivityTimerProbe = config.subscriberAgingInactivityTimerProbe;
    this._subscriberAgingInactivityTimerValue = config.subscriberAgingInactivityTimerValue;
    this._subscriberAgingProbe = config.subscriberAgingProbe;
    this._switchportAccessVlan = config.switchportAccessVlan;
    this._switchportBlockUnicast = config.switchportBlockUnicast;
    this._switchportModeAccess = config.switchportModeAccess;
    this._switchportModeTrunk = config.switchportModeTrunk;
    this._switchportNonegotiate = config.switchportNonegotiate;
    this._switchportPortSecurity = config.switchportPortSecurity;
    this._switchportPortSecurityAgingStatic = config.switchportPortSecurityAgingStatic;
    this._switchportPortSecurityAgingTime = config.switchportPortSecurityAgingTime;
    this._switchportPortSecurityAgingType = config.switchportPortSecurityAgingType;
    this._switchportPortSecurityAgingTypeInactivity = config.switchportPortSecurityAgingTypeInactivity;
    this._switchportPortSecurityMaximumRange.internalValue = config.switchportPortSecurityMaximumRange;
    this._switchportPortSecurityViolationProtect = config.switchportPortSecurityViolationProtect;
    this._switchportPortSecurityViolationRestrict = config.switchportPortSecurityViolationRestrict;
    this._switchportPortSecurityViolationShutdown = config.switchportPortSecurityViolationShutdown;
    this._switchportPrivateVlanHostAssociationPrimaryRange = config.switchportPrivateVlanHostAssociationPrimaryRange;
    this._switchportPrivateVlanHostAssociationSecondaryRange = config.switchportPrivateVlanHostAssociationSecondaryRange;
    this._switchportTrunkAllowedVlans = config.switchportTrunkAllowedVlans;
    this._switchportTrunkAllowedVlansAll = config.switchportTrunkAllowedVlansAll;
    this._switchportTrunkAllowedVlansNone = config.switchportTrunkAllowedVlansNone;
    this._switchportTrunkNativeVlanTag = config.switchportTrunkNativeVlanTag;
    this._switchportTrunkNativeVlanVlanId = config.switchportTrunkNativeVlanVlanId;
    this._switchportVoiceVlan = config.switchportVoiceVlan;
    this._templateName = config.templateName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_session_closed - computed: false, optional: true, required: false
  private _accessSessionClosed?: boolean | cdktf.IResolvable; 
  public get accessSessionClosed() {
    return this.getBooleanAttribute('access_session_closed');
  }
  public set accessSessionClosed(value: boolean | cdktf.IResolvable) {
    this._accessSessionClosed = value;
  }
  public resetAccessSessionClosed() {
    this._accessSessionClosed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessSessionClosedInput() {
    return this._accessSessionClosed;
  }

  // access_session_control_direction - computed: false, optional: true, required: false
  private _accessSessionControlDirection?: string; 
  public get accessSessionControlDirection() {
    return this.getStringAttribute('access_session_control_direction');
  }
  public set accessSessionControlDirection(value: string) {
    this._accessSessionControlDirection = value;
  }
  public resetAccessSessionControlDirection() {
    this._accessSessionControlDirection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessSessionControlDirectionInput() {
    return this._accessSessionControlDirection;
  }

  // access_session_host_mode - computed: false, optional: true, required: false
  private _accessSessionHostMode?: string; 
  public get accessSessionHostMode() {
    return this.getStringAttribute('access_session_host_mode');
  }
  public set accessSessionHostMode(value: string) {
    this._accessSessionHostMode = value;
  }
  public resetAccessSessionHostMode() {
    this._accessSessionHostMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessSessionHostModeInput() {
    return this._accessSessionHostMode;
  }

  // access_session_interface_template_sticky - computed: false, optional: true, required: false
  private _accessSessionInterfaceTemplateSticky?: boolean | cdktf.IResolvable; 
  public get accessSessionInterfaceTemplateSticky() {
    return this.getBooleanAttribute('access_session_interface_template_sticky');
  }
  public set accessSessionInterfaceTemplateSticky(value: boolean | cdktf.IResolvable) {
    this._accessSessionInterfaceTemplateSticky = value;
  }
  public resetAccessSessionInterfaceTemplateSticky() {
    this._accessSessionInterfaceTemplateSticky = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessSessionInterfaceTemplateStickyInput() {
    return this._accessSessionInterfaceTemplateSticky;
  }

  // access_session_interface_template_sticky_timer - computed: false, optional: true, required: false
  private _accessSessionInterfaceTemplateStickyTimer?: number; 
  public get accessSessionInterfaceTemplateStickyTimer() {
    return this.getNumberAttribute('access_session_interface_template_sticky_timer');
  }
  public set accessSessionInterfaceTemplateStickyTimer(value: number) {
    this._accessSessionInterfaceTemplateStickyTimer = value;
  }
  public resetAccessSessionInterfaceTemplateStickyTimer() {
    this._accessSessionInterfaceTemplateStickyTimer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessSessionInterfaceTemplateStickyTimerInput() {
    return this._accessSessionInterfaceTemplateStickyTimer;
  }

  // access_session_monitor - computed: false, optional: true, required: false
  private _accessSessionMonitor?: boolean | cdktf.IResolvable; 
  public get accessSessionMonitor() {
    return this.getBooleanAttribute('access_session_monitor');
  }
  public set accessSessionMonitor(value: boolean | cdktf.IResolvable) {
    this._accessSessionMonitor = value;
  }
  public resetAccessSessionMonitor() {
    this._accessSessionMonitor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessSessionMonitorInput() {
    return this._accessSessionMonitor;
  }

  // access_session_port_control - computed: false, optional: true, required: false
  private _accessSessionPortControl?: string; 
  public get accessSessionPortControl() {
    return this.getStringAttribute('access_session_port_control');
  }
  public set accessSessionPortControl(value: string) {
    this._accessSessionPortControl = value;
  }
  public resetAccessSessionPortControl() {
    this._accessSessionPortControl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessSessionPortControlInput() {
    return this._accessSessionPortControl;
  }

  // authentication_periodic - computed: false, optional: true, required: false
  private _authenticationPeriodic?: boolean | cdktf.IResolvable; 
  public get authenticationPeriodic() {
    return this.getBooleanAttribute('authentication_periodic');
  }
  public set authenticationPeriodic(value: boolean | cdktf.IResolvable) {
    this._authenticationPeriodic = value;
  }
  public resetAuthenticationPeriodic() {
    this._authenticationPeriodic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationPeriodicInput() {
    return this._authenticationPeriodic;
  }

  // authentication_timer_reauthenticate_range - computed: false, optional: true, required: false
  private _authenticationTimerReauthenticateRange?: number; 
  public get authenticationTimerReauthenticateRange() {
    return this.getNumberAttribute('authentication_timer_reauthenticate_range');
  }
  public set authenticationTimerReauthenticateRange(value: number) {
    this._authenticationTimerReauthenticateRange = value;
  }
  public resetAuthenticationTimerReauthenticateRange() {
    this._authenticationTimerReauthenticateRange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationTimerReauthenticateRangeInput() {
    return this._authenticationTimerReauthenticateRange;
  }

  // authentication_timer_reauthenticate_server - computed: false, optional: true, required: false
  private _authenticationTimerReauthenticateServer?: boolean | cdktf.IResolvable; 
  public get authenticationTimerReauthenticateServer() {
    return this.getBooleanAttribute('authentication_timer_reauthenticate_server');
  }
  public set authenticationTimerReauthenticateServer(value: boolean | cdktf.IResolvable) {
    this._authenticationTimerReauthenticateServer = value;
  }
  public resetAuthenticationTimerReauthenticateServer() {
    this._authenticationTimerReauthenticateServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationTimerReauthenticateServerInput() {
    return this._authenticationTimerReauthenticateServer;
  }

  // cts_manual - computed: false, optional: true, required: false
  private _ctsManual?: boolean | cdktf.IResolvable; 
  public get ctsManual() {
    return this.getBooleanAttribute('cts_manual');
  }
  public set ctsManual(value: boolean | cdktf.IResolvable) {
    this._ctsManual = value;
  }
  public resetCtsManual() {
    this._ctsManual = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ctsManualInput() {
    return this._ctsManual;
  }

  // cts_manual_policy_static_sgt - computed: false, optional: true, required: false
  private _ctsManualPolicyStaticSgt?: number; 
  public get ctsManualPolicyStaticSgt() {
    return this.getNumberAttribute('cts_manual_policy_static_sgt');
  }
  public set ctsManualPolicyStaticSgt(value: number) {
    this._ctsManualPolicyStaticSgt = value;
  }
  public resetCtsManualPolicyStaticSgt() {
    this._ctsManualPolicyStaticSgt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ctsManualPolicyStaticSgtInput() {
    return this._ctsManualPolicyStaticSgt;
  }

  // cts_manual_policy_static_trusted - computed: false, optional: true, required: false
  private _ctsManualPolicyStaticTrusted?: boolean | cdktf.IResolvable; 
  public get ctsManualPolicyStaticTrusted() {
    return this.getBooleanAttribute('cts_manual_policy_static_trusted');
  }
  public set ctsManualPolicyStaticTrusted(value: boolean | cdktf.IResolvable) {
    this._ctsManualPolicyStaticTrusted = value;
  }
  public resetCtsManualPolicyStaticTrusted() {
    this._ctsManualPolicyStaticTrusted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ctsManualPolicyStaticTrustedInput() {
    return this._ctsManualPolicyStaticTrusted;
  }

  // cts_manual_propagate_sgt - computed: false, optional: true, required: false
  private _ctsManualPropagateSgt?: boolean | cdktf.IResolvable; 
  public get ctsManualPropagateSgt() {
    return this.getBooleanAttribute('cts_manual_propagate_sgt');
  }
  public set ctsManualPropagateSgt(value: boolean | cdktf.IResolvable) {
    this._ctsManualPropagateSgt = value;
  }
  public resetCtsManualPropagateSgt() {
    this._ctsManualPropagateSgt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ctsManualPropagateSgtInput() {
    return this._ctsManualPropagateSgt;
  }

  // cts_role_based_enforcement - computed: false, optional: true, required: false
  private _ctsRoleBasedEnforcement?: boolean | cdktf.IResolvable; 
  public get ctsRoleBasedEnforcement() {
    return this.getBooleanAttribute('cts_role_based_enforcement');
  }
  public set ctsRoleBasedEnforcement(value: boolean | cdktf.IResolvable) {
    this._ctsRoleBasedEnforcement = value;
  }
  public resetCtsRoleBasedEnforcement() {
    this._ctsRoleBasedEnforcement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ctsRoleBasedEnforcementInput() {
    return this._ctsRoleBasedEnforcement;
  }

  // delete_mode - computed: false, optional: true, required: false
  private _deleteMode?: string; 
  public get deleteMode() {
    return this.getStringAttribute('delete_mode');
  }
  public set deleteMode(value: string) {
    this._deleteMode = value;
  }
  public resetDeleteMode() {
    this._deleteMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteModeInput() {
    return this._deleteMode;
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

  // device_tracking - computed: false, optional: true, required: false
  private _deviceTracking?: boolean | cdktf.IResolvable; 
  public get deviceTracking() {
    return this.getBooleanAttribute('device_tracking');
  }
  public set deviceTracking(value: boolean | cdktf.IResolvable) {
    this._deviceTracking = value;
  }
  public resetDeviceTracking() {
    this._deviceTracking = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceTrackingInput() {
    return this._deviceTracking;
  }

  // device_tracking_attach_policy - computed: false, optional: true, required: false
  private _deviceTrackingAttachPolicy = new TemplateDeviceTrackingAttachPolicyList(this, "device_tracking_attach_policy", false);
  public get deviceTrackingAttachPolicy() {
    return this._deviceTrackingAttachPolicy;
  }
  public putDeviceTrackingAttachPolicy(value: TemplateDeviceTrackingAttachPolicy[] | cdktf.IResolvable) {
    this._deviceTrackingAttachPolicy.internalValue = value;
  }
  public resetDeviceTrackingAttachPolicy() {
    this._deviceTrackingAttachPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceTrackingAttachPolicyInput() {
    return this._deviceTrackingAttachPolicy.internalValue;
  }

  // device_tracking_vlan_range - computed: false, optional: true, required: false
  private _deviceTrackingVlanRange?: string; 
  public get deviceTrackingVlanRange() {
    return this.getStringAttribute('device_tracking_vlan_range');
  }
  public set deviceTrackingVlanRange(value: string) {
    this._deviceTrackingVlanRange = value;
  }
  public resetDeviceTrackingVlanRange() {
    this._deviceTrackingVlanRange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceTrackingVlanRangeInput() {
    return this._deviceTrackingVlanRange;
  }

  // dot1x_max_reauth_req - computed: false, optional: true, required: false
  private _dot1XMaxReauthReq?: number; 
  public get dot1XMaxReauthReq() {
    return this.getNumberAttribute('dot1x_max_reauth_req');
  }
  public set dot1XMaxReauthReq(value: number) {
    this._dot1XMaxReauthReq = value;
  }
  public resetDot1XMaxReauthReq() {
    this._dot1XMaxReauthReq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dot1XMaxReauthReqInput() {
    return this._dot1XMaxReauthReq;
  }

  // dot1x_max_req - computed: false, optional: true, required: false
  private _dot1XMaxReq?: number; 
  public get dot1XMaxReq() {
    return this.getNumberAttribute('dot1x_max_req');
  }
  public set dot1XMaxReq(value: number) {
    this._dot1XMaxReq = value;
  }
  public resetDot1XMaxReq() {
    this._dot1XMaxReq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dot1XMaxReqInput() {
    return this._dot1XMaxReq;
  }

  // dot1x_pae - computed: false, optional: true, required: false
  private _dot1XPae?: string; 
  public get dot1XPae() {
    return this.getStringAttribute('dot1x_pae');
  }
  public set dot1XPae(value: string) {
    this._dot1XPae = value;
  }
  public resetDot1XPae() {
    this._dot1XPae = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dot1XPaeInput() {
    return this._dot1XPae;
  }

  // dot1x_timeout_quiet_period - computed: false, optional: true, required: false
  private _dot1XTimeoutQuietPeriod?: number; 
  public get dot1XTimeoutQuietPeriod() {
    return this.getNumberAttribute('dot1x_timeout_quiet_period');
  }
  public set dot1XTimeoutQuietPeriod(value: number) {
    this._dot1XTimeoutQuietPeriod = value;
  }
  public resetDot1XTimeoutQuietPeriod() {
    this._dot1XTimeoutQuietPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dot1XTimeoutQuietPeriodInput() {
    return this._dot1XTimeoutQuietPeriod;
  }

  // dot1x_timeout_ratelimit_period - computed: false, optional: true, required: false
  private _dot1XTimeoutRatelimitPeriod?: number; 
  public get dot1XTimeoutRatelimitPeriod() {
    return this.getNumberAttribute('dot1x_timeout_ratelimit_period');
  }
  public set dot1XTimeoutRatelimitPeriod(value: number) {
    this._dot1XTimeoutRatelimitPeriod = value;
  }
  public resetDot1XTimeoutRatelimitPeriod() {
    this._dot1XTimeoutRatelimitPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dot1XTimeoutRatelimitPeriodInput() {
    return this._dot1XTimeoutRatelimitPeriod;
  }

  // dot1x_timeout_server_timeout - computed: false, optional: true, required: false
  private _dot1XTimeoutServerTimeout?: number; 
  public get dot1XTimeoutServerTimeout() {
    return this.getNumberAttribute('dot1x_timeout_server_timeout');
  }
  public set dot1XTimeoutServerTimeout(value: number) {
    this._dot1XTimeoutServerTimeout = value;
  }
  public resetDot1XTimeoutServerTimeout() {
    this._dot1XTimeoutServerTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dot1XTimeoutServerTimeoutInput() {
    return this._dot1XTimeoutServerTimeout;
  }

  // dot1x_timeout_supp_timeout - computed: false, optional: true, required: false
  private _dot1XTimeoutSuppTimeout?: number; 
  public get dot1XTimeoutSuppTimeout() {
    return this.getNumberAttribute('dot1x_timeout_supp_timeout');
  }
  public set dot1XTimeoutSuppTimeout(value: number) {
    this._dot1XTimeoutSuppTimeout = value;
  }
  public resetDot1XTimeoutSuppTimeout() {
    this._dot1XTimeoutSuppTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dot1XTimeoutSuppTimeoutInput() {
    return this._dot1XTimeoutSuppTimeout;
  }

  // dot1x_timeout_tx_period - computed: false, optional: true, required: false
  private _dot1XTimeoutTxPeriod?: number; 
  public get dot1XTimeoutTxPeriod() {
    return this.getNumberAttribute('dot1x_timeout_tx_period');
  }
  public set dot1XTimeoutTxPeriod(value: number) {
    this._dot1XTimeoutTxPeriod = value;
  }
  public resetDot1XTimeoutTxPeriod() {
    this._dot1XTimeoutTxPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dot1XTimeoutTxPeriodInput() {
    return this._dot1XTimeoutTxPeriod;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ip_access_group - computed: false, optional: true, required: false
  private _ipAccessGroup = new TemplateIpAccessGroupList(this, "ip_access_group", false);
  public get ipAccessGroup() {
    return this._ipAccessGroup;
  }
  public putIpAccessGroup(value: TemplateIpAccessGroup[] | cdktf.IResolvable) {
    this._ipAccessGroup.internalValue = value;
  }
  public resetIpAccessGroup() {
    this._ipAccessGroup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAccessGroupInput() {
    return this._ipAccessGroup.internalValue;
  }

  // ip_dhcp_snooping_limit_rate - computed: false, optional: true, required: false
  private _ipDhcpSnoopingLimitRate?: number; 
  public get ipDhcpSnoopingLimitRate() {
    return this.getNumberAttribute('ip_dhcp_snooping_limit_rate');
  }
  public set ipDhcpSnoopingLimitRate(value: number) {
    this._ipDhcpSnoopingLimitRate = value;
  }
  public resetIpDhcpSnoopingLimitRate() {
    this._ipDhcpSnoopingLimitRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipDhcpSnoopingLimitRateInput() {
    return this._ipDhcpSnoopingLimitRate;
  }

  // ip_dhcp_snooping_trust - computed: false, optional: true, required: false
  private _ipDhcpSnoopingTrust?: boolean | cdktf.IResolvable; 
  public get ipDhcpSnoopingTrust() {
    return this.getBooleanAttribute('ip_dhcp_snooping_trust');
  }
  public set ipDhcpSnoopingTrust(value: boolean | cdktf.IResolvable) {
    this._ipDhcpSnoopingTrust = value;
  }
  public resetIpDhcpSnoopingTrust() {
    this._ipDhcpSnoopingTrust = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipDhcpSnoopingTrustInput() {
    return this._ipDhcpSnoopingTrust;
  }

  // load_interval - computed: false, optional: true, required: false
  private _loadInterval?: number; 
  public get loadInterval() {
    return this.getNumberAttribute('load_interval');
  }
  public set loadInterval(value: number) {
    this._loadInterval = value;
  }
  public resetLoadInterval() {
    this._loadInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadIntervalInput() {
    return this._loadInterval;
  }

  // mab - computed: false, optional: true, required: false
  private _mab?: boolean | cdktf.IResolvable; 
  public get mab() {
    return this.getBooleanAttribute('mab');
  }
  public set mab(value: boolean | cdktf.IResolvable) {
    this._mab = value;
  }
  public resetMab() {
    this._mab = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mabInput() {
    return this._mab;
  }

  // mab_eap - computed: false, optional: true, required: false
  private _mabEap?: boolean | cdktf.IResolvable; 
  public get mabEap() {
    return this.getBooleanAttribute('mab_eap');
  }
  public set mabEap(value: boolean | cdktf.IResolvable) {
    this._mabEap = value;
  }
  public resetMabEap() {
    this._mabEap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mabEapInput() {
    return this._mabEap;
  }

  // service_policy_input - computed: false, optional: true, required: false
  private _servicePolicyInput?: string; 
  public get servicePolicyInput() {
    return this.getStringAttribute('service_policy_input');
  }
  public set servicePolicyInput(value: string) {
    this._servicePolicyInput = value;
  }
  public resetServicePolicyInput() {
    this._servicePolicyInput = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servicePolicyInputInput() {
    return this._servicePolicyInput;
  }

  // service_policy_output - computed: false, optional: true, required: false
  private _servicePolicyOutput?: string; 
  public get servicePolicyOutput() {
    return this.getStringAttribute('service_policy_output');
  }
  public set servicePolicyOutput(value: string) {
    this._servicePolicyOutput = value;
  }
  public resetServicePolicyOutput() {
    this._servicePolicyOutput = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servicePolicyOutputInput() {
    return this._servicePolicyOutput;
  }

  // service_policy_type_control_subscriber - computed: false, optional: true, required: false
  private _servicePolicyTypeControlSubscriber?: string; 
  public get servicePolicyTypeControlSubscriber() {
    return this.getStringAttribute('service_policy_type_control_subscriber');
  }
  public set servicePolicyTypeControlSubscriber(value: string) {
    this._servicePolicyTypeControlSubscriber = value;
  }
  public resetServicePolicyTypeControlSubscriber() {
    this._servicePolicyTypeControlSubscriber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servicePolicyTypeControlSubscriberInput() {
    return this._servicePolicyTypeControlSubscriber;
  }

  // source_template - computed: false, optional: true, required: false
  private _sourceTemplate?: string; 
  public get sourceTemplate() {
    return this.getStringAttribute('source_template');
  }
  public set sourceTemplate(value: string) {
    this._sourceTemplate = value;
  }
  public resetSourceTemplate() {
    this._sourceTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceTemplateInput() {
    return this._sourceTemplate;
  }

  // spanning_tree_bpduguard_enable - computed: false, optional: true, required: false
  private _spanningTreeBpduguardEnable?: boolean | cdktf.IResolvable; 
  public get spanningTreeBpduguardEnable() {
    return this.getBooleanAttribute('spanning_tree_bpduguard_enable');
  }
  public set spanningTreeBpduguardEnable(value: boolean | cdktf.IResolvable) {
    this._spanningTreeBpduguardEnable = value;
  }
  public resetSpanningTreeBpduguardEnable() {
    this._spanningTreeBpduguardEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spanningTreeBpduguardEnableInput() {
    return this._spanningTreeBpduguardEnable;
  }

  // spanning_tree_portfast - computed: false, optional: true, required: false
  private _spanningTreePortfast?: boolean | cdktf.IResolvable; 
  public get spanningTreePortfast() {
    return this.getBooleanAttribute('spanning_tree_portfast');
  }
  public set spanningTreePortfast(value: boolean | cdktf.IResolvable) {
    this._spanningTreePortfast = value;
  }
  public resetSpanningTreePortfast() {
    this._spanningTreePortfast = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spanningTreePortfastInput() {
    return this._spanningTreePortfast;
  }

  // spanning_tree_portfast_disable - computed: false, optional: true, required: false
  private _spanningTreePortfastDisable?: boolean | cdktf.IResolvable; 
  public get spanningTreePortfastDisable() {
    return this.getBooleanAttribute('spanning_tree_portfast_disable');
  }
  public set spanningTreePortfastDisable(value: boolean | cdktf.IResolvable) {
    this._spanningTreePortfastDisable = value;
  }
  public resetSpanningTreePortfastDisable() {
    this._spanningTreePortfastDisable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spanningTreePortfastDisableInput() {
    return this._spanningTreePortfastDisable;
  }

  // spanning_tree_portfast_edge - computed: false, optional: true, required: false
  private _spanningTreePortfastEdge?: boolean | cdktf.IResolvable; 
  public get spanningTreePortfastEdge() {
    return this.getBooleanAttribute('spanning_tree_portfast_edge');
  }
  public set spanningTreePortfastEdge(value: boolean | cdktf.IResolvable) {
    this._spanningTreePortfastEdge = value;
  }
  public resetSpanningTreePortfastEdge() {
    this._spanningTreePortfastEdge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spanningTreePortfastEdgeInput() {
    return this._spanningTreePortfastEdge;
  }

  // spanning_tree_portfast_network - computed: false, optional: true, required: false
  private _spanningTreePortfastNetwork?: boolean | cdktf.IResolvable; 
  public get spanningTreePortfastNetwork() {
    return this.getBooleanAttribute('spanning_tree_portfast_network');
  }
  public set spanningTreePortfastNetwork(value: boolean | cdktf.IResolvable) {
    this._spanningTreePortfastNetwork = value;
  }
  public resetSpanningTreePortfastNetwork() {
    this._spanningTreePortfastNetwork = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spanningTreePortfastNetworkInput() {
    return this._spanningTreePortfastNetwork;
  }

  // spanning_tree_service_policy - computed: false, optional: true, required: false
  private _spanningTreeServicePolicy?: boolean | cdktf.IResolvable; 
  public get spanningTreeServicePolicy() {
    return this.getBooleanAttribute('spanning_tree_service_policy');
  }
  public set spanningTreeServicePolicy(value: boolean | cdktf.IResolvable) {
    this._spanningTreeServicePolicy = value;
  }
  public resetSpanningTreeServicePolicy() {
    this._spanningTreeServicePolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spanningTreeServicePolicyInput() {
    return this._spanningTreeServicePolicy;
  }

  // storm_control_action_shutdown - computed: false, optional: true, required: false
  private _stormControlActionShutdown?: boolean | cdktf.IResolvable; 
  public get stormControlActionShutdown() {
    return this.getBooleanAttribute('storm_control_action_shutdown');
  }
  public set stormControlActionShutdown(value: boolean | cdktf.IResolvable) {
    this._stormControlActionShutdown = value;
  }
  public resetStormControlActionShutdown() {
    this._stormControlActionShutdown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stormControlActionShutdownInput() {
    return this._stormControlActionShutdown;
  }

  // storm_control_action_trap - computed: false, optional: true, required: false
  private _stormControlActionTrap?: boolean | cdktf.IResolvable; 
  public get stormControlActionTrap() {
    return this.getBooleanAttribute('storm_control_action_trap');
  }
  public set stormControlActionTrap(value: boolean | cdktf.IResolvable) {
    this._stormControlActionTrap = value;
  }
  public resetStormControlActionTrap() {
    this._stormControlActionTrap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stormControlActionTrapInput() {
    return this._stormControlActionTrap;
  }

  // storm_control_broadcast_level_bps_threshold - computed: false, optional: true, required: false
  private _stormControlBroadcastLevelBpsThreshold?: number; 
  public get stormControlBroadcastLevelBpsThreshold() {
    return this.getNumberAttribute('storm_control_broadcast_level_bps_threshold');
  }
  public set stormControlBroadcastLevelBpsThreshold(value: number) {
    this._stormControlBroadcastLevelBpsThreshold = value;
  }
  public resetStormControlBroadcastLevelBpsThreshold() {
    this._stormControlBroadcastLevelBpsThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stormControlBroadcastLevelBpsThresholdInput() {
    return this._stormControlBroadcastLevelBpsThreshold;
  }

  // storm_control_broadcast_level_pps_threshold - computed: false, optional: true, required: false
  private _stormControlBroadcastLevelPpsThreshold?: string; 
  public get stormControlBroadcastLevelPpsThreshold() {
    return this.getStringAttribute('storm_control_broadcast_level_pps_threshold');
  }
  public set stormControlBroadcastLevelPpsThreshold(value: string) {
    this._stormControlBroadcastLevelPpsThreshold = value;
  }
  public resetStormControlBroadcastLevelPpsThreshold() {
    this._stormControlBroadcastLevelPpsThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stormControlBroadcastLevelPpsThresholdInput() {
    return this._stormControlBroadcastLevelPpsThreshold;
  }

  // storm_control_broadcast_level_threshold - computed: false, optional: true, required: false
  private _stormControlBroadcastLevelThreshold?: number; 
  public get stormControlBroadcastLevelThreshold() {
    return this.getNumberAttribute('storm_control_broadcast_level_threshold');
  }
  public set stormControlBroadcastLevelThreshold(value: number) {
    this._stormControlBroadcastLevelThreshold = value;
  }
  public resetStormControlBroadcastLevelThreshold() {
    this._stormControlBroadcastLevelThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stormControlBroadcastLevelThresholdInput() {
    return this._stormControlBroadcastLevelThreshold;
  }

  // storm_control_multicast_level_bps_threshold - computed: false, optional: true, required: false
  private _stormControlMulticastLevelBpsThreshold?: number; 
  public get stormControlMulticastLevelBpsThreshold() {
    return this.getNumberAttribute('storm_control_multicast_level_bps_threshold');
  }
  public set stormControlMulticastLevelBpsThreshold(value: number) {
    this._stormControlMulticastLevelBpsThreshold = value;
  }
  public resetStormControlMulticastLevelBpsThreshold() {
    this._stormControlMulticastLevelBpsThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stormControlMulticastLevelBpsThresholdInput() {
    return this._stormControlMulticastLevelBpsThreshold;
  }

  // storm_control_multicast_level_pps_threshold - computed: false, optional: true, required: false
  private _stormControlMulticastLevelPpsThreshold?: string; 
  public get stormControlMulticastLevelPpsThreshold() {
    return this.getStringAttribute('storm_control_multicast_level_pps_threshold');
  }
  public set stormControlMulticastLevelPpsThreshold(value: string) {
    this._stormControlMulticastLevelPpsThreshold = value;
  }
  public resetStormControlMulticastLevelPpsThreshold() {
    this._stormControlMulticastLevelPpsThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stormControlMulticastLevelPpsThresholdInput() {
    return this._stormControlMulticastLevelPpsThreshold;
  }

  // storm_control_multicast_level_threshold - computed: false, optional: true, required: false
  private _stormControlMulticastLevelThreshold?: number; 
  public get stormControlMulticastLevelThreshold() {
    return this.getNumberAttribute('storm_control_multicast_level_threshold');
  }
  public set stormControlMulticastLevelThreshold(value: number) {
    this._stormControlMulticastLevelThreshold = value;
  }
  public resetStormControlMulticastLevelThreshold() {
    this._stormControlMulticastLevelThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stormControlMulticastLevelThresholdInput() {
    return this._stormControlMulticastLevelThreshold;
  }

  // subscriber_aging_inactivity_timer_probe - computed: false, optional: true, required: false
  private _subscriberAgingInactivityTimerProbe?: boolean | cdktf.IResolvable; 
  public get subscriberAgingInactivityTimerProbe() {
    return this.getBooleanAttribute('subscriber_aging_inactivity_timer_probe');
  }
  public set subscriberAgingInactivityTimerProbe(value: boolean | cdktf.IResolvable) {
    this._subscriberAgingInactivityTimerProbe = value;
  }
  public resetSubscriberAgingInactivityTimerProbe() {
    this._subscriberAgingInactivityTimerProbe = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subscriberAgingInactivityTimerProbeInput() {
    return this._subscriberAgingInactivityTimerProbe;
  }

  // subscriber_aging_inactivity_timer_value - computed: false, optional: true, required: false
  private _subscriberAgingInactivityTimerValue?: number; 
  public get subscriberAgingInactivityTimerValue() {
    return this.getNumberAttribute('subscriber_aging_inactivity_timer_value');
  }
  public set subscriberAgingInactivityTimerValue(value: number) {
    this._subscriberAgingInactivityTimerValue = value;
  }
  public resetSubscriberAgingInactivityTimerValue() {
    this._subscriberAgingInactivityTimerValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subscriberAgingInactivityTimerValueInput() {
    return this._subscriberAgingInactivityTimerValue;
  }

  // subscriber_aging_probe - computed: false, optional: true, required: false
  private _subscriberAgingProbe?: boolean | cdktf.IResolvable; 
  public get subscriberAgingProbe() {
    return this.getBooleanAttribute('subscriber_aging_probe');
  }
  public set subscriberAgingProbe(value: boolean | cdktf.IResolvable) {
    this._subscriberAgingProbe = value;
  }
  public resetSubscriberAgingProbe() {
    this._subscriberAgingProbe = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subscriberAgingProbeInput() {
    return this._subscriberAgingProbe;
  }

  // switchport_access_vlan - computed: false, optional: true, required: false
  private _switchportAccessVlan?: number; 
  public get switchportAccessVlan() {
    return this.getNumberAttribute('switchport_access_vlan');
  }
  public set switchportAccessVlan(value: number) {
    this._switchportAccessVlan = value;
  }
  public resetSwitchportAccessVlan() {
    this._switchportAccessVlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get switchportAccessVlanInput() {
    return this._switchportAccessVlan;
  }

  // switchport_block_unicast - computed: false, optional: true, required: false
  private _switchportBlockUnicast?: boolean | cdktf.IResolvable; 
  public get switchportBlockUnicast() {
    return this.getBooleanAttribute('switchport_block_unicast');
  }
  public set switchportBlockUnicast(value: boolean | cdktf.IResolvable) {
    this._switchportBlockUnicast = value;
  }
  public resetSwitchportBlockUnicast() {
    this._switchportBlockUnicast = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get switchportBlockUnicastInput() {
    return this._switchportBlockUnicast;
  }

  // switchport_mode_access - computed: false, optional: true, required: false
  private _switchportModeAccess?: boolean | cdktf.IResolvable; 
  public get switchportModeAccess() {
    return this.getBooleanAttribute('switchport_mode_access');
  }
  public set switchportModeAccess(value: boolean | cdktf.IResolvable) {
    this._switchportModeAccess = value;
  }
  public resetSwitchportModeAccess() {
    this._switchportModeAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get switchportModeAccessInput() {
    return this._switchportModeAccess;
  }

  // switchport_mode_trunk - computed: false, optional: true, required: false
  private _switchportModeTrunk?: boolean | cdktf.IResolvable; 
  public get switchportModeTrunk() {
    return this.getBooleanAttribute('switchport_mode_trunk');
  }
  public set switchportModeTrunk(value: boolean | cdktf.IResolvable) {
    this._switchportModeTrunk = value;
  }
  public resetSwitchportModeTrunk() {
    this._switchportModeTrunk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get switchportModeTrunkInput() {
    return this._switchportModeTrunk;
  }

  // switchport_nonegotiate - computed: false, optional: true, required: false
  private _switchportNonegotiate?: boolean | cdktf.IResolvable; 
  public get switchportNonegotiate() {
    return this.getBooleanAttribute('switchport_nonegotiate');
  }
  public set switchportNonegotiate(value: boolean | cdktf.IResolvable) {
    this._switchportNonegotiate = value;
  }
  public resetSwitchportNonegotiate() {
    this._switchportNonegotiate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get switchportNonegotiateInput() {
    return this._switchportNonegotiate;
  }

  // switchport_port_security - computed: false, optional: true, required: false
  private _switchportPortSecurity?: boolean | cdktf.IResolvable; 
  public get switchportPortSecurity() {
    return this.getBooleanAttribute('switchport_port_security');
  }
  public set switchportPortSecurity(value: boolean | cdktf.IResolvable) {
    this._switchportPortSecurity = value;
  }
  public resetSwitchportPortSecurity() {
    this._switchportPortSecurity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get switchportPortSecurityInput() {
    return this._switchportPortSecurity;
  }

  // switchport_port_security_aging_static - computed: false, optional: true, required: false
  private _switchportPortSecurityAgingStatic?: boolean | cdktf.IResolvable; 
  public get switchportPortSecurityAgingStatic() {
    return this.getBooleanAttribute('switchport_port_security_aging_static');
  }
  public set switchportPortSecurityAgingStatic(value: boolean | cdktf.IResolvable) {
    this._switchportPortSecurityAgingStatic = value;
  }
  public resetSwitchportPortSecurityAgingStatic() {
    this._switchportPortSecurityAgingStatic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get switchportPortSecurityAgingStaticInput() {
    return this._switchportPortSecurityAgingStatic;
  }

  // switchport_port_security_aging_time - computed: false, optional: true, required: false
  private _switchportPortSecurityAgingTime?: number; 
  public get switchportPortSecurityAgingTime() {
    return this.getNumberAttribute('switchport_port_security_aging_time');
  }
  public set switchportPortSecurityAgingTime(value: number) {
    this._switchportPortSecurityAgingTime = value;
  }
  public resetSwitchportPortSecurityAgingTime() {
    this._switchportPortSecurityAgingTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get switchportPortSecurityAgingTimeInput() {
    return this._switchportPortSecurityAgingTime;
  }

  // switchport_port_security_aging_type - computed: false, optional: true, required: false
  private _switchportPortSecurityAgingType?: boolean | cdktf.IResolvable; 
  public get switchportPortSecurityAgingType() {
    return this.getBooleanAttribute('switchport_port_security_aging_type');
  }
  public set switchportPortSecurityAgingType(value: boolean | cdktf.IResolvable) {
    this._switchportPortSecurityAgingType = value;
  }
  public resetSwitchportPortSecurityAgingType() {
    this._switchportPortSecurityAgingType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get switchportPortSecurityAgingTypeInput() {
    return this._switchportPortSecurityAgingType;
  }

  // switchport_port_security_aging_type_inactivity - computed: false, optional: true, required: false
  private _switchportPortSecurityAgingTypeInactivity?: boolean | cdktf.IResolvable; 
  public get switchportPortSecurityAgingTypeInactivity() {
    return this.getBooleanAttribute('switchport_port_security_aging_type_inactivity');
  }
  public set switchportPortSecurityAgingTypeInactivity(value: boolean | cdktf.IResolvable) {
    this._switchportPortSecurityAgingTypeInactivity = value;
  }
  public resetSwitchportPortSecurityAgingTypeInactivity() {
    this._switchportPortSecurityAgingTypeInactivity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get switchportPortSecurityAgingTypeInactivityInput() {
    return this._switchportPortSecurityAgingTypeInactivity;
  }

  // switchport_port_security_maximum_range - computed: false, optional: true, required: false
  private _switchportPortSecurityMaximumRange = new TemplateSwitchportPortSecurityMaximumRangeList(this, "switchport_port_security_maximum_range", false);
  public get switchportPortSecurityMaximumRange() {
    return this._switchportPortSecurityMaximumRange;
  }
  public putSwitchportPortSecurityMaximumRange(value: TemplateSwitchportPortSecurityMaximumRange[] | cdktf.IResolvable) {
    this._switchportPortSecurityMaximumRange.internalValue = value;
  }
  public resetSwitchportPortSecurityMaximumRange() {
    this._switchportPortSecurityMaximumRange.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get switchportPortSecurityMaximumRangeInput() {
    return this._switchportPortSecurityMaximumRange.internalValue;
  }

  // switchport_port_security_violation_protect - computed: false, optional: true, required: false
  private _switchportPortSecurityViolationProtect?: boolean | cdktf.IResolvable; 
  public get switchportPortSecurityViolationProtect() {
    return this.getBooleanAttribute('switchport_port_security_violation_protect');
  }
  public set switchportPortSecurityViolationProtect(value: boolean | cdktf.IResolvable) {
    this._switchportPortSecurityViolationProtect = value;
  }
  public resetSwitchportPortSecurityViolationProtect() {
    this._switchportPortSecurityViolationProtect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get switchportPortSecurityViolationProtectInput() {
    return this._switchportPortSecurityViolationProtect;
  }

  // switchport_port_security_violation_restrict - computed: false, optional: true, required: false
  private _switchportPortSecurityViolationRestrict?: boolean | cdktf.IResolvable; 
  public get switchportPortSecurityViolationRestrict() {
    return this.getBooleanAttribute('switchport_port_security_violation_restrict');
  }
  public set switchportPortSecurityViolationRestrict(value: boolean | cdktf.IResolvable) {
    this._switchportPortSecurityViolationRestrict = value;
  }
  public resetSwitchportPortSecurityViolationRestrict() {
    this._switchportPortSecurityViolationRestrict = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get switchportPortSecurityViolationRestrictInput() {
    return this._switchportPortSecurityViolationRestrict;
  }

  // switchport_port_security_violation_shutdown - computed: false, optional: true, required: false
  private _switchportPortSecurityViolationShutdown?: boolean | cdktf.IResolvable; 
  public get switchportPortSecurityViolationShutdown() {
    return this.getBooleanAttribute('switchport_port_security_violation_shutdown');
  }
  public set switchportPortSecurityViolationShutdown(value: boolean | cdktf.IResolvable) {
    this._switchportPortSecurityViolationShutdown = value;
  }
  public resetSwitchportPortSecurityViolationShutdown() {
    this._switchportPortSecurityViolationShutdown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get switchportPortSecurityViolationShutdownInput() {
    return this._switchportPortSecurityViolationShutdown;
  }

  // switchport_private_vlan_host_association_primary_range - computed: false, optional: true, required: false
  private _switchportPrivateVlanHostAssociationPrimaryRange?: number; 
  public get switchportPrivateVlanHostAssociationPrimaryRange() {
    return this.getNumberAttribute('switchport_private_vlan_host_association_primary_range');
  }
  public set switchportPrivateVlanHostAssociationPrimaryRange(value: number) {
    this._switchportPrivateVlanHostAssociationPrimaryRange = value;
  }
  public resetSwitchportPrivateVlanHostAssociationPrimaryRange() {
    this._switchportPrivateVlanHostAssociationPrimaryRange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get switchportPrivateVlanHostAssociationPrimaryRangeInput() {
    return this._switchportPrivateVlanHostAssociationPrimaryRange;
  }

  // switchport_private_vlan_host_association_secondary_range - computed: false, optional: true, required: false
  private _switchportPrivateVlanHostAssociationSecondaryRange?: number; 
  public get switchportPrivateVlanHostAssociationSecondaryRange() {
    return this.getNumberAttribute('switchport_private_vlan_host_association_secondary_range');
  }
  public set switchportPrivateVlanHostAssociationSecondaryRange(value: number) {
    this._switchportPrivateVlanHostAssociationSecondaryRange = value;
  }
  public resetSwitchportPrivateVlanHostAssociationSecondaryRange() {
    this._switchportPrivateVlanHostAssociationSecondaryRange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get switchportPrivateVlanHostAssociationSecondaryRangeInput() {
    return this._switchportPrivateVlanHostAssociationSecondaryRange;
  }

  // switchport_trunk_allowed_vlans - computed: false, optional: true, required: false
  private _switchportTrunkAllowedVlans?: string; 
  public get switchportTrunkAllowedVlans() {
    return this.getStringAttribute('switchport_trunk_allowed_vlans');
  }
  public set switchportTrunkAllowedVlans(value: string) {
    this._switchportTrunkAllowedVlans = value;
  }
  public resetSwitchportTrunkAllowedVlans() {
    this._switchportTrunkAllowedVlans = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get switchportTrunkAllowedVlansInput() {
    return this._switchportTrunkAllowedVlans;
  }

  // switchport_trunk_allowed_vlans_all - computed: false, optional: true, required: false
  private _switchportTrunkAllowedVlansAll?: boolean | cdktf.IResolvable; 
  public get switchportTrunkAllowedVlansAll() {
    return this.getBooleanAttribute('switchport_trunk_allowed_vlans_all');
  }
  public set switchportTrunkAllowedVlansAll(value: boolean | cdktf.IResolvable) {
    this._switchportTrunkAllowedVlansAll = value;
  }
  public resetSwitchportTrunkAllowedVlansAll() {
    this._switchportTrunkAllowedVlansAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get switchportTrunkAllowedVlansAllInput() {
    return this._switchportTrunkAllowedVlansAll;
  }

  // switchport_trunk_allowed_vlans_none - computed: false, optional: true, required: false
  private _switchportTrunkAllowedVlansNone?: boolean | cdktf.IResolvable; 
  public get switchportTrunkAllowedVlansNone() {
    return this.getBooleanAttribute('switchport_trunk_allowed_vlans_none');
  }
  public set switchportTrunkAllowedVlansNone(value: boolean | cdktf.IResolvable) {
    this._switchportTrunkAllowedVlansNone = value;
  }
  public resetSwitchportTrunkAllowedVlansNone() {
    this._switchportTrunkAllowedVlansNone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get switchportTrunkAllowedVlansNoneInput() {
    return this._switchportTrunkAllowedVlansNone;
  }

  // switchport_trunk_native_vlan_tag - computed: false, optional: true, required: false
  private _switchportTrunkNativeVlanTag?: boolean | cdktf.IResolvable; 
  public get switchportTrunkNativeVlanTag() {
    return this.getBooleanAttribute('switchport_trunk_native_vlan_tag');
  }
  public set switchportTrunkNativeVlanTag(value: boolean | cdktf.IResolvable) {
    this._switchportTrunkNativeVlanTag = value;
  }
  public resetSwitchportTrunkNativeVlanTag() {
    this._switchportTrunkNativeVlanTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get switchportTrunkNativeVlanTagInput() {
    return this._switchportTrunkNativeVlanTag;
  }

  // switchport_trunk_native_vlan_vlan_id - computed: false, optional: true, required: false
  private _switchportTrunkNativeVlanVlanId?: number; 
  public get switchportTrunkNativeVlanVlanId() {
    return this.getNumberAttribute('switchport_trunk_native_vlan_vlan_id');
  }
  public set switchportTrunkNativeVlanVlanId(value: number) {
    this._switchportTrunkNativeVlanVlanId = value;
  }
  public resetSwitchportTrunkNativeVlanVlanId() {
    this._switchportTrunkNativeVlanVlanId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get switchportTrunkNativeVlanVlanIdInput() {
    return this._switchportTrunkNativeVlanVlanId;
  }

  // switchport_voice_vlan - computed: false, optional: true, required: false
  private _switchportVoiceVlan?: number; 
  public get switchportVoiceVlan() {
    return this.getNumberAttribute('switchport_voice_vlan');
  }
  public set switchportVoiceVlan(value: number) {
    this._switchportVoiceVlan = value;
  }
  public resetSwitchportVoiceVlan() {
    this._switchportVoiceVlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get switchportVoiceVlanInput() {
    return this._switchportVoiceVlan;
  }

  // template_name - computed: false, optional: false, required: true
  private _templateName?: string; 
  public get templateName() {
    return this.getStringAttribute('template_name');
  }
  public set templateName(value: string) {
    this._templateName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get templateNameInput() {
    return this._templateName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_session_closed: cdktf.booleanToTerraform(this._accessSessionClosed),
      access_session_control_direction: cdktf.stringToTerraform(this._accessSessionControlDirection),
      access_session_host_mode: cdktf.stringToTerraform(this._accessSessionHostMode),
      access_session_interface_template_sticky: cdktf.booleanToTerraform(this._accessSessionInterfaceTemplateSticky),
      access_session_interface_template_sticky_timer: cdktf.numberToTerraform(this._accessSessionInterfaceTemplateStickyTimer),
      access_session_monitor: cdktf.booleanToTerraform(this._accessSessionMonitor),
      access_session_port_control: cdktf.stringToTerraform(this._accessSessionPortControl),
      authentication_periodic: cdktf.booleanToTerraform(this._authenticationPeriodic),
      authentication_timer_reauthenticate_range: cdktf.numberToTerraform(this._authenticationTimerReauthenticateRange),
      authentication_timer_reauthenticate_server: cdktf.booleanToTerraform(this._authenticationTimerReauthenticateServer),
      cts_manual: cdktf.booleanToTerraform(this._ctsManual),
      cts_manual_policy_static_sgt: cdktf.numberToTerraform(this._ctsManualPolicyStaticSgt),
      cts_manual_policy_static_trusted: cdktf.booleanToTerraform(this._ctsManualPolicyStaticTrusted),
      cts_manual_propagate_sgt: cdktf.booleanToTerraform(this._ctsManualPropagateSgt),
      cts_role_based_enforcement: cdktf.booleanToTerraform(this._ctsRoleBasedEnforcement),
      delete_mode: cdktf.stringToTerraform(this._deleteMode),
      device: cdktf.stringToTerraform(this._device),
      device_tracking: cdktf.booleanToTerraform(this._deviceTracking),
      device_tracking_attach_policy: cdktf.listMapper(templateDeviceTrackingAttachPolicyToTerraform, false)(this._deviceTrackingAttachPolicy.internalValue),
      device_tracking_vlan_range: cdktf.stringToTerraform(this._deviceTrackingVlanRange),
      dot1x_max_reauth_req: cdktf.numberToTerraform(this._dot1XMaxReauthReq),
      dot1x_max_req: cdktf.numberToTerraform(this._dot1XMaxReq),
      dot1x_pae: cdktf.stringToTerraform(this._dot1XPae),
      dot1x_timeout_quiet_period: cdktf.numberToTerraform(this._dot1XTimeoutQuietPeriod),
      dot1x_timeout_ratelimit_period: cdktf.numberToTerraform(this._dot1XTimeoutRatelimitPeriod),
      dot1x_timeout_server_timeout: cdktf.numberToTerraform(this._dot1XTimeoutServerTimeout),
      dot1x_timeout_supp_timeout: cdktf.numberToTerraform(this._dot1XTimeoutSuppTimeout),
      dot1x_timeout_tx_period: cdktf.numberToTerraform(this._dot1XTimeoutTxPeriod),
      ip_access_group: cdktf.listMapper(templateIpAccessGroupToTerraform, false)(this._ipAccessGroup.internalValue),
      ip_dhcp_snooping_limit_rate: cdktf.numberToTerraform(this._ipDhcpSnoopingLimitRate),
      ip_dhcp_snooping_trust: cdktf.booleanToTerraform(this._ipDhcpSnoopingTrust),
      load_interval: cdktf.numberToTerraform(this._loadInterval),
      mab: cdktf.booleanToTerraform(this._mab),
      mab_eap: cdktf.booleanToTerraform(this._mabEap),
      service_policy_input: cdktf.stringToTerraform(this._servicePolicyInput),
      service_policy_output: cdktf.stringToTerraform(this._servicePolicyOutput),
      service_policy_type_control_subscriber: cdktf.stringToTerraform(this._servicePolicyTypeControlSubscriber),
      source_template: cdktf.stringToTerraform(this._sourceTemplate),
      spanning_tree_bpduguard_enable: cdktf.booleanToTerraform(this._spanningTreeBpduguardEnable),
      spanning_tree_portfast: cdktf.booleanToTerraform(this._spanningTreePortfast),
      spanning_tree_portfast_disable: cdktf.booleanToTerraform(this._spanningTreePortfastDisable),
      spanning_tree_portfast_edge: cdktf.booleanToTerraform(this._spanningTreePortfastEdge),
      spanning_tree_portfast_network: cdktf.booleanToTerraform(this._spanningTreePortfastNetwork),
      spanning_tree_service_policy: cdktf.booleanToTerraform(this._spanningTreeServicePolicy),
      storm_control_action_shutdown: cdktf.booleanToTerraform(this._stormControlActionShutdown),
      storm_control_action_trap: cdktf.booleanToTerraform(this._stormControlActionTrap),
      storm_control_broadcast_level_bps_threshold: cdktf.numberToTerraform(this._stormControlBroadcastLevelBpsThreshold),
      storm_control_broadcast_level_pps_threshold: cdktf.stringToTerraform(this._stormControlBroadcastLevelPpsThreshold),
      storm_control_broadcast_level_threshold: cdktf.numberToTerraform(this._stormControlBroadcastLevelThreshold),
      storm_control_multicast_level_bps_threshold: cdktf.numberToTerraform(this._stormControlMulticastLevelBpsThreshold),
      storm_control_multicast_level_pps_threshold: cdktf.stringToTerraform(this._stormControlMulticastLevelPpsThreshold),
      storm_control_multicast_level_threshold: cdktf.numberToTerraform(this._stormControlMulticastLevelThreshold),
      subscriber_aging_inactivity_timer_probe: cdktf.booleanToTerraform(this._subscriberAgingInactivityTimerProbe),
      subscriber_aging_inactivity_timer_value: cdktf.numberToTerraform(this._subscriberAgingInactivityTimerValue),
      subscriber_aging_probe: cdktf.booleanToTerraform(this._subscriberAgingProbe),
      switchport_access_vlan: cdktf.numberToTerraform(this._switchportAccessVlan),
      switchport_block_unicast: cdktf.booleanToTerraform(this._switchportBlockUnicast),
      switchport_mode_access: cdktf.booleanToTerraform(this._switchportModeAccess),
      switchport_mode_trunk: cdktf.booleanToTerraform(this._switchportModeTrunk),
      switchport_nonegotiate: cdktf.booleanToTerraform(this._switchportNonegotiate),
      switchport_port_security: cdktf.booleanToTerraform(this._switchportPortSecurity),
      switchport_port_security_aging_static: cdktf.booleanToTerraform(this._switchportPortSecurityAgingStatic),
      switchport_port_security_aging_time: cdktf.numberToTerraform(this._switchportPortSecurityAgingTime),
      switchport_port_security_aging_type: cdktf.booleanToTerraform(this._switchportPortSecurityAgingType),
      switchport_port_security_aging_type_inactivity: cdktf.booleanToTerraform(this._switchportPortSecurityAgingTypeInactivity),
      switchport_port_security_maximum_range: cdktf.listMapper(templateSwitchportPortSecurityMaximumRangeToTerraform, false)(this._switchportPortSecurityMaximumRange.internalValue),
      switchport_port_security_violation_protect: cdktf.booleanToTerraform(this._switchportPortSecurityViolationProtect),
      switchport_port_security_violation_restrict: cdktf.booleanToTerraform(this._switchportPortSecurityViolationRestrict),
      switchport_port_security_violation_shutdown: cdktf.booleanToTerraform(this._switchportPortSecurityViolationShutdown),
      switchport_private_vlan_host_association_primary_range: cdktf.numberToTerraform(this._switchportPrivateVlanHostAssociationPrimaryRange),
      switchport_private_vlan_host_association_secondary_range: cdktf.numberToTerraform(this._switchportPrivateVlanHostAssociationSecondaryRange),
      switchport_trunk_allowed_vlans: cdktf.stringToTerraform(this._switchportTrunkAllowedVlans),
      switchport_trunk_allowed_vlans_all: cdktf.booleanToTerraform(this._switchportTrunkAllowedVlansAll),
      switchport_trunk_allowed_vlans_none: cdktf.booleanToTerraform(this._switchportTrunkAllowedVlansNone),
      switchport_trunk_native_vlan_tag: cdktf.booleanToTerraform(this._switchportTrunkNativeVlanTag),
      switchport_trunk_native_vlan_vlan_id: cdktf.numberToTerraform(this._switchportTrunkNativeVlanVlanId),
      switchport_voice_vlan: cdktf.numberToTerraform(this._switchportVoiceVlan),
      template_name: cdktf.stringToTerraform(this._templateName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_session_closed: {
        value: cdktf.booleanToHclTerraform(this._accessSessionClosed),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      access_session_control_direction: {
        value: cdktf.stringToHclTerraform(this._accessSessionControlDirection),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      access_session_host_mode: {
        value: cdktf.stringToHclTerraform(this._accessSessionHostMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      access_session_interface_template_sticky: {
        value: cdktf.booleanToHclTerraform(this._accessSessionInterfaceTemplateSticky),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      access_session_interface_template_sticky_timer: {
        value: cdktf.numberToHclTerraform(this._accessSessionInterfaceTemplateStickyTimer),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      access_session_monitor: {
        value: cdktf.booleanToHclTerraform(this._accessSessionMonitor),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      access_session_port_control: {
        value: cdktf.stringToHclTerraform(this._accessSessionPortControl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      authentication_periodic: {
        value: cdktf.booleanToHclTerraform(this._authenticationPeriodic),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      authentication_timer_reauthenticate_range: {
        value: cdktf.numberToHclTerraform(this._authenticationTimerReauthenticateRange),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      authentication_timer_reauthenticate_server: {
        value: cdktf.booleanToHclTerraform(this._authenticationTimerReauthenticateServer),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      cts_manual: {
        value: cdktf.booleanToHclTerraform(this._ctsManual),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      cts_manual_policy_static_sgt: {
        value: cdktf.numberToHclTerraform(this._ctsManualPolicyStaticSgt),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      cts_manual_policy_static_trusted: {
        value: cdktf.booleanToHclTerraform(this._ctsManualPolicyStaticTrusted),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      cts_manual_propagate_sgt: {
        value: cdktf.booleanToHclTerraform(this._ctsManualPropagateSgt),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      cts_role_based_enforcement: {
        value: cdktf.booleanToHclTerraform(this._ctsRoleBasedEnforcement),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      delete_mode: {
        value: cdktf.stringToHclTerraform(this._deleteMode),
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
      device_tracking: {
        value: cdktf.booleanToHclTerraform(this._deviceTracking),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      device_tracking_attach_policy: {
        value: cdktf.listMapperHcl(templateDeviceTrackingAttachPolicyToHclTerraform, false)(this._deviceTrackingAttachPolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TemplateDeviceTrackingAttachPolicyList",
      },
      device_tracking_vlan_range: {
        value: cdktf.stringToHclTerraform(this._deviceTrackingVlanRange),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dot1x_max_reauth_req: {
        value: cdktf.numberToHclTerraform(this._dot1XMaxReauthReq),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dot1x_max_req: {
        value: cdktf.numberToHclTerraform(this._dot1XMaxReq),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dot1x_pae: {
        value: cdktf.stringToHclTerraform(this._dot1XPae),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dot1x_timeout_quiet_period: {
        value: cdktf.numberToHclTerraform(this._dot1XTimeoutQuietPeriod),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dot1x_timeout_ratelimit_period: {
        value: cdktf.numberToHclTerraform(this._dot1XTimeoutRatelimitPeriod),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dot1x_timeout_server_timeout: {
        value: cdktf.numberToHclTerraform(this._dot1XTimeoutServerTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dot1x_timeout_supp_timeout: {
        value: cdktf.numberToHclTerraform(this._dot1XTimeoutSuppTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dot1x_timeout_tx_period: {
        value: cdktf.numberToHclTerraform(this._dot1XTimeoutTxPeriod),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ip_access_group: {
        value: cdktf.listMapperHcl(templateIpAccessGroupToHclTerraform, false)(this._ipAccessGroup.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TemplateIpAccessGroupList",
      },
      ip_dhcp_snooping_limit_rate: {
        value: cdktf.numberToHclTerraform(this._ipDhcpSnoopingLimitRate),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ip_dhcp_snooping_trust: {
        value: cdktf.booleanToHclTerraform(this._ipDhcpSnoopingTrust),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      load_interval: {
        value: cdktf.numberToHclTerraform(this._loadInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      mab: {
        value: cdktf.booleanToHclTerraform(this._mab),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      mab_eap: {
        value: cdktf.booleanToHclTerraform(this._mabEap),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      service_policy_input: {
        value: cdktf.stringToHclTerraform(this._servicePolicyInput),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_policy_output: {
        value: cdktf.stringToHclTerraform(this._servicePolicyOutput),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_policy_type_control_subscriber: {
        value: cdktf.stringToHclTerraform(this._servicePolicyTypeControlSubscriber),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_template: {
        value: cdktf.stringToHclTerraform(this._sourceTemplate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      spanning_tree_bpduguard_enable: {
        value: cdktf.booleanToHclTerraform(this._spanningTreeBpduguardEnable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      spanning_tree_portfast: {
        value: cdktf.booleanToHclTerraform(this._spanningTreePortfast),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      spanning_tree_portfast_disable: {
        value: cdktf.booleanToHclTerraform(this._spanningTreePortfastDisable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      spanning_tree_portfast_edge: {
        value: cdktf.booleanToHclTerraform(this._spanningTreePortfastEdge),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      spanning_tree_portfast_network: {
        value: cdktf.booleanToHclTerraform(this._spanningTreePortfastNetwork),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      spanning_tree_service_policy: {
        value: cdktf.booleanToHclTerraform(this._spanningTreeServicePolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      storm_control_action_shutdown: {
        value: cdktf.booleanToHclTerraform(this._stormControlActionShutdown),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      storm_control_action_trap: {
        value: cdktf.booleanToHclTerraform(this._stormControlActionTrap),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      storm_control_broadcast_level_bps_threshold: {
        value: cdktf.numberToHclTerraform(this._stormControlBroadcastLevelBpsThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      storm_control_broadcast_level_pps_threshold: {
        value: cdktf.stringToHclTerraform(this._stormControlBroadcastLevelPpsThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      storm_control_broadcast_level_threshold: {
        value: cdktf.numberToHclTerraform(this._stormControlBroadcastLevelThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      storm_control_multicast_level_bps_threshold: {
        value: cdktf.numberToHclTerraform(this._stormControlMulticastLevelBpsThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      storm_control_multicast_level_pps_threshold: {
        value: cdktf.stringToHclTerraform(this._stormControlMulticastLevelPpsThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      storm_control_multicast_level_threshold: {
        value: cdktf.numberToHclTerraform(this._stormControlMulticastLevelThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      subscriber_aging_inactivity_timer_probe: {
        value: cdktf.booleanToHclTerraform(this._subscriberAgingInactivityTimerProbe),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      subscriber_aging_inactivity_timer_value: {
        value: cdktf.numberToHclTerraform(this._subscriberAgingInactivityTimerValue),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      subscriber_aging_probe: {
        value: cdktf.booleanToHclTerraform(this._subscriberAgingProbe),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      switchport_access_vlan: {
        value: cdktf.numberToHclTerraform(this._switchportAccessVlan),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      switchport_block_unicast: {
        value: cdktf.booleanToHclTerraform(this._switchportBlockUnicast),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      switchport_mode_access: {
        value: cdktf.booleanToHclTerraform(this._switchportModeAccess),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      switchport_mode_trunk: {
        value: cdktf.booleanToHclTerraform(this._switchportModeTrunk),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      switchport_nonegotiate: {
        value: cdktf.booleanToHclTerraform(this._switchportNonegotiate),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      switchport_port_security: {
        value: cdktf.booleanToHclTerraform(this._switchportPortSecurity),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      switchport_port_security_aging_static: {
        value: cdktf.booleanToHclTerraform(this._switchportPortSecurityAgingStatic),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      switchport_port_security_aging_time: {
        value: cdktf.numberToHclTerraform(this._switchportPortSecurityAgingTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      switchport_port_security_aging_type: {
        value: cdktf.booleanToHclTerraform(this._switchportPortSecurityAgingType),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      switchport_port_security_aging_type_inactivity: {
        value: cdktf.booleanToHclTerraform(this._switchportPortSecurityAgingTypeInactivity),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      switchport_port_security_maximum_range: {
        value: cdktf.listMapperHcl(templateSwitchportPortSecurityMaximumRangeToHclTerraform, false)(this._switchportPortSecurityMaximumRange.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TemplateSwitchportPortSecurityMaximumRangeList",
      },
      switchport_port_security_violation_protect: {
        value: cdktf.booleanToHclTerraform(this._switchportPortSecurityViolationProtect),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      switchport_port_security_violation_restrict: {
        value: cdktf.booleanToHclTerraform(this._switchportPortSecurityViolationRestrict),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      switchport_port_security_violation_shutdown: {
        value: cdktf.booleanToHclTerraform(this._switchportPortSecurityViolationShutdown),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      switchport_private_vlan_host_association_primary_range: {
        value: cdktf.numberToHclTerraform(this._switchportPrivateVlanHostAssociationPrimaryRange),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      switchport_private_vlan_host_association_secondary_range: {
        value: cdktf.numberToHclTerraform(this._switchportPrivateVlanHostAssociationSecondaryRange),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      switchport_trunk_allowed_vlans: {
        value: cdktf.stringToHclTerraform(this._switchportTrunkAllowedVlans),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      switchport_trunk_allowed_vlans_all: {
        value: cdktf.booleanToHclTerraform(this._switchportTrunkAllowedVlansAll),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      switchport_trunk_allowed_vlans_none: {
        value: cdktf.booleanToHclTerraform(this._switchportTrunkAllowedVlansNone),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      switchport_trunk_native_vlan_tag: {
        value: cdktf.booleanToHclTerraform(this._switchportTrunkNativeVlanTag),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      switchport_trunk_native_vlan_vlan_id: {
        value: cdktf.numberToHclTerraform(this._switchportTrunkNativeVlanVlanId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      switchport_voice_vlan: {
        value: cdktf.numberToHclTerraform(this._switchportVoiceVlan),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      template_name: {
        value: cdktf.stringToHclTerraform(this._templateName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
