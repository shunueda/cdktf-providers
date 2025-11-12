// https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MsgVpnConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of another Message VPN which this Message VPN is an alias for. When this Message VPN is enabled, the alias has no effect. When this Message VPN is disabled, Clients (but not Bridges and routing Links) logging into this Message VPN are automatically logged in to the other Message VPN, and authentication and authorization take place in the context of the other Message VPN.
  * 
  * Aliases may form a non-circular chain, cascading one to the next.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "global/mesh-manager". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `""`. Available since SEMP API version 2.14.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn#alias MsgVpn#alias}
  */
  readonly alias?: string;
  /**
  * Enable or disable basic authentication for clients connecting to the Message VPN. Basic authentication is authentication that involves the use of a username and password to prove identity. If a user provides credentials for a different authentication scheme, this setting is not applicable.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "global/mesh-manager". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn#authentication_basic_enabled MsgVpn#authentication_basic_enabled}
  */
  readonly authenticationBasicEnabled?: boolean | cdktf.IResolvable;
  /**
  * The name of the RADIUS or LDAP Profile to use for basic authentication.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "global/mesh-manager". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `"default"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn#authentication_basic_profile_name MsgVpn#authentication_basic_profile_name}
  */
  readonly authenticationBasicProfileName?: string;
  /**
  * The RADIUS domain to use for basic authentication.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "global/mesh-manager". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `""`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn#authentication_basic_radius_domain MsgVpn#authentication_basic_radius_domain}
  */
  readonly authenticationBasicRadiusDomain?: string;
  /**
  * The type of basic authentication to use for clients connecting to the Message VPN.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "global/mesh-manager". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `"radius"`. The allowed values and their meaning are:
  * 
  * <pre>
  * "internal" - Internal database. Authentication is against Client Usernames.
  * "ldap" - LDAP authentication. An LDAP profile name must be provided.
  * "radius" - RADIUS authentication. A RADIUS profile name must be provided.
  * "none" - No authentication. Anonymous login allowed.
  * </pre>
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn#authentication_basic_type MsgVpn#authentication_basic_type}
  */
  readonly authenticationBasicType?: string;
  /**
  * Enable or disable allowing an incoming client connection to specify a Client Username via the API connect method. When disabled, the certificate CN (Common Name) is always used.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "global/mesh-manager". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn#authentication_client_cert_allow_api_provided_username_enabled MsgVpn#authentication_client_cert_allow_api_provided_username_enabled}
  */
  readonly authenticationClientCertAllowApiProvidedUsernameEnabled?: boolean | cdktf.IResolvable;
  /**
  * Enable or disable certificate matching rules. When disabled, any valid certificate is accepted.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "global/mesh-manager". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `false`. Available since SEMP API version 2.27.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn#authentication_client_cert_certificate_matching_rules_enabled MsgVpn#authentication_client_cert_certificate_matching_rules_enabled}
  */
  readonly authenticationClientCertCertificateMatchingRulesEnabled?: boolean | cdktf.IResolvable;
  /**
  * Enable or disable client certificate authentication for clients connecting to the Message VPN.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "global/mesh-manager". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn#authentication_client_cert_enabled MsgVpn#authentication_client_cert_enabled}
  */
  readonly authenticationClientCertEnabled?: boolean | cdktf.IResolvable;
  /**
  * The maximum depth for a client certificate chain. The depth of a chain is defined as the number of signing CA certificates that are present in the chain back to a trusted self-signed root CA certificate.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "global/mesh-manager". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `3`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn#authentication_client_cert_max_chain_depth MsgVpn#authentication_client_cert_max_chain_depth}
  */
  readonly authenticationClientCertMaxChainDepth?: number;
  /**
  * The desired behavior for client certificate revocation checking.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "global/mesh-manager". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `"allow-valid"`. The allowed values and their meaning are:
  * 
  * <pre>
  * "allow-all" - Allow the client to authenticate, the result of client certificate revocation check is ignored.
  * "allow-unknown" - Allow the client to authenticate even if the revocation status of his certificate cannot be determined.
  * "allow-valid" - Allow the client to authenticate only when the revocation check returned an explicit positive response.
  * </pre>
  *  Available since SEMP API version 2.6.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn#authentication_client_cert_revocation_check_mode MsgVpn#authentication_client_cert_revocation_check_mode}
  */
  readonly authenticationClientCertRevocationCheckMode?: string;
  /**
  * The field from the client certificate to use as the client username.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "global/mesh-manager". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `"common-name"`. The allowed values and their meaning are:
  * 
  * <pre>
  * "certificate-thumbprint" - The username is computed as the SHA-1 hash over the entire DER-encoded contents of the client certificate.
  * "common-name" - The username is extracted from the certificate's first instance of the Common Name attribute in the Subject DN.
  * "common-name-last" - The username is extracted from the certificate's last instance of the Common Name attribute in the Subject DN.
  * "subject-alternate-name-msupn" - The username is extracted from the certificate's Other Name type of the Subject Alternative Name and must have the msUPN signature.
  * "uid" - The username is extracted from the certificate's first instance of the User Identifier attribute in the Subject DN.
  * "uid-last" - The username is extracted from the certificate's last instance of the User Identifier attribute in the Subject DN.
  * </pre>
  *  Available since SEMP API version 2.6.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn#authentication_client_cert_username_source MsgVpn#authentication_client_cert_username_source}
  */
  readonly authenticationClientCertUsernameSource?: string;
  /**
  * Enable or disable validation of the "Not Before" and "Not After" validity dates in the client certificate.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "global/mesh-manager". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn#authentication_client_cert_validate_date_enabled MsgVpn#authentication_client_cert_validate_date_enabled}
  */
  readonly authenticationClientCertValidateDateEnabled?: boolean | cdktf.IResolvable;
  /**
  * Enable or disable allowing an incoming client connection to specify a Client Username via the API connect method. When disabled, the Kerberos Principal name is always used.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "global/mesh-manager". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn#authentication_kerberos_allow_api_provided_username_enabled MsgVpn#authentication_kerberos_allow_api_provided_username_enabled}
  */
  readonly authenticationKerberosAllowApiProvidedUsernameEnabled?: boolean | cdktf.IResolvable;
  /**
  * Enable or disable Kerberos authentication for clients connecting to the Message VPN.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "global/mesh-manager". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn#authentication_kerberos_enabled MsgVpn#authentication_kerberos_enabled}
  */
  readonly authenticationKerberosEnabled?: boolean | cdktf.IResolvable;
  /**
  * The name of the profile to use when the client does not supply a profile name.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `""`. Available since SEMP API version 2.25.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn#authentication_oauth_default_profile_name MsgVpn#authentication_oauth_default_profile_name}
  */
  readonly authenticationOauthDefaultProfileName?: string;
  /**
  * Enable or disable OAuth authentication for clients connecting to the Message VPN.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "global/mesh-manager". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `false`. Available since SEMP API version 2.13.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn#authentication_oauth_enabled MsgVpn#authentication_oauth_enabled}
  */
  readonly authenticationOauthEnabled?: boolean | cdktf.IResolvable;
  /**
  * The name of the attribute that is retrieved from the LDAP server as part of the LDAP search when authorizing a client connecting to the Message VPN.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `"memberOf"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn#authorization_ldap_group_membership_attribute_name MsgVpn#authorization_ldap_group_membership_attribute_name}
  */
  readonly authorizationLdapGroupMembershipAttributeName?: string;
  /**
  * Enable or disable client-username domain trimming for LDAP lookups of client connections. When enabled, the value of $CLIENT_USERNAME (when used for searching) will be truncated at the first occurrence of the @ character. For example, if the client-username is in the form of an email address, then the domain portion will be removed.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `false`. Available since SEMP API version 2.13.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn#authorization_ldap_trim_client_username_domain_enabled MsgVpn#authorization_ldap_trim_client_username_domain_enabled}
  */
  readonly authorizationLdapTrimClientUsernameDomainEnabled?: boolean | cdktf.IResolvable;
  /**
  * The name of the LDAP Profile to use for client authorization.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `""`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn#authorization_profile_name MsgVpn#authorization_profile_name}
  */
  readonly authorizationProfileName?: string;
  /**
  * The type of authorization to use for clients connecting to the Message VPN.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `"internal"`. The allowed values and their meaning are:
  * 
  * <pre>
  * "ldap" - LDAP authorization.
  * "internal" - Internal authorization.
  * </pre>
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn#authorization_type MsgVpn#authorization_type}
  */
  readonly authorizationType?: string;
  /**
  * The maximum depth for a server certificate chain. The depth of a chain is defined as the number of signing CA certificates that are present in the chain back to a trusted self-signed root CA certificate.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "global/mesh-manager". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `3`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn#bridging_tls_server_cert_max_chain_depth MsgVpn#bridging_tls_server_cert_max_chain_depth}
  */
  readonly bridgingTlsServerCertMaxChainDepth?: number;
  /**
  * Enable or disable validation of the "Not Before" and "Not After" validity dates in the server certificate. When disabled, a certificate will be accepted even if the certificate is not valid based on these dates.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "global/mesh-manager". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn#bridging_tls_server_cert_validate_date_enabled MsgVpn#bridging_tls_server_cert_validate_date_enabled}
  */
  readonly bridgingTlsServerCertValidateDateEnabled?: boolean | cdktf.IResolvable;
  /**
  * Enable or disable the standard TLS authentication mechanism of verifying the name used to connect to the bridge. If enabled, the name used to connect to the bridge is checked against the names specified in the certificate returned by the remote broker. Legacy Common Name validation is not performed if Server Certificate Name Validation is enabled, even if Common Name validation is also enabled.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "global/mesh-manager". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `true`. Available since SEMP API version 2.18.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn#bridging_tls_server_cert_validate_name_enabled MsgVpn#bridging_tls_server_cert_validate_name_enabled}
  */
  readonly bridgingTlsServerCertValidateNameEnabled?: boolean | cdktf.IResolvable;
  /**
  * Enable or disable Dynamic Message Routing (DMR) for the Message VPN.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "global/mesh-manager". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `false`. Available since SEMP API version 2.11.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn#dmr_enabled MsgVpn#dmr_enabled}
  */
  readonly dmrEnabled?: boolean | cdktf.IResolvable;
  /**
  * Enable or disable the Message VPN.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn#enabled MsgVpn#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * The thresholds for the client connection count event of the Message VPN, relative to `max_connection_count`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn#event_connection_count_threshold MsgVpn#event_connection_count_threshold}
  */
  readonly eventConnectionCountThreshold?: MsgVpnEventConnectionCountThreshold;
  /**
  * The thresholds for the egress flow count event of the Message VPN, relative to `max_egress_flow_count`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn#event_egress_flow_count_threshold MsgVpn#event_egress_flow_count_threshold}
  */
  readonly eventEgressFlowCountThreshold?: MsgVpnEventEgressFlowCountThreshold;
  /**
  * The thresholds for the egress message rate event of the Message VPN.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn#event_egress_msg_rate_threshold MsgVpn#event_egress_msg_rate_threshold}
  */
  readonly eventEgressMsgRateThreshold?: MsgVpnEventEgressMsgRateThreshold;
  /**
  * The thresholds for the Queues and Topic Endpoints count event of the Message VPN, relative to `max_endpoint_count`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn#event_endpoint_count_threshold MsgVpn#event_endpoint_count_threshold}
  */
  readonly eventEndpointCountThreshold?: MsgVpnEventEndpointCountThreshold;
  /**
  * The thresholds for the receive flow count event of the Message VPN, relative to `max_ingress_flow_count`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn#event_ingress_flow_count_threshold MsgVpn#event_ingress_flow_count_threshold}
  */
  readonly eventIngressFlowCountThreshold?: MsgVpnEventIngressFlowCountThreshold;
  /**
  * The thresholds for the receive message rate event of the Message VPN.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn#event_ingress_msg_rate_threshold MsgVpn#event_ingress_msg_rate_threshold}
  */
  readonly eventIngressMsgRateThreshold?: MsgVpnEventIngressMsgRateThreshold;
  /**
  * The threshold, in kilobytes, after which a message is considered to be large for the Message VPN.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `1024`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn#event_large_msg_threshold MsgVpn#event_large_msg_threshold}
  */
  readonly eventLargeMsgThreshold?: number;
  /**
  * A prefix applied to all published Events in the Message VPN.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `""`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn#event_log_tag MsgVpn#event_log_tag}
  */
  readonly eventLogTag?: string;
  /**
  * The thresholds for the message spool usage event of the Message VPN, relative to `max_msg_spool_usage`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn#event_msg_spool_usage_threshold MsgVpn#event_msg_spool_usage_threshold}
  */
  readonly eventMsgSpoolUsageThreshold?: MsgVpnEventMsgSpoolUsageThreshold;
  /**
  * Enable or disable Client level Event message publishing.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn#event_publish_client_enabled MsgVpn#event_publish_client_enabled}
  */
  readonly eventPublishClientEnabled?: boolean | cdktf.IResolvable;
  /**
  * Enable or disable Message VPN level Event message publishing.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn#event_publish_msg_vpn_enabled MsgVpn#event_publish_msg_vpn_enabled}
  */
  readonly eventPublishMsgVpnEnabled?: boolean | cdktf.IResolvable;
  /**
  * Subscription level Event message publishing mode.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `"off"`. The allowed values and their meaning are:
  * 
  * <pre>
  * "off" - Disable client level event message publishing.
  * "on-with-format-v1" - Enable client level event message publishing with format v1.
  * "on-with-no-unsubscribe-events-on-disconnect-format-v1" - As "on-with-format-v1", but unsubscribe events are not generated when a client disconnects. Unsubscribe events are still raised when a client explicitly unsubscribes from its subscriptions.
  * "on-with-format-v2" - Enable client level event message publishing with format v2.
  * "on-with-no-unsubscribe-events-on-disconnect-format-v2" - As "on-with-format-v2", but unsubscribe events are not generated when a client disconnects. Unsubscribe events are still raised when a client explicitly unsubscribes from its subscriptions.
  * </pre>
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn#event_publish_subscription_mode MsgVpn#event_publish_subscription_mode}
  */
  readonly eventPublishSubscriptionMode?: string;
  /**
  * Enable or disable Event publish topics in MQTT format.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn#event_publish_topic_format_mqtt_enabled MsgVpn#event_publish_topic_format_mqtt_enabled}
  */
  readonly eventPublishTopicFormatMqttEnabled?: boolean | cdktf.IResolvable;
  /**
  * Enable or disable Event publish topics in SMF format.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn#event_publish_topic_format_smf_enabled MsgVpn#event_publish_topic_format_smf_enabled}
  */
  readonly eventPublishTopicFormatSmfEnabled?: boolean | cdktf.IResolvable;
  /**
  * The thresholds for the AMQP client connection count event of the Message VPN, relative to `service_amqp_max_connection_count`. Available since SEMP API version 2.7.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn#event_service_amqp_connection_count_threshold MsgVpn#event_service_amqp_connection_count_threshold}
  */
  readonly eventServiceAmqpConnectionCountThreshold?: MsgVpnEventServiceAmqpConnectionCountThreshold;
  /**
  * The thresholds for the MQTT client connection count event of the Message VPN, relative to `service_mqtt_max_connection_count`. Available since SEMP API version 2.1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn#event_service_mqtt_connection_count_threshold MsgVpn#event_service_mqtt_connection_count_threshold}
  */
  readonly eventServiceMqttConnectionCountThreshold?: MsgVpnEventServiceMqttConnectionCountThreshold;
  /**
  * The thresholds for the incoming REST client connection count event of the Message VPN, relative to `service_rest_incoming_max_connection_count`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn#event_service_rest_incoming_connection_count_threshold MsgVpn#event_service_rest_incoming_connection_count_threshold}
  */
  readonly eventServiceRestIncomingConnectionCountThreshold?: MsgVpnEventServiceRestIncomingConnectionCountThreshold;
  /**
  * The thresholds for the SMF client connection count event of the Message VPN, relative to `service_smf_max_connection_count`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn#event_service_smf_connection_count_threshold MsgVpn#event_service_smf_connection_count_threshold}
  */
  readonly eventServiceSmfConnectionCountThreshold?: MsgVpnEventServiceSmfConnectionCountThreshold;
  /**
  * The thresholds for the Web Transport client connection count event of the Message VPN, relative to `service_web_max_connection_count`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn#event_service_web_connection_count_threshold MsgVpn#event_service_web_connection_count_threshold}
  */
  readonly eventServiceWebConnectionCountThreshold?: MsgVpnEventServiceWebConnectionCountThreshold;
  /**
  * The thresholds for the subscription count event of the Message VPN, relative to `max_subscription_count`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn#event_subscription_count_threshold MsgVpn#event_subscription_count_threshold}
  */
  readonly eventSubscriptionCountThreshold?: MsgVpnEventSubscriptionCountThreshold;
  /**
  * The thresholds for the transacted session count event of the Message VPN, relative to `max_transacted_session_count`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn#event_transacted_session_count_threshold MsgVpn#event_transacted_session_count_threshold}
  */
  readonly eventTransactedSessionCountThreshold?: MsgVpnEventTransactedSessionCountThreshold;
  /**
  * The thresholds for the transaction count event of the Message VPN, relative to `max_transaction_count`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn#event_transaction_count_threshold MsgVpn#event_transaction_count_threshold}
  */
  readonly eventTransactionCountThreshold?: MsgVpnEventTransactionCountThreshold;
  /**
  * Enable or disable the export of subscriptions in the Message VPN to other routers in the network over Neighbor links.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "global/mesh-manager". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn#export_subscriptions_enabled MsgVpn#export_subscriptions_enabled}
  */
  readonly exportSubscriptionsEnabled?: boolean | cdktf.IResolvable;
  /**
  * Enable or disable JNDI access for clients in the Message VPN.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `false`. Available since SEMP API version 2.2.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn#jndi_enabled MsgVpn#jndi_enabled}
  */
  readonly jndiEnabled?: boolean | cdktf.IResolvable;
  /**
  * The maximum number of client connections to the Message VPN.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "global/read-write". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default is the maximum value supported by the platform.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn#max_connection_count MsgVpn#max_connection_count}
  */
  readonly maxConnectionCount?: number;
  /**
  * The maximum number of transmit flows that can be created in the Message VPN.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "global/read-write". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `1000`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn#max_egress_flow_count MsgVpn#max_egress_flow_count}
  */
  readonly maxEgressFlowCount?: number;
  /**
  * The maximum number of Queues and Topic Endpoints that can be created in the Message VPN.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "global/read-write". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `1000`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn#max_endpoint_count MsgVpn#max_endpoint_count}
  */
  readonly maxEndpointCount?: number;
  /**
  * The maximum number of receive flows that can be created in the Message VPN.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "global/read-write". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `1000`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn#max_ingress_flow_count MsgVpn#max_ingress_flow_count}
  */
  readonly maxIngressFlowCount?: number;
  /**
  * The maximum number of simultaneous Kafka broker connections of the Message VPN.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "global/read-write". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default is the maximum value supported by the platform. Available since SEMP API version 2.39.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn#max_kafka_broker_connection_count MsgVpn#max_kafka_broker_connection_count}
  */
  readonly maxKafkaBrokerConnectionCount?: number;
  /**
  * The maximum message spool usage by the Message VPN, in megabytes.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "global/read-write". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `0`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn#max_msg_spool_usage MsgVpn#max_msg_spool_usage}
  */
  readonly maxMsgSpoolUsage?: number;
  /**
  * The maximum number of local subscriptions that can be added to the Message VPN.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "global/read-write". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `500000`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn#max_subscription_count MsgVpn#max_subscription_count}
  */
  readonly maxSubscriptionCount?: number;
  /**
  * The maximum number of transacted sessions that can be created in the Message VPN.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "global/read-write". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default varies by platform.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn#max_transacted_session_count MsgVpn#max_transacted_session_count}
  */
  readonly maxTransactedSessionCount?: number;
  /**
  * The maximum number of transactions that can be created in the Message VPN.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "global/read-write". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default varies by platform.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn#max_transaction_count MsgVpn#max_transaction_count}
  */
  readonly maxTransactionCount?: number;
  /**
  * The maximum total memory usage of the MQTT Retain feature for this Message VPN, in MB. If the maximum memory is reached, any arriving retain messages that require more memory are discarded. A value of -1 indicates that the memory is bounded only by the global max memory limit. A value of 0 prevents MQTT Retain from becoming operational.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "global/read-write". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `-1`. Available since SEMP API version 2.11.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn#mqtt_retain_max_memory MsgVpn#mqtt_retain_max_memory}
  */
  readonly mqttRetainMaxMemory?: number;
  /**
  * The name of the Message VPN.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn#msg_vpn_name MsgVpn#msg_vpn_name}
  */
  readonly msgVpnName: string;
  /**
  * The acknowledgment (ACK) propagation interval for the replication Bridge, in number of replicated messages.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `20`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn#replication_ack_propagation_interval_msg_count MsgVpn#replication_ack_propagation_interval_msg_count}
  */
  readonly replicationAckPropagationIntervalMsgCount?: number;
  /**
  * The Client Username the replication Bridge uses to login to the remote Message VPN.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "global/mesh-manager". Changes to this attribute are synchronized to HA mates via config-sync. The default value is `""`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn#replication_bridge_authentication_basic_client_username MsgVpn#replication_bridge_authentication_basic_client_username}
  */
  readonly replicationBridgeAuthenticationBasicClientUsername?: string;
  /**
  * The password for the Client Username.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "global/mesh-manager". This attribute is absent from a GET and not updated when absent in a PUT, subject to the exceptions [here](https://docs.solace.com/Admin/SEMP/SEMP-API-Archit.htm#HTTP_Methods). Changes to this attribute are synchronized to HA mates via config-sync. The default value is `""`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn#replication_bridge_authentication_basic_password MsgVpn#replication_bridge_authentication_basic_password}
  */
  readonly replicationBridgeAuthenticationBasicPassword?: string;
  /**
  * The PEM formatted content for the client certificate used by this bridge to login to the Remote Message VPN. It must consist of a private key and between one and three certificates comprising the certificate trust chain.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "global/mesh-manager". This attribute is absent from a GET and not updated when absent in a PUT, subject to the exceptions [here](https://docs.solace.com/Admin/SEMP/SEMP-API-Archit.htm#HTTP_Methods). The default value is `""`. Available since SEMP API version 2.9.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn#replication_bridge_authentication_client_cert_content MsgVpn#replication_bridge_authentication_client_cert_content}
  */
  readonly replicationBridgeAuthenticationClientCertContent?: string;
  /**
  * The password for the client certificate.
  * 
  * The minimum access scope/level required to change this attribute is "global/mesh-manager". This attribute is absent from a GET and not updated when absent in a PUT, subject to the exceptions [here](https://docs.solace.com/Admin/SEMP/SEMP-API-Archit.htm#HTTP_Methods). The default value is `""`. Available since SEMP API version 2.9.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn#replication_bridge_authentication_client_cert_password MsgVpn#replication_bridge_authentication_client_cert_password}
  */
  readonly replicationBridgeAuthenticationClientCertPassword?: string;
  /**
  * The authentication scheme for the replication Bridge in the Message VPN.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "global/mesh-manager". Changes to this attribute are synchronized to HA mates via config-sync. The default value is `"basic"`. The allowed values and their meaning are:
  * 
  * <pre>
  * "basic" - Basic Authentication Scheme (via username and password).
  * "client-certificate" - Client Certificate Authentication Scheme (via certificate file or content).
  * </pre>
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn#replication_bridge_authentication_scheme MsgVpn#replication_bridge_authentication_scheme}
  */
  readonly replicationBridgeAuthenticationScheme?: string;
  /**
  * Enable or disable use of compression for the replication Bridge.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "global/mesh-manager". Changes to this attribute are synchronized to HA mates via config-sync. The default value is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn#replication_bridge_compressed_data_enabled MsgVpn#replication_bridge_compressed_data_enabled}
  */
  readonly replicationBridgeCompressedDataEnabled?: boolean | cdktf.IResolvable;
  /**
  * The size of the window used for guaranteed messages published to the replication Bridge, in messages.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "global/mesh-manager". Changes to this attribute are synchronized to HA mates via config-sync. The default value is `255`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn#replication_bridge_egress_flow_window_size MsgVpn#replication_bridge_egress_flow_window_size}
  */
  readonly replicationBridgeEgressFlowWindowSize?: number;
  /**
  * The number of seconds that must pass before retrying the replication Bridge connection.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "global/mesh-manager". Changes to this attribute are synchronized to HA mates via config-sync. The default value is `3`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn#replication_bridge_retry_delay MsgVpn#replication_bridge_retry_delay}
  */
  readonly replicationBridgeRetryDelay?: number;
  /**
  * Enable or disable use of encryption (TLS) for the replication Bridge connection.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "global/mesh-manager". Changes to this attribute are synchronized to HA mates via config-sync. The default value is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn#replication_bridge_tls_enabled MsgVpn#replication_bridge_tls_enabled}
  */
  readonly replicationBridgeTlsEnabled?: boolean | cdktf.IResolvable;
  /**
  * The Client Profile for the unidirectional replication Bridge in the Message VPN. It is used only for the TCP parameters.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "global/mesh-manager". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `"#client-profile"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn#replication_bridge_unidirectional_client_profile_name MsgVpn#replication_bridge_unidirectional_client_profile_name}
  */
  readonly replicationBridgeUnidirectionalClientProfileName?: string;
  /**
  * Enable or disable replication for the Message VPN.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "global/mesh-manager". Changes to this attribute are synchronized to HA mates via config-sync. The default value is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn#replication_enabled MsgVpn#replication_enabled}
  */
  readonly replicationEnabled?: boolean | cdktf.IResolvable;
  /**
  * The behavior to take when enabling replication for the Message VPN, depending on the existence of the replication Queue.
  * 
  * The minimum access scope/level required to change this attribute is "global/mesh-manager". This attribute is absent from a GET and not updated when absent in a PUT, subject to the exceptions [here](https://docs.solace.com/Admin/SEMP/SEMP-API-Archit.htm#HTTP_Methods). Changes to this attribute are synchronized to HA mates via config-sync. The default value is `"fail-on-existing-queue"`. The allowed values and their meaning are:
  * 
  * <pre>
  * "fail-on-existing-queue" - The data replication queue must not already exist.
  * "force-use-existing-queue" - The data replication queue must already exist. Any data messages on the Queue will be forwarded to interested applications. IMPORTANT: Before using this mode be certain that the messages are not stale or otherwise unsuitable to be forwarded. This mode can only be specified when the existing queue is configured the same as is currently specified under replication configuration otherwise the enabling of replication will fail.
  * "force-recreate-queue" - The data replication queue must already exist. Any data messages on the Queue will be discarded. IMPORTANT: Before using this mode be certain that the messages on the existing data replication queue are not needed by interested applications.
  * </pre>
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn#replication_enabled_queue_behavior MsgVpn#replication_enabled_queue_behavior}
  */
  readonly replicationEnabledQueueBehavior?: string;
  /**
  * The maximum message spool usage by the replication Bridge local Queue (quota), in megabytes.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "global/mesh-manager". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `60000`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn#replication_queue_max_msg_spool_usage MsgVpn#replication_queue_max_msg_spool_usage}
  */
  readonly replicationQueueMaxMsgSpoolUsage?: number;
  /**
  * Enable or disable whether messages discarded on the replication Bridge local Queue are rejected back to the sender.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn#replication_queue_reject_msg_to_sender_on_discard_enabled MsgVpn#replication_queue_reject_msg_to_sender_on_discard_enabled}
  */
  readonly replicationQueueRejectMsgToSenderOnDiscardEnabled?: boolean | cdktf.IResolvable;
  /**
  * Enable or disable whether guaranteed messages published to synchronously replicated Topics are rejected back to the sender when synchronous replication becomes ineligible.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn#replication_reject_msg_when_sync_ineligible_enabled MsgVpn#replication_reject_msg_when_sync_ineligible_enabled}
  */
  readonly replicationRejectMsgWhenSyncIneligibleEnabled?: boolean | cdktf.IResolvable;
  /**
  * The replication role for the Message VPN.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "global/mesh-manager". Changes to this attribute are synchronized to HA mates via config-sync. The default value is `"standby"`. The allowed values and their meaning are:
  * 
  * <pre>
  * "active" - Assume the Active role in replication for the Message VPN.
  * "standby" - Assume the Standby role in replication for the Message VPN.
  * </pre>
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn#replication_role MsgVpn#replication_role}
  */
  readonly replicationRole?: string;
  /**
  * The transaction replication mode for all transactions within the Message VPN. Changing this value during operation will not affect existing transactions; it is only used upon starting a transaction.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `"async"`. The allowed values and their meaning are:
  * 
  * <pre>
  * "sync" - Messages are acknowledged when replicated (spooled remotely).
  * "async" - Messages are acknowledged when pending replication (spooled locally).
  * </pre>
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn#replication_transaction_mode MsgVpn#replication_transaction_mode}
  */
  readonly replicationTransactionMode?: string;
  /**
  * The maximum depth for a REST Consumer server certificate chain. The depth of a chain is defined as the number of signing CA certificates that are present in the chain back to a trusted self-signed root CA certificate.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "global/mesh-manager". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `3`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn#rest_tls_server_cert_max_chain_depth MsgVpn#rest_tls_server_cert_max_chain_depth}
  */
  readonly restTlsServerCertMaxChainDepth?: number;
  /**
  * Enable or disable validation of the "Not Before" and "Not After" validity dates in the REST Consumer server certificate.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "global/mesh-manager". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn#rest_tls_server_cert_validate_date_enabled MsgVpn#rest_tls_server_cert_validate_date_enabled}
  */
  readonly restTlsServerCertValidateDateEnabled?: boolean | cdktf.IResolvable;
  /**
  * Enable or disable the standard TLS authentication mechanism of verifying the name used to connect to the remote REST Consumer. If enabled, the name used to connect to the remote REST Consumer is checked against the names specified in the certificate returned by the remote broker. Legacy Common Name validation is not performed if Server Certificate Name Validation is enabled, even if Common Name validation is also enabled.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "global/mesh-manager". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `true`. Available since SEMP API version 2.17.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn#rest_tls_server_cert_validate_name_enabled MsgVpn#rest_tls_server_cert_validate_name_enabled}
  */
  readonly restTlsServerCertValidateNameEnabled?: boolean | cdktf.IResolvable;
  /**
  * Enable or disable "admin client" SEMP over the message bus commands for the current Message VPN.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "global/mesh-manager". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn#semp_over_msg_bus_admin_client_enabled MsgVpn#semp_over_msg_bus_admin_client_enabled}
  */
  readonly sempOverMsgBusAdminClientEnabled?: boolean | cdktf.IResolvable;
  /**
  * Enable or disable "admin distributed-cache" SEMP over the message bus commands for the current Message VPN.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "global/mesh-manager". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn#semp_over_msg_bus_admin_distributed_cache_enabled MsgVpn#semp_over_msg_bus_admin_distributed_cache_enabled}
  */
  readonly sempOverMsgBusAdminDistributedCacheEnabled?: boolean | cdktf.IResolvable;
  /**
  * Enable or disable "admin" SEMP over the message bus commands for the current Message VPN.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "global/mesh-manager". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn#semp_over_msg_bus_admin_enabled MsgVpn#semp_over_msg_bus_admin_enabled}
  */
  readonly sempOverMsgBusAdminEnabled?: boolean | cdktf.IResolvable;
  /**
  * Enable or disable SEMP over the message bus for the current Message VPN.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "global/mesh-manager". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn#semp_over_msg_bus_enabled MsgVpn#semp_over_msg_bus_enabled}
  */
  readonly sempOverMsgBusEnabled?: boolean | cdktf.IResolvable;
  /**
  * Enable or disable "show" SEMP over the message bus commands for the current Message VPN.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "global/mesh-manager". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn#semp_over_msg_bus_show_enabled MsgVpn#semp_over_msg_bus_show_enabled}
  */
  readonly sempOverMsgBusShowEnabled?: boolean | cdktf.IResolvable;
  /**
  * The maximum number of AMQP client connections that can be simultaneously connected to the Message VPN. This value may be higher than supported by the platform.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "global/read-write". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default is the maximum value supported by the platform. Available since SEMP API version 2.7.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn#service_amqp_max_connection_count MsgVpn#service_amqp_max_connection_count}
  */
  readonly serviceAmqpMaxConnectionCount?: number;
  /**
  * Enable or disable the plain-text AMQP service in the Message VPN. Disabling causes clients connected to the corresponding listen-port to be disconnected.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `false`. Available since SEMP API version 2.7.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn#service_amqp_plain_text_enabled MsgVpn#service_amqp_plain_text_enabled}
  */
  readonly serviceAmqpPlainTextEnabled?: boolean | cdktf.IResolvable;
  /**
  * The port number for plain-text AMQP clients that connect to the Message VPN. The port must be unique across the message backbone. A value of 0 means that the listen-port is unassigned and cannot be enabled.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "global/read-write". Modifying this attribute while the object (or the relevant part of the object) is administratively enabled may be service impacting as service_amqp_plain_text_enabled will be temporarily set to false to apply the change. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `0`. Available since SEMP API version 2.7.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn#service_amqp_plain_text_listen_port MsgVpn#service_amqp_plain_text_listen_port}
  */
  readonly serviceAmqpPlainTextListenPort?: number;
  /**
  * Enable or disable the use of encryption (TLS) for the AMQP service in the Message VPN. Disabling causes clients currently connected over TLS to be disconnected.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `false`. Available since SEMP API version 2.7.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn#service_amqp_tls_enabled MsgVpn#service_amqp_tls_enabled}
  */
  readonly serviceAmqpTlsEnabled?: boolean | cdktf.IResolvable;
  /**
  * The port number for AMQP clients that connect to the Message VPN over TLS. The port must be unique across the message backbone. A value of 0 means that the listen-port is unassigned and cannot be enabled.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "global/read-write". Modifying this attribute while the object (or the relevant part of the object) is administratively enabled may be service impacting as service_amqp_tls_enabled will be temporarily set to false to apply the change. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `0`. Available since SEMP API version 2.7.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn#service_amqp_tls_listen_port MsgVpn#service_amqp_tls_listen_port}
  */
  readonly serviceAmqpTlsListenPort?: number;
  /**
  * Determines when to request a client certificate from an incoming MQTT client connecting via a TLS port.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `"when-enabled-in-message-vpn"`. The allowed values and their meaning are:
  * 
  * <pre>
  * "always" - Always ask for a client certificate regardless of the "message-vpn > authentication > client-certificate > shutdown" configuration.
  * "never" - Never ask for a client certificate regardless of the "message-vpn > authentication > client-certificate > shutdown" configuration.
  * "when-enabled-in-message-vpn" - Only ask for a client-certificate if client certificate authentication is enabled under "message-vpn >  authentication > client-certificate > shutdown".
  * </pre>
  *  Available since SEMP API version 2.21.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn#service_mqtt_authentication_client_cert_request MsgVpn#service_mqtt_authentication_client_cert_request}
  */
  readonly serviceMqttAuthenticationClientCertRequest?: string;
  /**
  * The maximum number of MQTT client connections that can be simultaneously connected to the Message VPN.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "global/read-write". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default is the maximum value supported by the platform. Available since SEMP API version 2.1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn#service_mqtt_max_connection_count MsgVpn#service_mqtt_max_connection_count}
  */
  readonly serviceMqttMaxConnectionCount?: number;
  /**
  * Enable or disable the plain-text MQTT service in the Message VPN. Disabling causes clients currently connected to be disconnected.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `false`. Available since SEMP API version 2.1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn#service_mqtt_plain_text_enabled MsgVpn#service_mqtt_plain_text_enabled}
  */
  readonly serviceMqttPlainTextEnabled?: boolean | cdktf.IResolvable;
  /**
  * The port number for plain-text MQTT clients that connect to the Message VPN. The port must be unique across the message backbone. A value of 0 means that the listen-port is unassigned and cannot be enabled.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "global/read-write". Modifying this attribute while the object (or the relevant part of the object) is administratively enabled may be service impacting as service_mqtt_plain_text_enabled will be temporarily set to false to apply the change. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `0`. Available since SEMP API version 2.1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn#service_mqtt_plain_text_listen_port MsgVpn#service_mqtt_plain_text_listen_port}
  */
  readonly serviceMqttPlainTextListenPort?: number;
  /**
  * Enable or disable the use of encryption (TLS) for the MQTT service in the Message VPN. Disabling causes clients currently connected over TLS to be disconnected.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `false`. Available since SEMP API version 2.1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn#service_mqtt_tls_enabled MsgVpn#service_mqtt_tls_enabled}
  */
  readonly serviceMqttTlsEnabled?: boolean | cdktf.IResolvable;
  /**
  * The port number for MQTT clients that connect to the Message VPN over TLS. The port must be unique across the message backbone. A value of 0 means that the listen-port is unassigned and cannot be enabled.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "global/read-write". Modifying this attribute while the object (or the relevant part of the object) is administratively enabled may be service impacting as service_mqtt_tls_enabled will be temporarily set to false to apply the change. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `0`. Available since SEMP API version 2.1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn#service_mqtt_tls_listen_port MsgVpn#service_mqtt_tls_listen_port}
  */
  readonly serviceMqttTlsListenPort?: number;
  /**
  * Enable or disable the use of encrypted WebSocket (WebSocket over TLS) for the MQTT service in the Message VPN. Disabling causes clients currently connected by encrypted WebSocket to be disconnected.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `false`. Available since SEMP API version 2.1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn#service_mqtt_tls_web_socket_enabled MsgVpn#service_mqtt_tls_web_socket_enabled}
  */
  readonly serviceMqttTlsWebSocketEnabled?: boolean | cdktf.IResolvable;
  /**
  * The port number for MQTT clients that connect to the Message VPN using WebSocket over TLS. The port must be unique across the message backbone. A value of 0 means that the listen-port is unassigned and cannot be enabled.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "global/read-write". Modifying this attribute while the object (or the relevant part of the object) is administratively enabled may be service impacting as service_mqtt_tls_web_socket_enabled will be temporarily set to false to apply the change. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `0`. Available since SEMP API version 2.1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn#service_mqtt_tls_web_socket_listen_port MsgVpn#service_mqtt_tls_web_socket_listen_port}
  */
  readonly serviceMqttTlsWebSocketListenPort?: number;
  /**
  * Enable or disable the use of WebSocket for the MQTT service in the Message VPN. Disabling causes clients currently connected by WebSocket to be disconnected.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `false`. Available since SEMP API version 2.1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn#service_mqtt_web_socket_enabled MsgVpn#service_mqtt_web_socket_enabled}
  */
  readonly serviceMqttWebSocketEnabled?: boolean | cdktf.IResolvable;
  /**
  * The port number for plain-text MQTT clients that connect to the Message VPN using WebSocket. The port must be unique across the message backbone. A value of 0 means that the listen-port is unassigned and cannot be enabled.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "global/read-write". Modifying this attribute while the object (or the relevant part of the object) is administratively enabled may be service impacting as service_mqtt_web_socket_enabled will be temporarily set to false to apply the change. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `0`. Available since SEMP API version 2.1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn#service_mqtt_web_socket_listen_port MsgVpn#service_mqtt_web_socket_listen_port}
  */
  readonly serviceMqttWebSocketListenPort?: number;
  /**
  * Determines when to request a client certificate from an incoming REST Producer connecting via a TLS port.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `"when-enabled-in-message-vpn"`. The allowed values and their meaning are:
  * 
  * <pre>
  * "always" - Always ask for a client certificate regardless of the "message-vpn > authentication > client-certificate > shutdown" configuration.
  * "never" - Never ask for a client certificate regardless of the "message-vpn > authentication > client-certificate > shutdown" configuration.
  * "when-enabled-in-message-vpn" - Only ask for a client-certificate if client certificate authentication is enabled under "message-vpn >  authentication > client-certificate > shutdown".
  * </pre>
  *  Available since SEMP API version 2.21.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn#service_rest_incoming_authentication_client_cert_request MsgVpn#service_rest_incoming_authentication_client_cert_request}
  */
  readonly serviceRestIncomingAuthenticationClientCertRequest?: string;
  /**
  * The handling of Authorization headers for incoming REST connections. Authorization header handling settings apply only when the Message VPN is in gateway mode.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `"drop"`. The allowed values and their meaning are:
  * 
  * <pre>
  * "drop" - Do not attach the Authorization header to the message as a user property. This configuration is most secure.
  * "forward" - Forward the Authorization header, attaching it to the message as a user property in the same way as other headers. For best security, use the drop setting.
  * "legacy" - If the Authorization header was used for authentication to the broker, do not attach it to the message. If the Authorization header was not used for authentication to the broker, attach it to the message as a user property in the same way as other headers. For best security, use the drop setting.
  * </pre>
  *  Available since SEMP API version 2.19.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn#service_rest_incoming_authorization_header_handling MsgVpn#service_rest_incoming_authorization_header_handling}
  */
  readonly serviceRestIncomingAuthorizationHeaderHandling?: string;
  /**
  * The maximum number of REST incoming client connections that can be simultaneously connected to the Message VPN. This value may be higher than supported by the platform.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "global/read-write". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default is the maximum value supported by the platform.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn#service_rest_incoming_max_connection_count MsgVpn#service_rest_incoming_max_connection_count}
  */
  readonly serviceRestIncomingMaxConnectionCount?: number;
  /**
  * Enable or disable the plain-text REST service for incoming clients in the Message VPN. Disabling causes clients currently connected to be disconnected.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn#service_rest_incoming_plain_text_enabled MsgVpn#service_rest_incoming_plain_text_enabled}
  */
  readonly serviceRestIncomingPlainTextEnabled?: boolean | cdktf.IResolvable;
  /**
  * The port number for incoming plain-text REST clients that connect to the Message VPN. The port must be unique across the message backbone. A value of 0 means that the listen-port is unassigned and cannot be enabled.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "global/read-write". Modifying this attribute while the object (or the relevant part of the object) is administratively enabled may be service impacting as service_rest_incoming_plain_text_enabled will be temporarily set to false to apply the change. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `0`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn#service_rest_incoming_plain_text_listen_port MsgVpn#service_rest_incoming_plain_text_listen_port}
  */
  readonly serviceRestIncomingPlainTextListenPort?: number;
  /**
  * Enable or disable the use of encryption (TLS) for the REST service for incoming clients in the Message VPN. Disabling causes clients currently connected over TLS to be disconnected.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn#service_rest_incoming_tls_enabled MsgVpn#service_rest_incoming_tls_enabled}
  */
  readonly serviceRestIncomingTlsEnabled?: boolean | cdktf.IResolvable;
  /**
  * The port number for incoming REST clients that connect to the Message VPN over TLS. The port must be unique across the message backbone. A value of 0 means that the listen-port is unassigned and cannot be enabled.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "global/read-write". Modifying this attribute while the object (or the relevant part of the object) is administratively enabled may be service impacting as service_rest_incoming_tls_enabled will be temporarily set to false to apply the change. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `0`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn#service_rest_incoming_tls_listen_port MsgVpn#service_rest_incoming_tls_listen_port}
  */
  readonly serviceRestIncomingTlsListenPort?: number;
  /**
  * The REST service mode for incoming REST clients that connect to the Message VPN.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `"messaging"`. The allowed values and their meaning are:
  * 
  * <pre>
  * "gateway" - Act as a message gateway through which REST messages are propagated.
  * "messaging" - Act as a message broker on which REST messages are queued.
  * </pre>
  *  Available since SEMP API version 2.6.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn#service_rest_mode MsgVpn#service_rest_mode}
  */
  readonly serviceRestMode?: string;
  /**
  * The maximum number of REST Consumer (outgoing) client connections that can be simultaneously connected to the Message VPN.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "global/read-write". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default varies by platform.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn#service_rest_outgoing_max_connection_count MsgVpn#service_rest_outgoing_max_connection_count}
  */
  readonly serviceRestOutgoingMaxConnectionCount?: number;
  /**
  * The maximum number of SMF client connections that can be simultaneously connected to the Message VPN. This value may be higher than supported by the platform.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "global/read-write". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default varies by platform.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn#service_smf_max_connection_count MsgVpn#service_smf_max_connection_count}
  */
  readonly serviceSmfMaxConnectionCount?: number;
  /**
  * Enable or disable the plain-text SMF service in the Message VPN. Disabling causes clients currently connected to be disconnected.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn#service_smf_plain_text_enabled MsgVpn#service_smf_plain_text_enabled}
  */
  readonly serviceSmfPlainTextEnabled?: boolean | cdktf.IResolvable;
  /**
  * Enable or disable the use of encryption (TLS) for the SMF service in the Message VPN. Disabling causes clients currently connected over TLS to be disconnected.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn#service_smf_tls_enabled MsgVpn#service_smf_tls_enabled}
  */
  readonly serviceSmfTlsEnabled?: boolean | cdktf.IResolvable;
  /**
  * Determines when to request a client certificate from a Web Transport client connecting via a TLS port.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `"when-enabled-in-message-vpn"`. The allowed values and their meaning are:
  * 
  * <pre>
  * "always" - Always ask for a client certificate regardless of the "message-vpn > authentication > client-certificate > shutdown" configuration.
  * "never" - Never ask for a client certificate regardless of the "message-vpn > authentication > client-certificate > shutdown" configuration.
  * "when-enabled-in-message-vpn" - Only ask for a client-certificate if client certificate authentication is enabled under "message-vpn >  authentication > client-certificate > shutdown".
  * </pre>
  *  Available since SEMP API version 2.21.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn#service_web_authentication_client_cert_request MsgVpn#service_web_authentication_client_cert_request}
  */
  readonly serviceWebAuthenticationClientCertRequest?: string;
  /**
  * The maximum number of Web Transport client connections that can be simultaneously connected to the Message VPN. This value may be higher than supported by the platform.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "global/read-write". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default is the maximum value supported by the platform.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn#service_web_max_connection_count MsgVpn#service_web_max_connection_count}
  */
  readonly serviceWebMaxConnectionCount?: number;
  /**
  * Enable or disable the plain-text Web Transport service in the Message VPN. Disabling causes clients currently connected to be disconnected.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn#service_web_plain_text_enabled MsgVpn#service_web_plain_text_enabled}
  */
  readonly serviceWebPlainTextEnabled?: boolean | cdktf.IResolvable;
  /**
  * Enable or disable the use of TLS for the Web Transport service in the Message VPN. Disabling causes clients currently connected over TLS to be disconnected.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn#service_web_tls_enabled MsgVpn#service_web_tls_enabled}
  */
  readonly serviceWebTlsEnabled?: boolean | cdktf.IResolvable;
  /**
  * Enable or disable the allowing of TLS SMF clients to downgrade their connections to plain-text connections. Changing this will not affect existing connections.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn#tls_allow_downgrade_to_plain_text_enabled MsgVpn#tls_allow_downgrade_to_plain_text_enabled}
  */
  readonly tlsAllowDowngradeToPlainTextEnabled?: boolean | cdktf.IResolvable;
}
export interface MsgVpnEventConnectionCountThreshold {
  /**
  * The clear threshold for the value of this counter as a percentage of its maximum value. Falling below this value will trigger a corresponding event.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". This attribute may not be returned in a GET. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `60`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn#clear_percent MsgVpn#clear_percent}
  */
  readonly clearPercent?: number;
  /**
  * The clear threshold for the absolute value of this counter. Falling below this value will trigger a corresponding event.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". This attribute may not be returned in a GET. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default is not applicable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn#clear_value MsgVpn#clear_value}
  */
  readonly clearValue?: number;
  /**
  * The set threshold for the value of this counter as a percentage of its maximum value. Exceeding this value will trigger a corresponding event.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". This attribute may not be returned in a GET. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `80`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn#set_percent MsgVpn#set_percent}
  */
  readonly setPercent?: number;
  /**
  * The set threshold for the absolute value of this counter. Exceeding this value will trigger a corresponding event.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". This attribute may not be returned in a GET. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default is not applicable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn#set_value MsgVpn#set_value}
  */
  readonly setValue?: number;
}

