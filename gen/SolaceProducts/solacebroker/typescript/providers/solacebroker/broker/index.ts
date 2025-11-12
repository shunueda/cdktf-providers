// https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/broker
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BrokerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Enable or disable protection against brute force password guessing attacks on local management accounts.
  * 
  * The minimum access scope/level required to retrieve this attribute is "global/read-only". The minimum access scope/level required to change this attribute is "global/admin". Changes to this attribute are synchronized to HA mates via config-sync. The default value is `false`. Available since SEMP API version 2.40.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/broker#auth_brute_force_protection_enabled Broker#auth_brute_force_protection_enabled}
  */
  readonly authBruteForceProtectionEnabled?: boolean | cdktf.IResolvable;
  /**
  * The client certificate revocation checking mode used when a client authenticates with a client certificate.
  * 
  * The minimum access scope/level required to retrieve this attribute is "global/read-only". The minimum access scope/level required to change this attribute is "global/admin". Changes to this attribute are synchronized to HA mates via config-sync. The default value is `"none"`. The allowed values and their meaning are:
  * 
  * <pre>
  * "none" - Do not perform any certificate revocation checking.
  * "ocsp" - Use the Online Certificate Status Protocol (OCSP) for certificate revocation checking.
  * "crl" - Use Certificate Revocation Lists (CRL) for certificate revocation checking.
  * "ocsp-crl" - Use OCSP first, but if OCSP fails to return an unambiguous result, then check via CRL.
  * </pre>
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/broker#auth_client_cert_revocation_check_mode Broker#auth_client_cert_revocation_check_mode}
  */
  readonly authClientCertRevocationCheckMode?: string;
  /**
  * The maximum depth for a client certificate chain. The depth of a chain is defined as the number of signing CA certificates that are present in the chain back to a trusted self-signed root CA certificate.
  * 
  * The minimum access scope/level required to retrieve this attribute is "global/read-only". The minimum access scope/level required to change this attribute is "global/read-write". The default value is `3`. Available since SEMP API version 2.22.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/broker#config_sync_authentication_client_cert_max_chain_depth Broker#config_sync_authentication_client_cert_max_chain_depth}
  */
  readonly configSyncAuthenticationClientCertMaxChainDepth?: number;
  /**
  * Enable or disable validation of the "Not Before" and "Not After" validity dates in the authentication certificate(s).
  * 
  * The minimum access scope/level required to retrieve this attribute is "global/read-only". The minimum access scope/level required to change this attribute is "global/read-write". The default value is `true`. Available since SEMP API version 2.22.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/broker#config_sync_authentication_client_cert_validate_date_enabled Broker#config_sync_authentication_client_cert_validate_date_enabled}
  */
  readonly configSyncAuthenticationClientCertValidateDateEnabled?: boolean | cdktf.IResolvable;
  /**
  * The TCP initial congestion window size for Config Sync clients, in multiples of the TCP Maximum Segment Size (MSS). Changing the value from its default of 2 results in non-compliance with RFC 2581. Contact support before changing this value.
  * 
  * The minimum access scope/level required to retrieve this attribute is "global/read-only". The minimum access scope/level required to change this attribute is "global/read-write". The default value is `2`. Available since SEMP API version 2.22.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/broker#config_sync_client_profile_tcp_initial_congestion_window Broker#config_sync_client_profile_tcp_initial_congestion_window}
  */
  readonly configSyncClientProfileTcpInitialCongestionWindow?: number;
  /**
  * The number of TCP keepalive retransmissions to a client using the Client Profile before declaring that it is not available.
  * 
  * The minimum access scope/level required to retrieve this attribute is "global/read-only". The minimum access scope/level required to change this attribute is "global/read-write". The default value is `5`. Available since SEMP API version 2.22.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/broker#config_sync_client_profile_tcp_keepalive_count Broker#config_sync_client_profile_tcp_keepalive_count}
  */
  readonly configSyncClientProfileTcpKeepaliveCount?: number;
  /**
  * The amount of time a client connection using the Client Profile must remain idle before TCP begins sending keepalive probes, in seconds.
  * 
  * The minimum access scope/level required to retrieve this attribute is "global/read-only". The minimum access scope/level required to change this attribute is "global/read-write". The default value is `3`. Available since SEMP API version 2.22.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/broker#config_sync_client_profile_tcp_keepalive_idle Broker#config_sync_client_profile_tcp_keepalive_idle}
  */
  readonly configSyncClientProfileTcpKeepaliveIdle?: number;
  /**
  * The amount of time between TCP keepalive retransmissions to a client using the Client Profile when no acknowledgment is received, in seconds.
  * 
  * The minimum access scope/level required to retrieve this attribute is "global/read-only". The minimum access scope/level required to change this attribute is "global/read-write". The default value is `1`. Available since SEMP API version 2.22.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/broker#config_sync_client_profile_tcp_keepalive_interval Broker#config_sync_client_profile_tcp_keepalive_interval}
  */
  readonly configSyncClientProfileTcpKeepaliveInterval?: number;
  /**
  * The TCP maximum window size for clients using the Client Profile, in kilobytes. Changes are applied to all existing connections. This setting is ignored on the software broker.
  * 
  * The minimum access scope/level required to retrieve this attribute is "global/read-only". The minimum access scope/level required to change this attribute is "global/read-write". The default value is `256`. Available since SEMP API version 2.22.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/broker#config_sync_client_profile_tcp_max_window Broker#config_sync_client_profile_tcp_max_window}
  */
  readonly configSyncClientProfileTcpMaxWindow?: number;
  /**
  * The TCP maximum segment size for clients using the Client Profile, in bytes. Changes are applied to all existing connections.
  * 
  * The minimum access scope/level required to retrieve this attribute is "global/read-only". The minimum access scope/level required to change this attribute is "global/read-write". The default value is `1460`. Available since SEMP API version 2.22.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/broker#config_sync_client_profile_tcp_mss Broker#config_sync_client_profile_tcp_mss}
  */
  readonly configSyncClientProfileTcpMss?: number;
  /**
  * Enable or disable configuration synchronization for High Availability or Disaster Recovery.
  * 
  * The minimum access scope/level required to retrieve this attribute is "global/read-only". The minimum access scope/level required to change this attribute is "global/read-write". The default value is `false`. Available since SEMP API version 2.22.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/broker#config_sync_enabled Broker#config_sync_enabled}
  */
  readonly configSyncEnabled?: boolean | cdktf.IResolvable;
  /**
  * Enable or disable the synchronizing of usernames within High Availability groups. The transition from not synchronizing to synchronizing will cause the High Availability mate to fall out of sync. Recommendation: leave this as enabled.
  * 
  * The minimum access scope/level required to retrieve this attribute is "global/read-only". The minimum access scope/level required to change this attribute is "global/read-write". Changes to this attribute are synchronized to HA mates via config-sync. The default value is `true`. Available since SEMP API version 2.22.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/broker#config_sync_synchronize_username_enabled Broker#config_sync_synchronize_username_enabled}
  */
  readonly configSyncSynchronizeUsernameEnabled?: boolean | cdktf.IResolvable;
  /**
  * Enable or disable the use of TLS encryption of the configuration synchronization communications between brokers in High Availability groups and/or Disaster Recovery sites.
  * 
  * The minimum access scope/level required to retrieve this attribute is "global/read-only". The minimum access scope/level required to change this attribute is "global/read-write". The default value is `false`. Available since SEMP API version 2.22.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/broker#config_sync_tls_enabled Broker#config_sync_tls_enabled}
  */
  readonly configSyncTlsEnabled?: boolean | cdktf.IResolvable;
  /**
  * The days of the week to schedule defragmentation runs, specified as "daily" or as a comma-separated list of days. Days must be specified as "Sun", "Mon", "Tue", "Wed", "Thu", "Fri, or "Sat", with no spaces, and in sorted order from Sunday to Saturday. Please note "Sun,Mon,Tue,Wed,Thu,Fri,Sat" is not allowed, use "daily" instead.
  * 
  * The minimum access scope/level required to retrieve this attribute is "global/read-only". The minimum access scope/level required to change this attribute is "global/read-write". Changes to this attribute are synchronized to HA mates via config-sync. The default value is `"daily"`. Available since SEMP API version 2.25.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/broker#guaranteed_msging_defragmentation_schedule_day_list Broker#guaranteed_msging_defragmentation_schedule_day_list}
  */
  readonly guaranteedMsgingDefragmentationScheduleDayList?: string;
  /**
  * Enable or disable schedule-based defragmentation of Guaranteed Messaging spool files.
  * 
  * The minimum access scope/level required to retrieve this attribute is "global/read-only". The minimum access scope/level required to change this attribute is "global/read-write". Changes to this attribute are synchronized to HA mates via config-sync. The default value is `false`. Available since SEMP API version 2.25.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/broker#guaranteed_msging_defragmentation_schedule_enabled Broker#guaranteed_msging_defragmentation_schedule_enabled}
  */
  readonly guaranteedMsgingDefragmentationScheduleEnabled?: boolean | cdktf.IResolvable;
  /**
  * The times of the day to schedule defragmentation runs, specified as "hourly" or as a comma-separated list of 24-hour times in the form hh:mm, or h:mm. There must be no spaces, and times (up to 4) must be in sorted order from 0:00 to 23:59.
  * 
  * The minimum access scope/level required to retrieve this attribute is "global/read-only". The minimum access scope/level required to change this attribute is "global/read-write". Changes to this attribute are synchronized to HA mates via config-sync. The default value is `"0:00"`. Available since SEMP API version 2.25.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/broker#guaranteed_msging_defragmentation_schedule_time_list Broker#guaranteed_msging_defragmentation_schedule_time_list}
  */
  readonly guaranteedMsgingDefragmentationScheduleTimeList?: string;
  /**
  * Enable or disable threshold-based defragmentation of Guaranteed Messaging spool files.
  * 
  * The minimum access scope/level required to retrieve this attribute is "global/read-only". The minimum access scope/level required to change this attribute is "global/read-write". Changes to this attribute are synchronized to HA mates via config-sync. The default value is `false`. Available since SEMP API version 2.25.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/broker#guaranteed_msging_defragmentation_threshold_enabled Broker#guaranteed_msging_defragmentation_threshold_enabled}
  */
  readonly guaranteedMsgingDefragmentationThresholdEnabled?: boolean | cdktf.IResolvable;
  /**
  * Percentage of spool fragmentation needed to trigger defragmentation run. The minimum value allowed is 30%.
  * 
  * The minimum access scope/level required to retrieve this attribute is "global/read-only". The minimum access scope/level required to change this attribute is "global/read-write". Changes to this attribute are synchronized to HA mates via config-sync. The default value is `50`. Available since SEMP API version 2.25.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/broker#guaranteed_msging_defragmentation_threshold_fragmentation_percentage Broker#guaranteed_msging_defragmentation_threshold_fragmentation_percentage}
  */
  readonly guaranteedMsgingDefragmentationThresholdFragmentationPercentage?: number;
  /**
  * Minimum interval of time (in minutes) between defragmentation runs triggered by thresholds.
  * 
  * The minimum access scope/level required to retrieve this attribute is "global/read-only". The minimum access scope/level required to change this attribute is "global/read-write". Changes to this attribute are synchronized to HA mates via config-sync. The default value is `15`. Available since SEMP API version 2.25.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/broker#guaranteed_msging_defragmentation_threshold_min_interval Broker#guaranteed_msging_defragmentation_threshold_min_interval}
  */
  readonly guaranteedMsgingDefragmentationThresholdMinInterval?: number;
  /**
  * Percentage of spool usage needed to trigger defragmentation run. The minimum value allowed is 30%.
  * 
  * The minimum access scope/level required to retrieve this attribute is "global/read-only". The minimum access scope/level required to change this attribute is "global/read-write". Changes to this attribute are synchronized to HA mates via config-sync. The default value is `50`. Available since SEMP API version 2.25.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/broker#guaranteed_msging_defragmentation_threshold_usage_percentage Broker#guaranteed_msging_defragmentation_threshold_usage_percentage}
  */
  readonly guaranteedMsgingDefragmentationThresholdUsagePercentage?: number;
  /**
  * Enable or disable Guaranteed Messaging.
  * 
  * The minimum access scope/level required to retrieve this attribute is "global/read-only". The minimum access scope/level required to change this attribute is "global/read-write". The default value is `false`. Available since SEMP API version 2.18.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/broker#guaranteed_msging_enabled Broker#guaranteed_msging_enabled}
  */
  readonly guaranteedMsgingEnabled?: boolean | cdktf.IResolvable;
  /**
  * The thresholds for the cache usage event at system level, relative to `guaranteed_msging_max_cache_usage`. Available since SEMP API version 2.18.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/broker#guaranteed_msging_event_cache_usage_threshold Broker#guaranteed_msging_event_cache_usage_threshold}
  */
  readonly guaranteedMsgingEventCacheUsageThreshold?: BrokerGuaranteedMsgingEventCacheUsageThreshold;
  /**
  * The thresholds for the number of delivered but unacknowledged messages event at system level, relative to the maximum system limit. Available since SEMP API version 2.18.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/broker#guaranteed_msging_event_delivered_unacked_threshold Broker#guaranteed_msging_event_delivered_unacked_threshold}
  */
  readonly guaranteedMsgingEventDeliveredUnackedThreshold?: BrokerGuaranteedMsgingEventDeliveredUnackedThreshold;
  /**
  * The thresholds for the active disk partition usage event at system level, relative to the maximum system limit. Available since SEMP API version 2.18.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/broker#guaranteed_msging_event_disk_usage_threshold Broker#guaranteed_msging_event_disk_usage_threshold}
  */
  readonly guaranteedMsgingEventDiskUsageThreshold?: BrokerGuaranteedMsgingEventDiskUsageThreshold;
  /**
  * The thresholds for the transmit flow count event at system level, relative to the maximum system limit. Available since SEMP API version 2.18.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/broker#guaranteed_msging_event_egress_flow_count_threshold Broker#guaranteed_msging_event_egress_flow_count_threshold}
  */
  readonly guaranteedMsgingEventEgressFlowCountThreshold?: BrokerGuaranteedMsgingEventEgressFlowCountThreshold;
  /**
  * The thresholds for the endpoints count event at system level, relative to the maximum system limit. Available since SEMP API version 2.18.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/broker#guaranteed_msging_event_endpoint_count_threshold Broker#guaranteed_msging_event_endpoint_count_threshold}
  */
  readonly guaranteedMsgingEventEndpointCountThreshold?: BrokerGuaranteedMsgingEventEndpointCountThreshold;
  /**
  * The thresholds for the receive flow count event at system level, relative to the maximum system limit. Available since SEMP API version 2.18.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/broker#guaranteed_msging_event_ingress_flow_count_threshold Broker#guaranteed_msging_event_ingress_flow_count_threshold}
  */
  readonly guaranteedMsgingEventIngressFlowCountThreshold?: BrokerGuaranteedMsgingEventIngressFlowCountThreshold;
  /**
  * The thresholds for the spool message count event at system level, relative to the maximum system limit. Available since SEMP API version 2.18.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/broker#guaranteed_msging_event_msg_count_threshold Broker#guaranteed_msging_event_msg_count_threshold}
  */
  readonly guaranteedMsgingEventMsgCountThreshold?: BrokerGuaranteedMsgingEventMsgCountThreshold;
  /**
  * The thresholds for the spool file count event at system level, relative to the maximum system limit. Available since SEMP API version 2.18.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/broker#guaranteed_msging_event_msg_spool_file_count_threshold Broker#guaranteed_msging_event_msg_spool_file_count_threshold}
  */
  readonly guaranteedMsgingEventMsgSpoolFileCountThreshold?: BrokerGuaranteedMsgingEventMsgSpoolFileCountThreshold;
  /**
  * The thresholds for the spool usage event at system level, relative to `max_spool_usage`. Available since SEMP API version 2.18.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/broker#guaranteed_msging_event_msg_spool_usage_threshold Broker#guaranteed_msging_event_msg_spool_usage_threshold}
  */
  readonly guaranteedMsgingEventMsgSpoolUsageThreshold?: BrokerGuaranteedMsgingEventMsgSpoolUsageThreshold;
  /**
  * The thresholds for the transacted sessions event at system level, relative to the maximum system limit. Available since SEMP API version 2.18.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/broker#guaranteed_msging_event_transacted_session_count_threshold Broker#guaranteed_msging_event_transacted_session_count_threshold}
  */
  readonly guaranteedMsgingEventTransactedSessionCountThreshold?: BrokerGuaranteedMsgingEventTransactedSessionCountThreshold;
  /**
  * The thresholds for the transacted session resources at system level, relative to the maximum system limit. Available since SEMP API version 2.18.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/broker#guaranteed_msging_event_transacted_session_resource_count_threshold Broker#guaranteed_msging_event_transacted_session_resource_count_threshold}
  */
  readonly guaranteedMsgingEventTransactedSessionResourceCountThreshold?: BrokerGuaranteedMsgingEventTransactedSessionResourceCountThreshold;
  /**
  * The thresholds for the transactions event at system level, relative to the maximum system limit. Available since SEMP API version 2.18.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/broker#guaranteed_msging_event_transaction_count_threshold Broker#guaranteed_msging_event_transaction_count_threshold}
  */
  readonly guaranteedMsgingEventTransactionCountThreshold?: BrokerGuaranteedMsgingEventTransactionCountThreshold;
  /**
  * Guaranteed messaging cache usage limit. Expressed as a maximum percentage of the NAB's egress queueing. resources that the guaranteed message cache is allowed to use.
  * 
  * The minimum access scope/level required to retrieve this attribute is "global/read-only". The minimum access scope/level required to change this attribute is "global/read-write". Changes to this attribute are synchronized to HA mates via config-sync. The default value is `10`. Available since SEMP API version 2.18.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/broker#guaranteed_msging_max_cache_usage Broker#guaranteed_msging_max_cache_usage}
  */
  readonly guaranteedMsgingMaxCacheUsage?: number;
  /**
  * The maximum total message spool usage allowed across all VPNs on this broker, in megabytes. Recommendation: the maximum value should be less than 90% of the disk space allocated for the guaranteed message spool.
  * 
  * The minimum access scope/level required to retrieve this attribute is "global/read-only". The minimum access scope/level required to change this attribute is "global/read-write". Changes to this attribute are synchronized to HA mates via config-sync. The default value is `1500`. Available since SEMP API version 2.18.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/broker#guaranteed_msging_max_msg_spool_usage Broker#guaranteed_msging_max_msg_spool_usage}
  */
  readonly guaranteedMsgingMaxMsgSpoolUsage?: number;
  /**
  * The maximum time, in milliseconds, that can be tolerated for remote acknowledgment of synchronization messages before which the remote system will be considered out of sync.
  * 
  * The minimum access scope/level required to retrieve this attribute is "global/read-only". The minimum access scope/level required to change this attribute is "global/read-write". The default value is `10000`. Available since SEMP API version 2.18.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/broker#guaranteed_msging_msg_spool_sync_mirrored_msg_ack_timeout Broker#guaranteed_msging_msg_spool_sync_mirrored_msg_ack_timeout}
  */
  readonly guaranteedMsgingMsgSpoolSyncMirroredMsgAckTimeout?: number;
  /**
  * The maximum time, in milliseconds, that can be tolerated for remote disk writes before which the remote system will be considered out of sync.
  * 
  * The minimum access scope/level required to retrieve this attribute is "global/read-only". The minimum access scope/level required to change this attribute is "global/read-write". The default value is `10000`. Available since SEMP API version 2.18.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/broker#guaranteed_msging_msg_spool_sync_mirrored_spool_file_ack_timeout Broker#guaranteed_msging_msg_spool_sync_mirrored_spool_file_ack_timeout}
  */
  readonly guaranteedMsgingMsgSpoolSyncMirroredSpoolFileAckTimeout?: number;
  /**
  * The replication compatibility mode for the broker. The default value is `"legacy"`. The allowed values and their meaning are:"legacy" - All transactions originated by clients are replicated to the standby site without using transactions."transacted" - All transactions originated by clients are replicated to the standby site using transactions.
  * 
  * The minimum access scope/level required to retrieve this attribute is "global/read-only". The minimum access scope/level required to change this attribute is "global/read-write". Changes to this attribute are synchronized to HA mates via config-sync. The default value is `"legacy"`. The allowed values and their meaning are:
  * 
  * <pre>
  * "legacy" - All transactions originated by clients are replicated to the standby site without using transactions.
  * "transacted" - All transactions originated by clients are replicated to the standby site using transactions.
  * </pre>
  *  Available since SEMP API version 2.18.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/broker#guaranteed_msging_transaction_replication_compatibility_mode Broker#guaranteed_msging_transaction_replication_compatibility_mode}
  */
  readonly guaranteedMsgingTransactionReplicationCompatibilityMode?: string;
  /**
  * The default OAuth profile for OAuth authenticated SEMP requests.
  * 
  * The minimum access scope/level required to retrieve this attribute is "global/read-only". The minimum access scope/level required to change this attribute is "global/admin". Changes to this attribute are synchronized to HA mates via config-sync. The default value is `""`. Available since SEMP API version 2.24.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/broker#oauth_profile_default Broker#oauth_profile_default}
  */
  readonly oauthProfileDefault?: string;
  /**
  * Enable or disable the AMQP service. When disabled new AMQP Clients may not connect through the global or per-VPN AMQP listen-ports, and all currently connected AMQP Clients are immediately disconnected.
  * 
  * The minimum access scope/level required to retrieve this attribute is "global/read-only". The minimum access scope/level required to change this attribute is "global/read-write". Changes to this attribute are synchronized to HA mates via config-sync. The default value is `false`. Available since SEMP API version 2.17.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/broker#service_amqp_enabled Broker#service_amqp_enabled}
  */
  readonly serviceAmqpEnabled?: boolean | cdktf.IResolvable;
  /**
  * TCP port number that AMQP clients can use to connect to the broker using raw TCP over TLS.
  * 
  * The minimum access scope/level required to retrieve this attribute is "global/read-only". The minimum access scope/level required to change this attribute is "global/read-write". Modifying this attribute while the object (or the relevant part of the object) is administratively enabled may be service impacting as service_amqp_enabled will be temporarily set to false to apply the change. Changes to this attribute are synchronized to HA mates via config-sync. The default value is `0`. Available since SEMP API version 2.17.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/broker#service_amqp_tls_listen_port Broker#service_amqp_tls_listen_port}
  */
  readonly serviceAmqpTlsListenPort?: number;
  /**
  * The thresholds for the connection count event. Available since SEMP API version 2.17.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/broker#service_event_connection_count_threshold Broker#service_event_connection_count_threshold}
  */
  readonly serviceEventConnectionCountThreshold?: BrokerServiceEventConnectionCountThreshold;
  /**
  * Enable or disable the plain-text health-check service.
  * 
  * The minimum access scope/level required to retrieve this attribute is "global/read-only". The minimum access scope/level required to change this attribute is "global/read-write". Changes to this attribute are synchronized to HA mates via config-sync. The default value is `false`. Available since SEMP API version 2.17.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/broker#service_health_check_enabled Broker#service_health_check_enabled}
  */
  readonly serviceHealthCheckEnabled?: boolean | cdktf.IResolvable;
  /**
  * The port number for the plain-text health-check service. The port must be unique across the message backbone. The health-check service must be disabled to change the port.
  * 
  * The minimum access scope/level required to retrieve this attribute is "global/read-only". The minimum access scope/level required to change this attribute is "global/read-write". Modifying this attribute while the object (or the relevant part of the object) is administratively enabled may be service impacting as service_health_check_enabled will be temporarily set to false to apply the change. Changes to this attribute are synchronized to HA mates via config-sync. The default value is `5550`. Available since SEMP API version 2.17.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/broker#service_health_check_listen_port Broker#service_health_check_listen_port}
  */
  readonly serviceHealthCheckListenPort?: number;
  /**
  * Enable or disable the TLS health-check service.
  * 
  * The minimum access scope/level required to retrieve this attribute is "global/read-only". The minimum access scope/level required to change this attribute is "global/read-write". Changes to this attribute are synchronized to HA mates via config-sync. The default value is `false`. Available since SEMP API version 2.34.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/broker#service_health_check_tls_enabled Broker#service_health_check_tls_enabled}
  */
  readonly serviceHealthCheckTlsEnabled?: boolean | cdktf.IResolvable;
  /**
  * The port number for the TLS health-check service. The port must be unique across the message backbone. The health-check service must be disabled to change the port.
  * 
  * The minimum access scope/level required to retrieve this attribute is "global/read-only". The minimum access scope/level required to change this attribute is "global/read-write". Modifying this attribute while the object (or the relevant part of the object) is administratively enabled may be service impacting as service_health_check_tls_enabled will be temporarily set to false to apply the change. Changes to this attribute are synchronized to HA mates via config-sync. The default value is `0`. Available since SEMP API version 2.34.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/broker#service_health_check_tls_listen_port Broker#service_health_check_tls_listen_port}
  */
  readonly serviceHealthCheckTlsListenPort?: number;
  /**
  * Enable or disable the mate-link service.
  * 
  * The minimum access scope/level required to retrieve this attribute is "global/read-only". The minimum access scope/level required to change this attribute is "global/read-write". The default value is `true`. Available since SEMP API version 2.17.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/broker#service_mate_link_enabled Broker#service_mate_link_enabled}
  */
  readonly serviceMateLinkEnabled?: boolean | cdktf.IResolvable;
  /**
  * The port number for the mate-link service. The port must be unique across the message backbone. The mate-link service must be disabled to change the port.
  * 
  * The minimum access scope/level required to retrieve this attribute is "global/read-only". The minimum access scope/level required to change this attribute is "global/read-write". Modifying this attribute while the object (or the relevant part of the object) is administratively enabled may be service impacting as service_mate_link_enabled will be temporarily set to false to apply the change. The default value is `8741`. Available since SEMP API version 2.17.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/broker#service_mate_link_listen_port Broker#service_mate_link_listen_port}
  */
  readonly serviceMateLinkListenPort?: number;
  /**
  * Enable or disable the MQTT service. When disabled new MQTT Clients may not connect through the per-VPN MQTT listen-ports, and all currently connected MQTT Clients are immediately disconnected.
  * 
  * The minimum access scope/level required to retrieve this attribute is "global/read-only". The minimum access scope/level required to change this attribute is "global/read-write". Changes to this attribute are synchronized to HA mates via config-sync. The default value is `false`. Available since SEMP API version 2.17.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/broker#service_mqtt_enabled Broker#service_mqtt_enabled}
  */
  readonly serviceMqttEnabled?: boolean | cdktf.IResolvable;
  /**
  * Enable or disable the msg-backbone service. When disabled new Clients may not connect through global or per-VPN listen-ports, and all currently connected Clients are immediately disconnected.
  * 
  * The minimum access scope/level required to retrieve this attribute is "global/read-only". The minimum access scope/level required to change this attribute is "global/read-write". The default value is `true`. Available since SEMP API version 2.17.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/broker#service_msg_backbone_enabled Broker#service_msg_backbone_enabled}
  */
  readonly serviceMsgBackboneEnabled?: boolean | cdktf.IResolvable;
  /**
  * Enable or disable the redundancy service.
  * 
  * The minimum access scope/level required to retrieve this attribute is "global/read-only". The minimum access scope/level required to change this attribute is "global/read-write". The default value is `true`. Available since SEMP API version 2.17.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/broker#service_redundancy_enabled Broker#service_redundancy_enabled}
  */
  readonly serviceRedundancyEnabled?: boolean | cdktf.IResolvable;
  /**
  * The first listen-port used for the redundancy service. Redundancy uses this port and the subsequent 2 ports. These port must be unique across the message backbone. The redundancy service must be disabled to change this port.
  * 
  * The minimum access scope/level required to retrieve this attribute is "global/read-only". The minimum access scope/level required to change this attribute is "global/read-write". Modifying this attribute while the object (or the relevant part of the object) is administratively enabled may be service impacting as service_redundancy_enabled will be temporarily set to false to apply the change. The default value is `8300`. Available since SEMP API version 2.17.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/broker#service_redundancy_first_listen_port Broker#service_redundancy_first_listen_port}
  */
  readonly serviceRedundancyFirstListenPort?: number;
  /**
  * The thresholds for the REST outgoing connection count event. Available since SEMP API version 2.17.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/broker#service_rest_event_outgoing_connection_count_threshold Broker#service_rest_event_outgoing_connection_count_threshold}
  */
  readonly serviceRestEventOutgoingConnectionCountThreshold?: BrokerServiceRestEventOutgoingConnectionCountThreshold;
  /**
  * Enable or disable the REST service incoming connections on the broker.
  * 
  * The minimum access scope/level required to retrieve this attribute is "global/read-only". The minimum access scope/level required to change this attribute is "global/read-write". Changes to this attribute are synchronized to HA mates via config-sync. The default value is `false`. Available since SEMP API version 2.17.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/broker#service_rest_incoming_enabled Broker#service_rest_incoming_enabled}
  */
  readonly serviceRestIncomingEnabled?: boolean | cdktf.IResolvable;
  /**
  * Enable or disable the REST service outgoing connections on the broker.
  * 
  * The minimum access scope/level required to retrieve this attribute is "global/read-only". The minimum access scope/level required to change this attribute is "global/read-write". Changes to this attribute are synchronized to HA mates via config-sync. The default value is `false`. Available since SEMP API version 2.17.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/broker#service_rest_outgoing_enabled Broker#service_rest_outgoing_enabled}
  */
  readonly serviceRestOutgoingEnabled?: boolean | cdktf.IResolvable;
  /**
  * Enable or disable cross origin resource requests for the SEMP service.
  * 
  * The minimum access scope/level required to retrieve this attribute is "global/read-only". The minimum access scope/level required to change this attribute is "global/read-write". Changes to this attribute are synchronized to HA mates via config-sync. The default value is `true`. Available since SEMP API version 2.24.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/broker#service_semp_cors_allow_any_host_enabled Broker#service_semp_cors_allow_any_host_enabled}
  */
  readonly serviceSempCorsAllowAnyHostEnabled?: boolean | cdktf.IResolvable;
  /**
  * Enable or disable extended SEMP timeouts for paged responses. When a request times out, it returns the current page of content, even if the page is not full.  When enabled, the timeout is 60 seconds. When disabled, the timeout is 5 seconds.  The recommended setting is disabled (no legacy-timeout).  This parameter is intended as a temporary workaround to be used until SEMP clients can handle short pages.  This setting will be removed in a future release.
  * 
  * The minimum access scope/level required to retrieve this attribute is "global/read-only". The minimum access scope/level required to change this attribute is "global/read-write". Changes to this attribute are synchronized to HA mates via config-sync. The default value is `false`. Available since SEMP API version 2.18.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/broker#service_semp_legacy_timeout_enabled Broker#service_semp_legacy_timeout_enabled}
  */
  readonly serviceSempLegacyTimeoutEnabled?: boolean | cdktf.IResolvable;
  /**
  * Enable or disable plain-text SEMP service.
  * 
  * The minimum access scope/level required to retrieve this attribute is "global/read-only". The minimum access scope/level required to change this attribute is "global/read-write". Changes to this attribute are synchronized to HA mates via config-sync. The default value is `true`. Available since SEMP API version 2.17.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/broker#service_semp_plain_text_enabled Broker#service_semp_plain_text_enabled}
  */
  readonly serviceSempPlainTextEnabled?: boolean | cdktf.IResolvable;
  /**
  * The session idle timeout, in minutes. Sessions will be invalidated if there is no activity in this period of time.
  * 
  * The minimum access scope/level required to retrieve this attribute is "global/read-only". The minimum access scope/level required to change this attribute is "global/read-write". Changes to this attribute are synchronized to HA mates via config-sync. The default value is `15`. Available since SEMP API version 2.21.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/broker#service_semp_session_idle_timeout Broker#service_semp_session_idle_timeout}
  */
  readonly serviceSempSessionIdleTimeout?: number;
  /**
  * The maximum lifetime of a session, in minutes. Sessions will be invalidated after this period of time, regardless of activity.
  * 
  * The minimum access scope/level required to retrieve this attribute is "global/read-only". The minimum access scope/level required to change this attribute is "global/read-write". Changes to this attribute are synchronized to HA mates via config-sync. The default value is `43200`. Available since SEMP API version 2.21.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/broker#service_semp_session_max_lifetime Broker#service_semp_session_max_lifetime}
  */
  readonly serviceSempSessionMaxLifetime?: number;
  /**
  * Enable or disable TLS SEMP service.
  * 
  * The minimum access scope/level required to retrieve this attribute is "global/read-only". The minimum access scope/level required to change this attribute is "global/read-write". Changes to this attribute are synchronized to HA mates via config-sync. The default value is `true`. Available since SEMP API version 2.17.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/broker#service_semp_tls_enabled Broker#service_semp_tls_enabled}
  */
  readonly serviceSempTlsEnabled?: boolean | cdktf.IResolvable;
  /**
  * TCP port number that SMF clients can use to connect to the broker using raw compression TCP.
  * 
  * The minimum access scope/level required to retrieve this attribute is "global/read-only". The minimum access scope/level required to change this attribute is "global/read-write". Modifying this attribute while the object (or the relevant part of the object) is administratively enabled may be service impacting as service_smf_enabled will be temporarily set to false to apply the change. The default value is `55003`. Available since SEMP API version 2.17.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/broker#service_smf_compression_listen_port Broker#service_smf_compression_listen_port}
  */
  readonly serviceSmfCompressionListenPort?: number;
  /**
  * Enable or disable the SMF service. When disabled new SMF Clients may not connect through the global listen-ports, and all currently connected SMF Clients are immediately disconnected.
  * 
  * The minimum access scope/level required to retrieve this attribute is "global/read-only". The minimum access scope/level required to change this attribute is "global/read-write". The default value is `true`. Available since SEMP API version 2.17.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/broker#service_smf_enabled Broker#service_smf_enabled}
  */
  readonly serviceSmfEnabled?: boolean | cdktf.IResolvable;
  /**
  * The thresholds for the SMF connection count event. Available since SEMP API version 2.17.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/broker#service_smf_event_connection_count_threshold Broker#service_smf_event_connection_count_threshold}
  */
  readonly serviceSmfEventConnectionCountThreshold?: BrokerServiceSmfEventConnectionCountThreshold;
  /**
  * TCP port number that SMF clients can use to connect to the broker using raw TCP.
  * 
  * The minimum access scope/level required to retrieve this attribute is "global/read-only". The minimum access scope/level required to change this attribute is "global/read-write". Modifying this attribute while the object (or the relevant part of the object) is administratively enabled may be service impacting as service_smf_enabled will be temporarily set to false to apply the change. The default value is `55555`. Available since SEMP API version 2.17.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/broker#service_smf_plain_text_listen_port Broker#service_smf_plain_text_listen_port}
  */
  readonly serviceSmfPlainTextListenPort?: number;
  /**
  * TCP port number that SMF clients can use to connect to the broker using raw routing control TCP.
  * 
  * The minimum access scope/level required to retrieve this attribute is "global/read-only". The minimum access scope/level required to change this attribute is "global/read-write". Modifying this attribute while the object (or the relevant part of the object) is administratively enabled may be service impacting as service_smf_enabled will be temporarily set to false to apply the change. The default value is `55556`. Available since SEMP API version 2.17.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/broker#service_smf_routing_control_listen_port Broker#service_smf_routing_control_listen_port}
  */
  readonly serviceSmfRoutingControlListenPort?: number;
  /**
  * TCP port number that SMF clients can use to connect to the broker using raw TCP over TLS.
  * 
  * The minimum access scope/level required to retrieve this attribute is "global/read-only". The minimum access scope/level required to change this attribute is "global/read-write". Modifying this attribute while the object (or the relevant part of the object) is administratively enabled may be service impacting as service_smf_enabled will be temporarily set to false to apply the change. The default value is `55443`. Available since SEMP API version 2.17.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/broker#service_smf_tls_listen_port Broker#service_smf_tls_listen_port}
  */
  readonly serviceSmfTlsListenPort?: number;
  /**
  * The thresholds for the incoming and outgoing TLS connection count event of the broker. Available since SEMP API version 2.17.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/broker#service_tls_event_connection_count_threshold Broker#service_tls_event_connection_count_threshold}
  */
  readonly serviceTlsEventConnectionCountThreshold?: BrokerServiceTlsEventConnectionCountThreshold;
  /**
  * Enable or disable the web-transport service. When disabled new web-transport Clients may not connect through the global listen-ports, and all currently connected web-transport Clients are immediately disconnected.
  * 
  * The minimum access scope/level required to retrieve this attribute is "global/read-only". The minimum access scope/level required to change this attribute is "global/read-write". Changes to this attribute are synchronized to HA mates via config-sync. The default value is `false`. Available since SEMP API version 2.17.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/broker#service_web_transport_enabled Broker#service_web_transport_enabled}
  */
  readonly serviceWebTransportEnabled?: boolean | cdktf.IResolvable;
  /**
  * The TCP port for plain-text WEB client connections.
  * 
  * The minimum access scope/level required to retrieve this attribute is "global/read-only". The minimum access scope/level required to change this attribute is "global/read-write". Modifying this attribute while the object (or the relevant part of the object) is administratively enabled may be service impacting as service_web_transport_enabled will be temporarily set to false to apply the change. Changes to this attribute are synchronized to HA mates via config-sync. The default value is `8008`. Available since SEMP API version 2.17.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/broker#service_web_transport_plain_text_listen_port Broker#service_web_transport_plain_text_listen_port}
  */
  readonly serviceWebTransportPlainTextListenPort?: number;
  /**
  * The TCP port for TLS WEB client connections.
  * 
  * The minimum access scope/level required to retrieve this attribute is "global/read-only". The minimum access scope/level required to change this attribute is "global/read-write". Modifying this attribute while the object (or the relevant part of the object) is administratively enabled may be service impacting as service_web_transport_enabled will be temporarily set to false to apply the change. Changes to this attribute are synchronized to HA mates via config-sync. The default value is `1443`. Available since SEMP API version 2.17.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/broker#service_web_transport_tls_listen_port Broker#service_web_transport_tls_listen_port}
  */
  readonly serviceWebTransportTlsListenPort?: number;
  /**
  * Used to specify the Web URL suffix that will be used by Web clients when communicating with the broker.
  * 
  * The minimum access scope/level required to retrieve this attribute is "global/read-only". The minimum access scope/level required to change this attribute is "global/read-write". Modifying this attribute while the object (or the relevant part of the object) is administratively enabled may be service impacting as service_web_transport_enabled will be temporarily set to false to apply the change. The default value is `""`. Available since SEMP API version 2.17.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/broker#service_web_transport_web_url_suffix Broker#service_web_transport_web_url_suffix}
  */
  readonly serviceWebTransportWebUrlSuffix?: string;
  /**
  * Enable or disable the blocking of TLS version 1.1 connections. When blocked, all existing incoming and outgoing TLS 1.1 connections with Clients, SEMP users, and LDAP servers remain connected while new connections are blocked. Note that support for TLS 1.1 will eventually be discontinued, at which time TLS 1.1 connections will be blocked regardless of this setting.
  * 
  * The minimum access scope/level required to retrieve this attribute is "global/read-only". The minimum access scope/level required to change this attribute is "global/read-write". Changes to this attribute are synchronized to HA mates via config-sync. The default value is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/broker#tls_block_version11_enabled Broker#tls_block_version11_enabled}
  */
  readonly tlsBlockVersion11Enabled?: boolean | cdktf.IResolvable;
  /**
  * The colon-separated list of cipher suites used for TLS management connections (e.g. SEMP, LDAP). The value "default" implies all supported suites ordered from most secure to least secure.
  * 
  * The minimum access scope/level required to retrieve this attribute is "global/read-only". The minimum access scope/level required to change this attribute is "global/read-write". Changes to this attribute are synchronized to HA mates via config-sync. The default value is `"default"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/broker#tls_cipher_suite_management_list Broker#tls_cipher_suite_management_list}
  */
  readonly tlsCipherSuiteManagementList?: string;
  /**
  * The colon-separated list of cipher suites used for TLS data connections (e.g. client pub/sub). The value "default" implies all supported suites ordered from most secure to least secure.
  * 
  * The minimum access scope/level required to retrieve this attribute is "global/read-only". The minimum access scope/level required to change this attribute is "global/mesh-manager". Changes to this attribute are synchronized to HA mates via config-sync. The default value is `"default"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/broker#tls_cipher_suite_msg_backbone_list Broker#tls_cipher_suite_msg_backbone_list}
  */
  readonly tlsCipherSuiteMsgBackboneList?: string;
  /**
  * The colon-separated list of cipher suites used for TLS secure shell connections (e.g. SSH, SFTP, SCP). The value "default" implies all supported suites ordered from most secure to least secure.
  * 
  * The minimum access scope/level required to retrieve this attribute is "global/read-only". The minimum access scope/level required to change this attribute is "global/read-write". Changes to this attribute are synchronized to HA mates via config-sync. The default value is `"default"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/broker#tls_cipher_suite_secure_shell_list Broker#tls_cipher_suite_secure_shell_list}
  */
  readonly tlsCipherSuiteSecureShellList?: string;
  /**
  * Enable or disable protection against the CRIME exploit. When enabled, TLS+compressed messaging performance is degraded. This protection should only be disabled if sufficient ACL and authentication features are being employed such that a potential attacker does not have sufficient access to trigger the exploit.
  * 
  * The minimum access scope/level required to retrieve this attribute is "global/read-only". The minimum access scope/level required to change this attribute is "global/read-write". Changes to this attribute are synchronized to HA mates via config-sync. The default value is `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/broker#tls_crime_exploit_protection_enabled Broker#tls_crime_exploit_protection_enabled}
  */
  readonly tlsCrimeExploitProtectionEnabled?: boolean | cdktf.IResolvable;
  /**
  * The PEM formatted content for the server certificate used for TLS connections. It must consist of a private key and between one and three certificates comprising the certificate trust chain.
  * 
  * The minimum access scope/level required to retrieve this attribute is "global/read-only". The minimum access scope/level required to change this attribute is "global/admin". This attribute is absent from a GET and not updated when absent in a PUT, subject to the exceptions [here](https://docs.solace.com/Admin/SEMP/SEMP-API-Archit.htm#HTTP_Methods). The default value is `""`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/broker#tls_server_cert_content Broker#tls_server_cert_content}
  */
  readonly tlsServerCertContent?: string;
  /**
  * The password for the server certificate used for TLS connections.
  * 
  * The minimum access scope/level required to change this attribute is "global/admin". This attribute is absent from a GET and not updated when absent in a PUT, subject to the exceptions [here](https://docs.solace.com/Admin/SEMP/SEMP-API-Archit.htm#HTTP_Methods). The default value is `""`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/broker#tls_server_cert_password Broker#tls_server_cert_password}
  */
  readonly tlsServerCertPassword?: string;
  /**
  * Enable or disable the standard domain certificate authority list.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "global/read-write". The default value is `true`. Available since SEMP API version 2.19.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/broker#tls_standard_domain_certificate_authorities_enabled Broker#tls_standard_domain_certificate_authorities_enabled}
  */
  readonly tlsStandardDomainCertificateAuthoritiesEnabled?: boolean | cdktf.IResolvable;
  /**
  * The TLS ticket lifetime in seconds. When a client connects with TLS, a session with a session ticket is created using the TLS ticket lifetime which determines how long the client has to resume the session.
  * 
  * The minimum access scope/level required to retrieve this attribute is "global/read-only". The minimum access scope/level required to change this attribute is "global/read-write". The default value is `86400`. Deprecated since SEMP API version 2.45. This attribute had been deprecated. TLS session tickets are no longer supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/broker#tls_ticket_lifetime Broker#tls_ticket_lifetime}
  */
  readonly tlsTicketLifetime?: number;
  /**
  * Enable or disable the use of unencrypted wizards in the Web-based Manager UI. This setting should be left at its default on all production systems or other systems that need to be secure.  Enabling this option will permit the broker to forward plain-text data to other brokers, making important information or credentials available for snooping.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "global/read-write". Changes to this attribute are synchronized to HA mates via config-sync. The default value is `false`. Available since SEMP API version 2.28.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/broker#web_manager_allow_unencrypted_wizards_enabled Broker#web_manager_allow_unencrypted_wizards_enabled}
  */
  readonly webManagerAllowUnencryptedWizardsEnabled?: boolean | cdktf.IResolvable;
  /**
  * Enable or disable redirection of HTTP requests for the broker manager to HTTPS.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "global/read-write". Changes to this attribute are synchronized to HA mates via config-sync. The default value is `true`. Available since SEMP API version 2.24.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/broker#web_manager_redirect_http_enabled Broker#web_manager_redirect_http_enabled}
  */
  readonly webManagerRedirectHttpEnabled?: boolean | cdktf.IResolvable;
  /**
  * The HTTPS port that HTTP requests will be redirected towards in a HTTP 301 redirect response. Zero is a special value that means use the value specified for the SEMP TLS port value.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "global/read-write". Changes to this attribute are synchronized to HA mates via config-sync. The default value is `0`. Available since SEMP API version 2.24.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/broker#web_manager_redirect_http_override_tls_port Broker#web_manager_redirect_http_override_tls_port}
  */
  readonly webManagerRedirectHttpOverrideTlsPort?: number;
}
export interface BrokerGuaranteedMsgingEventCacheUsageThreshold {
  /**
  * The clear threshold for the value of this counter as a percentage of its maximum value. Falling below this value will trigger a corresponding event.
  * 
  * The minimum access scope/level required to retrieve this attribute is "global/read-only". The minimum access scope/level required to change this attribute is "global/read-write". This attribute may not be returned in a GET. Changes to this attribute are synchronized to HA mates via config-sync. The default value is `60`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/broker#clear_percent Broker#clear_percent}
  */
  readonly clearPercent?: number;
  /**
  * The clear threshold for the absolute value of this counter. Falling below this value will trigger a corresponding event.
  * 
  * The minimum access scope/level required to retrieve this attribute is "global/read-only". The minimum access scope/level required to change this attribute is "global/read-write". This attribute may not be returned in a GET. Changes to this attribute are synchronized to HA mates via config-sync. The default is not applicable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/broker#clear_value Broker#clear_value}
  */
  readonly clearValue?: number;
  /**
  * The set threshold for the value of this counter as a percentage of its maximum value. Exceeding this value will trigger a corresponding event.
  * 
  * The minimum access scope/level required to retrieve this attribute is "global/read-only". The minimum access scope/level required to change this attribute is "global/read-write". This attribute may not be returned in a GET. Changes to this attribute are synchronized to HA mates via config-sync. The default value is `80`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/broker#set_percent Broker#set_percent}
  */
  readonly setPercent?: number;
  /**
  * The set threshold for the absolute value of this counter. Exceeding this value will trigger a corresponding event.
  * 
  * The minimum access scope/level required to retrieve this attribute is "global/read-only". The minimum access scope/level required to change this attribute is "global/read-write". This attribute may not be returned in a GET. Changes to this attribute are synchronized to HA mates via config-sync. The default is not applicable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/broker#set_value Broker#set_value}
  */
  readonly setValue?: number;
}

