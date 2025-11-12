// https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/interface_ethernet
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface InterfaceEthernetConfig extends cdktf.TerraformMetaArguments {
  /**
  * Set ARP cache timeout
  *   - Range: `0`-`2147483`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/interface_ethernet#arp_timeout InterfaceEthernet#arp_timeout}
  */
  readonly arpTimeout?: number;
  /**
  * Configure Authentication Fail vlan
  *   - Range: `1`-`4094`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/interface_ethernet#authentication_event_fail_action_authorize_vlan InterfaceEthernet#authentication_event_fail_action_authorize_vlan}
  */
  readonly authenticationEventFailActionAuthorizeVlan?: number;
  /**
  * Move to next authentication method
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/interface_ethernet#authentication_event_fail_action_next_method InterfaceEthernet#authentication_event_fail_action_next_method}
  */
  readonly authenticationEventFailActionNextMethod?: boolean | cdktf.IResolvable;
  /**
  * Move to next authentication method
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/interface_ethernet#authentication_event_linksec_fail_action_next_method InterfaceEthernet#authentication_event_linksec_fail_action_next_method}
  */
  readonly authenticationEventLinksecFailActionNextMethod?: boolean | cdktf.IResolvable;
  /**
  * Configure Guest vlan
  *   - Range: `1`-`4094`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/interface_ethernet#authentication_event_no_response_action_authorize_vlan InterfaceEthernet#authentication_event_no_response_action_authorize_vlan}
  */
  readonly authenticationEventNoResponseActionAuthorizeVlan?: number;
  /**
  * Reinitialize all authorized clients
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/interface_ethernet#authentication_event_server_alive_action_reinitialize InterfaceEthernet#authentication_event_server_alive_action_reinitialize}
  */
  readonly authenticationEventServerAliveActionReinitialize?: boolean | cdktf.IResolvable;
  /**
  * Authorize the port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/interface_ethernet#authentication_event_server_dead_action_authorize InterfaceEthernet#authentication_event_server_dead_action_authorize}
  */
  readonly authenticationEventServerDeadActionAuthorize?: boolean | cdktf.IResolvable;
  /**
  * Configure Critical Authorization VLAN
  *   - Range: `1`-`4094`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/interface_ethernet#authentication_event_server_dead_action_authorize_vlan InterfaceEthernet#authentication_event_server_dead_action_authorize_vlan}
  */
  readonly authenticationEventServerDeadActionAuthorizeVlan?: number;
  /**
  * Authorize the port for VOICE traffic
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/interface_ethernet#authentication_event_server_dead_action_authorize_voice InterfaceEthernet#authentication_event_server_dead_action_authorize_voice}
  */
  readonly authenticationEventServerDeadActionAuthorizeVoice?: boolean | cdktf.IResolvable;
  /**
  * Configure Critical Authorization VLAN
  *   - Range: `1`-`4094`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/interface_ethernet#authentication_event_server_dead_action_reinitialize_vlan InterfaceEthernet#authentication_event_server_dead_action_reinitialize_vlan}
  */
  readonly authenticationEventServerDeadActionReinitializeVlan?: number;
  /**
  * Set the Host mode for authentication on this interface
  *   - Choices: `multi-auth`, `multi-domain`, `multi-host`, `single-host`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/interface_ethernet#authentication_host_mode InterfaceEthernet#authentication_host_mode}
  */
  readonly authenticationHostMode?: string;
  /**
  * Authentication method dot1x allowed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/interface_ethernet#authentication_order_dot1x InterfaceEthernet#authentication_order_dot1x}
  */
  readonly authenticationOrderDot1X?: boolean | cdktf.IResolvable;
  /**
  * Authentication method mab allowed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/interface_ethernet#authentication_order_dot1x_mab InterfaceEthernet#authentication_order_dot1x_mab}
  */
  readonly authenticationOrderDot1XMab?: boolean | cdktf.IResolvable;
  /**
  * Authentication method webauth allowed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/interface_ethernet#authentication_order_dot1x_webauth InterfaceEthernet#authentication_order_dot1x_webauth}
  */
  readonly authenticationOrderDot1XWebauth?: boolean | cdktf.IResolvable;
  /**
  * Authentication method mab allowed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/interface_ethernet#authentication_order_mab InterfaceEthernet#authentication_order_mab}
  */
  readonly authenticationOrderMab?: boolean | cdktf.IResolvable;
  /**
  * Authentication method dot1x allowed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/interface_ethernet#authentication_order_mab_dot1x InterfaceEthernet#authentication_order_mab_dot1x}
  */
  readonly authenticationOrderMabDot1X?: boolean | cdktf.IResolvable;
  /**
  * Authentication method webauth allowed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/interface_ethernet#authentication_order_mab_webauth InterfaceEthernet#authentication_order_mab_webauth}
  */
  readonly authenticationOrderMabWebauth?: boolean | cdktf.IResolvable;
  /**
  * Authentication method webauth allowed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/interface_ethernet#authentication_order_webauth InterfaceEthernet#authentication_order_webauth}
  */
  readonly authenticationOrderWebauth?: boolean | cdktf.IResolvable;
  /**
  * Enable or Disable Reauthentication for this port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/interface_ethernet#authentication_periodic InterfaceEthernet#authentication_periodic}
  */
  readonly authenticationPeriodic?: boolean | cdktf.IResolvable;
  /**
  * set the port-control value
  *   - Choices: `auto`, `force-authorized`, `force-unauthorized`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/interface_ethernet#authentication_port_control InterfaceEthernet#authentication_port_control}
  */
  readonly authenticationPortControl?: string;
  /**
  * Authentication method dot1x allowed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/interface_ethernet#authentication_priority_dot1x InterfaceEthernet#authentication_priority_dot1x}
  */
  readonly authenticationPriorityDot1X?: boolean | cdktf.IResolvable;
  /**
  * Authentication method mab allowed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/interface_ethernet#authentication_priority_dot1x_mab InterfaceEthernet#authentication_priority_dot1x_mab}
  */
  readonly authenticationPriorityDot1XMab?: boolean | cdktf.IResolvable;
  /**
  * Authentication method webauth allowed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/interface_ethernet#authentication_priority_dot1x_webauth InterfaceEthernet#authentication_priority_dot1x_webauth}
  */
  readonly authenticationPriorityDot1XWebauth?: boolean | cdktf.IResolvable;
  /**
  * Authentication method mab allowed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/interface_ethernet#authentication_priority_mab InterfaceEthernet#authentication_priority_mab}
  */
  readonly authenticationPriorityMab?: boolean | cdktf.IResolvable;
  /**
  * Authentication method dot1x allowed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/interface_ethernet#authentication_priority_mab_dot1x InterfaceEthernet#authentication_priority_mab_dot1x}
  */
  readonly authenticationPriorityMabDot1X?: boolean | cdktf.IResolvable;
  /**
  * Authentication method webauth allowed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/interface_ethernet#authentication_priority_mab_webauth InterfaceEthernet#authentication_priority_mab_webauth}
  */
  readonly authenticationPriorityMabWebauth?: boolean | cdktf.IResolvable;
  /**
  * Authentication method webauth allowed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/interface_ethernet#authentication_priority_webauth InterfaceEthernet#authentication_priority_webauth}
  */
  readonly authenticationPriorityWebauth?: boolean | cdktf.IResolvable;
  /**
  * Enter a value between 1 and 1073741823
  *   - Range: `1`-`1073741823`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/interface_ethernet#authentication_timer_reauthenticate InterfaceEthernet#authentication_timer_reauthenticate}
  */
  readonly authenticationTimerReauthenticate?: number;
  /**
  * Obtain re-authentication timeout value from the server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/interface_ethernet#authentication_timer_reauthenticate_server InterfaceEthernet#authentication_timer_reauthenticate_server}
  */
  readonly authenticationTimerReauthenticateServer?: boolean | cdktf.IResolvable;
  /**
  * Configure classification for untrusted devices
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/interface_ethernet#auto_qos_classify InterfaceEthernet#auto_qos_classify}
  */
  readonly autoQosClassify?: boolean | cdktf.IResolvable;
  /**
  * Configure QoS policing for untrusted devices
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/interface_ethernet#auto_qos_classify_police InterfaceEthernet#auto_qos_classify_police}
  */
  readonly autoQosClassifyPolice?: boolean | cdktf.IResolvable;
  /**
  * Trust the DSCP/CoS marking
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/interface_ethernet#auto_qos_trust InterfaceEthernet#auto_qos_trust}
  */
  readonly autoQosTrust?: boolean | cdktf.IResolvable;
  /**
  * Trust the CoS marking
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/interface_ethernet#auto_qos_trust_cos InterfaceEthernet#auto_qos_trust_cos}
  */
  readonly autoQosTrustCos?: boolean | cdktf.IResolvable;
  /**
  * Trust the DSCP marking
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/interface_ethernet#auto_qos_trust_dscp InterfaceEthernet#auto_qos_trust_dscp}
  */
  readonly autoQosTrustDscp?: boolean | cdktf.IResolvable;
  /**
  * Trust the QoS marking of the Cisco Telepresence System
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/interface_ethernet#auto_qos_video_cts InterfaceEthernet#auto_qos_video_cts}
  */
  readonly autoQosVideoCts?: boolean | cdktf.IResolvable;
  /**
  * Trust the QoS marking of the Ip Video Surveillance camera
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/interface_ethernet#auto_qos_video_ip_camera InterfaceEthernet#auto_qos_video_ip_camera}
  */
  readonly autoQosVideoIpCamera?: boolean | cdktf.IResolvable;
  /**
  * Trust the Qos marking of the Cisco Media Player
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/interface_ethernet#auto_qos_video_media_player InterfaceEthernet#auto_qos_video_media_player}
  */
  readonly autoQosVideoMediaPlayer?: boolean | cdktf.IResolvable;
  /**
  * Configure AutoQoS for VoIP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/interface_ethernet#auto_qos_voip InterfaceEthernet#auto_qos_voip}
  */
  readonly autoQosVoip?: boolean | cdktf.IResolvable;
  /**
  * Trust the QoS marking of Cisco IP Phone
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/interface_ethernet#auto_qos_voip_cisco_phone InterfaceEthernet#auto_qos_voip_cisco_phone}
  */
  readonly autoQosVoipCiscoPhone?: boolean | cdktf.IResolvable;
  /**
  * Trust the QoS marking of Cisco IP SoftPhone
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/interface_ethernet#auto_qos_voip_cisco_softphone InterfaceEthernet#auto_qos_voip_cisco_softphone}
  */
  readonly autoQosVoipCiscoSoftphone?: boolean | cdktf.IResolvable;
  /**
  * Trust the DSCP/CoS marking
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/interface_ethernet#auto_qos_voip_trust InterfaceEthernet#auto_qos_voip_trust}
  */
  readonly autoQosVoipTrust?: boolean | cdktf.IResolvable;
  /**
  * 
  *   - Range: `1`-`200000000`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/interface_ethernet#bandwidth InterfaceEthernet#bandwidth}
  */
  readonly bandwidth?: number;
  /**
  * Use echo adjunct as bfd detection mechanism
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/interface_ethernet#bfd_echo InterfaceEthernet#bfd_echo}
  */
  readonly bfdEcho?: boolean | cdktf.IResolvable;
  /**
  * Enable BFD under the interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/interface_ethernet#bfd_enable InterfaceEthernet#bfd_enable}
  */
  readonly bfdEnable?: boolean | cdktf.IResolvable;
  /**
  * 
  *   - Range: `50`-`9999`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/interface_ethernet#bfd_interval InterfaceEthernet#bfd_interval}
  */
  readonly bfdInterval?: number;
  /**
  * Minimum receive interval capability
  *   - Range: `50`-`9999`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/interface_ethernet#bfd_interval_min_rx InterfaceEthernet#bfd_interval_min_rx}
  */
  readonly bfdIntervalMinRx?: number;
  /**
  * Multiplier value used to compute holddown
  *   - Range: `3`-`50`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/interface_ethernet#bfd_interval_multiplier InterfaceEthernet#bfd_interval_multiplier}
  */
  readonly bfdIntervalMultiplier?: number;
  /**
  * The Source IP address to be used for BFD sessions over this interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/interface_ethernet#bfd_local_address InterfaceEthernet#bfd_local_address}
  */
  readonly bfdLocalAddress?: string;
  /**
  * BFD template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/interface_ethernet#bfd_template InterfaceEthernet#bfd_template}
  */
  readonly bfdTemplate?: string;
  /**
  * Disable BPDU guard for this interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/interface_ethernet#bpduguard_disable InterfaceEthernet#bpduguard_disable}
  */
  readonly bpduguardDisable?: boolean | cdktf.IResolvable;
  /**
  * Enable BPDU guard for this interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/interface_ethernet#bpduguard_enable InterfaceEthernet#bpduguard_enable}
  */
  readonly bpduguardEnable?: boolean | cdktf.IResolvable;
  /**
  * Enable CDP on interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/interface_ethernet#cdp_enable InterfaceEthernet#cdp_enable}
  */
  readonly cdpEnable?: boolean | cdktf.IResolvable;
  /**
  * Enable/Configure Application TLV
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/interface_ethernet#cdp_tlv_app InterfaceEthernet#cdp_tlv_app}
  */
  readonly cdpTlvApp?: boolean | cdktf.IResolvable;
  /**
  * Exchange location information
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/interface_ethernet#cdp_tlv_location InterfaceEthernet#cdp_tlv_location}
  */
  readonly cdpTlvLocation?: boolean | cdktf.IResolvable;
  /**
  * Enable CDP location server on interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/interface_ethernet#cdp_tlv_server_location InterfaceEthernet#cdp_tlv_server_location}
  */
  readonly cdpTlvServerLocation?: boolean | cdktf.IResolvable;
  /**
  * Etherchannel Mode of the interface
  *   - Choices: `active`, `auto`, `desirable`, `on`, `passive`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/interface_ethernet#channel_group_mode InterfaceEthernet#channel_group_mode}
  */
  readonly channelGroupMode?: string;
  /**
  * 
  *   - Range: `1`-`512`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/interface_ethernet#channel_group_number InterfaceEthernet#channel_group_number}
  */
  readonly channelGroupNumber?: number;
  /**
  * Interface specific description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/interface_ethernet#description InterfaceEthernet#description}
  */
  readonly description?: string;
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/interface_ethernet#device InterfaceEthernet#device}
  */
  readonly device?: string;
  /**
  * Configure device-tracking on the interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/interface_ethernet#device_tracking InterfaceEthernet#device_tracking}
  */
  readonly deviceTracking?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/interface_ethernet#device_tracking_attached_policies InterfaceEthernet#device_tracking_attached_policies}
  */
  readonly deviceTrackingAttachedPolicies?: InterfaceEthernetDeviceTrackingAttachedPolicies[] | cdktf.IResolvable;
  /**
  * Max No. of Reauthentication Attempts
  *   - Range: `1`-`10`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/interface_ethernet#dot1x_max_reauth_req InterfaceEthernet#dot1x_max_reauth_req}
  */
  readonly dot1XMaxReauthReq?: number;
  /**
  * Max No. of Retries
  *   - Range: `1`-`10`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/interface_ethernet#dot1x_max_req InterfaceEthernet#dot1x_max_req}
  */
  readonly dot1XMaxReq?: number;
  /**
  * Set 802.1x interface pae type
  *   - Choices: `authenticator`, `both`, `supplicant`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/interface_ethernet#dot1x_pae InterfaceEthernet#dot1x_pae}
  */
  readonly dot1XPae?: string;
  /**
  * Timeout for authenticator reply
  *   - Range: `1`-`65535`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/interface_ethernet#dot1x_timeout_auth_period InterfaceEthernet#dot1x_timeout_auth_period}
  */
  readonly dot1XTimeoutAuthPeriod?: number;
  /**
  * Timeout for authentication retries
  *   - Range: `1`-`65535`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/interface_ethernet#dot1x_timeout_held_period InterfaceEthernet#dot1x_timeout_held_period}
  */
  readonly dot1XTimeoutHeldPeriod?: number;
  /**
  * QuietPeriod in Seconds
  *   - Range: `1`-`65535`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/interface_ethernet#dot1x_timeout_quiet_period InterfaceEthernet#dot1x_timeout_quiet_period}
  */
  readonly dot1XTimeoutQuietPeriod?: number;
  /**
  * Ratelimit Period in seconds
  *   - Range: `1`-`65535`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/interface_ethernet#dot1x_timeout_ratelimit_period InterfaceEthernet#dot1x_timeout_ratelimit_period}
  */
  readonly dot1XTimeoutRatelimitPeriod?: number;
  /**
  * Timeout for Radius Retries
  *   - Range: `1`-`65535`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/interface_ethernet#dot1x_timeout_server_timeout InterfaceEthernet#dot1x_timeout_server_timeout}
  */
  readonly dot1XTimeoutServerTimeout?: number;
  /**
  * Timeout for EAPOL-start retries
  *   - Range: `1`-`65535`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/interface_ethernet#dot1x_timeout_start_period InterfaceEthernet#dot1x_timeout_start_period}
  */
  readonly dot1XTimeoutStartPeriod?: number;
  /**
  * Timeout for supplicant reply
  *   - Range: `1`-`65535`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/interface_ethernet#dot1x_timeout_supp_timeout InterfaceEthernet#dot1x_timeout_supp_timeout}
  */
  readonly dot1XTimeoutSuppTimeout?: number;
  /**
  * Timeout for supplicant retries
  *   - Range: `1`-`65535`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/interface_ethernet#dot1x_timeout_tx_period InterfaceEthernet#dot1x_timeout_tx_period}
  */
  readonly dot1XTimeoutTxPeriod?: number;
  /**
  * 
  *   - Range: `1`-`4094`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/interface_ethernet#encapsulation_dot1q_vlan_id InterfaceEthernet#encapsulation_dot1q_vlan_id}
  */
  readonly encapsulationDot1QVlanId?: number;
  /**
  * Ethernet segment local discriminator value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/interface_ethernet#evpn_ethernet_segments InterfaceEthernet#evpn_ethernet_segments}
  */
  readonly evpnEthernetSegments?: InterfaceEthernetEvpnEthernetSegments[] | cdktf.IResolvable;
  /**
  * Specify a destination address for UDP broadcasts
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/interface_ethernet#helper_addresses InterfaceEthernet#helper_addresses}
  */
  readonly helperAddresses?: InterfaceEthernetHelperAddresses[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/interface_ethernet#ip_access_group_in InterfaceEthernet#ip_access_group_in}
  */
  readonly ipAccessGroupIn?: string;
  /**
  * inbound packets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/interface_ethernet#ip_access_group_in_enable InterfaceEthernet#ip_access_group_in_enable}
  */
  readonly ipAccessGroupInEnable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/interface_ethernet#ip_access_group_out InterfaceEthernet#ip_access_group_out}
  */
  readonly ipAccessGroupOut?: string;
  /**
  * outbound packets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/interface_ethernet#ip_access_group_out_enable InterfaceEthernet#ip_access_group_out_enable}
  */
  readonly ipAccessGroupOutEnable?: boolean | cdktf.IResolvable;
  /**
  * Rate Limit
  *   - Range: `0`-`4294967295`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/interface_ethernet#ip_arp_inspection_limit_rate InterfaceEthernet#ip_arp_inspection_limit_rate}
  */
  readonly ipArpInspectionLimitRate?: number;
  /**
  * Configure Trust state
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/interface_ethernet#ip_arp_inspection_trust InterfaceEthernet#ip_arp_inspection_trust}
  */
  readonly ipArpInspectionTrust?: boolean | cdktf.IResolvable;
  /**
  * Enable vpn-id support on this interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/interface_ethernet#ip_dhcp_relay_information_option_vpn_id InterfaceEthernet#ip_dhcp_relay_information_option_vpn_id}
  */
  readonly ipDhcpRelayInformationOptionVpnId?: boolean | cdktf.IResolvable;
  /**
  * Set source interface for relayed messages
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/interface_ethernet#ip_dhcp_relay_source_interface InterfaceEthernet#ip_dhcp_relay_source_interface}
  */
  readonly ipDhcpRelaySourceInterface?: string;
  /**
  * DHCP Snooping trust config
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/interface_ethernet#ip_dhcp_snooping_trust InterfaceEthernet#ip_dhcp_snooping_trust}
  */
  readonly ipDhcpSnoopingTrust?: boolean | cdktf.IResolvable;
  /**
  * Apply a Flow Monitor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/interface_ethernet#ip_flow_monitors InterfaceEthernet#ip_flow_monitors}
  */
  readonly ipFlowMonitors?: InterfaceEthernetIpFlowMonitors[] | cdktf.IResolvable;
  /**
  * Inside interface for address translation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/interface_ethernet#ip_nat_inside InterfaceEthernet#ip_nat_inside}
  */
  readonly ipNatInside?: boolean | cdktf.IResolvable;
  /**
  * Outside interface for address translation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/interface_ethernet#ip_nat_outside InterfaceEthernet#ip_nat_outside}
  */
  readonly ipNatOutside?: boolean | cdktf.IResolvable;
  /**
  * Enable protocol discovery for both ipv4 and ipv6
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/interface_ethernet#ip_nbar_protocol_discovery InterfaceEthernet#ip_nbar_protocol_discovery}
  */
  readonly ipNbarProtocolDiscovery?: boolean | cdktf.IResolvable;
  /**
  * Enable proxy ARP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/interface_ethernet#ip_proxy_arp InterfaceEthernet#ip_proxy_arp}
  */
  readonly ipProxyArp?: boolean | cdktf.IResolvable;
  /**
  * Enable sending ICMP Redirect messages
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/interface_ethernet#ip_redirects InterfaceEthernet#ip_redirects}
  */
  readonly ipRedirects?: boolean | cdktf.IResolvable;
  /**
  * Enable sending ICMP Unreachable messages
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/interface_ethernet#ip_unreachables InterfaceEthernet#ip_unreachables}
  */
  readonly ipUnreachables?: boolean | cdktf.IResolvable;
  /**
  * Ip address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/interface_ethernet#ipv4_address InterfaceEthernet#ipv4_address}
  */
  readonly ipv4Address?: string;
  /**
  * Ip subnet mask
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/interface_ethernet#ipv4_address_mask InterfaceEthernet#ipv4_address_mask}
  */
  readonly ipv4AddressMask?: string;
  /**
  * Insert default route
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/interface_ethernet#ipv6_address_autoconfig_default InterfaceEthernet#ipv6_address_autoconfig_default}
  */
  readonly ipv6AddressAutoconfigDefault?: boolean | cdktf.IResolvable;
  /**
  * Obtain IPv6 address from DHCP server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/interface_ethernet#ipv6_address_dhcp InterfaceEthernet#ipv6_address_dhcp}
  */
  readonly ipv6AddressDhcp?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/interface_ethernet#ipv6_addresses InterfaceEthernet#ipv6_addresses}
  */
  readonly ipv6Addresses?: InterfaceEthernetIpv6Addresses[] | cdktf.IResolvable;
  /**
  * Enable IPv6 on interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/interface_ethernet#ipv6_enable InterfaceEthernet#ipv6_enable}
  */
  readonly ipv6Enable?: boolean | cdktf.IResolvable;
  /**
  * Apply a Flow Monitor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/interface_ethernet#ipv6_flow_monitors InterfaceEthernet#ipv6_flow_monitors}
  */
  readonly ipv6FlowMonitors?: InterfaceEthernetIpv6FlowMonitors[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/interface_ethernet#ipv6_link_local_addresses InterfaceEthernet#ipv6_link_local_addresses}
  */
  readonly ipv6LinkLocalAddresses?: InterfaceEthernetIpv6LinkLocalAddresses[] | cdktf.IResolvable;
  /**
  * Set IPv6 Maximum Transmission Unit
  *   - Range: `1280`-`9976`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/interface_ethernet#ipv6_mtu InterfaceEthernet#ipv6_mtu}
  */
  readonly ipv6Mtu?: number;
  /**
  * Suppress all IPv6 RA
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/interface_ethernet#ipv6_nd_ra_suppress_all InterfaceEthernet#ipv6_nd_ra_suppress_all}
  */
  readonly ipv6NdRaSuppressAll?: boolean | cdktf.IResolvable;
  /**
  * Specify interval for load calculation for an interface
  *   - Range: `30`-`600`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/interface_ethernet#load_interval InterfaceEthernet#load_interval}
  */
  readonly loadInterval?: number;
  /**
  * UPDOWN and CHANGE messages
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/interface_ethernet#logging_event_link_status_enable InterfaceEthernet#logging_event_link_status_enable}
  */
  readonly loggingEventLinkStatusEnable?: boolean | cdktf.IResolvable;
  /**
  * MAC Authentication Bypass Interface Config Commands
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/interface_ethernet#mab InterfaceEthernet#mab}
  */
  readonly mab?: boolean | cdktf.IResolvable;
  /**
  * Use EAP authentication for MAC Auth Bypass
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/interface_ethernet#mab_eap InterfaceEthernet#mab_eap}
  */
  readonly mabEap?: boolean | cdktf.IResolvable;
  /**
  * Media type
  *   - Choices: `auto-select`, `rj45`, `sfp`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/interface_ethernet#media_type InterfaceEthernet#media_type}
  */
  readonly mediaType?: string;
  /**
  * Set the interface Maximum Transmission Unit (MTU)
  *   - Range: `64`-`18000`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/interface_ethernet#mtu InterfaceEthernet#mtu}
  */
  readonly mtu?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/interface_ethernet#name InterfaceEthernet#name}
  */
  readonly name: string;
  /**
  * Enable link autonegotiation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/interface_ethernet#negotiation_auto InterfaceEthernet#negotiation_auto}
  */
  readonly negotiationAuto?: boolean | cdktf.IResolvable;
  /**
  * Assign policy-map to the input of an interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/interface_ethernet#service_policy_input InterfaceEthernet#service_policy_input}
  */
  readonly servicePolicyInput?: string;
  /**
  * Assign policy-map to the output of an interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/interface_ethernet#service_policy_output InterfaceEthernet#service_policy_output}
  */
  readonly servicePolicyOutput?: string;
  /**
  * Shutdown the selected interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/interface_ethernet#shutdown InterfaceEthernet#shutdown}
  */
  readonly shutdown?: boolean | cdktf.IResolvable;
  /**
  * Allow SNMP LINKUP and LINKDOWN traps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/interface_ethernet#snmp_trap_link_status InterfaceEthernet#snmp_trap_link_status}
  */
  readonly snmpTrapLinkStatus?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/interface_ethernet#source_template InterfaceEthernet#source_template}
  */
  readonly sourceTemplate?: InterfaceEthernetSourceTemplate[] | cdktf.IResolvable;
  /**
  * Change an interface's spanning tree guard mode
  *   - Choices: `loop`, `none`, `root`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/interface_ethernet#spanning_tree_guard InterfaceEthernet#spanning_tree_guard}
  */
  readonly spanningTreeGuard?: string;
  /**
  * Specify a link type for spanning tree tree protocol use
  *   - Choices: `point-to-point`, `shared`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/interface_ethernet#spanning_tree_link_type InterfaceEthernet#spanning_tree_link_type}
  */
  readonly spanningTreeLinkType?: string;
  /**
  * (DEPRECATED) Spanning tree portfast options
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/interface_ethernet#spanning_tree_portfast InterfaceEthernet#spanning_tree_portfast}
  */
  readonly spanningTreePortfast?: boolean | cdktf.IResolvable;
  /**
  * (DEPRECATED) Disable portfast for this interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/interface_ethernet#spanning_tree_portfast_disable InterfaceEthernet#spanning_tree_portfast_disable}
  */
  readonly spanningTreePortfastDisable?: boolean | cdktf.IResolvable;
  /**
  * (DEPRECATED) Enable portfast edge on the interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/interface_ethernet#spanning_tree_portfast_edge InterfaceEthernet#spanning_tree_portfast_edge}
  */
  readonly spanningTreePortfastEdge?: boolean | cdktf.IResolvable;
  /**
  * (DEPRECATED) Enable portfast on the interface even in trunk mode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/interface_ethernet#spanning_tree_portfast_trunk InterfaceEthernet#spanning_tree_portfast_trunk}
  */
  readonly spanningTreePortfastTrunk?: boolean | cdktf.IResolvable;
  /**
  * 100 Mbps operation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/interface_ethernet#speed_100 InterfaceEthernet#speed_100}
  */
  readonly speed100?: boolean | cdktf.IResolvable;
  /**
  * 1000 Mbps operation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/interface_ethernet#speed_1000 InterfaceEthernet#speed_1000}
  */
  readonly speed1000?: boolean | cdktf.IResolvable;
  /**
  * 10000 Mbps operation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/interface_ethernet#speed_10000 InterfaceEthernet#speed_10000}
  */
  readonly speed10000?: boolean | cdktf.IResolvable;
  /**
  * 100000 Mbps operation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/interface_ethernet#speed_100000 InterfaceEthernet#speed_100000}
  */
  readonly speed100000?: boolean | cdktf.IResolvable;
  /**
  * 2500 Mbps operation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/interface_ethernet#speed_2500 InterfaceEthernet#speed_2500}
  */
  readonly speed2500?: boolean | cdktf.IResolvable;
  /**
  * 25000 Mbps operation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/interface_ethernet#speed_25000 InterfaceEthernet#speed_25000}
  */
  readonly speed25000?: boolean | cdktf.IResolvable;
  /**
  * 40000 Mbps operation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/interface_ethernet#speed_40000 InterfaceEthernet#speed_40000}
  */
  readonly speed40000?: boolean | cdktf.IResolvable;
  /**
  * 5000 Mbps operation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/interface_ethernet#speed_5000 InterfaceEthernet#speed_5000}
  */
  readonly speed5000?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/interface_ethernet#speed_nonegotiate InterfaceEthernet#speed_nonegotiate}
  */
  readonly speedNonegotiate?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/interface_ethernet#switchport InterfaceEthernet#switchport}
  */
  readonly switchport?: boolean | cdktf.IResolvable;
  /**
  * trusted device class
  *   - Choices: `cisco-phone`, `cts`, `ip-camera`, `media-player`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/interface_ethernet#trust_device InterfaceEthernet#trust_device}
  */
  readonly trustDevice?: string;
  /**
  * Interface type
  *   - Choices: `GigabitEthernet`, `TwoGigabitEthernet`, `FiveGigabitEthernet`, `TenGigabitEthernet`, `TwentyFiveGigE`, `FortyGigabitEthernet`, `HundredGigE`, `TwoHundredGigE`, `FourHundredGigE`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/interface_ethernet#type InterfaceEthernet#type}
  */
  readonly type: string;
  /**
  * Enable IP processing without an explicit address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/interface_ethernet#unnumbered InterfaceEthernet#unnumbered}
  */
  readonly unnumbered?: string;
  /**
  * Configure forwarding table
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/interface_ethernet#vrf_forwarding InterfaceEthernet#vrf_forwarding}
  */
  readonly vrfForwarding?: string;
}
export interface InterfaceEthernetDeviceTrackingAttachedPolicies {
  /**
  * Apply a policy for feature device-tracking
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/interface_ethernet#name InterfaceEthernet#name}
  */
  readonly name: string;
}

export function interfaceEthernetDeviceTrackingAttachedPoliciesToTerraform(struct?: InterfaceEthernetDeviceTrackingAttachedPolicies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function interfaceEthernetDeviceTrackingAttachedPoliciesToHclTerraform(struct?: InterfaceEthernetDeviceTrackingAttachedPolicies | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceEthernetDeviceTrackingAttachedPoliciesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InterfaceEthernetDeviceTrackingAttachedPolicies | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceEthernetDeviceTrackingAttachedPolicies | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
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
}

export class InterfaceEthernetDeviceTrackingAttachedPoliciesList extends cdktf.ComplexList {
  public internalValue? : InterfaceEthernetDeviceTrackingAttachedPolicies[] | cdktf.IResolvable

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
  public get(index: number): InterfaceEthernetDeviceTrackingAttachedPoliciesOutputReference {
    return new InterfaceEthernetDeviceTrackingAttachedPoliciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InterfaceEthernetEvpnEthernetSegments {
  /**
  * Ethernet segment local discriminator value
  *   - Range: `1`-`65535`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/interface_ethernet#es_value InterfaceEthernet#es_value}
  */
  readonly esValue: number;
}

export function interfaceEthernetEvpnEthernetSegmentsToTerraform(struct?: InterfaceEthernetEvpnEthernetSegments | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    es_value: cdktf.numberToTerraform(struct!.esValue),
  }
}


export function interfaceEthernetEvpnEthernetSegmentsToHclTerraform(struct?: InterfaceEthernetEvpnEthernetSegments | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    es_value: {
      value: cdktf.numberToHclTerraform(struct!.esValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceEthernetEvpnEthernetSegmentsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InterfaceEthernetEvpnEthernetSegments | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._esValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.esValue = this._esValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceEthernetEvpnEthernetSegments | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._esValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._esValue = value.esValue;
    }
  }

  // es_value - computed: false, optional: false, required: true
  private _esValue?: number; 
  public get esValue() {
    return this.getNumberAttribute('es_value');
  }
  public set esValue(value: number) {
    this._esValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get esValueInput() {
    return this._esValue;
  }
}

export class InterfaceEthernetEvpnEthernetSegmentsList extends cdktf.ComplexList {
  public internalValue? : InterfaceEthernetEvpnEthernetSegments[] | cdktf.IResolvable

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
  public get(index: number): InterfaceEthernetEvpnEthernetSegmentsOutputReference {
    return new InterfaceEthernetEvpnEthernetSegmentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InterfaceEthernetHelperAddresses {
  /**
  * IP destination address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/interface_ethernet#address InterfaceEthernet#address}
  */
  readonly address: string;
  /**
  * Helper-address is global
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/interface_ethernet#global InterfaceEthernet#global}
  */
  readonly global?: boolean | cdktf.IResolvable;
  /**
  * VRF name for helper-address (if different from interface VRF)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/interface_ethernet#vrf InterfaceEthernet#vrf}
  */
  readonly vrf?: string;
}

export function interfaceEthernetHelperAddressesToTerraform(struct?: InterfaceEthernetHelperAddresses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    global: cdktf.booleanToTerraform(struct!.global),
    vrf: cdktf.stringToTerraform(struct!.vrf),
  }
}


export function interfaceEthernetHelperAddressesToHclTerraform(struct?: InterfaceEthernetHelperAddresses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address: {
      value: cdktf.stringToHclTerraform(struct!.address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    global: {
      value: cdktf.booleanToHclTerraform(struct!.global),
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

export class InterfaceEthernetHelperAddressesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InterfaceEthernetHelperAddresses | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._global !== undefined) {
      hasAnyValues = true;
      internalValueResult.global = this._global;
    }
    if (this._vrf !== undefined) {
      hasAnyValues = true;
      internalValueResult.vrf = this._vrf;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceEthernetHelperAddresses | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._address = undefined;
      this._global = undefined;
      this._vrf = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._address = value.address;
      this._global = value.global;
      this._vrf = value.vrf;
    }
  }

  // address - computed: false, optional: false, required: true
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }

  // global - computed: false, optional: true, required: false
  private _global?: boolean | cdktf.IResolvable; 
  public get global() {
    return this.getBooleanAttribute('global');
  }
  public set global(value: boolean | cdktf.IResolvable) {
    this._global = value;
  }
  public resetGlobal() {
    this._global = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globalInput() {
    return this._global;
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
}

export class InterfaceEthernetHelperAddressesList extends cdktf.ComplexList {
  public internalValue? : InterfaceEthernetHelperAddresses[] | cdktf.IResolvable

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
  public get(index: number): InterfaceEthernetHelperAddressesOutputReference {
    return new InterfaceEthernetHelperAddressesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InterfaceEthernetIpFlowMonitors {
  /**
  * 
  *   - Choices: `input`, `output`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/interface_ethernet#direction InterfaceEthernet#direction}
  */
  readonly direction: string;
  /**
  * User defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/interface_ethernet#name InterfaceEthernet#name}
  */
  readonly name: string;
}

export function interfaceEthernetIpFlowMonitorsToTerraform(struct?: InterfaceEthernetIpFlowMonitors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    direction: cdktf.stringToTerraform(struct!.direction),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function interfaceEthernetIpFlowMonitorsToHclTerraform(struct?: InterfaceEthernetIpFlowMonitors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    direction: {
      value: cdktf.stringToHclTerraform(struct!.direction),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceEthernetIpFlowMonitorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InterfaceEthernetIpFlowMonitors | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._direction !== undefined) {
      hasAnyValues = true;
      internalValueResult.direction = this._direction;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceEthernetIpFlowMonitors | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._direction = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._direction = value.direction;
      this._name = value.name;
    }
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

export class InterfaceEthernetIpFlowMonitorsList extends cdktf.ComplexList {
  public internalValue? : InterfaceEthernetIpFlowMonitors[] | cdktf.IResolvable

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
  public get(index: number): InterfaceEthernetIpFlowMonitorsOutputReference {
    return new InterfaceEthernetIpFlowMonitorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InterfaceEthernetIpv6Addresses {
  /**
  * Use eui-64 interface identifier
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/interface_ethernet#eui_64 InterfaceEthernet#eui_64}
  */
  readonly eui64?: boolean | cdktf.IResolvable;
  /**
  * IPv6 prefix
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/interface_ethernet#prefix InterfaceEthernet#prefix}
  */
  readonly prefix: string;
}

export function interfaceEthernetIpv6AddressesToTerraform(struct?: InterfaceEthernetIpv6Addresses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    eui_64: cdktf.booleanToTerraform(struct!.eui64),
    prefix: cdktf.stringToTerraform(struct!.prefix),
  }
}


export function interfaceEthernetIpv6AddressesToHclTerraform(struct?: InterfaceEthernetIpv6Addresses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    eui_64: {
      value: cdktf.booleanToHclTerraform(struct!.eui64),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    prefix: {
      value: cdktf.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceEthernetIpv6AddressesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InterfaceEthernetIpv6Addresses | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._eui64 !== undefined) {
      hasAnyValues = true;
      internalValueResult.eui64 = this._eui64;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceEthernetIpv6Addresses | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._eui64 = undefined;
      this._prefix = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._eui64 = value.eui64;
      this._prefix = value.prefix;
    }
  }

  // eui_64 - computed: false, optional: true, required: false
  private _eui64?: boolean | cdktf.IResolvable; 
  public get eui64() {
    return this.getBooleanAttribute('eui_64');
  }
  public set eui64(value: boolean | cdktf.IResolvable) {
    this._eui64 = value;
  }
  public resetEui64() {
    this._eui64 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eui64Input() {
    return this._eui64;
  }

  // prefix - computed: false, optional: false, required: true
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }
}

export class InterfaceEthernetIpv6AddressesList extends cdktf.ComplexList {
  public internalValue? : InterfaceEthernetIpv6Addresses[] | cdktf.IResolvable

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
  public get(index: number): InterfaceEthernetIpv6AddressesOutputReference {
    return new InterfaceEthernetIpv6AddressesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InterfaceEthernetIpv6FlowMonitors {
  /**
  * 
  *   - Choices: `input`, `output`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/interface_ethernet#direction InterfaceEthernet#direction}
  */
  readonly direction: string;
  /**
  * User defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/interface_ethernet#name InterfaceEthernet#name}
  */
  readonly name: string;
}

export function interfaceEthernetIpv6FlowMonitorsToTerraform(struct?: InterfaceEthernetIpv6FlowMonitors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    direction: cdktf.stringToTerraform(struct!.direction),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function interfaceEthernetIpv6FlowMonitorsToHclTerraform(struct?: InterfaceEthernetIpv6FlowMonitors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    direction: {
      value: cdktf.stringToHclTerraform(struct!.direction),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceEthernetIpv6FlowMonitorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InterfaceEthernetIpv6FlowMonitors | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._direction !== undefined) {
      hasAnyValues = true;
      internalValueResult.direction = this._direction;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceEthernetIpv6FlowMonitors | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._direction = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._direction = value.direction;
      this._name = value.name;
    }
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

export class InterfaceEthernetIpv6FlowMonitorsList extends cdktf.ComplexList {
  public internalValue? : InterfaceEthernetIpv6FlowMonitors[] | cdktf.IResolvable

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
  public get(index: number): InterfaceEthernetIpv6FlowMonitorsOutputReference {
    return new InterfaceEthernetIpv6FlowMonitorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InterfaceEthernetIpv6LinkLocalAddresses {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/interface_ethernet#address InterfaceEthernet#address}
  */
  readonly address: string;
  /**
  * Use link-local address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/interface_ethernet#link_local InterfaceEthernet#link_local}
  */
  readonly linkLocal?: boolean | cdktf.IResolvable;
}

export function interfaceEthernetIpv6LinkLocalAddressesToTerraform(struct?: InterfaceEthernetIpv6LinkLocalAddresses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    link_local: cdktf.booleanToTerraform(struct!.linkLocal),
  }
}


export function interfaceEthernetIpv6LinkLocalAddressesToHclTerraform(struct?: InterfaceEthernetIpv6LinkLocalAddresses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address: {
      value: cdktf.stringToHclTerraform(struct!.address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    link_local: {
      value: cdktf.booleanToHclTerraform(struct!.linkLocal),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceEthernetIpv6LinkLocalAddressesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InterfaceEthernetIpv6LinkLocalAddresses | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._linkLocal !== undefined) {
      hasAnyValues = true;
      internalValueResult.linkLocal = this._linkLocal;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceEthernetIpv6LinkLocalAddresses | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._address = undefined;
      this._linkLocal = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._address = value.address;
      this._linkLocal = value.linkLocal;
    }
  }

  // address - computed: false, optional: false, required: true
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }

  // link_local - computed: false, optional: true, required: false
  private _linkLocal?: boolean | cdktf.IResolvable; 
  public get linkLocal() {
    return this.getBooleanAttribute('link_local');
  }
  public set linkLocal(value: boolean | cdktf.IResolvable) {
    this._linkLocal = value;
  }
  public resetLinkLocal() {
    this._linkLocal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linkLocalInput() {
    return this._linkLocal;
  }
}

export class InterfaceEthernetIpv6LinkLocalAddressesList extends cdktf.ComplexList {
  public internalValue? : InterfaceEthernetIpv6LinkLocalAddresses[] | cdktf.IResolvable

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
  public get(index: number): InterfaceEthernetIpv6LinkLocalAddressesOutputReference {
    return new InterfaceEthernetIpv6LinkLocalAddressesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InterfaceEthernetSourceTemplate {
  /**
  * merge option of binding
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/interface_ethernet#merge InterfaceEthernet#merge}
  */
  readonly merge?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/interface_ethernet#template_name InterfaceEthernet#template_name}
  */
  readonly templateName: string;
}

export function interfaceEthernetSourceTemplateToTerraform(struct?: InterfaceEthernetSourceTemplate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    merge: cdktf.booleanToTerraform(struct!.merge),
    template_name: cdktf.stringToTerraform(struct!.templateName),
  }
}


export function interfaceEthernetSourceTemplateToHclTerraform(struct?: InterfaceEthernetSourceTemplate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    merge: {
      value: cdktf.booleanToHclTerraform(struct!.merge),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    template_name: {
      value: cdktf.stringToHclTerraform(struct!.templateName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceEthernetSourceTemplateOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InterfaceEthernetSourceTemplate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._merge !== undefined) {
      hasAnyValues = true;
      internalValueResult.merge = this._merge;
    }
    if (this._templateName !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateName = this._templateName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceEthernetSourceTemplate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._merge = undefined;
      this._templateName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._merge = value.merge;
      this._templateName = value.templateName;
    }
  }

  // merge - computed: false, optional: true, required: false
  private _merge?: boolean | cdktf.IResolvable; 
  public get merge() {
    return this.getBooleanAttribute('merge');
  }
  public set merge(value: boolean | cdktf.IResolvable) {
    this._merge = value;
  }
  public resetMerge() {
    this._merge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mergeInput() {
    return this._merge;
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
}

export class InterfaceEthernetSourceTemplateList extends cdktf.ComplexList {
  public internalValue? : InterfaceEthernetSourceTemplate[] | cdktf.IResolvable

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
  public get(index: number): InterfaceEthernetSourceTemplateOutputReference {
    return new InterfaceEthernetSourceTemplateOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/interface_ethernet iosxe_interface_ethernet}
*/
export class InterfaceEthernet extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "iosxe_interface_ethernet";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a InterfaceEthernet resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the InterfaceEthernet to import
  * @param importFromId The id of the existing InterfaceEthernet that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/interface_ethernet#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the InterfaceEthernet to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "iosxe_interface_ethernet", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/interface_ethernet iosxe_interface_ethernet} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options InterfaceEthernetConfig
  */
  public constructor(scope: Construct, id: string, config: InterfaceEthernetConfig) {
    super(scope, id, {
      terraformResourceType: 'iosxe_interface_ethernet',
      terraformGeneratorMetadata: {
        providerName: 'iosxe',
        providerVersion: '0.10.0',
        providerVersionConstraint: '0.10.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._arpTimeout = config.arpTimeout;
    this._authenticationEventFailActionAuthorizeVlan = config.authenticationEventFailActionAuthorizeVlan;
    this._authenticationEventFailActionNextMethod = config.authenticationEventFailActionNextMethod;
    this._authenticationEventLinksecFailActionNextMethod = config.authenticationEventLinksecFailActionNextMethod;
    this._authenticationEventNoResponseActionAuthorizeVlan = config.authenticationEventNoResponseActionAuthorizeVlan;
    this._authenticationEventServerAliveActionReinitialize = config.authenticationEventServerAliveActionReinitialize;
    this._authenticationEventServerDeadActionAuthorize = config.authenticationEventServerDeadActionAuthorize;
    this._authenticationEventServerDeadActionAuthorizeVlan = config.authenticationEventServerDeadActionAuthorizeVlan;
    this._authenticationEventServerDeadActionAuthorizeVoice = config.authenticationEventServerDeadActionAuthorizeVoice;
    this._authenticationEventServerDeadActionReinitializeVlan = config.authenticationEventServerDeadActionReinitializeVlan;
    this._authenticationHostMode = config.authenticationHostMode;
    this._authenticationOrderDot1X = config.authenticationOrderDot1X;
    this._authenticationOrderDot1XMab = config.authenticationOrderDot1XMab;
    this._authenticationOrderDot1XWebauth = config.authenticationOrderDot1XWebauth;
    this._authenticationOrderMab = config.authenticationOrderMab;
    this._authenticationOrderMabDot1X = config.authenticationOrderMabDot1X;
    this._authenticationOrderMabWebauth = config.authenticationOrderMabWebauth;
    this._authenticationOrderWebauth = config.authenticationOrderWebauth;
    this._authenticationPeriodic = config.authenticationPeriodic;
    this._authenticationPortControl = config.authenticationPortControl;
    this._authenticationPriorityDot1X = config.authenticationPriorityDot1X;
    this._authenticationPriorityDot1XMab = config.authenticationPriorityDot1XMab;
    this._authenticationPriorityDot1XWebauth = config.authenticationPriorityDot1XWebauth;
    this._authenticationPriorityMab = config.authenticationPriorityMab;
    this._authenticationPriorityMabDot1X = config.authenticationPriorityMabDot1X;
    this._authenticationPriorityMabWebauth = config.authenticationPriorityMabWebauth;
    this._authenticationPriorityWebauth = config.authenticationPriorityWebauth;
    this._authenticationTimerReauthenticate = config.authenticationTimerReauthenticate;
    this._authenticationTimerReauthenticateServer = config.authenticationTimerReauthenticateServer;
    this._autoQosClassify = config.autoQosClassify;
    this._autoQosClassifyPolice = config.autoQosClassifyPolice;
    this._autoQosTrust = config.autoQosTrust;
    this._autoQosTrustCos = config.autoQosTrustCos;
    this._autoQosTrustDscp = config.autoQosTrustDscp;
    this._autoQosVideoCts = config.autoQosVideoCts;
    this._autoQosVideoIpCamera = config.autoQosVideoIpCamera;
    this._autoQosVideoMediaPlayer = config.autoQosVideoMediaPlayer;
    this._autoQosVoip = config.autoQosVoip;
    this._autoQosVoipCiscoPhone = config.autoQosVoipCiscoPhone;
    this._autoQosVoipCiscoSoftphone = config.autoQosVoipCiscoSoftphone;
    this._autoQosVoipTrust = config.autoQosVoipTrust;
    this._bandwidth = config.bandwidth;
    this._bfdEcho = config.bfdEcho;
    this._bfdEnable = config.bfdEnable;
    this._bfdInterval = config.bfdInterval;
    this._bfdIntervalMinRx = config.bfdIntervalMinRx;
    this._bfdIntervalMultiplier = config.bfdIntervalMultiplier;
    this._bfdLocalAddress = config.bfdLocalAddress;
    this._bfdTemplate = config.bfdTemplate;
    this._bpduguardDisable = config.bpduguardDisable;
    this._bpduguardEnable = config.bpduguardEnable;
    this._cdpEnable = config.cdpEnable;
    this._cdpTlvApp = config.cdpTlvApp;
    this._cdpTlvLocation = config.cdpTlvLocation;
    this._cdpTlvServerLocation = config.cdpTlvServerLocation;
    this._channelGroupMode = config.channelGroupMode;
    this._channelGroupNumber = config.channelGroupNumber;
    this._description = config.description;
    this._device = config.device;
    this._deviceTracking = config.deviceTracking;
    this._deviceTrackingAttachedPolicies.internalValue = config.deviceTrackingAttachedPolicies;
    this._dot1XMaxReauthReq = config.dot1XMaxReauthReq;
    this._dot1XMaxReq = config.dot1XMaxReq;
    this._dot1XPae = config.dot1XPae;
    this._dot1XTimeoutAuthPeriod = config.dot1XTimeoutAuthPeriod;
    this._dot1XTimeoutHeldPeriod = config.dot1XTimeoutHeldPeriod;
    this._dot1XTimeoutQuietPeriod = config.dot1XTimeoutQuietPeriod;
    this._dot1XTimeoutRatelimitPeriod = config.dot1XTimeoutRatelimitPeriod;
    this._dot1XTimeoutServerTimeout = config.dot1XTimeoutServerTimeout;
    this._dot1XTimeoutStartPeriod = config.dot1XTimeoutStartPeriod;
    this._dot1XTimeoutSuppTimeout = config.dot1XTimeoutSuppTimeout;
    this._dot1XTimeoutTxPeriod = config.dot1XTimeoutTxPeriod;
    this._encapsulationDot1QVlanId = config.encapsulationDot1QVlanId;
    this._evpnEthernetSegments.internalValue = config.evpnEthernetSegments;
    this._helperAddresses.internalValue = config.helperAddresses;
    this._ipAccessGroupIn = config.ipAccessGroupIn;
    this._ipAccessGroupInEnable = config.ipAccessGroupInEnable;
    this._ipAccessGroupOut = config.ipAccessGroupOut;
    this._ipAccessGroupOutEnable = config.ipAccessGroupOutEnable;
    this._ipArpInspectionLimitRate = config.ipArpInspectionLimitRate;
    this._ipArpInspectionTrust = config.ipArpInspectionTrust;
    this._ipDhcpRelayInformationOptionVpnId = config.ipDhcpRelayInformationOptionVpnId;
    this._ipDhcpRelaySourceInterface = config.ipDhcpRelaySourceInterface;
    this._ipDhcpSnoopingTrust = config.ipDhcpSnoopingTrust;
    this._ipFlowMonitors.internalValue = config.ipFlowMonitors;
    this._ipNatInside = config.ipNatInside;
    this._ipNatOutside = config.ipNatOutside;
    this._ipNbarProtocolDiscovery = config.ipNbarProtocolDiscovery;
    this._ipProxyArp = config.ipProxyArp;
    this._ipRedirects = config.ipRedirects;
    this._ipUnreachables = config.ipUnreachables;
    this._ipv4Address = config.ipv4Address;
    this._ipv4AddressMask = config.ipv4AddressMask;
    this._ipv6AddressAutoconfigDefault = config.ipv6AddressAutoconfigDefault;
    this._ipv6AddressDhcp = config.ipv6AddressDhcp;
    this._ipv6Addresses.internalValue = config.ipv6Addresses;
    this._ipv6Enable = config.ipv6Enable;
    this._ipv6FlowMonitors.internalValue = config.ipv6FlowMonitors;
    this._ipv6LinkLocalAddresses.internalValue = config.ipv6LinkLocalAddresses;
    this._ipv6Mtu = config.ipv6Mtu;
    this._ipv6NdRaSuppressAll = config.ipv6NdRaSuppressAll;
    this._loadInterval = config.loadInterval;
    this._loggingEventLinkStatusEnable = config.loggingEventLinkStatusEnable;
    this._mab = config.mab;
    this._mabEap = config.mabEap;
    this._mediaType = config.mediaType;
    this._mtu = config.mtu;
    this._name = config.name;
    this._negotiationAuto = config.negotiationAuto;
    this._servicePolicyInput = config.servicePolicyInput;
    this._servicePolicyOutput = config.servicePolicyOutput;
    this._shutdown = config.shutdown;
    this._snmpTrapLinkStatus = config.snmpTrapLinkStatus;
    this._sourceTemplate.internalValue = config.sourceTemplate;
    this._spanningTreeGuard = config.spanningTreeGuard;
    this._spanningTreeLinkType = config.spanningTreeLinkType;
    this._spanningTreePortfast = config.spanningTreePortfast;
    this._spanningTreePortfastDisable = config.spanningTreePortfastDisable;
    this._spanningTreePortfastEdge = config.spanningTreePortfastEdge;
    this._spanningTreePortfastTrunk = config.spanningTreePortfastTrunk;
    this._speed100 = config.speed100;
    this._speed1000 = config.speed1000;
    this._speed10000 = config.speed10000;
    this._speed100000 = config.speed100000;
    this._speed2500 = config.speed2500;
    this._speed25000 = config.speed25000;
    this._speed40000 = config.speed40000;
    this._speed5000 = config.speed5000;
    this._speedNonegotiate = config.speedNonegotiate;
    this._switchport = config.switchport;
    this._trustDevice = config.trustDevice;
    this._type = config.type;
    this._unnumbered = config.unnumbered;
    this._vrfForwarding = config.vrfForwarding;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arp_timeout - computed: false, optional: true, required: false
  private _arpTimeout?: number; 
  public get arpTimeout() {
    return this.getNumberAttribute('arp_timeout');
  }
  public set arpTimeout(value: number) {
    this._arpTimeout = value;
  }
  public resetArpTimeout() {
    this._arpTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arpTimeoutInput() {
    return this._arpTimeout;
  }

  // authentication_event_fail_action_authorize_vlan - computed: false, optional: true, required: false
  private _authenticationEventFailActionAuthorizeVlan?: number; 
  public get authenticationEventFailActionAuthorizeVlan() {
    return this.getNumberAttribute('authentication_event_fail_action_authorize_vlan');
  }
  public set authenticationEventFailActionAuthorizeVlan(value: number) {
    this._authenticationEventFailActionAuthorizeVlan = value;
  }
  public resetAuthenticationEventFailActionAuthorizeVlan() {
    this._authenticationEventFailActionAuthorizeVlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationEventFailActionAuthorizeVlanInput() {
    return this._authenticationEventFailActionAuthorizeVlan;
  }

  // authentication_event_fail_action_next_method - computed: false, optional: true, required: false
  private _authenticationEventFailActionNextMethod?: boolean | cdktf.IResolvable; 
  public get authenticationEventFailActionNextMethod() {
    return this.getBooleanAttribute('authentication_event_fail_action_next_method');
  }
  public set authenticationEventFailActionNextMethod(value: boolean | cdktf.IResolvable) {
    this._authenticationEventFailActionNextMethod = value;
  }
  public resetAuthenticationEventFailActionNextMethod() {
    this._authenticationEventFailActionNextMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationEventFailActionNextMethodInput() {
    return this._authenticationEventFailActionNextMethod;
  }

  // authentication_event_linksec_fail_action_next_method - computed: false, optional: true, required: false
  private _authenticationEventLinksecFailActionNextMethod?: boolean | cdktf.IResolvable; 
  public get authenticationEventLinksecFailActionNextMethod() {
    return this.getBooleanAttribute('authentication_event_linksec_fail_action_next_method');
  }
  public set authenticationEventLinksecFailActionNextMethod(value: boolean | cdktf.IResolvable) {
    this._authenticationEventLinksecFailActionNextMethod = value;
  }
  public resetAuthenticationEventLinksecFailActionNextMethod() {
    this._authenticationEventLinksecFailActionNextMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationEventLinksecFailActionNextMethodInput() {
    return this._authenticationEventLinksecFailActionNextMethod;
  }

  // authentication_event_no_response_action_authorize_vlan - computed: false, optional: true, required: false
  private _authenticationEventNoResponseActionAuthorizeVlan?: number; 
  public get authenticationEventNoResponseActionAuthorizeVlan() {
    return this.getNumberAttribute('authentication_event_no_response_action_authorize_vlan');
  }
  public set authenticationEventNoResponseActionAuthorizeVlan(value: number) {
    this._authenticationEventNoResponseActionAuthorizeVlan = value;
  }
  public resetAuthenticationEventNoResponseActionAuthorizeVlan() {
    this._authenticationEventNoResponseActionAuthorizeVlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationEventNoResponseActionAuthorizeVlanInput() {
    return this._authenticationEventNoResponseActionAuthorizeVlan;
  }

  // authentication_event_server_alive_action_reinitialize - computed: false, optional: true, required: false
  private _authenticationEventServerAliveActionReinitialize?: boolean | cdktf.IResolvable; 
  public get authenticationEventServerAliveActionReinitialize() {
    return this.getBooleanAttribute('authentication_event_server_alive_action_reinitialize');
  }
  public set authenticationEventServerAliveActionReinitialize(value: boolean | cdktf.IResolvable) {
    this._authenticationEventServerAliveActionReinitialize = value;
  }
  public resetAuthenticationEventServerAliveActionReinitialize() {
    this._authenticationEventServerAliveActionReinitialize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationEventServerAliveActionReinitializeInput() {
    return this._authenticationEventServerAliveActionReinitialize;
  }

  // authentication_event_server_dead_action_authorize - computed: false, optional: true, required: false
  private _authenticationEventServerDeadActionAuthorize?: boolean | cdktf.IResolvable; 
  public get authenticationEventServerDeadActionAuthorize() {
    return this.getBooleanAttribute('authentication_event_server_dead_action_authorize');
  }
  public set authenticationEventServerDeadActionAuthorize(value: boolean | cdktf.IResolvable) {
    this._authenticationEventServerDeadActionAuthorize = value;
  }
  public resetAuthenticationEventServerDeadActionAuthorize() {
    this._authenticationEventServerDeadActionAuthorize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationEventServerDeadActionAuthorizeInput() {
    return this._authenticationEventServerDeadActionAuthorize;
  }

  // authentication_event_server_dead_action_authorize_vlan - computed: false, optional: true, required: false
  private _authenticationEventServerDeadActionAuthorizeVlan?: number; 
  public get authenticationEventServerDeadActionAuthorizeVlan() {
    return this.getNumberAttribute('authentication_event_server_dead_action_authorize_vlan');
  }
  public set authenticationEventServerDeadActionAuthorizeVlan(value: number) {
    this._authenticationEventServerDeadActionAuthorizeVlan = value;
  }
  public resetAuthenticationEventServerDeadActionAuthorizeVlan() {
    this._authenticationEventServerDeadActionAuthorizeVlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationEventServerDeadActionAuthorizeVlanInput() {
    return this._authenticationEventServerDeadActionAuthorizeVlan;
  }

  // authentication_event_server_dead_action_authorize_voice - computed: false, optional: true, required: false
  private _authenticationEventServerDeadActionAuthorizeVoice?: boolean | cdktf.IResolvable; 
  public get authenticationEventServerDeadActionAuthorizeVoice() {
    return this.getBooleanAttribute('authentication_event_server_dead_action_authorize_voice');
  }
  public set authenticationEventServerDeadActionAuthorizeVoice(value: boolean | cdktf.IResolvable) {
    this._authenticationEventServerDeadActionAuthorizeVoice = value;
  }
  public resetAuthenticationEventServerDeadActionAuthorizeVoice() {
    this._authenticationEventServerDeadActionAuthorizeVoice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationEventServerDeadActionAuthorizeVoiceInput() {
    return this._authenticationEventServerDeadActionAuthorizeVoice;
  }

  // authentication_event_server_dead_action_reinitialize_vlan - computed: false, optional: true, required: false
  private _authenticationEventServerDeadActionReinitializeVlan?: number; 
  public get authenticationEventServerDeadActionReinitializeVlan() {
    return this.getNumberAttribute('authentication_event_server_dead_action_reinitialize_vlan');
  }
  public set authenticationEventServerDeadActionReinitializeVlan(value: number) {
    this._authenticationEventServerDeadActionReinitializeVlan = value;
  }
  public resetAuthenticationEventServerDeadActionReinitializeVlan() {
    this._authenticationEventServerDeadActionReinitializeVlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationEventServerDeadActionReinitializeVlanInput() {
    return this._authenticationEventServerDeadActionReinitializeVlan;
  }

  // authentication_host_mode - computed: false, optional: true, required: false
  private _authenticationHostMode?: string; 
  public get authenticationHostMode() {
    return this.getStringAttribute('authentication_host_mode');
  }
  public set authenticationHostMode(value: string) {
    this._authenticationHostMode = value;
  }
  public resetAuthenticationHostMode() {
    this._authenticationHostMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationHostModeInput() {
    return this._authenticationHostMode;
  }

  // authentication_order_dot1x - computed: false, optional: true, required: false
  private _authenticationOrderDot1X?: boolean | cdktf.IResolvable; 
  public get authenticationOrderDot1X() {
    return this.getBooleanAttribute('authentication_order_dot1x');
  }
  public set authenticationOrderDot1X(value: boolean | cdktf.IResolvable) {
    this._authenticationOrderDot1X = value;
  }
  public resetAuthenticationOrderDot1X() {
    this._authenticationOrderDot1X = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationOrderDot1XInput() {
    return this._authenticationOrderDot1X;
  }

  // authentication_order_dot1x_mab - computed: false, optional: true, required: false
  private _authenticationOrderDot1XMab?: boolean | cdktf.IResolvable; 
  public get authenticationOrderDot1XMab() {
    return this.getBooleanAttribute('authentication_order_dot1x_mab');
  }
  public set authenticationOrderDot1XMab(value: boolean | cdktf.IResolvable) {
    this._authenticationOrderDot1XMab = value;
  }
  public resetAuthenticationOrderDot1XMab() {
    this._authenticationOrderDot1XMab = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationOrderDot1XMabInput() {
    return this._authenticationOrderDot1XMab;
  }

  // authentication_order_dot1x_webauth - computed: false, optional: true, required: false
  private _authenticationOrderDot1XWebauth?: boolean | cdktf.IResolvable; 
  public get authenticationOrderDot1XWebauth() {
    return this.getBooleanAttribute('authentication_order_dot1x_webauth');
  }
  public set authenticationOrderDot1XWebauth(value: boolean | cdktf.IResolvable) {
    this._authenticationOrderDot1XWebauth = value;
  }
  public resetAuthenticationOrderDot1XWebauth() {
    this._authenticationOrderDot1XWebauth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationOrderDot1XWebauthInput() {
    return this._authenticationOrderDot1XWebauth;
  }

  // authentication_order_mab - computed: false, optional: true, required: false
  private _authenticationOrderMab?: boolean | cdktf.IResolvable; 
  public get authenticationOrderMab() {
    return this.getBooleanAttribute('authentication_order_mab');
  }
  public set authenticationOrderMab(value: boolean | cdktf.IResolvable) {
    this._authenticationOrderMab = value;
  }
  public resetAuthenticationOrderMab() {
    this._authenticationOrderMab = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationOrderMabInput() {
    return this._authenticationOrderMab;
  }

  // authentication_order_mab_dot1x - computed: false, optional: true, required: false
  private _authenticationOrderMabDot1X?: boolean | cdktf.IResolvable; 
  public get authenticationOrderMabDot1X() {
    return this.getBooleanAttribute('authentication_order_mab_dot1x');
  }
  public set authenticationOrderMabDot1X(value: boolean | cdktf.IResolvable) {
    this._authenticationOrderMabDot1X = value;
  }
  public resetAuthenticationOrderMabDot1X() {
    this._authenticationOrderMabDot1X = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationOrderMabDot1XInput() {
    return this._authenticationOrderMabDot1X;
  }

  // authentication_order_mab_webauth - computed: false, optional: true, required: false
  private _authenticationOrderMabWebauth?: boolean | cdktf.IResolvable; 
  public get authenticationOrderMabWebauth() {
    return this.getBooleanAttribute('authentication_order_mab_webauth');
  }
  public set authenticationOrderMabWebauth(value: boolean | cdktf.IResolvable) {
    this._authenticationOrderMabWebauth = value;
  }
  public resetAuthenticationOrderMabWebauth() {
    this._authenticationOrderMabWebauth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationOrderMabWebauthInput() {
    return this._authenticationOrderMabWebauth;
  }

  // authentication_order_webauth - computed: false, optional: true, required: false
  private _authenticationOrderWebauth?: boolean | cdktf.IResolvable; 
  public get authenticationOrderWebauth() {
    return this.getBooleanAttribute('authentication_order_webauth');
  }
  public set authenticationOrderWebauth(value: boolean | cdktf.IResolvable) {
    this._authenticationOrderWebauth = value;
  }
  public resetAuthenticationOrderWebauth() {
    this._authenticationOrderWebauth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationOrderWebauthInput() {
    return this._authenticationOrderWebauth;
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

  // authentication_port_control - computed: false, optional: true, required: false
  private _authenticationPortControl?: string; 
  public get authenticationPortControl() {
    return this.getStringAttribute('authentication_port_control');
  }
  public set authenticationPortControl(value: string) {
    this._authenticationPortControl = value;
  }
  public resetAuthenticationPortControl() {
    this._authenticationPortControl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationPortControlInput() {
    return this._authenticationPortControl;
  }

  // authentication_priority_dot1x - computed: false, optional: true, required: false
  private _authenticationPriorityDot1X?: boolean | cdktf.IResolvable; 
  public get authenticationPriorityDot1X() {
    return this.getBooleanAttribute('authentication_priority_dot1x');
  }
  public set authenticationPriorityDot1X(value: boolean | cdktf.IResolvable) {
    this._authenticationPriorityDot1X = value;
  }
  public resetAuthenticationPriorityDot1X() {
    this._authenticationPriorityDot1X = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationPriorityDot1XInput() {
    return this._authenticationPriorityDot1X;
  }

  // authentication_priority_dot1x_mab - computed: false, optional: true, required: false
  private _authenticationPriorityDot1XMab?: boolean | cdktf.IResolvable; 
  public get authenticationPriorityDot1XMab() {
    return this.getBooleanAttribute('authentication_priority_dot1x_mab');
  }
  public set authenticationPriorityDot1XMab(value: boolean | cdktf.IResolvable) {
    this._authenticationPriorityDot1XMab = value;
  }
  public resetAuthenticationPriorityDot1XMab() {
    this._authenticationPriorityDot1XMab = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationPriorityDot1XMabInput() {
    return this._authenticationPriorityDot1XMab;
  }

  // authentication_priority_dot1x_webauth - computed: false, optional: true, required: false
  private _authenticationPriorityDot1XWebauth?: boolean | cdktf.IResolvable; 
  public get authenticationPriorityDot1XWebauth() {
    return this.getBooleanAttribute('authentication_priority_dot1x_webauth');
  }
  public set authenticationPriorityDot1XWebauth(value: boolean | cdktf.IResolvable) {
    this._authenticationPriorityDot1XWebauth = value;
  }
  public resetAuthenticationPriorityDot1XWebauth() {
    this._authenticationPriorityDot1XWebauth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationPriorityDot1XWebauthInput() {
    return this._authenticationPriorityDot1XWebauth;
  }

  // authentication_priority_mab - computed: false, optional: true, required: false
  private _authenticationPriorityMab?: boolean | cdktf.IResolvable; 
  public get authenticationPriorityMab() {
    return this.getBooleanAttribute('authentication_priority_mab');
  }
  public set authenticationPriorityMab(value: boolean | cdktf.IResolvable) {
    this._authenticationPriorityMab = value;
  }
  public resetAuthenticationPriorityMab() {
    this._authenticationPriorityMab = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationPriorityMabInput() {
    return this._authenticationPriorityMab;
  }

  // authentication_priority_mab_dot1x - computed: false, optional: true, required: false
  private _authenticationPriorityMabDot1X?: boolean | cdktf.IResolvable; 
  public get authenticationPriorityMabDot1X() {
    return this.getBooleanAttribute('authentication_priority_mab_dot1x');
  }
  public set authenticationPriorityMabDot1X(value: boolean | cdktf.IResolvable) {
    this._authenticationPriorityMabDot1X = value;
  }
  public resetAuthenticationPriorityMabDot1X() {
    this._authenticationPriorityMabDot1X = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationPriorityMabDot1XInput() {
    return this._authenticationPriorityMabDot1X;
  }

  // authentication_priority_mab_webauth - computed: false, optional: true, required: false
  private _authenticationPriorityMabWebauth?: boolean | cdktf.IResolvable; 
  public get authenticationPriorityMabWebauth() {
    return this.getBooleanAttribute('authentication_priority_mab_webauth');
  }
  public set authenticationPriorityMabWebauth(value: boolean | cdktf.IResolvable) {
    this._authenticationPriorityMabWebauth = value;
  }
  public resetAuthenticationPriorityMabWebauth() {
    this._authenticationPriorityMabWebauth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationPriorityMabWebauthInput() {
    return this._authenticationPriorityMabWebauth;
  }

  // authentication_priority_webauth - computed: false, optional: true, required: false
  private _authenticationPriorityWebauth?: boolean | cdktf.IResolvable; 
  public get authenticationPriorityWebauth() {
    return this.getBooleanAttribute('authentication_priority_webauth');
  }
  public set authenticationPriorityWebauth(value: boolean | cdktf.IResolvable) {
    this._authenticationPriorityWebauth = value;
  }
  public resetAuthenticationPriorityWebauth() {
    this._authenticationPriorityWebauth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationPriorityWebauthInput() {
    return this._authenticationPriorityWebauth;
  }

  // authentication_timer_reauthenticate - computed: false, optional: true, required: false
  private _authenticationTimerReauthenticate?: number; 
  public get authenticationTimerReauthenticate() {
    return this.getNumberAttribute('authentication_timer_reauthenticate');
  }
  public set authenticationTimerReauthenticate(value: number) {
    this._authenticationTimerReauthenticate = value;
  }
  public resetAuthenticationTimerReauthenticate() {
    this._authenticationTimerReauthenticate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationTimerReauthenticateInput() {
    return this._authenticationTimerReauthenticate;
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

  // auto_qos_classify - computed: false, optional: true, required: false
  private _autoQosClassify?: boolean | cdktf.IResolvable; 
  public get autoQosClassify() {
    return this.getBooleanAttribute('auto_qos_classify');
  }
  public set autoQosClassify(value: boolean | cdktf.IResolvable) {
    this._autoQosClassify = value;
  }
  public resetAutoQosClassify() {
    this._autoQosClassify = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoQosClassifyInput() {
    return this._autoQosClassify;
  }

  // auto_qos_classify_police - computed: false, optional: true, required: false
  private _autoQosClassifyPolice?: boolean | cdktf.IResolvable; 
  public get autoQosClassifyPolice() {
    return this.getBooleanAttribute('auto_qos_classify_police');
  }
  public set autoQosClassifyPolice(value: boolean | cdktf.IResolvable) {
    this._autoQosClassifyPolice = value;
  }
  public resetAutoQosClassifyPolice() {
    this._autoQosClassifyPolice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoQosClassifyPoliceInput() {
    return this._autoQosClassifyPolice;
  }

  // auto_qos_trust - computed: false, optional: true, required: false
  private _autoQosTrust?: boolean | cdktf.IResolvable; 
  public get autoQosTrust() {
    return this.getBooleanAttribute('auto_qos_trust');
  }
  public set autoQosTrust(value: boolean | cdktf.IResolvable) {
    this._autoQosTrust = value;
  }
  public resetAutoQosTrust() {
    this._autoQosTrust = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoQosTrustInput() {
    return this._autoQosTrust;
  }

  // auto_qos_trust_cos - computed: false, optional: true, required: false
  private _autoQosTrustCos?: boolean | cdktf.IResolvable; 
  public get autoQosTrustCos() {
    return this.getBooleanAttribute('auto_qos_trust_cos');
  }
  public set autoQosTrustCos(value: boolean | cdktf.IResolvable) {
    this._autoQosTrustCos = value;
  }
  public resetAutoQosTrustCos() {
    this._autoQosTrustCos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoQosTrustCosInput() {
    return this._autoQosTrustCos;
  }

  // auto_qos_trust_dscp - computed: false, optional: true, required: false
  private _autoQosTrustDscp?: boolean | cdktf.IResolvable; 
  public get autoQosTrustDscp() {
    return this.getBooleanAttribute('auto_qos_trust_dscp');
  }
  public set autoQosTrustDscp(value: boolean | cdktf.IResolvable) {
    this._autoQosTrustDscp = value;
  }
  public resetAutoQosTrustDscp() {
    this._autoQosTrustDscp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoQosTrustDscpInput() {
    return this._autoQosTrustDscp;
  }

  // auto_qos_video_cts - computed: false, optional: true, required: false
  private _autoQosVideoCts?: boolean | cdktf.IResolvable; 
  public get autoQosVideoCts() {
    return this.getBooleanAttribute('auto_qos_video_cts');
  }
  public set autoQosVideoCts(value: boolean | cdktf.IResolvable) {
    this._autoQosVideoCts = value;
  }
  public resetAutoQosVideoCts() {
    this._autoQosVideoCts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoQosVideoCtsInput() {
    return this._autoQosVideoCts;
  }

  // auto_qos_video_ip_camera - computed: false, optional: true, required: false
  private _autoQosVideoIpCamera?: boolean | cdktf.IResolvable; 
  public get autoQosVideoIpCamera() {
    return this.getBooleanAttribute('auto_qos_video_ip_camera');
  }
  public set autoQosVideoIpCamera(value: boolean | cdktf.IResolvable) {
    this._autoQosVideoIpCamera = value;
  }
  public resetAutoQosVideoIpCamera() {
    this._autoQosVideoIpCamera = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoQosVideoIpCameraInput() {
    return this._autoQosVideoIpCamera;
  }

  // auto_qos_video_media_player - computed: false, optional: true, required: false
  private _autoQosVideoMediaPlayer?: boolean | cdktf.IResolvable; 
  public get autoQosVideoMediaPlayer() {
    return this.getBooleanAttribute('auto_qos_video_media_player');
  }
  public set autoQosVideoMediaPlayer(value: boolean | cdktf.IResolvable) {
    this._autoQosVideoMediaPlayer = value;
  }
  public resetAutoQosVideoMediaPlayer() {
    this._autoQosVideoMediaPlayer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoQosVideoMediaPlayerInput() {
    return this._autoQosVideoMediaPlayer;
  }

  // auto_qos_voip - computed: false, optional: true, required: false
  private _autoQosVoip?: boolean | cdktf.IResolvable; 
  public get autoQosVoip() {
    return this.getBooleanAttribute('auto_qos_voip');
  }
  public set autoQosVoip(value: boolean | cdktf.IResolvable) {
    this._autoQosVoip = value;
  }
  public resetAutoQosVoip() {
    this._autoQosVoip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoQosVoipInput() {
    return this._autoQosVoip;
  }

  // auto_qos_voip_cisco_phone - computed: false, optional: true, required: false
  private _autoQosVoipCiscoPhone?: boolean | cdktf.IResolvable; 
  public get autoQosVoipCiscoPhone() {
    return this.getBooleanAttribute('auto_qos_voip_cisco_phone');
  }
  public set autoQosVoipCiscoPhone(value: boolean | cdktf.IResolvable) {
    this._autoQosVoipCiscoPhone = value;
  }
  public resetAutoQosVoipCiscoPhone() {
    this._autoQosVoipCiscoPhone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoQosVoipCiscoPhoneInput() {
    return this._autoQosVoipCiscoPhone;
  }

  // auto_qos_voip_cisco_softphone - computed: false, optional: true, required: false
  private _autoQosVoipCiscoSoftphone?: boolean | cdktf.IResolvable; 
  public get autoQosVoipCiscoSoftphone() {
    return this.getBooleanAttribute('auto_qos_voip_cisco_softphone');
  }
  public set autoQosVoipCiscoSoftphone(value: boolean | cdktf.IResolvable) {
    this._autoQosVoipCiscoSoftphone = value;
  }
  public resetAutoQosVoipCiscoSoftphone() {
    this._autoQosVoipCiscoSoftphone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoQosVoipCiscoSoftphoneInput() {
    return this._autoQosVoipCiscoSoftphone;
  }

  // auto_qos_voip_trust - computed: false, optional: true, required: false
  private _autoQosVoipTrust?: boolean | cdktf.IResolvable; 
  public get autoQosVoipTrust() {
    return this.getBooleanAttribute('auto_qos_voip_trust');
  }
  public set autoQosVoipTrust(value: boolean | cdktf.IResolvable) {
    this._autoQosVoipTrust = value;
  }
  public resetAutoQosVoipTrust() {
    this._autoQosVoipTrust = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoQosVoipTrustInput() {
    return this._autoQosVoipTrust;
  }

  // bandwidth - computed: false, optional: true, required: false
  private _bandwidth?: number; 
  public get bandwidth() {
    return this.getNumberAttribute('bandwidth');
  }
  public set bandwidth(value: number) {
    this._bandwidth = value;
  }
  public resetBandwidth() {
    this._bandwidth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bandwidthInput() {
    return this._bandwidth;
  }

  // bfd_echo - computed: false, optional: true, required: false
  private _bfdEcho?: boolean | cdktf.IResolvable; 
  public get bfdEcho() {
    return this.getBooleanAttribute('bfd_echo');
  }
  public set bfdEcho(value: boolean | cdktf.IResolvable) {
    this._bfdEcho = value;
  }
  public resetBfdEcho() {
    this._bfdEcho = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bfdEchoInput() {
    return this._bfdEcho;
  }

  // bfd_enable - computed: false, optional: true, required: false
  private _bfdEnable?: boolean | cdktf.IResolvable; 
  public get bfdEnable() {
    return this.getBooleanAttribute('bfd_enable');
  }
  public set bfdEnable(value: boolean | cdktf.IResolvable) {
    this._bfdEnable = value;
  }
  public resetBfdEnable() {
    this._bfdEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bfdEnableInput() {
    return this._bfdEnable;
  }

  // bfd_interval - computed: false, optional: true, required: false
  private _bfdInterval?: number; 
  public get bfdInterval() {
    return this.getNumberAttribute('bfd_interval');
  }
  public set bfdInterval(value: number) {
    this._bfdInterval = value;
  }
  public resetBfdInterval() {
    this._bfdInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bfdIntervalInput() {
    return this._bfdInterval;
  }

  // bfd_interval_min_rx - computed: false, optional: true, required: false
  private _bfdIntervalMinRx?: number; 
  public get bfdIntervalMinRx() {
    return this.getNumberAttribute('bfd_interval_min_rx');
  }
  public set bfdIntervalMinRx(value: number) {
    this._bfdIntervalMinRx = value;
  }
  public resetBfdIntervalMinRx() {
    this._bfdIntervalMinRx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bfdIntervalMinRxInput() {
    return this._bfdIntervalMinRx;
  }

  // bfd_interval_multiplier - computed: false, optional: true, required: false
  private _bfdIntervalMultiplier?: number; 
  public get bfdIntervalMultiplier() {
    return this.getNumberAttribute('bfd_interval_multiplier');
  }
  public set bfdIntervalMultiplier(value: number) {
    this._bfdIntervalMultiplier = value;
  }
  public resetBfdIntervalMultiplier() {
    this._bfdIntervalMultiplier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bfdIntervalMultiplierInput() {
    return this._bfdIntervalMultiplier;
  }

  // bfd_local_address - computed: false, optional: true, required: false
  private _bfdLocalAddress?: string; 
  public get bfdLocalAddress() {
    return this.getStringAttribute('bfd_local_address');
  }
  public set bfdLocalAddress(value: string) {
    this._bfdLocalAddress = value;
  }
  public resetBfdLocalAddress() {
    this._bfdLocalAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bfdLocalAddressInput() {
    return this._bfdLocalAddress;
  }

  // bfd_template - computed: false, optional: true, required: false
  private _bfdTemplate?: string; 
  public get bfdTemplate() {
    return this.getStringAttribute('bfd_template');
  }
  public set bfdTemplate(value: string) {
    this._bfdTemplate = value;
  }
  public resetBfdTemplate() {
    this._bfdTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bfdTemplateInput() {
    return this._bfdTemplate;
  }

  // bpduguard_disable - computed: false, optional: true, required: false
  private _bpduguardDisable?: boolean | cdktf.IResolvable; 
  public get bpduguardDisable() {
    return this.getBooleanAttribute('bpduguard_disable');
  }
  public set bpduguardDisable(value: boolean | cdktf.IResolvable) {
    this._bpduguardDisable = value;
  }
  public resetBpduguardDisable() {
    this._bpduguardDisable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bpduguardDisableInput() {
    return this._bpduguardDisable;
  }

  // bpduguard_enable - computed: false, optional: true, required: false
  private _bpduguardEnable?: boolean | cdktf.IResolvable; 
  public get bpduguardEnable() {
    return this.getBooleanAttribute('bpduguard_enable');
  }
  public set bpduguardEnable(value: boolean | cdktf.IResolvable) {
    this._bpduguardEnable = value;
  }
  public resetBpduguardEnable() {
    this._bpduguardEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bpduguardEnableInput() {
    return this._bpduguardEnable;
  }

  // cdp_enable - computed: false, optional: true, required: false
  private _cdpEnable?: boolean | cdktf.IResolvable; 
  public get cdpEnable() {
    return this.getBooleanAttribute('cdp_enable');
  }
  public set cdpEnable(value: boolean | cdktf.IResolvable) {
    this._cdpEnable = value;
  }
  public resetCdpEnable() {
    this._cdpEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cdpEnableInput() {
    return this._cdpEnable;
  }

  // cdp_tlv_app - computed: false, optional: true, required: false
  private _cdpTlvApp?: boolean | cdktf.IResolvable; 
  public get cdpTlvApp() {
    return this.getBooleanAttribute('cdp_tlv_app');
  }
  public set cdpTlvApp(value: boolean | cdktf.IResolvable) {
    this._cdpTlvApp = value;
  }
  public resetCdpTlvApp() {
    this._cdpTlvApp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cdpTlvAppInput() {
    return this._cdpTlvApp;
  }

  // cdp_tlv_location - computed: false, optional: true, required: false
  private _cdpTlvLocation?: boolean | cdktf.IResolvable; 
  public get cdpTlvLocation() {
    return this.getBooleanAttribute('cdp_tlv_location');
  }
  public set cdpTlvLocation(value: boolean | cdktf.IResolvable) {
    this._cdpTlvLocation = value;
  }
  public resetCdpTlvLocation() {
    this._cdpTlvLocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cdpTlvLocationInput() {
    return this._cdpTlvLocation;
  }

  // cdp_tlv_server_location - computed: false, optional: true, required: false
  private _cdpTlvServerLocation?: boolean | cdktf.IResolvable; 
  public get cdpTlvServerLocation() {
    return this.getBooleanAttribute('cdp_tlv_server_location');
  }
  public set cdpTlvServerLocation(value: boolean | cdktf.IResolvable) {
    this._cdpTlvServerLocation = value;
  }
  public resetCdpTlvServerLocation() {
    this._cdpTlvServerLocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cdpTlvServerLocationInput() {
    return this._cdpTlvServerLocation;
  }

  // channel_group_mode - computed: false, optional: true, required: false
  private _channelGroupMode?: string; 
  public get channelGroupMode() {
    return this.getStringAttribute('channel_group_mode');
  }
  public set channelGroupMode(value: string) {
    this._channelGroupMode = value;
  }
  public resetChannelGroupMode() {
    this._channelGroupMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get channelGroupModeInput() {
    return this._channelGroupMode;
  }

  // channel_group_number - computed: false, optional: true, required: false
  private _channelGroupNumber?: number; 
  public get channelGroupNumber() {
    return this.getNumberAttribute('channel_group_number');
  }
  public set channelGroupNumber(value: number) {
    this._channelGroupNumber = value;
  }
  public resetChannelGroupNumber() {
    this._channelGroupNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get channelGroupNumberInput() {
    return this._channelGroupNumber;
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

  // device_tracking_attached_policies - computed: false, optional: true, required: false
  private _deviceTrackingAttachedPolicies = new InterfaceEthernetDeviceTrackingAttachedPoliciesList(this, "device_tracking_attached_policies", false);
  public get deviceTrackingAttachedPolicies() {
    return this._deviceTrackingAttachedPolicies;
  }
  public putDeviceTrackingAttachedPolicies(value: InterfaceEthernetDeviceTrackingAttachedPolicies[] | cdktf.IResolvable) {
    this._deviceTrackingAttachedPolicies.internalValue = value;
  }
  public resetDeviceTrackingAttachedPolicies() {
    this._deviceTrackingAttachedPolicies.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceTrackingAttachedPoliciesInput() {
    return this._deviceTrackingAttachedPolicies.internalValue;
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

  // dot1x_timeout_auth_period - computed: false, optional: true, required: false
  private _dot1XTimeoutAuthPeriod?: number; 
  public get dot1XTimeoutAuthPeriod() {
    return this.getNumberAttribute('dot1x_timeout_auth_period');
  }
  public set dot1XTimeoutAuthPeriod(value: number) {
    this._dot1XTimeoutAuthPeriod = value;
  }
  public resetDot1XTimeoutAuthPeriod() {
    this._dot1XTimeoutAuthPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dot1XTimeoutAuthPeriodInput() {
    return this._dot1XTimeoutAuthPeriod;
  }

  // dot1x_timeout_held_period - computed: false, optional: true, required: false
  private _dot1XTimeoutHeldPeriod?: number; 
  public get dot1XTimeoutHeldPeriod() {
    return this.getNumberAttribute('dot1x_timeout_held_period');
  }
  public set dot1XTimeoutHeldPeriod(value: number) {
    this._dot1XTimeoutHeldPeriod = value;
  }
  public resetDot1XTimeoutHeldPeriod() {
    this._dot1XTimeoutHeldPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dot1XTimeoutHeldPeriodInput() {
    return this._dot1XTimeoutHeldPeriod;
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

  // dot1x_timeout_start_period - computed: false, optional: true, required: false
  private _dot1XTimeoutStartPeriod?: number; 
  public get dot1XTimeoutStartPeriod() {
    return this.getNumberAttribute('dot1x_timeout_start_period');
  }
  public set dot1XTimeoutStartPeriod(value: number) {
    this._dot1XTimeoutStartPeriod = value;
  }
  public resetDot1XTimeoutStartPeriod() {
    this._dot1XTimeoutStartPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dot1XTimeoutStartPeriodInput() {
    return this._dot1XTimeoutStartPeriod;
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

  // encapsulation_dot1q_vlan_id - computed: false, optional: true, required: false
  private _encapsulationDot1QVlanId?: number; 
  public get encapsulationDot1QVlanId() {
    return this.getNumberAttribute('encapsulation_dot1q_vlan_id');
  }
  public set encapsulationDot1QVlanId(value: number) {
    this._encapsulationDot1QVlanId = value;
  }
  public resetEncapsulationDot1QVlanId() {
    this._encapsulationDot1QVlanId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encapsulationDot1QVlanIdInput() {
    return this._encapsulationDot1QVlanId;
  }

  // evpn_ethernet_segments - computed: false, optional: true, required: false
  private _evpnEthernetSegments = new InterfaceEthernetEvpnEthernetSegmentsList(this, "evpn_ethernet_segments", false);
  public get evpnEthernetSegments() {
    return this._evpnEthernetSegments;
  }
  public putEvpnEthernetSegments(value: InterfaceEthernetEvpnEthernetSegments[] | cdktf.IResolvable) {
    this._evpnEthernetSegments.internalValue = value;
  }
  public resetEvpnEthernetSegments() {
    this._evpnEthernetSegments.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get evpnEthernetSegmentsInput() {
    return this._evpnEthernetSegments.internalValue;
  }

  // helper_addresses - computed: false, optional: true, required: false
  private _helperAddresses = new InterfaceEthernetHelperAddressesList(this, "helper_addresses", false);
  public get helperAddresses() {
    return this._helperAddresses;
  }
  public putHelperAddresses(value: InterfaceEthernetHelperAddresses[] | cdktf.IResolvable) {
    this._helperAddresses.internalValue = value;
  }
  public resetHelperAddresses() {
    this._helperAddresses.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get helperAddressesInput() {
    return this._helperAddresses.internalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ip_access_group_in - computed: false, optional: true, required: false
  private _ipAccessGroupIn?: string; 
  public get ipAccessGroupIn() {
    return this.getStringAttribute('ip_access_group_in');
  }
  public set ipAccessGroupIn(value: string) {
    this._ipAccessGroupIn = value;
  }
  public resetIpAccessGroupIn() {
    this._ipAccessGroupIn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAccessGroupInInput() {
    return this._ipAccessGroupIn;
  }

  // ip_access_group_in_enable - computed: false, optional: true, required: false
  private _ipAccessGroupInEnable?: boolean | cdktf.IResolvable; 
  public get ipAccessGroupInEnable() {
    return this.getBooleanAttribute('ip_access_group_in_enable');
  }
  public set ipAccessGroupInEnable(value: boolean | cdktf.IResolvable) {
    this._ipAccessGroupInEnable = value;
  }
  public resetIpAccessGroupInEnable() {
    this._ipAccessGroupInEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAccessGroupInEnableInput() {
    return this._ipAccessGroupInEnable;
  }

  // ip_access_group_out - computed: false, optional: true, required: false
  private _ipAccessGroupOut?: string; 
  public get ipAccessGroupOut() {
    return this.getStringAttribute('ip_access_group_out');
  }
  public set ipAccessGroupOut(value: string) {
    this._ipAccessGroupOut = value;
  }
  public resetIpAccessGroupOut() {
    this._ipAccessGroupOut = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAccessGroupOutInput() {
    return this._ipAccessGroupOut;
  }

  // ip_access_group_out_enable - computed: false, optional: true, required: false
  private _ipAccessGroupOutEnable?: boolean | cdktf.IResolvable; 
  public get ipAccessGroupOutEnable() {
    return this.getBooleanAttribute('ip_access_group_out_enable');
  }
  public set ipAccessGroupOutEnable(value: boolean | cdktf.IResolvable) {
    this._ipAccessGroupOutEnable = value;
  }
  public resetIpAccessGroupOutEnable() {
    this._ipAccessGroupOutEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAccessGroupOutEnableInput() {
    return this._ipAccessGroupOutEnable;
  }

  // ip_arp_inspection_limit_rate - computed: false, optional: true, required: false
  private _ipArpInspectionLimitRate?: number; 
  public get ipArpInspectionLimitRate() {
    return this.getNumberAttribute('ip_arp_inspection_limit_rate');
  }
  public set ipArpInspectionLimitRate(value: number) {
    this._ipArpInspectionLimitRate = value;
  }
  public resetIpArpInspectionLimitRate() {
    this._ipArpInspectionLimitRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipArpInspectionLimitRateInput() {
    return this._ipArpInspectionLimitRate;
  }

  // ip_arp_inspection_trust - computed: false, optional: true, required: false
  private _ipArpInspectionTrust?: boolean | cdktf.IResolvable; 
  public get ipArpInspectionTrust() {
    return this.getBooleanAttribute('ip_arp_inspection_trust');
  }
  public set ipArpInspectionTrust(value: boolean | cdktf.IResolvable) {
    this._ipArpInspectionTrust = value;
  }
  public resetIpArpInspectionTrust() {
    this._ipArpInspectionTrust = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipArpInspectionTrustInput() {
    return this._ipArpInspectionTrust;
  }

  // ip_dhcp_relay_information_option_vpn_id - computed: false, optional: true, required: false
  private _ipDhcpRelayInformationOptionVpnId?: boolean | cdktf.IResolvable; 
  public get ipDhcpRelayInformationOptionVpnId() {
    return this.getBooleanAttribute('ip_dhcp_relay_information_option_vpn_id');
  }
  public set ipDhcpRelayInformationOptionVpnId(value: boolean | cdktf.IResolvable) {
    this._ipDhcpRelayInformationOptionVpnId = value;
  }
  public resetIpDhcpRelayInformationOptionVpnId() {
    this._ipDhcpRelayInformationOptionVpnId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipDhcpRelayInformationOptionVpnIdInput() {
    return this._ipDhcpRelayInformationOptionVpnId;
  }

  // ip_dhcp_relay_source_interface - computed: false, optional: true, required: false
  private _ipDhcpRelaySourceInterface?: string; 
  public get ipDhcpRelaySourceInterface() {
    return this.getStringAttribute('ip_dhcp_relay_source_interface');
  }
  public set ipDhcpRelaySourceInterface(value: string) {
    this._ipDhcpRelaySourceInterface = value;
  }
  public resetIpDhcpRelaySourceInterface() {
    this._ipDhcpRelaySourceInterface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipDhcpRelaySourceInterfaceInput() {
    return this._ipDhcpRelaySourceInterface;
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

  // ip_flow_monitors - computed: false, optional: true, required: false
  private _ipFlowMonitors = new InterfaceEthernetIpFlowMonitorsList(this, "ip_flow_monitors", false);
  public get ipFlowMonitors() {
    return this._ipFlowMonitors;
  }
  public putIpFlowMonitors(value: InterfaceEthernetIpFlowMonitors[] | cdktf.IResolvable) {
    this._ipFlowMonitors.internalValue = value;
  }
  public resetIpFlowMonitors() {
    this._ipFlowMonitors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipFlowMonitorsInput() {
    return this._ipFlowMonitors.internalValue;
  }

  // ip_nat_inside - computed: false, optional: true, required: false
  private _ipNatInside?: boolean | cdktf.IResolvable; 
  public get ipNatInside() {
    return this.getBooleanAttribute('ip_nat_inside');
  }
  public set ipNatInside(value: boolean | cdktf.IResolvable) {
    this._ipNatInside = value;
  }
  public resetIpNatInside() {
    this._ipNatInside = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipNatInsideInput() {
    return this._ipNatInside;
  }

  // ip_nat_outside - computed: false, optional: true, required: false
  private _ipNatOutside?: boolean | cdktf.IResolvable; 
  public get ipNatOutside() {
    return this.getBooleanAttribute('ip_nat_outside');
  }
  public set ipNatOutside(value: boolean | cdktf.IResolvable) {
    this._ipNatOutside = value;
  }
  public resetIpNatOutside() {
    this._ipNatOutside = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipNatOutsideInput() {
    return this._ipNatOutside;
  }

  // ip_nbar_protocol_discovery - computed: false, optional: true, required: false
  private _ipNbarProtocolDiscovery?: boolean | cdktf.IResolvable; 
  public get ipNbarProtocolDiscovery() {
    return this.getBooleanAttribute('ip_nbar_protocol_discovery');
  }
  public set ipNbarProtocolDiscovery(value: boolean | cdktf.IResolvable) {
    this._ipNbarProtocolDiscovery = value;
  }
  public resetIpNbarProtocolDiscovery() {
    this._ipNbarProtocolDiscovery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipNbarProtocolDiscoveryInput() {
    return this._ipNbarProtocolDiscovery;
  }

  // ip_proxy_arp - computed: false, optional: true, required: false
  private _ipProxyArp?: boolean | cdktf.IResolvable; 
  public get ipProxyArp() {
    return this.getBooleanAttribute('ip_proxy_arp');
  }
  public set ipProxyArp(value: boolean | cdktf.IResolvable) {
    this._ipProxyArp = value;
  }
  public resetIpProxyArp() {
    this._ipProxyArp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipProxyArpInput() {
    return this._ipProxyArp;
  }

  // ip_redirects - computed: false, optional: true, required: false
  private _ipRedirects?: boolean | cdktf.IResolvable; 
  public get ipRedirects() {
    return this.getBooleanAttribute('ip_redirects');
  }
  public set ipRedirects(value: boolean | cdktf.IResolvable) {
    this._ipRedirects = value;
  }
  public resetIpRedirects() {
    this._ipRedirects = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipRedirectsInput() {
    return this._ipRedirects;
  }

  // ip_unreachables - computed: false, optional: true, required: false
  private _ipUnreachables?: boolean | cdktf.IResolvable; 
  public get ipUnreachables() {
    return this.getBooleanAttribute('ip_unreachables');
  }
  public set ipUnreachables(value: boolean | cdktf.IResolvable) {
    this._ipUnreachables = value;
  }
  public resetIpUnreachables() {
    this._ipUnreachables = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipUnreachablesInput() {
    return this._ipUnreachables;
  }

  // ipv4_address - computed: false, optional: true, required: false
  private _ipv4Address?: string; 
  public get ipv4Address() {
    return this.getStringAttribute('ipv4_address');
  }
  public set ipv4Address(value: string) {
    this._ipv4Address = value;
  }
  public resetIpv4Address() {
    this._ipv4Address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4AddressInput() {
    return this._ipv4Address;
  }

  // ipv4_address_mask - computed: false, optional: true, required: false
  private _ipv4AddressMask?: string; 
  public get ipv4AddressMask() {
    return this.getStringAttribute('ipv4_address_mask');
  }
  public set ipv4AddressMask(value: string) {
    this._ipv4AddressMask = value;
  }
  public resetIpv4AddressMask() {
    this._ipv4AddressMask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4AddressMaskInput() {
    return this._ipv4AddressMask;
  }

  // ipv6_address_autoconfig_default - computed: false, optional: true, required: false
  private _ipv6AddressAutoconfigDefault?: boolean | cdktf.IResolvable; 
  public get ipv6AddressAutoconfigDefault() {
    return this.getBooleanAttribute('ipv6_address_autoconfig_default');
  }
  public set ipv6AddressAutoconfigDefault(value: boolean | cdktf.IResolvable) {
    this._ipv6AddressAutoconfigDefault = value;
  }
  public resetIpv6AddressAutoconfigDefault() {
    this._ipv6AddressAutoconfigDefault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6AddressAutoconfigDefaultInput() {
    return this._ipv6AddressAutoconfigDefault;
  }

  // ipv6_address_dhcp - computed: false, optional: true, required: false
  private _ipv6AddressDhcp?: boolean | cdktf.IResolvable; 
  public get ipv6AddressDhcp() {
    return this.getBooleanAttribute('ipv6_address_dhcp');
  }
  public set ipv6AddressDhcp(value: boolean | cdktf.IResolvable) {
    this._ipv6AddressDhcp = value;
  }
  public resetIpv6AddressDhcp() {
    this._ipv6AddressDhcp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6AddressDhcpInput() {
    return this._ipv6AddressDhcp;
  }

  // ipv6_addresses - computed: false, optional: true, required: false
  private _ipv6Addresses = new InterfaceEthernetIpv6AddressesList(this, "ipv6_addresses", false);
  public get ipv6Addresses() {
    return this._ipv6Addresses;
  }
  public putIpv6Addresses(value: InterfaceEthernetIpv6Addresses[] | cdktf.IResolvable) {
    this._ipv6Addresses.internalValue = value;
  }
  public resetIpv6Addresses() {
    this._ipv6Addresses.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6AddressesInput() {
    return this._ipv6Addresses.internalValue;
  }

  // ipv6_enable - computed: false, optional: true, required: false
  private _ipv6Enable?: boolean | cdktf.IResolvable; 
  public get ipv6Enable() {
    return this.getBooleanAttribute('ipv6_enable');
  }
  public set ipv6Enable(value: boolean | cdktf.IResolvable) {
    this._ipv6Enable = value;
  }
  public resetIpv6Enable() {
    this._ipv6Enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6EnableInput() {
    return this._ipv6Enable;
  }

  // ipv6_flow_monitors - computed: false, optional: true, required: false
  private _ipv6FlowMonitors = new InterfaceEthernetIpv6FlowMonitorsList(this, "ipv6_flow_monitors", false);
  public get ipv6FlowMonitors() {
    return this._ipv6FlowMonitors;
  }
  public putIpv6FlowMonitors(value: InterfaceEthernetIpv6FlowMonitors[] | cdktf.IResolvable) {
    this._ipv6FlowMonitors.internalValue = value;
  }
  public resetIpv6FlowMonitors() {
    this._ipv6FlowMonitors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6FlowMonitorsInput() {
    return this._ipv6FlowMonitors.internalValue;
  }

  // ipv6_link_local_addresses - computed: false, optional: true, required: false
  private _ipv6LinkLocalAddresses = new InterfaceEthernetIpv6LinkLocalAddressesList(this, "ipv6_link_local_addresses", false);
  public get ipv6LinkLocalAddresses() {
    return this._ipv6LinkLocalAddresses;
  }
  public putIpv6LinkLocalAddresses(value: InterfaceEthernetIpv6LinkLocalAddresses[] | cdktf.IResolvable) {
    this._ipv6LinkLocalAddresses.internalValue = value;
  }
  public resetIpv6LinkLocalAddresses() {
    this._ipv6LinkLocalAddresses.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6LinkLocalAddressesInput() {
    return this._ipv6LinkLocalAddresses.internalValue;
  }

  // ipv6_mtu - computed: false, optional: true, required: false
  private _ipv6Mtu?: number; 
  public get ipv6Mtu() {
    return this.getNumberAttribute('ipv6_mtu');
  }
  public set ipv6Mtu(value: number) {
    this._ipv6Mtu = value;
  }
  public resetIpv6Mtu() {
    this._ipv6Mtu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6MtuInput() {
    return this._ipv6Mtu;
  }

  // ipv6_nd_ra_suppress_all - computed: false, optional: true, required: false
  private _ipv6NdRaSuppressAll?: boolean | cdktf.IResolvable; 
  public get ipv6NdRaSuppressAll() {
    return this.getBooleanAttribute('ipv6_nd_ra_suppress_all');
  }
  public set ipv6NdRaSuppressAll(value: boolean | cdktf.IResolvable) {
    this._ipv6NdRaSuppressAll = value;
  }
  public resetIpv6NdRaSuppressAll() {
    this._ipv6NdRaSuppressAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6NdRaSuppressAllInput() {
    return this._ipv6NdRaSuppressAll;
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

  // logging_event_link_status_enable - computed: false, optional: true, required: false
  private _loggingEventLinkStatusEnable?: boolean | cdktf.IResolvable; 
  public get loggingEventLinkStatusEnable() {
    return this.getBooleanAttribute('logging_event_link_status_enable');
  }
  public set loggingEventLinkStatusEnable(value: boolean | cdktf.IResolvable) {
    this._loggingEventLinkStatusEnable = value;
  }
  public resetLoggingEventLinkStatusEnable() {
    this._loggingEventLinkStatusEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingEventLinkStatusEnableInput() {
    return this._loggingEventLinkStatusEnable;
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

  // media_type - computed: false, optional: true, required: false
  private _mediaType?: string; 
  public get mediaType() {
    return this.getStringAttribute('media_type');
  }
  public set mediaType(value: string) {
    this._mediaType = value;
  }
  public resetMediaType() {
    this._mediaType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mediaTypeInput() {
    return this._mediaType;
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

  // negotiation_auto - computed: false, optional: true, required: false
  private _negotiationAuto?: boolean | cdktf.IResolvable; 
  public get negotiationAuto() {
    return this.getBooleanAttribute('negotiation_auto');
  }
  public set negotiationAuto(value: boolean | cdktf.IResolvable) {
    this._negotiationAuto = value;
  }
  public resetNegotiationAuto() {
    this._negotiationAuto = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negotiationAutoInput() {
    return this._negotiationAuto;
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

  // shutdown - computed: false, optional: true, required: false
  private _shutdown?: boolean | cdktf.IResolvable; 
  public get shutdown() {
    return this.getBooleanAttribute('shutdown');
  }
  public set shutdown(value: boolean | cdktf.IResolvable) {
    this._shutdown = value;
  }
  public resetShutdown() {
    this._shutdown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shutdownInput() {
    return this._shutdown;
  }

  // snmp_trap_link_status - computed: false, optional: true, required: false
  private _snmpTrapLinkStatus?: boolean | cdktf.IResolvable; 
  public get snmpTrapLinkStatus() {
    return this.getBooleanAttribute('snmp_trap_link_status');
  }
  public set snmpTrapLinkStatus(value: boolean | cdktf.IResolvable) {
    this._snmpTrapLinkStatus = value;
  }
  public resetSnmpTrapLinkStatus() {
    this._snmpTrapLinkStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snmpTrapLinkStatusInput() {
    return this._snmpTrapLinkStatus;
  }

  // source_template - computed: false, optional: true, required: false
  private _sourceTemplate = new InterfaceEthernetSourceTemplateList(this, "source_template", false);
  public get sourceTemplate() {
    return this._sourceTemplate;
  }
  public putSourceTemplate(value: InterfaceEthernetSourceTemplate[] | cdktf.IResolvable) {
    this._sourceTemplate.internalValue = value;
  }
  public resetSourceTemplate() {
    this._sourceTemplate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceTemplateInput() {
    return this._sourceTemplate.internalValue;
  }

  // spanning_tree_guard - computed: false, optional: true, required: false
  private _spanningTreeGuard?: string; 
  public get spanningTreeGuard() {
    return this.getStringAttribute('spanning_tree_guard');
  }
  public set spanningTreeGuard(value: string) {
    this._spanningTreeGuard = value;
  }
  public resetSpanningTreeGuard() {
    this._spanningTreeGuard = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spanningTreeGuardInput() {
    return this._spanningTreeGuard;
  }

  // spanning_tree_link_type - computed: false, optional: true, required: false
  private _spanningTreeLinkType?: string; 
  public get spanningTreeLinkType() {
    return this.getStringAttribute('spanning_tree_link_type');
  }
  public set spanningTreeLinkType(value: string) {
    this._spanningTreeLinkType = value;
  }
  public resetSpanningTreeLinkType() {
    this._spanningTreeLinkType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spanningTreeLinkTypeInput() {
    return this._spanningTreeLinkType;
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

  // spanning_tree_portfast_trunk - computed: false, optional: true, required: false
  private _spanningTreePortfastTrunk?: boolean | cdktf.IResolvable; 
  public get spanningTreePortfastTrunk() {
    return this.getBooleanAttribute('spanning_tree_portfast_trunk');
  }
  public set spanningTreePortfastTrunk(value: boolean | cdktf.IResolvable) {
    this._spanningTreePortfastTrunk = value;
  }
  public resetSpanningTreePortfastTrunk() {
    this._spanningTreePortfastTrunk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spanningTreePortfastTrunkInput() {
    return this._spanningTreePortfastTrunk;
  }

  // speed_100 - computed: false, optional: true, required: false
  private _speed100?: boolean | cdktf.IResolvable; 
  public get speed100() {
    return this.getBooleanAttribute('speed_100');
  }
  public set speed100(value: boolean | cdktf.IResolvable) {
    this._speed100 = value;
  }
  public resetSpeed100() {
    this._speed100 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get speed100Input() {
    return this._speed100;
  }

  // speed_1000 - computed: false, optional: true, required: false
  private _speed1000?: boolean | cdktf.IResolvable; 
  public get speed1000() {
    return this.getBooleanAttribute('speed_1000');
  }
  public set speed1000(value: boolean | cdktf.IResolvable) {
    this._speed1000 = value;
  }
  public resetSpeed1000() {
    this._speed1000 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get speed1000Input() {
    return this._speed1000;
  }

  // speed_10000 - computed: false, optional: true, required: false
  private _speed10000?: boolean | cdktf.IResolvable; 
  public get speed10000() {
    return this.getBooleanAttribute('speed_10000');
  }
  public set speed10000(value: boolean | cdktf.IResolvable) {
    this._speed10000 = value;
  }
  public resetSpeed10000() {
    this._speed10000 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get speed10000Input() {
    return this._speed10000;
  }

  // speed_100000 - computed: false, optional: true, required: false
  private _speed100000?: boolean | cdktf.IResolvable; 
  public get speed100000() {
    return this.getBooleanAttribute('speed_100000');
  }
  public set speed100000(value: boolean | cdktf.IResolvable) {
    this._speed100000 = value;
  }
  public resetSpeed100000() {
    this._speed100000 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get speed100000Input() {
    return this._speed100000;
  }

  // speed_2500 - computed: false, optional: true, required: false
  private _speed2500?: boolean | cdktf.IResolvable; 
  public get speed2500() {
    return this.getBooleanAttribute('speed_2500');
  }
  public set speed2500(value: boolean | cdktf.IResolvable) {
    this._speed2500 = value;
  }
  public resetSpeed2500() {
    this._speed2500 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get speed2500Input() {
    return this._speed2500;
  }

  // speed_25000 - computed: false, optional: true, required: false
  private _speed25000?: boolean | cdktf.IResolvable; 
  public get speed25000() {
    return this.getBooleanAttribute('speed_25000');
  }
  public set speed25000(value: boolean | cdktf.IResolvable) {
    this._speed25000 = value;
  }
  public resetSpeed25000() {
    this._speed25000 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get speed25000Input() {
    return this._speed25000;
  }

  // speed_40000 - computed: false, optional: true, required: false
  private _speed40000?: boolean | cdktf.IResolvable; 
  public get speed40000() {
    return this.getBooleanAttribute('speed_40000');
  }
  public set speed40000(value: boolean | cdktf.IResolvable) {
    this._speed40000 = value;
  }
  public resetSpeed40000() {
    this._speed40000 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get speed40000Input() {
    return this._speed40000;
  }

  // speed_5000 - computed: false, optional: true, required: false
  private _speed5000?: boolean | cdktf.IResolvable; 
  public get speed5000() {
    return this.getBooleanAttribute('speed_5000');
  }
  public set speed5000(value: boolean | cdktf.IResolvable) {
    this._speed5000 = value;
  }
  public resetSpeed5000() {
    this._speed5000 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get speed5000Input() {
    return this._speed5000;
  }

  // speed_nonegotiate - computed: false, optional: true, required: false
  private _speedNonegotiate?: boolean | cdktf.IResolvable; 
  public get speedNonegotiate() {
    return this.getBooleanAttribute('speed_nonegotiate');
  }
  public set speedNonegotiate(value: boolean | cdktf.IResolvable) {
    this._speedNonegotiate = value;
  }
  public resetSpeedNonegotiate() {
    this._speedNonegotiate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get speedNonegotiateInput() {
    return this._speedNonegotiate;
  }

  // switchport - computed: false, optional: true, required: false
  private _switchport?: boolean | cdktf.IResolvable; 
  public get switchport() {
    return this.getBooleanAttribute('switchport');
  }
  public set switchport(value: boolean | cdktf.IResolvable) {
    this._switchport = value;
  }
  public resetSwitchport() {
    this._switchport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get switchportInput() {
    return this._switchport;
  }

  // trust_device - computed: false, optional: true, required: false
  private _trustDevice?: string; 
  public get trustDevice() {
    return this.getStringAttribute('trust_device');
  }
  public set trustDevice(value: string) {
    this._trustDevice = value;
  }
  public resetTrustDevice() {
    this._trustDevice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustDeviceInput() {
    return this._trustDevice;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // unnumbered - computed: false, optional: true, required: false
  private _unnumbered?: string; 
  public get unnumbered() {
    return this.getStringAttribute('unnumbered');
  }
  public set unnumbered(value: string) {
    this._unnumbered = value;
  }
  public resetUnnumbered() {
    this._unnumbered = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unnumberedInput() {
    return this._unnumbered;
  }

  // vrf_forwarding - computed: false, optional: true, required: false
  private _vrfForwarding?: string; 
  public get vrfForwarding() {
    return this.getStringAttribute('vrf_forwarding');
  }
  public set vrfForwarding(value: string) {
    this._vrfForwarding = value;
  }
  public resetVrfForwarding() {
    this._vrfForwarding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vrfForwardingInput() {
    return this._vrfForwarding;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      arp_timeout: cdktf.numberToTerraform(this._arpTimeout),
      authentication_event_fail_action_authorize_vlan: cdktf.numberToTerraform(this._authenticationEventFailActionAuthorizeVlan),
      authentication_event_fail_action_next_method: cdktf.booleanToTerraform(this._authenticationEventFailActionNextMethod),
      authentication_event_linksec_fail_action_next_method: cdktf.booleanToTerraform(this._authenticationEventLinksecFailActionNextMethod),
      authentication_event_no_response_action_authorize_vlan: cdktf.numberToTerraform(this._authenticationEventNoResponseActionAuthorizeVlan),
      authentication_event_server_alive_action_reinitialize: cdktf.booleanToTerraform(this._authenticationEventServerAliveActionReinitialize),
      authentication_event_server_dead_action_authorize: cdktf.booleanToTerraform(this._authenticationEventServerDeadActionAuthorize),
      authentication_event_server_dead_action_authorize_vlan: cdktf.numberToTerraform(this._authenticationEventServerDeadActionAuthorizeVlan),
      authentication_event_server_dead_action_authorize_voice: cdktf.booleanToTerraform(this._authenticationEventServerDeadActionAuthorizeVoice),
      authentication_event_server_dead_action_reinitialize_vlan: cdktf.numberToTerraform(this._authenticationEventServerDeadActionReinitializeVlan),
      authentication_host_mode: cdktf.stringToTerraform(this._authenticationHostMode),
      authentication_order_dot1x: cdktf.booleanToTerraform(this._authenticationOrderDot1X),
      authentication_order_dot1x_mab: cdktf.booleanToTerraform(this._authenticationOrderDot1XMab),
      authentication_order_dot1x_webauth: cdktf.booleanToTerraform(this._authenticationOrderDot1XWebauth),
      authentication_order_mab: cdktf.booleanToTerraform(this._authenticationOrderMab),
      authentication_order_mab_dot1x: cdktf.booleanToTerraform(this._authenticationOrderMabDot1X),
      authentication_order_mab_webauth: cdktf.booleanToTerraform(this._authenticationOrderMabWebauth),
      authentication_order_webauth: cdktf.booleanToTerraform(this._authenticationOrderWebauth),
      authentication_periodic: cdktf.booleanToTerraform(this._authenticationPeriodic),
      authentication_port_control: cdktf.stringToTerraform(this._authenticationPortControl),
      authentication_priority_dot1x: cdktf.booleanToTerraform(this._authenticationPriorityDot1X),
      authentication_priority_dot1x_mab: cdktf.booleanToTerraform(this._authenticationPriorityDot1XMab),
      authentication_priority_dot1x_webauth: cdktf.booleanToTerraform(this._authenticationPriorityDot1XWebauth),
      authentication_priority_mab: cdktf.booleanToTerraform(this._authenticationPriorityMab),
      authentication_priority_mab_dot1x: cdktf.booleanToTerraform(this._authenticationPriorityMabDot1X),
      authentication_priority_mab_webauth: cdktf.booleanToTerraform(this._authenticationPriorityMabWebauth),
      authentication_priority_webauth: cdktf.booleanToTerraform(this._authenticationPriorityWebauth),
      authentication_timer_reauthenticate: cdktf.numberToTerraform(this._authenticationTimerReauthenticate),
      authentication_timer_reauthenticate_server: cdktf.booleanToTerraform(this._authenticationTimerReauthenticateServer),
      auto_qos_classify: cdktf.booleanToTerraform(this._autoQosClassify),
      auto_qos_classify_police: cdktf.booleanToTerraform(this._autoQosClassifyPolice),
      auto_qos_trust: cdktf.booleanToTerraform(this._autoQosTrust),
      auto_qos_trust_cos: cdktf.booleanToTerraform(this._autoQosTrustCos),
      auto_qos_trust_dscp: cdktf.booleanToTerraform(this._autoQosTrustDscp),
      auto_qos_video_cts: cdktf.booleanToTerraform(this._autoQosVideoCts),
      auto_qos_video_ip_camera: cdktf.booleanToTerraform(this._autoQosVideoIpCamera),
      auto_qos_video_media_player: cdktf.booleanToTerraform(this._autoQosVideoMediaPlayer),
      auto_qos_voip: cdktf.booleanToTerraform(this._autoQosVoip),
      auto_qos_voip_cisco_phone: cdktf.booleanToTerraform(this._autoQosVoipCiscoPhone),
      auto_qos_voip_cisco_softphone: cdktf.booleanToTerraform(this._autoQosVoipCiscoSoftphone),
      auto_qos_voip_trust: cdktf.booleanToTerraform(this._autoQosVoipTrust),
      bandwidth: cdktf.numberToTerraform(this._bandwidth),
      bfd_echo: cdktf.booleanToTerraform(this._bfdEcho),
      bfd_enable: cdktf.booleanToTerraform(this._bfdEnable),
      bfd_interval: cdktf.numberToTerraform(this._bfdInterval),
      bfd_interval_min_rx: cdktf.numberToTerraform(this._bfdIntervalMinRx),
      bfd_interval_multiplier: cdktf.numberToTerraform(this._bfdIntervalMultiplier),
      bfd_local_address: cdktf.stringToTerraform(this._bfdLocalAddress),
      bfd_template: cdktf.stringToTerraform(this._bfdTemplate),
      bpduguard_disable: cdktf.booleanToTerraform(this._bpduguardDisable),
      bpduguard_enable: cdktf.booleanToTerraform(this._bpduguardEnable),
      cdp_enable: cdktf.booleanToTerraform(this._cdpEnable),
      cdp_tlv_app: cdktf.booleanToTerraform(this._cdpTlvApp),
      cdp_tlv_location: cdktf.booleanToTerraform(this._cdpTlvLocation),
      cdp_tlv_server_location: cdktf.booleanToTerraform(this._cdpTlvServerLocation),
      channel_group_mode: cdktf.stringToTerraform(this._channelGroupMode),
      channel_group_number: cdktf.numberToTerraform(this._channelGroupNumber),
      description: cdktf.stringToTerraform(this._description),
      device: cdktf.stringToTerraform(this._device),
      device_tracking: cdktf.booleanToTerraform(this._deviceTracking),
      device_tracking_attached_policies: cdktf.listMapper(interfaceEthernetDeviceTrackingAttachedPoliciesToTerraform, false)(this._deviceTrackingAttachedPolicies.internalValue),
      dot1x_max_reauth_req: cdktf.numberToTerraform(this._dot1XMaxReauthReq),
      dot1x_max_req: cdktf.numberToTerraform(this._dot1XMaxReq),
      dot1x_pae: cdktf.stringToTerraform(this._dot1XPae),
      dot1x_timeout_auth_period: cdktf.numberToTerraform(this._dot1XTimeoutAuthPeriod),
      dot1x_timeout_held_period: cdktf.numberToTerraform(this._dot1XTimeoutHeldPeriod),
      dot1x_timeout_quiet_period: cdktf.numberToTerraform(this._dot1XTimeoutQuietPeriod),
      dot1x_timeout_ratelimit_period: cdktf.numberToTerraform(this._dot1XTimeoutRatelimitPeriod),
      dot1x_timeout_server_timeout: cdktf.numberToTerraform(this._dot1XTimeoutServerTimeout),
      dot1x_timeout_start_period: cdktf.numberToTerraform(this._dot1XTimeoutStartPeriod),
      dot1x_timeout_supp_timeout: cdktf.numberToTerraform(this._dot1XTimeoutSuppTimeout),
      dot1x_timeout_tx_period: cdktf.numberToTerraform(this._dot1XTimeoutTxPeriod),
      encapsulation_dot1q_vlan_id: cdktf.numberToTerraform(this._encapsulationDot1QVlanId),
      evpn_ethernet_segments: cdktf.listMapper(interfaceEthernetEvpnEthernetSegmentsToTerraform, false)(this._evpnEthernetSegments.internalValue),
      helper_addresses: cdktf.listMapper(interfaceEthernetHelperAddressesToTerraform, false)(this._helperAddresses.internalValue),
      ip_access_group_in: cdktf.stringToTerraform(this._ipAccessGroupIn),
      ip_access_group_in_enable: cdktf.booleanToTerraform(this._ipAccessGroupInEnable),
      ip_access_group_out: cdktf.stringToTerraform(this._ipAccessGroupOut),
      ip_access_group_out_enable: cdktf.booleanToTerraform(this._ipAccessGroupOutEnable),
      ip_arp_inspection_limit_rate: cdktf.numberToTerraform(this._ipArpInspectionLimitRate),
      ip_arp_inspection_trust: cdktf.booleanToTerraform(this._ipArpInspectionTrust),
      ip_dhcp_relay_information_option_vpn_id: cdktf.booleanToTerraform(this._ipDhcpRelayInformationOptionVpnId),
      ip_dhcp_relay_source_interface: cdktf.stringToTerraform(this._ipDhcpRelaySourceInterface),
      ip_dhcp_snooping_trust: cdktf.booleanToTerraform(this._ipDhcpSnoopingTrust),
      ip_flow_monitors: cdktf.listMapper(interfaceEthernetIpFlowMonitorsToTerraform, false)(this._ipFlowMonitors.internalValue),
      ip_nat_inside: cdktf.booleanToTerraform(this._ipNatInside),
      ip_nat_outside: cdktf.booleanToTerraform(this._ipNatOutside),
      ip_nbar_protocol_discovery: cdktf.booleanToTerraform(this._ipNbarProtocolDiscovery),
      ip_proxy_arp: cdktf.booleanToTerraform(this._ipProxyArp),
      ip_redirects: cdktf.booleanToTerraform(this._ipRedirects),
      ip_unreachables: cdktf.booleanToTerraform(this._ipUnreachables),
      ipv4_address: cdktf.stringToTerraform(this._ipv4Address),
      ipv4_address_mask: cdktf.stringToTerraform(this._ipv4AddressMask),
      ipv6_address_autoconfig_default: cdktf.booleanToTerraform(this._ipv6AddressAutoconfigDefault),
      ipv6_address_dhcp: cdktf.booleanToTerraform(this._ipv6AddressDhcp),
      ipv6_addresses: cdktf.listMapper(interfaceEthernetIpv6AddressesToTerraform, false)(this._ipv6Addresses.internalValue),
      ipv6_enable: cdktf.booleanToTerraform(this._ipv6Enable),
      ipv6_flow_monitors: cdktf.listMapper(interfaceEthernetIpv6FlowMonitorsToTerraform, false)(this._ipv6FlowMonitors.internalValue),
      ipv6_link_local_addresses: cdktf.listMapper(interfaceEthernetIpv6LinkLocalAddressesToTerraform, false)(this._ipv6LinkLocalAddresses.internalValue),
      ipv6_mtu: cdktf.numberToTerraform(this._ipv6Mtu),
      ipv6_nd_ra_suppress_all: cdktf.booleanToTerraform(this._ipv6NdRaSuppressAll),
      load_interval: cdktf.numberToTerraform(this._loadInterval),
      logging_event_link_status_enable: cdktf.booleanToTerraform(this._loggingEventLinkStatusEnable),
      mab: cdktf.booleanToTerraform(this._mab),
      mab_eap: cdktf.booleanToTerraform(this._mabEap),
      media_type: cdktf.stringToTerraform(this._mediaType),
      mtu: cdktf.numberToTerraform(this._mtu),
      name: cdktf.stringToTerraform(this._name),
      negotiation_auto: cdktf.booleanToTerraform(this._negotiationAuto),
      service_policy_input: cdktf.stringToTerraform(this._servicePolicyInput),
      service_policy_output: cdktf.stringToTerraform(this._servicePolicyOutput),
      shutdown: cdktf.booleanToTerraform(this._shutdown),
      snmp_trap_link_status: cdktf.booleanToTerraform(this._snmpTrapLinkStatus),
      source_template: cdktf.listMapper(interfaceEthernetSourceTemplateToTerraform, false)(this._sourceTemplate.internalValue),
      spanning_tree_guard: cdktf.stringToTerraform(this._spanningTreeGuard),
      spanning_tree_link_type: cdktf.stringToTerraform(this._spanningTreeLinkType),
      spanning_tree_portfast: cdktf.booleanToTerraform(this._spanningTreePortfast),
      spanning_tree_portfast_disable: cdktf.booleanToTerraform(this._spanningTreePortfastDisable),
      spanning_tree_portfast_edge: cdktf.booleanToTerraform(this._spanningTreePortfastEdge),
      spanning_tree_portfast_trunk: cdktf.booleanToTerraform(this._spanningTreePortfastTrunk),
      speed_100: cdktf.booleanToTerraform(this._speed100),
      speed_1000: cdktf.booleanToTerraform(this._speed1000),
      speed_10000: cdktf.booleanToTerraform(this._speed10000),
      speed_100000: cdktf.booleanToTerraform(this._speed100000),
      speed_2500: cdktf.booleanToTerraform(this._speed2500),
      speed_25000: cdktf.booleanToTerraform(this._speed25000),
      speed_40000: cdktf.booleanToTerraform(this._speed40000),
      speed_5000: cdktf.booleanToTerraform(this._speed5000),
      speed_nonegotiate: cdktf.booleanToTerraform(this._speedNonegotiate),
      switchport: cdktf.booleanToTerraform(this._switchport),
      trust_device: cdktf.stringToTerraform(this._trustDevice),
      type: cdktf.stringToTerraform(this._type),
      unnumbered: cdktf.stringToTerraform(this._unnumbered),
      vrf_forwarding: cdktf.stringToTerraform(this._vrfForwarding),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      arp_timeout: {
        value: cdktf.numberToHclTerraform(this._arpTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      authentication_event_fail_action_authorize_vlan: {
        value: cdktf.numberToHclTerraform(this._authenticationEventFailActionAuthorizeVlan),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      authentication_event_fail_action_next_method: {
        value: cdktf.booleanToHclTerraform(this._authenticationEventFailActionNextMethod),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      authentication_event_linksec_fail_action_next_method: {
        value: cdktf.booleanToHclTerraform(this._authenticationEventLinksecFailActionNextMethod),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      authentication_event_no_response_action_authorize_vlan: {
        value: cdktf.numberToHclTerraform(this._authenticationEventNoResponseActionAuthorizeVlan),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      authentication_event_server_alive_action_reinitialize: {
        value: cdktf.booleanToHclTerraform(this._authenticationEventServerAliveActionReinitialize),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      authentication_event_server_dead_action_authorize: {
        value: cdktf.booleanToHclTerraform(this._authenticationEventServerDeadActionAuthorize),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      authentication_event_server_dead_action_authorize_vlan: {
        value: cdktf.numberToHclTerraform(this._authenticationEventServerDeadActionAuthorizeVlan),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      authentication_event_server_dead_action_authorize_voice: {
        value: cdktf.booleanToHclTerraform(this._authenticationEventServerDeadActionAuthorizeVoice),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      authentication_event_server_dead_action_reinitialize_vlan: {
        value: cdktf.numberToHclTerraform(this._authenticationEventServerDeadActionReinitializeVlan),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      authentication_host_mode: {
        value: cdktf.stringToHclTerraform(this._authenticationHostMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      authentication_order_dot1x: {
        value: cdktf.booleanToHclTerraform(this._authenticationOrderDot1X),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      authentication_order_dot1x_mab: {
        value: cdktf.booleanToHclTerraform(this._authenticationOrderDot1XMab),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      authentication_order_dot1x_webauth: {
        value: cdktf.booleanToHclTerraform(this._authenticationOrderDot1XWebauth),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      authentication_order_mab: {
        value: cdktf.booleanToHclTerraform(this._authenticationOrderMab),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      authentication_order_mab_dot1x: {
        value: cdktf.booleanToHclTerraform(this._authenticationOrderMabDot1X),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      authentication_order_mab_webauth: {
        value: cdktf.booleanToHclTerraform(this._authenticationOrderMabWebauth),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      authentication_order_webauth: {
        value: cdktf.booleanToHclTerraform(this._authenticationOrderWebauth),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      authentication_periodic: {
        value: cdktf.booleanToHclTerraform(this._authenticationPeriodic),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      authentication_port_control: {
        value: cdktf.stringToHclTerraform(this._authenticationPortControl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      authentication_priority_dot1x: {
        value: cdktf.booleanToHclTerraform(this._authenticationPriorityDot1X),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      authentication_priority_dot1x_mab: {
        value: cdktf.booleanToHclTerraform(this._authenticationPriorityDot1XMab),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      authentication_priority_dot1x_webauth: {
        value: cdktf.booleanToHclTerraform(this._authenticationPriorityDot1XWebauth),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      authentication_priority_mab: {
        value: cdktf.booleanToHclTerraform(this._authenticationPriorityMab),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      authentication_priority_mab_dot1x: {
        value: cdktf.booleanToHclTerraform(this._authenticationPriorityMabDot1X),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      authentication_priority_mab_webauth: {
        value: cdktf.booleanToHclTerraform(this._authenticationPriorityMabWebauth),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      authentication_priority_webauth: {
        value: cdktf.booleanToHclTerraform(this._authenticationPriorityWebauth),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      authentication_timer_reauthenticate: {
        value: cdktf.numberToHclTerraform(this._authenticationTimerReauthenticate),
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
      auto_qos_classify: {
        value: cdktf.booleanToHclTerraform(this._autoQosClassify),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      auto_qos_classify_police: {
        value: cdktf.booleanToHclTerraform(this._autoQosClassifyPolice),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      auto_qos_trust: {
        value: cdktf.booleanToHclTerraform(this._autoQosTrust),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      auto_qos_trust_cos: {
        value: cdktf.booleanToHclTerraform(this._autoQosTrustCos),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      auto_qos_trust_dscp: {
        value: cdktf.booleanToHclTerraform(this._autoQosTrustDscp),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      auto_qos_video_cts: {
        value: cdktf.booleanToHclTerraform(this._autoQosVideoCts),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      auto_qos_video_ip_camera: {
        value: cdktf.booleanToHclTerraform(this._autoQosVideoIpCamera),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      auto_qos_video_media_player: {
        value: cdktf.booleanToHclTerraform(this._autoQosVideoMediaPlayer),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      auto_qos_voip: {
        value: cdktf.booleanToHclTerraform(this._autoQosVoip),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      auto_qos_voip_cisco_phone: {
        value: cdktf.booleanToHclTerraform(this._autoQosVoipCiscoPhone),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      auto_qos_voip_cisco_softphone: {
        value: cdktf.booleanToHclTerraform(this._autoQosVoipCiscoSoftphone),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      auto_qos_voip_trust: {
        value: cdktf.booleanToHclTerraform(this._autoQosVoipTrust),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      bandwidth: {
        value: cdktf.numberToHclTerraform(this._bandwidth),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      bfd_echo: {
        value: cdktf.booleanToHclTerraform(this._bfdEcho),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      bfd_enable: {
        value: cdktf.booleanToHclTerraform(this._bfdEnable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      bfd_interval: {
        value: cdktf.numberToHclTerraform(this._bfdInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      bfd_interval_min_rx: {
        value: cdktf.numberToHclTerraform(this._bfdIntervalMinRx),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      bfd_interval_multiplier: {
        value: cdktf.numberToHclTerraform(this._bfdIntervalMultiplier),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      bfd_local_address: {
        value: cdktf.stringToHclTerraform(this._bfdLocalAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bfd_template: {
        value: cdktf.stringToHclTerraform(this._bfdTemplate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bpduguard_disable: {
        value: cdktf.booleanToHclTerraform(this._bpduguardDisable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      bpduguard_enable: {
        value: cdktf.booleanToHclTerraform(this._bpduguardEnable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      cdp_enable: {
        value: cdktf.booleanToHclTerraform(this._cdpEnable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      cdp_tlv_app: {
        value: cdktf.booleanToHclTerraform(this._cdpTlvApp),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      cdp_tlv_location: {
        value: cdktf.booleanToHclTerraform(this._cdpTlvLocation),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      cdp_tlv_server_location: {
        value: cdktf.booleanToHclTerraform(this._cdpTlvServerLocation),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      channel_group_mode: {
        value: cdktf.stringToHclTerraform(this._channelGroupMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      channel_group_number: {
        value: cdktf.numberToHclTerraform(this._channelGroupNumber),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      device_tracking_attached_policies: {
        value: cdktf.listMapperHcl(interfaceEthernetDeviceTrackingAttachedPoliciesToHclTerraform, false)(this._deviceTrackingAttachedPolicies.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "InterfaceEthernetDeviceTrackingAttachedPoliciesList",
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
      dot1x_timeout_auth_period: {
        value: cdktf.numberToHclTerraform(this._dot1XTimeoutAuthPeriod),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dot1x_timeout_held_period: {
        value: cdktf.numberToHclTerraform(this._dot1XTimeoutHeldPeriod),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
      dot1x_timeout_start_period: {
        value: cdktf.numberToHclTerraform(this._dot1XTimeoutStartPeriod),
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
      encapsulation_dot1q_vlan_id: {
        value: cdktf.numberToHclTerraform(this._encapsulationDot1QVlanId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      evpn_ethernet_segments: {
        value: cdktf.listMapperHcl(interfaceEthernetEvpnEthernetSegmentsToHclTerraform, false)(this._evpnEthernetSegments.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "InterfaceEthernetEvpnEthernetSegmentsList",
      },
      helper_addresses: {
        value: cdktf.listMapperHcl(interfaceEthernetHelperAddressesToHclTerraform, false)(this._helperAddresses.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "InterfaceEthernetHelperAddressesList",
      },
      ip_access_group_in: {
        value: cdktf.stringToHclTerraform(this._ipAccessGroupIn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip_access_group_in_enable: {
        value: cdktf.booleanToHclTerraform(this._ipAccessGroupInEnable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ip_access_group_out: {
        value: cdktf.stringToHclTerraform(this._ipAccessGroupOut),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip_access_group_out_enable: {
        value: cdktf.booleanToHclTerraform(this._ipAccessGroupOutEnable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ip_arp_inspection_limit_rate: {
        value: cdktf.numberToHclTerraform(this._ipArpInspectionLimitRate),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ip_arp_inspection_trust: {
        value: cdktf.booleanToHclTerraform(this._ipArpInspectionTrust),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ip_dhcp_relay_information_option_vpn_id: {
        value: cdktf.booleanToHclTerraform(this._ipDhcpRelayInformationOptionVpnId),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ip_dhcp_relay_source_interface: {
        value: cdktf.stringToHclTerraform(this._ipDhcpRelaySourceInterface),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip_dhcp_snooping_trust: {
        value: cdktf.booleanToHclTerraform(this._ipDhcpSnoopingTrust),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ip_flow_monitors: {
        value: cdktf.listMapperHcl(interfaceEthernetIpFlowMonitorsToHclTerraform, false)(this._ipFlowMonitors.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "InterfaceEthernetIpFlowMonitorsList",
      },
      ip_nat_inside: {
        value: cdktf.booleanToHclTerraform(this._ipNatInside),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ip_nat_outside: {
        value: cdktf.booleanToHclTerraform(this._ipNatOutside),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ip_nbar_protocol_discovery: {
        value: cdktf.booleanToHclTerraform(this._ipNbarProtocolDiscovery),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ip_proxy_arp: {
        value: cdktf.booleanToHclTerraform(this._ipProxyArp),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ip_redirects: {
        value: cdktf.booleanToHclTerraform(this._ipRedirects),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ip_unreachables: {
        value: cdktf.booleanToHclTerraform(this._ipUnreachables),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ipv4_address: {
        value: cdktf.stringToHclTerraform(this._ipv4Address),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv4_address_mask: {
        value: cdktf.stringToHclTerraform(this._ipv4AddressMask),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv6_address_autoconfig_default: {
        value: cdktf.booleanToHclTerraform(this._ipv6AddressAutoconfigDefault),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ipv6_address_dhcp: {
        value: cdktf.booleanToHclTerraform(this._ipv6AddressDhcp),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ipv6_addresses: {
        value: cdktf.listMapperHcl(interfaceEthernetIpv6AddressesToHclTerraform, false)(this._ipv6Addresses.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "InterfaceEthernetIpv6AddressesList",
      },
      ipv6_enable: {
        value: cdktf.booleanToHclTerraform(this._ipv6Enable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ipv6_flow_monitors: {
        value: cdktf.listMapperHcl(interfaceEthernetIpv6FlowMonitorsToHclTerraform, false)(this._ipv6FlowMonitors.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "InterfaceEthernetIpv6FlowMonitorsList",
      },
      ipv6_link_local_addresses: {
        value: cdktf.listMapperHcl(interfaceEthernetIpv6LinkLocalAddressesToHclTerraform, false)(this._ipv6LinkLocalAddresses.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "InterfaceEthernetIpv6LinkLocalAddressesList",
      },
      ipv6_mtu: {
        value: cdktf.numberToHclTerraform(this._ipv6Mtu),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ipv6_nd_ra_suppress_all: {
        value: cdktf.booleanToHclTerraform(this._ipv6NdRaSuppressAll),
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
      logging_event_link_status_enable: {
        value: cdktf.booleanToHclTerraform(this._loggingEventLinkStatusEnable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
      media_type: {
        value: cdktf.stringToHclTerraform(this._mediaType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mtu: {
        value: cdktf.numberToHclTerraform(this._mtu),
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
      negotiation_auto: {
        value: cdktf.booleanToHclTerraform(this._negotiationAuto),
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
      shutdown: {
        value: cdktf.booleanToHclTerraform(this._shutdown),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      snmp_trap_link_status: {
        value: cdktf.booleanToHclTerraform(this._snmpTrapLinkStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      source_template: {
        value: cdktf.listMapperHcl(interfaceEthernetSourceTemplateToHclTerraform, false)(this._sourceTemplate.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "InterfaceEthernetSourceTemplateList",
      },
      spanning_tree_guard: {
        value: cdktf.stringToHclTerraform(this._spanningTreeGuard),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      spanning_tree_link_type: {
        value: cdktf.stringToHclTerraform(this._spanningTreeLinkType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      spanning_tree_portfast_trunk: {
        value: cdktf.booleanToHclTerraform(this._spanningTreePortfastTrunk),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      speed_100: {
        value: cdktf.booleanToHclTerraform(this._speed100),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      speed_1000: {
        value: cdktf.booleanToHclTerraform(this._speed1000),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      speed_10000: {
        value: cdktf.booleanToHclTerraform(this._speed10000),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      speed_100000: {
        value: cdktf.booleanToHclTerraform(this._speed100000),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      speed_2500: {
        value: cdktf.booleanToHclTerraform(this._speed2500),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      speed_25000: {
        value: cdktf.booleanToHclTerraform(this._speed25000),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      speed_40000: {
        value: cdktf.booleanToHclTerraform(this._speed40000),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      speed_5000: {
        value: cdktf.booleanToHclTerraform(this._speed5000),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      speed_nonegotiate: {
        value: cdktf.booleanToHclTerraform(this._speedNonegotiate),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      switchport: {
        value: cdktf.booleanToHclTerraform(this._switchport),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      trust_device: {
        value: cdktf.stringToHclTerraform(this._trustDevice),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      unnumbered: {
        value: cdktf.stringToHclTerraform(this._unnumbered),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vrf_forwarding: {
        value: cdktf.stringToHclTerraform(this._vrfForwarding),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