export function msgVpnEventConnectionCountThresholdToTerraform(struct?: MsgVpnEventConnectionCountThreshold | cdktf.IResolvable): any {
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


export function msgVpnEventConnectionCountThresholdToHclTerraform(struct?: MsgVpnEventConnectionCountThreshold | cdktf.IResolvable): any {
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

export class MsgVpnEventConnectionCountThresholdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MsgVpnEventConnectionCountThreshold | cdktf.IResolvable | undefined {
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

  public set internalValue(value: MsgVpnEventConnectionCountThreshold | cdktf.IResolvable | undefined) {
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
export interface MsgVpnEventEgressFlowCountThreshold {
  /**
  * The clear threshold for the value of this counter as a percentage of its maximum value. Falling below this value will trigger a corresponding event.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". This attribute may not be returned in a GET. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `60`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn#clear_percent MsgVpn#clear_percent}
  */
  readonly clearPercent?: number;
  /**
  * The clear threshold for the absolute value of this counter. Falling below this value will trigger a corresponding event.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". This attribute may not be returned in a GET. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default is not applicable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn#clear_value MsgVpn#clear_value}
  */
  readonly clearValue?: number;
  /**
  * The set threshold for the value of this counter as a percentage of its maximum value. Exceeding this value will trigger a corresponding event.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". This attribute may not be returned in a GET. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `80`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn#set_percent MsgVpn#set_percent}
  */
  readonly setPercent?: number;
  /**
  * The set threshold for the absolute value of this counter. Exceeding this value will trigger a corresponding event.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". This attribute may not be returned in a GET. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default is not applicable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn#set_value MsgVpn#set_value}
  */
  readonly setValue?: number;
}

export function msgVpnEventEgressFlowCountThresholdToTerraform(struct?: MsgVpnEventEgressFlowCountThreshold | cdktf.IResolvable): any {
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


export function msgVpnEventEgressFlowCountThresholdToHclTerraform(struct?: MsgVpnEventEgressFlowCountThreshold | cdktf.IResolvable): any {
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

export class MsgVpnEventEgressFlowCountThresholdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MsgVpnEventEgressFlowCountThreshold | cdktf.IResolvable | undefined {
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

  public set internalValue(value: MsgVpnEventEgressFlowCountThreshold | cdktf.IResolvable | undefined) {
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
export interface MsgVpnEventEgressMsgRateThreshold {
  /**
  * The clear threshold for the absolute value of this counter or rate. Falling below this value will trigger a corresponding event.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `3000000`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn#clear_value MsgVpn#clear_value}
  */
  readonly clearValue?: number;
  /**
  * The set threshold for the absolute value of this counter or rate. Exceeding this value will trigger a corresponding event.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `4000000`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn#set_value MsgVpn#set_value}
  */
  readonly setValue?: number;
}

export function msgVpnEventEgressMsgRateThresholdToTerraform(struct?: MsgVpnEventEgressMsgRateThreshold | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    clear_value: cdktf.numberToTerraform(struct!.clearValue),
    set_value: cdktf.numberToTerraform(struct!.setValue),
  }
}


export function msgVpnEventEgressMsgRateThresholdToHclTerraform(struct?: MsgVpnEventEgressMsgRateThreshold | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    clear_value: {
      value: cdktf.numberToHclTerraform(struct!.clearValue),
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

export class MsgVpnEventEgressMsgRateThresholdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MsgVpnEventEgressMsgRateThreshold | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clearValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clearValue = this._clearValue;
    }
    if (this._setValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.setValue = this._setValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MsgVpnEventEgressMsgRateThreshold | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clearValue = undefined;
      this._setValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clearValue = value.clearValue;
      this._setValue = value.setValue;
    }
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
export interface MsgVpnEventEndpointCountThreshold {
  /**
  * The clear threshold for the value of this counter as a percentage of its maximum value. Falling below this value will trigger a corresponding event.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". This attribute may not be returned in a GET. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `60`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn#clear_percent MsgVpn#clear_percent}
  */
  readonly clearPercent?: number;
  /**
  * The clear threshold for the absolute value of this counter. Falling below this value will trigger a corresponding event.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". This attribute may not be returned in a GET. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default is not applicable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn#clear_value MsgVpn#clear_value}
  */
  readonly clearValue?: number;
  /**
  * The set threshold for the value of this counter as a percentage of its maximum value. Exceeding this value will trigger a corresponding event.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". This attribute may not be returned in a GET. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `80`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn#set_percent MsgVpn#set_percent}
  */
  readonly setPercent?: number;
  /**
  * The set threshold for the absolute value of this counter. Exceeding this value will trigger a corresponding event.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". This attribute may not be returned in a GET. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default is not applicable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn#set_value MsgVpn#set_value}
  */
  readonly setValue?: number;
}

export function msgVpnEventEndpointCountThresholdToTerraform(struct?: MsgVpnEventEndpointCountThreshold | cdktf.IResolvable): any {
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


export function msgVpnEventEndpointCountThresholdToHclTerraform(struct?: MsgVpnEventEndpointCountThreshold | cdktf.IResolvable): any {
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

export class MsgVpnEventEndpointCountThresholdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MsgVpnEventEndpointCountThreshold | cdktf.IResolvable | undefined {
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

  public set internalValue(value: MsgVpnEventEndpointCountThreshold | cdktf.IResolvable | undefined) {
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
export interface MsgVpnEventIngressFlowCountThreshold {
  /**
  * The clear threshold for the value of this counter as a percentage of its maximum value. Falling below this value will trigger a corresponding event.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". This attribute may not be returned in a GET. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `60`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn#clear_percent MsgVpn#clear_percent}
  */
  readonly clearPercent?: number;
  /**
  * The clear threshold for the absolute value of this counter. Falling below this value will trigger a corresponding event.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". This attribute may not be returned in a GET. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default is not applicable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn#clear_value MsgVpn#clear_value}
  */
  readonly clearValue?: number;
  /**
  * The set threshold for the value of this counter as a percentage of its maximum value. Exceeding this value will trigger a corresponding event.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". This attribute may not be returned in a GET. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `80`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn#set_percent MsgVpn#set_percent}
  */
  readonly setPercent?: number;
  /**
  * The set threshold for the absolute value of this counter. Exceeding this value will trigger a corresponding event.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". This attribute may not be returned in a GET. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default is not applicable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn#set_value MsgVpn#set_value}
  */
  readonly setValue?: number;
}

export function msgVpnEventIngressFlowCountThresholdToTerraform(struct?: MsgVpnEventIngressFlowCountThreshold | cdktf.IResolvable): any {
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


export function msgVpnEventIngressFlowCountThresholdToHclTerraform(struct?: MsgVpnEventIngressFlowCountThreshold | cdktf.IResolvable): any {
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

export class MsgVpnEventIngressFlowCountThresholdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MsgVpnEventIngressFlowCountThreshold | cdktf.IResolvable | undefined {
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

  public set internalValue(value: MsgVpnEventIngressFlowCountThreshold | cdktf.IResolvable | undefined) {
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
export interface MsgVpnEventIngressMsgRateThreshold {
  /**
  * The clear threshold for the absolute value of this counter or rate. Falling below this value will trigger a corresponding event.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `3000000`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn#clear_value MsgVpn#clear_value}
  */
  readonly clearValue?: number;
  /**
  * The set threshold for the absolute value of this counter or rate. Exceeding this value will trigger a corresponding event.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `4000000`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn#set_value MsgVpn#set_value}
  */
  readonly setValue?: number;
}

export function msgVpnEventIngressMsgRateThresholdToTerraform(struct?: MsgVpnEventIngressMsgRateThreshold | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    clear_value: cdktf.numberToTerraform(struct!.clearValue),
    set_value: cdktf.numberToTerraform(struct!.setValue),
  }
}


export function msgVpnEventIngressMsgRateThresholdToHclTerraform(struct?: MsgVpnEventIngressMsgRateThreshold | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    clear_value: {
      value: cdktf.numberToHclTerraform(struct!.clearValue),
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

export class MsgVpnEventIngressMsgRateThresholdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MsgVpnEventIngressMsgRateThreshold | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clearValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clearValue = this._clearValue;
    }
    if (this._setValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.setValue = this._setValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MsgVpnEventIngressMsgRateThreshold | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clearValue = undefined;
      this._setValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clearValue = value.clearValue;
      this._setValue = value.setValue;
    }
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
export interface MsgVpnEventMsgSpoolUsageThreshold {
  /**
  * The clear threshold for the value of this counter as a percentage of its maximum value. Falling below this value will trigger a corresponding event.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". This attribute may not be returned in a GET. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `60`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn#clear_percent MsgVpn#clear_percent}
  */
  readonly clearPercent?: number;
  /**
  * The clear threshold for the absolute value of this counter. Falling below this value will trigger a corresponding event.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". This attribute may not be returned in a GET. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default is not applicable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn#clear_value MsgVpn#clear_value}
  */
  readonly clearValue?: number;
  /**
  * The set threshold for the value of this counter as a percentage of its maximum value. Exceeding this value will trigger a corresponding event.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". This attribute may not be returned in a GET. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `80`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn#set_percent MsgVpn#set_percent}
  */
  readonly setPercent?: number;
  /**
  * The set threshold for the absolute value of this counter. Exceeding this value will trigger a corresponding event.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". This attribute may not be returned in a GET. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default is not applicable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn#set_value MsgVpn#set_value}
  */
  readonly setValue?: number;
}

export function msgVpnEventMsgSpoolUsageThresholdToTerraform(struct?: MsgVpnEventMsgSpoolUsageThreshold | cdktf.IResolvable): any {
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


export function msgVpnEventMsgSpoolUsageThresholdToHclTerraform(struct?: MsgVpnEventMsgSpoolUsageThreshold | cdktf.IResolvable): any {
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

export class MsgVpnEventMsgSpoolUsageThresholdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MsgVpnEventMsgSpoolUsageThreshold | cdktf.IResolvable | undefined {
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

  public set internalValue(value: MsgVpnEventMsgSpoolUsageThreshold | cdktf.IResolvable | undefined) {
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
export interface MsgVpnEventServiceAmqpConnectionCountThreshold {
  /**
  * The clear threshold for the value of this counter as a percentage of its maximum value. Falling below this value will trigger a corresponding event.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". This attribute may not be returned in a GET. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `60`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn#clear_percent MsgVpn#clear_percent}
  */
  readonly clearPercent?: number;
  /**
  * The clear threshold for the absolute value of this counter. Falling below this value will trigger a corresponding event.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". This attribute may not be returned in a GET. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default is not applicable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn#clear_value MsgVpn#clear_value}
  */
  readonly clearValue?: number;
  /**
  * The set threshold for the value of this counter as a percentage of its maximum value. Exceeding this value will trigger a corresponding event.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". This attribute may not be returned in a GET. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `80`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn#set_percent MsgVpn#set_percent}
  */
  readonly setPercent?: number;
  /**
  * The set threshold for the absolute value of this counter. Exceeding this value will trigger a corresponding event.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". This attribute may not be returned in a GET. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default is not applicable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn#set_value MsgVpn#set_value}
  */
  readonly setValue?: number;
}

export function msgVpnEventServiceAmqpConnectionCountThresholdToTerraform(struct?: MsgVpnEventServiceAmqpConnectionCountThreshold | cdktf.IResolvable): any {
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


export function msgVpnEventServiceAmqpConnectionCountThresholdToHclTerraform(struct?: MsgVpnEventServiceAmqpConnectionCountThreshold | cdktf.IResolvable): any {
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

export class MsgVpnEventServiceAmqpConnectionCountThresholdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MsgVpnEventServiceAmqpConnectionCountThreshold | cdktf.IResolvable | undefined {
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

  public set internalValue(value: MsgVpnEventServiceAmqpConnectionCountThreshold | cdktf.IResolvable | undefined) {
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
export interface MsgVpnEventServiceMqttConnectionCountThreshold {
  /**
  * The clear threshold for the value of this counter as a percentage of its maximum value. Falling below this value will trigger a corresponding event.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". This attribute may not be returned in a GET. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `60`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn#clear_percent MsgVpn#clear_percent}
  */
  readonly clearPercent?: number;
  /**
  * The clear threshold for the absolute value of this counter. Falling below this value will trigger a corresponding event.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". This attribute may not be returned in a GET. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default is not applicable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn#clear_value MsgVpn#clear_value}
  */
  readonly clearValue?: number;
  /**
  * The set threshold for the value of this counter as a percentage of its maximum value. Exceeding this value will trigger a corresponding event.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". This attribute may not be returned in a GET. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `80`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn#set_percent MsgVpn#set_percent}
  */
  readonly setPercent?: number;
  /**
  * The set threshold for the absolute value of this counter. Exceeding this value will trigger a corresponding event.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". This attribute may not be returned in a GET. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default is not applicable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn#set_value MsgVpn#set_value}
  */
  readonly setValue?: number;
}

export function msgVpnEventServiceMqttConnectionCountThresholdToTerraform(struct?: MsgVpnEventServiceMqttConnectionCountThreshold | cdktf.IResolvable): any {
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


export function msgVpnEventServiceMqttConnectionCountThresholdToHclTerraform(struct?: MsgVpnEventServiceMqttConnectionCountThreshold | cdktf.IResolvable): any {
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

export class MsgVpnEventServiceMqttConnectionCountThresholdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MsgVpnEventServiceMqttConnectionCountThreshold | cdktf.IResolvable | undefined {
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

  public set internalValue(value: MsgVpnEventServiceMqttConnectionCountThreshold | cdktf.IResolvable | undefined) {
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
export interface MsgVpnEventServiceRestIncomingConnectionCountThreshold {
  /**
  * The clear threshold for the value of this counter as a percentage of its maximum value. Falling below this value will trigger a corresponding event.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". This attribute may not be returned in a GET. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `60`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn#clear_percent MsgVpn#clear_percent}
  */
  readonly clearPercent?: number;
  /**
  * The clear threshold for the absolute value of this counter. Falling below this value will trigger a corresponding event.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". This attribute may not be returned in a GET. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default is not applicable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn#clear_value MsgVpn#clear_value}
  */
  readonly clearValue?: number;
  /**
  * The set threshold for the value of this counter as a percentage of its maximum value. Exceeding this value will trigger a corresponding event.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". This attribute may not be returned in a GET. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `80`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn#set_percent MsgVpn#set_percent}
  */
  readonly setPercent?: number;
  /**
  * The set threshold for the absolute value of this counter. Exceeding this value will trigger a corresponding event.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". This attribute may not be returned in a GET. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default is not applicable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn#set_value MsgVpn#set_value}
  */
  readonly setValue?: number;
}

export function msgVpnEventServiceRestIncomingConnectionCountThresholdToTerraform(struct?: MsgVpnEventServiceRestIncomingConnectionCountThreshold | cdktf.IResolvable): any {
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


export function msgVpnEventServiceRestIncomingConnectionCountThresholdToHclTerraform(struct?: MsgVpnEventServiceRestIncomingConnectionCountThreshold | cdktf.IResolvable): any {
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

export class MsgVpnEventServiceRestIncomingConnectionCountThresholdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MsgVpnEventServiceRestIncomingConnectionCountThreshold | cdktf.IResolvable | undefined {
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

  public set internalValue(value: MsgVpnEventServiceRestIncomingConnectionCountThreshold | cdktf.IResolvable | undefined) {
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
export interface MsgVpnEventServiceSmfConnectionCountThreshold {
  /**
  * The clear threshold for the value of this counter as a percentage of its maximum value. Falling below this value will trigger a corresponding event.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". This attribute may not be returned in a GET. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `60`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn#clear_percent MsgVpn#clear_percent}
  */
  readonly clearPercent?: number;
  /**
  * The clear threshold for the absolute value of this counter. Falling below this value will trigger a corresponding event.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". This attribute may not be returned in a GET. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default is not applicable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn#clear_value MsgVpn#clear_value}
  */
  readonly clearValue?: number;
  /**
  * The set threshold for the value of this counter as a percentage of its maximum value. Exceeding this value will trigger a corresponding event.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". This attribute may not be returned in a GET. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `80`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn#set_percent MsgVpn#set_percent}
  */
  readonly setPercent?: number;
  /**
  * The set threshold for the absolute value of this counter. Exceeding this value will trigger a corresponding event.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". This attribute may not be returned in a GET. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default is not applicable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn#set_value MsgVpn#set_value}
  */
  readonly setValue?: number;
}

export function msgVpnEventServiceSmfConnectionCountThresholdToTerraform(struct?: MsgVpnEventServiceSmfConnectionCountThreshold | cdktf.IResolvable): any {
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


export function msgVpnEventServiceSmfConnectionCountThresholdToHclTerraform(struct?: MsgVpnEventServiceSmfConnectionCountThreshold | cdktf.IResolvable): any {
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

export class MsgVpnEventServiceSmfConnectionCountThresholdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MsgVpnEventServiceSmfConnectionCountThreshold | cdktf.IResolvable | undefined {
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

  public set internalValue(value: MsgVpnEventServiceSmfConnectionCountThreshold | cdktf.IResolvable | undefined) {
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
export interface MsgVpnEventServiceWebConnectionCountThreshold {
  /**
  * The clear threshold for the value of this counter as a percentage of its maximum value. Falling below this value will trigger a corresponding event.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". This attribute may not be returned in a GET. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `60`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn#clear_percent MsgVpn#clear_percent}
  */
  readonly clearPercent?: number;
  /**
  * The clear threshold for the absolute value of this counter. Falling below this value will trigger a corresponding event.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". This attribute may not be returned in a GET. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default is not applicable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn#clear_value MsgVpn#clear_value}
  */
  readonly clearValue?: number;
  /**
  * The set threshold for the value of this counter as a percentage of its maximum value. Exceeding this value will trigger a corresponding event.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". This attribute may not be returned in a GET. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `80`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn#set_percent MsgVpn#set_percent}
  */
  readonly setPercent?: number;
  /**
  * The set threshold for the absolute value of this counter. Exceeding this value will trigger a corresponding event.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". This attribute may not be returned in a GET. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default is not applicable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn#set_value MsgVpn#set_value}
  */
  readonly setValue?: number;
}

export function msgVpnEventServiceWebConnectionCountThresholdToTerraform(struct?: MsgVpnEventServiceWebConnectionCountThreshold | cdktf.IResolvable): any {
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


export function msgVpnEventServiceWebConnectionCountThresholdToHclTerraform(struct?: MsgVpnEventServiceWebConnectionCountThreshold | cdktf.IResolvable): any {
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

export class MsgVpnEventServiceWebConnectionCountThresholdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MsgVpnEventServiceWebConnectionCountThreshold | cdktf.IResolvable | undefined {
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

  public set internalValue(value: MsgVpnEventServiceWebConnectionCountThreshold | cdktf.IResolvable | undefined) {
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
export interface MsgVpnEventSubscriptionCountThreshold {
  /**
  * The clear threshold for the value of this counter as a percentage of its maximum value. Falling below this value will trigger a corresponding event.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". This attribute may not be returned in a GET. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `60`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn#clear_percent MsgVpn#clear_percent}
  */
  readonly clearPercent?: number;
  /**
  * The clear threshold for the absolute value of this counter. Falling below this value will trigger a corresponding event.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". This attribute may not be returned in a GET. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default is not applicable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn#clear_value MsgVpn#clear_value}
  */
  readonly clearValue?: number;
  /**
  * The set threshold for the value of this counter as a percentage of its maximum value. Exceeding this value will trigger a corresponding event.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". This attribute may not be returned in a GET. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `80`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn#set_percent MsgVpn#set_percent}
  */
  readonly setPercent?: number;
  /**
  * The set threshold for the absolute value of this counter. Exceeding this value will trigger a corresponding event.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". This attribute may not be returned in a GET. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default is not applicable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn#set_value MsgVpn#set_value}
  */
  readonly setValue?: number;
}

export function msgVpnEventSubscriptionCountThresholdToTerraform(struct?: MsgVpnEventSubscriptionCountThreshold | cdktf.IResolvable): any {
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


export function msgVpnEventSubscriptionCountThresholdToHclTerraform(struct?: MsgVpnEventSubscriptionCountThreshold | cdktf.IResolvable): any {
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

export class MsgVpnEventSubscriptionCountThresholdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MsgVpnEventSubscriptionCountThreshold | cdktf.IResolvable | undefined {
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

  public set internalValue(value: MsgVpnEventSubscriptionCountThreshold | cdktf.IResolvable | undefined) {
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
export interface MsgVpnEventTransactedSessionCountThreshold {
  /**
  * The clear threshold for the value of this counter as a percentage of its maximum value. Falling below this value will trigger a corresponding event.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". This attribute may not be returned in a GET. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `60`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn#clear_percent MsgVpn#clear_percent}
  */
  readonly clearPercent?: number;
  /**
  * The clear threshold for the absolute value of this counter. Falling below this value will trigger a corresponding event.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". This attribute may not be returned in a GET. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default is not applicable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn#clear_value MsgVpn#clear_value}
  */
  readonly clearValue?: number;
  /**
  * The set threshold for the value of this counter as a percentage of its maximum value. Exceeding this value will trigger a corresponding event.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". This attribute may not be returned in a GET. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `80`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn#set_percent MsgVpn#set_percent}
  */
  readonly setPercent?: number;
  /**
  * The set threshold for the absolute value of this counter. Exceeding this value will trigger a corresponding event.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". This attribute may not be returned in a GET. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default is not applicable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn#set_value MsgVpn#set_value}
  */
  readonly setValue?: number;
}

export function msgVpnEventTransactedSessionCountThresholdToTerraform(struct?: MsgVpnEventTransactedSessionCountThreshold | cdktf.IResolvable): any {
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


export function msgVpnEventTransactedSessionCountThresholdToHclTerraform(struct?: MsgVpnEventTransactedSessionCountThreshold | cdktf.IResolvable): any {
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

export class MsgVpnEventTransactedSessionCountThresholdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MsgVpnEventTransactedSessionCountThreshold | cdktf.IResolvable | undefined {
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

  public set internalValue(value: MsgVpnEventTransactedSessionCountThreshold | cdktf.IResolvable | undefined) {
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
export interface MsgVpnEventTransactionCountThreshold {
  /**
  * The clear threshold for the value of this counter as a percentage of its maximum value. Falling below this value will trigger a corresponding event.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". This attribute may not be returned in a GET. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `60`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn#clear_percent MsgVpn#clear_percent}
  */
  readonly clearPercent?: number;
  /**
  * The clear threshold for the absolute value of this counter. Falling below this value will trigger a corresponding event.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". This attribute may not be returned in a GET. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default is not applicable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn#clear_value MsgVpn#clear_value}
  */
  readonly clearValue?: number;
  /**
  * The set threshold for the value of this counter as a percentage of its maximum value. Exceeding this value will trigger a corresponding event.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". This attribute may not be returned in a GET. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `80`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn#set_percent MsgVpn#set_percent}
  */
  readonly setPercent?: number;
  /**
  * The set threshold for the absolute value of this counter. Exceeding this value will trigger a corresponding event.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". This attribute may not be returned in a GET. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default is not applicable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn#set_value MsgVpn#set_value}
  */
  readonly setValue?: number;
}

export function msgVpnEventTransactionCountThresholdToTerraform(struct?: MsgVpnEventTransactionCountThreshold | cdktf.IResolvable): any {
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


export function msgVpnEventTransactionCountThresholdToHclTerraform(struct?: MsgVpnEventTransactionCountThreshold | cdktf.IResolvable): any {
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

export class MsgVpnEventTransactionCountThresholdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MsgVpnEventTransactionCountThreshold | cdktf.IResolvable | undefined {
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

  public set internalValue(value: MsgVpnEventTransactionCountThreshold | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn solacebroker_msg_vpn}
*/
export class MsgVpn extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "solacebroker_msg_vpn";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MsgVpn resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MsgVpn to import
  * @param importFromId The id of the existing MsgVpn that should be imported. Refer to the {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MsgVpn to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "solacebroker_msg_vpn", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn solacebroker_msg_vpn} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MsgVpnConfig
  */
  public constructor(scope: Construct, id: string, config: MsgVpnConfig) {
    super(scope, id, {
      terraformResourceType: 'solacebroker_msg_vpn',
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
    this._alias = config.alias;
    this._authenticationBasicEnabled = config.authenticationBasicEnabled;
    this._authenticationBasicProfileName = config.authenticationBasicProfileName;
    this._authenticationBasicRadiusDomain = config.authenticationBasicRadiusDomain;
    this._authenticationBasicType = config.authenticationBasicType;
    this._authenticationClientCertAllowApiProvidedUsernameEnabled = config.authenticationClientCertAllowApiProvidedUsernameEnabled;
    this._authenticationClientCertCertificateMatchingRulesEnabled = config.authenticationClientCertCertificateMatchingRulesEnabled;
    this._authenticationClientCertEnabled = config.authenticationClientCertEnabled;
    this._authenticationClientCertMaxChainDepth = config.authenticationClientCertMaxChainDepth;
    this._authenticationClientCertRevocationCheckMode = config.authenticationClientCertRevocationCheckMode;
    this._authenticationClientCertUsernameSource = config.authenticationClientCertUsernameSource;
    this._authenticationClientCertValidateDateEnabled = config.authenticationClientCertValidateDateEnabled;
    this._authenticationKerberosAllowApiProvidedUsernameEnabled = config.authenticationKerberosAllowApiProvidedUsernameEnabled;
    this._authenticationKerberosEnabled = config.authenticationKerberosEnabled;
    this._authenticationOauthDefaultProfileName = config.authenticationOauthDefaultProfileName;
    this._authenticationOauthEnabled = config.authenticationOauthEnabled;
    this._authorizationLdapGroupMembershipAttributeName = config.authorizationLdapGroupMembershipAttributeName;
    this._authorizationLdapTrimClientUsernameDomainEnabled = config.authorizationLdapTrimClientUsernameDomainEnabled;
    this._authorizationProfileName = config.authorizationProfileName;
    this._authorizationType = config.authorizationType;
    this._bridgingTlsServerCertMaxChainDepth = config.bridgingTlsServerCertMaxChainDepth;
    this._bridgingTlsServerCertValidateDateEnabled = config.bridgingTlsServerCertValidateDateEnabled;
    this._bridgingTlsServerCertValidateNameEnabled = config.bridgingTlsServerCertValidateNameEnabled;
    this._dmrEnabled = config.dmrEnabled;
    this._enabled = config.enabled;
    this._eventConnectionCountThreshold.internalValue = config.eventConnectionCountThreshold;
    this._eventEgressFlowCountThreshold.internalValue = config.eventEgressFlowCountThreshold;
    this._eventEgressMsgRateThreshold.internalValue = config.eventEgressMsgRateThreshold;
    this._eventEndpointCountThreshold.internalValue = config.eventEndpointCountThreshold;
    this._eventIngressFlowCountThreshold.internalValue = config.eventIngressFlowCountThreshold;
    this._eventIngressMsgRateThreshold.internalValue = config.eventIngressMsgRateThreshold;
    this._eventLargeMsgThreshold = config.eventLargeMsgThreshold;
    this._eventLogTag = config.eventLogTag;
    this._eventMsgSpoolUsageThreshold.internalValue = config.eventMsgSpoolUsageThreshold;
    this._eventPublishClientEnabled = config.eventPublishClientEnabled;
    this._eventPublishMsgVpnEnabled = config.eventPublishMsgVpnEnabled;
    this._eventPublishSubscriptionMode = config.eventPublishSubscriptionMode;
    this._eventPublishTopicFormatMqttEnabled = config.eventPublishTopicFormatMqttEnabled;
    this._eventPublishTopicFormatSmfEnabled = config.eventPublishTopicFormatSmfEnabled;
    this._eventServiceAmqpConnectionCountThreshold.internalValue = config.eventServiceAmqpConnectionCountThreshold;
    this._eventServiceMqttConnectionCountThreshold.internalValue = config.eventServiceMqttConnectionCountThreshold;
    this._eventServiceRestIncomingConnectionCountThreshold.internalValue = config.eventServiceRestIncomingConnectionCountThreshold;
    this._eventServiceSmfConnectionCountThreshold.internalValue = config.eventServiceSmfConnectionCountThreshold;
    this._eventServiceWebConnectionCountThreshold.internalValue = config.eventServiceWebConnectionCountThreshold;
    this._eventSubscriptionCountThreshold.internalValue = config.eventSubscriptionCountThreshold;
    this._eventTransactedSessionCountThreshold.internalValue = config.eventTransactedSessionCountThreshold;
    this._eventTransactionCountThreshold.internalValue = config.eventTransactionCountThreshold;
    this._exportSubscriptionsEnabled = config.exportSubscriptionsEnabled;
    this._jndiEnabled = config.jndiEnabled;
    this._maxConnectionCount = config.maxConnectionCount;
    this._maxEgressFlowCount = config.maxEgressFlowCount;
    this._maxEndpointCount = config.maxEndpointCount;
    this._maxIngressFlowCount = config.maxIngressFlowCount;
    this._maxKafkaBrokerConnectionCount = config.maxKafkaBrokerConnectionCount;
    this._maxMsgSpoolUsage = config.maxMsgSpoolUsage;
    this._maxSubscriptionCount = config.maxSubscriptionCount;
    this._maxTransactedSessionCount = config.maxTransactedSessionCount;
    this._maxTransactionCount = config.maxTransactionCount;
    this._mqttRetainMaxMemory = config.mqttRetainMaxMemory;
    this._msgVpnName = config.msgVpnName;
    this._replicationAckPropagationIntervalMsgCount = config.replicationAckPropagationIntervalMsgCount;
    this._replicationBridgeAuthenticationBasicClientUsername = config.replicationBridgeAuthenticationBasicClientUsername;
    this._replicationBridgeAuthenticationBasicPassword = config.replicationBridgeAuthenticationBasicPassword;
    this._replicationBridgeAuthenticationClientCertContent = config.replicationBridgeAuthenticationClientCertContent;
    this._replicationBridgeAuthenticationClientCertPassword = config.replicationBridgeAuthenticationClientCertPassword;
    this._replicationBridgeAuthenticationScheme = config.replicationBridgeAuthenticationScheme;
    this._replicationBridgeCompressedDataEnabled = config.replicationBridgeCompressedDataEnabled;
    this._replicationBridgeEgressFlowWindowSize = config.replicationBridgeEgressFlowWindowSize;
    this._replicationBridgeRetryDelay = config.replicationBridgeRetryDelay;
    this._replicationBridgeTlsEnabled = config.replicationBridgeTlsEnabled;
    this._replicationBridgeUnidirectionalClientProfileName = config.replicationBridgeUnidirectionalClientProfileName;
    this._replicationEnabled = config.replicationEnabled;
    this._replicationEnabledQueueBehavior = config.replicationEnabledQueueBehavior;
    this._replicationQueueMaxMsgSpoolUsage = config.replicationQueueMaxMsgSpoolUsage;
    this._replicationQueueRejectMsgToSenderOnDiscardEnabled = config.replicationQueueRejectMsgToSenderOnDiscardEnabled;
    this._replicationRejectMsgWhenSyncIneligibleEnabled = config.replicationRejectMsgWhenSyncIneligibleEnabled;
    this._replicationRole = config.replicationRole;
    this._replicationTransactionMode = config.replicationTransactionMode;
    this._restTlsServerCertMaxChainDepth = config.restTlsServerCertMaxChainDepth;
    this._restTlsServerCertValidateDateEnabled = config.restTlsServerCertValidateDateEnabled;
    this._restTlsServerCertValidateNameEnabled = config.restTlsServerCertValidateNameEnabled;
    this._sempOverMsgBusAdminClientEnabled = config.sempOverMsgBusAdminClientEnabled;
    this._sempOverMsgBusAdminDistributedCacheEnabled = config.sempOverMsgBusAdminDistributedCacheEnabled;
    this._sempOverMsgBusAdminEnabled = config.sempOverMsgBusAdminEnabled;
    this._sempOverMsgBusEnabled = config.sempOverMsgBusEnabled;
    this._sempOverMsgBusShowEnabled = config.sempOverMsgBusShowEnabled;
    this._serviceAmqpMaxConnectionCount = config.serviceAmqpMaxConnectionCount;
    this._serviceAmqpPlainTextEnabled = config.serviceAmqpPlainTextEnabled;
    this._serviceAmqpPlainTextListenPort = config.serviceAmqpPlainTextListenPort;
    this._serviceAmqpTlsEnabled = config.serviceAmqpTlsEnabled;
    this._serviceAmqpTlsListenPort = config.serviceAmqpTlsListenPort;
    this._serviceMqttAuthenticationClientCertRequest = config.serviceMqttAuthenticationClientCertRequest;
    this._serviceMqttMaxConnectionCount = config.serviceMqttMaxConnectionCount;
    this._serviceMqttPlainTextEnabled = config.serviceMqttPlainTextEnabled;
    this._serviceMqttPlainTextListenPort = config.serviceMqttPlainTextListenPort;
    this._serviceMqttTlsEnabled = config.serviceMqttTlsEnabled;
    this._serviceMqttTlsListenPort = config.serviceMqttTlsListenPort;
    this._serviceMqttTlsWebSocketEnabled = config.serviceMqttTlsWebSocketEnabled;
    this._serviceMqttTlsWebSocketListenPort = config.serviceMqttTlsWebSocketListenPort;
    this._serviceMqttWebSocketEnabled = config.serviceMqttWebSocketEnabled;
    this._serviceMqttWebSocketListenPort = config.serviceMqttWebSocketListenPort;
    this._serviceRestIncomingAuthenticationClientCertRequest = config.serviceRestIncomingAuthenticationClientCertRequest;
    this._serviceRestIncomingAuthorizationHeaderHandling = config.serviceRestIncomingAuthorizationHeaderHandling;
    this._serviceRestIncomingMaxConnectionCount = config.serviceRestIncomingMaxConnectionCount;
    this._serviceRestIncomingPlainTextEnabled = config.serviceRestIncomingPlainTextEnabled;
    this._serviceRestIncomingPlainTextListenPort = config.serviceRestIncomingPlainTextListenPort;
    this._serviceRestIncomingTlsEnabled = config.serviceRestIncomingTlsEnabled;
    this._serviceRestIncomingTlsListenPort = config.serviceRestIncomingTlsListenPort;
    this._serviceRestMode = config.serviceRestMode;
    this._serviceRestOutgoingMaxConnectionCount = config.serviceRestOutgoingMaxConnectionCount;
    this._serviceSmfMaxConnectionCount = config.serviceSmfMaxConnectionCount;
    this._serviceSmfPlainTextEnabled = config.serviceSmfPlainTextEnabled;
    this._serviceSmfTlsEnabled = config.serviceSmfTlsEnabled;
    this._serviceWebAuthenticationClientCertRequest = config.serviceWebAuthenticationClientCertRequest;
    this._serviceWebMaxConnectionCount = config.serviceWebMaxConnectionCount;
    this._serviceWebPlainTextEnabled = config.serviceWebPlainTextEnabled;
    this._serviceWebTlsEnabled = config.serviceWebTlsEnabled;
    this._tlsAllowDowngradeToPlainTextEnabled = config.tlsAllowDowngradeToPlainTextEnabled;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alias - computed: false, optional: true, required: false
  private _alias?: string; 
  public get alias() {
    return this.getStringAttribute('alias');
  }
  public set alias(value: string) {
    this._alias = value;
  }
  public resetAlias() {
    this._alias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasInput() {
    return this._alias;
  }

  // authentication_basic_enabled - computed: false, optional: true, required: false
  private _authenticationBasicEnabled?: boolean | cdktf.IResolvable; 
  public get authenticationBasicEnabled() {
    return this.getBooleanAttribute('authentication_basic_enabled');
  }
  public set authenticationBasicEnabled(value: boolean | cdktf.IResolvable) {
    this._authenticationBasicEnabled = value;
  }
  public resetAuthenticationBasicEnabled() {
    this._authenticationBasicEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationBasicEnabledInput() {
    return this._authenticationBasicEnabled;
  }

  // authentication_basic_profile_name - computed: false, optional: true, required: false
  private _authenticationBasicProfileName?: string; 
  public get authenticationBasicProfileName() {
    return this.getStringAttribute('authentication_basic_profile_name');
  }
  public set authenticationBasicProfileName(value: string) {
    this._authenticationBasicProfileName = value;
  }
  public resetAuthenticationBasicProfileName() {
    this._authenticationBasicProfileName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationBasicProfileNameInput() {
    return this._authenticationBasicProfileName;
  }

  // authentication_basic_radius_domain - computed: false, optional: true, required: false
  private _authenticationBasicRadiusDomain?: string; 
  public get authenticationBasicRadiusDomain() {
    return this.getStringAttribute('authentication_basic_radius_domain');
  }
  public set authenticationBasicRadiusDomain(value: string) {
    this._authenticationBasicRadiusDomain = value;
  }
  public resetAuthenticationBasicRadiusDomain() {
    this._authenticationBasicRadiusDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationBasicRadiusDomainInput() {
    return this._authenticationBasicRadiusDomain;
  }

  // authentication_basic_type - computed: false, optional: true, required: false
  private _authenticationBasicType?: string; 
  public get authenticationBasicType() {
    return this.getStringAttribute('authentication_basic_type');
  }
  public set authenticationBasicType(value: string) {
    this._authenticationBasicType = value;
  }
  public resetAuthenticationBasicType() {
    this._authenticationBasicType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationBasicTypeInput() {
    return this._authenticationBasicType;
  }

  // authentication_client_cert_allow_api_provided_username_enabled - computed: false, optional: true, required: false
  private _authenticationClientCertAllowApiProvidedUsernameEnabled?: boolean | cdktf.IResolvable; 
  public get authenticationClientCertAllowApiProvidedUsernameEnabled() {
    return this.getBooleanAttribute('authentication_client_cert_allow_api_provided_username_enabled');
  }
  public set authenticationClientCertAllowApiProvidedUsernameEnabled(value: boolean | cdktf.IResolvable) {
    this._authenticationClientCertAllowApiProvidedUsernameEnabled = value;
  }
  public resetAuthenticationClientCertAllowApiProvidedUsernameEnabled() {
    this._authenticationClientCertAllowApiProvidedUsernameEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationClientCertAllowApiProvidedUsernameEnabledInput() {
    return this._authenticationClientCertAllowApiProvidedUsernameEnabled;
  }

  // authentication_client_cert_certificate_matching_rules_enabled - computed: false, optional: true, required: false
  private _authenticationClientCertCertificateMatchingRulesEnabled?: boolean | cdktf.IResolvable; 
  public get authenticationClientCertCertificateMatchingRulesEnabled() {
    return this.getBooleanAttribute('authentication_client_cert_certificate_matching_rules_enabled');
  }
  public set authenticationClientCertCertificateMatchingRulesEnabled(value: boolean | cdktf.IResolvable) {
    this._authenticationClientCertCertificateMatchingRulesEnabled = value;
  }
  public resetAuthenticationClientCertCertificateMatchingRulesEnabled() {
    this._authenticationClientCertCertificateMatchingRulesEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationClientCertCertificateMatchingRulesEnabledInput() {
    return this._authenticationClientCertCertificateMatchingRulesEnabled;
  }

  // authentication_client_cert_enabled - computed: false, optional: true, required: false
  private _authenticationClientCertEnabled?: boolean | cdktf.IResolvable; 
  public get authenticationClientCertEnabled() {
    return this.getBooleanAttribute('authentication_client_cert_enabled');
  }
  public set authenticationClientCertEnabled(value: boolean | cdktf.IResolvable) {
    this._authenticationClientCertEnabled = value;
  }
  public resetAuthenticationClientCertEnabled() {
    this._authenticationClientCertEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationClientCertEnabledInput() {
    return this._authenticationClientCertEnabled;
  }

  // authentication_client_cert_max_chain_depth - computed: false, optional: true, required: false
  private _authenticationClientCertMaxChainDepth?: number; 
  public get authenticationClientCertMaxChainDepth() {
    return this.getNumberAttribute('authentication_client_cert_max_chain_depth');
  }
  public set authenticationClientCertMaxChainDepth(value: number) {
    this._authenticationClientCertMaxChainDepth = value;
  }
  public resetAuthenticationClientCertMaxChainDepth() {
    this._authenticationClientCertMaxChainDepth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationClientCertMaxChainDepthInput() {
    return this._authenticationClientCertMaxChainDepth;
  }

  // authentication_client_cert_revocation_check_mode - computed: false, optional: true, required: false
  private _authenticationClientCertRevocationCheckMode?: string; 
  public get authenticationClientCertRevocationCheckMode() {
    return this.getStringAttribute('authentication_client_cert_revocation_check_mode');
  }
  public set authenticationClientCertRevocationCheckMode(value: string) {
    this._authenticationClientCertRevocationCheckMode = value;
  }
  public resetAuthenticationClientCertRevocationCheckMode() {
    this._authenticationClientCertRevocationCheckMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationClientCertRevocationCheckModeInput() {
    return this._authenticationClientCertRevocationCheckMode;
  }

  // authentication_client_cert_username_source - computed: false, optional: true, required: false
  private _authenticationClientCertUsernameSource?: string; 
  public get authenticationClientCertUsernameSource() {
    return this.getStringAttribute('authentication_client_cert_username_source');
  }
  public set authenticationClientCertUsernameSource(value: string) {
    this._authenticationClientCertUsernameSource = value;
  }
  public resetAuthenticationClientCertUsernameSource() {
    this._authenticationClientCertUsernameSource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationClientCertUsernameSourceInput() {
    return this._authenticationClientCertUsernameSource;
  }

  // authentication_client_cert_validate_date_enabled - computed: false, optional: true, required: false
  private _authenticationClientCertValidateDateEnabled?: boolean | cdktf.IResolvable; 
  public get authenticationClientCertValidateDateEnabled() {
    return this.getBooleanAttribute('authentication_client_cert_validate_date_enabled');
  }
  public set authenticationClientCertValidateDateEnabled(value: boolean | cdktf.IResolvable) {
    this._authenticationClientCertValidateDateEnabled = value;
  }
  public resetAuthenticationClientCertValidateDateEnabled() {
    this._authenticationClientCertValidateDateEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationClientCertValidateDateEnabledInput() {
    return this._authenticationClientCertValidateDateEnabled;
  }

  // authentication_kerberos_allow_api_provided_username_enabled - computed: false, optional: true, required: false
  private _authenticationKerberosAllowApiProvidedUsernameEnabled?: boolean | cdktf.IResolvable; 
  public get authenticationKerberosAllowApiProvidedUsernameEnabled() {
    return this.getBooleanAttribute('authentication_kerberos_allow_api_provided_username_enabled');
  }
  public set authenticationKerberosAllowApiProvidedUsernameEnabled(value: boolean | cdktf.IResolvable) {
    this._authenticationKerberosAllowApiProvidedUsernameEnabled = value;
  }
  public resetAuthenticationKerberosAllowApiProvidedUsernameEnabled() {
    this._authenticationKerberosAllowApiProvidedUsernameEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationKerberosAllowApiProvidedUsernameEnabledInput() {
    return this._authenticationKerberosAllowApiProvidedUsernameEnabled;
  }

  // authentication_kerberos_enabled - computed: false, optional: true, required: false
  private _authenticationKerberosEnabled?: boolean | cdktf.IResolvable; 
  public get authenticationKerberosEnabled() {
    return this.getBooleanAttribute('authentication_kerberos_enabled');
  }
  public set authenticationKerberosEnabled(value: boolean | cdktf.IResolvable) {
    this._authenticationKerberosEnabled = value;
  }
  public resetAuthenticationKerberosEnabled() {
    this._authenticationKerberosEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationKerberosEnabledInput() {
    return this._authenticationKerberosEnabled;
  }

  // authentication_oauth_default_profile_name - computed: false, optional: true, required: false
  private _authenticationOauthDefaultProfileName?: string; 
  public get authenticationOauthDefaultProfileName() {
    return this.getStringAttribute('authentication_oauth_default_profile_name');
  }
  public set authenticationOauthDefaultProfileName(value: string) {
    this._authenticationOauthDefaultProfileName = value;
  }
  public resetAuthenticationOauthDefaultProfileName() {
    this._authenticationOauthDefaultProfileName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationOauthDefaultProfileNameInput() {
    return this._authenticationOauthDefaultProfileName;
  }

  // authentication_oauth_enabled - computed: false, optional: true, required: false
  private _authenticationOauthEnabled?: boolean | cdktf.IResolvable; 
  public get authenticationOauthEnabled() {
    return this.getBooleanAttribute('authentication_oauth_enabled');
  }
  public set authenticationOauthEnabled(value: boolean | cdktf.IResolvable) {
    this._authenticationOauthEnabled = value;
  }
  public resetAuthenticationOauthEnabled() {
    this._authenticationOauthEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationOauthEnabledInput() {
    return this._authenticationOauthEnabled;
  }

  // authorization_ldap_group_membership_attribute_name - computed: false, optional: true, required: false
  private _authorizationLdapGroupMembershipAttributeName?: string; 
  public get authorizationLdapGroupMembershipAttributeName() {
    return this.getStringAttribute('authorization_ldap_group_membership_attribute_name');
  }
  public set authorizationLdapGroupMembershipAttributeName(value: string) {
    this._authorizationLdapGroupMembershipAttributeName = value;
  }
  public resetAuthorizationLdapGroupMembershipAttributeName() {
    this._authorizationLdapGroupMembershipAttributeName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizationLdapGroupMembershipAttributeNameInput() {
    return this._authorizationLdapGroupMembershipAttributeName;
  }

  // authorization_ldap_trim_client_username_domain_enabled - computed: false, optional: true, required: false
  private _authorizationLdapTrimClientUsernameDomainEnabled?: boolean | cdktf.IResolvable; 
  public get authorizationLdapTrimClientUsernameDomainEnabled() {
    return this.getBooleanAttribute('authorization_ldap_trim_client_username_domain_enabled');
  }
  public set authorizationLdapTrimClientUsernameDomainEnabled(value: boolean | cdktf.IResolvable) {
    this._authorizationLdapTrimClientUsernameDomainEnabled = value;
  }
  public resetAuthorizationLdapTrimClientUsernameDomainEnabled() {
    this._authorizationLdapTrimClientUsernameDomainEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizationLdapTrimClientUsernameDomainEnabledInput() {
    return this._authorizationLdapTrimClientUsernameDomainEnabled;
  }

  // authorization_profile_name - computed: false, optional: true, required: false
  private _authorizationProfileName?: string; 
  public get authorizationProfileName() {
    return this.getStringAttribute('authorization_profile_name');
  }
  public set authorizationProfileName(value: string) {
    this._authorizationProfileName = value;
  }
  public resetAuthorizationProfileName() {
    this._authorizationProfileName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizationProfileNameInput() {
    return this._authorizationProfileName;
  }

  // authorization_type - computed: false, optional: true, required: false
  private _authorizationType?: string; 
  public get authorizationType() {
    return this.getStringAttribute('authorization_type');
  }
  public set authorizationType(value: string) {
    this._authorizationType = value;
  }
  public resetAuthorizationType() {
    this._authorizationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizationTypeInput() {
    return this._authorizationType;
  }

  // bridging_tls_server_cert_max_chain_depth - computed: false, optional: true, required: false
  private _bridgingTlsServerCertMaxChainDepth?: number; 
  public get bridgingTlsServerCertMaxChainDepth() {
    return this.getNumberAttribute('bridging_tls_server_cert_max_chain_depth');
  }
  public set bridgingTlsServerCertMaxChainDepth(value: number) {
    this._bridgingTlsServerCertMaxChainDepth = value;
  }
  public resetBridgingTlsServerCertMaxChainDepth() {
    this._bridgingTlsServerCertMaxChainDepth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bridgingTlsServerCertMaxChainDepthInput() {
    return this._bridgingTlsServerCertMaxChainDepth;
  }

  // bridging_tls_server_cert_validate_date_enabled - computed: false, optional: true, required: false
  private _bridgingTlsServerCertValidateDateEnabled?: boolean | cdktf.IResolvable; 
  public get bridgingTlsServerCertValidateDateEnabled() {
    return this.getBooleanAttribute('bridging_tls_server_cert_validate_date_enabled');
  }
  public set bridgingTlsServerCertValidateDateEnabled(value: boolean | cdktf.IResolvable) {
    this._bridgingTlsServerCertValidateDateEnabled = value;
  }
  public resetBridgingTlsServerCertValidateDateEnabled() {
    this._bridgingTlsServerCertValidateDateEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bridgingTlsServerCertValidateDateEnabledInput() {
    return this._bridgingTlsServerCertValidateDateEnabled;
  }

  // bridging_tls_server_cert_validate_name_enabled - computed: false, optional: true, required: false
  private _bridgingTlsServerCertValidateNameEnabled?: boolean | cdktf.IResolvable; 
  public get bridgingTlsServerCertValidateNameEnabled() {
    return this.getBooleanAttribute('bridging_tls_server_cert_validate_name_enabled');
  }
  public set bridgingTlsServerCertValidateNameEnabled(value: boolean | cdktf.IResolvable) {
    this._bridgingTlsServerCertValidateNameEnabled = value;
  }
  public resetBridgingTlsServerCertValidateNameEnabled() {
    this._bridgingTlsServerCertValidateNameEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bridgingTlsServerCertValidateNameEnabledInput() {
    return this._bridgingTlsServerCertValidateNameEnabled;
  }

  // dmr_enabled - computed: false, optional: true, required: false
  private _dmrEnabled?: boolean | cdktf.IResolvable; 
  public get dmrEnabled() {
    return this.getBooleanAttribute('dmr_enabled');
  }
  public set dmrEnabled(value: boolean | cdktf.IResolvable) {
    this._dmrEnabled = value;
  }
  public resetDmrEnabled() {
    this._dmrEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dmrEnabledInput() {
    return this._dmrEnabled;
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

  // event_connection_count_threshold - computed: false, optional: true, required: false
  private _eventConnectionCountThreshold = new MsgVpnEventConnectionCountThresholdOutputReference(this, "event_connection_count_threshold");
  public get eventConnectionCountThreshold() {
    return this._eventConnectionCountThreshold;
  }
  public putEventConnectionCountThreshold(value: MsgVpnEventConnectionCountThreshold) {
    this._eventConnectionCountThreshold.internalValue = value;
  }
  public resetEventConnectionCountThreshold() {
    this._eventConnectionCountThreshold.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventConnectionCountThresholdInput() {
    return this._eventConnectionCountThreshold.internalValue;
  }

  // event_egress_flow_count_threshold - computed: false, optional: true, required: false
  private _eventEgressFlowCountThreshold = new MsgVpnEventEgressFlowCountThresholdOutputReference(this, "event_egress_flow_count_threshold");
  public get eventEgressFlowCountThreshold() {
    return this._eventEgressFlowCountThreshold;
  }
  public putEventEgressFlowCountThreshold(value: MsgVpnEventEgressFlowCountThreshold) {
    this._eventEgressFlowCountThreshold.internalValue = value;
  }
  public resetEventEgressFlowCountThreshold() {
    this._eventEgressFlowCountThreshold.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventEgressFlowCountThresholdInput() {
    return this._eventEgressFlowCountThreshold.internalValue;
  }

  // event_egress_msg_rate_threshold - computed: false, optional: true, required: false
  private _eventEgressMsgRateThreshold = new MsgVpnEventEgressMsgRateThresholdOutputReference(this, "event_egress_msg_rate_threshold");
  public get eventEgressMsgRateThreshold() {
    return this._eventEgressMsgRateThreshold;
  }
  public putEventEgressMsgRateThreshold(value: MsgVpnEventEgressMsgRateThreshold) {
    this._eventEgressMsgRateThreshold.internalValue = value;
  }
  public resetEventEgressMsgRateThreshold() {
    this._eventEgressMsgRateThreshold.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventEgressMsgRateThresholdInput() {
    return this._eventEgressMsgRateThreshold.internalValue;
  }

  // event_endpoint_count_threshold - computed: false, optional: true, required: false
  private _eventEndpointCountThreshold = new MsgVpnEventEndpointCountThresholdOutputReference(this, "event_endpoint_count_threshold");
  public get eventEndpointCountThreshold() {
    return this._eventEndpointCountThreshold;
  }
  public putEventEndpointCountThreshold(value: MsgVpnEventEndpointCountThreshold) {
    this._eventEndpointCountThreshold.internalValue = value;
  }
  public resetEventEndpointCountThreshold() {
    this._eventEndpointCountThreshold.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventEndpointCountThresholdInput() {
    return this._eventEndpointCountThreshold.internalValue;
  }

  // event_ingress_flow_count_threshold - computed: false, optional: true, required: false
  private _eventIngressFlowCountThreshold = new MsgVpnEventIngressFlowCountThresholdOutputReference(this, "event_ingress_flow_count_threshold");
  public get eventIngressFlowCountThreshold() {
    return this._eventIngressFlowCountThreshold;
  }
  public putEventIngressFlowCountThreshold(value: MsgVpnEventIngressFlowCountThreshold) {
    this._eventIngressFlowCountThreshold.internalValue = value;
  }
  public resetEventIngressFlowCountThreshold() {
    this._eventIngressFlowCountThreshold.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventIngressFlowCountThresholdInput() {
    return this._eventIngressFlowCountThreshold.internalValue;
  }

  // event_ingress_msg_rate_threshold - computed: false, optional: true, required: false
  private _eventIngressMsgRateThreshold = new MsgVpnEventIngressMsgRateThresholdOutputReference(this, "event_ingress_msg_rate_threshold");
  public get eventIngressMsgRateThreshold() {
    return this._eventIngressMsgRateThreshold;
  }
  public putEventIngressMsgRateThreshold(value: MsgVpnEventIngressMsgRateThreshold) {
    this._eventIngressMsgRateThreshold.internalValue = value;
  }
  public resetEventIngressMsgRateThreshold() {
    this._eventIngressMsgRateThreshold.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventIngressMsgRateThresholdInput() {
    return this._eventIngressMsgRateThreshold.internalValue;
  }

  // event_large_msg_threshold - computed: false, optional: true, required: false
  private _eventLargeMsgThreshold?: number; 
  public get eventLargeMsgThreshold() {
    return this.getNumberAttribute('event_large_msg_threshold');
  }
  public set eventLargeMsgThreshold(value: number) {
    this._eventLargeMsgThreshold = value;
  }
  public resetEventLargeMsgThreshold() {
    this._eventLargeMsgThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventLargeMsgThresholdInput() {
    return this._eventLargeMsgThreshold;
  }

  // event_log_tag - computed: false, optional: true, required: false
  private _eventLogTag?: string; 
  public get eventLogTag() {
    return this.getStringAttribute('event_log_tag');
  }
  public set eventLogTag(value: string) {
    this._eventLogTag = value;
  }
  public resetEventLogTag() {
    this._eventLogTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventLogTagInput() {
    return this._eventLogTag;
  }

  // event_msg_spool_usage_threshold - computed: false, optional: true, required: false
  private _eventMsgSpoolUsageThreshold = new MsgVpnEventMsgSpoolUsageThresholdOutputReference(this, "event_msg_spool_usage_threshold");
  public get eventMsgSpoolUsageThreshold() {
    return this._eventMsgSpoolUsageThreshold;
  }
  public putEventMsgSpoolUsageThreshold(value: MsgVpnEventMsgSpoolUsageThreshold) {
    this._eventMsgSpoolUsageThreshold.internalValue = value;
  }
  public resetEventMsgSpoolUsageThreshold() {
    this._eventMsgSpoolUsageThreshold.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventMsgSpoolUsageThresholdInput() {
    return this._eventMsgSpoolUsageThreshold.internalValue;
  }

  // event_publish_client_enabled - computed: false, optional: true, required: false
  private _eventPublishClientEnabled?: boolean | cdktf.IResolvable; 
  public get eventPublishClientEnabled() {
    return this.getBooleanAttribute('event_publish_client_enabled');
  }
  public set eventPublishClientEnabled(value: boolean | cdktf.IResolvable) {
    this._eventPublishClientEnabled = value;
  }
  public resetEventPublishClientEnabled() {
    this._eventPublishClientEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventPublishClientEnabledInput() {
    return this._eventPublishClientEnabled;
  }

  // event_publish_msg_vpn_enabled - computed: false, optional: true, required: false
  private _eventPublishMsgVpnEnabled?: boolean | cdktf.IResolvable; 
  public get eventPublishMsgVpnEnabled() {
    return this.getBooleanAttribute('event_publish_msg_vpn_enabled');
  }
  public set eventPublishMsgVpnEnabled(value: boolean | cdktf.IResolvable) {
    this._eventPublishMsgVpnEnabled = value;
  }
  public resetEventPublishMsgVpnEnabled() {
    this._eventPublishMsgVpnEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventPublishMsgVpnEnabledInput() {
    return this._eventPublishMsgVpnEnabled;
  }

  // event_publish_subscription_mode - computed: false, optional: true, required: false
  private _eventPublishSubscriptionMode?: string; 
  public get eventPublishSubscriptionMode() {
    return this.getStringAttribute('event_publish_subscription_mode');
  }
  public set eventPublishSubscriptionMode(value: string) {
    this._eventPublishSubscriptionMode = value;
  }
  public resetEventPublishSubscriptionMode() {
    this._eventPublishSubscriptionMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventPublishSubscriptionModeInput() {
    return this._eventPublishSubscriptionMode;
  }

  // event_publish_topic_format_mqtt_enabled - computed: false, optional: true, required: false
  private _eventPublishTopicFormatMqttEnabled?: boolean | cdktf.IResolvable; 
  public get eventPublishTopicFormatMqttEnabled() {
    return this.getBooleanAttribute('event_publish_topic_format_mqtt_enabled');
  }
  public set eventPublishTopicFormatMqttEnabled(value: boolean | cdktf.IResolvable) {
    this._eventPublishTopicFormatMqttEnabled = value;
  }
  public resetEventPublishTopicFormatMqttEnabled() {
    this._eventPublishTopicFormatMqttEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventPublishTopicFormatMqttEnabledInput() {
    return this._eventPublishTopicFormatMqttEnabled;
  }

  // event_publish_topic_format_smf_enabled - computed: false, optional: true, required: false
  private _eventPublishTopicFormatSmfEnabled?: boolean | cdktf.IResolvable; 
  public get eventPublishTopicFormatSmfEnabled() {
    return this.getBooleanAttribute('event_publish_topic_format_smf_enabled');
  }
  public set eventPublishTopicFormatSmfEnabled(value: boolean | cdktf.IResolvable) {
    this._eventPublishTopicFormatSmfEnabled = value;
  }
  public resetEventPublishTopicFormatSmfEnabled() {
    this._eventPublishTopicFormatSmfEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventPublishTopicFormatSmfEnabledInput() {
    return this._eventPublishTopicFormatSmfEnabled;
  }

  // event_service_amqp_connection_count_threshold - computed: false, optional: true, required: false
  private _eventServiceAmqpConnectionCountThreshold = new MsgVpnEventServiceAmqpConnectionCountThresholdOutputReference(this, "event_service_amqp_connection_count_threshold");
  public get eventServiceAmqpConnectionCountThreshold() {
    return this._eventServiceAmqpConnectionCountThreshold;
  }
  public putEventServiceAmqpConnectionCountThreshold(value: MsgVpnEventServiceAmqpConnectionCountThreshold) {
    this._eventServiceAmqpConnectionCountThreshold.internalValue = value;
  }
  public resetEventServiceAmqpConnectionCountThreshold() {
    this._eventServiceAmqpConnectionCountThreshold.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventServiceAmqpConnectionCountThresholdInput() {
    return this._eventServiceAmqpConnectionCountThreshold.internalValue;
  }

  // event_service_mqtt_connection_count_threshold - computed: false, optional: true, required: false
  private _eventServiceMqttConnectionCountThreshold = new MsgVpnEventServiceMqttConnectionCountThresholdOutputReference(this, "event_service_mqtt_connection_count_threshold");
  public get eventServiceMqttConnectionCountThreshold() {
    return this._eventServiceMqttConnectionCountThreshold;
  }
  public putEventServiceMqttConnectionCountThreshold(value: MsgVpnEventServiceMqttConnectionCountThreshold) {
    this._eventServiceMqttConnectionCountThreshold.internalValue = value;
  }
  public resetEventServiceMqttConnectionCountThreshold() {
    this._eventServiceMqttConnectionCountThreshold.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventServiceMqttConnectionCountThresholdInput() {
    return this._eventServiceMqttConnectionCountThreshold.internalValue;
  }

  // event_service_rest_incoming_connection_count_threshold - computed: false, optional: true, required: false
  private _eventServiceRestIncomingConnectionCountThreshold = new MsgVpnEventServiceRestIncomingConnectionCountThresholdOutputReference(this, "event_service_rest_incoming_connection_count_threshold");
  public get eventServiceRestIncomingConnectionCountThreshold() {
    return this._eventServiceRestIncomingConnectionCountThreshold;
  }
  public putEventServiceRestIncomingConnectionCountThreshold(value: MsgVpnEventServiceRestIncomingConnectionCountThreshold) {
    this._eventServiceRestIncomingConnectionCountThreshold.internalValue = value;
  }
  public resetEventServiceRestIncomingConnectionCountThreshold() {
    this._eventServiceRestIncomingConnectionCountThreshold.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventServiceRestIncomingConnectionCountThresholdInput() {
    return this._eventServiceRestIncomingConnectionCountThreshold.internalValue;
  }

  // event_service_smf_connection_count_threshold - computed: false, optional: true, required: false
  private _eventServiceSmfConnectionCountThreshold = new MsgVpnEventServiceSmfConnectionCountThresholdOutputReference(this, "event_service_smf_connection_count_threshold");
  public get eventServiceSmfConnectionCountThreshold() {
    return this._eventServiceSmfConnectionCountThreshold;
  }
  public putEventServiceSmfConnectionCountThreshold(value: MsgVpnEventServiceSmfConnectionCountThreshold) {
    this._eventServiceSmfConnectionCountThreshold.internalValue = value;
  }
  public resetEventServiceSmfConnectionCountThreshold() {
    this._eventServiceSmfConnectionCountThreshold.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventServiceSmfConnectionCountThresholdInput() {
    return this._eventServiceSmfConnectionCountThreshold.internalValue;
  }

  // event_service_web_connection_count_threshold - computed: false, optional: true, required: false
  private _eventServiceWebConnectionCountThreshold = new MsgVpnEventServiceWebConnectionCountThresholdOutputReference(this, "event_service_web_connection_count_threshold");
  public get eventServiceWebConnectionCountThreshold() {
    return this._eventServiceWebConnectionCountThreshold;
  }
  public putEventServiceWebConnectionCountThreshold(value: MsgVpnEventServiceWebConnectionCountThreshold) {
    this._eventServiceWebConnectionCountThreshold.internalValue = value;
  }
  public resetEventServiceWebConnectionCountThreshold() {
    this._eventServiceWebConnectionCountThreshold.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventServiceWebConnectionCountThresholdInput() {
    return this._eventServiceWebConnectionCountThreshold.internalValue;
  }

  // event_subscription_count_threshold - computed: false, optional: true, required: false
  private _eventSubscriptionCountThreshold = new MsgVpnEventSubscriptionCountThresholdOutputReference(this, "event_subscription_count_threshold");
  public get eventSubscriptionCountThreshold() {
    return this._eventSubscriptionCountThreshold;
  }
  public putEventSubscriptionCountThreshold(value: MsgVpnEventSubscriptionCountThreshold) {
    this._eventSubscriptionCountThreshold.internalValue = value;
  }
  public resetEventSubscriptionCountThreshold() {
    this._eventSubscriptionCountThreshold.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventSubscriptionCountThresholdInput() {
    return this._eventSubscriptionCountThreshold.internalValue;
  }

  // event_transacted_session_count_threshold - computed: false, optional: true, required: false
  private _eventTransactedSessionCountThreshold = new MsgVpnEventTransactedSessionCountThresholdOutputReference(this, "event_transacted_session_count_threshold");
  public get eventTransactedSessionCountThreshold() {
    return this._eventTransactedSessionCountThreshold;
  }
  public putEventTransactedSessionCountThreshold(value: MsgVpnEventTransactedSessionCountThreshold) {
    this._eventTransactedSessionCountThreshold.internalValue = value;
  }
  public resetEventTransactedSessionCountThreshold() {
    this._eventTransactedSessionCountThreshold.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventTransactedSessionCountThresholdInput() {
    return this._eventTransactedSessionCountThreshold.internalValue;
  }

  // event_transaction_count_threshold - computed: false, optional: true, required: false
  private _eventTransactionCountThreshold = new MsgVpnEventTransactionCountThresholdOutputReference(this, "event_transaction_count_threshold");
  public get eventTransactionCountThreshold() {
    return this._eventTransactionCountThreshold;
  }
  public putEventTransactionCountThreshold(value: MsgVpnEventTransactionCountThreshold) {
    this._eventTransactionCountThreshold.internalValue = value;
  }
  public resetEventTransactionCountThreshold() {
    this._eventTransactionCountThreshold.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventTransactionCountThresholdInput() {
    return this._eventTransactionCountThreshold.internalValue;
  }

  // export_subscriptions_enabled - computed: false, optional: true, required: false
  private _exportSubscriptionsEnabled?: boolean | cdktf.IResolvable; 
  public get exportSubscriptionsEnabled() {
    return this.getBooleanAttribute('export_subscriptions_enabled');
  }
  public set exportSubscriptionsEnabled(value: boolean | cdktf.IResolvable) {
    this._exportSubscriptionsEnabled = value;
  }
  public resetExportSubscriptionsEnabled() {
    this._exportSubscriptionsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exportSubscriptionsEnabledInput() {
    return this._exportSubscriptionsEnabled;
  }

  // jndi_enabled - computed: false, optional: true, required: false
  private _jndiEnabled?: boolean | cdktf.IResolvable; 
  public get jndiEnabled() {
    return this.getBooleanAttribute('jndi_enabled');
  }
  public set jndiEnabled(value: boolean | cdktf.IResolvable) {
    this._jndiEnabled = value;
  }
  public resetJndiEnabled() {
    this._jndiEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jndiEnabledInput() {
    return this._jndiEnabled;
  }

  // max_connection_count - computed: false, optional: true, required: false
  private _maxConnectionCount?: number; 
  public get maxConnectionCount() {
    return this.getNumberAttribute('max_connection_count');
  }
  public set maxConnectionCount(value: number) {
    this._maxConnectionCount = value;
  }
  public resetMaxConnectionCount() {
    this._maxConnectionCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxConnectionCountInput() {
    return this._maxConnectionCount;
  }

  // max_egress_flow_count - computed: false, optional: true, required: false
  private _maxEgressFlowCount?: number; 
  public get maxEgressFlowCount() {
    return this.getNumberAttribute('max_egress_flow_count');
  }
  public set maxEgressFlowCount(value: number) {
    this._maxEgressFlowCount = value;
  }
  public resetMaxEgressFlowCount() {
    this._maxEgressFlowCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxEgressFlowCountInput() {
    return this._maxEgressFlowCount;
  }

  // max_endpoint_count - computed: false, optional: true, required: false
  private _maxEndpointCount?: number; 
  public get maxEndpointCount() {
    return this.getNumberAttribute('max_endpoint_count');
  }
  public set maxEndpointCount(value: number) {
    this._maxEndpointCount = value;
  }
  public resetMaxEndpointCount() {
    this._maxEndpointCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxEndpointCountInput() {
    return this._maxEndpointCount;
  }

  // max_ingress_flow_count - computed: false, optional: true, required: false
  private _maxIngressFlowCount?: number; 
  public get maxIngressFlowCount() {
    return this.getNumberAttribute('max_ingress_flow_count');
  }
  public set maxIngressFlowCount(value: number) {
    this._maxIngressFlowCount = value;
  }
  public resetMaxIngressFlowCount() {
    this._maxIngressFlowCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxIngressFlowCountInput() {
    return this._maxIngressFlowCount;
  }

  // max_kafka_broker_connection_count - computed: false, optional: true, required: false
  private _maxKafkaBrokerConnectionCount?: number; 
  public get maxKafkaBrokerConnectionCount() {
    return this.getNumberAttribute('max_kafka_broker_connection_count');
  }
  public set maxKafkaBrokerConnectionCount(value: number) {
    this._maxKafkaBrokerConnectionCount = value;
  }
  public resetMaxKafkaBrokerConnectionCount() {
    this._maxKafkaBrokerConnectionCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxKafkaBrokerConnectionCountInput() {
    return this._maxKafkaBrokerConnectionCount;
  }

  // max_msg_spool_usage - computed: false, optional: true, required: false
  private _maxMsgSpoolUsage?: number; 
  public get maxMsgSpoolUsage() {
    return this.getNumberAttribute('max_msg_spool_usage');
  }
  public set maxMsgSpoolUsage(value: number) {
    this._maxMsgSpoolUsage = value;
  }
  public resetMaxMsgSpoolUsage() {
    this._maxMsgSpoolUsage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxMsgSpoolUsageInput() {
    return this._maxMsgSpoolUsage;
  }

  // max_subscription_count - computed: false, optional: true, required: false
  private _maxSubscriptionCount?: number; 
  public get maxSubscriptionCount() {
    return this.getNumberAttribute('max_subscription_count');
  }
  public set maxSubscriptionCount(value: number) {
    this._maxSubscriptionCount = value;
  }
  public resetMaxSubscriptionCount() {
    this._maxSubscriptionCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxSubscriptionCountInput() {
    return this._maxSubscriptionCount;
  }

  // max_transacted_session_count - computed: false, optional: true, required: false
  private _maxTransactedSessionCount?: number; 
  public get maxTransactedSessionCount() {
    return this.getNumberAttribute('max_transacted_session_count');
  }
  public set maxTransactedSessionCount(value: number) {
    this._maxTransactedSessionCount = value;
  }
  public resetMaxTransactedSessionCount() {
    this._maxTransactedSessionCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxTransactedSessionCountInput() {
    return this._maxTransactedSessionCount;
  }

  // max_transaction_count - computed: false, optional: true, required: false
  private _maxTransactionCount?: number; 
  public get maxTransactionCount() {
    return this.getNumberAttribute('max_transaction_count');
  }
  public set maxTransactionCount(value: number) {
    this._maxTransactionCount = value;
  }
  public resetMaxTransactionCount() {
    this._maxTransactionCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxTransactionCountInput() {
    return this._maxTransactionCount;
  }

  // mqtt_retain_max_memory - computed: false, optional: true, required: false
  private _mqttRetainMaxMemory?: number; 
  public get mqttRetainMaxMemory() {
    return this.getNumberAttribute('mqtt_retain_max_memory');
  }
  public set mqttRetainMaxMemory(value: number) {
    this._mqttRetainMaxMemory = value;
  }
  public resetMqttRetainMaxMemory() {
    this._mqttRetainMaxMemory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mqttRetainMaxMemoryInput() {
    return this._mqttRetainMaxMemory;
  }

  // msg_vpn_name - computed: false, optional: false, required: true
  private _msgVpnName?: string; 
  public get msgVpnName() {
    return this.getStringAttribute('msg_vpn_name');
  }
  public set msgVpnName(value: string) {
    this._msgVpnName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get msgVpnNameInput() {
    return this._msgVpnName;
  }

  // replication_ack_propagation_interval_msg_count - computed: false, optional: true, required: false
  private _replicationAckPropagationIntervalMsgCount?: number; 
  public get replicationAckPropagationIntervalMsgCount() {
    return this.getNumberAttribute('replication_ack_propagation_interval_msg_count');
  }
  public set replicationAckPropagationIntervalMsgCount(value: number) {
    this._replicationAckPropagationIntervalMsgCount = value;
  }
  public resetReplicationAckPropagationIntervalMsgCount() {
    this._replicationAckPropagationIntervalMsgCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicationAckPropagationIntervalMsgCountInput() {
    return this._replicationAckPropagationIntervalMsgCount;
  }

  // replication_bridge_authentication_basic_client_username - computed: false, optional: true, required: false
  private _replicationBridgeAuthenticationBasicClientUsername?: string; 
  public get replicationBridgeAuthenticationBasicClientUsername() {
    return this.getStringAttribute('replication_bridge_authentication_basic_client_username');
  }
  public set replicationBridgeAuthenticationBasicClientUsername(value: string) {
    this._replicationBridgeAuthenticationBasicClientUsername = value;
  }
  public resetReplicationBridgeAuthenticationBasicClientUsername() {
    this._replicationBridgeAuthenticationBasicClientUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicationBridgeAuthenticationBasicClientUsernameInput() {
    return this._replicationBridgeAuthenticationBasicClientUsername;
  }

  // replication_bridge_authentication_basic_password - computed: false, optional: true, required: false
  private _replicationBridgeAuthenticationBasicPassword?: string; 
  public get replicationBridgeAuthenticationBasicPassword() {
    return this.getStringAttribute('replication_bridge_authentication_basic_password');
  }
  public set replicationBridgeAuthenticationBasicPassword(value: string) {
    this._replicationBridgeAuthenticationBasicPassword = value;
  }
  public resetReplicationBridgeAuthenticationBasicPassword() {
    this._replicationBridgeAuthenticationBasicPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicationBridgeAuthenticationBasicPasswordInput() {
    return this._replicationBridgeAuthenticationBasicPassword;
  }

  // replication_bridge_authentication_client_cert_content - computed: false, optional: true, required: false
  private _replicationBridgeAuthenticationClientCertContent?: string; 
  public get replicationBridgeAuthenticationClientCertContent() {
    return this.getStringAttribute('replication_bridge_authentication_client_cert_content');
  }
  public set replicationBridgeAuthenticationClientCertContent(value: string) {
    this._replicationBridgeAuthenticationClientCertContent = value;
  }
  public resetReplicationBridgeAuthenticationClientCertContent() {
    this._replicationBridgeAuthenticationClientCertContent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicationBridgeAuthenticationClientCertContentInput() {
    return this._replicationBridgeAuthenticationClientCertContent;
  }

  // replication_bridge_authentication_client_cert_password - computed: false, optional: true, required: false
  private _replicationBridgeAuthenticationClientCertPassword?: string; 
  public get replicationBridgeAuthenticationClientCertPassword() {
    return this.getStringAttribute('replication_bridge_authentication_client_cert_password');
  }
  public set replicationBridgeAuthenticationClientCertPassword(value: string) {
    this._replicationBridgeAuthenticationClientCertPassword = value;
  }
  public resetReplicationBridgeAuthenticationClientCertPassword() {
    this._replicationBridgeAuthenticationClientCertPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicationBridgeAuthenticationClientCertPasswordInput() {
    return this._replicationBridgeAuthenticationClientCertPassword;
  }

  // replication_bridge_authentication_scheme - computed: false, optional: true, required: false
  private _replicationBridgeAuthenticationScheme?: string; 
  public get replicationBridgeAuthenticationScheme() {
    return this.getStringAttribute('replication_bridge_authentication_scheme');
  }
  public set replicationBridgeAuthenticationScheme(value: string) {
    this._replicationBridgeAuthenticationScheme = value;
  }
  public resetReplicationBridgeAuthenticationScheme() {
    this._replicationBridgeAuthenticationScheme = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicationBridgeAuthenticationSchemeInput() {
    return this._replicationBridgeAuthenticationScheme;
  }

  // replication_bridge_compressed_data_enabled - computed: false, optional: true, required: false
  private _replicationBridgeCompressedDataEnabled?: boolean | cdktf.IResolvable; 
  public get replicationBridgeCompressedDataEnabled() {
    return this.getBooleanAttribute('replication_bridge_compressed_data_enabled');
  }
  public set replicationBridgeCompressedDataEnabled(value: boolean | cdktf.IResolvable) {
    this._replicationBridgeCompressedDataEnabled = value;
  }
  public resetReplicationBridgeCompressedDataEnabled() {
    this._replicationBridgeCompressedDataEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicationBridgeCompressedDataEnabledInput() {
    return this._replicationBridgeCompressedDataEnabled;
  }

  // replication_bridge_egress_flow_window_size - computed: false, optional: true, required: false
  private _replicationBridgeEgressFlowWindowSize?: number; 
  public get replicationBridgeEgressFlowWindowSize() {
    return this.getNumberAttribute('replication_bridge_egress_flow_window_size');
  }
  public set replicationBridgeEgressFlowWindowSize(value: number) {
    this._replicationBridgeEgressFlowWindowSize = value;
  }
  public resetReplicationBridgeEgressFlowWindowSize() {
    this._replicationBridgeEgressFlowWindowSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicationBridgeEgressFlowWindowSizeInput() {
    return this._replicationBridgeEgressFlowWindowSize;
  }

  // replication_bridge_retry_delay - computed: false, optional: true, required: false
  private _replicationBridgeRetryDelay?: number; 
  public get replicationBridgeRetryDelay() {
    return this.getNumberAttribute('replication_bridge_retry_delay');
  }
  public set replicationBridgeRetryDelay(value: number) {
    this._replicationBridgeRetryDelay = value;
  }
  public resetReplicationBridgeRetryDelay() {
    this._replicationBridgeRetryDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicationBridgeRetryDelayInput() {
    return this._replicationBridgeRetryDelay;
  }

  // replication_bridge_tls_enabled - computed: false, optional: true, required: false
  private _replicationBridgeTlsEnabled?: boolean | cdktf.IResolvable; 
  public get replicationBridgeTlsEnabled() {
    return this.getBooleanAttribute('replication_bridge_tls_enabled');
  }
  public set replicationBridgeTlsEnabled(value: boolean | cdktf.IResolvable) {
    this._replicationBridgeTlsEnabled = value;
  }
  public resetReplicationBridgeTlsEnabled() {
    this._replicationBridgeTlsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicationBridgeTlsEnabledInput() {
    return this._replicationBridgeTlsEnabled;
  }

  // replication_bridge_unidirectional_client_profile_name - computed: false, optional: true, required: false
  private _replicationBridgeUnidirectionalClientProfileName?: string; 
  public get replicationBridgeUnidirectionalClientProfileName() {
    return this.getStringAttribute('replication_bridge_unidirectional_client_profile_name');
  }
  public set replicationBridgeUnidirectionalClientProfileName(value: string) {
    this._replicationBridgeUnidirectionalClientProfileName = value;
  }
  public resetReplicationBridgeUnidirectionalClientProfileName() {
    this._replicationBridgeUnidirectionalClientProfileName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicationBridgeUnidirectionalClientProfileNameInput() {
    return this._replicationBridgeUnidirectionalClientProfileName;
  }

  // replication_enabled - computed: false, optional: true, required: false
  private _replicationEnabled?: boolean | cdktf.IResolvable; 
  public get replicationEnabled() {
    return this.getBooleanAttribute('replication_enabled');
  }
  public set replicationEnabled(value: boolean | cdktf.IResolvable) {
    this._replicationEnabled = value;
  }
  public resetReplicationEnabled() {
    this._replicationEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicationEnabledInput() {
    return this._replicationEnabled;
  }

  // replication_enabled_queue_behavior - computed: false, optional: true, required: false
  private _replicationEnabledQueueBehavior?: string; 
  public get replicationEnabledQueueBehavior() {
    return this.getStringAttribute('replication_enabled_queue_behavior');
  }
  public set replicationEnabledQueueBehavior(value: string) {
    this._replicationEnabledQueueBehavior = value;
  }
  public resetReplicationEnabledQueueBehavior() {
    this._replicationEnabledQueueBehavior = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicationEnabledQueueBehaviorInput() {
    return this._replicationEnabledQueueBehavior;
  }

  // replication_queue_max_msg_spool_usage - computed: false, optional: true, required: false
  private _replicationQueueMaxMsgSpoolUsage?: number; 
  public get replicationQueueMaxMsgSpoolUsage() {
    return this.getNumberAttribute('replication_queue_max_msg_spool_usage');
  }
  public set replicationQueueMaxMsgSpoolUsage(value: number) {
    this._replicationQueueMaxMsgSpoolUsage = value;
  }
  public resetReplicationQueueMaxMsgSpoolUsage() {
    this._replicationQueueMaxMsgSpoolUsage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicationQueueMaxMsgSpoolUsageInput() {
    return this._replicationQueueMaxMsgSpoolUsage;
  }

  // replication_queue_reject_msg_to_sender_on_discard_enabled - computed: false, optional: true, required: false
  private _replicationQueueRejectMsgToSenderOnDiscardEnabled?: boolean | cdktf.IResolvable; 
  public get replicationQueueRejectMsgToSenderOnDiscardEnabled() {
    return this.getBooleanAttribute('replication_queue_reject_msg_to_sender_on_discard_enabled');
  }
  public set replicationQueueRejectMsgToSenderOnDiscardEnabled(value: boolean | cdktf.IResolvable) {
    this._replicationQueueRejectMsgToSenderOnDiscardEnabled = value;
  }
  public resetReplicationQueueRejectMsgToSenderOnDiscardEnabled() {
    this._replicationQueueRejectMsgToSenderOnDiscardEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicationQueueRejectMsgToSenderOnDiscardEnabledInput() {
    return this._replicationQueueRejectMsgToSenderOnDiscardEnabled;
  }

  // replication_reject_msg_when_sync_ineligible_enabled - computed: false, optional: true, required: false
  private _replicationRejectMsgWhenSyncIneligibleEnabled?: boolean | cdktf.IResolvable; 
  public get replicationRejectMsgWhenSyncIneligibleEnabled() {
    return this.getBooleanAttribute('replication_reject_msg_when_sync_ineligible_enabled');
  }
  public set replicationRejectMsgWhenSyncIneligibleEnabled(value: boolean | cdktf.IResolvable) {
    this._replicationRejectMsgWhenSyncIneligibleEnabled = value;
  }
  public resetReplicationRejectMsgWhenSyncIneligibleEnabled() {
    this._replicationRejectMsgWhenSyncIneligibleEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicationRejectMsgWhenSyncIneligibleEnabledInput() {
    return this._replicationRejectMsgWhenSyncIneligibleEnabled;
  }

  // replication_role - computed: false, optional: true, required: false
  private _replicationRole?: string; 
  public get replicationRole() {
    return this.getStringAttribute('replication_role');
  }
  public set replicationRole(value: string) {
    this._replicationRole = value;
  }
  public resetReplicationRole() {
    this._replicationRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicationRoleInput() {
    return this._replicationRole;
  }

  // replication_transaction_mode - computed: false, optional: true, required: false
  private _replicationTransactionMode?: string; 
  public get replicationTransactionMode() {
    return this.getStringAttribute('replication_transaction_mode');
  }
  public set replicationTransactionMode(value: string) {
    this._replicationTransactionMode = value;
  }
  public resetReplicationTransactionMode() {
    this._replicationTransactionMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicationTransactionModeInput() {
    return this._replicationTransactionMode;
  }

  // rest_tls_server_cert_max_chain_depth - computed: false, optional: true, required: false
  private _restTlsServerCertMaxChainDepth?: number; 
  public get restTlsServerCertMaxChainDepth() {
    return this.getNumberAttribute('rest_tls_server_cert_max_chain_depth');
  }
  public set restTlsServerCertMaxChainDepth(value: number) {
    this._restTlsServerCertMaxChainDepth = value;
  }
  public resetRestTlsServerCertMaxChainDepth() {
    this._restTlsServerCertMaxChainDepth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restTlsServerCertMaxChainDepthInput() {
    return this._restTlsServerCertMaxChainDepth;
  }

  // rest_tls_server_cert_validate_date_enabled - computed: false, optional: true, required: false
  private _restTlsServerCertValidateDateEnabled?: boolean | cdktf.IResolvable; 
  public get restTlsServerCertValidateDateEnabled() {
    return this.getBooleanAttribute('rest_tls_server_cert_validate_date_enabled');
  }
  public set restTlsServerCertValidateDateEnabled(value: boolean | cdktf.IResolvable) {
    this._restTlsServerCertValidateDateEnabled = value;
  }
  public resetRestTlsServerCertValidateDateEnabled() {
    this._restTlsServerCertValidateDateEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restTlsServerCertValidateDateEnabledInput() {
    return this._restTlsServerCertValidateDateEnabled;
  }

  // rest_tls_server_cert_validate_name_enabled - computed: false, optional: true, required: false
  private _restTlsServerCertValidateNameEnabled?: boolean | cdktf.IResolvable; 
  public get restTlsServerCertValidateNameEnabled() {
    return this.getBooleanAttribute('rest_tls_server_cert_validate_name_enabled');
  }
  public set restTlsServerCertValidateNameEnabled(value: boolean | cdktf.IResolvable) {
    this._restTlsServerCertValidateNameEnabled = value;
  }
  public resetRestTlsServerCertValidateNameEnabled() {
    this._restTlsServerCertValidateNameEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restTlsServerCertValidateNameEnabledInput() {
    return this._restTlsServerCertValidateNameEnabled;
  }

  // semp_over_msg_bus_admin_client_enabled - computed: false, optional: true, required: false
  private _sempOverMsgBusAdminClientEnabled?: boolean | cdktf.IResolvable; 
  public get sempOverMsgBusAdminClientEnabled() {
    return this.getBooleanAttribute('semp_over_msg_bus_admin_client_enabled');
  }
  public set sempOverMsgBusAdminClientEnabled(value: boolean | cdktf.IResolvable) {
    this._sempOverMsgBusAdminClientEnabled = value;
  }
  public resetSempOverMsgBusAdminClientEnabled() {
    this._sempOverMsgBusAdminClientEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sempOverMsgBusAdminClientEnabledInput() {
    return this._sempOverMsgBusAdminClientEnabled;
  }

  // semp_over_msg_bus_admin_distributed_cache_enabled - computed: false, optional: true, required: false
  private _sempOverMsgBusAdminDistributedCacheEnabled?: boolean | cdktf.IResolvable; 
  public get sempOverMsgBusAdminDistributedCacheEnabled() {
    return this.getBooleanAttribute('semp_over_msg_bus_admin_distributed_cache_enabled');
  }
  public set sempOverMsgBusAdminDistributedCacheEnabled(value: boolean | cdktf.IResolvable) {
    this._sempOverMsgBusAdminDistributedCacheEnabled = value;
  }
  public resetSempOverMsgBusAdminDistributedCacheEnabled() {
    this._sempOverMsgBusAdminDistributedCacheEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sempOverMsgBusAdminDistributedCacheEnabledInput() {
    return this._sempOverMsgBusAdminDistributedCacheEnabled;
  }

  // semp_over_msg_bus_admin_enabled - computed: false, optional: true, required: false
  private _sempOverMsgBusAdminEnabled?: boolean | cdktf.IResolvable; 
  public get sempOverMsgBusAdminEnabled() {
    return this.getBooleanAttribute('semp_over_msg_bus_admin_enabled');
  }
  public set sempOverMsgBusAdminEnabled(value: boolean | cdktf.IResolvable) {
    this._sempOverMsgBusAdminEnabled = value;
  }
  public resetSempOverMsgBusAdminEnabled() {
    this._sempOverMsgBusAdminEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sempOverMsgBusAdminEnabledInput() {
    return this._sempOverMsgBusAdminEnabled;
  }

  // semp_over_msg_bus_enabled - computed: false, optional: true, required: false
  private _sempOverMsgBusEnabled?: boolean | cdktf.IResolvable; 
  public get sempOverMsgBusEnabled() {
    return this.getBooleanAttribute('semp_over_msg_bus_enabled');
  }
  public set sempOverMsgBusEnabled(value: boolean | cdktf.IResolvable) {
    this._sempOverMsgBusEnabled = value;
  }
  public resetSempOverMsgBusEnabled() {
    this._sempOverMsgBusEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sempOverMsgBusEnabledInput() {
    return this._sempOverMsgBusEnabled;
  }

  // semp_over_msg_bus_show_enabled - computed: false, optional: true, required: false
  private _sempOverMsgBusShowEnabled?: boolean | cdktf.IResolvable; 
  public get sempOverMsgBusShowEnabled() {
    return this.getBooleanAttribute('semp_over_msg_bus_show_enabled');
  }
  public set sempOverMsgBusShowEnabled(value: boolean | cdktf.IResolvable) {
    this._sempOverMsgBusShowEnabled = value;
  }
  public resetSempOverMsgBusShowEnabled() {
    this._sempOverMsgBusShowEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sempOverMsgBusShowEnabledInput() {
    return this._sempOverMsgBusShowEnabled;
  }

  // service_amqp_max_connection_count - computed: false, optional: true, required: false
  private _serviceAmqpMaxConnectionCount?: number; 
  public get serviceAmqpMaxConnectionCount() {
    return this.getNumberAttribute('service_amqp_max_connection_count');
  }
  public set serviceAmqpMaxConnectionCount(value: number) {
    this._serviceAmqpMaxConnectionCount = value;
  }
  public resetServiceAmqpMaxConnectionCount() {
    this._serviceAmqpMaxConnectionCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAmqpMaxConnectionCountInput() {
    return this._serviceAmqpMaxConnectionCount;
  }

  // service_amqp_plain_text_enabled - computed: false, optional: true, required: false
  private _serviceAmqpPlainTextEnabled?: boolean | cdktf.IResolvable; 
  public get serviceAmqpPlainTextEnabled() {
    return this.getBooleanAttribute('service_amqp_plain_text_enabled');
  }
  public set serviceAmqpPlainTextEnabled(value: boolean | cdktf.IResolvable) {
    this._serviceAmqpPlainTextEnabled = value;
  }
  public resetServiceAmqpPlainTextEnabled() {
    this._serviceAmqpPlainTextEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAmqpPlainTextEnabledInput() {
    return this._serviceAmqpPlainTextEnabled;
  }

  // service_amqp_plain_text_listen_port - computed: false, optional: true, required: false
  private _serviceAmqpPlainTextListenPort?: number; 
  public get serviceAmqpPlainTextListenPort() {
    return this.getNumberAttribute('service_amqp_plain_text_listen_port');
  }
  public set serviceAmqpPlainTextListenPort(value: number) {
    this._serviceAmqpPlainTextListenPort = value;
  }
  public resetServiceAmqpPlainTextListenPort() {
    this._serviceAmqpPlainTextListenPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAmqpPlainTextListenPortInput() {
    return this._serviceAmqpPlainTextListenPort;
  }

  // service_amqp_tls_enabled - computed: false, optional: true, required: false
  private _serviceAmqpTlsEnabled?: boolean | cdktf.IResolvable; 
  public get serviceAmqpTlsEnabled() {
    return this.getBooleanAttribute('service_amqp_tls_enabled');
  }
  public set serviceAmqpTlsEnabled(value: boolean | cdktf.IResolvable) {
    this._serviceAmqpTlsEnabled = value;
  }
  public resetServiceAmqpTlsEnabled() {
    this._serviceAmqpTlsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAmqpTlsEnabledInput() {
    return this._serviceAmqpTlsEnabled;
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

  // service_mqtt_authentication_client_cert_request - computed: false, optional: true, required: false
  private _serviceMqttAuthenticationClientCertRequest?: string; 
  public get serviceMqttAuthenticationClientCertRequest() {
    return this.getStringAttribute('service_mqtt_authentication_client_cert_request');
  }
  public set serviceMqttAuthenticationClientCertRequest(value: string) {
    this._serviceMqttAuthenticationClientCertRequest = value;
  }
  public resetServiceMqttAuthenticationClientCertRequest() {
    this._serviceMqttAuthenticationClientCertRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceMqttAuthenticationClientCertRequestInput() {
    return this._serviceMqttAuthenticationClientCertRequest;
  }

  // service_mqtt_max_connection_count - computed: false, optional: true, required: false
  private _serviceMqttMaxConnectionCount?: number; 
  public get serviceMqttMaxConnectionCount() {
    return this.getNumberAttribute('service_mqtt_max_connection_count');
  }
  public set serviceMqttMaxConnectionCount(value: number) {
    this._serviceMqttMaxConnectionCount = value;
  }
  public resetServiceMqttMaxConnectionCount() {
    this._serviceMqttMaxConnectionCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceMqttMaxConnectionCountInput() {
    return this._serviceMqttMaxConnectionCount;
  }

  // service_mqtt_plain_text_enabled - computed: false, optional: true, required: false
  private _serviceMqttPlainTextEnabled?: boolean | cdktf.IResolvable; 
  public get serviceMqttPlainTextEnabled() {
    return this.getBooleanAttribute('service_mqtt_plain_text_enabled');
  }
  public set serviceMqttPlainTextEnabled(value: boolean | cdktf.IResolvable) {
    this._serviceMqttPlainTextEnabled = value;
  }
  public resetServiceMqttPlainTextEnabled() {
    this._serviceMqttPlainTextEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceMqttPlainTextEnabledInput() {
    return this._serviceMqttPlainTextEnabled;
  }

  // service_mqtt_plain_text_listen_port - computed: false, optional: true, required: false
  private _serviceMqttPlainTextListenPort?: number; 
  public get serviceMqttPlainTextListenPort() {
    return this.getNumberAttribute('service_mqtt_plain_text_listen_port');
  }
  public set serviceMqttPlainTextListenPort(value: number) {
    this._serviceMqttPlainTextListenPort = value;
  }
  public resetServiceMqttPlainTextListenPort() {
    this._serviceMqttPlainTextListenPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceMqttPlainTextListenPortInput() {
    return this._serviceMqttPlainTextListenPort;
  }

  // service_mqtt_tls_enabled - computed: false, optional: true, required: false
  private _serviceMqttTlsEnabled?: boolean | cdktf.IResolvable; 
  public get serviceMqttTlsEnabled() {
    return this.getBooleanAttribute('service_mqtt_tls_enabled');
  }
  public set serviceMqttTlsEnabled(value: boolean | cdktf.IResolvable) {
    this._serviceMqttTlsEnabled = value;
  }
  public resetServiceMqttTlsEnabled() {
    this._serviceMqttTlsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceMqttTlsEnabledInput() {
    return this._serviceMqttTlsEnabled;
  }

  // service_mqtt_tls_listen_port - computed: false, optional: true, required: false
  private _serviceMqttTlsListenPort?: number; 
  public get serviceMqttTlsListenPort() {
    return this.getNumberAttribute('service_mqtt_tls_listen_port');
  }
  public set serviceMqttTlsListenPort(value: number) {
    this._serviceMqttTlsListenPort = value;
  }
  public resetServiceMqttTlsListenPort() {
    this._serviceMqttTlsListenPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceMqttTlsListenPortInput() {
    return this._serviceMqttTlsListenPort;
  }

  // service_mqtt_tls_web_socket_enabled - computed: false, optional: true, required: false
  private _serviceMqttTlsWebSocketEnabled?: boolean | cdktf.IResolvable; 
  public get serviceMqttTlsWebSocketEnabled() {
    return this.getBooleanAttribute('service_mqtt_tls_web_socket_enabled');
  }
  public set serviceMqttTlsWebSocketEnabled(value: boolean | cdktf.IResolvable) {
    this._serviceMqttTlsWebSocketEnabled = value;
  }
  public resetServiceMqttTlsWebSocketEnabled() {
    this._serviceMqttTlsWebSocketEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceMqttTlsWebSocketEnabledInput() {
    return this._serviceMqttTlsWebSocketEnabled;
  }

  // service_mqtt_tls_web_socket_listen_port - computed: false, optional: true, required: false
  private _serviceMqttTlsWebSocketListenPort?: number; 
  public get serviceMqttTlsWebSocketListenPort() {
    return this.getNumberAttribute('service_mqtt_tls_web_socket_listen_port');
  }
  public set serviceMqttTlsWebSocketListenPort(value: number) {
    this._serviceMqttTlsWebSocketListenPort = value;
  }
  public resetServiceMqttTlsWebSocketListenPort() {
    this._serviceMqttTlsWebSocketListenPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceMqttTlsWebSocketListenPortInput() {
    return this._serviceMqttTlsWebSocketListenPort;
  }

  // service_mqtt_web_socket_enabled - computed: false, optional: true, required: false
  private _serviceMqttWebSocketEnabled?: boolean | cdktf.IResolvable; 
  public get serviceMqttWebSocketEnabled() {
    return this.getBooleanAttribute('service_mqtt_web_socket_enabled');
  }
  public set serviceMqttWebSocketEnabled(value: boolean | cdktf.IResolvable) {
    this._serviceMqttWebSocketEnabled = value;
  }
  public resetServiceMqttWebSocketEnabled() {
    this._serviceMqttWebSocketEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceMqttWebSocketEnabledInput() {
    return this._serviceMqttWebSocketEnabled;
  }

  // service_mqtt_web_socket_listen_port - computed: false, optional: true, required: false
  private _serviceMqttWebSocketListenPort?: number; 
  public get serviceMqttWebSocketListenPort() {
    return this.getNumberAttribute('service_mqtt_web_socket_listen_port');
  }
  public set serviceMqttWebSocketListenPort(value: number) {
    this._serviceMqttWebSocketListenPort = value;
  }
  public resetServiceMqttWebSocketListenPort() {
    this._serviceMqttWebSocketListenPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceMqttWebSocketListenPortInput() {
    return this._serviceMqttWebSocketListenPort;
  }

  // service_rest_incoming_authentication_client_cert_request - computed: false, optional: true, required: false
  private _serviceRestIncomingAuthenticationClientCertRequest?: string; 
  public get serviceRestIncomingAuthenticationClientCertRequest() {
    return this.getStringAttribute('service_rest_incoming_authentication_client_cert_request');
  }
  public set serviceRestIncomingAuthenticationClientCertRequest(value: string) {
    this._serviceRestIncomingAuthenticationClientCertRequest = value;
  }
  public resetServiceRestIncomingAuthenticationClientCertRequest() {
    this._serviceRestIncomingAuthenticationClientCertRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceRestIncomingAuthenticationClientCertRequestInput() {
    return this._serviceRestIncomingAuthenticationClientCertRequest;
  }

  // service_rest_incoming_authorization_header_handling - computed: false, optional: true, required: false
  private _serviceRestIncomingAuthorizationHeaderHandling?: string; 
  public get serviceRestIncomingAuthorizationHeaderHandling() {
    return this.getStringAttribute('service_rest_incoming_authorization_header_handling');
  }
  public set serviceRestIncomingAuthorizationHeaderHandling(value: string) {
    this._serviceRestIncomingAuthorizationHeaderHandling = value;
  }
  public resetServiceRestIncomingAuthorizationHeaderHandling() {
    this._serviceRestIncomingAuthorizationHeaderHandling = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceRestIncomingAuthorizationHeaderHandlingInput() {
    return this._serviceRestIncomingAuthorizationHeaderHandling;
  }

  // service_rest_incoming_max_connection_count - computed: false, optional: true, required: false
  private _serviceRestIncomingMaxConnectionCount?: number; 
  public get serviceRestIncomingMaxConnectionCount() {
    return this.getNumberAttribute('service_rest_incoming_max_connection_count');
  }
  public set serviceRestIncomingMaxConnectionCount(value: number) {
    this._serviceRestIncomingMaxConnectionCount = value;
  }
  public resetServiceRestIncomingMaxConnectionCount() {
    this._serviceRestIncomingMaxConnectionCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceRestIncomingMaxConnectionCountInput() {
    return this._serviceRestIncomingMaxConnectionCount;
  }

  // service_rest_incoming_plain_text_enabled - computed: false, optional: true, required: false
  private _serviceRestIncomingPlainTextEnabled?: boolean | cdktf.IResolvable; 
  public get serviceRestIncomingPlainTextEnabled() {
    return this.getBooleanAttribute('service_rest_incoming_plain_text_enabled');
  }
  public set serviceRestIncomingPlainTextEnabled(value: boolean | cdktf.IResolvable) {
    this._serviceRestIncomingPlainTextEnabled = value;
  }
  public resetServiceRestIncomingPlainTextEnabled() {
    this._serviceRestIncomingPlainTextEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceRestIncomingPlainTextEnabledInput() {
    return this._serviceRestIncomingPlainTextEnabled;
  }

  // service_rest_incoming_plain_text_listen_port - computed: false, optional: true, required: false
  private _serviceRestIncomingPlainTextListenPort?: number; 
  public get serviceRestIncomingPlainTextListenPort() {
    return this.getNumberAttribute('service_rest_incoming_plain_text_listen_port');
  }
  public set serviceRestIncomingPlainTextListenPort(value: number) {
    this._serviceRestIncomingPlainTextListenPort = value;
  }
  public resetServiceRestIncomingPlainTextListenPort() {
    this._serviceRestIncomingPlainTextListenPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceRestIncomingPlainTextListenPortInput() {
    return this._serviceRestIncomingPlainTextListenPort;
  }

  // service_rest_incoming_tls_enabled - computed: false, optional: true, required: false
  private _serviceRestIncomingTlsEnabled?: boolean | cdktf.IResolvable; 
  public get serviceRestIncomingTlsEnabled() {
    return this.getBooleanAttribute('service_rest_incoming_tls_enabled');
  }
  public set serviceRestIncomingTlsEnabled(value: boolean | cdktf.IResolvable) {
    this._serviceRestIncomingTlsEnabled = value;
  }
  public resetServiceRestIncomingTlsEnabled() {
    this._serviceRestIncomingTlsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceRestIncomingTlsEnabledInput() {
    return this._serviceRestIncomingTlsEnabled;
  }

  // service_rest_incoming_tls_listen_port - computed: false, optional: true, required: false
  private _serviceRestIncomingTlsListenPort?: number; 
  public get serviceRestIncomingTlsListenPort() {
    return this.getNumberAttribute('service_rest_incoming_tls_listen_port');
  }
  public set serviceRestIncomingTlsListenPort(value: number) {
    this._serviceRestIncomingTlsListenPort = value;
  }
  public resetServiceRestIncomingTlsListenPort() {
    this._serviceRestIncomingTlsListenPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceRestIncomingTlsListenPortInput() {
    return this._serviceRestIncomingTlsListenPort;
  }

  // service_rest_mode - computed: false, optional: true, required: false
  private _serviceRestMode?: string; 
  public get serviceRestMode() {
    return this.getStringAttribute('service_rest_mode');
  }
  public set serviceRestMode(value: string) {
    this._serviceRestMode = value;
  }
  public resetServiceRestMode() {
    this._serviceRestMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceRestModeInput() {
    return this._serviceRestMode;
  }

  // service_rest_outgoing_max_connection_count - computed: false, optional: true, required: false
  private _serviceRestOutgoingMaxConnectionCount?: number; 
  public get serviceRestOutgoingMaxConnectionCount() {
    return this.getNumberAttribute('service_rest_outgoing_max_connection_count');
  }
  public set serviceRestOutgoingMaxConnectionCount(value: number) {
    this._serviceRestOutgoingMaxConnectionCount = value;
  }
  public resetServiceRestOutgoingMaxConnectionCount() {
    this._serviceRestOutgoingMaxConnectionCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceRestOutgoingMaxConnectionCountInput() {
    return this._serviceRestOutgoingMaxConnectionCount;
  }

  // service_smf_max_connection_count - computed: false, optional: true, required: false
  private _serviceSmfMaxConnectionCount?: number; 
  public get serviceSmfMaxConnectionCount() {
    return this.getNumberAttribute('service_smf_max_connection_count');
  }
  public set serviceSmfMaxConnectionCount(value: number) {
    this._serviceSmfMaxConnectionCount = value;
  }
  public resetServiceSmfMaxConnectionCount() {
    this._serviceSmfMaxConnectionCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceSmfMaxConnectionCountInput() {
    return this._serviceSmfMaxConnectionCount;
  }

  // service_smf_plain_text_enabled - computed: false, optional: true, required: false
  private _serviceSmfPlainTextEnabled?: boolean | cdktf.IResolvable; 
  public get serviceSmfPlainTextEnabled() {
    return this.getBooleanAttribute('service_smf_plain_text_enabled');
  }
  public set serviceSmfPlainTextEnabled(value: boolean | cdktf.IResolvable) {
    this._serviceSmfPlainTextEnabled = value;
  }
  public resetServiceSmfPlainTextEnabled() {
    this._serviceSmfPlainTextEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceSmfPlainTextEnabledInput() {
    return this._serviceSmfPlainTextEnabled;
  }

  // service_smf_tls_enabled - computed: false, optional: true, required: false
  private _serviceSmfTlsEnabled?: boolean | cdktf.IResolvable; 
  public get serviceSmfTlsEnabled() {
    return this.getBooleanAttribute('service_smf_tls_enabled');
  }
  public set serviceSmfTlsEnabled(value: boolean | cdktf.IResolvable) {
    this._serviceSmfTlsEnabled = value;
  }
  public resetServiceSmfTlsEnabled() {
    this._serviceSmfTlsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceSmfTlsEnabledInput() {
    return this._serviceSmfTlsEnabled;
  }

  // service_web_authentication_client_cert_request - computed: false, optional: true, required: false
  private _serviceWebAuthenticationClientCertRequest?: string; 
  public get serviceWebAuthenticationClientCertRequest() {
    return this.getStringAttribute('service_web_authentication_client_cert_request');
  }
  public set serviceWebAuthenticationClientCertRequest(value: string) {
    this._serviceWebAuthenticationClientCertRequest = value;
  }
  public resetServiceWebAuthenticationClientCertRequest() {
    this._serviceWebAuthenticationClientCertRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceWebAuthenticationClientCertRequestInput() {
    return this._serviceWebAuthenticationClientCertRequest;
  }

  // service_web_max_connection_count - computed: false, optional: true, required: false
  private _serviceWebMaxConnectionCount?: number; 
  public get serviceWebMaxConnectionCount() {
    return this.getNumberAttribute('service_web_max_connection_count');
  }
  public set serviceWebMaxConnectionCount(value: number) {
    this._serviceWebMaxConnectionCount = value;
  }
  public resetServiceWebMaxConnectionCount() {
    this._serviceWebMaxConnectionCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceWebMaxConnectionCountInput() {
    return this._serviceWebMaxConnectionCount;
  }

  // service_web_plain_text_enabled - computed: false, optional: true, required: false
  private _serviceWebPlainTextEnabled?: boolean | cdktf.IResolvable; 
  public get serviceWebPlainTextEnabled() {
    return this.getBooleanAttribute('service_web_plain_text_enabled');
  }
  public set serviceWebPlainTextEnabled(value: boolean | cdktf.IResolvable) {
    this._serviceWebPlainTextEnabled = value;
  }
  public resetServiceWebPlainTextEnabled() {
    this._serviceWebPlainTextEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceWebPlainTextEnabledInput() {
    return this._serviceWebPlainTextEnabled;
  }

  // service_web_tls_enabled - computed: false, optional: true, required: false
  private _serviceWebTlsEnabled?: boolean | cdktf.IResolvable; 
  public get serviceWebTlsEnabled() {
    return this.getBooleanAttribute('service_web_tls_enabled');
  }
  public set serviceWebTlsEnabled(value: boolean | cdktf.IResolvable) {
    this._serviceWebTlsEnabled = value;
  }
  public resetServiceWebTlsEnabled() {
    this._serviceWebTlsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceWebTlsEnabledInput() {
    return this._serviceWebTlsEnabled;
  }

  // tls_allow_downgrade_to_plain_text_enabled - computed: false, optional: true, required: false
  private _tlsAllowDowngradeToPlainTextEnabled?: boolean | cdktf.IResolvable; 
  public get tlsAllowDowngradeToPlainTextEnabled() {
    return this.getBooleanAttribute('tls_allow_downgrade_to_plain_text_enabled');
  }
  public set tlsAllowDowngradeToPlainTextEnabled(value: boolean | cdktf.IResolvable) {
    this._tlsAllowDowngradeToPlainTextEnabled = value;
  }
  public resetTlsAllowDowngradeToPlainTextEnabled() {
    this._tlsAllowDowngradeToPlainTextEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsAllowDowngradeToPlainTextEnabledInput() {
    return this._tlsAllowDowngradeToPlainTextEnabled;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      alias: cdktf.stringToTerraform(this._alias),
      authentication_basic_enabled: cdktf.booleanToTerraform(this._authenticationBasicEnabled),
      authentication_basic_profile_name: cdktf.stringToTerraform(this._authenticationBasicProfileName),
      authentication_basic_radius_domain: cdktf.stringToTerraform(this._authenticationBasicRadiusDomain),
      authentication_basic_type: cdktf.stringToTerraform(this._authenticationBasicType),
      authentication_client_cert_allow_api_provided_username_enabled: cdktf.booleanToTerraform(this._authenticationClientCertAllowApiProvidedUsernameEnabled),
      authentication_client_cert_certificate_matching_rules_enabled: cdktf.booleanToTerraform(this._authenticationClientCertCertificateMatchingRulesEnabled),
      authentication_client_cert_enabled: cdktf.booleanToTerraform(this._authenticationClientCertEnabled),
      authentication_client_cert_max_chain_depth: cdktf.numberToTerraform(this._authenticationClientCertMaxChainDepth),
      authentication_client_cert_revocation_check_mode: cdktf.stringToTerraform(this._authenticationClientCertRevocationCheckMode),
      authentication_client_cert_username_source: cdktf.stringToTerraform(this._authenticationClientCertUsernameSource),
      authentication_client_cert_validate_date_enabled: cdktf.booleanToTerraform(this._authenticationClientCertValidateDateEnabled),
      authentication_kerberos_allow_api_provided_username_enabled: cdktf.booleanToTerraform(this._authenticationKerberosAllowApiProvidedUsernameEnabled),
      authentication_kerberos_enabled: cdktf.booleanToTerraform(this._authenticationKerberosEnabled),
      authentication_oauth_default_profile_name: cdktf.stringToTerraform(this._authenticationOauthDefaultProfileName),
      authentication_oauth_enabled: cdktf.booleanToTerraform(this._authenticationOauthEnabled),
      authorization_ldap_group_membership_attribute_name: cdktf.stringToTerraform(this._authorizationLdapGroupMembershipAttributeName),
      authorization_ldap_trim_client_username_domain_enabled: cdktf.booleanToTerraform(this._authorizationLdapTrimClientUsernameDomainEnabled),
      authorization_profile_name: cdktf.stringToTerraform(this._authorizationProfileName),
      authorization_type: cdktf.stringToTerraform(this._authorizationType),
      bridging_tls_server_cert_max_chain_depth: cdktf.numberToTerraform(this._bridgingTlsServerCertMaxChainDepth),
      bridging_tls_server_cert_validate_date_enabled: cdktf.booleanToTerraform(this._bridgingTlsServerCertValidateDateEnabled),
      bridging_tls_server_cert_validate_name_enabled: cdktf.booleanToTerraform(this._bridgingTlsServerCertValidateNameEnabled),
      dmr_enabled: cdktf.booleanToTerraform(this._dmrEnabled),
      enabled: cdktf.booleanToTerraform(this._enabled),
      event_connection_count_threshold: msgVpnEventConnectionCountThresholdToTerraform(this._eventConnectionCountThreshold.internalValue),
      event_egress_flow_count_threshold: msgVpnEventEgressFlowCountThresholdToTerraform(this._eventEgressFlowCountThreshold.internalValue),
      event_egress_msg_rate_threshold: msgVpnEventEgressMsgRateThresholdToTerraform(this._eventEgressMsgRateThreshold.internalValue),
      event_endpoint_count_threshold: msgVpnEventEndpointCountThresholdToTerraform(this._eventEndpointCountThreshold.internalValue),
      event_ingress_flow_count_threshold: msgVpnEventIngressFlowCountThresholdToTerraform(this._eventIngressFlowCountThreshold.internalValue),
      event_ingress_msg_rate_threshold: msgVpnEventIngressMsgRateThresholdToTerraform(this._eventIngressMsgRateThreshold.internalValue),
      event_large_msg_threshold: cdktf.numberToTerraform(this._eventLargeMsgThreshold),
      event_log_tag: cdktf.stringToTerraform(this._eventLogTag),
      event_msg_spool_usage_threshold: msgVpnEventMsgSpoolUsageThresholdToTerraform(this._eventMsgSpoolUsageThreshold.internalValue),
      event_publish_client_enabled: cdktf.booleanToTerraform(this._eventPublishClientEnabled),
      event_publish_msg_vpn_enabled: cdktf.booleanToTerraform(this._eventPublishMsgVpnEnabled),
      event_publish_subscription_mode: cdktf.stringToTerraform(this._eventPublishSubscriptionMode),
      event_publish_topic_format_mqtt_enabled: cdktf.booleanToTerraform(this._eventPublishTopicFormatMqttEnabled),
      event_publish_topic_format_smf_enabled: cdktf.booleanToTerraform(this._eventPublishTopicFormatSmfEnabled),
      event_service_amqp_connection_count_threshold: msgVpnEventServiceAmqpConnectionCountThresholdToTerraform(this._eventServiceAmqpConnectionCountThreshold.internalValue),
      event_service_mqtt_connection_count_threshold: msgVpnEventServiceMqttConnectionCountThresholdToTerraform(this._eventServiceMqttConnectionCountThreshold.internalValue),
      event_service_rest_incoming_connection_count_threshold: msgVpnEventServiceRestIncomingConnectionCountThresholdToTerraform(this._eventServiceRestIncomingConnectionCountThreshold.internalValue),
      event_service_smf_connection_count_threshold: msgVpnEventServiceSmfConnectionCountThresholdToTerraform(this._eventServiceSmfConnectionCountThreshold.internalValue),
      event_service_web_connection_count_threshold: msgVpnEventServiceWebConnectionCountThresholdToTerraform(this._eventServiceWebConnectionCountThreshold.internalValue),
      event_subscription_count_threshold: msgVpnEventSubscriptionCountThresholdToTerraform(this._eventSubscriptionCountThreshold.internalValue),
      event_transacted_session_count_threshold: msgVpnEventTransactedSessionCountThresholdToTerraform(this._eventTransactedSessionCountThreshold.internalValue),
      event_transaction_count_threshold: msgVpnEventTransactionCountThresholdToTerraform(this._eventTransactionCountThreshold.internalValue),
      export_subscriptions_enabled: cdktf.booleanToTerraform(this._exportSubscriptionsEnabled),
      jndi_enabled: cdktf.booleanToTerraform(this._jndiEnabled),
      max_connection_count: cdktf.numberToTerraform(this._maxConnectionCount),
      max_egress_flow_count: cdktf.numberToTerraform(this._maxEgressFlowCount),
      max_endpoint_count: cdktf.numberToTerraform(this._maxEndpointCount),
      max_ingress_flow_count: cdktf.numberToTerraform(this._maxIngressFlowCount),
      max_kafka_broker_connection_count: cdktf.numberToTerraform(this._maxKafkaBrokerConnectionCount),
      max_msg_spool_usage: cdktf.numberToTerraform(this._maxMsgSpoolUsage),
      max_subscription_count: cdktf.numberToTerraform(this._maxSubscriptionCount),
      max_transacted_session_count: cdktf.numberToTerraform(this._maxTransactedSessionCount),
      max_transaction_count: cdktf.numberToTerraform(this._maxTransactionCount),
      mqtt_retain_max_memory: cdktf.numberToTerraform(this._mqttRetainMaxMemory),
      msg_vpn_name: cdktf.stringToTerraform(this._msgVpnName),
      replication_ack_propagation_interval_msg_count: cdktf.numberToTerraform(this._replicationAckPropagationIntervalMsgCount),
      replication_bridge_authentication_basic_client_username: cdktf.stringToTerraform(this._replicationBridgeAuthenticationBasicClientUsername),
      replication_bridge_authentication_basic_password: cdktf.stringToTerraform(this._replicationBridgeAuthenticationBasicPassword),
      replication_bridge_authentication_client_cert_content: cdktf.stringToTerraform(this._replicationBridgeAuthenticationClientCertContent),
      replication_bridge_authentication_client_cert_password: cdktf.stringToTerraform(this._replicationBridgeAuthenticationClientCertPassword),
      replication_bridge_authentication_scheme: cdktf.stringToTerraform(this._replicationBridgeAuthenticationScheme),
      replication_bridge_compressed_data_enabled: cdktf.booleanToTerraform(this._replicationBridgeCompressedDataEnabled),
      replication_bridge_egress_flow_window_size: cdktf.numberToTerraform(this._replicationBridgeEgressFlowWindowSize),
      replication_bridge_retry_delay: cdktf.numberToTerraform(this._replicationBridgeRetryDelay),
      replication_bridge_tls_enabled: cdktf.booleanToTerraform(this._replicationBridgeTlsEnabled),
      replication_bridge_unidirectional_client_profile_name: cdktf.stringToTerraform(this._replicationBridgeUnidirectionalClientProfileName),
      replication_enabled: cdktf.booleanToTerraform(this._replicationEnabled),
      replication_enabled_queue_behavior: cdktf.stringToTerraform(this._replicationEnabledQueueBehavior),
      replication_queue_max_msg_spool_usage: cdktf.numberToTerraform(this._replicationQueueMaxMsgSpoolUsage),
      replication_queue_reject_msg_to_sender_on_discard_enabled: cdktf.booleanToTerraform(this._replicationQueueRejectMsgToSenderOnDiscardEnabled),
      replication_reject_msg_when_sync_ineligible_enabled: cdktf.booleanToTerraform(this._replicationRejectMsgWhenSyncIneligibleEnabled),
      replication_role: cdktf.stringToTerraform(this._replicationRole),
      replication_transaction_mode: cdktf.stringToTerraform(this._replicationTransactionMode),
      rest_tls_server_cert_max_chain_depth: cdktf.numberToTerraform(this._restTlsServerCertMaxChainDepth),
      rest_tls_server_cert_validate_date_enabled: cdktf.booleanToTerraform(this._restTlsServerCertValidateDateEnabled),
      rest_tls_server_cert_validate_name_enabled: cdktf.booleanToTerraform(this._restTlsServerCertValidateNameEnabled),
      semp_over_msg_bus_admin_client_enabled: cdktf.booleanToTerraform(this._sempOverMsgBusAdminClientEnabled),
      semp_over_msg_bus_admin_distributed_cache_enabled: cdktf.booleanToTerraform(this._sempOverMsgBusAdminDistributedCacheEnabled),
      semp_over_msg_bus_admin_enabled: cdktf.booleanToTerraform(this._sempOverMsgBusAdminEnabled),
      semp_over_msg_bus_enabled: cdktf.booleanToTerraform(this._sempOverMsgBusEnabled),
      semp_over_msg_bus_show_enabled: cdktf.booleanToTerraform(this._sempOverMsgBusShowEnabled),
      service_amqp_max_connection_count: cdktf.numberToTerraform(this._serviceAmqpMaxConnectionCount),
      service_amqp_plain_text_enabled: cdktf.booleanToTerraform(this._serviceAmqpPlainTextEnabled),
      service_amqp_plain_text_listen_port: cdktf.numberToTerraform(this._serviceAmqpPlainTextListenPort),
      service_amqp_tls_enabled: cdktf.booleanToTerraform(this._serviceAmqpTlsEnabled),
      service_amqp_tls_listen_port: cdktf.numberToTerraform(this._serviceAmqpTlsListenPort),
      service_mqtt_authentication_client_cert_request: cdktf.stringToTerraform(this._serviceMqttAuthenticationClientCertRequest),
      service_mqtt_max_connection_count: cdktf.numberToTerraform(this._serviceMqttMaxConnectionCount),
      service_mqtt_plain_text_enabled: cdktf.booleanToTerraform(this._serviceMqttPlainTextEnabled),
      service_mqtt_plain_text_listen_port: cdktf.numberToTerraform(this._serviceMqttPlainTextListenPort),
      service_mqtt_tls_enabled: cdktf.booleanToTerraform(this._serviceMqttTlsEnabled),
      service_mqtt_tls_listen_port: cdktf.numberToTerraform(this._serviceMqttTlsListenPort),
      service_mqtt_tls_web_socket_enabled: cdktf.booleanToTerraform(this._serviceMqttTlsWebSocketEnabled),
      service_mqtt_tls_web_socket_listen_port: cdktf.numberToTerraform(this._serviceMqttTlsWebSocketListenPort),
      service_mqtt_web_socket_enabled: cdktf.booleanToTerraform(this._serviceMqttWebSocketEnabled),
      service_mqtt_web_socket_listen_port: cdktf.numberToTerraform(this._serviceMqttWebSocketListenPort),
      service_rest_incoming_authentication_client_cert_request: cdktf.stringToTerraform(this._serviceRestIncomingAuthenticationClientCertRequest),
      service_rest_incoming_authorization_header_handling: cdktf.stringToTerraform(this._serviceRestIncomingAuthorizationHeaderHandling),
      service_rest_incoming_max_connection_count: cdktf.numberToTerraform(this._serviceRestIncomingMaxConnectionCount),
      service_rest_incoming_plain_text_enabled: cdktf.booleanToTerraform(this._serviceRestIncomingPlainTextEnabled),
      service_rest_incoming_plain_text_listen_port: cdktf.numberToTerraform(this._serviceRestIncomingPlainTextListenPort),
      service_rest_incoming_tls_enabled: cdktf.booleanToTerraform(this._serviceRestIncomingTlsEnabled),
      service_rest_incoming_tls_listen_port: cdktf.numberToTerraform(this._serviceRestIncomingTlsListenPort),
      service_rest_mode: cdktf.stringToTerraform(this._serviceRestMode),
      service_rest_outgoing_max_connection_count: cdktf.numberToTerraform(this._serviceRestOutgoingMaxConnectionCount),
      service_smf_max_connection_count: cdktf.numberToTerraform(this._serviceSmfMaxConnectionCount),
      service_smf_plain_text_enabled: cdktf.booleanToTerraform(this._serviceSmfPlainTextEnabled),
      service_smf_tls_enabled: cdktf.booleanToTerraform(this._serviceSmfTlsEnabled),
      service_web_authentication_client_cert_request: cdktf.stringToTerraform(this._serviceWebAuthenticationClientCertRequest),
      service_web_max_connection_count: cdktf.numberToTerraform(this._serviceWebMaxConnectionCount),
      service_web_plain_text_enabled: cdktf.booleanToTerraform(this._serviceWebPlainTextEnabled),
      service_web_tls_enabled: cdktf.booleanToTerraform(this._serviceWebTlsEnabled),
      tls_allow_downgrade_to_plain_text_enabled: cdktf.booleanToTerraform(this._tlsAllowDowngradeToPlainTextEnabled),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      alias: {
        value: cdktf.stringToHclTerraform(this._alias),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      authentication_basic_enabled: {
        value: cdktf.booleanToHclTerraform(this._authenticationBasicEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      authentication_basic_profile_name: {
        value: cdktf.stringToHclTerraform(this._authenticationBasicProfileName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      authentication_basic_radius_domain: {
        value: cdktf.stringToHclTerraform(this._authenticationBasicRadiusDomain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      authentication_basic_type: {
        value: cdktf.stringToHclTerraform(this._authenticationBasicType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      authentication_client_cert_allow_api_provided_username_enabled: {
        value: cdktf.booleanToHclTerraform(this._authenticationClientCertAllowApiProvidedUsernameEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      authentication_client_cert_certificate_matching_rules_enabled: {
        value: cdktf.booleanToHclTerraform(this._authenticationClientCertCertificateMatchingRulesEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      authentication_client_cert_enabled: {
        value: cdktf.booleanToHclTerraform(this._authenticationClientCertEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      authentication_client_cert_max_chain_depth: {
        value: cdktf.numberToHclTerraform(this._authenticationClientCertMaxChainDepth),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      authentication_client_cert_revocation_check_mode: {
        value: cdktf.stringToHclTerraform(this._authenticationClientCertRevocationCheckMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      authentication_client_cert_username_source: {
        value: cdktf.stringToHclTerraform(this._authenticationClientCertUsernameSource),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      authentication_client_cert_validate_date_enabled: {
        value: cdktf.booleanToHclTerraform(this._authenticationClientCertValidateDateEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      authentication_kerberos_allow_api_provided_username_enabled: {
        value: cdktf.booleanToHclTerraform(this._authenticationKerberosAllowApiProvidedUsernameEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      authentication_kerberos_enabled: {
        value: cdktf.booleanToHclTerraform(this._authenticationKerberosEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      authentication_oauth_default_profile_name: {
        value: cdktf.stringToHclTerraform(this._authenticationOauthDefaultProfileName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      authentication_oauth_enabled: {
        value: cdktf.booleanToHclTerraform(this._authenticationOauthEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      authorization_ldap_group_membership_attribute_name: {
        value: cdktf.stringToHclTerraform(this._authorizationLdapGroupMembershipAttributeName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      authorization_ldap_trim_client_username_domain_enabled: {
        value: cdktf.booleanToHclTerraform(this._authorizationLdapTrimClientUsernameDomainEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      authorization_profile_name: {
        value: cdktf.stringToHclTerraform(this._authorizationProfileName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      authorization_type: {
        value: cdktf.stringToHclTerraform(this._authorizationType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bridging_tls_server_cert_max_chain_depth: {
        value: cdktf.numberToHclTerraform(this._bridgingTlsServerCertMaxChainDepth),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      bridging_tls_server_cert_validate_date_enabled: {
        value: cdktf.booleanToHclTerraform(this._bridgingTlsServerCertValidateDateEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      bridging_tls_server_cert_validate_name_enabled: {
        value: cdktf.booleanToHclTerraform(this._bridgingTlsServerCertValidateNameEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      dmr_enabled: {
        value: cdktf.booleanToHclTerraform(this._dmrEnabled),
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
      event_connection_count_threshold: {
        value: msgVpnEventConnectionCountThresholdToHclTerraform(this._eventConnectionCountThreshold.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "MsgVpnEventConnectionCountThreshold",
      },
      event_egress_flow_count_threshold: {
        value: msgVpnEventEgressFlowCountThresholdToHclTerraform(this._eventEgressFlowCountThreshold.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "MsgVpnEventEgressFlowCountThreshold",
      },
      event_egress_msg_rate_threshold: {
        value: msgVpnEventEgressMsgRateThresholdToHclTerraform(this._eventEgressMsgRateThreshold.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "MsgVpnEventEgressMsgRateThreshold",
      },
      event_endpoint_count_threshold: {
        value: msgVpnEventEndpointCountThresholdToHclTerraform(this._eventEndpointCountThreshold.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "MsgVpnEventEndpointCountThreshold",
      },
      event_ingress_flow_count_threshold: {
        value: msgVpnEventIngressFlowCountThresholdToHclTerraform(this._eventIngressFlowCountThreshold.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "MsgVpnEventIngressFlowCountThreshold",
      },
      event_ingress_msg_rate_threshold: {
        value: msgVpnEventIngressMsgRateThresholdToHclTerraform(this._eventIngressMsgRateThreshold.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "MsgVpnEventIngressMsgRateThreshold",
      },
      event_large_msg_threshold: {
        value: cdktf.numberToHclTerraform(this._eventLargeMsgThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      event_log_tag: {
        value: cdktf.stringToHclTerraform(this._eventLogTag),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      event_msg_spool_usage_threshold: {
        value: msgVpnEventMsgSpoolUsageThresholdToHclTerraform(this._eventMsgSpoolUsageThreshold.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "MsgVpnEventMsgSpoolUsageThreshold",
      },
      event_publish_client_enabled: {
        value: cdktf.booleanToHclTerraform(this._eventPublishClientEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      event_publish_msg_vpn_enabled: {
        value: cdktf.booleanToHclTerraform(this._eventPublishMsgVpnEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      event_publish_subscription_mode: {
        value: cdktf.stringToHclTerraform(this._eventPublishSubscriptionMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      event_publish_topic_format_mqtt_enabled: {
        value: cdktf.booleanToHclTerraform(this._eventPublishTopicFormatMqttEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      event_publish_topic_format_smf_enabled: {
        value: cdktf.booleanToHclTerraform(this._eventPublishTopicFormatSmfEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      event_service_amqp_connection_count_threshold: {
        value: msgVpnEventServiceAmqpConnectionCountThresholdToHclTerraform(this._eventServiceAmqpConnectionCountThreshold.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "MsgVpnEventServiceAmqpConnectionCountThreshold",
      },
      event_service_mqtt_connection_count_threshold: {
        value: msgVpnEventServiceMqttConnectionCountThresholdToHclTerraform(this._eventServiceMqttConnectionCountThreshold.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "MsgVpnEventServiceMqttConnectionCountThreshold",
      },
      event_service_rest_incoming_connection_count_threshold: {
        value: msgVpnEventServiceRestIncomingConnectionCountThresholdToHclTerraform(this._eventServiceRestIncomingConnectionCountThreshold.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "MsgVpnEventServiceRestIncomingConnectionCountThreshold",
      },
      event_service_smf_connection_count_threshold: {
        value: msgVpnEventServiceSmfConnectionCountThresholdToHclTerraform(this._eventServiceSmfConnectionCountThreshold.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "MsgVpnEventServiceSmfConnectionCountThreshold",
      },
      event_service_web_connection_count_threshold: {
        value: msgVpnEventServiceWebConnectionCountThresholdToHclTerraform(this._eventServiceWebConnectionCountThreshold.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "MsgVpnEventServiceWebConnectionCountThreshold",
      },
      event_subscription_count_threshold: {
        value: msgVpnEventSubscriptionCountThresholdToHclTerraform(this._eventSubscriptionCountThreshold.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "MsgVpnEventSubscriptionCountThreshold",
      },
      event_transacted_session_count_threshold: {
        value: msgVpnEventTransactedSessionCountThresholdToHclTerraform(this._eventTransactedSessionCountThreshold.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "MsgVpnEventTransactedSessionCountThreshold",
      },
      event_transaction_count_threshold: {
        value: msgVpnEventTransactionCountThresholdToHclTerraform(this._eventTransactionCountThreshold.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "MsgVpnEventTransactionCountThreshold",
      },
      export_subscriptions_enabled: {
        value: cdktf.booleanToHclTerraform(this._exportSubscriptionsEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      jndi_enabled: {
        value: cdktf.booleanToHclTerraform(this._jndiEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      max_connection_count: {
        value: cdktf.numberToHclTerraform(this._maxConnectionCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_egress_flow_count: {
        value: cdktf.numberToHclTerraform(this._maxEgressFlowCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_endpoint_count: {
        value: cdktf.numberToHclTerraform(this._maxEndpointCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_ingress_flow_count: {
        value: cdktf.numberToHclTerraform(this._maxIngressFlowCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_kafka_broker_connection_count: {
        value: cdktf.numberToHclTerraform(this._maxKafkaBrokerConnectionCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_msg_spool_usage: {
        value: cdktf.numberToHclTerraform(this._maxMsgSpoolUsage),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_subscription_count: {
        value: cdktf.numberToHclTerraform(this._maxSubscriptionCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_transacted_session_count: {
        value: cdktf.numberToHclTerraform(this._maxTransactedSessionCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_transaction_count: {
        value: cdktf.numberToHclTerraform(this._maxTransactionCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      mqtt_retain_max_memory: {
        value: cdktf.numberToHclTerraform(this._mqttRetainMaxMemory),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      msg_vpn_name: {
        value: cdktf.stringToHclTerraform(this._msgVpnName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      replication_ack_propagation_interval_msg_count: {
        value: cdktf.numberToHclTerraform(this._replicationAckPropagationIntervalMsgCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      replication_bridge_authentication_basic_client_username: {
        value: cdktf.stringToHclTerraform(this._replicationBridgeAuthenticationBasicClientUsername),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      replication_bridge_authentication_basic_password: {
        value: cdktf.stringToHclTerraform(this._replicationBridgeAuthenticationBasicPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      replication_bridge_authentication_client_cert_content: {
        value: cdktf.stringToHclTerraform(this._replicationBridgeAuthenticationClientCertContent),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      replication_bridge_authentication_client_cert_password: {
        value: cdktf.stringToHclTerraform(this._replicationBridgeAuthenticationClientCertPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      replication_bridge_authentication_scheme: {
        value: cdktf.stringToHclTerraform(this._replicationBridgeAuthenticationScheme),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      replication_bridge_compressed_data_enabled: {
        value: cdktf.booleanToHclTerraform(this._replicationBridgeCompressedDataEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      replication_bridge_egress_flow_window_size: {
        value: cdktf.numberToHclTerraform(this._replicationBridgeEgressFlowWindowSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      replication_bridge_retry_delay: {
        value: cdktf.numberToHclTerraform(this._replicationBridgeRetryDelay),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      replication_bridge_tls_enabled: {
        value: cdktf.booleanToHclTerraform(this._replicationBridgeTlsEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      replication_bridge_unidirectional_client_profile_name: {
        value: cdktf.stringToHclTerraform(this._replicationBridgeUnidirectionalClientProfileName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      replication_enabled: {
        value: cdktf.booleanToHclTerraform(this._replicationEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      replication_enabled_queue_behavior: {
        value: cdktf.stringToHclTerraform(this._replicationEnabledQueueBehavior),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      replication_queue_max_msg_spool_usage: {
        value: cdktf.numberToHclTerraform(this._replicationQueueMaxMsgSpoolUsage),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      replication_queue_reject_msg_to_sender_on_discard_enabled: {
        value: cdktf.booleanToHclTerraform(this._replicationQueueRejectMsgToSenderOnDiscardEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      replication_reject_msg_when_sync_ineligible_enabled: {
        value: cdktf.booleanToHclTerraform(this._replicationRejectMsgWhenSyncIneligibleEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      replication_role: {
        value: cdktf.stringToHclTerraform(this._replicationRole),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      replication_transaction_mode: {
        value: cdktf.stringToHclTerraform(this._replicationTransactionMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rest_tls_server_cert_max_chain_depth: {
        value: cdktf.numberToHclTerraform(this._restTlsServerCertMaxChainDepth),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      rest_tls_server_cert_validate_date_enabled: {
        value: cdktf.booleanToHclTerraform(this._restTlsServerCertValidateDateEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      rest_tls_server_cert_validate_name_enabled: {
        value: cdktf.booleanToHclTerraform(this._restTlsServerCertValidateNameEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      semp_over_msg_bus_admin_client_enabled: {
        value: cdktf.booleanToHclTerraform(this._sempOverMsgBusAdminClientEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      semp_over_msg_bus_admin_distributed_cache_enabled: {
        value: cdktf.booleanToHclTerraform(this._sempOverMsgBusAdminDistributedCacheEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      semp_over_msg_bus_admin_enabled: {
        value: cdktf.booleanToHclTerraform(this._sempOverMsgBusAdminEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      semp_over_msg_bus_enabled: {
        value: cdktf.booleanToHclTerraform(this._sempOverMsgBusEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      semp_over_msg_bus_show_enabled: {
        value: cdktf.booleanToHclTerraform(this._sempOverMsgBusShowEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      service_amqp_max_connection_count: {
        value: cdktf.numberToHclTerraform(this._serviceAmqpMaxConnectionCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      service_amqp_plain_text_enabled: {
        value: cdktf.booleanToHclTerraform(this._serviceAmqpPlainTextEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      service_amqp_plain_text_listen_port: {
        value: cdktf.numberToHclTerraform(this._serviceAmqpPlainTextListenPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      service_amqp_tls_enabled: {
        value: cdktf.booleanToHclTerraform(this._serviceAmqpTlsEnabled),
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
      service_mqtt_authentication_client_cert_request: {
        value: cdktf.stringToHclTerraform(this._serviceMqttAuthenticationClientCertRequest),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_mqtt_max_connection_count: {
        value: cdktf.numberToHclTerraform(this._serviceMqttMaxConnectionCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      service_mqtt_plain_text_enabled: {
        value: cdktf.booleanToHclTerraform(this._serviceMqttPlainTextEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      service_mqtt_plain_text_listen_port: {
        value: cdktf.numberToHclTerraform(this._serviceMqttPlainTextListenPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      service_mqtt_tls_enabled: {
        value: cdktf.booleanToHclTerraform(this._serviceMqttTlsEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      service_mqtt_tls_listen_port: {
        value: cdktf.numberToHclTerraform(this._serviceMqttTlsListenPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      service_mqtt_tls_web_socket_enabled: {
        value: cdktf.booleanToHclTerraform(this._serviceMqttTlsWebSocketEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      service_mqtt_tls_web_socket_listen_port: {
        value: cdktf.numberToHclTerraform(this._serviceMqttTlsWebSocketListenPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      service_mqtt_web_socket_enabled: {
        value: cdktf.booleanToHclTerraform(this._serviceMqttWebSocketEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      service_mqtt_web_socket_listen_port: {
        value: cdktf.numberToHclTerraform(this._serviceMqttWebSocketListenPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      service_rest_incoming_authentication_client_cert_request: {
        value: cdktf.stringToHclTerraform(this._serviceRestIncomingAuthenticationClientCertRequest),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_rest_incoming_authorization_header_handling: {
        value: cdktf.stringToHclTerraform(this._serviceRestIncomingAuthorizationHeaderHandling),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_rest_incoming_max_connection_count: {
        value: cdktf.numberToHclTerraform(this._serviceRestIncomingMaxConnectionCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      service_rest_incoming_plain_text_enabled: {
        value: cdktf.booleanToHclTerraform(this._serviceRestIncomingPlainTextEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      service_rest_incoming_plain_text_listen_port: {
        value: cdktf.numberToHclTerraform(this._serviceRestIncomingPlainTextListenPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      service_rest_incoming_tls_enabled: {
        value: cdktf.booleanToHclTerraform(this._serviceRestIncomingTlsEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      service_rest_incoming_tls_listen_port: {
        value: cdktf.numberToHclTerraform(this._serviceRestIncomingTlsListenPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      service_rest_mode: {
        value: cdktf.stringToHclTerraform(this._serviceRestMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_rest_outgoing_max_connection_count: {
        value: cdktf.numberToHclTerraform(this._serviceRestOutgoingMaxConnectionCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      service_smf_max_connection_count: {
        value: cdktf.numberToHclTerraform(this._serviceSmfMaxConnectionCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      service_smf_plain_text_enabled: {
        value: cdktf.booleanToHclTerraform(this._serviceSmfPlainTextEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      service_smf_tls_enabled: {
        value: cdktf.booleanToHclTerraform(this._serviceSmfTlsEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      service_web_authentication_client_cert_request: {
        value: cdktf.stringToHclTerraform(this._serviceWebAuthenticationClientCertRequest),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_web_max_connection_count: {
        value: cdktf.numberToHclTerraform(this._serviceWebMaxConnectionCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      service_web_plain_text_enabled: {
        value: cdktf.booleanToHclTerraform(this._serviceWebPlainTextEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      service_web_tls_enabled: {
        value: cdktf.booleanToHclTerraform(this._serviceWebTlsEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      tls_allow_downgrade_to_plain_text_enabled: {
        value: cdktf.booleanToHclTerraform(this._tlsAllowDowngradeToPlainTextEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