export function brokerGuaranteedMsgingEventCacheUsageThresholdToTerraform(struct?: BrokerGuaranteedMsgingEventCacheUsageThreshold | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    clear_percent: cdktf.numberToTerraform(struct!.clearPercent),
    clear_value: cdktf.numberToTerraform(struct!.clearValue),
    set_percent: cdktf.numberToTerraform(struct!.setPercent),
    set_value: cdktf.numberToTerraform(struct!.setValue),
  }
}


export function brokerGuaranteedMsgingEventCacheUsageThresholdToHclTerraform(struct?: BrokerGuaranteedMsgingEventCacheUsageThreshold | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    clear_percent: {
      value: cdktf.numberToHclTerraform(struct!.clearPercent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    clear_value: {
      value: cdktf.numberToHclTerraform(struct!.clearValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    set_percent: {
      value: cdktf.numberToHclTerraform(struct!.setPercent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    set_value: {
      value: cdktf.numberToHclTerraform(struct!.setValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BrokerGuaranteedMsgingEventCacheUsageThresholdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BrokerGuaranteedMsgingEventCacheUsageThreshold | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clearPercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.clearPercent = this._clearPercent;
    }
    if (this._clearValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clearValue = this._clearValue;
    }
    if (this._setPercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.setPercent = this._setPercent;
    }
    if (this._setValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.setValue = this._setValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BrokerGuaranteedMsgingEventCacheUsageThreshold | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clearPercent = undefined;
      this._clearValue = undefined;
      this._setPercent = undefined;
      this._setValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clearPercent = value.clearPercent;
      this._clearValue = value.clearValue;
      this._setPercent = value.setPercent;
      this._setValue = value.setValue;
    }
  }

  // clear_percent - computed: false, optional: true, required: false
  private _clearPercent?: number; 
  public get clearPercent() {
    return this.getNumberAttribute('clear_percent');
  }
  public set clearPercent(value: number) {
    this._clearPercent = value;
  }
  public resetClearPercent() {
    this._clearPercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clearPercentInput() {
    return this._clearPercent;
  }

  // clear_value - computed: false, optional: true, required: false
  private _clearValue?: number; 
  public get clearValue() {
    return this.getNumberAttribute('clear_value');
  }
  public set clearValue(value: number) {
    this._clearValue = value;
  }
  public resetClearValue() {
    this._clearValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clearValueInput() {
    return this._clearValue;
  }

  // set_percent - computed: false, optional: true, required: false
  private _setPercent?: number; 
  public get setPercent() {
    return this.getNumberAttribute('set_percent');
  }
  public set setPercent(value: number) {
    this._setPercent = value;
  }
  public resetSetPercent() {
    this._setPercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setPercentInput() {
    return this._setPercent;
  }

  // set_value - computed: false, optional: true, required: false
  private _setValue?: number; 
  public get setValue() {
    return this.getNumberAttribute('set_value');
  }
  public set setValue(value: number) {
    this._setValue = value;
  }
  public resetSetValue() {
    this._setValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setValueInput() {
    return this._setValue;
  }
}
export interface BrokerGuaranteedMsgingEventDeliveredUnackedThreshold {
  /**
  * The clear threshold for the value of this counter as a percentage of its maximum value. Falling below this value will trigger a corresponding event.
  * 
  * The minimum access scope/level required to retrieve this attribute is "global/read-only". The minimum access scope/level required to change this attribute is "global/read-write". Changes to this attribute are synchronized to HA mates via config-sync. The default value is `60`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/broker#clear_percent Broker#clear_percent}
  */
  readonly clearPercent?: number;
  /**
  * The set threshold for the value of this counter as a percentage of its maximum value. Exceeding this value will trigger a corresponding event.
  * 
  * The minimum access scope/level required to retrieve this attribute is "global/read-only". The minimum access scope/level required to change this attribute is "global/read-write". Changes to this attribute are synchronized to HA mates via config-sync. The default value is `80`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/broker#set_percent Broker#set_percent}
  */
  readonly setPercent?: number;
}

export function brokerGuaranteedMsgingEventDeliveredUnackedThresholdToTerraform(struct?: BrokerGuaranteedMsgingEventDeliveredUnackedThreshold | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    clear_percent: cdktf.numberToTerraform(struct!.clearPercent),
    set_percent: cdktf.numberToTerraform(struct!.setPercent),
  }
}


export function brokerGuaranteedMsgingEventDeliveredUnackedThresholdToHclTerraform(struct?: BrokerGuaranteedMsgingEventDeliveredUnackedThreshold | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    clear_percent: {
      value: cdktf.numberToHclTerraform(struct!.clearPercent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    set_percent: {
      value: cdktf.numberToHclTerraform(struct!.setPercent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BrokerGuaranteedMsgingEventDeliveredUnackedThresholdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BrokerGuaranteedMsgingEventDeliveredUnackedThreshold | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clearPercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.clearPercent = this._clearPercent;
    }
    if (this._setPercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.setPercent = this._setPercent;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BrokerGuaranteedMsgingEventDeliveredUnackedThreshold | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clearPercent = undefined;
      this._setPercent = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clearPercent = value.clearPercent;
      this._setPercent = value.setPercent;
    }
  }

  // clear_percent - computed: false, optional: true, required: false
  private _clearPercent?: number; 
  public get clearPercent() {
    return this.getNumberAttribute('clear_percent');
  }
  public set clearPercent(value: number) {
    this._clearPercent = value;
  }
  public resetClearPercent() {
    this._clearPercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clearPercentInput() {
    return this._clearPercent;
  }

  // set_percent - computed: false, optional: true, required: false
  private _setPercent?: number; 
  public get setPercent() {
    return this.getNumberAttribute('set_percent');
  }
  public set setPercent(value: number) {
    this._setPercent = value;
  }
  public resetSetPercent() {
    this._setPercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setPercentInput() {
    return this._setPercent;
  }
}
export interface BrokerGuaranteedMsgingEventDiskUsageThreshold {
  /**
  * The clear threshold for the value of this counter as a percentage of its maximum value. Falling below this value will trigger a corresponding event.
  * 
  * The minimum access scope/level required to retrieve this attribute is "global/read-only". The minimum access scope/level required to change this attribute is "global/read-write". Changes to this attribute are synchronized to HA mates via config-sync. The default value is `60`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/broker#clear_percent Broker#clear_percent}
  */
  readonly clearPercent?: number;
  /**
  * The set threshold for the value of this counter as a percentage of its maximum value. Exceeding this value will trigger a corresponding event.
  * 
  * The minimum access scope/level required to retrieve this attribute is "global/read-only". The minimum access scope/level required to change this attribute is "global/read-write". Changes to this attribute are synchronized to HA mates via config-sync. The default value is `80`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/broker#set_percent Broker#set_percent}
  */
  readonly setPercent?: number;
}

export function brokerGuaranteedMsgingEventDiskUsageThresholdToTerraform(struct?: BrokerGuaranteedMsgingEventDiskUsageThreshold | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    clear_percent: cdktf.numberToTerraform(struct!.clearPercent),
    set_percent: cdktf.numberToTerraform(struct!.setPercent),
  }
}


export function brokerGuaranteedMsgingEventDiskUsageThresholdToHclTerraform(struct?: BrokerGuaranteedMsgingEventDiskUsageThreshold | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    clear_percent: {
      value: cdktf.numberToHclTerraform(struct!.clearPercent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    set_percent: {
      value: cdktf.numberToHclTerraform(struct!.setPercent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BrokerGuaranteedMsgingEventDiskUsageThresholdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BrokerGuaranteedMsgingEventDiskUsageThreshold | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clearPercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.clearPercent = this._clearPercent;
    }
    if (this._setPercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.setPercent = this._setPercent;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BrokerGuaranteedMsgingEventDiskUsageThreshold | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clearPercent = undefined;
      this._setPercent = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clearPercent = value.clearPercent;
      this._setPercent = value.setPercent;
    }
  }

  // clear_percent - computed: false, optional: true, required: false
  private _clearPercent?: number; 
  public get clearPercent() {
    return this.getNumberAttribute('clear_percent');
  }
  public set clearPercent(value: number) {
    this._clearPercent = value;
  }
  public resetClearPercent() {
    this._clearPercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clearPercentInput() {
    return this._clearPercent;
  }

  // set_percent - computed: false, optional: true, required: false
  private _setPercent?: number; 
  public get setPercent() {
    return this.getNumberAttribute('set_percent');
  }
  public set setPercent(value: number) {
    this._setPercent = value;
  }
  public resetSetPercent() {
    this._setPercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setPercentInput() {
    return this._setPercent;
  }
}
export interface BrokerGuaranteedMsgingEventEgressFlowCountThreshold {
  /**
  * The clear threshold for the value of this counter as a percentage of its maximum value. Falling below this value will trigger a corresponding event.
  * 
  * The minimum access scope/level required to retrieve this attribute is "global/read-only". The minimum access scope/level required to change this attribute is "global/read-write". This attribute may not be returned in a GET. Changes to this attribute are synchronized to HA mates via config-sync. The default value is `60`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/broker#clear_percent Broker#clear_percent}
  */
  readonly clearPercent?: number;
  /**
  * The clear threshold for the absolute value of this counter. Falling below this value will trigger a corresponding event.
  * 
  * The minimum access scope/level required to retrieve this attribute is "global/read-only". The minimum access scope/level required to change this attribute is "global/read-write". This attribute may not be returned in a GET. Changes to this attribute are synchronized to HA mates via config-sync. The default is not applicable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/broker#clear_value Broker#clear_value}
  */
  readonly clearValue?: number;
  /**
  * The set threshold for the value of this counter as a percentage of its maximum value. Exceeding this value will trigger a corresponding event.
  * 
  * The minimum access scope/level required to retrieve this attribute is "global/read-only". The minimum access scope/level required to change this attribute is "global/read-write". This attribute may not be returned in a GET. Changes to this attribute are synchronized to HA mates via config-sync. The default value is `80`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/broker#set_percent Broker#set_percent}
  */
  readonly setPercent?: number;
  /**
  * The set threshold for the absolute value of this counter. Exceeding this value will trigger a corresponding event.
  * 
  * The minimum access scope/level required to retrieve this attribute is "global/read-only". The minimum access scope/level required to change this attribute is "global/read-write". This attribute may not be returned in a GET. Changes to this attribute are synchronized to HA mates via config-sync. The default is not applicable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/broker#set_value Broker#set_value}
  */
  readonly setValue?: number;
}

export function brokerGuaranteedMsgingEventEgressFlowCountThresholdToTerraform(struct?: BrokerGuaranteedMsgingEventEgressFlowCountThreshold | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    clear_percent: cdktf.numberToTerraform(struct!.clearPercent),
    clear_value: cdktf.numberToTerraform(struct!.clearValue),
    set_percent: cdktf.numberToTerraform(struct!.setPercent),
    set_value: cdktf.numberToTerraform(struct!.setValue),
  }
}


export function brokerGuaranteedMsgingEventEgressFlowCountThresholdToHclTerraform(struct?: BrokerGuaranteedMsgingEventEgressFlowCountThreshold | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    clear_percent: {
      value: cdktf.numberToHclTerraform(struct!.clearPercent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    clear_value: {
      value: cdktf.numberToHclTerraform(struct!.clearValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    set_percent: {
      value: cdktf.numberToHclTerraform(struct!.setPercent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    set_value: {
      value: cdktf.numberToHclTerraform(struct!.setValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BrokerGuaranteedMsgingEventEgressFlowCountThresholdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BrokerGuaranteedMsgingEventEgressFlowCountThreshold | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clearPercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.clearPercent = this._clearPercent;
    }
    if (this._clearValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clearValue = this._clearValue;
    }
    if (this._setPercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.setPercent = this._setPercent;
    }
    if (this._setValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.setValue = this._setValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BrokerGuaranteedMsgingEventEgressFlowCountThreshold | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clearPercent = undefined;
      this._clearValue = undefined;
      this._setPercent = undefined;
      this._setValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clearPercent = value.clearPercent;
      this._clearValue = value.clearValue;
      this._setPercent = value.setPercent;
      this._setValue = value.setValue;
    }
  }

  // clear_percent - computed: false, optional: true, required: false
  private _clearPercent?: number; 
  public get clearPercent() {
    return this.getNumberAttribute('clear_percent');
  }
  public set clearPercent(value: number) {
    this._clearPercent = value;
  }
  public resetClearPercent() {
    this._clearPercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clearPercentInput() {
    return this._clearPercent;
  }

  // clear_value - computed: false, optional: true, required: false
  private _clearValue?: number; 
  public get clearValue() {
    return this.getNumberAttribute('clear_value');
  }
  public set clearValue(value: number) {
    this._clearValue = value;
  }
  public resetClearValue() {
    this._clearValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clearValueInput() {
    return this._clearValue;
  }

  // set_percent - computed: false, optional: true, required: false
  private _setPercent?: number; 
  public get setPercent() {
    return this.getNumberAttribute('set_percent');
  }
  public set setPercent(value: number) {
    this._setPercent = value;
  }
  public resetSetPercent() {
    this._setPercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setPercentInput() {
    return this._setPercent;
  }

  // set_value - computed: false, optional: true, required: false
  private _setValue?: number; 
  public get setValue() {
    return this.getNumberAttribute('set_value');
  }
  public set setValue(value: number) {
    this._setValue = value;
  }
  public resetSetValue() {
    this._setValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setValueInput() {
    return this._setValue;
  }
}
export interface BrokerGuaranteedMsgingEventEndpointCountThreshold {
  /**
  * The clear threshold for the value of this counter as a percentage of its maximum value. Falling below this value will trigger a corresponding event.
  * 
  * The minimum access scope/level required to retrieve this attribute is "global/read-only". The minimum access scope/level required to change this attribute is "global/read-write". This attribute may not be returned in a GET. Changes to this attribute are synchronized to HA mates via config-sync. The default value is `60`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/broker#clear_percent Broker#clear_percent}
  */
  readonly clearPercent?: number;
  /**
  * The clear threshold for the absolute value of this counter. Falling below this value will trigger a corresponding event.
  * 
  * The minimum access scope/level required to retrieve this attribute is "global/read-only". The minimum access scope/level required to change this attribute is "global/read-write". This attribute may not be returned in a GET. Changes to this attribute are synchronized to HA mates via config-sync. The default is not applicable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/broker#clear_value Broker#clear_value}
  */
  readonly clearValue?: number;
  /**
  * The set threshold for the value of this counter as a percentage of its maximum value. Exceeding this value will trigger a corresponding event.
  * 
  * The minimum access scope/level required to retrieve this attribute is "global/read-only". The minimum access scope/level required to change this attribute is "global/read-write". This attribute may not be returned in a GET. Changes to this attribute are synchronized to HA mates via config-sync. The default value is `80`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/broker#set_percent Broker#set_percent}
  */
  readonly setPercent?: number;
  /**
  * The set threshold for the absolute value of this counter. Exceeding this value will trigger a corresponding event.
  * 
  * The minimum access scope/level required to retrieve this attribute is "global/read-only". The minimum access scope/level required to change this attribute is "global/read-write". This attribute may not be returned in a GET. Changes to this attribute are synchronized to HA mates via config-sync. The default is not applicable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/broker#set_value Broker#set_value}
  */
  readonly setValue?: number;
}

export function brokerGuaranteedMsgingEventEndpointCountThresholdToTerraform(struct?: BrokerGuaranteedMsgingEventEndpointCountThreshold | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    clear_percent: cdktf.numberToTerraform(struct!.clearPercent),
    clear_value: cdktf.numberToTerraform(struct!.clearValue),
    set_percent: cdktf.numberToTerraform(struct!.setPercent),
    set_value: cdktf.numberToTerraform(struct!.setValue),
  }
}


export function brokerGuaranteedMsgingEventEndpointCountThresholdToHclTerraform(struct?: BrokerGuaranteedMsgingEventEndpointCountThreshold | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    clear_percent: {
      value: cdktf.numberToHclTerraform(struct!.clearPercent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    clear_value: {
      value: cdktf.numberToHclTerraform(struct!.clearValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    set_percent: {
      value: cdktf.numberToHclTerraform(struct!.setPercent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    set_value: {
      value: cdktf.numberToHclTerraform(struct!.setValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BrokerGuaranteedMsgingEventEndpointCountThresholdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BrokerGuaranteedMsgingEventEndpointCountThreshold | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clearPercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.clearPercent = this._clearPercent;
    }
    if (this._clearValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clearValue = this._clearValue;
    }
    if (this._setPercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.setPercent = this._setPercent;
    }
    if (this._setValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.setValue = this._setValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BrokerGuaranteedMsgingEventEndpointCountThreshold | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clearPercent = undefined;
      this._clearValue = undefined;
      this._setPercent = undefined;
      this._setValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clearPercent = value.clearPercent;
      this._clearValue = value.clearValue;
      this._setPercent = value.setPercent;
      this._setValue = value.setValue;
    }
  }

  // clear_percent - computed: false, optional: true, required: false
  private _clearPercent?: number; 
  public get clearPercent() {
    return this.getNumberAttribute('clear_percent');
  }
  public set clearPercent(value: number) {
    this._clearPercent = value;
  }
  public resetClearPercent() {
    this._clearPercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clearPercentInput() {
    return this._clearPercent;
  }

  // clear_value - computed: false, optional: true, required: false
  private _clearValue?: number; 
  public get clearValue() {
    return this.getNumberAttribute('clear_value');
  }
  public set clearValue(value: number) {
    this._clearValue = value;
  }
  public resetClearValue() {
    this._clearValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clearValueInput() {
    return this._clearValue;
  }

  // set_percent - computed: false, optional: true, required: false
  private _setPercent?: number; 
  public get setPercent() {
    return this.getNumberAttribute('set_percent');
  }
  public set setPercent(value: number) {
    this._setPercent = value;
  }
  public resetSetPercent() {
    this._setPercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setPercentInput() {
    return this._setPercent;
  }

  // set_value - computed: false, optional: true, required: false
  private _setValue?: number; 
  public get setValue() {
    return this.getNumberAttribute('set_value');
  }
  public set setValue(value: number) {
    this._setValue = value;
  }
  public resetSetValue() {
    this._setValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setValueInput() {
    return this._setValue;
  }
}
export interface BrokerGuaranteedMsgingEventIngressFlowCountThreshold {
  /**
  * The clear threshold for the value of this counter as a percentage of its maximum value. Falling below this value will trigger a corresponding event.
  * 
  * The minimum access scope/level required to retrieve this attribute is "global/read-only". The minimum access scope/level required to change this attribute is "global/read-write". This attribute may not be returned in a GET. Changes to this attribute are synchronized to HA mates via config-sync. The default value is `60`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/broker#clear_percent Broker#clear_percent}
  */
  readonly clearPercent?: number;
  /**
  * The clear threshold for the absolute value of this counter. Falling below this value will trigger a corresponding event.
  * 
  * The minimum access scope/level required to retrieve this attribute is "global/read-only". The minimum access scope/level required to change this attribute is "global/read-write". This attribute may not be returned in a GET. Changes to this attribute are synchronized to HA mates via config-sync. The default is not applicable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/broker#clear_value Broker#clear_value}
  */
  readonly clearValue?: number;
  /**
  * The set threshold for the value of this counter as a percentage of its maximum value. Exceeding this value will trigger a corresponding event.
  * 
  * The minimum access scope/level required to retrieve this attribute is "global/read-only". The minimum access scope/level required to change this attribute is "global/read-write". This attribute may not be returned in a GET. Changes to this attribute are synchronized to HA mates via config-sync. The default value is `80`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/broker#set_percent Broker#set_percent}
  */
  readonly setPercent?: number;
  /**
  * The set threshold for the absolute value of this counter. Exceeding this value will trigger a corresponding event.
  * 
  * The minimum access scope/level required to retrieve this attribute is "global/read-only". The minimum access scope/level required to change this attribute is "global/read-write". This attribute may not be returned in a GET. Changes to this attribute are synchronized to HA mates via config-sync. The default is not applicable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/broker#set_value Broker#set_value}
  */
  readonly setValue?: number;
}

export function brokerGuaranteedMsgingEventIngressFlowCountThresholdToTerraform(struct?: BrokerGuaranteedMsgingEventIngressFlowCountThreshold | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    clear_percent: cdktf.numberToTerraform(struct!.clearPercent),
    clear_value: cdktf.numberToTerraform(struct!.clearValue),
    set_percent: cdktf.numberToTerraform(struct!.setPercent),
    set_value: cdktf.numberToTerraform(struct!.setValue),
  }
}


export function brokerGuaranteedMsgingEventIngressFlowCountThresholdToHclTerraform(struct?: BrokerGuaranteedMsgingEventIngressFlowCountThreshold | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    clear_percent: {
      value: cdktf.numberToHclTerraform(struct!.clearPercent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    clear_value: {
      value: cdktf.numberToHclTerraform(struct!.clearValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    set_percent: {
      value: cdktf.numberToHclTerraform(struct!.setPercent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    set_value: {
      value: cdktf.numberToHclTerraform(struct!.setValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BrokerGuaranteedMsgingEventIngressFlowCountThresholdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BrokerGuaranteedMsgingEventIngressFlowCountThreshold | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clearPercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.clearPercent = this._clearPercent;
    }
    if (this._clearValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clearValue = this._clearValue;
    }
    if (this._setPercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.setPercent = this._setPercent;
    }
    if (this._setValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.setValue = this._setValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BrokerGuaranteedMsgingEventIngressFlowCountThreshold | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clearPercent = undefined;
      this._clearValue = undefined;
      this._setPercent = undefined;
      this._setValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clearPercent = value.clearPercent;
      this._clearValue = value.clearValue;
      this._setPercent = value.setPercent;
      this._setValue = value.setValue;
    }
  }

  // clear_percent - computed: false, optional: true, required: false
  private _clearPercent?: number; 
  public get clearPercent() {
    return this.getNumberAttribute('clear_percent');
  }
  public set clearPercent(value: number) {
    this._clearPercent = value;
  }
  public resetClearPercent() {
    this._clearPercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clearPercentInput() {
    return this._clearPercent;
  }

  // clear_value - computed: false, optional: true, required: false
  private _clearValue?: number; 
  public get clearValue() {
    return this.getNumberAttribute('clear_value');
  }
  public set clearValue(value: number) {
    this._clearValue = value;
  }
  public resetClearValue() {
    this._clearValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clearValueInput() {
    return this._clearValue;
  }

  // set_percent - computed: false, optional: true, required: false
  private _setPercent?: number; 
  public get setPercent() {
    return this.getNumberAttribute('set_percent');
  }
  public set setPercent(value: number) {
    this._setPercent = value;
  }
  public resetSetPercent() {
    this._setPercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setPercentInput() {
    return this._setPercent;
  }

  // set_value - computed: false, optional: true, required: false
  private _setValue?: number; 
  public get setValue() {
    return this.getNumberAttribute('set_value');
  }
  public set setValue(value: number) {
    this._setValue = value;
  }
  public resetSetValue() {
    this._setValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setValueInput() {
    return this._setValue;
  }
}
export interface BrokerGuaranteedMsgingEventMsgCountThreshold {
  /**
  * The clear threshold for the value of this counter as a percentage of its maximum value. Falling below this value will trigger a corresponding event.
  * 
  * The minimum access scope/level required to retrieve this attribute is "global/read-only". The minimum access scope/level required to change this attribute is "global/read-write". Changes to this attribute are synchronized to HA mates via config-sync. The default value is `60`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/broker#clear_percent Broker#clear_percent}
  */
  readonly clearPercent?: number;
  /**
  * The set threshold for the value of this counter as a percentage of its maximum value. Exceeding this value will trigger a corresponding event.
  * 
  * The minimum access scope/level required to retrieve this attribute is "global/read-only". The minimum access scope/level required to change this attribute is "global/read-write". Changes to this attribute are synchronized to HA mates via config-sync. The default value is `80`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/broker#set_percent Broker#set_percent}
  */
  readonly setPercent?: number;
}

export function brokerGuaranteedMsgingEventMsgCountThresholdToTerraform(struct?: BrokerGuaranteedMsgingEventMsgCountThreshold | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    clear_percent: cdktf.numberToTerraform(struct!.clearPercent),
    set_percent: cdktf.numberToTerraform(struct!.setPercent),
  }
}


export function brokerGuaranteedMsgingEventMsgCountThresholdToHclTerraform(struct?: BrokerGuaranteedMsgingEventMsgCountThreshold | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    clear_percent: {
      value: cdktf.numberToHclTerraform(struct!.clearPercent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    set_percent: {
      value: cdktf.numberToHclTerraform(struct!.setPercent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BrokerGuaranteedMsgingEventMsgCountThresholdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BrokerGuaranteedMsgingEventMsgCountThreshold | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clearPercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.clearPercent = this._clearPercent;
    }
    if (this._setPercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.setPercent = this._setPercent;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BrokerGuaranteedMsgingEventMsgCountThreshold | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clearPercent = undefined;
      this._setPercent = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clearPercent = value.clearPercent;
      this._setPercent = value.setPercent;
    }
  }

  // clear_percent - computed: false, optional: true, required: false
  private _clearPercent?: number; 
  public get clearPercent() {
    return this.getNumberAttribute('clear_percent');
  }
  public set clearPercent(value: number) {
    this._clearPercent = value;
  }
  public resetClearPercent() {
    this._clearPercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clearPercentInput() {
    return this._clearPercent;
  }

  // set_percent - computed: false, optional: true, required: false
  private _setPercent?: number; 
  public get setPercent() {
    return this.getNumberAttribute('set_percent');
  }
  public set setPercent(value: number) {
    this._setPercent = value;
  }
  public resetSetPercent() {
    this._setPercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setPercentInput() {
    return this._setPercent;
  }
}
export interface BrokerGuaranteedMsgingEventMsgSpoolFileCountThreshold {
  /**
  * The clear threshold for the value of this counter as a percentage of its maximum value. Falling below this value will trigger a corresponding event.
  * 
  * The minimum access scope/level required to retrieve this attribute is "global/read-only". The minimum access scope/level required to change this attribute is "global/read-write". Changes to this attribute are synchronized to HA mates via config-sync. The default value is `60`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/broker#clear_percent Broker#clear_percent}
  */
  readonly clearPercent?: number;
  /**
  * The set threshold for the value of this counter as a percentage of its maximum value. Exceeding this value will trigger a corresponding event.
  * 
  * The minimum access scope/level required to retrieve this attribute is "global/read-only". The minimum access scope/level required to change this attribute is "global/read-write". Changes to this attribute are synchronized to HA mates via config-sync. The default value is `80`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/broker#set_percent Broker#set_percent}
  */
  readonly setPercent?: number;
}

export function brokerGuaranteedMsgingEventMsgSpoolFileCountThresholdToTerraform(struct?: BrokerGuaranteedMsgingEventMsgSpoolFileCountThreshold | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    clear_percent: cdktf.numberToTerraform(struct!.clearPercent),
    set_percent: cdktf.numberToTerraform(struct!.setPercent),
  }
}


export function brokerGuaranteedMsgingEventMsgSpoolFileCountThresholdToHclTerraform(struct?: BrokerGuaranteedMsgingEventMsgSpoolFileCountThreshold | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    clear_percent: {
      value: cdktf.numberToHclTerraform(struct!.clearPercent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    set_percent: {
      value: cdktf.numberToHclTerraform(struct!.setPercent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BrokerGuaranteedMsgingEventMsgSpoolFileCountThresholdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BrokerGuaranteedMsgingEventMsgSpoolFileCountThreshold | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clearPercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.clearPercent = this._clearPercent;
    }
    if (this._setPercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.setPercent = this._setPercent;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BrokerGuaranteedMsgingEventMsgSpoolFileCountThreshold | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clearPercent = undefined;
      this._setPercent = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clearPercent = value.clearPercent;
      this._setPercent = value.setPercent;
    }
  }

  // clear_percent - computed: false, optional: true, required: false
  private _clearPercent?: number; 
  public get clearPercent() {
    return this.getNumberAttribute('clear_percent');
  }
  public set clearPercent(value: number) {
    this._clearPercent = value;
  }
  public resetClearPercent() {
    this._clearPercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clearPercentInput() {
    return this._clearPercent;
  }

  // set_percent - computed: false, optional: true, required: false
  private _setPercent?: number; 
  public get setPercent() {
    return this.getNumberAttribute('set_percent');
  }
  public set setPercent(value: number) {
    this._setPercent = value;
  }
  public resetSetPercent() {
    this._setPercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setPercentInput() {
    return this._setPercent;
  }
}
export interface BrokerGuaranteedMsgingEventMsgSpoolUsageThreshold {
  /**
  * The clear threshold for the value of this counter as a percentage of its maximum value. Falling below this value will trigger a corresponding event.
  * 
  * The minimum access scope/level required to retrieve this attribute is "global/read-only". The minimum access scope/level required to change this attribute is "global/read-write". This attribute may not be returned in a GET. Changes to this attribute are synchronized to HA mates via config-sync. The default value is `60`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/broker#clear_percent Broker#clear_percent}
  */
  readonly clearPercent?: number;
  /**
  * The clear threshold for the absolute value of this counter. Falling below this value will trigger a corresponding event.
  * 
  * The minimum access scope/level required to retrieve this attribute is "global/read-only". The minimum access scope/level required to change this attribute is "global/read-write". This attribute may not be returned in a GET. Changes to this attribute are synchronized to HA mates via config-sync. The default is not applicable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/broker#clear_value Broker#clear_value}
  */
  readonly clearValue?: number;
  /**
  * The set threshold for the value of this counter as a percentage of its maximum value. Exceeding this value will trigger a corresponding event.
  * 
  * The minimum access scope/level required to retrieve this attribute is "global/read-only". The minimum access scope/level required to change this attribute is "global/read-write". This attribute may not be returned in a GET. Changes to this attribute are synchronized to HA mates via config-sync. The default value is `80`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/broker#set_percent Broker#set_percent}
  */
  readonly setPercent?: number;
  /**
  * The set threshold for the absolute value of this counter. Exceeding this value will trigger a corresponding event.
  * 
  * The minimum access scope/level required to retrieve this attribute is "global/read-only". The minimum access scope/level required to change this attribute is "global/read-write". This attribute may not be returned in a GET. Changes to this attribute are synchronized to HA mates via config-sync. The default is not applicable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/broker#set_value Broker#set_value}
  */
  readonly setValue?: number;
}

export function brokerGuaranteedMsgingEventMsgSpoolUsageThresholdToTerraform(struct?: BrokerGuaranteedMsgingEventMsgSpoolUsageThreshold | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    clear_percent: cdktf.numberToTerraform(struct!.clearPercent),
    clear_value: cdktf.numberToTerraform(struct!.clearValue),
    set_percent: cdktf.numberToTerraform(struct!.setPercent),
    set_value: cdktf.numberToTerraform(struct!.setValue),
  }
}


export function brokerGuaranteedMsgingEventMsgSpoolUsageThresholdToHclTerraform(struct?: BrokerGuaranteedMsgingEventMsgSpoolUsageThreshold | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    clear_percent: {
      value: cdktf.numberToHclTerraform(struct!.clearPercent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    clear_value: {
      value: cdktf.numberToHclTerraform(struct!.clearValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    set_percent: {
      value: cdktf.numberToHclTerraform(struct!.setPercent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    set_value: {
      value: cdktf.numberToHclTerraform(struct!.setValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BrokerGuaranteedMsgingEventMsgSpoolUsageThresholdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BrokerGuaranteedMsgingEventMsgSpoolUsageThreshold | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clearPercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.clearPercent = this._clearPercent;
    }
    if (this._clearValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clearValue = this._clearValue;
    }
    if (this._setPercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.setPercent = this._setPercent;
    }
    if (this._setValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.setValue = this._setValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BrokerGuaranteedMsgingEventMsgSpoolUsageThreshold | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clearPercent = undefined;
      this._clearValue = undefined;
      this._setPercent = undefined;
      this._setValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clearPercent = value.clearPercent;
      this._clearValue = value.clearValue;
      this._setPercent = value.setPercent;
      this._setValue = value.setValue;
    }
  }

  // clear_percent - computed: false, optional: true, required: false
  private _clearPercent?: number; 
  public get clearPercent() {
    return this.getNumberAttribute('clear_percent');
  }
  public set clearPercent(value: number) {
    this._clearPercent = value;
  }
  public resetClearPercent() {
    this._clearPercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clearPercentInput() {
    return this._clearPercent;
  }

  // clear_value - computed: false, optional: true, required: false
  private _clearValue?: number; 
  public get clearValue() {
    return this.getNumberAttribute('clear_value');
  }
  public set clearValue(value: number) {
    this._clearValue = value;
  }
  public resetClearValue() {
    this._clearValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clearValueInput() {
    return this._clearValue;
  }

  // set_percent - computed: false, optional: true, required: false
  private _setPercent?: number; 
  public get setPercent() {
    return this.getNumberAttribute('set_percent');
  }
  public set setPercent(value: number) {
    this._setPercent = value;
  }
  public resetSetPercent() {
    this._setPercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setPercentInput() {
    return this._setPercent;
  }

  // set_value - computed: false, optional: true, required: false
  private _setValue?: number; 
  public get setValue() {
    return this.getNumberAttribute('set_value');
  }
  public set setValue(value: number) {
    this._setValue = value;
  }
  public resetSetValue() {
    this._setValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setValueInput() {
    return this._setValue;
  }
}
export interface BrokerGuaranteedMsgingEventTransactedSessionCountThreshold {
  /**
  * The clear threshold for the value of this counter as a percentage of its maximum value. Falling below this value will trigger a corresponding event.
  * 
  * The minimum access scope/level required to retrieve this attribute is "global/read-only". The minimum access scope/level required to change this attribute is "global/read-write". This attribute may not be returned in a GET. Changes to this attribute are synchronized to HA mates via config-sync. The default value is `60`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/broker#clear_percent Broker#clear_percent}
  */
  readonly clearPercent?: number;
  /**
  * The clear threshold for the absolute value of this counter. Falling below this value will trigger a corresponding event.
  * 
  * The minimum access scope/level required to retrieve this attribute is "global/read-only". The minimum access scope/level required to change this attribute is "global/read-write". This attribute may not be returned in a GET. Changes to this attribute are synchronized to HA mates via config-sync. The default is to have no `clear_value`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/broker#clear_value Broker#clear_value}
  */
  readonly clearValue?: number;
  /**
  * The set threshold for the value of this counter as a percentage of its maximum value. Exceeding this value will trigger a corresponding event.
  * 
  * The minimum access scope/level required to retrieve this attribute is "global/read-only". The minimum access scope/level required to change this attribute is "global/read-write". This attribute may not be returned in a GET. Changes to this attribute are synchronized to HA mates via config-sync. The default value is `80`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/broker#set_percent Broker#set_percent}
  */
  readonly setPercent?: number;
  /**
  * The set threshold for the absolute value of this counter. Exceeding this value will trigger a corresponding event.
  * 
  * The minimum access scope/level required to retrieve this attribute is "global/read-only". The minimum access scope/level required to change this attribute is "global/read-write". This attribute may not be returned in a GET. Changes to this attribute are synchronized to HA mates via config-sync. The default is to have no `set_value`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/broker#set_value Broker#set_value}
  */
  readonly setValue?: number;
}

export function brokerGuaranteedMsgingEventTransactedSessionCountThresholdToTerraform(struct?: BrokerGuaranteedMsgingEventTransactedSessionCountThreshold | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    clear_percent: cdktf.numberToTerraform(struct!.clearPercent),
    clear_value: cdktf.numberToTerraform(struct!.clearValue),
    set_percent: cdktf.numberToTerraform(struct!.setPercent),
    set_value: cdktf.numberToTerraform(struct!.setValue),
  }
}


export function brokerGuaranteedMsgingEventTransactedSessionCountThresholdToHclTerraform(struct?: BrokerGuaranteedMsgingEventTransactedSessionCountThreshold | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    clear_percent: {
      value: cdktf.numberToHclTerraform(struct!.clearPercent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    clear_value: {
      value: cdktf.numberToHclTerraform(struct!.clearValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    set_percent: {
      value: cdktf.numberToHclTerraform(struct!.setPercent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    set_value: {
      value: cdktf.numberToHclTerraform(struct!.setValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BrokerGuaranteedMsgingEventTransactedSessionCountThresholdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BrokerGuaranteedMsgingEventTransactedSessionCountThreshold | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clearPercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.clearPercent = this._clearPercent;
    }
    if (this._clearValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clearValue = this._clearValue;
    }
    if (this._setPercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.setPercent = this._setPercent;
    }
    if (this._setValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.setValue = this._setValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BrokerGuaranteedMsgingEventTransactedSessionCountThreshold | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clearPercent = undefined;
      this._clearValue = undefined;
      this._setPercent = undefined;
      this._setValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clearPercent = value.clearPercent;
      this._clearValue = value.clearValue;
      this._setPercent = value.setPercent;
      this._setValue = value.setValue;
    }
  }

  // clear_percent - computed: false, optional: true, required: false
  private _clearPercent?: number; 
  public get clearPercent() {
    return this.getNumberAttribute('clear_percent');
  }
  public set clearPercent(value: number) {
    this._clearPercent = value;
  }
  public resetClearPercent() {
    this._clearPercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clearPercentInput() {
    return this._clearPercent;
  }

  // clear_value - computed: false, optional: true, required: false
  private _clearValue?: number; 
  public get clearValue() {
    return this.getNumberAttribute('clear_value');
  }
  public set clearValue(value: number) {
    this._clearValue = value;
  }
  public resetClearValue() {
    this._clearValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clearValueInput() {
    return this._clearValue;
  }

  // set_percent - computed: false, optional: true, required: false
  private _setPercent?: number; 
  public get setPercent() {
    return this.getNumberAttribute('set_percent');
  }
  public set setPercent(value: number) {
    this._setPercent = value;
  }
  public resetSetPercent() {
    this._setPercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setPercentInput() {
    return this._setPercent;
  }

  // set_value - computed: false, optional: true, required: false
  private _setValue?: number; 
  public get setValue() {
    return this.getNumberAttribute('set_value');
  }
  public set setValue(value: number) {
    this._setValue = value;
  }
  public resetSetValue() {
    this._setValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setValueInput() {
    return this._setValue;
  }
}
export interface BrokerGuaranteedMsgingEventTransactedSessionResourceCountThreshold {
  /**
  * The clear threshold for the value of this counter as a percentage of its maximum value. Falling below this value will trigger a corresponding event.
  * 
  * The minimum access scope/level required to retrieve this attribute is "global/read-only". The minimum access scope/level required to change this attribute is "global/read-write". Changes to this attribute are synchronized to HA mates via config-sync. The default value is `60`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/broker#clear_percent Broker#clear_percent}
  */
  readonly clearPercent?: number;
  /**
  * The set threshold for the value of this counter as a percentage of its maximum value. Exceeding this value will trigger a corresponding event.
  * 
  * The minimum access scope/level required to retrieve this attribute is "global/read-only". The minimum access scope/level required to change this attribute is "global/read-write". Changes to this attribute are synchronized to HA mates via config-sync. The default value is `80`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/broker#set_percent Broker#set_percent}
  */
  readonly setPercent?: number;
}

export function brokerGuaranteedMsgingEventTransactedSessionResourceCountThresholdToTerraform(struct?: BrokerGuaranteedMsgingEventTransactedSessionResourceCountThreshold | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    clear_percent: cdktf.numberToTerraform(struct!.clearPercent),
    set_percent: cdktf.numberToTerraform(struct!.setPercent),
  }
}


export function brokerGuaranteedMsgingEventTransactedSessionResourceCountThresholdToHclTerraform(struct?: BrokerGuaranteedMsgingEventTransactedSessionResourceCountThreshold | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    clear_percent: {
      value: cdktf.numberToHclTerraform(struct!.clearPercent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    set_percent: {
      value: cdktf.numberToHclTerraform(struct!.setPercent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BrokerGuaranteedMsgingEventTransactedSessionResourceCountThresholdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BrokerGuaranteedMsgingEventTransactedSessionResourceCountThreshold | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clearPercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.clearPercent = this._clearPercent;
    }
    if (this._setPercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.setPercent = this._setPercent;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BrokerGuaranteedMsgingEventTransactedSessionResourceCountThreshold | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clearPercent = undefined;
      this._setPercent = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clearPercent = value.clearPercent;
      this._setPercent = value.setPercent;
    }
  }

  // clear_percent - computed: false, optional: true, required: false
  private _clearPercent?: number; 
  public get clearPercent() {
    return this.getNumberAttribute('clear_percent');
  }
  public set clearPercent(value: number) {
    this._clearPercent = value;
  }
  public resetClearPercent() {
    this._clearPercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clearPercentInput() {
    return this._clearPercent;
  }

  // set_percent - computed: false, optional: true, required: false
  private _setPercent?: number; 
  public get setPercent() {
    return this.getNumberAttribute('set_percent');
  }
  public set setPercent(value: number) {
    this._setPercent = value;
  }
  public resetSetPercent() {
    this._setPercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setPercentInput() {
    return this._setPercent;
  }
}
export interface BrokerGuaranteedMsgingEventTransactionCountThreshold {
  /**
  * The clear threshold for the value of this counter as a percentage of its maximum value. Falling below this value will trigger a corresponding event.
  * 
  * The minimum access scope/level required to retrieve this attribute is "global/read-only". The minimum access scope/level required to change this attribute is "global/read-write". This attribute may not be returned in a GET. Changes to this attribute are synchronized to HA mates via config-sync. The default value is `60`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/broker#clear_percent Broker#clear_percent}
  */
  readonly clearPercent?: number;
  /**
  * The clear threshold for the absolute value of this counter. Falling below this value will trigger a corresponding event.
  * 
  * The minimum access scope/level required to retrieve this attribute is "global/read-only". The minimum access scope/level required to change this attribute is "global/read-write". This attribute may not be returned in a GET. Changes to this attribute are synchronized to HA mates via config-sync. The default is not applicable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/broker#clear_value Broker#clear_value}
  */
  readonly clearValue?: number;
  /**
  * The set threshold for the value of this counter as a percentage of its maximum value. Exceeding this value will trigger a corresponding event.
  * 
  * The minimum access scope/level required to retrieve this attribute is "global/read-only". The minimum access scope/level required to change this attribute is "global/read-write". This attribute may not be returned in a GET. Changes to this attribute are synchronized to HA mates via config-sync. The default value is `80`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/broker#set_percent Broker#set_percent}
  */
  readonly setPercent?: number;
  /**
  * The set threshold for the absolute value of this counter. Exceeding this value will trigger a corresponding event.
  * 
  * The minimum access scope/level required to retrieve this attribute is "global/read-only". The minimum access scope/level required to change this attribute is "global/read-write". This attribute may not be returned in a GET. Changes to this attribute are synchronized to HA mates via config-sync. The default is not applicable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/broker#set_value Broker#set_value}
  */
  readonly setValue?: number;
}

export function brokerGuaranteedMsgingEventTransactionCountThresholdToTerraform(struct?: BrokerGuaranteedMsgingEventTransactionCountThreshold | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    clear_percent: cdktf.numberToTerraform(struct!.clearPercent),
    clear_value: cdktf.numberToTerraform(struct!.clearValue),
    set_percent: cdktf.numberToTerraform(struct!.setPercent),
    set_value: cdktf.numberToTerraform(struct!.setValue),
  }
}


export function brokerGuaranteedMsgingEventTransactionCountThresholdToHclTerraform(struct?: BrokerGuaranteedMsgingEventTransactionCountThreshold | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    clear_percent: {
      value: cdktf.numberToHclTerraform(struct!.clearPercent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    clear_value: {
      value: cdktf.numberToHclTerraform(struct!.clearValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    set_percent: {
      value: cdktf.numberToHclTerraform(struct!.setPercent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    set_value: {
      value: cdktf.numberToHclTerraform(struct!.setValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BrokerGuaranteedMsgingEventTransactionCountThresholdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BrokerGuaranteedMsgingEventTransactionCountThreshold | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clearPercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.clearPercent = this._clearPercent;
    }
    if (this._clearValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clearValue = this._clearValue;
    }
    if (this._setPercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.setPercent = this._setPercent;
    }
    if (this._setValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.setValue = this._setValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BrokerGuaranteedMsgingEventTransactionCountThreshold | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clearPercent = undefined;
      this._clearValue = undefined;
      this._setPercent = undefined;
      this._setValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clearPercent = value.clearPercent;
      this._clearValue = value.clearValue;
      this._setPercent = value.setPercent;
      this._setValue = value.setValue;
    }
  }

  // clear_percent - computed: false, optional: true, required: false
  private _clearPercent?: number; 
  public get clearPercent() {
    return this.getNumberAttribute('clear_percent');
  }
  public set clearPercent(value: number) {
    this._clearPercent = value;
  }
  public resetClearPercent() {
    this._clearPercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clearPercentInput() {
    return this._clearPercent;
  }

  // clear_value - computed: false, optional: true, required: false
  private _clearValue?: number; 
  public get clearValue() {
    return this.getNumberAttribute('clear_value');
  }
  public set clearValue(value: number) {
    this._clearValue = value;
  }
  public resetClearValue() {
    this._clearValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clearValueInput() {
    return this._clearValue;
  }

  // set_percent - computed: false, optional: true, required: false
  private _setPercent?: number; 
  public get setPercent() {
    return this.getNumberAttribute('set_percent');
  }
  public set setPercent(value: number) {
    this._setPercent = value;
  }
  public resetSetPercent() {
    this._setPercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setPercentInput() {
    return this._setPercent;
  }

  // set_value - computed: false, optional: true, required: false
  private _setValue?: number; 
  public get setValue() {
    return this.getNumberAttribute('set_value');
  }
  public set setValue(value: number) {
    this._setValue = value;
  }
  public resetSetValue() {
    this._setValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setValueInput() {
    return this._setValue;
  }
}
export interface BrokerServiceEventConnectionCountThreshold {
  /**
  * The clear threshold for the value of this counter as a percentage of its maximum value. Falling below this value will trigger a corresponding event.
  * 
  * The minimum access scope/level required to retrieve this attribute is "global/read-only". The minimum access scope/level required to change this attribute is "global/read-write". This attribute may not be returned in a GET. Changes to this attribute are synchronized to HA mates via config-sync. The default value is `60`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/broker#clear_percent Broker#clear_percent}
  */
  readonly clearPercent?: number;
  /**
  * The clear threshold for the absolute value of this counter. Falling below this value will trigger a corresponding event.
  * 
  * The minimum access scope/level required to retrieve this attribute is "global/read-only". The minimum access scope/level required to change this attribute is "global/read-write". This attribute may not be returned in a GET. Changes to this attribute are synchronized to HA mates via config-sync. The default is not applicable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/broker#clear_value Broker#clear_value}
  */
  readonly clearValue?: number;
  /**
  * The set threshold for the value of this counter as a percentage of its maximum value. Exceeding this value will trigger a corresponding event.
  * 
  * The minimum access scope/level required to retrieve this attribute is "global/read-only". The minimum access scope/level required to change this attribute is "global/read-write". This attribute may not be returned in a GET. Changes to this attribute are synchronized to HA mates via config-sync. The default value is `80`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/broker#set_percent Broker#set_percent}
  */
  readonly setPercent?: number;
  /**
  * The set threshold for the absolute value of this counter. Exceeding this value will trigger a corresponding event.
  * 
  * The minimum access scope/level required to retrieve this attribute is "global/read-only". The minimum access scope/level required to change this attribute is "global/read-write". This attribute may not be returned in a GET. Changes to this attribute are synchronized to HA mates via config-sync. The default is not applicable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/broker#set_value Broker#set_value}
  */
  readonly setValue?: number;
}

export function brokerServiceEventConnectionCountThresholdToTerraform(struct?: BrokerServiceEventConnectionCountThreshold | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    clear_percent: cdktf.numberToTerraform(struct!.clearPercent),
    clear_value: cdktf.numberToTerraform(struct!.clearValue),
    set_percent: cdktf.numberToTerraform(struct!.setPercent),
    set_value: cdktf.numberToTerraform(struct!.setValue),
  }
}


export function brokerServiceEventConnectionCountThresholdToHclTerraform(struct?: BrokerServiceEventConnectionCountThreshold | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    clear_percent: {
      value: cdktf.numberToHclTerraform(struct!.clearPercent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    clear_value: {
      value: cdktf.numberToHclTerraform(struct!.clearValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    set_percent: {
      value: cdktf.numberToHclTerraform(struct!.setPercent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    set_value: {
      value: cdktf.numberToHclTerraform(struct!.setValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BrokerServiceEventConnectionCountThresholdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BrokerServiceEventConnectionCountThreshold | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clearPercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.clearPercent = this._clearPercent;
    }
    if (this._clearValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clearValue = this._clearValue;
    }
    if (this._setPercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.setPercent = this._setPercent;
    }
    if (this._setValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.setValue = this._setValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BrokerServiceEventConnectionCountThreshold | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clearPercent = undefined;
      this._clearValue = undefined;
      this._setPercent = undefined;
      this._setValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clearPercent = value.clearPercent;
      this._clearValue = value.clearValue;
      this._setPercent = value.setPercent;
      this._setValue = value.setValue;
    }
  }

  // clear_percent - computed: false, optional: true, required: false
  private _clearPercent?: number; 
  public get clearPercent() {
    return this.getNumberAttribute('clear_percent');
  }
  public set clearPercent(value: number) {
    this._clearPercent = value;
  }
  public resetClearPercent() {
    this._clearPercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clearPercentInput() {
    return this._clearPercent;
  }

  // clear_value - computed: false, optional: true, required: false
  private _clearValue?: number; 
  public get clearValue() {
    return this.getNumberAttribute('clear_value');
  }
  public set clearValue(value: number) {
    this._clearValue = value;
  }
  public resetClearValue() {
    this._clearValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clearValueInput() {
    return this._clearValue;
  }

  // set_percent - computed: false, optional: true, required: false
  private _setPercent?: number; 
  public get setPercent() {
    return this.getNumberAttribute('set_percent');
  }
  public set setPercent(value: number) {
    this._setPercent = value;
  }
  public resetSetPercent() {
    this._setPercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setPercentInput() {
    return this._setPercent;
  }

  // set_value - computed: false, optional: true, required: false
  private _setValue?: number; 
  public get setValue() {
    return this.getNumberAttribute('set_value');
  }
  public set setValue(value: number) {
    this._setValue = value;
  }
  public resetSetValue() {
    this._setValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setValueInput() {
    return this._setValue;
  }
}
export interface BrokerServiceRestEventOutgoingConnectionCountThreshold {
  /**
  * The clear threshold for the value of this counter as a percentage of its maximum value. Falling below this value will trigger a corresponding event.
  * 
  * The minimum access scope/level required to retrieve this attribute is "global/read-only". The minimum access scope/level required to change this attribute is "global/read-write". This attribute may not be returned in a GET. Changes to this attribute are synchronized to HA mates via config-sync. The default value is `60`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/broker#clear_percent Broker#clear_percent}
  */
  readonly clearPercent?: number;
  /**
  * The clear threshold for the absolute value of this counter. Falling below this value will trigger a corresponding event.
  * 
  * The minimum access scope/level required to retrieve this attribute is "global/read-only". The minimum access scope/level required to change this attribute is "global/read-write". This attribute may not be returned in a GET. Changes to this attribute are synchronized to HA mates via config-sync. The default is not applicable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/broker#clear_value Broker#clear_value}
  */
  readonly clearValue?: number;
  /**
  * The set threshold for the value of this counter as a percentage of its maximum value. Exceeding this value will trigger a corresponding event.
  * 
  * The minimum access scope/level required to retrieve this attribute is "global/read-only". The minimum access scope/level required to change this attribute is "global/read-write". This attribute may not be returned in a GET. Changes to this attribute are synchronized to HA mates via config-sync. The default value is `80`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/broker#set_percent Broker#set_percent}
  */
  readonly setPercent?: number;
  /**
  * The set threshold for the absolute value of this counter. Exceeding this value will trigger a corresponding event.
  * 
  * The minimum access scope/level required to retrieve this attribute is "global/read-only". The minimum access scope/level required to change this attribute is "global/read-write". This attribute may not be returned in a GET. Changes to this attribute are synchronized to HA mates via config-sync. The default is not applicable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/broker#set_value Broker#set_value}
  */
  readonly setValue?: number;
}

export function brokerServiceRestEventOutgoingConnectionCountThresholdToTerraform(struct?: BrokerServiceRestEventOutgoingConnectionCountThreshold | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    clear_percent: cdktf.numberToTerraform(struct!.clearPercent),
    clear_value: cdktf.numberToTerraform(struct!.clearValue),
    set_percent: cdktf.numberToTerraform(struct!.setPercent),
    set_value: cdktf.numberToTerraform(struct!.setValue),
  }
}


export function brokerServiceRestEventOutgoingConnectionCountThresholdToHclTerraform(struct?: BrokerServiceRestEventOutgoingConnectionCountThreshold | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    clear_percent: {
      value: cdktf.numberToHclTerraform(struct!.clearPercent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    clear_value: {
      value: cdktf.numberToHclTerraform(struct!.clearValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    set_percent: {
      value: cdktf.numberToHclTerraform(struct!.setPercent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    set_value: {
      value: cdktf.numberToHclTerraform(struct!.setValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BrokerServiceRestEventOutgoingConnectionCountThresholdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BrokerServiceRestEventOutgoingConnectionCountThreshold | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clearPercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.clearPercent = this._clearPercent;
    }
    if (this._clearValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clearValue = this._clearValue;
    }
    if (this._setPercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.setPercent = this._setPercent;
    }
    if (this._setValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.setValue = this._setValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BrokerServiceRestEventOutgoingConnectionCountThreshold | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clearPercent = undefined;
      this._clearValue = undefined;
      this._setPercent = undefined;
      this._setValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clearPercent = value.clearPercent;
      this._clearValue = value.clearValue;
      this._setPercent = value.setPercent;
      this._setValue = value.setValue;
    }
  }

  // clear_percent - computed: false, optional: true, required: false
  private _clearPercent?: number; 
  public get clearPercent() {
    return this.getNumberAttribute('clear_percent');
  }
  public set clearPercent(value: number) {
    this._clearPercent = value;
  }
  public resetClearPercent() {
    this._clearPercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clearPercentInput() {
    return this._clearPercent;
  }

  // clear_value - computed: false, optional: true, required: false
  private _clearValue?: number; 
  public get clearValue() {
    return this.getNumberAttribute('clear_value');
  }
  public set clearValue(value: number) {
    this._clearValue = value;
  }
  public resetClearValue() {
    this._clearValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clearValueInput() {
    return this._clearValue;
  }

  // set_percent - computed: false, optional: true, required: false
  private _setPercent?: number; 
  public get setPercent() {
    return this.getNumberAttribute('set_percent');
  }
  public set setPercent(value: number) {
    this._setPercent = value;
  }
  public resetSetPercent() {
    this._setPercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setPercentInput() {
    return this._setPercent;
  }

  // set_value - computed: false, optional: true, required: false
  private _setValue?: number; 
  public get setValue() {
    return this.getNumberAttribute('set_value');
  }
  public set setValue(value: number) {
    this._setValue = value;
  }
  public resetSetValue() {
    this._setValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setValueInput() {
    return this._setValue;
  }
}
export interface BrokerServiceSmfEventConnectionCountThreshold {
  /**
  * The clear threshold for the value of this counter as a percentage of its maximum value. Falling below this value will trigger a corresponding event.
  * 
  * The minimum access scope/level required to retrieve this attribute is "global/read-only". The minimum access scope/level required to change this attribute is "global/read-write". This attribute may not be returned in a GET. Changes to this attribute are synchronized to HA mates via config-sync. The default value is `60`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/broker#clear_percent Broker#clear_percent}
  */
  readonly clearPercent?: number;
  /**
  * The clear threshold for the absolute value of this counter. Falling below this value will trigger a corresponding event.
  * 
  * The minimum access scope/level required to retrieve this attribute is "global/read-only". The minimum access scope/level required to change this attribute is "global/read-write". This attribute may not be returned in a GET. Changes to this attribute are synchronized to HA mates via config-sync. The default is not applicable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/broker#clear_value Broker#clear_value}
  */
  readonly clearValue?: number;
  /**
  * The set threshold for the value of this counter as a percentage of its maximum value. Exceeding this value will trigger a corresponding event.
  * 
  * The minimum access scope/level required to retrieve this attribute is "global/read-only". The minimum access scope/level required to change this attribute is "global/read-write". This attribute may not be returned in a GET. Changes to this attribute are synchronized to HA mates via config-sync. The default value is `80`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/broker#set_percent Broker#set_percent}
  */
  readonly setPercent?: number;
  /**
  * The set threshold for the absolute value of this counter. Exceeding this value will trigger a corresponding event.
  * 
  * The minimum access scope/level required to retrieve this attribute is "global/read-only". The minimum access scope/level required to change this attribute is "global/read-write". This attribute may not be returned in a GET. Changes to this attribute are synchronized to HA mates via config-sync. The default is not applicable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/broker#set_value Broker#set_value}
  */
  readonly setValue?: number;
}

export function brokerServiceSmfEventConnectionCountThresholdToTerraform(struct?: BrokerServiceSmfEventConnectionCountThreshold | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    clear_percent: cdktf.numberToTerraform(struct!.clearPercent),
    clear_value: cdktf.numberToTerraform(struct!.clearValue),
    set_percent: cdktf.numberToTerraform(struct!.setPercent),
    set_value: cdktf.numberToTerraform(struct!.setValue),
  }
}


export function brokerServiceSmfEventConnectionCountThresholdToHclTerraform(struct?: BrokerServiceSmfEventConnectionCountThreshold | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    clear_percent: {
      value: cdktf.numberToHclTerraform(struct!.clearPercent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    clear_value: {
      value: cdktf.numberToHclTerraform(struct!.clearValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    set_percent: {
      value: cdktf.numberToHclTerraform(struct!.setPercent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    set_value: {
      value: cdktf.numberToHclTerraform(struct!.setValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BrokerServiceSmfEventConnectionCountThresholdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BrokerServiceSmfEventConnectionCountThreshold | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clearPercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.clearPercent = this._clearPercent;
    }
    if (this._clearValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clearValue = this._clearValue;
    }
    if (this._setPercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.setPercent = this._setPercent;
    }
    if (this._setValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.setValue = this._setValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BrokerServiceSmfEventConnectionCountThreshold | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clearPercent = undefined;
      this._clearValue = undefined;
      this._setPercent = undefined;
      this._setValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clearPercent = value.clearPercent;
      this._clearValue = value.clearValue;
      this._setPercent = value.setPercent;
      this._setValue = value.setValue;
    }
  }

  // clear_percent - computed: false, optional: true, required: false
  private _clearPercent?: number; 
  public get clearPercent() {
    return this.getNumberAttribute('clear_percent');
  }
  public set clearPercent(value: number) {
    this._clearPercent = value;
  }
  public resetClearPercent() {
    this._clearPercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clearPercentInput() {
    return this._clearPercent;
  }

  // clear_value - computed: false, optional: true, required: false
  private _clearValue?: number; 
  public get clearValue() {
    return this.getNumberAttribute('clear_value');
  }
  public set clearValue(value: number) {
    this._clearValue = value;
  }
  public resetClearValue() {
    this._clearValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clearValueInput() {
    return this._clearValue;
  }

  // set_percent - computed: false, optional: true, required: false
  private _setPercent?: number; 
  public get setPercent() {
    return this.getNumberAttribute('set_percent');
  }
  public set setPercent(value: number) {
    this._setPercent = value;
  }
  public resetSetPercent() {
    this._setPercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setPercentInput() {
    return this._setPercent;
  }

  // set_value - computed: false, optional: true, required: false
  private _setValue?: number; 
  public get setValue() {
    return this.getNumberAttribute('set_value');
  }
  public set setValue(value: number) {
    this._setValue = value;
  }
  public resetSetValue() {
    this._setValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setValueInput() {
    return this._setValue;
  }
}
export interface BrokerServiceTlsEventConnectionCountThreshold {
  /**
  * The clear threshold for the value of this counter as a percentage of its maximum value. Falling below this value will trigger a corresponding event.
  * 
  * The minimum access scope/level required to retrieve this attribute is "global/read-only". The minimum access scope/level required to change this attribute is "global/read-write". This attribute may not be returned in a GET. Changes to this attribute are synchronized to HA mates via config-sync. The default value is `60`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/broker#clear_percent Broker#clear_percent}
  */
  readonly clearPercent?: number;
  /**
  * The clear threshold for the absolute value of this counter. Falling below this value will trigger a corresponding event.
  * 
  * The minimum access scope/level required to retrieve this attribute is "global/read-only". The minimum access scope/level required to change this attribute is "global/read-write". This attribute may not be returned in a GET. Changes to this attribute are synchronized to HA mates via config-sync. The default is not applicable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/broker#clear_value Broker#clear_value}
  */
  readonly clearValue?: number;
  /**
  * The set threshold for the value of this counter as a percentage of its maximum value. Exceeding this value will trigger a corresponding event.
  * 
  * The minimum access scope/level required to retrieve this attribute is "global/read-only". The minimum access scope/level required to change this attribute is "global/read-write". This attribute may not be returned in a GET. Changes to this attribute are synchronized to HA mates via config-sync. The default value is `80`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/broker#set_percent Broker#set_percent}
  */
  readonly setPercent?: number;
  /**
  * The set threshold for the absolute value of this counter. Exceeding this value will trigger a corresponding event.
  * 
  * The minimum access scope/level required to retrieve this attribute is "global/read-only". The minimum access scope/level required to change this attribute is "global/read-write". This attribute may not be returned in a GET. Changes to this attribute are synchronized to HA mates via config-sync. The default is not applicable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/broker#set_value Broker#set_value}
  */
  readonly setValue?: number;
}

export function brokerServiceTlsEventConnectionCountThresholdToTerraform(struct?: BrokerServiceTlsEventConnectionCountThreshold | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    clear_percent: cdktf.numberToTerraform(struct!.clearPercent),
    clear_value: cdktf.numberToTerraform(struct!.clearValue),
    set_percent: cdktf.numberToTerraform(struct!.setPercent),
    set_value: cdktf.numberToTerraform(struct!.setValue),
  }
}


export function brokerServiceTlsEventConnectionCountThresholdToHclTerraform(struct?: BrokerServiceTlsEventConnectionCountThreshold | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    clear_percent: {
      value: cdktf.numberToHclTerraform(struct!.clearPercent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    clear_value: {
      value: cdktf.numberToHclTerraform(struct!.clearValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    set_percent: {
      value: cdktf.numberToHclTerraform(struct!.setPercent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    set_value: {
      value: cdktf.numberToHclTerraform(struct!.setValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BrokerServiceTlsEventConnectionCountThresholdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BrokerServiceTlsEventConnectionCountThreshold | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clearPercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.clearPercent = this._clearPercent;
    }
    if (this._clearValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clearValue = this._clearValue;
    }
    if (this._setPercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.setPercent = this._setPercent;
    }
    if (this._setValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.setValue = this._setValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BrokerServiceTlsEventConnectionCountThreshold | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clearPercent = undefined;
      this._clearValue = undefined;
      this._setPercent = undefined;
      this._setValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clearPercent = value.clearPercent;
      this._clearValue = value.clearValue;
      this._setPercent = value.setPercent;
      this._setValue = value.setValue;
    }
  }

  // clear_percent - computed: false, optional: true, required: false
  private _clearPercent?: number; 
  public get clearPercent() {
    return this.getNumberAttribute('clear_percent');
  }
  public set clearPercent(value: number) {
    this._clearPercent = value;
  }
  public resetClearPercent() {
    this._clearPercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clearPercentInput() {
    return this._clearPercent;
  }

  // clear_value - computed: false, optional: true, required: false
  private _clearValue?: number; 
  public get clearValue() {
    return this.getNumberAttribute('clear_value');
  }
  public set clearValue(value: number) {
    this._clearValue = value;
  }
  public resetClearValue() {
    this._clearValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clearValueInput() {
    return this._clearValue;
  }

  // set_percent - computed: false, optional: true, required: false
  private _setPercent?: number; 
  public get setPercent() {
    return this.getNumberAttribute('set_percent');
  }
  public set setPercent(value: number) {
    this._setPercent = value;
  }
  public resetSetPercent() {
    this._setPercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setPercentInput() {
    return this._setPercent;
  }

  // set_value - computed: false, optional: true, required: false
  private _setValue?: number; 
  public get setValue() {
    return this.getNumberAttribute('set_value');
  }
  public set setValue(value: number) {
    this._setValue = value;
  }
  public resetSetValue() {
    this._setValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setValueInput() {
    return this._setValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/broker solacebroker_broker}
*/
export class Broker extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "solacebroker_broker";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Broker resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Broker to import
  * @param importFromId The id of the existing Broker that should be imported. Refer to the {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/broker#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Broker to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "solacebroker_broker", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/broker solacebroker_broker} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BrokerConfig = {}
  */
  public constructor(scope: Construct, id: string, config: BrokerConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'solacebroker_broker',
      terraformGeneratorMetadata: {
        providerName: 'solacebroker',
        providerVersion: '1.2.0',
        providerVersionConstraint: '1.2.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._authBruteForceProtectionEnabled = config.authBruteForceProtectionEnabled;
    this._authClientCertRevocationCheckMode = config.authClientCertRevocationCheckMode;
    this._configSyncAuthenticationClientCertMaxChainDepth = config.configSyncAuthenticationClientCertMaxChainDepth;
    this._configSyncAuthenticationClientCertValidateDateEnabled = config.configSyncAuthenticationClientCertValidateDateEnabled;
    this._configSyncClientProfileTcpInitialCongestionWindow = config.configSyncClientProfileTcpInitialCongestionWindow;
    this._configSyncClientProfileTcpKeepaliveCount = config.configSyncClientProfileTcpKeepaliveCount;
    this._configSyncClientProfileTcpKeepaliveIdle = config.configSyncClientProfileTcpKeepaliveIdle;
    this._configSyncClientProfileTcpKeepaliveInterval = config.configSyncClientProfileTcpKeepaliveInterval;
    this._configSyncClientProfileTcpMaxWindow = config.configSyncClientProfileTcpMaxWindow;
    this._configSyncClientProfileTcpMss = config.configSyncClientProfileTcpMss;
    this._configSyncEnabled = config.configSyncEnabled;
    this._configSyncSynchronizeUsernameEnabled = config.configSyncSynchronizeUsernameEnabled;
    this._configSyncTlsEnabled = config.configSyncTlsEnabled;
    this._guaranteedMsgingDefragmentationScheduleDayList = config.guaranteedMsgingDefragmentationScheduleDayList;
    this._guaranteedMsgingDefragmentationScheduleEnabled = config.guaranteedMsgingDefragmentationScheduleEnabled;
    this._guaranteedMsgingDefragmentationScheduleTimeList = config.guaranteedMsgingDefragmentationScheduleTimeList;
    this._guaranteedMsgingDefragmentationThresholdEnabled = config.guaranteedMsgingDefragmentationThresholdEnabled;
    this._guaranteedMsgingDefragmentationThresholdFragmentationPercentage = config.guaranteedMsgingDefragmentationThresholdFragmentationPercentage;
    this._guaranteedMsgingDefragmentationThresholdMinInterval = config.guaranteedMsgingDefragmentationThresholdMinInterval;
    this._guaranteedMsgingDefragmentationThresholdUsagePercentage = config.guaranteedMsgingDefragmentationThresholdUsagePercentage;
    this._guaranteedMsgingEnabled = config.guaranteedMsgingEnabled;
    this._guaranteedMsgingEventCacheUsageThreshold.internalValue = config.guaranteedMsgingEventCacheUsageThreshold;
    this._guaranteedMsgingEventDeliveredUnackedThreshold.internalValue = config.guaranteedMsgingEventDeliveredUnackedThreshold;
    this._guaranteedMsgingEventDiskUsageThreshold.internalValue = config.guaranteedMsgingEventDiskUsageThreshold;
    this._guaranteedMsgingEventEgressFlowCountThreshold.internalValue = config.guaranteedMsgingEventEgressFlowCountThreshold;
    this._guaranteedMsgingEventEndpointCountThreshold.internalValue = config.guaranteedMsgingEventEndpointCountThreshold;
    this._guaranteedMsgingEventIngressFlowCountThreshold.internalValue = config.guaranteedMsgingEventIngressFlowCountThreshold;
    this._guaranteedMsgingEventMsgCountThreshold.internalValue = config.guaranteedMsgingEventMsgCountThreshold;
    this._guaranteedMsgingEventMsgSpoolFileCountThreshold.internalValue = config.guaranteedMsgingEventMsgSpoolFileCountThreshold;
    this._guaranteedMsgingEventMsgSpoolUsageThreshold.internalValue = config.guaranteedMsgingEventMsgSpoolUsageThreshold;
    this._guaranteedMsgingEventTransactedSessionCountThreshold.internalValue = config.guaranteedMsgingEventTransactedSessionCountThreshold;
    this._guaranteedMsgingEventTransactedSessionResourceCountThreshold.internalValue = config.guaranteedMsgingEventTransactedSessionResourceCountThreshold;
    this._guaranteedMsgingEventTransactionCountThreshold.internalValue = config.guaranteedMsgingEventTransactionCountThreshold;
    this._guaranteedMsgingMaxCacheUsage = config.guaranteedMsgingMaxCacheUsage;
    this._guaranteedMsgingMaxMsgSpoolUsage = config.guaranteedMsgingMaxMsgSpoolUsage;
    this._guaranteedMsgingMsgSpoolSyncMirroredMsgAckTimeout = config.guaranteedMsgingMsgSpoolSyncMirroredMsgAckTimeout;
    this._guaranteedMsgingMsgSpoolSyncMirroredSpoolFileAckTimeout = config.guaranteedMsgingMsgSpoolSyncMirroredSpoolFileAckTimeout;
    this._guaranteedMsgingTransactionReplicationCompatibilityMode = config.guaranteedMsgingTransactionReplicationCompatibilityMode;
    this._oauthProfileDefault = config.oauthProfileDefault;
    this._serviceAmqpEnabled = config.serviceAmqpEnabled;
    this._serviceAmqpTlsListenPort = config.serviceAmqpTlsListenPort;
    this._serviceEventConnectionCountThreshold.internalValue = config.serviceEventConnectionCountThreshold;
    this._serviceHealthCheckEnabled = config.serviceHealthCheckEnabled;
    this._serviceHealthCheckListenPort = config.serviceHealthCheckListenPort;
    this._serviceHealthCheckTlsEnabled = config.serviceHealthCheckTlsEnabled;
    this._serviceHealthCheckTlsListenPort = config.serviceHealthCheckTlsListenPort;
    this._serviceMateLinkEnabled = config.serviceMateLinkEnabled;
    this._serviceMateLinkListenPort = config.serviceMateLinkListenPort;
    this._serviceMqttEnabled = config.serviceMqttEnabled;
    this._serviceMsgBackboneEnabled = config.serviceMsgBackboneEnabled;
    this._serviceRedundancyEnabled = config.serviceRedundancyEnabled;
    this._serviceRedundancyFirstListenPort = config.serviceRedundancyFirstListenPort;
    this._serviceRestEventOutgoingConnectionCountThreshold.internalValue = config.serviceRestEventOutgoingConnectionCountThreshold;
    this._serviceRestIncomingEnabled = config.serviceRestIncomingEnabled;
    this._serviceRestOutgoingEnabled = config.serviceRestOutgoingEnabled;
    this._serviceSempCorsAllowAnyHostEnabled = config.serviceSempCorsAllowAnyHostEnabled;
    this._serviceSempLegacyTimeoutEnabled = config.serviceSempLegacyTimeoutEnabled;
    this._serviceSempPlainTextEnabled = config.serviceSempPlainTextEnabled;
    this._serviceSempSessionIdleTimeout = config.serviceSempSessionIdleTimeout;
    this._serviceSempSessionMaxLifetime = config.serviceSempSessionMaxLifetime;
    this._serviceSempTlsEnabled = config.serviceSempTlsEnabled;
    this._serviceSmfCompressionListenPort = config.serviceSmfCompressionListenPort;
    this._serviceSmfEnabled = config.serviceSmfEnabled;
    this._serviceSmfEventConnectionCountThreshold.internalValue = config.serviceSmfEventConnectionCountThreshold;
    this._serviceSmfPlainTextListenPort = config.serviceSmfPlainTextListenPort;
    this._serviceSmfRoutingControlListenPort = config.serviceSmfRoutingControlListenPort;
    this._serviceSmfTlsListenPort = config.serviceSmfTlsListenPort;
    this._serviceTlsEventConnectionCountThreshold.internalValue = config.serviceTlsEventConnectionCountThreshold;
    this._serviceWebTransportEnabled = config.serviceWebTransportEnabled;
    this._serviceWebTransportPlainTextListenPort = config.serviceWebTransportPlainTextListenPort;
    this._serviceWebTransportTlsListenPort = config.serviceWebTransportTlsListenPort;
    this._serviceWebTransportWebUrlSuffix = config.serviceWebTransportWebUrlSuffix;
    this._tlsBlockVersion11Enabled = config.tlsBlockVersion11Enabled;
    this._tlsCipherSuiteManagementList = config.tlsCipherSuiteManagementList;
    this._tlsCipherSuiteMsgBackboneList = config.tlsCipherSuiteMsgBackboneList;
    this._tlsCipherSuiteSecureShellList = config.tlsCipherSuiteSecureShellList;
    this._tlsCrimeExploitProtectionEnabled = config.tlsCrimeExploitProtectionEnabled;
    this._tlsServerCertContent = config.tlsServerCertContent;
    this._tlsServerCertPassword = config.tlsServerCertPassword;
    this._tlsStandardDomainCertificateAuthoritiesEnabled = config.tlsStandardDomainCertificateAuthoritiesEnabled;
    this._tlsTicketLifetime = config.tlsTicketLifetime;
    this._webManagerAllowUnencryptedWizardsEnabled = config.webManagerAllowUnencryptedWizardsEnabled;
    this._webManagerRedirectHttpEnabled = config.webManagerRedirectHttpEnabled;
    this._webManagerRedirectHttpOverrideTlsPort = config.webManagerRedirectHttpOverrideTlsPort;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auth_brute_force_protection_enabled - computed: false, optional: true, required: false
  private _authBruteForceProtectionEnabled?: boolean | cdktf.IResolvable; 
  public get authBruteForceProtectionEnabled() {
    return this.getBooleanAttribute('auth_brute_force_protection_enabled');
  }
  public set authBruteForceProtectionEnabled(value: boolean | cdktf.IResolvable) {
    this._authBruteForceProtectionEnabled = value;
  }
  public resetAuthBruteForceProtectionEnabled() {
    this._authBruteForceProtectionEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authBruteForceProtectionEnabledInput() {
    return this._authBruteForceProtectionEnabled;
  }

  // auth_client_cert_revocation_check_mode - computed: false, optional: true, required: false
  private _authClientCertRevocationCheckMode?: string; 
  public get authClientCertRevocationCheckMode() {
    return this.getStringAttribute('auth_client_cert_revocation_check_mode');
  }
  public set authClientCertRevocationCheckMode(value: string) {
    this._authClientCertRevocationCheckMode = value;
  }
  public resetAuthClientCertRevocationCheckMode() {
    this._authClientCertRevocationCheckMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authClientCertRevocationCheckModeInput() {
    return this._authClientCertRevocationCheckMode;
  }

  // config_sync_authentication_client_cert_max_chain_depth - computed: false, optional: true, required: false
  private _configSyncAuthenticationClientCertMaxChainDepth?: number; 
  public get configSyncAuthenticationClientCertMaxChainDepth() {
    return this.getNumberAttribute('config_sync_authentication_client_cert_max_chain_depth');
  }
  public set configSyncAuthenticationClientCertMaxChainDepth(value: number) {
    this._configSyncAuthenticationClientCertMaxChainDepth = value;
  }
  public resetConfigSyncAuthenticationClientCertMaxChainDepth() {
    this._configSyncAuthenticationClientCertMaxChainDepth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configSyncAuthenticationClientCertMaxChainDepthInput() {
    return this._configSyncAuthenticationClientCertMaxChainDepth;
  }

  // config_sync_authentication_client_cert_validate_date_enabled - computed: false, optional: true, required: false
  private _configSyncAuthenticationClientCertValidateDateEnabled?: boolean | cdktf.IResolvable; 
  public get configSyncAuthenticationClientCertValidateDateEnabled() {
    return this.getBooleanAttribute('config_sync_authentication_client_cert_validate_date_enabled');
  }
  public set configSyncAuthenticationClientCertValidateDateEnabled(value: boolean | cdktf.IResolvable) {
    this._configSyncAuthenticationClientCertValidateDateEnabled = value;
  }
  public resetConfigSyncAuthenticationClientCertValidateDateEnabled() {
    this._configSyncAuthenticationClientCertValidateDateEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configSyncAuthenticationClientCertValidateDateEnabledInput() {
    return this._configSyncAuthenticationClientCertValidateDateEnabled;
  }

  // config_sync_client_profile_tcp_initial_congestion_window - computed: false, optional: true, required: false
  private _configSyncClientProfileTcpInitialCongestionWindow?: number; 
  public get configSyncClientProfileTcpInitialCongestionWindow() {
    return this.getNumberAttribute('config_sync_client_profile_tcp_initial_congestion_window');
  }
  public set configSyncClientProfileTcpInitialCongestionWindow(value: number) {
    this._configSyncClientProfileTcpInitialCongestionWindow = value;
  }
  public resetConfigSyncClientProfileTcpInitialCongestionWindow() {
    this._configSyncClientProfileTcpInitialCongestionWindow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configSyncClientProfileTcpInitialCongestionWindowInput() {
    return this._configSyncClientProfileTcpInitialCongestionWindow;
  }

  // config_sync_client_profile_tcp_keepalive_count - computed: false, optional: true, required: false
  private _configSyncClientProfileTcpKeepaliveCount?: number; 
  public get configSyncClientProfileTcpKeepaliveCount() {
    return this.getNumberAttribute('config_sync_client_profile_tcp_keepalive_count');
  }
  public set configSyncClientProfileTcpKeepaliveCount(value: number) {
    this._configSyncClientProfileTcpKeepaliveCount = value;
  }
  public resetConfigSyncClientProfileTcpKeepaliveCount() {
    this._configSyncClientProfileTcpKeepaliveCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configSyncClientProfileTcpKeepaliveCountInput() {
    return this._configSyncClientProfileTcpKeepaliveCount;
  }

  // config_sync_client_profile_tcp_keepalive_idle - computed: false, optional: true, required: false
  private _configSyncClientProfileTcpKeepaliveIdle?: number; 
  public get configSyncClientProfileTcpKeepaliveIdle() {
    return this.getNumberAttribute('config_sync_client_profile_tcp_keepalive_idle');
  }
  public set configSyncClientProfileTcpKeepaliveIdle(value: number) {
    this._configSyncClientProfileTcpKeepaliveIdle = value;
  }
  public resetConfigSyncClientProfileTcpKeepaliveIdle() {
    this._configSyncClientProfileTcpKeepaliveIdle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configSyncClientProfileTcpKeepaliveIdleInput() {
    return this._configSyncClientProfileTcpKeepaliveIdle;
  }

  // config_sync_client_profile_tcp_keepalive_interval - computed: false, optional: true, required: false
  private _configSyncClientProfileTcpKeepaliveInterval?: number; 
  public get configSyncClientProfileTcpKeepaliveInterval() {
    return this.getNumberAttribute('config_sync_client_profile_tcp_keepalive_interval');
  }
  public set configSyncClientProfileTcpKeepaliveInterval(value: number) {
    this._configSyncClientProfileTcpKeepaliveInterval = value;
  }
  public resetConfigSyncClientProfileTcpKeepaliveInterval() {
    this._configSyncClientProfileTcpKeepaliveInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configSyncClientProfileTcpKeepaliveIntervalInput() {
    return this._configSyncClientProfileTcpKeepaliveInterval;
  }

  // config_sync_client_profile_tcp_max_window - computed: false, optional: true, required: false
  private _configSyncClientProfileTcpMaxWindow?: number; 
  public get configSyncClientProfileTcpMaxWindow() {
    return this.getNumberAttribute('config_sync_client_profile_tcp_max_window');
  }
  public set configSyncClientProfileTcpMaxWindow(value: number) {
    this._configSyncClientProfileTcpMaxWindow = value;
  }
  public resetConfigSyncClientProfileTcpMaxWindow() {
    this._configSyncClientProfileTcpMaxWindow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configSyncClientProfileTcpMaxWindowInput() {
    return this._configSyncClientProfileTcpMaxWindow;
  }

  // config_sync_client_profile_tcp_mss - computed: false, optional: true, required: false
  private _configSyncClientProfileTcpMss?: number; 
  public get configSyncClientProfileTcpMss() {
    return this.getNumberAttribute('config_sync_client_profile_tcp_mss');
  }
  public set configSyncClientProfileTcpMss(value: number) {
    this._configSyncClientProfileTcpMss = value;
  }
  public resetConfigSyncClientProfileTcpMss() {
    this._configSyncClientProfileTcpMss = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configSyncClientProfileTcpMssInput() {
    return this._configSyncClientProfileTcpMss;
  }

  // config_sync_enabled - computed: false, optional: true, required: false
  private _configSyncEnabled?: boolean | cdktf.IResolvable; 
  public get configSyncEnabled() {
    return this.getBooleanAttribute('config_sync_enabled');
  }
  public set configSyncEnabled(value: boolean | cdktf.IResolvable) {
    this._configSyncEnabled = value;
  }
  public resetConfigSyncEnabled() {
    this._configSyncEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configSyncEnabledInput() {
    return this._configSyncEnabled;
  }

  // config_sync_synchronize_username_enabled - computed: false, optional: true, required: false
  private _configSyncSynchronizeUsernameEnabled?: boolean | cdktf.IResolvable; 
  public get configSyncSynchronizeUsernameEnabled() {
    return this.getBooleanAttribute('config_sync_synchronize_username_enabled');
  }
  public set configSyncSynchronizeUsernameEnabled(value: boolean | cdktf.IResolvable) {
    this._configSyncSynchronizeUsernameEnabled = value;
  }
  public resetConfigSyncSynchronizeUsernameEnabled() {
    this._configSyncSynchronizeUsernameEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configSyncSynchronizeUsernameEnabledInput() {
    return this._configSyncSynchronizeUsernameEnabled;
  }

  // config_sync_tls_enabled - computed: false, optional: true, required: false
  private _configSyncTlsEnabled?: boolean | cdktf.IResolvable; 
  public get configSyncTlsEnabled() {
    return this.getBooleanAttribute('config_sync_tls_enabled');
  }
  public set configSyncTlsEnabled(value: boolean | cdktf.IResolvable) {
    this._configSyncTlsEnabled = value;
  }
  public resetConfigSyncTlsEnabled() {
    this._configSyncTlsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configSyncTlsEnabledInput() {
    return this._configSyncTlsEnabled;
  }

  // guaranteed_msging_defragmentation_schedule_day_list - computed: false, optional: true, required: false
  private _guaranteedMsgingDefragmentationScheduleDayList?: string; 
  public get guaranteedMsgingDefragmentationScheduleDayList() {
    return this.getStringAttribute('guaranteed_msging_defragmentation_schedule_day_list');
  }
  public set guaranteedMsgingDefragmentationScheduleDayList(value: string) {
    this._guaranteedMsgingDefragmentationScheduleDayList = value;
  }
  public resetGuaranteedMsgingDefragmentationScheduleDayList() {
    this._guaranteedMsgingDefragmentationScheduleDayList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guaranteedMsgingDefragmentationScheduleDayListInput() {
    return this._guaranteedMsgingDefragmentationScheduleDayList;
  }

  // guaranteed_msging_defragmentation_schedule_enabled - computed: false, optional: true, required: false
  private _guaranteedMsgingDefragmentationScheduleEnabled?: boolean | cdktf.IResolvable; 
  public get guaranteedMsgingDefragmentationScheduleEnabled() {
    return this.getBooleanAttribute('guaranteed_msging_defragmentation_schedule_enabled');
  }
  public set guaranteedMsgingDefragmentationScheduleEnabled(value: boolean | cdktf.IResolvable) {
    this._guaranteedMsgingDefragmentationScheduleEnabled = value;
  }
  public resetGuaranteedMsgingDefragmentationScheduleEnabled() {
    this._guaranteedMsgingDefragmentationScheduleEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guaranteedMsgingDefragmentationScheduleEnabledInput() {
    return this._guaranteedMsgingDefragmentationScheduleEnabled;
  }

  // guaranteed_msging_defragmentation_schedule_time_list - computed: false, optional: true, required: false
  private _guaranteedMsgingDefragmentationScheduleTimeList?: string; 
  public get guaranteedMsgingDefragmentationScheduleTimeList() {
    return this.getStringAttribute('guaranteed_msging_defragmentation_schedule_time_list');
  }
  public set guaranteedMsgingDefragmentationScheduleTimeList(value: string) {
    this._guaranteedMsgingDefragmentationScheduleTimeList = value;
  }
  public resetGuaranteedMsgingDefragmentationScheduleTimeList() {
    this._guaranteedMsgingDefragmentationScheduleTimeList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guaranteedMsgingDefragmentationScheduleTimeListInput() {
    return this._guaranteedMsgingDefragmentationScheduleTimeList;
  }

  // guaranteed_msging_defragmentation_threshold_enabled - computed: false, optional: true, required: false
  private _guaranteedMsgingDefragmentationThresholdEnabled?: boolean | cdktf.IResolvable; 
  public get guaranteedMsgingDefragmentationThresholdEnabled() {
    return this.getBooleanAttribute('guaranteed_msging_defragmentation_threshold_enabled');
  }
  public set guaranteedMsgingDefragmentationThresholdEnabled(value: boolean | cdktf.IResolvable) {
    this._guaranteedMsgingDefragmentationThresholdEnabled = value;
  }
  public resetGuaranteedMsgingDefragmentationThresholdEnabled() {
    this._guaranteedMsgingDefragmentationThresholdEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guaranteedMsgingDefragmentationThresholdEnabledInput() {
    return this._guaranteedMsgingDefragmentationThresholdEnabled;
  }

  // guaranteed_msging_defragmentation_threshold_fragmentation_percentage - computed: false, optional: true, required: false
  private _guaranteedMsgingDefragmentationThresholdFragmentationPercentage?: number; 
  public get guaranteedMsgingDefragmentationThresholdFragmentationPercentage() {
    return this.getNumberAttribute('guaranteed_msging_defragmentation_threshold_fragmentation_percentage');
  }
  public set guaranteedMsgingDefragmentationThresholdFragmentationPercentage(value: number) {
    this._guaranteedMsgingDefragmentationThresholdFragmentationPercentage = value;
  }
  public resetGuaranteedMsgingDefragmentationThresholdFragmentationPercentage() {
    this._guaranteedMsgingDefragmentationThresholdFragmentationPercentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guaranteedMsgingDefragmentationThresholdFragmentationPercentageInput() {
    return this._guaranteedMsgingDefragmentationThresholdFragmentationPercentage;
  }

  // guaranteed_msging_defragmentation_threshold_min_interval - computed: false, optional: true, required: false
  private _guaranteedMsgingDefragmentationThresholdMinInterval?: number; 
  public get guaranteedMsgingDefragmentationThresholdMinInterval() {
    return this.getNumberAttribute('guaranteed_msging_defragmentation_threshold_min_interval');
  }
  public set guaranteedMsgingDefragmentationThresholdMinInterval(value: number) {
    this._guaranteedMsgingDefragmentationThresholdMinInterval = value;
  }
  public resetGuaranteedMsgingDefragmentationThresholdMinInterval() {
    this._guaranteedMsgingDefragmentationThresholdMinInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guaranteedMsgingDefragmentationThresholdMinIntervalInput() {
    return this._guaranteedMsgingDefragmentationThresholdMinInterval;
  }

  // guaranteed_msging_defragmentation_threshold_usage_percentage - computed: false, optional: true, required: false
  private _guaranteedMsgingDefragmentationThresholdUsagePercentage?: number; 
  public get guaranteedMsgingDefragmentationThresholdUsagePercentage() {
    return this.getNumberAttribute('guaranteed_msging_defragmentation_threshold_usage_percentage');
  }
  public set guaranteedMsgingDefragmentationThresholdUsagePercentage(value: number) {
    this._guaranteedMsgingDefragmentationThresholdUsagePercentage = value;
  }
  public resetGuaranteedMsgingDefragmentationThresholdUsagePercentage() {
    this._guaranteedMsgingDefragmentationThresholdUsagePercentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guaranteedMsgingDefragmentationThresholdUsagePercentageInput() {
    return this._guaranteedMsgingDefragmentationThresholdUsagePercentage;
  }

  // guaranteed_msging_enabled - computed: false, optional: true, required: false
  private _guaranteedMsgingEnabled?: boolean | cdktf.IResolvable; 
  public get guaranteedMsgingEnabled() {
    return this.getBooleanAttribute('guaranteed_msging_enabled');
  }
  public set guaranteedMsgingEnabled(value: boolean | cdktf.IResolvable) {
    this._guaranteedMsgingEnabled = value;
  }
  public resetGuaranteedMsgingEnabled() {
    this._guaranteedMsgingEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guaranteedMsgingEnabledInput() {
    return this._guaranteedMsgingEnabled;
  }

  // guaranteed_msging_event_cache_usage_threshold - computed: false, optional: true, required: false
  private _guaranteedMsgingEventCacheUsageThreshold = new BrokerGuaranteedMsgingEventCacheUsageThresholdOutputReference(this, "guaranteed_msging_event_cache_usage_threshold");
  public get guaranteedMsgingEventCacheUsageThreshold() {
    return this._guaranteedMsgingEventCacheUsageThreshold;
  }
  public putGuaranteedMsgingEventCacheUsageThreshold(value: BrokerGuaranteedMsgingEventCacheUsageThreshold) {
    this._guaranteedMsgingEventCacheUsageThreshold.internalValue = value;
  }
  public resetGuaranteedMsgingEventCacheUsageThreshold() {
    this._guaranteedMsgingEventCacheUsageThreshold.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guaranteedMsgingEventCacheUsageThresholdInput() {
    return this._guaranteedMsgingEventCacheUsageThreshold.internalValue;
  }

  // guaranteed_msging_event_delivered_unacked_threshold - computed: false, optional: true, required: false
  private _guaranteedMsgingEventDeliveredUnackedThreshold = new BrokerGuaranteedMsgingEventDeliveredUnackedThresholdOutputReference(this, "guaranteed_msging_event_delivered_unacked_threshold");
  public get guaranteedMsgingEventDeliveredUnackedThreshold() {
    return this._guaranteedMsgingEventDeliveredUnackedThreshold;
  }
  public putGuaranteedMsgingEventDeliveredUnackedThreshold(value: BrokerGuaranteedMsgingEventDeliveredUnackedThreshold) {
    this._guaranteedMsgingEventDeliveredUnackedThreshold.internalValue = value;
  }
  public resetGuaranteedMsgingEventDeliveredUnackedThreshold() {
    this._guaranteedMsgingEventDeliveredUnackedThreshold.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guaranteedMsgingEventDeliveredUnackedThresholdInput() {
    return this._guaranteedMsgingEventDeliveredUnackedThreshold.internalValue;
  }

  // guaranteed_msging_event_disk_usage_threshold - computed: false, optional: true, required: false
  private _guaranteedMsgingEventDiskUsageThreshold = new BrokerGuaranteedMsgingEventDiskUsageThresholdOutputReference(this, "guaranteed_msging_event_disk_usage_threshold");
  public get guaranteedMsgingEventDiskUsageThreshold() {
    return this._guaranteedMsgingEventDiskUsageThreshold;
  }
  public putGuaranteedMsgingEventDiskUsageThreshold(value: BrokerGuaranteedMsgingEventDiskUsageThreshold) {
    this._guaranteedMsgingEventDiskUsageThreshold.internalValue = value;
  }
  public resetGuaranteedMsgingEventDiskUsageThreshold() {
    this._guaranteedMsgingEventDiskUsageThreshold.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guaranteedMsgingEventDiskUsageThresholdInput() {
    return this._guaranteedMsgingEventDiskUsageThreshold.internalValue;
  }

  // guaranteed_msging_event_egress_flow_count_threshold - computed: false, optional: true, required: false
  private _guaranteedMsgingEventEgressFlowCountThreshold = new BrokerGuaranteedMsgingEventEgressFlowCountThresholdOutputReference(this, "guaranteed_msging_event_egress_flow_count_threshold");
  public get guaranteedMsgingEventEgressFlowCountThreshold() {
    return this._guaranteedMsgingEventEgressFlowCountThreshold;
  }
  public putGuaranteedMsgingEventEgressFlowCountThreshold(value: BrokerGuaranteedMsgingEventEgressFlowCountThreshold) {
    this._guaranteedMsgingEventEgressFlowCountThreshold.internalValue = value;
  }
  public resetGuaranteedMsgingEventEgressFlowCountThreshold() {
    this._guaranteedMsgingEventEgressFlowCountThreshold.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guaranteedMsgingEventEgressFlowCountThresholdInput() {
    return this._guaranteedMsgingEventEgressFlowCountThreshold.internalValue;
  }

  // guaranteed_msging_event_endpoint_count_threshold - computed: false, optional: true, required: false
  private _guaranteedMsgingEventEndpointCountThreshold = new BrokerGuaranteedMsgingEventEndpointCountThresholdOutputReference(this, "guaranteed_msging_event_endpoint_count_threshold");
  public get guaranteedMsgingEventEndpointCountThreshold() {
    return this._guaranteedMsgingEventEndpointCountThreshold;
  }
  public putGuaranteedMsgingEventEndpointCountThreshold(value: BrokerGuaranteedMsgingEventEndpointCountThreshold) {
    this._guaranteedMsgingEventEndpointCountThreshold.internalValue = value;
  }
  public resetGuaranteedMsgingEventEndpointCountThreshold() {
    this._guaranteedMsgingEventEndpointCountThreshold.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guaranteedMsgingEventEndpointCountThresholdInput() {
    return this._guaranteedMsgingEventEndpointCountThreshold.internalValue;
  }

  // guaranteed_msging_event_ingress_flow_count_threshold - computed: false, optional: true, required: false
  private _guaranteedMsgingEventIngressFlowCountThreshold = new BrokerGuaranteedMsgingEventIngressFlowCountThresholdOutputReference(this, "guaranteed_msging_event_ingress_flow_count_threshold");
  public get guaranteedMsgingEventIngressFlowCountThreshold() {
    return this._guaranteedMsgingEventIngressFlowCountThreshold;
  }
  public putGuaranteedMsgingEventIngressFlowCountThreshold(value: BrokerGuaranteedMsgingEventIngressFlowCountThreshold) {
    this._guaranteedMsgingEventIngressFlowCountThreshold.internalValue = value;
  }
  public resetGuaranteedMsgingEventIngressFlowCountThreshold() {
    this._guaranteedMsgingEventIngressFlowCountThreshold.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guaranteedMsgingEventIngressFlowCountThresholdInput() {
    return this._guaranteedMsgingEventIngressFlowCountThreshold.internalValue;
  }

  // guaranteed_msging_event_msg_count_threshold - computed: false, optional: true, required: false
  private _guaranteedMsgingEventMsgCountThreshold = new BrokerGuaranteedMsgingEventMsgCountThresholdOutputReference(this, "guaranteed_msging_event_msg_count_threshold");
  public get guaranteedMsgingEventMsgCountThreshold() {
    return this._guaranteedMsgingEventMsgCountThreshold;
  }
  public putGuaranteedMsgingEventMsgCountThreshold(value: BrokerGuaranteedMsgingEventMsgCountThreshold) {
    this._guaranteedMsgingEventMsgCountThreshold.internalValue = value;
  }
  public resetGuaranteedMsgingEventMsgCountThreshold() {
    this._guaranteedMsgingEventMsgCountThreshold.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guaranteedMsgingEventMsgCountThresholdInput() {
    return this._guaranteedMsgingEventMsgCountThreshold.internalValue;
  }

  // guaranteed_msging_event_msg_spool_file_count_threshold - computed: false, optional: true, required: false
  private _guaranteedMsgingEventMsgSpoolFileCountThreshold = new BrokerGuaranteedMsgingEventMsgSpoolFileCountThresholdOutputReference(this, "guaranteed_msging_event_msg_spool_file_count_threshold");
  public get guaranteedMsgingEventMsgSpoolFileCountThreshold() {
    return this._guaranteedMsgingEventMsgSpoolFileCountThreshold;
  }
  public putGuaranteedMsgingEventMsgSpoolFileCountThreshold(value: BrokerGuaranteedMsgingEventMsgSpoolFileCountThreshold) {
    this._guaranteedMsgingEventMsgSpoolFileCountThreshold.internalValue = value;
  }
  public resetGuaranteedMsgingEventMsgSpoolFileCountThreshold() {
    this._guaranteedMsgingEventMsgSpoolFileCountThreshold.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guaranteedMsgingEventMsgSpoolFileCountThresholdInput() {
    return this._guaranteedMsgingEventMsgSpoolFileCountThreshold.internalValue;
  }

  // guaranteed_msging_event_msg_spool_usage_threshold - computed: false, optional: true, required: false
  private _guaranteedMsgingEventMsgSpoolUsageThreshold = new BrokerGuaranteedMsgingEventMsgSpoolUsageThresholdOutputReference(this, "guaranteed_msging_event_msg_spool_usage_threshold");
  public get guaranteedMsgingEventMsgSpoolUsageThreshold() {
    return this._guaranteedMsgingEventMsgSpoolUsageThreshold;
  }
  public putGuaranteedMsgingEventMsgSpoolUsageThreshold(value: BrokerGuaranteedMsgingEventMsgSpoolUsageThreshold) {
    this._guaranteedMsgingEventMsgSpoolUsageThreshold.internalValue = value;
  }
  public resetGuaranteedMsgingEventMsgSpoolUsageThreshold() {
    this._guaranteedMsgingEventMsgSpoolUsageThreshold.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guaranteedMsgingEventMsgSpoolUsageThresholdInput() {
    return this._guaranteedMsgingEventMsgSpoolUsageThreshold.internalValue;
  }

  // guaranteed_msging_event_transacted_session_count_threshold - computed: false, optional: true, required: false
  private _guaranteedMsgingEventTransactedSessionCountThreshold = new BrokerGuaranteedMsgingEventTransactedSessionCountThresholdOutputReference(this, "guaranteed_msging_event_transacted_session_count_threshold");
  public get guaranteedMsgingEventTransactedSessionCountThreshold() {
    return this._guaranteedMsgingEventTransactedSessionCountThreshold;
  }
  public putGuaranteedMsgingEventTransactedSessionCountThreshold(value: BrokerGuaranteedMsgingEventTransactedSessionCountThreshold) {
    this._guaranteedMsgingEventTransactedSessionCountThreshold.internalValue = value;
  }
  public resetGuaranteedMsgingEventTransactedSessionCountThreshold() {
    this._guaranteedMsgingEventTransactedSessionCountThreshold.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guaranteedMsgingEventTransactedSessionCountThresholdInput() {
    return this._guaranteedMsgingEventTransactedSessionCountThreshold.internalValue;
  }

  // guaranteed_msging_event_transacted_session_resource_count_threshold - computed: false, optional: true, required: false
  private _guaranteedMsgingEventTransactedSessionResourceCountThreshold = new BrokerGuaranteedMsgingEventTransactedSessionResourceCountThresholdOutputReference(this, "guaranteed_msging_event_transacted_session_resource_count_threshold");
  public get guaranteedMsgingEventTransactedSessionResourceCountThreshold() {
    return this._guaranteedMsgingEventTransactedSessionResourceCountThreshold;
  }
  public putGuaranteedMsgingEventTransactedSessionResourceCountThreshold(value: BrokerGuaranteedMsgingEventTransactedSessionResourceCountThreshold) {
    this._guaranteedMsgingEventTransactedSessionResourceCountThreshold.internalValue = value;
  }
  public resetGuaranteedMsgingEventTransactedSessionResourceCountThreshold() {
    this._guaranteedMsgingEventTransactedSessionResourceCountThreshold.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guaranteedMsgingEventTransactedSessionResourceCountThresholdInput() {
    return this._guaranteedMsgingEventTransactedSessionResourceCountThreshold.internalValue;
  }

  // guaranteed_msging_event_transaction_count_threshold - computed: false, optional: true, required: false
  private _guaranteedMsgingEventTransactionCountThreshold = new BrokerGuaranteedMsgingEventTransactionCountThresholdOutputReference(this, "guaranteed_msging_event_transaction_count_threshold");
  public get guaranteedMsgingEventTransactionCountThreshold() {
    return this._guaranteedMsgingEventTransactionCountThreshold;
  }
  public putGuaranteedMsgingEventTransactionCountThreshold(value: BrokerGuaranteedMsgingEventTransactionCountThreshold) {
    this._guaranteedMsgingEventTransactionCountThreshold.internalValue = value;
  }
  public resetGuaranteedMsgingEventTransactionCountThreshold() {
    this._guaranteedMsgingEventTransactionCountThreshold.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guaranteedMsgingEventTransactionCountThresholdInput() {
    return this._guaranteedMsgingEventTransactionCountThreshold.internalValue;
  }

  // guaranteed_msging_max_cache_usage - computed: false, optional: true, required: false
  private _guaranteedMsgingMaxCacheUsage?: number; 
  public get guaranteedMsgingMaxCacheUsage() {
    return this.getNumberAttribute('guaranteed_msging_max_cache_usage');
  }
  public set guaranteedMsgingMaxCacheUsage(value: number) {
    this._guaranteedMsgingMaxCacheUsage = value;
  }
  public resetGuaranteedMsgingMaxCacheUsage() {
    this._guaranteedMsgingMaxCacheUsage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guaranteedMsgingMaxCacheUsageInput() {
    return this._guaranteedMsgingMaxCacheUsage;
  }

  // guaranteed_msging_max_msg_spool_usage - computed: false, optional: true, required: false
  private _guaranteedMsgingMaxMsgSpoolUsage?: number; 
  public get guaranteedMsgingMaxMsgSpoolUsage() {
    return this.getNumberAttribute('guaranteed_msging_max_msg_spool_usage');
  }
  public set guaranteedMsgingMaxMsgSpoolUsage(value: number) {
    this._guaranteedMsgingMaxMsgSpoolUsage = value;
  }
  public resetGuaranteedMsgingMaxMsgSpoolUsage() {
    this._guaranteedMsgingMaxMsgSpoolUsage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guaranteedMsgingMaxMsgSpoolUsageInput() {
    return this._guaranteedMsgingMaxMsgSpoolUsage;
  }

  // guaranteed_msging_msg_spool_sync_mirrored_msg_ack_timeout - computed: false, optional: true, required: false
  private _guaranteedMsgingMsgSpoolSyncMirroredMsgAckTimeout?: number; 
  public get guaranteedMsgingMsgSpoolSyncMirroredMsgAckTimeout() {
    return this.getNumberAttribute('guaranteed_msging_msg_spool_sync_mirrored_msg_ack_timeout');
  }
  public set guaranteedMsgingMsgSpoolSyncMirroredMsgAckTimeout(value: number) {
    this._guaranteedMsgingMsgSpoolSyncMirroredMsgAckTimeout = value;
  }
  public resetGuaranteedMsgingMsgSpoolSyncMirroredMsgAckTimeout() {
    this._guaranteedMsgingMsgSpoolSyncMirroredMsgAckTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guaranteedMsgingMsgSpoolSyncMirroredMsgAckTimeoutInput() {
    return this._guaranteedMsgingMsgSpoolSyncMirroredMsgAckTimeout;
  }

  // guaranteed_msging_msg_spool_sync_mirrored_spool_file_ack_timeout - computed: false, optional: true, required: false
  private _guaranteedMsgingMsgSpoolSyncMirroredSpoolFileAckTimeout?: number; 
  public get guaranteedMsgingMsgSpoolSyncMirroredSpoolFileAckTimeout() {
    return this.getNumberAttribute('guaranteed_msging_msg_spool_sync_mirrored_spool_file_ack_timeout');
  }
  public set guaranteedMsgingMsgSpoolSyncMirroredSpoolFileAckTimeout(value: number) {
    this._guaranteedMsgingMsgSpoolSyncMirroredSpoolFileAckTimeout = value;
  }
  public resetGuaranteedMsgingMsgSpoolSyncMirroredSpoolFileAckTimeout() {
    this._guaranteedMsgingMsgSpoolSyncMirroredSpoolFileAckTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guaranteedMsgingMsgSpoolSyncMirroredSpoolFileAckTimeoutInput() {
    return this._guaranteedMsgingMsgSpoolSyncMirroredSpoolFileAckTimeout;
  }

  // guaranteed_msging_transaction_replication_compatibility_mode - computed: false, optional: true, required: false
  private _guaranteedMsgingTransactionReplicationCompatibilityMode?: string; 
  public get guaranteedMsgingTransactionReplicationCompatibilityMode() {
    return this.getStringAttribute('guaranteed_msging_transaction_replication_compatibility_mode');
  }
  public set guaranteedMsgingTransactionReplicationCompatibilityMode(value: string) {
    this._guaranteedMsgingTransactionReplicationCompatibilityMode = value;
  }
  public resetGuaranteedMsgingTransactionReplicationCompatibilityMode() {
    this._guaranteedMsgingTransactionReplicationCompatibilityMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guaranteedMsgingTransactionReplicationCompatibilityModeInput() {
    return this._guaranteedMsgingTransactionReplicationCompatibilityMode;
  }

  // oauth_profile_default - computed: false, optional: true, required: false
  private _oauthProfileDefault?: string; 
  public get oauthProfileDefault() {
    return this.getStringAttribute('oauth_profile_default');
  }
  public set oauthProfileDefault(value: string) {
    this._oauthProfileDefault = value;
  }
  public resetOauthProfileDefault() {
    this._oauthProfileDefault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauthProfileDefaultInput() {
    return this._oauthProfileDefault;
  }

  // service_amqp_enabled - computed: false, optional: true, required: false
  private _serviceAmqpEnabled?: boolean | cdktf.IResolvable; 
  public get serviceAmqpEnabled() {
    return this.getBooleanAttribute('service_amqp_enabled');
  }
  public set serviceAmqpEnabled(value: boolean | cdktf.IResolvable) {
    this._serviceAmqpEnabled = value;
  }
  public resetServiceAmqpEnabled() {
    this._serviceAmqpEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAmqpEnabledInput() {
    return this._serviceAmqpEnabled;
  }

  // service_amqp_tls_listen_port - computed: false, optional: true, required: false
  private _serviceAmqpTlsListenPort?: number; 
  public get serviceAmqpTlsListenPort() {
    return this.getNumberAttribute('service_amqp_tls_listen_port');
  }
  public set serviceAmqpTlsListenPort(value: number) {
    this._serviceAmqpTlsListenPort = value;
  }
  public resetServiceAmqpTlsListenPort() {
    this._serviceAmqpTlsListenPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAmqpTlsListenPortInput() {
    return this._serviceAmqpTlsListenPort;
  }

  // service_event_connection_count_threshold - computed: false, optional: true, required: false
  private _serviceEventConnectionCountThreshold = new BrokerServiceEventConnectionCountThresholdOutputReference(this, "service_event_connection_count_threshold");
  public get serviceEventConnectionCountThreshold() {
    return this._serviceEventConnectionCountThreshold;
  }
  public putServiceEventConnectionCountThreshold(value: BrokerServiceEventConnectionCountThreshold) {
    this._serviceEventConnectionCountThreshold.internalValue = value;
  }
  public resetServiceEventConnectionCountThreshold() {
    this._serviceEventConnectionCountThreshold.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceEventConnectionCountThresholdInput() {
    return this._serviceEventConnectionCountThreshold.internalValue;
  }

  // service_health_check_enabled - computed: false, optional: true, required: false
  private _serviceHealthCheckEnabled?: boolean | cdktf.IResolvable; 
  public get serviceHealthCheckEnabled() {
    return this.getBooleanAttribute('service_health_check_enabled');
  }
  public set serviceHealthCheckEnabled(value: boolean | cdktf.IResolvable) {
    this._serviceHealthCheckEnabled = value;
  }
  public resetServiceHealthCheckEnabled() {
    this._serviceHealthCheckEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceHealthCheckEnabledInput() {
    return this._serviceHealthCheckEnabled;
  }

  // service_health_check_listen_port - computed: false, optional: true, required: false
  private _serviceHealthCheckListenPort?: number; 
  public get serviceHealthCheckListenPort() {
    return this.getNumberAttribute('service_health_check_listen_port');
  }
  public set serviceHealthCheckListenPort(value: number) {
    this._serviceHealthCheckListenPort = value;
  }
  public resetServiceHealthCheckListenPort() {
    this._serviceHealthCheckListenPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceHealthCheckListenPortInput() {
    return this._serviceHealthCheckListenPort;
  }

  // service_health_check_tls_enabled - computed: false, optional: true, required: false
  private _serviceHealthCheckTlsEnabled?: boolean | cdktf.IResolvable; 
  public get serviceHealthCheckTlsEnabled() {
    return this.getBooleanAttribute('service_health_check_tls_enabled');
  }
  public set serviceHealthCheckTlsEnabled(value: boolean | cdktf.IResolvable) {
    this._serviceHealthCheckTlsEnabled = value;
  }
  public resetServiceHealthCheckTlsEnabled() {
    this._serviceHealthCheckTlsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceHealthCheckTlsEnabledInput() {
    return this._serviceHealthCheckTlsEnabled;
  }

  // service_health_check_tls_listen_port - computed: false, optional: true, required: false
  private _serviceHealthCheckTlsListenPort?: number; 
  public get serviceHealthCheckTlsListenPort() {
    return this.getNumberAttribute('service_health_check_tls_listen_port');
  }
  public set serviceHealthCheckTlsListenPort(value: number) {
    this._serviceHealthCheckTlsListenPort = value;
  }
  public resetServiceHealthCheckTlsListenPort() {
    this._serviceHealthCheckTlsListenPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceHealthCheckTlsListenPortInput() {
    return this._serviceHealthCheckTlsListenPort;
  }

  // service_mate_link_enabled - computed: false, optional: true, required: false
  private _serviceMateLinkEnabled?: boolean | cdktf.IResolvable; 
  public get serviceMateLinkEnabled() {
    return this.getBooleanAttribute('service_mate_link_enabled');
  }
  public set serviceMateLinkEnabled(value: boolean | cdktf.IResolvable) {
    this._serviceMateLinkEnabled = value;
  }
  public resetServiceMateLinkEnabled() {
    this._serviceMateLinkEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceMateLinkEnabledInput() {
    return this._serviceMateLinkEnabled;
  }

  // service_mate_link_listen_port - computed: false, optional: true, required: false
  private _serviceMateLinkListenPort?: number; 
  public get serviceMateLinkListenPort() {
    return this.getNumberAttribute('service_mate_link_listen_port');
  }
  public set serviceMateLinkListenPort(value: number) {
    this._serviceMateLinkListenPort = value;
  }
  public resetServiceMateLinkListenPort() {
    this._serviceMateLinkListenPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceMateLinkListenPortInput() {
    return this._serviceMateLinkListenPort;
  }

  // service_mqtt_enabled - computed: false, optional: true, required: false
  private _serviceMqttEnabled?: boolean | cdktf.IResolvable; 
  public get serviceMqttEnabled() {
    return this.getBooleanAttribute('service_mqtt_enabled');
  }
  public set serviceMqttEnabled(value: boolean | cdktf.IResolvable) {
    this._serviceMqttEnabled = value;
  }
  public resetServiceMqttEnabled() {
    this._serviceMqttEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceMqttEnabledInput() {
    return this._serviceMqttEnabled;
  }

  // service_msg_backbone_enabled - computed: false, optional: true, required: false
  private _serviceMsgBackboneEnabled?: boolean | cdktf.IResolvable; 
  public get serviceMsgBackboneEnabled() {
    return this.getBooleanAttribute('service_msg_backbone_enabled');
  }
  public set serviceMsgBackboneEnabled(value: boolean | cdktf.IResolvable) {
    this._serviceMsgBackboneEnabled = value;
  }
  public resetServiceMsgBackboneEnabled() {
    this._serviceMsgBackboneEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceMsgBackboneEnabledInput() {
    return this._serviceMsgBackboneEnabled;
  }

  // service_redundancy_enabled - computed: false, optional: true, required: false
  private _serviceRedundancyEnabled?: boolean | cdktf.IResolvable; 
  public get serviceRedundancyEnabled() {
    return this.getBooleanAttribute('service_redundancy_enabled');
  }
  public set serviceRedundancyEnabled(value: boolean | cdktf.IResolvable) {
    this._serviceRedundancyEnabled = value;
  }
  public resetServiceRedundancyEnabled() {
    this._serviceRedundancyEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceRedundancyEnabledInput() {
    return this._serviceRedundancyEnabled;
  }

  // service_redundancy_first_listen_port - computed: false, optional: true, required: false
  private _serviceRedundancyFirstListenPort?: number; 
  public get serviceRedundancyFirstListenPort() {
    return this.getNumberAttribute('service_redundancy_first_listen_port');
  }
  public set serviceRedundancyFirstListenPort(value: number) {
    this._serviceRedundancyFirstListenPort = value;
  }
  public resetServiceRedundancyFirstListenPort() {
    this._serviceRedundancyFirstListenPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceRedundancyFirstListenPortInput() {
    return this._serviceRedundancyFirstListenPort;
  }

  // service_rest_event_outgoing_connection_count_threshold - computed: false, optional: true, required: false
  private _serviceRestEventOutgoingConnectionCountThreshold = new BrokerServiceRestEventOutgoingConnectionCountThresholdOutputReference(this, "service_rest_event_outgoing_connection_count_threshold");
  public get serviceRestEventOutgoingConnectionCountThreshold() {
    return this._serviceRestEventOutgoingConnectionCountThreshold;
  }
  public putServiceRestEventOutgoingConnectionCountThreshold(value: BrokerServiceRestEventOutgoingConnectionCountThreshold) {
    this._serviceRestEventOutgoingConnectionCountThreshold.internalValue = value;
  }
  public resetServiceRestEventOutgoingConnectionCountThreshold() {
    this._serviceRestEventOutgoingConnectionCountThreshold.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceRestEventOutgoingConnectionCountThresholdInput() {
    return this._serviceRestEventOutgoingConnectionCountThreshold.internalValue;
  }

  // service_rest_incoming_enabled - computed: false, optional: true, required: false
  private _serviceRestIncomingEnabled?: boolean | cdktf.IResolvable; 
  public get serviceRestIncomingEnabled() {
    return this.getBooleanAttribute('service_rest_incoming_enabled');
  }
  public set serviceRestIncomingEnabled(value: boolean | cdktf.IResolvable) {
    this._serviceRestIncomingEnabled = value;
  }
  public resetServiceRestIncomingEnabled() {
    this._serviceRestIncomingEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceRestIncomingEnabledInput() {
    return this._serviceRestIncomingEnabled;
  }

  // service_rest_outgoing_enabled - computed: false, optional: true, required: false
  private _serviceRestOutgoingEnabled?: boolean | cdktf.IResolvable; 
  public get serviceRestOutgoingEnabled() {
    return this.getBooleanAttribute('service_rest_outgoing_enabled');
  }
  public set serviceRestOutgoingEnabled(value: boolean | cdktf.IResolvable) {
    this._serviceRestOutgoingEnabled = value;
  }
  public resetServiceRestOutgoingEnabled() {
    this._serviceRestOutgoingEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceRestOutgoingEnabledInput() {
    return this._serviceRestOutgoingEnabled;
  }

  // service_semp_cors_allow_any_host_enabled - computed: false, optional: true, required: false
  private _serviceSempCorsAllowAnyHostEnabled?: boolean | cdktf.IResolvable; 
  public get serviceSempCorsAllowAnyHostEnabled() {
    return this.getBooleanAttribute('service_semp_cors_allow_any_host_enabled');
  }
  public set serviceSempCorsAllowAnyHostEnabled(value: boolean | cdktf.IResolvable) {
    this._serviceSempCorsAllowAnyHostEnabled = value;
  }
  public resetServiceSempCorsAllowAnyHostEnabled() {
    this._serviceSempCorsAllowAnyHostEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceSempCorsAllowAnyHostEnabledInput() {
    return this._serviceSempCorsAllowAnyHostEnabled;
  }

  // service_semp_legacy_timeout_enabled - computed: false, optional: true, required: false
  private _serviceSempLegacyTimeoutEnabled?: boolean | cdktf.IResolvable; 
  public get serviceSempLegacyTimeoutEnabled() {
    return this.getBooleanAttribute('service_semp_legacy_timeout_enabled');
  }
  public set serviceSempLegacyTimeoutEnabled(value: boolean | cdktf.IResolvable) {
    this._serviceSempLegacyTimeoutEnabled = value;
  }
  public resetServiceSempLegacyTimeoutEnabled() {
    this._serviceSempLegacyTimeoutEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceSempLegacyTimeoutEnabledInput() {
    return this._serviceSempLegacyTimeoutEnabled;
  }

  // service_semp_plain_text_enabled - computed: false, optional: true, required: false
  private _serviceSempPlainTextEnabled?: boolean | cdktf.IResolvable; 
  public get serviceSempPlainTextEnabled() {
    return this.getBooleanAttribute('service_semp_plain_text_enabled');
  }
  public set serviceSempPlainTextEnabled(value: boolean | cdktf.IResolvable) {
    this._serviceSempPlainTextEnabled = value;
  }
  public resetServiceSempPlainTextEnabled() {
    this._serviceSempPlainTextEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceSempPlainTextEnabledInput() {
    return this._serviceSempPlainTextEnabled;
  }

  // service_semp_session_idle_timeout - computed: false, optional: true, required: false
  private _serviceSempSessionIdleTimeout?: number; 
  public get serviceSempSessionIdleTimeout() {
    return this.getNumberAttribute('service_semp_session_idle_timeout');
  }
  public set serviceSempSessionIdleTimeout(value: number) {
    this._serviceSempSessionIdleTimeout = value;
  }
  public resetServiceSempSessionIdleTimeout() {
    this._serviceSempSessionIdleTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceSempSessionIdleTimeoutInput() {
    return this._serviceSempSessionIdleTimeout;
  }

  // service_semp_session_max_lifetime - computed: false, optional: true, required: false
  private _serviceSempSessionMaxLifetime?: number; 
  public get serviceSempSessionMaxLifetime() {
    return this.getNumberAttribute('service_semp_session_max_lifetime');
  }
  public set serviceSempSessionMaxLifetime(value: number) {
    this._serviceSempSessionMaxLifetime = value;
  }
  public resetServiceSempSessionMaxLifetime() {
    this._serviceSempSessionMaxLifetime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceSempSessionMaxLifetimeInput() {
    return this._serviceSempSessionMaxLifetime;
  }

  // service_semp_tls_enabled - computed: false, optional: true, required: false
  private _serviceSempTlsEnabled?: boolean | cdktf.IResolvable; 
  public get serviceSempTlsEnabled() {
    return this.getBooleanAttribute('service_semp_tls_enabled');
  }
  public set serviceSempTlsEnabled(value: boolean | cdktf.IResolvable) {
    this._serviceSempTlsEnabled = value;
  }
  public resetServiceSempTlsEnabled() {
    this._serviceSempTlsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceSempTlsEnabledInput() {
    return this._serviceSempTlsEnabled;
  }

  // service_smf_compression_listen_port - computed: false, optional: true, required: false
  private _serviceSmfCompressionListenPort?: number; 
  public get serviceSmfCompressionListenPort() {
    return this.getNumberAttribute('service_smf_compression_listen_port');
  }
  public set serviceSmfCompressionListenPort(value: number) {
    this._serviceSmfCompressionListenPort = value;
  }
  public resetServiceSmfCompressionListenPort() {
    this._serviceSmfCompressionListenPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceSmfCompressionListenPortInput() {
    return this._serviceSmfCompressionListenPort;
  }

  // service_smf_enabled - computed: false, optional: true, required: false
  private _serviceSmfEnabled?: boolean | cdktf.IResolvable; 
  public get serviceSmfEnabled() {
    return this.getBooleanAttribute('service_smf_enabled');
  }
  public set serviceSmfEnabled(value: boolean | cdktf.IResolvable) {
    this._serviceSmfEnabled = value;
  }
  public resetServiceSmfEnabled() {
    this._serviceSmfEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceSmfEnabledInput() {
    return this._serviceSmfEnabled;
  }

  // service_smf_event_connection_count_threshold - computed: false, optional: true, required: false
  private _serviceSmfEventConnectionCountThreshold = new BrokerServiceSmfEventConnectionCountThresholdOutputReference(this, "service_smf_event_connection_count_threshold");
  public get serviceSmfEventConnectionCountThreshold() {
    return this._serviceSmfEventConnectionCountThreshold;
  }
  public putServiceSmfEventConnectionCountThreshold(value: BrokerServiceSmfEventConnectionCountThreshold) {
    this._serviceSmfEventConnectionCountThreshold.internalValue = value;
  }
  public resetServiceSmfEventConnectionCountThreshold() {
    this._serviceSmfEventConnectionCountThreshold.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceSmfEventConnectionCountThresholdInput() {
    return this._serviceSmfEventConnectionCountThreshold.internalValue;
  }

  // service_smf_plain_text_listen_port - computed: false, optional: true, required: false
  private _serviceSmfPlainTextListenPort?: number; 
  public get serviceSmfPlainTextListenPort() {
    return this.getNumberAttribute('service_smf_plain_text_listen_port');
  }
  public set serviceSmfPlainTextListenPort(value: number) {
    this._serviceSmfPlainTextListenPort = value;
  }
  public resetServiceSmfPlainTextListenPort() {
    this._serviceSmfPlainTextListenPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceSmfPlainTextListenPortInput() {
    return this._serviceSmfPlainTextListenPort;
  }

  // service_smf_routing_control_listen_port - computed: false, optional: true, required: false
  private _serviceSmfRoutingControlListenPort?: number; 
  public get serviceSmfRoutingControlListenPort() {
    return this.getNumberAttribute('service_smf_routing_control_listen_port');
  }
  public set serviceSmfRoutingControlListenPort(value: number) {
    this._serviceSmfRoutingControlListenPort = value;
  }
  public resetServiceSmfRoutingControlListenPort() {
    this._serviceSmfRoutingControlListenPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceSmfRoutingControlListenPortInput() {
    return this._serviceSmfRoutingControlListenPort;
  }

  // service_smf_tls_listen_port - computed: false, optional: true, required: false
  private _serviceSmfTlsListenPort?: number; 
  public get serviceSmfTlsListenPort() {
    return this.getNumberAttribute('service_smf_tls_listen_port');
  }
  public set serviceSmfTlsListenPort(value: number) {
    this._serviceSmfTlsListenPort = value;
  }
  public resetServiceSmfTlsListenPort() {
    this._serviceSmfTlsListenPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceSmfTlsListenPortInput() {
    return this._serviceSmfTlsListenPort;
  }

  // service_tls_event_connection_count_threshold - computed: false, optional: true, required: false
  private _serviceTlsEventConnectionCountThreshold = new BrokerServiceTlsEventConnectionCountThresholdOutputReference(this, "service_tls_event_connection_count_threshold");
  public get serviceTlsEventConnectionCountThreshold() {
    return this._serviceTlsEventConnectionCountThreshold;
  }
  public putServiceTlsEventConnectionCountThreshold(value: BrokerServiceTlsEventConnectionCountThreshold) {
    this._serviceTlsEventConnectionCountThreshold.internalValue = value;
  }
  public resetServiceTlsEventConnectionCountThreshold() {
    this._serviceTlsEventConnectionCountThreshold.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceTlsEventConnectionCountThresholdInput() {
    return this._serviceTlsEventConnectionCountThreshold.internalValue;
  }

  // service_web_transport_enabled - computed: false, optional: true, required: false
  private _serviceWebTransportEnabled?: boolean | cdktf.IResolvable; 
  public get serviceWebTransportEnabled() {
    return this.getBooleanAttribute('service_web_transport_enabled');
  }
  public set serviceWebTransportEnabled(value: boolean | cdktf.IResolvable) {
    this._serviceWebTransportEnabled = value;
  }
  public resetServiceWebTransportEnabled() {
    this._serviceWebTransportEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceWebTransportEnabledInput() {
    return this._serviceWebTransportEnabled;
  }

  // service_web_transport_plain_text_listen_port - computed: false, optional: true, required: false
  private _serviceWebTransportPlainTextListenPort?: number; 
  public get serviceWebTransportPlainTextListenPort() {
    return this.getNumberAttribute('service_web_transport_plain_text_listen_port');
  }
  public set serviceWebTransportPlainTextListenPort(value: number) {
    this._serviceWebTransportPlainTextListenPort = value;
  }
  public resetServiceWebTransportPlainTextListenPort() {
    this._serviceWebTransportPlainTextListenPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceWebTransportPlainTextListenPortInput() {
    return this._serviceWebTransportPlainTextListenPort;
  }

  // service_web_transport_tls_listen_port - computed: false, optional: true, required: false
  private _serviceWebTransportTlsListenPort?: number; 
  public get serviceWebTransportTlsListenPort() {
    return this.getNumberAttribute('service_web_transport_tls_listen_port');
  }
  public set serviceWebTransportTlsListenPort(value: number) {
    this._serviceWebTransportTlsListenPort = value;
  }
  public resetServiceWebTransportTlsListenPort() {
    this._serviceWebTransportTlsListenPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceWebTransportTlsListenPortInput() {
    return this._serviceWebTransportTlsListenPort;
  }

  // service_web_transport_web_url_suffix - computed: false, optional: true, required: false
  private _serviceWebTransportWebUrlSuffix?: string; 
  public get serviceWebTransportWebUrlSuffix() {
    return this.getStringAttribute('service_web_transport_web_url_suffix');
  }
  public set serviceWebTransportWebUrlSuffix(value: string) {
    this._serviceWebTransportWebUrlSuffix = value;
  }
  public resetServiceWebTransportWebUrlSuffix() {
    this._serviceWebTransportWebUrlSuffix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceWebTransportWebUrlSuffixInput() {
    return this._serviceWebTransportWebUrlSuffix;
  }

  // tls_block_version11_enabled - computed: false, optional: true, required: false
  private _tlsBlockVersion11Enabled?: boolean | cdktf.IResolvable; 
  public get tlsBlockVersion11Enabled() {
    return this.getBooleanAttribute('tls_block_version11_enabled');
  }
  public set tlsBlockVersion11Enabled(value: boolean | cdktf.IResolvable) {
    this._tlsBlockVersion11Enabled = value;
  }
  public resetTlsBlockVersion11Enabled() {
    this._tlsBlockVersion11Enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsBlockVersion11EnabledInput() {
    return this._tlsBlockVersion11Enabled;
  }

  // tls_cipher_suite_management_list - computed: false, optional: true, required: false
  private _tlsCipherSuiteManagementList?: string; 
  public get tlsCipherSuiteManagementList() {
    return this.getStringAttribute('tls_cipher_suite_management_list');
  }
  public set tlsCipherSuiteManagementList(value: string) {
    this._tlsCipherSuiteManagementList = value;
  }
  public resetTlsCipherSuiteManagementList() {
    this._tlsCipherSuiteManagementList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsCipherSuiteManagementListInput() {
    return this._tlsCipherSuiteManagementList;
  }

  // tls_cipher_suite_msg_backbone_list - computed: false, optional: true, required: false
  private _tlsCipherSuiteMsgBackboneList?: string; 
  public get tlsCipherSuiteMsgBackboneList() {
    return this.getStringAttribute('tls_cipher_suite_msg_backbone_list');
  }
  public set tlsCipherSuiteMsgBackboneList(value: string) {
    this._tlsCipherSuiteMsgBackboneList = value;
  }
  public resetTlsCipherSuiteMsgBackboneList() {
    this._tlsCipherSuiteMsgBackboneList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsCipherSuiteMsgBackboneListInput() {
    return this._tlsCipherSuiteMsgBackboneList;
  }

  // tls_cipher_suite_secure_shell_list - computed: false, optional: true, required: false
  private _tlsCipherSuiteSecureShellList?: string; 
  public get tlsCipherSuiteSecureShellList() {
    return this.getStringAttribute('tls_cipher_suite_secure_shell_list');
  }
  public set tlsCipherSuiteSecureShellList(value: string) {
    this._tlsCipherSuiteSecureShellList = value;
  }
  public resetTlsCipherSuiteSecureShellList() {
    this._tlsCipherSuiteSecureShellList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsCipherSuiteSecureShellListInput() {
    return this._tlsCipherSuiteSecureShellList;
  }

  // tls_crime_exploit_protection_enabled - computed: false, optional: true, required: false
  private _tlsCrimeExploitProtectionEnabled?: boolean | cdktf.IResolvable; 
  public get tlsCrimeExploitProtectionEnabled() {
    return this.getBooleanAttribute('tls_crime_exploit_protection_enabled');
  }
  public set tlsCrimeExploitProtectionEnabled(value: boolean | cdktf.IResolvable) {
    this._tlsCrimeExploitProtectionEnabled = value;
  }
  public resetTlsCrimeExploitProtectionEnabled() {
    this._tlsCrimeExploitProtectionEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsCrimeExploitProtectionEnabledInput() {
    return this._tlsCrimeExploitProtectionEnabled;
  }

  // tls_server_cert_content - computed: false, optional: true, required: false
  private _tlsServerCertContent?: string; 
  public get tlsServerCertContent() {
    return this.getStringAttribute('tls_server_cert_content');
  }
  public set tlsServerCertContent(value: string) {
    this._tlsServerCertContent = value;
  }
  public resetTlsServerCertContent() {
    this._tlsServerCertContent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsServerCertContentInput() {
    return this._tlsServerCertContent;
  }

  // tls_server_cert_password - computed: false, optional: true, required: false
  private _tlsServerCertPassword?: string; 
  public get tlsServerCertPassword() {
    return this.getStringAttribute('tls_server_cert_password');
  }
  public set tlsServerCertPassword(value: string) {
    this._tlsServerCertPassword = value;
  }
  public resetTlsServerCertPassword() {
    this._tlsServerCertPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsServerCertPasswordInput() {
    return this._tlsServerCertPassword;
  }

  // tls_standard_domain_certificate_authorities_enabled - computed: false, optional: true, required: false
  private _tlsStandardDomainCertificateAuthoritiesEnabled?: boolean | cdktf.IResolvable; 
  public get tlsStandardDomainCertificateAuthoritiesEnabled() {
    return this.getBooleanAttribute('tls_standard_domain_certificate_authorities_enabled');
  }
  public set tlsStandardDomainCertificateAuthoritiesEnabled(value: boolean | cdktf.IResolvable) {
    this._tlsStandardDomainCertificateAuthoritiesEnabled = value;
  }
  public resetTlsStandardDomainCertificateAuthoritiesEnabled() {
    this._tlsStandardDomainCertificateAuthoritiesEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsStandardDomainCertificateAuthoritiesEnabledInput() {
    return this._tlsStandardDomainCertificateAuthoritiesEnabled;
  }

  // tls_ticket_lifetime - computed: false, optional: true, required: false
  private _tlsTicketLifetime?: number; 
  public get tlsTicketLifetime() {
    return this.getNumberAttribute('tls_ticket_lifetime');
  }
  public set tlsTicketLifetime(value: number) {
    this._tlsTicketLifetime = value;
  }
  public resetTlsTicketLifetime() {
    this._tlsTicketLifetime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsTicketLifetimeInput() {
    return this._tlsTicketLifetime;
  }

  // web_manager_allow_unencrypted_wizards_enabled - computed: false, optional: true, required: false
  private _webManagerAllowUnencryptedWizardsEnabled?: boolean | cdktf.IResolvable; 
  public get webManagerAllowUnencryptedWizardsEnabled() {
    return this.getBooleanAttribute('web_manager_allow_unencrypted_wizards_enabled');
  }
  public set webManagerAllowUnencryptedWizardsEnabled(value: boolean | cdktf.IResolvable) {
    this._webManagerAllowUnencryptedWizardsEnabled = value;
  }
  public resetWebManagerAllowUnencryptedWizardsEnabled() {
    this._webManagerAllowUnencryptedWizardsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webManagerAllowUnencryptedWizardsEnabledInput() {
    return this._webManagerAllowUnencryptedWizardsEnabled;
  }

  // web_manager_redirect_http_enabled - computed: false, optional: true, required: false
  private _webManagerRedirectHttpEnabled?: boolean | cdktf.IResolvable; 
  public get webManagerRedirectHttpEnabled() {
    return this.getBooleanAttribute('web_manager_redirect_http_enabled');
  }
  public set webManagerRedirectHttpEnabled(value: boolean | cdktf.IResolvable) {
    this._webManagerRedirectHttpEnabled = value;
  }
  public resetWebManagerRedirectHttpEnabled() {
    this._webManagerRedirectHttpEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webManagerRedirectHttpEnabledInput() {
    return this._webManagerRedirectHttpEnabled;
  }

  // web_manager_redirect_http_override_tls_port - computed: false, optional: true, required: false
  private _webManagerRedirectHttpOverrideTlsPort?: number; 
  public get webManagerRedirectHttpOverrideTlsPort() {
    return this.getNumberAttribute('web_manager_redirect_http_override_tls_port');
  }
  public set webManagerRedirectHttpOverrideTlsPort(value: number) {
    this._webManagerRedirectHttpOverrideTlsPort = value;
  }
  public resetWebManagerRedirectHttpOverrideTlsPort() {
    this._webManagerRedirectHttpOverrideTlsPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webManagerRedirectHttpOverrideTlsPortInput() {
    return this._webManagerRedirectHttpOverrideTlsPort;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auth_brute_force_protection_enabled: cdktf.booleanToTerraform(this._authBruteForceProtectionEnabled),
      auth_client_cert_revocation_check_mode: cdktf.stringToTerraform(this._authClientCertRevocationCheckMode),
      config_sync_authentication_client_cert_max_chain_depth: cdktf.numberToTerraform(this._configSyncAuthenticationClientCertMaxChainDepth),
      config_sync_authentication_client_cert_validate_date_enabled: cdktf.booleanToTerraform(this._configSyncAuthenticationClientCertValidateDateEnabled),
      config_sync_client_profile_tcp_initial_congestion_window: cdktf.numberToTerraform(this._configSyncClientProfileTcpInitialCongestionWindow),
      config_sync_client_profile_tcp_keepalive_count: cdktf.numberToTerraform(this._configSyncClientProfileTcpKeepaliveCount),
      config_sync_client_profile_tcp_keepalive_idle: cdktf.numberToTerraform(this._configSyncClientProfileTcpKeepaliveIdle),
      config_sync_client_profile_tcp_keepalive_interval: cdktf.numberToTerraform(this._configSyncClientProfileTcpKeepaliveInterval),
      config_sync_client_profile_tcp_max_window: cdktf.numberToTerraform(this._configSyncClientProfileTcpMaxWindow),
      config_sync_client_profile_tcp_mss: cdktf.numberToTerraform(this._configSyncClientProfileTcpMss),
      config_sync_enabled: cdktf.booleanToTerraform(this._configSyncEnabled),
      config_sync_synchronize_username_enabled: cdktf.booleanToTerraform(this._configSyncSynchronizeUsernameEnabled),
      config_sync_tls_enabled: cdktf.booleanToTerraform(this._configSyncTlsEnabled),
      guaranteed_msging_defragmentation_schedule_day_list: cdktf.stringToTerraform(this._guaranteedMsgingDefragmentationScheduleDayList),
      guaranteed_msging_defragmentation_schedule_enabled: cdktf.booleanToTerraform(this._guaranteedMsgingDefragmentationScheduleEnabled),
      guaranteed_msging_defragmentation_schedule_time_list: cdktf.stringToTerraform(this._guaranteedMsgingDefragmentationScheduleTimeList),
      guaranteed_msging_defragmentation_threshold_enabled: cdktf.booleanToTerraform(this._guaranteedMsgingDefragmentationThresholdEnabled),
      guaranteed_msging_defragmentation_threshold_fragmentation_percentage: cdktf.numberToTerraform(this._guaranteedMsgingDefragmentationThresholdFragmentationPercentage),
      guaranteed_msging_defragmentation_threshold_min_interval: cdktf.numberToTerraform(this._guaranteedMsgingDefragmentationThresholdMinInterval),
      guaranteed_msging_defragmentation_threshold_usage_percentage: cdktf.numberToTerraform(this._guaranteedMsgingDefragmentationThresholdUsagePercentage),
      guaranteed_msging_enabled: cdktf.booleanToTerraform(this._guaranteedMsgingEnabled),
      guaranteed_msging_event_cache_usage_threshold: brokerGuaranteedMsgingEventCacheUsageThresholdToTerraform(this._guaranteedMsgingEventCacheUsageThreshold.internalValue),
      guaranteed_msging_event_delivered_unacked_threshold: brokerGuaranteedMsgingEventDeliveredUnackedThresholdToTerraform(this._guaranteedMsgingEventDeliveredUnackedThreshold.internalValue),
      guaranteed_msging_event_disk_usage_threshold: brokerGuaranteedMsgingEventDiskUsageThresholdToTerraform(this._guaranteedMsgingEventDiskUsageThreshold.internalValue),
      guaranteed_msging_event_egress_flow_count_threshold: brokerGuaranteedMsgingEventEgressFlowCountThresholdToTerraform(this._guaranteedMsgingEventEgressFlowCountThreshold.internalValue),
      guaranteed_msging_event_endpoint_count_threshold: brokerGuaranteedMsgingEventEndpointCountThresholdToTerraform(this._guaranteedMsgingEventEndpointCountThreshold.internalValue),
      guaranteed_msging_event_ingress_flow_count_threshold: brokerGuaranteedMsgingEventIngressFlowCountThresholdToTerraform(this._guaranteedMsgingEventIngressFlowCountThreshold.internalValue),
      guaranteed_msging_event_msg_count_threshold: brokerGuaranteedMsgingEventMsgCountThresholdToTerraform(this._guaranteedMsgingEventMsgCountThreshold.internalValue),
      guaranteed_msging_event_msg_spool_file_count_threshold: brokerGuaranteedMsgingEventMsgSpoolFileCountThresholdToTerraform(this._guaranteedMsgingEventMsgSpoolFileCountThreshold.internalValue),
      guaranteed_msging_event_msg_spool_usage_threshold: brokerGuaranteedMsgingEventMsgSpoolUsageThresholdToTerraform(this._guaranteedMsgingEventMsgSpoolUsageThreshold.internalValue),
      guaranteed_msging_event_transacted_session_count_threshold: brokerGuaranteedMsgingEventTransactedSessionCountThresholdToTerraform(this._guaranteedMsgingEventTransactedSessionCountThreshold.internalValue),
      guaranteed_msging_event_transacted_session_resource_count_threshold: brokerGuaranteedMsgingEventTransactedSessionResourceCountThresholdToTerraform(this._guaranteedMsgingEventTransactedSessionResourceCountThreshold.internalValue),
      guaranteed_msging_event_transaction_count_threshold: brokerGuaranteedMsgingEventTransactionCountThresholdToTerraform(this._guaranteedMsgingEventTransactionCountThreshold.internalValue),
      guaranteed_msging_max_cache_usage: cdktf.numberToTerraform(this._guaranteedMsgingMaxCacheUsage),
      guaranteed_msging_max_msg_spool_usage: cdktf.numberToTerraform(this._guaranteedMsgingMaxMsgSpoolUsage),
      guaranteed_msging_msg_spool_sync_mirrored_msg_ack_timeout: cdktf.numberToTerraform(this._guaranteedMsgingMsgSpoolSyncMirroredMsgAckTimeout),
      guaranteed_msging_msg_spool_sync_mirrored_spool_file_ack_timeout: cdktf.numberToTerraform(this._guaranteedMsgingMsgSpoolSyncMirroredSpoolFileAckTimeout),
      guaranteed_msging_transaction_replication_compatibility_mode: cdktf.stringToTerraform(this._guaranteedMsgingTransactionReplicationCompatibilityMode),
      oauth_profile_default: cdktf.stringToTerraform(this._oauthProfileDefault),
      service_amqp_enabled: cdktf.booleanToTerraform(this._serviceAmqpEnabled),
      service_amqp_tls_listen_port: cdktf.numberToTerraform(this._serviceAmqpTlsListenPort),
      service_event_connection_count_threshold: brokerServiceEventConnectionCountThresholdToTerraform(this._serviceEventConnectionCountThreshold.internalValue),
      service_health_check_enabled: cdktf.booleanToTerraform(this._serviceHealthCheckEnabled),
      service_health_check_listen_port: cdktf.numberToTerraform(this._serviceHealthCheckListenPort),
      service_health_check_tls_enabled: cdktf.booleanToTerraform(this._serviceHealthCheckTlsEnabled),
      service_health_check_tls_listen_port: cdktf.numberToTerraform(this._serviceHealthCheckTlsListenPort),
      service_mate_link_enabled: cdktf.booleanToTerraform(this._serviceMateLinkEnabled),
      service_mate_link_listen_port: cdktf.numberToTerraform(this._serviceMateLinkListenPort),
      service_mqtt_enabled: cdktf.booleanToTerraform(this._serviceMqttEnabled),
      service_msg_backbone_enabled: cdktf.booleanToTerraform(this._serviceMsgBackboneEnabled),
      service_redundancy_enabled: cdktf.booleanToTerraform(this._serviceRedundancyEnabled),
      service_redundancy_first_listen_port: cdktf.numberToTerraform(this._serviceRedundancyFirstListenPort),
      service_rest_event_outgoing_connection_count_threshold: brokerServiceRestEventOutgoingConnectionCountThresholdToTerraform(this._serviceRestEventOutgoingConnectionCountThreshold.internalValue),
      service_rest_incoming_enabled: cdktf.booleanToTerraform(this._serviceRestIncomingEnabled),
      service_rest_outgoing_enabled: cdktf.booleanToTerraform(this._serviceRestOutgoingEnabled),
      service_semp_cors_allow_any_host_enabled: cdktf.booleanToTerraform(this._serviceSempCorsAllowAnyHostEnabled),
      service_semp_legacy_timeout_enabled: cdktf.booleanToTerraform(this._serviceSempLegacyTimeoutEnabled),
      service_semp_plain_text_enabled: cdktf.booleanToTerraform(this._serviceSempPlainTextEnabled),
      service_semp_session_idle_timeout: cdktf.numberToTerraform(this._serviceSempSessionIdleTimeout),
      service_semp_session_max_lifetime: cdktf.numberToTerraform(this._serviceSempSessionMaxLifetime),
      service_semp_tls_enabled: cdktf.booleanToTerraform(this._serviceSempTlsEnabled),
      service_smf_compression_listen_port: cdktf.numberToTerraform(this._serviceSmfCompressionListenPort),
      service_smf_enabled: cdktf.booleanToTerraform(this._serviceSmfEnabled),
      service_smf_event_connection_count_threshold: brokerServiceSmfEventConnectionCountThresholdToTerraform(this._serviceSmfEventConnectionCountThreshold.internalValue),
      service_smf_plain_text_listen_port: cdktf.numberToTerraform(this._serviceSmfPlainTextListenPort),
      service_smf_routing_control_listen_port: cdktf.numberToTerraform(this._serviceSmfRoutingControlListenPort),
      service_smf_tls_listen_port: cdktf.numberToTerraform(this._serviceSmfTlsListenPort),
      service_tls_event_connection_count_threshold: brokerServiceTlsEventConnectionCountThresholdToTerraform(this._serviceTlsEventConnectionCountThreshold.internalValue),
      service_web_transport_enabled: cdktf.booleanToTerraform(this._serviceWebTransportEnabled),
      service_web_transport_plain_text_listen_port: cdktf.numberToTerraform(this._serviceWebTransportPlainTextListenPort),
      service_web_transport_tls_listen_port: cdktf.numberToTerraform(this._serviceWebTransportTlsListenPort),
      service_web_transport_web_url_suffix: cdktf.stringToTerraform(this._serviceWebTransportWebUrlSuffix),
      tls_block_version11_enabled: cdktf.booleanToTerraform(this._tlsBlockVersion11Enabled),
      tls_cipher_suite_management_list: cdktf.stringToTerraform(this._tlsCipherSuiteManagementList),
      tls_cipher_suite_msg_backbone_list: cdktf.stringToTerraform(this._tlsCipherSuiteMsgBackboneList),
      tls_cipher_suite_secure_shell_list: cdktf.stringToTerraform(this._tlsCipherSuiteSecureShellList),
      tls_crime_exploit_protection_enabled: cdktf.booleanToTerraform(this._tlsCrimeExploitProtectionEnabled),
      tls_server_cert_content: cdktf.stringToTerraform(this._tlsServerCertContent),
      tls_server_cert_password: cdktf.stringToTerraform(this._tlsServerCertPassword),
      tls_standard_domain_certificate_authorities_enabled: cdktf.booleanToTerraform(this._tlsStandardDomainCertificateAuthoritiesEnabled),
      tls_ticket_lifetime: cdktf.numberToTerraform(this._tlsTicketLifetime),
      web_manager_allow_unencrypted_wizards_enabled: cdktf.booleanToTerraform(this._webManagerAllowUnencryptedWizardsEnabled),
      web_manager_redirect_http_enabled: cdktf.booleanToTerraform(this._webManagerRedirectHttpEnabled),
      web_manager_redirect_http_override_tls_port: cdktf.numberToTerraform(this._webManagerRedirectHttpOverrideTlsPort),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auth_brute_force_protection_enabled: {
        value: cdktf.booleanToHclTerraform(this._authBruteForceProtectionEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      auth_client_cert_revocation_check_mode: {
        value: cdktf.stringToHclTerraform(this._authClientCertRevocationCheckMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      config_sync_authentication_client_cert_max_chain_depth: {
        value: cdktf.numberToHclTerraform(this._configSyncAuthenticationClientCertMaxChainDepth),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      config_sync_authentication_client_cert_validate_date_enabled: {
        value: cdktf.booleanToHclTerraform(this._configSyncAuthenticationClientCertValidateDateEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      config_sync_client_profile_tcp_initial_congestion_window: {
        value: cdktf.numberToHclTerraform(this._configSyncClientProfileTcpInitialCongestionWindow),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      config_sync_client_profile_tcp_keepalive_count: {
        value: cdktf.numberToHclTerraform(this._configSyncClientProfileTcpKeepaliveCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      config_sync_client_profile_tcp_keepalive_idle: {
        value: cdktf.numberToHclTerraform(this._configSyncClientProfileTcpKeepaliveIdle),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      config_sync_client_profile_tcp_keepalive_interval: {
        value: cdktf.numberToHclTerraform(this._configSyncClientProfileTcpKeepaliveInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      config_sync_client_profile_tcp_max_window: {
        value: cdktf.numberToHclTerraform(this._configSyncClientProfileTcpMaxWindow),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      config_sync_client_profile_tcp_mss: {
        value: cdktf.numberToHclTerraform(this._configSyncClientProfileTcpMss),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      config_sync_enabled: {
        value: cdktf.booleanToHclTerraform(this._configSyncEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      config_sync_synchronize_username_enabled: {
        value: cdktf.booleanToHclTerraform(this._configSyncSynchronizeUsernameEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      config_sync_tls_enabled: {
        value: cdktf.booleanToHclTerraform(this._configSyncTlsEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      guaranteed_msging_defragmentation_schedule_day_list: {
        value: cdktf.stringToHclTerraform(this._guaranteedMsgingDefragmentationScheduleDayList),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      guaranteed_msging_defragmentation_schedule_enabled: {
        value: cdktf.booleanToHclTerraform(this._guaranteedMsgingDefragmentationScheduleEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      guaranteed_msging_defragmentation_schedule_time_list: {
        value: cdktf.stringToHclTerraform(this._guaranteedMsgingDefragmentationScheduleTimeList),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      guaranteed_msging_defragmentation_threshold_enabled: {
        value: cdktf.booleanToHclTerraform(this._guaranteedMsgingDefragmentationThresholdEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      guaranteed_msging_defragmentation_threshold_fragmentation_percentage: {
        value: cdktf.numberToHclTerraform(this._guaranteedMsgingDefragmentationThresholdFragmentationPercentage),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      guaranteed_msging_defragmentation_threshold_min_interval: {
        value: cdktf.numberToHclTerraform(this._guaranteedMsgingDefragmentationThresholdMinInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      guaranteed_msging_defragmentation_threshold_usage_percentage: {
        value: cdktf.numberToHclTerraform(this._guaranteedMsgingDefragmentationThresholdUsagePercentage),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      guaranteed_msging_enabled: {
        value: cdktf.booleanToHclTerraform(this._guaranteedMsgingEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      guaranteed_msging_event_cache_usage_threshold: {
        value: brokerGuaranteedMsgingEventCacheUsageThresholdToHclTerraform(this._guaranteedMsgingEventCacheUsageThreshold.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "BrokerGuaranteedMsgingEventCacheUsageThreshold",
      },
      guaranteed_msging_event_delivered_unacked_threshold: {
        value: brokerGuaranteedMsgingEventDeliveredUnackedThresholdToHclTerraform(this._guaranteedMsgingEventDeliveredUnackedThreshold.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "BrokerGuaranteedMsgingEventDeliveredUnackedThreshold",
      },
      guaranteed_msging_event_disk_usage_threshold: {
        value: brokerGuaranteedMsgingEventDiskUsageThresholdToHclTerraform(this._guaranteedMsgingEventDiskUsageThreshold.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "BrokerGuaranteedMsgingEventDiskUsageThreshold",
      },
      guaranteed_msging_event_egress_flow_count_threshold: {
        value: brokerGuaranteedMsgingEventEgressFlowCountThresholdToHclTerraform(this._guaranteedMsgingEventEgressFlowCountThreshold.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "BrokerGuaranteedMsgingEventEgressFlowCountThreshold",
      },
      guaranteed_msging_event_endpoint_count_threshold: {
        value: brokerGuaranteedMsgingEventEndpointCountThresholdToHclTerraform(this._guaranteedMsgingEventEndpointCountThreshold.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "BrokerGuaranteedMsgingEventEndpointCountThreshold",
      },
      guaranteed_msging_event_ingress_flow_count_threshold: {
        value: brokerGuaranteedMsgingEventIngressFlowCountThresholdToHclTerraform(this._guaranteedMsgingEventIngressFlowCountThreshold.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "BrokerGuaranteedMsgingEventIngressFlowCountThreshold",
      },
      guaranteed_msging_event_msg_count_threshold: {
        value: brokerGuaranteedMsgingEventMsgCountThresholdToHclTerraform(this._guaranteedMsgingEventMsgCountThreshold.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "BrokerGuaranteedMsgingEventMsgCountThreshold",
      },
      guaranteed_msging_event_msg_spool_file_count_threshold: {
        value: brokerGuaranteedMsgingEventMsgSpoolFileCountThresholdToHclTerraform(this._guaranteedMsgingEventMsgSpoolFileCountThreshold.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "BrokerGuaranteedMsgingEventMsgSpoolFileCountThreshold",
      },
      guaranteed_msging_event_msg_spool_usage_threshold: {
        value: brokerGuaranteedMsgingEventMsgSpoolUsageThresholdToHclTerraform(this._guaranteedMsgingEventMsgSpoolUsageThreshold.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "BrokerGuaranteedMsgingEventMsgSpoolUsageThreshold",
      },
      guaranteed_msging_event_transacted_session_count_threshold: {
        value: brokerGuaranteedMsgingEventTransactedSessionCountThresholdToHclTerraform(this._guaranteedMsgingEventTransactedSessionCountThreshold.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "BrokerGuaranteedMsgingEventTransactedSessionCountThreshold",
      },
      guaranteed_msging_event_transacted_session_resource_count_threshold: {
        value: brokerGuaranteedMsgingEventTransactedSessionResourceCountThresholdToHclTerraform(this._guaranteedMsgingEventTransactedSessionResourceCountThreshold.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "BrokerGuaranteedMsgingEventTransactedSessionResourceCountThreshold",
      },
      guaranteed_msging_event_transaction_count_threshold: {
        value: brokerGuaranteedMsgingEventTransactionCountThresholdToHclTerraform(this._guaranteedMsgingEventTransactionCountThreshold.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "BrokerGuaranteedMsgingEventTransactionCountThreshold",
      },
      guaranteed_msging_max_cache_usage: {
        value: cdktf.numberToHclTerraform(this._guaranteedMsgingMaxCacheUsage),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      guaranteed_msging_max_msg_spool_usage: {
        value: cdktf.numberToHclTerraform(this._guaranteedMsgingMaxMsgSpoolUsage),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      guaranteed_msging_msg_spool_sync_mirrored_msg_ack_timeout: {
        value: cdktf.numberToHclTerraform(this._guaranteedMsgingMsgSpoolSyncMirroredMsgAckTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      guaranteed_msging_msg_spool_sync_mirrored_spool_file_ack_timeout: {
        value: cdktf.numberToHclTerraform(this._guaranteedMsgingMsgSpoolSyncMirroredSpoolFileAckTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      guaranteed_msging_transaction_replication_compatibility_mode: {
        value: cdktf.stringToHclTerraform(this._guaranteedMsgingTransactionReplicationCompatibilityMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oauth_profile_default: {
        value: cdktf.stringToHclTerraform(this._oauthProfileDefault),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_amqp_enabled: {
        value: cdktf.booleanToHclTerraform(this._serviceAmqpEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      service_amqp_tls_listen_port: {
        value: cdktf.numberToHclTerraform(this._serviceAmqpTlsListenPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      service_event_connection_count_threshold: {
        value: brokerServiceEventConnectionCountThresholdToHclTerraform(this._serviceEventConnectionCountThreshold.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "BrokerServiceEventConnectionCountThreshold",
      },
      service_health_check_enabled: {
        value: cdktf.booleanToHclTerraform(this._serviceHealthCheckEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      service_health_check_listen_port: {
        value: cdktf.numberToHclTerraform(this._serviceHealthCheckListenPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      service_health_check_tls_enabled: {
        value: cdktf.booleanToHclTerraform(this._serviceHealthCheckTlsEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      service_health_check_tls_listen_port: {
        value: cdktf.numberToHclTerraform(this._serviceHealthCheckTlsListenPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      service_mate_link_enabled: {
        value: cdktf.booleanToHclTerraform(this._serviceMateLinkEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      service_mate_link_listen_port: {
        value: cdktf.numberToHclTerraform(this._serviceMateLinkListenPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      service_mqtt_enabled: {
        value: cdktf.booleanToHclTerraform(this._serviceMqttEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      service_msg_backbone_enabled: {
        value: cdktf.booleanToHclTerraform(this._serviceMsgBackboneEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      service_redundancy_enabled: {
        value: cdktf.booleanToHclTerraform(this._serviceRedundancyEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      service_redundancy_first_listen_port: {
        value: cdktf.numberToHclTerraform(this._serviceRedundancyFirstListenPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      service_rest_event_outgoing_connection_count_threshold: {
        value: brokerServiceRestEventOutgoingConnectionCountThresholdToHclTerraform(this._serviceRestEventOutgoingConnectionCountThreshold.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "BrokerServiceRestEventOutgoingConnectionCountThreshold",
      },
      service_rest_incoming_enabled: {
        value: cdktf.booleanToHclTerraform(this._serviceRestIncomingEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      service_rest_outgoing_enabled: {
        value: cdktf.booleanToHclTerraform(this._serviceRestOutgoingEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      service_semp_cors_allow_any_host_enabled: {
        value: cdktf.booleanToHclTerraform(this._serviceSempCorsAllowAnyHostEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      service_semp_legacy_timeout_enabled: {
        value: cdktf.booleanToHclTerraform(this._serviceSempLegacyTimeoutEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      service_semp_plain_text_enabled: {
        value: cdktf.booleanToHclTerraform(this._serviceSempPlainTextEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      service_semp_session_idle_timeout: {
        value: cdktf.numberToHclTerraform(this._serviceSempSessionIdleTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      service_semp_session_max_lifetime: {
        value: cdktf.numberToHclTerraform(this._serviceSempSessionMaxLifetime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      service_semp_tls_enabled: {
        value: cdktf.booleanToHclTerraform(this._serviceSempTlsEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      service_smf_compression_listen_port: {
        value: cdktf.numberToHclTerraform(this._serviceSmfCompressionListenPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      service_smf_enabled: {
        value: cdktf.booleanToHclTerraform(this._serviceSmfEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      service_smf_event_connection_count_threshold: {
        value: brokerServiceSmfEventConnectionCountThresholdToHclTerraform(this._serviceSmfEventConnectionCountThreshold.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "BrokerServiceSmfEventConnectionCountThreshold",
      },
      service_smf_plain_text_listen_port: {
        value: cdktf.numberToHclTerraform(this._serviceSmfPlainTextListenPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      service_smf_routing_control_listen_port: {
        value: cdktf.numberToHclTerraform(this._serviceSmfRoutingControlListenPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      service_smf_tls_listen_port: {
        value: cdktf.numberToHclTerraform(this._serviceSmfTlsListenPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      service_tls_event_connection_count_threshold: {
        value: brokerServiceTlsEventConnectionCountThresholdToHclTerraform(this._serviceTlsEventConnectionCountThreshold.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "BrokerServiceTlsEventConnectionCountThreshold",
      },
      service_web_transport_enabled: {
        value: cdktf.booleanToHclTerraform(this._serviceWebTransportEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      service_web_transport_plain_text_listen_port: {
        value: cdktf.numberToHclTerraform(this._serviceWebTransportPlainTextListenPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      service_web_transport_tls_listen_port: {
        value: cdktf.numberToHclTerraform(this._serviceWebTransportTlsListenPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      service_web_transport_web_url_suffix: {
        value: cdktf.stringToHclTerraform(this._serviceWebTransportWebUrlSuffix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tls_block_version11_enabled: {
        value: cdktf.booleanToHclTerraform(this._tlsBlockVersion11Enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      tls_cipher_suite_management_list: {
        value: cdktf.stringToHclTerraform(this._tlsCipherSuiteManagementList),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tls_cipher_suite_msg_backbone_list: {
        value: cdktf.stringToHclTerraform(this._tlsCipherSuiteMsgBackboneList),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tls_cipher_suite_secure_shell_list: {
        value: cdktf.stringToHclTerraform(this._tlsCipherSuiteSecureShellList),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tls_crime_exploit_protection_enabled: {
        value: cdktf.booleanToHclTerraform(this._tlsCrimeExploitProtectionEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      tls_server_cert_content: {
        value: cdktf.stringToHclTerraform(this._tlsServerCertContent),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tls_server_cert_password: {
        value: cdktf.stringToHclTerraform(this._tlsServerCertPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tls_standard_domain_certificate_authorities_enabled: {
        value: cdktf.booleanToHclTerraform(this._tlsStandardDomainCertificateAuthoritiesEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      tls_ticket_lifetime: {
        value: cdktf.numberToHclTerraform(this._tlsTicketLifetime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      web_manager_allow_unencrypted_wizards_enabled: {
        value: cdktf.booleanToHclTerraform(this._webManagerAllowUnencryptedWizardsEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      web_manager_redirect_http_enabled: {
        value: cdktf.booleanToHclTerraform(this._webManagerRedirectHttpEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      web_manager_redirect_http_override_tls_port: {
        value: cdktf.numberToHclTerraform(this._webManagerRedirectHttpOverrideTlsPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
