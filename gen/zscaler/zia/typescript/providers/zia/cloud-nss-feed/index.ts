// https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/cloud_nss_feed
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudNssFeedConfig extends cdktf.TerraformMetaArguments {
  /**
  * Policy action filter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/cloud_nss_feed#action_filter CloudNssFeed#action_filter}
  */
  readonly actionFilter?: string;
  /**
  * CASB activity filter
  * 				See the [Cloud Nanolog Streaming Service (NSS) documentation
  * 				https://help.zscaler.com/zia/cloud-nanolog-streaming-service-nss#/nssFeeds-get
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/cloud_nss_feed#activity CloudNssFeed#activity}
  */
  readonly activity?: string[];
  /**
  * Filter based on custom user agent strings
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/cloud_nss_feed#adv_user_agents CloudNssFeed#adv_user_agents}
  */
  readonly advUserAgents?: string[];
  /**
  * Advanced threats filter
  * 				See the [Cloud Nanolog Streaming Service (NSS) documentation
  * 				https://help.zscaler.com/zia/cloud-nanolog-streaming-service-nss#/nssFeeds-get
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/cloud_nss_feed#advanced_threats CloudNssFeed#advanced_threats}
  */
  readonly advancedThreats?: string[];
  /**
  * Alert filter
  * 				Supported Values: CRITICAL, WARN
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/cloud_nss_feed#alerts CloudNssFeed#alerts}
  */
  readonly alerts?: string[];
  /**
  * Audit log type filter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/cloud_nss_feed#audit_log_type CloudNssFeed#audit_log_type}
  */
  readonly auditLogType?: string[];
  /**
  * The authentication token value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/cloud_nss_feed#authentication_token CloudNssFeed#authentication_token}
  */
  readonly authenticationToken?: string;
  /**
  * Authentication URL applicable when SIEM type is set to Azure Sentinel
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/cloud_nss_feed#authentication_url CloudNssFeed#authentication_url}
  */
  readonly authenticationUrl?: string;
  /**
  * Base64-encoded certificate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/cloud_nss_feed#base64_encoded_certificate CloudNssFeed#base64_encoded_certificate}
  */
  readonly base64EncodedCertificate?: string;
  /**
  * CASB policy action filter
  * 				See the [Cloud Nanolog Streaming Service (NSS) documentation
  * 				https://help.zscaler.com/zia/cloud-nanolog-streaming-service-nss#/nssFeeds-get
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/cloud_nss_feed#casb_action CloudNssFeed#casb_action}
  */
  readonly casbAction?: string[];
  /**
  * CASB application filter
  * 				See the [Cloud Nanolog Streaming Service (NSS) documentation
  * 				https://help.zscaler.com/zia/cloud-nanolog-streaming-service-nss#/nssFeeds-get
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/cloud_nss_feed#casb_applications CloudNssFeed#casb_applications}
  */
  readonly casbApplications?: string[];
  /**
  * Endpoint DLP file type filter
  * 				See the [Cloud Nanolog Streaming Service (NSS) documentation
  * 				https://help.zscaler.com/zia/cloud-nanolog-streaming-service-nss#/nssFeeds-get
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/cloud_nss_feed#casb_file_type CloudNssFeed#casb_file_type}
  */
  readonly casbFileType?: string[];
  /**
  * Endpoint DLP file type category filter
  * 				See the [Cloud Nanolog Streaming Service (NSS) documentation
  * 				https://help.zscaler.com/zia/cloud-nanolog-streaming-service-nss#/nssFeeds-get
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/cloud_nss_feed#casb_file_type_super_categories CloudNssFeed#casb_file_type_super_categories}
  */
  readonly casbFileTypeSuperCategories?: string[];
  /**
  * CASB policy type filter
  * 				Supported Values: MALWARE, DLP, ALL_INCIDENT
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/cloud_nss_feed#casb_policy_types CloudNssFeed#casb_policy_types}
  */
  readonly casbPolicyTypes?: string[];
  /**
  * Zscaler's Cloud Access Security Broker (CASB) severity filter
  * 				Supported Values: RULE_SEVERITY_HIGH, RULE_SEVERITY_MEDIUM, RULE_SEVERITY_LOW, RULE_SEVERITY_INFO
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/cloud_nss_feed#casb_severity CloudNssFeed#casb_severity}
  */
  readonly casbSeverity?: string[];
  /**
  * Collaboration channel name filter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/cloud_nss_feed#channel_name CloudNssFeed#channel_name}
  */
  readonly channelName?: string[];
  /**
  * Client's destination IPv4 addresses in Firewall policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/cloud_nss_feed#client_destination_ips CloudNssFeed#client_destination_ips}
  */
  readonly clientDestinationIps?: string[];
  /**
  * Firewall logs filter based on a client's destination
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/cloud_nss_feed#client_destination_ports CloudNssFeed#client_destination_ports}
  */
  readonly clientDestinationPorts?: string[];
  /**
  * Client ID applicable when SIEM type is set to S3 or Azure Sentinel
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/cloud_nss_feed#client_id CloudNssFeed#client_id}
  */
  readonly clientId?: string;
  /**
  * Filter to limit the logs based on a client's public IPv4 addresses
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/cloud_nss_feed#client_ips CloudNssFeed#client_ips}
  */
  readonly clientIps?: string[];
  /**
  * Client secret applicable when SIEM type is set to S3 or Azure Sentinel
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/cloud_nss_feed#client_secret CloudNssFeed#client_secret}
  */
  readonly clientSecret?: string;
  /**
  * Client source IPs configured for NSS feed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/cloud_nss_feed#client_source_ips CloudNssFeed#client_source_ips}
  */
  readonly clientSourceIps?: string[];
  /**
  * Firewall log filter based on a client's source ports
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/cloud_nss_feed#client_source_ports CloudNssFeed#client_source_ports}
  */
  readonly clientSourcePorts?: string[];
  /**
  * The HTTP Connection headers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/cloud_nss_feed#connection_headers CloudNssFeed#connection_headers}
  */
  readonly connectionHeaders?: string[];
  /**
  * The HTTPS URL of the SIEM log collection API endpoint
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/cloud_nss_feed#connection_url CloudNssFeed#connection_url}
  */
  readonly connectionUrl?: string;
  /**
  * Countries filter in the Firewall policy
  * 				See the [Cloud Nanolog Streaming Service (NSS) documentation
  * 				https://help.zscaler.com/zia/cloud-nanolog-streaming-service-nss#/nssFeeds-get
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/cloud_nss_feed#countries CloudNssFeed#countries}
  */
  readonly countries?: string[];
  /**
  * Characters that need to be encoded using hex when they appear in URL, Host, or Referrer
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/cloud_nss_feed#custom_escaped_character CloudNssFeed#custom_escaped_character}
  */
  readonly customEscapedCharacter?: string[];
  /**
  * Traffic direction filter specifying inbound or outbound
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/cloud_nss_feed#direction CloudNssFeed#direction}
  */
  readonly direction?: string;
  /**
  * DNS Control policy action filter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/cloud_nss_feed#dns_actions CloudNssFeed#dns_actions}
  */
  readonly dnsActions?: string[];
  /**
  * DNS request types included in the feed
  * 				Supported Values: ANY, NONE, DNSREQ_A, DNSREQ_NS, DNSREQ_CNAME, DNSREQ_SOA, DNSREQ_WKS,
  * 				DNSREQ_PTR, DNSREQ_HINFO, DNSREQ_MINFO, DNSREQ_MX, DNSREQ_TXT, DNSREQ_AAAA,
  * 				DNSREQ_ISDN, DNSREQ_LOC, DNSREQ_RP, DNSREQ_RT, DNSREQ_MR, DNSREQ_MG,
  * 				DNSREQ_MB, DNSREQ_AFSDB, DNSREQ_HIP, DNSREQ_SRV, DNSREQ_DS, DNSREQ_NAPTR,
  * 				DNSREQ_NSEC, DNSREQ_DNSKEY, DNSREQ_HTTPS, DNSREQ_UNKNOWN
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/cloud_nss_feed#dns_request_types CloudNssFeed#dns_request_types}
  */
  readonly dnsRequestTypes?: string[];
  /**
  * DNS response types filter
  * 				Supported Values: ANY, DNSRES_ZSCODE, DNSRES_CNAME, DNSRES_IPV6, DNSRES_SRV_CODE, DNSRES_IPV4
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/cloud_nss_feed#dns_response_types CloudNssFeed#dns_response_types}
  */
  readonly dnsResponseTypes?: string[];
  /**
  * DNS responses filter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/cloud_nss_feed#dns_responses CloudNssFeed#dns_responses}
  */
  readonly dnsResponses?: string[];
  /**
  * Filter to limit the logs to sessions associated with specific domains
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/cloud_nss_feed#domains CloudNssFeed#domains}
  */
  readonly domains?: string[];
  /**
  * Download time filter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/cloud_nss_feed#download_time CloudNssFeed#download_time}
  */
  readonly downloadTime?: string[];
  /**
  * Filter based on time durations
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/cloud_nss_feed#durations CloudNssFeed#durations}
  */
  readonly durations?: string[];
  /**
  * Email DLP record type filter
  * 				Supported Values: EPDLP_SCAN_AGGREGATE, EPDLP_SENSITIVE_ACTIVITY, EPDLP_DLP_INCIDENT
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/cloud_nss_feed#email_dlp_log_type CloudNssFeed#email_dlp_log_type}
  */
  readonly emailDlpLogType?: string[];
  /**
  * Action filter for Email DLP log type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/cloud_nss_feed#email_dlp_policy_action CloudNssFeed#email_dlp_policy_action}
  */
  readonly emailDlpPolicyAction?: string;
  /**
  * Endpoint DLP log type filter
  * 				See the [Cloud Nanolog Streaming Service (NSS) documentation
  * 				https://help.zscaler.com/zia/cloud-nanolog-streaming-service-nss#/nssFeeds-get
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/cloud_nss_feed#end_point_dlp_log_type CloudNssFeed#end_point_dlp_log_type}
  */
  readonly endPointDlpLogType?: string[];
  /**
  * Event per second limit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/cloud_nss_feed#eps_rate_limit CloudNssFeed#eps_rate_limit}
  */
  readonly epsRateLimit?: number;
  /**
  * CASB event filter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/cloud_nss_feed#event CloudNssFeed#event}
  */
  readonly event?: string;
  /**
  * Output format used for the feed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/cloud_nss_feed#feed_output_format CloudNssFeed#feed_output_format}
  */
  readonly feedOutputFormat?: string;
  /**
  * The status of the feed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/cloud_nss_feed#feed_status CloudNssFeed#feed_status}
  */
  readonly feedStatus?: string;
  /**
  * Filter based on the file name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/cloud_nss_feed#file_name CloudNssFeed#file_name}
  */
  readonly fileName?: string[];
  /**
  * File size filter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/cloud_nss_feed#file_sizes CloudNssFeed#file_sizes}
  */
  readonly fileSizes?: string[];
  /**
  * Filter based on the file source
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/cloud_nss_feed#file_source CloudNssFeed#file_source}
  */
  readonly fileSource?: string[];
  /**
  * Filter based on the file type in download
  * 				See the [Cloud Nanolog Streaming Service (NSS) documentation
  * 				https://help.zscaler.com/zia/cloud-nanolog-streaming-service-nss#/nssFeeds-get
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/cloud_nss_feed#file_type_categories CloudNssFeed#file_type_categories}
  */
  readonly fileTypeCategories?: string[];
  /**
  * Filter based on the category of file type in download
  * 				See the [Cloud Nanolog Streaming Service (NSS) documentation
  * 				https://help.zscaler.com/zia/cloud-nanolog-streaming-service-nss#/nssFeeds-get
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/cloud_nss_feed#file_type_super_categories CloudNssFeed#file_type_super_categories}
  */
  readonly fileTypeSuperCategories?: string[];
  /**
  * Firewall actions included in the NSS feed
  * 				Supported Values: BLOCK,ALLOW,BLOCK_DROP,BLOCK_RESET,BLOCK_ICMP,COUNTRY_BLOCK
  * 				IPS_BLOCK_DROP,IPS_BLOCK_RESET,ALLOW_INSUFFICIENT_APPDATA,
  * 				BLOCK_ABUSE_DROP,INT_ERR_DROP,CFG_BYPASSED,CFG_TIMEDOUT
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/cloud_nss_feed#firewall_actions CloudNssFeed#firewall_actions}
  */
  readonly firewallActions?: string[];
  /**
  * Filter based on the Firewall Filtering policy logging mode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/cloud_nss_feed#firewall_logging_mode CloudNssFeed#firewall_logging_mode}
  */
  readonly firewallLoggingMode?: string;
  /**
  * Filter to limit the logs based on specific full URLs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/cloud_nss_feed#full_urls CloudNssFeed#full_urls}
  */
  readonly fullUrls?: string[];
  /**
  * Grant type applicable when SIEM type is set to Azure Sentinel
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/cloud_nss_feed#grant_type CloudNssFeed#grant_type}
  */
  readonly grantType?: string;
  /**
  * Filter to limit the logs based on specific hostnames
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/cloud_nss_feed#host_names CloudNssFeed#host_names}
  */
  readonly hostNames?: string[];
  /**
  * Filter based on inbound bytes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/cloud_nss_feed#in_bound_bytes CloudNssFeed#in_bound_bytes}
  */
  readonly inBoundBytes?: string[];
  /**
  * Filter based on internal IPv4 addresses
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/cloud_nss_feed#internal_ips CloudNssFeed#internal_ips}
  */
  readonly internalIps?: string[];
  /**
  * A Boolean value indicating whether streaming of logs in JSON array format (e.g., [{JSON1},{JSON2}]) is enabled or disabled for the JSON feed output type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/cloud_nss_feed#json_array_toggle CloudNssFeed#json_array_toggle}
  */
  readonly jsonArrayToggle?: boolean | cdktf.IResolvable;
  /**
  * Malware category filter
  * 				See the [Cloud Nanolog Streaming Service (NSS) documentation
  * 				https://help.zscaler.com/zia/cloud-nanolog-streaming-service-nss#/nssFeeds-get
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/cloud_nss_feed#malware_classes CloudNssFeed#malware_classes}
  */
  readonly malwareClasses?: string[];
  /**
  * Filter based on malware names
  * 				See the [Cloud Nanolog Streaming Service (NSS) documentation
  * 				https://help.zscaler.com/zia/cloud-nanolog-streaming-service-nss#/nssFeeds-get
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/cloud_nss_feed#malware_names CloudNssFeed#malware_names}
  */
  readonly malwareNames?: string[];
  /**
  * The maximum batch size in KB
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/cloud_nss_feed#max_batch_size CloudNssFeed#max_batch_size}
  */
  readonly maxBatchSize?: number;
  /**
  * The name of the cloud NSS feed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/cloud_nss_feed#name CloudNssFeed#name}
  */
  readonly name?: string;
  /**
  * NAT Control policy actions filter
  * 				Supported Values: NONE, DNAT
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/cloud_nss_feed#nat_actions CloudNssFeed#nat_actions}
  */
  readonly natActions?: string[];
  /**
  * NSS feed format type (e.g. CSV, syslog, Splunk Common Information Model (CIM), etc.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/cloud_nss_feed#nss_feed_type CloudNssFeed#nss_feed_type}
  */
  readonly nssFeedType?: string;
  /**
  * The type of NSS logs that are streamed (e.g. Web, Firewall, DNS, Alert, etc.)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/cloud_nss_feed#nss_log_type CloudNssFeed#nss_log_type}
  */
  readonly nssLogType?: string;
  /**
  * NSS type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/cloud_nss_feed#nss_type CloudNssFeed#nss_type}
  */
  readonly nssType?: string;
  /**
  * Filter to include specific network applications in the logs.
  * 				By default, all network applications are included in the logs
  * 				See the [Cloud Nanolog Streaming Service (NSS) documentation
  * 				https://help.zscaler.com/zia/cloud-nanolog-streaming-service-nss#/nssFeeds-get
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/cloud_nss_feed#nw_applications CloudNssFeed#nw_applications}
  */
  readonly nwApplications?: string[];
  /**
  * Filter to include specific network applications in the logs.
  * 				By default, no network application is excluded from the logs
  * 				See the [Cloud Nanolog Streaming Service (NSS) documentation
  * 				https://help.zscaler.com/zia/cloud-nanolog-streaming-service-nss#/nssFeeds-get
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/cloud_nss_feed#nw_applications_exclude CloudNssFeed#nw_applications_exclude}
  */
  readonly nwApplicationsExclude?: string[];
  /**
  * A Boolean value indicating whether OAuth 2.0 authentication is enabled or not
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/cloud_nss_feed#oauth_authentication CloudNssFeed#oauth_authentication}
  */
  readonly oauthAuthentication?: boolean | cdktf.IResolvable;
  /**
  * CRM object name filter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/cloud_nss_feed#object_name CloudNssFeed#object_name}
  */
  readonly objectName?: string[];
  /**
  * CRM object type filter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/cloud_nss_feed#object_type CloudNssFeed#object_type}
  */
  readonly objectType?: string[];
  /**
  * CASB activity object type filter
  * 				See the [Cloud Nanolog Streaming Service (NSS) documentation
  * 				https://help.zscaler.com/zia/cloud-nanolog-streaming-service-nss#/nssFeeds-get
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/cloud_nss_feed#object_type1 CloudNssFeed#object_type1}
  */
  readonly objectType1?: string[];
  /**
  * CASB activity object type filter if applicable
  * 				See the [Cloud Nanolog Streaming Service (NSS) documentation
  * 				https://help.zscaler.com/zia/cloud-nanolog-streaming-service-nss#/nssFeeds-get
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/cloud_nss_feed#object_type2 CloudNssFeed#object_type2}
  */
  readonly objectType2?: string[];
  /**
  * Filter based on outbound bytes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/cloud_nss_feed#out_bound_bytes CloudNssFeed#out_bound_bytes}
  */
  readonly outBoundBytes?: string[];
  /**
  * Page Risk Index filter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/cloud_nss_feed#page_risk_indexes CloudNssFeed#page_risk_indexes}
  */
  readonly pageRiskIndexes?: string[];
  /**
  * Policy reason filter
  * 				See the [Cloud Nanolog Streaming Service (NSS) documentation
  * 				https://help.zscaler.com/zia/cloud-nanolog-streaming-service-nss#/nssFeeds-get
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/cloud_nss_feed#policy_reasons CloudNssFeed#policy_reasons}
  */
  readonly policyReasons?: string[];
  /**
  * Repository project name filter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/cloud_nss_feed#project_name CloudNssFeed#project_name}
  */
  readonly projectName?: string[];
  /**
  * Protocol types filter
  * 				Supported Values: TUNNEL, SSL, HTTP, HTTPS, FTP, FTPOVERHTTP, HTTP_PROXY, TUNNEL_SSL, DNSOVERHTTPS, WEBSOCKET, WEBSOCKET_SSL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/cloud_nss_feed#protocol_types CloudNssFeed#protocol_types}
  */
  readonly protocolTypes?: string[];
  /**
  * Referrer URL filter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/cloud_nss_feed#referer_urls CloudNssFeed#referer_urls}
  */
  readonly refererUrls?: string[];
  /**
  * Repository name filter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/cloud_nss_feed#repo_name CloudNssFeed#repo_name}
  */
  readonly repoName?: string[];
  /**
  * Request methods filter
  * 				See the [Cloud Nanolog Streaming Service (NSS) documentation
  * 				https://help.zscaler.com/zia/cloud-nanolog-streaming-service-nss#/nssFeeds-get
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/cloud_nss_feed#request_methods CloudNssFeed#request_methods}
  */
  readonly requestMethods?: string[];
  /**
  * Request size filter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/cloud_nss_feed#request_sizes CloudNssFeed#request_sizes}
  */
  readonly requestSizes?: string[];
  /**
  * Response codes filter
  * 				See the [Cloud Nanolog Streaming Service (NSS) documentation
  * 				https://help.zscaler.com/zia/cloud-nanolog-streaming-service-nss#/nssFeeds-get
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/cloud_nss_feed#response_codes CloudNssFeed#response_codes}
  */
  readonly responseCodes?: string[];
  /**
  * Request size filter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/cloud_nss_feed#response_sizes CloudNssFeed#response_sizes}
  */
  readonly responseSizes?: string[];
  /**
  * Scan time filter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/cloud_nss_feed#scan_time CloudNssFeed#scan_time}
  */
  readonly scanTime?: string[];
  /**
  * Scope applicable when SIEM type is set to Azure Sentinel
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/cloud_nss_feed#scope CloudNssFeed#scope}
  */
  readonly scope?: string;
  /**
  * Filter based on the server's destination IPv4 addresses in Firewall policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/cloud_nss_feed#server_destination_ips CloudNssFeed#server_destination_ips}
  */
  readonly serverDestinationIps?: string[];
  /**
  * Filter to limit the logs based on the server's IPv4 addresses
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/cloud_nss_feed#server_ips CloudNssFeed#server_ips}
  */
  readonly serverIps?: string[];
  /**
  * Filter based on the server's source IPv4 addresses in Firewall policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/cloud_nss_feed#server_source_ips CloudNssFeed#server_source_ips}
  */
  readonly serverSourceIps?: string[];
  /**
  * Firewall log filter based on the traffic destination name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/cloud_nss_feed#server_source_ports CloudNssFeed#server_source_ports}
  */
  readonly serverSourcePorts?: string[];
  /**
  * Firewall logs filter based on the number of sessions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/cloud_nss_feed#session_counts CloudNssFeed#session_counts}
  */
  readonly sessionCounts?: string[];
  /**
  * Cloud NSS SIEM type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/cloud_nss_feed#siem_type CloudNssFeed#siem_type}
  */
  readonly siemType?: string;
  /**
  * Filter based on threat names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/cloud_nss_feed#threat_names CloudNssFeed#threat_names}
  */
  readonly threatNames?: string[];
  /**
  * Specifies the time zone that must be used in the output file
  * 				See the [Cloud Nanolog Streaming Service (NSS) documentation
  * 				https://help.zscaler.com/zia/cloud-nanolog-streaming-service-nss#/nssFeeds-get
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/cloud_nss_feed#time_zone CloudNssFeed#time_zone}
  */
  readonly timeZone?: string;
  /**
  * Filter based on the firewall traffic forwarding method
  * 				Supported Values: ANY, NONE, PBF, GRE, IPSEC, Z_APP, ZAPP_GRE, ZAPP_IPSEC, EC, MTGRE, ZAPP_DIRECT, CCA, MTUN_PROXY, MTUN_CBI
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/cloud_nss_feed#traffic_forwards CloudNssFeed#traffic_forwards}
  */
  readonly trafficForwards?: string[];
  /**
  * Transaction size filter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/cloud_nss_feed#transaction_sizes CloudNssFeed#transaction_sizes}
  */
  readonly transactionSizes?: string[];
  /**
  * Destination IPv4 addresses of tunnels
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/cloud_nss_feed#tunnel_dest_ips CloudNssFeed#tunnel_dest_ips}
  */
  readonly tunnelDestIps?: string[];
  /**
  * Filter based on tunnel IPv4 addresses in Firewall policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/cloud_nss_feed#tunnel_ips CloudNssFeed#tunnel_ips}
  */
  readonly tunnelIps?: string[];
  /**
  * Source IPv4 addresses of tunnels
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/cloud_nss_feed#tunnel_source_ips CloudNssFeed#tunnel_source_ips}
  */
  readonly tunnelSourceIps?: string[];
  /**
  * Filter based on the tunnel source port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/cloud_nss_feed#tunnel_source_port CloudNssFeed#tunnel_source_port}
  */
  readonly tunnelSourcePort?: string[];
  /**
  * Tunnel type filter
  * 				Supported Values: GRE, IPSEC_IKEV1, IPSEC_IKEV2, SVPN, EXTRANET, ZUB, ZCB
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/cloud_nss_feed#tunnel_types CloudNssFeed#tunnel_types}
  */
  readonly tunnelTypes?: string[];
  /**
  * URL category filter
  * 				See the [Cloud Nanolog Streaming Service (NSS) documentation
  * 				https://help.zscaler.com/zia/cloud-nanolog-streaming-service-nss#/nssFeeds-get
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/cloud_nss_feed#url_classes CloudNssFeed#url_classes}
  */
  readonly urlClasses?: string[];
  /**
  * URL supercategory filter
  * 				See the [Cloud Nanolog Streaming Service (NSS) documentation
  * 				https://help.zscaler.com/zia/cloud-nanolog-streaming-service-nss#/nssFeeds-get
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/cloud_nss_feed#url_super_categories CloudNssFeed#url_super_categories}
  */
  readonly urlSuperCategories?: string[];
  /**
  * Predefined user agents filter
  * 				See the [Cloud Nanolog Streaming Service (NSS) documentation
  * 				https://help.zscaler.com/zia/cloud-nanolog-streaming-service-nss#/nssFeeds-get
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/cloud_nss_feed#user_agents CloudNssFeed#user_agents}
  */
  readonly userAgents?: string[];
  /**
  * Cloud application categories Filter
  * 				See the [Cloud Nanolog Streaming Service (NSS) documentation
  * 				https://help.zscaler.com/zia/cloud-nanolog-streaming-service-nss#/nssFeeds-get
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/cloud_nss_feed#web_application_classes CloudNssFeed#web_application_classes}
  */
  readonly webApplicationClasses?: string[];
  /**
  * Filter to include specific cloud applications in the logs.
  * 				By default, all cloud applications are included in the logs.
  * 				To obtain the list of cloud applications that can be specified in this attribute, use the GET /cloudApplications/lite request
  * 				To retrieve the list of cloud applications, use the data source: zia_cloud_applications
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/cloud_nss_feed#web_applications CloudNssFeed#web_applications}
  */
  readonly webApplications?: string[];
  /**
  * Filter to exclude specific cloud applications from the logs.
  * 				By default, no cloud applications is excluded from the logs.
  * 				To obtain the list of cloud applications that can be specified in this attribute, use the GET /cloudApplications/lite request.
  * 				To retrieve the list of cloud applications, use the data source: zia_cloud_applications
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/cloud_nss_feed#web_applications_exclude CloudNssFeed#web_applications_exclude}
  */
  readonly webApplicationsExclude?: string[];
  /**
  * Filter based on the web traffic forwarding method
  * 				Supported Values: ANY, NONE, PBF, GRE, IPSEC, Z_APP, ZAPP_GRE, ZAPP_IPSEC, EC, MTGRE, ZAPP_DIRECT, CCA, MTUN_PROXY, MTUN_CBI
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/cloud_nss_feed#web_traffic_forwards CloudNssFeed#web_traffic_forwards}
  */
  readonly webTrafficForwards?: string[];
  /**
  * buckets block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/cloud_nss_feed#buckets CloudNssFeed#buckets}
  */
  readonly buckets?: CloudNssFeedBuckets;
  /**
  * casb_tenant block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/cloud_nss_feed#casb_tenant CloudNssFeed#casb_tenant}
  */
  readonly casbTenant?: CloudNssFeedCasbTenant;
  /**
  * departments block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/cloud_nss_feed#departments CloudNssFeed#departments}
  */
  readonly departments?: CloudNssFeedDepartments;
  /**
  * dlp_dictionaries block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/cloud_nss_feed#dlp_dictionaries CloudNssFeed#dlp_dictionaries}
  */
  readonly dlpDictionaries?: CloudNssFeedDlpDictionaries;
  /**
  * dlp_engines block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/cloud_nss_feed#dlp_engines CloudNssFeed#dlp_engines}
  */
  readonly dlpEngines?: CloudNssFeedDlpEngines;
  /**
  * external_collaborators block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/cloud_nss_feed#external_collaborators CloudNssFeed#external_collaborators}
  */
  readonly externalCollaborators?: CloudNssFeedExternalCollaborators;
  /**
  * external_owners block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/cloud_nss_feed#external_owners CloudNssFeed#external_owners}
  */
  readonly externalOwners?: CloudNssFeedExternalOwners;
  /**
  * internal_collaborators block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/cloud_nss_feed#internal_collaborators CloudNssFeed#internal_collaborators}
  */
  readonly internalCollaborators?: CloudNssFeedInternalCollaborators;
  /**
  * itsm_object_type block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/cloud_nss_feed#itsm_object_type CloudNssFeed#itsm_object_type}
  */
  readonly itsmObjectType?: CloudNssFeedItsmObjectType;
  /**
  * location_groups block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/cloud_nss_feed#location_groups CloudNssFeed#location_groups}
  */
  readonly locationGroups?: CloudNssFeedLocationGroups;
  /**
  * locations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/cloud_nss_feed#locations CloudNssFeed#locations}
  */
  readonly locations?: CloudNssFeedLocations;
  /**
  * nw_services block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/cloud_nss_feed#nw_services CloudNssFeed#nw_services}
  */
  readonly nwServices?: CloudNssFeedNwServices;
  /**
  * rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/cloud_nss_feed#rules CloudNssFeed#rules}
  */
  readonly rules?: CloudNssFeedRules;
  /**
  * sender_name block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/cloud_nss_feed#sender_name CloudNssFeed#sender_name}
  */
  readonly senderName?: CloudNssFeedSenderName;
  /**
  * url_categories block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/cloud_nss_feed#url_categories CloudNssFeed#url_categories}
  */
  readonly urlCategories?: CloudNssFeedUrlCategories;
  /**
  * users block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/cloud_nss_feed#users CloudNssFeed#users}
  */
  readonly users?: CloudNssFeedUsers;
  /**
  * vpn_credentials block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/cloud_nss_feed#vpn_credentials CloudNssFeed#vpn_credentials}
  */
  readonly vpnCredentials?: CloudNssFeedVpnCredentials;
}
export interface CloudNssFeedBuckets {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/cloud_nss_feed#id CloudNssFeed#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number[];
}

export function cloudNssFeedBucketsToTerraform(struct?: CloudNssFeedBucketsOutputReference | CloudNssFeedBuckets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.id),
  }
}


export function cloudNssFeedBucketsToHclTerraform(struct?: CloudNssFeedBucketsOutputReference | CloudNssFeedBuckets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.id),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudNssFeedBucketsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudNssFeedBuckets | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudNssFeedBuckets | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._id = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._id = value.id;
    }
  }

  // id - computed: false, optional: true, required: false
  private _id?: number[]; 
  public get id() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('id')));
  }
  public set id(value: number[]) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}
export interface CloudNssFeedCasbTenant {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/cloud_nss_feed#id CloudNssFeed#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number[];
}

export function cloudNssFeedCasbTenantToTerraform(struct?: CloudNssFeedCasbTenantOutputReference | CloudNssFeedCasbTenant): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.id),
  }
}


export function cloudNssFeedCasbTenantToHclTerraform(struct?: CloudNssFeedCasbTenantOutputReference | CloudNssFeedCasbTenant): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.id),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudNssFeedCasbTenantOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudNssFeedCasbTenant | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudNssFeedCasbTenant | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._id = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._id = value.id;
    }
  }

  // id - computed: false, optional: true, required: false
  private _id?: number[]; 
  public get id() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('id')));
  }
  public set id(value: number[]) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}
export interface CloudNssFeedDepartments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/cloud_nss_feed#id CloudNssFeed#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number[];
}

export function cloudNssFeedDepartmentsToTerraform(struct?: CloudNssFeedDepartmentsOutputReference | CloudNssFeedDepartments): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.id),
  }
}


export function cloudNssFeedDepartmentsToHclTerraform(struct?: CloudNssFeedDepartmentsOutputReference | CloudNssFeedDepartments): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.id),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudNssFeedDepartmentsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudNssFeedDepartments | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudNssFeedDepartments | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._id = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._id = value.id;
    }
  }

  // id - computed: false, optional: true, required: false
  private _id?: number[]; 
  public get id() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('id')));
  }
  public set id(value: number[]) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}
export interface CloudNssFeedDlpDictionaries {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/cloud_nss_feed#id CloudNssFeed#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number[];
}

export function cloudNssFeedDlpDictionariesToTerraform(struct?: CloudNssFeedDlpDictionariesOutputReference | CloudNssFeedDlpDictionaries): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.id),
  }
}


export function cloudNssFeedDlpDictionariesToHclTerraform(struct?: CloudNssFeedDlpDictionariesOutputReference | CloudNssFeedDlpDictionaries): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.id),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudNssFeedDlpDictionariesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudNssFeedDlpDictionaries | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudNssFeedDlpDictionaries | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._id = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._id = value.id;
    }
  }

  // id - computed: false, optional: true, required: false
  private _id?: number[]; 
  public get id() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('id')));
  }
  public set id(value: number[]) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}
export interface CloudNssFeedDlpEngines {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/cloud_nss_feed#id CloudNssFeed#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number[];
}

export function cloudNssFeedDlpEnginesToTerraform(struct?: CloudNssFeedDlpEnginesOutputReference | CloudNssFeedDlpEngines): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.id),
  }
}


export function cloudNssFeedDlpEnginesToHclTerraform(struct?: CloudNssFeedDlpEnginesOutputReference | CloudNssFeedDlpEngines): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.id),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudNssFeedDlpEnginesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudNssFeedDlpEngines | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudNssFeedDlpEngines | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._id = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._id = value.id;
    }
  }

  // id - computed: false, optional: true, required: false
  private _id?: number[]; 
  public get id() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('id')));
  }
  public set id(value: number[]) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}
export interface CloudNssFeedExternalCollaborators {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/cloud_nss_feed#id CloudNssFeed#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number[];
}

export function cloudNssFeedExternalCollaboratorsToTerraform(struct?: CloudNssFeedExternalCollaboratorsOutputReference | CloudNssFeedExternalCollaborators): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.id),
  }
}


export function cloudNssFeedExternalCollaboratorsToHclTerraform(struct?: CloudNssFeedExternalCollaboratorsOutputReference | CloudNssFeedExternalCollaborators): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.id),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudNssFeedExternalCollaboratorsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudNssFeedExternalCollaborators | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudNssFeedExternalCollaborators | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._id = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._id = value.id;
    }
  }

  // id - computed: false, optional: true, required: false
  private _id?: number[]; 
  public get id() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('id')));
  }
  public set id(value: number[]) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}
export interface CloudNssFeedExternalOwners {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/cloud_nss_feed#id CloudNssFeed#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number[];
}

export function cloudNssFeedExternalOwnersToTerraform(struct?: CloudNssFeedExternalOwnersOutputReference | CloudNssFeedExternalOwners): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.id),
  }
}


export function cloudNssFeedExternalOwnersToHclTerraform(struct?: CloudNssFeedExternalOwnersOutputReference | CloudNssFeedExternalOwners): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.id),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudNssFeedExternalOwnersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudNssFeedExternalOwners | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudNssFeedExternalOwners | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._id = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._id = value.id;
    }
  }

  // id - computed: false, optional: true, required: false
  private _id?: number[]; 
  public get id() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('id')));
  }
  public set id(value: number[]) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}
export interface CloudNssFeedInternalCollaborators {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/cloud_nss_feed#id CloudNssFeed#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number[];
}

export function cloudNssFeedInternalCollaboratorsToTerraform(struct?: CloudNssFeedInternalCollaboratorsOutputReference | CloudNssFeedInternalCollaborators): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.id),
  }
}


export function cloudNssFeedInternalCollaboratorsToHclTerraform(struct?: CloudNssFeedInternalCollaboratorsOutputReference | CloudNssFeedInternalCollaborators): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.id),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudNssFeedInternalCollaboratorsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudNssFeedInternalCollaborators | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudNssFeedInternalCollaborators | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._id = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._id = value.id;
    }
  }

  // id - computed: false, optional: true, required: false
  private _id?: number[]; 
  public get id() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('id')));
  }
  public set id(value: number[]) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}
export interface CloudNssFeedItsmObjectType {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/cloud_nss_feed#id CloudNssFeed#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number[];
}

export function cloudNssFeedItsmObjectTypeToTerraform(struct?: CloudNssFeedItsmObjectTypeOutputReference | CloudNssFeedItsmObjectType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.id),
  }
}


export function cloudNssFeedItsmObjectTypeToHclTerraform(struct?: CloudNssFeedItsmObjectTypeOutputReference | CloudNssFeedItsmObjectType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.id),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudNssFeedItsmObjectTypeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudNssFeedItsmObjectType | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudNssFeedItsmObjectType | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._id = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._id = value.id;
    }
  }

  // id - computed: false, optional: true, required: false
  private _id?: number[]; 
  public get id() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('id')));
  }
  public set id(value: number[]) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}
export interface CloudNssFeedLocationGroups {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/cloud_nss_feed#id CloudNssFeed#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number[];
}

export function cloudNssFeedLocationGroupsToTerraform(struct?: CloudNssFeedLocationGroupsOutputReference | CloudNssFeedLocationGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.id),
  }
}


export function cloudNssFeedLocationGroupsToHclTerraform(struct?: CloudNssFeedLocationGroupsOutputReference | CloudNssFeedLocationGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.id),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudNssFeedLocationGroupsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudNssFeedLocationGroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudNssFeedLocationGroups | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._id = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._id = value.id;
    }
  }

  // id - computed: false, optional: true, required: false
  private _id?: number[]; 
  public get id() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('id')));
  }
  public set id(value: number[]) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}
export interface CloudNssFeedLocations {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/cloud_nss_feed#id CloudNssFeed#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number[];
}

export function cloudNssFeedLocationsToTerraform(struct?: CloudNssFeedLocationsOutputReference | CloudNssFeedLocations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.id),
  }
}


export function cloudNssFeedLocationsToHclTerraform(struct?: CloudNssFeedLocationsOutputReference | CloudNssFeedLocations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.id),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudNssFeedLocationsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudNssFeedLocations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudNssFeedLocations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._id = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._id = value.id;
    }
  }

  // id - computed: false, optional: true, required: false
  private _id?: number[]; 
  public get id() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('id')));
  }
  public set id(value: number[]) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}
export interface CloudNssFeedNwServices {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/cloud_nss_feed#id CloudNssFeed#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number[];
}

export function cloudNssFeedNwServicesToTerraform(struct?: CloudNssFeedNwServicesOutputReference | CloudNssFeedNwServices): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.id),
  }
}


export function cloudNssFeedNwServicesToHclTerraform(struct?: CloudNssFeedNwServicesOutputReference | CloudNssFeedNwServices): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.id),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudNssFeedNwServicesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudNssFeedNwServices | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudNssFeedNwServices | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._id = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._id = value.id;
    }
  }

  // id - computed: false, optional: true, required: false
  private _id?: number[]; 
  public get id() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('id')));
  }
  public set id(value: number[]) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}
export interface CloudNssFeedRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/cloud_nss_feed#id CloudNssFeed#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number[];
}

export function cloudNssFeedRulesToTerraform(struct?: CloudNssFeedRulesOutputReference | CloudNssFeedRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.id),
  }
}


export function cloudNssFeedRulesToHclTerraform(struct?: CloudNssFeedRulesOutputReference | CloudNssFeedRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.id),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudNssFeedRulesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudNssFeedRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudNssFeedRules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._id = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._id = value.id;
    }
  }

  // id - computed: false, optional: true, required: false
  private _id?: number[]; 
  public get id() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('id')));
  }
  public set id(value: number[]) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}
export interface CloudNssFeedSenderName {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/cloud_nss_feed#id CloudNssFeed#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number[];
}

export function cloudNssFeedSenderNameToTerraform(struct?: CloudNssFeedSenderNameOutputReference | CloudNssFeedSenderName): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.id),
  }
}


export function cloudNssFeedSenderNameToHclTerraform(struct?: CloudNssFeedSenderNameOutputReference | CloudNssFeedSenderName): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.id),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudNssFeedSenderNameOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudNssFeedSenderName | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudNssFeedSenderName | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._id = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._id = value.id;
    }
  }

  // id - computed: false, optional: true, required: false
  private _id?: number[]; 
  public get id() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('id')));
  }
  public set id(value: number[]) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}
export interface CloudNssFeedUrlCategories {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/cloud_nss_feed#id CloudNssFeed#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number[];
}

export function cloudNssFeedUrlCategoriesToTerraform(struct?: CloudNssFeedUrlCategoriesOutputReference | CloudNssFeedUrlCategories): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.id),
  }
}


export function cloudNssFeedUrlCategoriesToHclTerraform(struct?: CloudNssFeedUrlCategoriesOutputReference | CloudNssFeedUrlCategories): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.id),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudNssFeedUrlCategoriesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudNssFeedUrlCategories | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudNssFeedUrlCategories | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._id = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._id = value.id;
    }
  }

  // id - computed: false, optional: true, required: false
  private _id?: number[]; 
  public get id() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('id')));
  }
  public set id(value: number[]) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}
export interface CloudNssFeedUsers {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/cloud_nss_feed#id CloudNssFeed#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number[];
}

export function cloudNssFeedUsersToTerraform(struct?: CloudNssFeedUsersOutputReference | CloudNssFeedUsers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.id),
  }
}


export function cloudNssFeedUsersToHclTerraform(struct?: CloudNssFeedUsersOutputReference | CloudNssFeedUsers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.id),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudNssFeedUsersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudNssFeedUsers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudNssFeedUsers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._id = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._id = value.id;
    }
  }

  // id - computed: false, optional: true, required: false
  private _id?: number[]; 
  public get id() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('id')));
  }
  public set id(value: number[]) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}
export interface CloudNssFeedVpnCredentials {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/cloud_nss_feed#id CloudNssFeed#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number[];
}

export function cloudNssFeedVpnCredentialsToTerraform(struct?: CloudNssFeedVpnCredentialsOutputReference | CloudNssFeedVpnCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.id),
  }
}


export function cloudNssFeedVpnCredentialsToHclTerraform(struct?: CloudNssFeedVpnCredentialsOutputReference | CloudNssFeedVpnCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.id),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudNssFeedVpnCredentialsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudNssFeedVpnCredentials | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudNssFeedVpnCredentials | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._id = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._id = value.id;
    }
  }

  // id - computed: false, optional: true, required: false
  private _id?: number[]; 
  public get id() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('id')));
  }
  public set id(value: number[]) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/cloud_nss_feed zia_cloud_nss_feed}
*/
export class CloudNssFeed extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "zia_cloud_nss_feed";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CloudNssFeed resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CloudNssFeed to import
  * @param importFromId The id of the existing CloudNssFeed that should be imported. Refer to the {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/cloud_nss_feed#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CloudNssFeed to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "zia_cloud_nss_feed", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/cloud_nss_feed zia_cloud_nss_feed} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudNssFeedConfig = {}
  */
  public constructor(scope: Construct, id: string, config: CloudNssFeedConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'zia_cloud_nss_feed',
      terraformGeneratorMetadata: {
        providerName: 'zia',
        providerVersion: '4.6.3',
        providerVersionConstraint: '4.6.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._actionFilter = config.actionFilter;
    this._activity = config.activity;
    this._advUserAgents = config.advUserAgents;
    this._advancedThreats = config.advancedThreats;
    this._alerts = config.alerts;
    this._auditLogType = config.auditLogType;
    this._authenticationToken = config.authenticationToken;
    this._authenticationUrl = config.authenticationUrl;
    this._base64EncodedCertificate = config.base64EncodedCertificate;
    this._casbAction = config.casbAction;
    this._casbApplications = config.casbApplications;
    this._casbFileType = config.casbFileType;
    this._casbFileTypeSuperCategories = config.casbFileTypeSuperCategories;
    this._casbPolicyTypes = config.casbPolicyTypes;
    this._casbSeverity = config.casbSeverity;
    this._channelName = config.channelName;
    this._clientDestinationIps = config.clientDestinationIps;
    this._clientDestinationPorts = config.clientDestinationPorts;
    this._clientId = config.clientId;
    this._clientIps = config.clientIps;
    this._clientSecret = config.clientSecret;
    this._clientSourceIps = config.clientSourceIps;
    this._clientSourcePorts = config.clientSourcePorts;
    this._connectionHeaders = config.connectionHeaders;
    this._connectionUrl = config.connectionUrl;
    this._countries = config.countries;
    this._customEscapedCharacter = config.customEscapedCharacter;
    this._direction = config.direction;
    this._dnsActions = config.dnsActions;
    this._dnsRequestTypes = config.dnsRequestTypes;
    this._dnsResponseTypes = config.dnsResponseTypes;
    this._dnsResponses = config.dnsResponses;
    this._domains = config.domains;
    this._downloadTime = config.downloadTime;
    this._durations = config.durations;
    this._emailDlpLogType = config.emailDlpLogType;
    this._emailDlpPolicyAction = config.emailDlpPolicyAction;
    this._endPointDlpLogType = config.endPointDlpLogType;
    this._epsRateLimit = config.epsRateLimit;
    this._event = config.event;
    this._feedOutputFormat = config.feedOutputFormat;
    this._feedStatus = config.feedStatus;
    this._fileName = config.fileName;
    this._fileSizes = config.fileSizes;
    this._fileSource = config.fileSource;
    this._fileTypeCategories = config.fileTypeCategories;
    this._fileTypeSuperCategories = config.fileTypeSuperCategories;
    this._firewallActions = config.firewallActions;
    this._firewallLoggingMode = config.firewallLoggingMode;
    this._fullUrls = config.fullUrls;
    this._grantType = config.grantType;
    this._hostNames = config.hostNames;
    this._inBoundBytes = config.inBoundBytes;
    this._internalIps = config.internalIps;
    this._jsonArrayToggle = config.jsonArrayToggle;
    this._malwareClasses = config.malwareClasses;
    this._malwareNames = config.malwareNames;
    this._maxBatchSize = config.maxBatchSize;
    this._name = config.name;
    this._natActions = config.natActions;
    this._nssFeedType = config.nssFeedType;
    this._nssLogType = config.nssLogType;
    this._nssType = config.nssType;
    this._nwApplications = config.nwApplications;
    this._nwApplicationsExclude = config.nwApplicationsExclude;
    this._oauthAuthentication = config.oauthAuthentication;
    this._objectName = config.objectName;
    this._objectType = config.objectType;
    this._objectType1 = config.objectType1;
    this._objectType2 = config.objectType2;
    this._outBoundBytes = config.outBoundBytes;
    this._pageRiskIndexes = config.pageRiskIndexes;
    this._policyReasons = config.policyReasons;
    this._projectName = config.projectName;
    this._protocolTypes = config.protocolTypes;
    this._refererUrls = config.refererUrls;
    this._repoName = config.repoName;
    this._requestMethods = config.requestMethods;
    this._requestSizes = config.requestSizes;
    this._responseCodes = config.responseCodes;
    this._responseSizes = config.responseSizes;
    this._scanTime = config.scanTime;
    this._scope = config.scope;
    this._serverDestinationIps = config.serverDestinationIps;
    this._serverIps = config.serverIps;
    this._serverSourceIps = config.serverSourceIps;
    this._serverSourcePorts = config.serverSourcePorts;
    this._sessionCounts = config.sessionCounts;
    this._siemType = config.siemType;
    this._threatNames = config.threatNames;
    this._timeZone = config.timeZone;
    this._trafficForwards = config.trafficForwards;
    this._transactionSizes = config.transactionSizes;
    this._tunnelDestIps = config.tunnelDestIps;
    this._tunnelIps = config.tunnelIps;
    this._tunnelSourceIps = config.tunnelSourceIps;
    this._tunnelSourcePort = config.tunnelSourcePort;
    this._tunnelTypes = config.tunnelTypes;
    this._urlClasses = config.urlClasses;
    this._urlSuperCategories = config.urlSuperCategories;
    this._userAgents = config.userAgents;
    this._webApplicationClasses = config.webApplicationClasses;
    this._webApplications = config.webApplications;
    this._webApplicationsExclude = config.webApplicationsExclude;
    this._webTrafficForwards = config.webTrafficForwards;
    this._buckets.internalValue = config.buckets;
    this._casbTenant.internalValue = config.casbTenant;
    this._departments.internalValue = config.departments;
    this._dlpDictionaries.internalValue = config.dlpDictionaries;
    this._dlpEngines.internalValue = config.dlpEngines;
    this._externalCollaborators.internalValue = config.externalCollaborators;
    this._externalOwners.internalValue = config.externalOwners;
    this._internalCollaborators.internalValue = config.internalCollaborators;
    this._itsmObjectType.internalValue = config.itsmObjectType;
    this._locationGroups.internalValue = config.locationGroups;
    this._locations.internalValue = config.locations;
    this._nwServices.internalValue = config.nwServices;
    this._rules.internalValue = config.rules;
    this._senderName.internalValue = config.senderName;
    this._urlCategories.internalValue = config.urlCategories;
    this._users.internalValue = config.users;
    this._vpnCredentials.internalValue = config.vpnCredentials;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // action_filter - computed: false, optional: true, required: false
  private _actionFilter?: string; 
  public get actionFilter() {
    return this.getStringAttribute('action_filter');
  }
  public set actionFilter(value: string) {
    this._actionFilter = value;
  }
  public resetActionFilter() {
    this._actionFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionFilterInput() {
    return this._actionFilter;
  }

  // activity - computed: false, optional: true, required: false
  private _activity?: string[]; 
  public get activity() {
    return cdktf.Fn.tolist(this.getListAttribute('activity'));
  }
  public set activity(value: string[]) {
    this._activity = value;
  }
  public resetActivity() {
    this._activity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activityInput() {
    return this._activity;
  }

  // adv_user_agents - computed: false, optional: true, required: false
  private _advUserAgents?: string[]; 
  public get advUserAgents() {
    return cdktf.Fn.tolist(this.getListAttribute('adv_user_agents'));
  }
  public set advUserAgents(value: string[]) {
    this._advUserAgents = value;
  }
  public resetAdvUserAgents() {
    this._advUserAgents = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advUserAgentsInput() {
    return this._advUserAgents;
  }

  // advanced_threats - computed: false, optional: true, required: false
  private _advancedThreats?: string[]; 
  public get advancedThreats() {
    return cdktf.Fn.tolist(this.getListAttribute('advanced_threats'));
  }
  public set advancedThreats(value: string[]) {
    this._advancedThreats = value;
  }
  public resetAdvancedThreats() {
    this._advancedThreats = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advancedThreatsInput() {
    return this._advancedThreats;
  }

  // alerts - computed: false, optional: true, required: false
  private _alerts?: string[]; 
  public get alerts() {
    return cdktf.Fn.tolist(this.getListAttribute('alerts'));
  }
  public set alerts(value: string[]) {
    this._alerts = value;
  }
  public resetAlerts() {
    this._alerts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertsInput() {
    return this._alerts;
  }

  // audit_log_type - computed: false, optional: true, required: false
  private _auditLogType?: string[]; 
  public get auditLogType() {
    return cdktf.Fn.tolist(this.getListAttribute('audit_log_type'));
  }
  public set auditLogType(value: string[]) {
    this._auditLogType = value;
  }
  public resetAuditLogType() {
    this._auditLogType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get auditLogTypeInput() {
    return this._auditLogType;
  }

  // authentication_token - computed: false, optional: true, required: false
  private _authenticationToken?: string; 
  public get authenticationToken() {
    return this.getStringAttribute('authentication_token');
  }
  public set authenticationToken(value: string) {
    this._authenticationToken = value;
  }
  public resetAuthenticationToken() {
    this._authenticationToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationTokenInput() {
    return this._authenticationToken;
  }

  // authentication_url - computed: false, optional: true, required: false
  private _authenticationUrl?: string; 
  public get authenticationUrl() {
    return this.getStringAttribute('authentication_url');
  }
  public set authenticationUrl(value: string) {
    this._authenticationUrl = value;
  }
  public resetAuthenticationUrl() {
    this._authenticationUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationUrlInput() {
    return this._authenticationUrl;
  }

  // base64_encoded_certificate - computed: false, optional: true, required: false
  private _base64EncodedCertificate?: string; 
  public get base64EncodedCertificate() {
    return this.getStringAttribute('base64_encoded_certificate');
  }
  public set base64EncodedCertificate(value: string) {
    this._base64EncodedCertificate = value;
  }
  public resetBase64EncodedCertificate() {
    this._base64EncodedCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get base64EncodedCertificateInput() {
    return this._base64EncodedCertificate;
  }

  // casb_action - computed: false, optional: true, required: false
  private _casbAction?: string[]; 
  public get casbAction() {
    return cdktf.Fn.tolist(this.getListAttribute('casb_action'));
  }
  public set casbAction(value: string[]) {
    this._casbAction = value;
  }
  public resetCasbAction() {
    this._casbAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get casbActionInput() {
    return this._casbAction;
  }

  // casb_applications - computed: false, optional: true, required: false
  private _casbApplications?: string[]; 
  public get casbApplications() {
    return cdktf.Fn.tolist(this.getListAttribute('casb_applications'));
  }
  public set casbApplications(value: string[]) {
    this._casbApplications = value;
  }
  public resetCasbApplications() {
    this._casbApplications = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get casbApplicationsInput() {
    return this._casbApplications;
  }

  // casb_file_type - computed: false, optional: true, required: false
  private _casbFileType?: string[]; 
  public get casbFileType() {
    return cdktf.Fn.tolist(this.getListAttribute('casb_file_type'));
  }
  public set casbFileType(value: string[]) {
    this._casbFileType = value;
  }
  public resetCasbFileType() {
    this._casbFileType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get casbFileTypeInput() {
    return this._casbFileType;
  }

  // casb_file_type_super_categories - computed: false, optional: true, required: false
  private _casbFileTypeSuperCategories?: string[]; 
  public get casbFileTypeSuperCategories() {
    return cdktf.Fn.tolist(this.getListAttribute('casb_file_type_super_categories'));
  }
  public set casbFileTypeSuperCategories(value: string[]) {
    this._casbFileTypeSuperCategories = value;
  }
  public resetCasbFileTypeSuperCategories() {
    this._casbFileTypeSuperCategories = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get casbFileTypeSuperCategoriesInput() {
    return this._casbFileTypeSuperCategories;
  }

  // casb_policy_types - computed: false, optional: true, required: false
  private _casbPolicyTypes?: string[]; 
  public get casbPolicyTypes() {
    return cdktf.Fn.tolist(this.getListAttribute('casb_policy_types'));
  }
  public set casbPolicyTypes(value: string[]) {
    this._casbPolicyTypes = value;
  }
  public resetCasbPolicyTypes() {
    this._casbPolicyTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get casbPolicyTypesInput() {
    return this._casbPolicyTypes;
  }

  // casb_severity - computed: false, optional: true, required: false
  private _casbSeverity?: string[]; 
  public get casbSeverity() {
    return cdktf.Fn.tolist(this.getListAttribute('casb_severity'));
  }
  public set casbSeverity(value: string[]) {
    this._casbSeverity = value;
  }
  public resetCasbSeverity() {
    this._casbSeverity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get casbSeverityInput() {
    return this._casbSeverity;
  }

  // channel_name - computed: false, optional: true, required: false
  private _channelName?: string[]; 
  public get channelName() {
    return cdktf.Fn.tolist(this.getListAttribute('channel_name'));
  }
  public set channelName(value: string[]) {
    this._channelName = value;
  }
  public resetChannelName() {
    this._channelName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get channelNameInput() {
    return this._channelName;
  }

  // client_destination_ips - computed: false, optional: true, required: false
  private _clientDestinationIps?: string[]; 
  public get clientDestinationIps() {
    return cdktf.Fn.tolist(this.getListAttribute('client_destination_ips'));
  }
  public set clientDestinationIps(value: string[]) {
    this._clientDestinationIps = value;
  }
  public resetClientDestinationIps() {
    this._clientDestinationIps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientDestinationIpsInput() {
    return this._clientDestinationIps;
  }

  // client_destination_ports - computed: false, optional: true, required: false
  private _clientDestinationPorts?: string[]; 
  public get clientDestinationPorts() {
    return cdktf.Fn.tolist(this.getListAttribute('client_destination_ports'));
  }
  public set clientDestinationPorts(value: string[]) {
    this._clientDestinationPorts = value;
  }
  public resetClientDestinationPorts() {
    this._clientDestinationPorts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientDestinationPortsInput() {
    return this._clientDestinationPorts;
  }

  // client_id - computed: false, optional: true, required: false
  private _clientId?: string; 
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string) {
    this._clientId = value;
  }
  public resetClientId() {
    this._clientId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
  }

  // client_ips - computed: false, optional: true, required: false
  private _clientIps?: string[]; 
  public get clientIps() {
    return cdktf.Fn.tolist(this.getListAttribute('client_ips'));
  }
  public set clientIps(value: string[]) {
    this._clientIps = value;
  }
  public resetClientIps() {
    this._clientIps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIpsInput() {
    return this._clientIps;
  }

  // client_secret - computed: false, optional: true, required: false
  private _clientSecret?: string; 
  public get clientSecret() {
    return this.getStringAttribute('client_secret');
  }
  public set clientSecret(value: string) {
    this._clientSecret = value;
  }
  public resetClientSecret() {
    this._clientSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretInput() {
    return this._clientSecret;
  }

  // client_source_ips - computed: false, optional: true, required: false
  private _clientSourceIps?: string[]; 
  public get clientSourceIps() {
    return cdktf.Fn.tolist(this.getListAttribute('client_source_ips'));
  }
  public set clientSourceIps(value: string[]) {
    this._clientSourceIps = value;
  }
  public resetClientSourceIps() {
    this._clientSourceIps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSourceIpsInput() {
    return this._clientSourceIps;
  }

  // client_source_ports - computed: false, optional: true, required: false
  private _clientSourcePorts?: string[]; 
  public get clientSourcePorts() {
    return cdktf.Fn.tolist(this.getListAttribute('client_source_ports'));
  }
  public set clientSourcePorts(value: string[]) {
    this._clientSourcePorts = value;
  }
  public resetClientSourcePorts() {
    this._clientSourcePorts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSourcePortsInput() {
    return this._clientSourcePorts;
  }

  // connection_headers - computed: false, optional: true, required: false
  private _connectionHeaders?: string[]; 
  public get connectionHeaders() {
    return cdktf.Fn.tolist(this.getListAttribute('connection_headers'));
  }
  public set connectionHeaders(value: string[]) {
    this._connectionHeaders = value;
  }
  public resetConnectionHeaders() {
    this._connectionHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionHeadersInput() {
    return this._connectionHeaders;
  }

  // connection_url - computed: false, optional: true, required: false
  private _connectionUrl?: string; 
  public get connectionUrl() {
    return this.getStringAttribute('connection_url');
  }
  public set connectionUrl(value: string) {
    this._connectionUrl = value;
  }
  public resetConnectionUrl() {
    this._connectionUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionUrlInput() {
    return this._connectionUrl;
  }

  // countries - computed: false, optional: true, required: false
  private _countries?: string[]; 
  public get countries() {
    return cdktf.Fn.tolist(this.getListAttribute('countries'));
  }
  public set countries(value: string[]) {
    this._countries = value;
  }
  public resetCountries() {
    this._countries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countriesInput() {
    return this._countries;
  }

  // custom_escaped_character - computed: false, optional: true, required: false
  private _customEscapedCharacter?: string[]; 
  public get customEscapedCharacter() {
    return cdktf.Fn.tolist(this.getListAttribute('custom_escaped_character'));
  }
  public set customEscapedCharacter(value: string[]) {
    this._customEscapedCharacter = value;
  }
  public resetCustomEscapedCharacter() {
    this._customEscapedCharacter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customEscapedCharacterInput() {
    return this._customEscapedCharacter;
  }

  // direction - computed: false, optional: true, required: false
  private _direction?: string; 
  public get direction() {
    return this.getStringAttribute('direction');
  }
  public set direction(value: string) {
    this._direction = value;
  }
  public resetDirection() {
    this._direction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directionInput() {
    return this._direction;
  }

  // dns_actions - computed: false, optional: true, required: false
  private _dnsActions?: string[]; 
  public get dnsActions() {
    return cdktf.Fn.tolist(this.getListAttribute('dns_actions'));
  }
  public set dnsActions(value: string[]) {
    this._dnsActions = value;
  }
  public resetDnsActions() {
    this._dnsActions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsActionsInput() {
    return this._dnsActions;
  }

  // dns_request_types - computed: false, optional: true, required: false
  private _dnsRequestTypes?: string[]; 
  public get dnsRequestTypes() {
    return cdktf.Fn.tolist(this.getListAttribute('dns_request_types'));
  }
  public set dnsRequestTypes(value: string[]) {
    this._dnsRequestTypes = value;
  }
  public resetDnsRequestTypes() {
    this._dnsRequestTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsRequestTypesInput() {
    return this._dnsRequestTypes;
  }

  // dns_response_types - computed: false, optional: true, required: false
  private _dnsResponseTypes?: string[]; 
  public get dnsResponseTypes() {
    return cdktf.Fn.tolist(this.getListAttribute('dns_response_types'));
  }
  public set dnsResponseTypes(value: string[]) {
    this._dnsResponseTypes = value;
  }
  public resetDnsResponseTypes() {
    this._dnsResponseTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsResponseTypesInput() {
    return this._dnsResponseTypes;
  }

  // dns_responses - computed: false, optional: true, required: false
  private _dnsResponses?: string[]; 
  public get dnsResponses() {
    return cdktf.Fn.tolist(this.getListAttribute('dns_responses'));
  }
  public set dnsResponses(value: string[]) {
    this._dnsResponses = value;
  }
  public resetDnsResponses() {
    this._dnsResponses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsResponsesInput() {
    return this._dnsResponses;
  }

  // domains - computed: false, optional: true, required: false
  private _domains?: string[]; 
  public get domains() {
    return cdktf.Fn.tolist(this.getListAttribute('domains'));
  }
  public set domains(value: string[]) {
    this._domains = value;
  }
  public resetDomains() {
    this._domains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainsInput() {
    return this._domains;
  }

  // download_time - computed: false, optional: true, required: false
  private _downloadTime?: string[]; 
  public get downloadTime() {
    return cdktf.Fn.tolist(this.getListAttribute('download_time'));
  }
  public set downloadTime(value: string[]) {
    this._downloadTime = value;
  }
  public resetDownloadTime() {
    this._downloadTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get downloadTimeInput() {
    return this._downloadTime;
  }

  // durations - computed: false, optional: true, required: false
  private _durations?: string[]; 
  public get durations() {
    return cdktf.Fn.tolist(this.getListAttribute('durations'));
  }
  public set durations(value: string[]) {
    this._durations = value;
  }
  public resetDurations() {
    this._durations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get durationsInput() {
    return this._durations;
  }

  // email_dlp_log_type - computed: false, optional: true, required: false
  private _emailDlpLogType?: string[]; 
  public get emailDlpLogType() {
    return cdktf.Fn.tolist(this.getListAttribute('email_dlp_log_type'));
  }
  public set emailDlpLogType(value: string[]) {
    this._emailDlpLogType = value;
  }
  public resetEmailDlpLogType() {
    this._emailDlpLogType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailDlpLogTypeInput() {
    return this._emailDlpLogType;
  }

  // email_dlp_policy_action - computed: false, optional: true, required: false
  private _emailDlpPolicyAction?: string; 
  public get emailDlpPolicyAction() {
    return this.getStringAttribute('email_dlp_policy_action');
  }
  public set emailDlpPolicyAction(value: string) {
    this._emailDlpPolicyAction = value;
  }
  public resetEmailDlpPolicyAction() {
    this._emailDlpPolicyAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailDlpPolicyActionInput() {
    return this._emailDlpPolicyAction;
  }

  // end_point_dlp_log_type - computed: false, optional: true, required: false
  private _endPointDlpLogType?: string[]; 
  public get endPointDlpLogType() {
    return cdktf.Fn.tolist(this.getListAttribute('end_point_dlp_log_type'));
  }
  public set endPointDlpLogType(value: string[]) {
    this._endPointDlpLogType = value;
  }
  public resetEndPointDlpLogType() {
    this._endPointDlpLogType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endPointDlpLogTypeInput() {
    return this._endPointDlpLogType;
  }

  // eps_rate_limit - computed: false, optional: true, required: false
  private _epsRateLimit?: number; 
  public get epsRateLimit() {
    return this.getNumberAttribute('eps_rate_limit');
  }
  public set epsRateLimit(value: number) {
    this._epsRateLimit = value;
  }
  public resetEpsRateLimit() {
    this._epsRateLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get epsRateLimitInput() {
    return this._epsRateLimit;
  }

  // event - computed: false, optional: true, required: false
  private _event?: string; 
  public get event() {
    return this.getStringAttribute('event');
  }
  public set event(value: string) {
    this._event = value;
  }
  public resetEvent() {
    this._event = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventInput() {
    return this._event;
  }

  // feed_output_format - computed: false, optional: true, required: false
  private _feedOutputFormat?: string; 
  public get feedOutputFormat() {
    return this.getStringAttribute('feed_output_format');
  }
  public set feedOutputFormat(value: string) {
    this._feedOutputFormat = value;
  }
  public resetFeedOutputFormat() {
    this._feedOutputFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get feedOutputFormatInput() {
    return this._feedOutputFormat;
  }

  // feed_status - computed: false, optional: true, required: false
  private _feedStatus?: string; 
  public get feedStatus() {
    return this.getStringAttribute('feed_status');
  }
  public set feedStatus(value: string) {
    this._feedStatus = value;
  }
  public resetFeedStatus() {
    this._feedStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get feedStatusInput() {
    return this._feedStatus;
  }

  // file_name - computed: false, optional: true, required: false
  private _fileName?: string[]; 
  public get fileName() {
    return cdktf.Fn.tolist(this.getListAttribute('file_name'));
  }
  public set fileName(value: string[]) {
    this._fileName = value;
  }
  public resetFileName() {
    this._fileName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileNameInput() {
    return this._fileName;
  }

  // file_sizes - computed: false, optional: true, required: false
  private _fileSizes?: string[]; 
  public get fileSizes() {
    return cdktf.Fn.tolist(this.getListAttribute('file_sizes'));
  }
  public set fileSizes(value: string[]) {
    this._fileSizes = value;
  }
  public resetFileSizes() {
    this._fileSizes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileSizesInput() {
    return this._fileSizes;
  }

  // file_source - computed: false, optional: true, required: false
  private _fileSource?: string[]; 
  public get fileSource() {
    return cdktf.Fn.tolist(this.getListAttribute('file_source'));
  }
  public set fileSource(value: string[]) {
    this._fileSource = value;
  }
  public resetFileSource() {
    this._fileSource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileSourceInput() {
    return this._fileSource;
  }

  // file_type_categories - computed: false, optional: true, required: false
  private _fileTypeCategories?: string[]; 
  public get fileTypeCategories() {
    return cdktf.Fn.tolist(this.getListAttribute('file_type_categories'));
  }
  public set fileTypeCategories(value: string[]) {
    this._fileTypeCategories = value;
  }
  public resetFileTypeCategories() {
    this._fileTypeCategories = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileTypeCategoriesInput() {
    return this._fileTypeCategories;
  }

  // file_type_super_categories - computed: false, optional: true, required: false
  private _fileTypeSuperCategories?: string[]; 
  public get fileTypeSuperCategories() {
    return cdktf.Fn.tolist(this.getListAttribute('file_type_super_categories'));
  }
  public set fileTypeSuperCategories(value: string[]) {
    this._fileTypeSuperCategories = value;
  }
  public resetFileTypeSuperCategories() {
    this._fileTypeSuperCategories = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileTypeSuperCategoriesInput() {
    return this._fileTypeSuperCategories;
  }

  // firewall_actions - computed: false, optional: true, required: false
  private _firewallActions?: string[]; 
  public get firewallActions() {
    return cdktf.Fn.tolist(this.getListAttribute('firewall_actions'));
  }
  public set firewallActions(value: string[]) {
    this._firewallActions = value;
  }
  public resetFirewallActions() {
    this._firewallActions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firewallActionsInput() {
    return this._firewallActions;
  }

  // firewall_logging_mode - computed: false, optional: true, required: false
  private _firewallLoggingMode?: string; 
  public get firewallLoggingMode() {
    return this.getStringAttribute('firewall_logging_mode');
  }
  public set firewallLoggingMode(value: string) {
    this._firewallLoggingMode = value;
  }
  public resetFirewallLoggingMode() {
    this._firewallLoggingMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firewallLoggingModeInput() {
    return this._firewallLoggingMode;
  }

  // full_urls - computed: false, optional: true, required: false
  private _fullUrls?: string[]; 
  public get fullUrls() {
    return cdktf.Fn.tolist(this.getListAttribute('full_urls'));
  }
  public set fullUrls(value: string[]) {
    this._fullUrls = value;
  }
  public resetFullUrls() {
    this._fullUrls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fullUrlsInput() {
    return this._fullUrls;
  }

  // grant_type - computed: false, optional: true, required: false
  private _grantType?: string; 
  public get grantType() {
    return this.getStringAttribute('grant_type');
  }
  public set grantType(value: string) {
    this._grantType = value;
  }
  public resetGrantType() {
    this._grantType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grantTypeInput() {
    return this._grantType;
  }

  // host_names - computed: false, optional: true, required: false
  private _hostNames?: string[]; 
  public get hostNames() {
    return cdktf.Fn.tolist(this.getListAttribute('host_names'));
  }
  public set hostNames(value: string[]) {
    this._hostNames = value;
  }
  public resetHostNames() {
    this._hostNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostNamesInput() {
    return this._hostNames;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // in_bound_bytes - computed: false, optional: true, required: false
  private _inBoundBytes?: string[]; 
  public get inBoundBytes() {
    return cdktf.Fn.tolist(this.getListAttribute('in_bound_bytes'));
  }
  public set inBoundBytes(value: string[]) {
    this._inBoundBytes = value;
  }
  public resetInBoundBytes() {
    this._inBoundBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inBoundBytesInput() {
    return this._inBoundBytes;
  }

  // internal_ips - computed: false, optional: true, required: false
  private _internalIps?: string[]; 
  public get internalIps() {
    return cdktf.Fn.tolist(this.getListAttribute('internal_ips'));
  }
  public set internalIps(value: string[]) {
    this._internalIps = value;
  }
  public resetInternalIps() {
    this._internalIps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internalIpsInput() {
    return this._internalIps;
  }

  // json_array_toggle - computed: false, optional: true, required: false
  private _jsonArrayToggle?: boolean | cdktf.IResolvable; 
  public get jsonArrayToggle() {
    return this.getBooleanAttribute('json_array_toggle');
  }
  public set jsonArrayToggle(value: boolean | cdktf.IResolvable) {
    this._jsonArrayToggle = value;
  }
  public resetJsonArrayToggle() {
    this._jsonArrayToggle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsonArrayToggleInput() {
    return this._jsonArrayToggle;
  }

  // malware_classes - computed: false, optional: true, required: false
  private _malwareClasses?: string[]; 
  public get malwareClasses() {
    return cdktf.Fn.tolist(this.getListAttribute('malware_classes'));
  }
  public set malwareClasses(value: string[]) {
    this._malwareClasses = value;
  }
  public resetMalwareClasses() {
    this._malwareClasses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get malwareClassesInput() {
    return this._malwareClasses;
  }

  // malware_names - computed: false, optional: true, required: false
  private _malwareNames?: string[]; 
  public get malwareNames() {
    return cdktf.Fn.tolist(this.getListAttribute('malware_names'));
  }
  public set malwareNames(value: string[]) {
    this._malwareNames = value;
  }
  public resetMalwareNames() {
    this._malwareNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get malwareNamesInput() {
    return this._malwareNames;
  }

  // max_batch_size - computed: false, optional: true, required: false
  private _maxBatchSize?: number; 
  public get maxBatchSize() {
    return this.getNumberAttribute('max_batch_size');
  }
  public set maxBatchSize(value: number) {
    this._maxBatchSize = value;
  }
  public resetMaxBatchSize() {
    this._maxBatchSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxBatchSizeInput() {
    return this._maxBatchSize;
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

  // nat_actions - computed: false, optional: true, required: false
  private _natActions?: string[]; 
  public get natActions() {
    return cdktf.Fn.tolist(this.getListAttribute('nat_actions'));
  }
  public set natActions(value: string[]) {
    this._natActions = value;
  }
  public resetNatActions() {
    this._natActions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natActionsInput() {
    return this._natActions;
  }

  // nss_feed_type - computed: false, optional: true, required: false
  private _nssFeedType?: string; 
  public get nssFeedType() {
    return this.getStringAttribute('nss_feed_type');
  }
  public set nssFeedType(value: string) {
    this._nssFeedType = value;
  }
  public resetNssFeedType() {
    this._nssFeedType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nssFeedTypeInput() {
    return this._nssFeedType;
  }

  // nss_id - computed: true, optional: false, required: false
  public get nssId() {
    return this.getNumberAttribute('nss_id');
  }

  // nss_log_type - computed: false, optional: true, required: false
  private _nssLogType?: string; 
  public get nssLogType() {
    return this.getStringAttribute('nss_log_type');
  }
  public set nssLogType(value: string) {
    this._nssLogType = value;
  }
  public resetNssLogType() {
    this._nssLogType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nssLogTypeInput() {
    return this._nssLogType;
  }

  // nss_type - computed: false, optional: true, required: false
  private _nssType?: string; 
  public get nssType() {
    return this.getStringAttribute('nss_type');
  }
  public set nssType(value: string) {
    this._nssType = value;
  }
  public resetNssType() {
    this._nssType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nssTypeInput() {
    return this._nssType;
  }

  // nw_applications - computed: false, optional: true, required: false
  private _nwApplications?: string[]; 
  public get nwApplications() {
    return cdktf.Fn.tolist(this.getListAttribute('nw_applications'));
  }
  public set nwApplications(value: string[]) {
    this._nwApplications = value;
  }
  public resetNwApplications() {
    this._nwApplications = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nwApplicationsInput() {
    return this._nwApplications;
  }

  // nw_applications_exclude - computed: false, optional: true, required: false
  private _nwApplicationsExclude?: string[]; 
  public get nwApplicationsExclude() {
    return cdktf.Fn.tolist(this.getListAttribute('nw_applications_exclude'));
  }
  public set nwApplicationsExclude(value: string[]) {
    this._nwApplicationsExclude = value;
  }
  public resetNwApplicationsExclude() {
    this._nwApplicationsExclude = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nwApplicationsExcludeInput() {
    return this._nwApplicationsExclude;
  }

  // oauth_authentication - computed: false, optional: true, required: false
  private _oauthAuthentication?: boolean | cdktf.IResolvable; 
  public get oauthAuthentication() {
    return this.getBooleanAttribute('oauth_authentication');
  }
  public set oauthAuthentication(value: boolean | cdktf.IResolvable) {
    this._oauthAuthentication = value;
  }
  public resetOauthAuthentication() {
    this._oauthAuthentication = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauthAuthenticationInput() {
    return this._oauthAuthentication;
  }

  // object_name - computed: false, optional: true, required: false
  private _objectName?: string[]; 
  public get objectName() {
    return cdktf.Fn.tolist(this.getListAttribute('object_name'));
  }
  public set objectName(value: string[]) {
    this._objectName = value;
  }
  public resetObjectName() {
    this._objectName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectNameInput() {
    return this._objectName;
  }

  // object_type - computed: false, optional: true, required: false
  private _objectType?: string[]; 
  public get objectType() {
    return cdktf.Fn.tolist(this.getListAttribute('object_type'));
  }
  public set objectType(value: string[]) {
    this._objectType = value;
  }
  public resetObjectType() {
    this._objectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
  }

  // object_type1 - computed: false, optional: true, required: false
  private _objectType1?: string[]; 
  public get objectType1() {
    return cdktf.Fn.tolist(this.getListAttribute('object_type1'));
  }
  public set objectType1(value: string[]) {
    this._objectType1 = value;
  }
  public resetObjectType1() {
    this._objectType1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectType1Input() {
    return this._objectType1;
  }

  // object_type2 - computed: false, optional: true, required: false
  private _objectType2?: string[]; 
  public get objectType2() {
    return cdktf.Fn.tolist(this.getListAttribute('object_type2'));
  }
  public set objectType2(value: string[]) {
    this._objectType2 = value;
  }
  public resetObjectType2() {
    this._objectType2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectType2Input() {
    return this._objectType2;
  }

  // out_bound_bytes - computed: false, optional: true, required: false
  private _outBoundBytes?: string[]; 
  public get outBoundBytes() {
    return cdktf.Fn.tolist(this.getListAttribute('out_bound_bytes'));
  }
  public set outBoundBytes(value: string[]) {
    this._outBoundBytes = value;
  }
  public resetOutBoundBytes() {
    this._outBoundBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outBoundBytesInput() {
    return this._outBoundBytes;
  }

  // page_risk_indexes - computed: false, optional: true, required: false
  private _pageRiskIndexes?: string[]; 
  public get pageRiskIndexes() {
    return cdktf.Fn.tolist(this.getListAttribute('page_risk_indexes'));
  }
  public set pageRiskIndexes(value: string[]) {
    this._pageRiskIndexes = value;
  }
  public resetPageRiskIndexes() {
    this._pageRiskIndexes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pageRiskIndexesInput() {
    return this._pageRiskIndexes;
  }

  // policy_reasons - computed: false, optional: true, required: false
  private _policyReasons?: string[]; 
  public get policyReasons() {
    return cdktf.Fn.tolist(this.getListAttribute('policy_reasons'));
  }
  public set policyReasons(value: string[]) {
    this._policyReasons = value;
  }
  public resetPolicyReasons() {
    this._policyReasons = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyReasonsInput() {
    return this._policyReasons;
  }

  // project_name - computed: false, optional: true, required: false
  private _projectName?: string[]; 
  public get projectName() {
    return cdktf.Fn.tolist(this.getListAttribute('project_name'));
  }
  public set projectName(value: string[]) {
    this._projectName = value;
  }
  public resetProjectName() {
    this._projectName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectNameInput() {
    return this._projectName;
  }

  // protocol_types - computed: false, optional: true, required: false
  private _protocolTypes?: string[]; 
  public get protocolTypes() {
    return cdktf.Fn.tolist(this.getListAttribute('protocol_types'));
  }
  public set protocolTypes(value: string[]) {
    this._protocolTypes = value;
  }
  public resetProtocolTypes() {
    this._protocolTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolTypesInput() {
    return this._protocolTypes;
  }

  // referer_urls - computed: false, optional: true, required: false
  private _refererUrls?: string[]; 
  public get refererUrls() {
    return cdktf.Fn.tolist(this.getListAttribute('referer_urls'));
  }
  public set refererUrls(value: string[]) {
    this._refererUrls = value;
  }
  public resetRefererUrls() {
    this._refererUrls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refererUrlsInput() {
    return this._refererUrls;
  }

  // repo_name - computed: false, optional: true, required: false
  private _repoName?: string[]; 
  public get repoName() {
    return cdktf.Fn.tolist(this.getListAttribute('repo_name'));
  }
  public set repoName(value: string[]) {
    this._repoName = value;
  }
  public resetRepoName() {
    this._repoName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repoNameInput() {
    return this._repoName;
  }

  // request_methods - computed: false, optional: true, required: false
  private _requestMethods?: string[]; 
  public get requestMethods() {
    return cdktf.Fn.tolist(this.getListAttribute('request_methods'));
  }
  public set requestMethods(value: string[]) {
    this._requestMethods = value;
  }
  public resetRequestMethods() {
    this._requestMethods = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestMethodsInput() {
    return this._requestMethods;
  }

  // request_sizes - computed: false, optional: true, required: false
  private _requestSizes?: string[]; 
  public get requestSizes() {
    return cdktf.Fn.tolist(this.getListAttribute('request_sizes'));
  }
  public set requestSizes(value: string[]) {
    this._requestSizes = value;
  }
  public resetRequestSizes() {
    this._requestSizes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestSizesInput() {
    return this._requestSizes;
  }

  // response_codes - computed: false, optional: true, required: false
  private _responseCodes?: string[]; 
  public get responseCodes() {
    return cdktf.Fn.tolist(this.getListAttribute('response_codes'));
  }
  public set responseCodes(value: string[]) {
    this._responseCodes = value;
  }
  public resetResponseCodes() {
    this._responseCodes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseCodesInput() {
    return this._responseCodes;
  }

  // response_sizes - computed: false, optional: true, required: false
  private _responseSizes?: string[]; 
  public get responseSizes() {
    return cdktf.Fn.tolist(this.getListAttribute('response_sizes'));
  }
  public set responseSizes(value: string[]) {
    this._responseSizes = value;
  }
  public resetResponseSizes() {
    this._responseSizes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseSizesInput() {
    return this._responseSizes;
  }

  // scan_time - computed: false, optional: true, required: false
  private _scanTime?: string[]; 
  public get scanTime() {
    return cdktf.Fn.tolist(this.getListAttribute('scan_time'));
  }
  public set scanTime(value: string[]) {
    this._scanTime = value;
  }
  public resetScanTime() {
    this._scanTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scanTimeInput() {
    return this._scanTime;
  }

  // scope - computed: false, optional: true, required: false
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

  // server_destination_ips - computed: false, optional: true, required: false
  private _serverDestinationIps?: string[]; 
  public get serverDestinationIps() {
    return cdktf.Fn.tolist(this.getListAttribute('server_destination_ips'));
  }
  public set serverDestinationIps(value: string[]) {
    this._serverDestinationIps = value;
  }
  public resetServerDestinationIps() {
    this._serverDestinationIps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverDestinationIpsInput() {
    return this._serverDestinationIps;
  }

  // server_ips - computed: false, optional: true, required: false
  private _serverIps?: string[]; 
  public get serverIps() {
    return cdktf.Fn.tolist(this.getListAttribute('server_ips'));
  }
  public set serverIps(value: string[]) {
    this._serverIps = value;
  }
  public resetServerIps() {
    this._serverIps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverIpsInput() {
    return this._serverIps;
  }

  // server_source_ips - computed: false, optional: true, required: false
  private _serverSourceIps?: string[]; 
  public get serverSourceIps() {
    return cdktf.Fn.tolist(this.getListAttribute('server_source_ips'));
  }
  public set serverSourceIps(value: string[]) {
    this._serverSourceIps = value;
  }
  public resetServerSourceIps() {
    this._serverSourceIps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverSourceIpsInput() {
    return this._serverSourceIps;
  }

  // server_source_ports - computed: false, optional: true, required: false
  private _serverSourcePorts?: string[]; 
  public get serverSourcePorts() {
    return cdktf.Fn.tolist(this.getListAttribute('server_source_ports'));
  }
  public set serverSourcePorts(value: string[]) {
    this._serverSourcePorts = value;
  }
  public resetServerSourcePorts() {
    this._serverSourcePorts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverSourcePortsInput() {
    return this._serverSourcePorts;
  }

  // session_counts - computed: false, optional: true, required: false
  private _sessionCounts?: string[]; 
  public get sessionCounts() {
    return cdktf.Fn.tolist(this.getListAttribute('session_counts'));
  }
  public set sessionCounts(value: string[]) {
    this._sessionCounts = value;
  }
  public resetSessionCounts() {
    this._sessionCounts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionCountsInput() {
    return this._sessionCounts;
  }

  // siem_type - computed: false, optional: true, required: false
  private _siemType?: string; 
  public get siemType() {
    return this.getStringAttribute('siem_type');
  }
  public set siemType(value: string) {
    this._siemType = value;
  }
  public resetSiemType() {
    this._siemType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get siemTypeInput() {
    return this._siemType;
  }

  // threat_names - computed: false, optional: true, required: false
  private _threatNames?: string[]; 
  public get threatNames() {
    return cdktf.Fn.tolist(this.getListAttribute('threat_names'));
  }
  public set threatNames(value: string[]) {
    this._threatNames = value;
  }
  public resetThreatNames() {
    this._threatNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get threatNamesInput() {
    return this._threatNames;
  }

  // time_zone - computed: false, optional: true, required: false
  private _timeZone?: string; 
  public get timeZone() {
    return this.getStringAttribute('time_zone');
  }
  public set timeZone(value: string) {
    this._timeZone = value;
  }
  public resetTimeZone() {
    this._timeZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeZoneInput() {
    return this._timeZone;
  }

  // traffic_forwards - computed: false, optional: true, required: false
  private _trafficForwards?: string[]; 
  public get trafficForwards() {
    return cdktf.Fn.tolist(this.getListAttribute('traffic_forwards'));
  }
  public set trafficForwards(value: string[]) {
    this._trafficForwards = value;
  }
  public resetTrafficForwards() {
    this._trafficForwards = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficForwardsInput() {
    return this._trafficForwards;
  }

  // transaction_sizes - computed: false, optional: true, required: false
  private _transactionSizes?: string[]; 
  public get transactionSizes() {
    return cdktf.Fn.tolist(this.getListAttribute('transaction_sizes'));
  }
  public set transactionSizes(value: string[]) {
    this._transactionSizes = value;
  }
  public resetTransactionSizes() {
    this._transactionSizes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transactionSizesInput() {
    return this._transactionSizes;
  }

  // tunnel_dest_ips - computed: false, optional: true, required: false
  private _tunnelDestIps?: string[]; 
  public get tunnelDestIps() {
    return cdktf.Fn.tolist(this.getListAttribute('tunnel_dest_ips'));
  }
  public set tunnelDestIps(value: string[]) {
    this._tunnelDestIps = value;
  }
  public resetTunnelDestIps() {
    this._tunnelDestIps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelDestIpsInput() {
    return this._tunnelDestIps;
  }

  // tunnel_ips - computed: false, optional: true, required: false
  private _tunnelIps?: string[]; 
  public get tunnelIps() {
    return cdktf.Fn.tolist(this.getListAttribute('tunnel_ips'));
  }
  public set tunnelIps(value: string[]) {
    this._tunnelIps = value;
  }
  public resetTunnelIps() {
    this._tunnelIps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelIpsInput() {
    return this._tunnelIps;
  }

  // tunnel_source_ips - computed: false, optional: true, required: false
  private _tunnelSourceIps?: string[]; 
  public get tunnelSourceIps() {
    return cdktf.Fn.tolist(this.getListAttribute('tunnel_source_ips'));
  }
  public set tunnelSourceIps(value: string[]) {
    this._tunnelSourceIps = value;
  }
  public resetTunnelSourceIps() {
    this._tunnelSourceIps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelSourceIpsInput() {
    return this._tunnelSourceIps;
  }

  // tunnel_source_port - computed: false, optional: true, required: false
  private _tunnelSourcePort?: string[]; 
  public get tunnelSourcePort() {
    return cdktf.Fn.tolist(this.getListAttribute('tunnel_source_port'));
  }
  public set tunnelSourcePort(value: string[]) {
    this._tunnelSourcePort = value;
  }
  public resetTunnelSourcePort() {
    this._tunnelSourcePort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelSourcePortInput() {
    return this._tunnelSourcePort;
  }

  // tunnel_types - computed: false, optional: true, required: false
  private _tunnelTypes?: string[]; 
  public get tunnelTypes() {
    return cdktf.Fn.tolist(this.getListAttribute('tunnel_types'));
  }
  public set tunnelTypes(value: string[]) {
    this._tunnelTypes = value;
  }
  public resetTunnelTypes() {
    this._tunnelTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelTypesInput() {
    return this._tunnelTypes;
  }

  // url_classes - computed: false, optional: true, required: false
  private _urlClasses?: string[]; 
  public get urlClasses() {
    return cdktf.Fn.tolist(this.getListAttribute('url_classes'));
  }
  public set urlClasses(value: string[]) {
    this._urlClasses = value;
  }
  public resetUrlClasses() {
    this._urlClasses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlClassesInput() {
    return this._urlClasses;
  }

  // url_super_categories - computed: false, optional: true, required: false
  private _urlSuperCategories?: string[]; 
  public get urlSuperCategories() {
    return cdktf.Fn.tolist(this.getListAttribute('url_super_categories'));
  }
  public set urlSuperCategories(value: string[]) {
    this._urlSuperCategories = value;
  }
  public resetUrlSuperCategories() {
    this._urlSuperCategories = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlSuperCategoriesInput() {
    return this._urlSuperCategories;
  }

  // user_agents - computed: false, optional: true, required: false
  private _userAgents?: string[]; 
  public get userAgents() {
    return cdktf.Fn.tolist(this.getListAttribute('user_agents'));
  }
  public set userAgents(value: string[]) {
    this._userAgents = value;
  }
  public resetUserAgents() {
    this._userAgents = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userAgentsInput() {
    return this._userAgents;
  }

  // web_application_classes - computed: false, optional: true, required: false
  private _webApplicationClasses?: string[]; 
  public get webApplicationClasses() {
    return cdktf.Fn.tolist(this.getListAttribute('web_application_classes'));
  }
  public set webApplicationClasses(value: string[]) {
    this._webApplicationClasses = value;
  }
  public resetWebApplicationClasses() {
    this._webApplicationClasses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webApplicationClassesInput() {
    return this._webApplicationClasses;
  }

  // web_applications - computed: false, optional: true, required: false
  private _webApplications?: string[]; 
  public get webApplications() {
    return cdktf.Fn.tolist(this.getListAttribute('web_applications'));
  }
  public set webApplications(value: string[]) {
    this._webApplications = value;
  }
  public resetWebApplications() {
    this._webApplications = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webApplicationsInput() {
    return this._webApplications;
  }

  // web_applications_exclude - computed: false, optional: true, required: false
  private _webApplicationsExclude?: string[]; 
  public get webApplicationsExclude() {
    return cdktf.Fn.tolist(this.getListAttribute('web_applications_exclude'));
  }
  public set webApplicationsExclude(value: string[]) {
    this._webApplicationsExclude = value;
  }
  public resetWebApplicationsExclude() {
    this._webApplicationsExclude = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webApplicationsExcludeInput() {
    return this._webApplicationsExclude;
  }

  // web_traffic_forwards - computed: false, optional: true, required: false
  private _webTrafficForwards?: string[]; 
  public get webTrafficForwards() {
    return cdktf.Fn.tolist(this.getListAttribute('web_traffic_forwards'));
  }
  public set webTrafficForwards(value: string[]) {
    this._webTrafficForwards = value;
  }
  public resetWebTrafficForwards() {
    this._webTrafficForwards = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webTrafficForwardsInput() {
    return this._webTrafficForwards;
  }

  // buckets - computed: false, optional: true, required: false
  private _buckets = new CloudNssFeedBucketsOutputReference(this, "buckets");
  public get buckets() {
    return this._buckets;
  }
  public putBuckets(value: CloudNssFeedBuckets) {
    this._buckets.internalValue = value;
  }
  public resetBuckets() {
    this._buckets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketsInput() {
    return this._buckets.internalValue;
  }

  // casb_tenant - computed: false, optional: true, required: false
  private _casbTenant = new CloudNssFeedCasbTenantOutputReference(this, "casb_tenant");
  public get casbTenant() {
    return this._casbTenant;
  }
  public putCasbTenant(value: CloudNssFeedCasbTenant) {
    this._casbTenant.internalValue = value;
  }
  public resetCasbTenant() {
    this._casbTenant.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get casbTenantInput() {
    return this._casbTenant.internalValue;
  }

  // departments - computed: false, optional: true, required: false
  private _departments = new CloudNssFeedDepartmentsOutputReference(this, "departments");
  public get departments() {
    return this._departments;
  }
  public putDepartments(value: CloudNssFeedDepartments) {
    this._departments.internalValue = value;
  }
  public resetDepartments() {
    this._departments.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get departmentsInput() {
    return this._departments.internalValue;
  }

  // dlp_dictionaries - computed: false, optional: true, required: false
  private _dlpDictionaries = new CloudNssFeedDlpDictionariesOutputReference(this, "dlp_dictionaries");
  public get dlpDictionaries() {
    return this._dlpDictionaries;
  }
  public putDlpDictionaries(value: CloudNssFeedDlpDictionaries) {
    this._dlpDictionaries.internalValue = value;
  }
  public resetDlpDictionaries() {
    this._dlpDictionaries.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dlpDictionariesInput() {
    return this._dlpDictionaries.internalValue;
  }

  // dlp_engines - computed: false, optional: true, required: false
  private _dlpEngines = new CloudNssFeedDlpEnginesOutputReference(this, "dlp_engines");
  public get dlpEngines() {
    return this._dlpEngines;
  }
  public putDlpEngines(value: CloudNssFeedDlpEngines) {
    this._dlpEngines.internalValue = value;
  }
  public resetDlpEngines() {
    this._dlpEngines.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dlpEnginesInput() {
    return this._dlpEngines.internalValue;
  }

  // external_collaborators - computed: false, optional: true, required: false
  private _externalCollaborators = new CloudNssFeedExternalCollaboratorsOutputReference(this, "external_collaborators");
  public get externalCollaborators() {
    return this._externalCollaborators;
  }
  public putExternalCollaborators(value: CloudNssFeedExternalCollaborators) {
    this._externalCollaborators.internalValue = value;
  }
  public resetExternalCollaborators() {
    this._externalCollaborators.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalCollaboratorsInput() {
    return this._externalCollaborators.internalValue;
  }

  // external_owners - computed: false, optional: true, required: false
  private _externalOwners = new CloudNssFeedExternalOwnersOutputReference(this, "external_owners");
  public get externalOwners() {
    return this._externalOwners;
  }
  public putExternalOwners(value: CloudNssFeedExternalOwners) {
    this._externalOwners.internalValue = value;
  }
  public resetExternalOwners() {
    this._externalOwners.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalOwnersInput() {
    return this._externalOwners.internalValue;
  }

  // internal_collaborators - computed: false, optional: true, required: false
  private _internalCollaborators = new CloudNssFeedInternalCollaboratorsOutputReference(this, "internal_collaborators");
  public get internalCollaborators() {
    return this._internalCollaborators;
  }
  public putInternalCollaborators(value: CloudNssFeedInternalCollaborators) {
    this._internalCollaborators.internalValue = value;
  }
  public resetInternalCollaborators() {
    this._internalCollaborators.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internalCollaboratorsInput() {
    return this._internalCollaborators.internalValue;
  }

  // itsm_object_type - computed: false, optional: true, required: false
  private _itsmObjectType = new CloudNssFeedItsmObjectTypeOutputReference(this, "itsm_object_type");
  public get itsmObjectType() {
    return this._itsmObjectType;
  }
  public putItsmObjectType(value: CloudNssFeedItsmObjectType) {
    this._itsmObjectType.internalValue = value;
  }
  public resetItsmObjectType() {
    this._itsmObjectType.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get itsmObjectTypeInput() {
    return this._itsmObjectType.internalValue;
  }

  // location_groups - computed: false, optional: true, required: false
  private _locationGroups = new CloudNssFeedLocationGroupsOutputReference(this, "location_groups");
  public get locationGroups() {
    return this._locationGroups;
  }
  public putLocationGroups(value: CloudNssFeedLocationGroups) {
    this._locationGroups.internalValue = value;
  }
  public resetLocationGroups() {
    this._locationGroups.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationGroupsInput() {
    return this._locationGroups.internalValue;
  }

  // locations - computed: false, optional: true, required: false
  private _locations = new CloudNssFeedLocationsOutputReference(this, "locations");
  public get locations() {
    return this._locations;
  }
  public putLocations(value: CloudNssFeedLocations) {
    this._locations.internalValue = value;
  }
  public resetLocations() {
    this._locations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationsInput() {
    return this._locations.internalValue;
  }

  // nw_services - computed: false, optional: true, required: false
  private _nwServices = new CloudNssFeedNwServicesOutputReference(this, "nw_services");
  public get nwServices() {
    return this._nwServices;
  }
  public putNwServices(value: CloudNssFeedNwServices) {
    this._nwServices.internalValue = value;
  }
  public resetNwServices() {
    this._nwServices.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nwServicesInput() {
    return this._nwServices.internalValue;
  }

  // rules - computed: false, optional: true, required: false
  private _rules = new CloudNssFeedRulesOutputReference(this, "rules");
  public get rules() {
    return this._rules;
  }
  public putRules(value: CloudNssFeedRules) {
    this._rules.internalValue = value;
  }
  public resetRules() {
    this._rules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules.internalValue;
  }

  // sender_name - computed: false, optional: true, required: false
  private _senderName = new CloudNssFeedSenderNameOutputReference(this, "sender_name");
  public get senderName() {
    return this._senderName;
  }
  public putSenderName(value: CloudNssFeedSenderName) {
    this._senderName.internalValue = value;
  }
  public resetSenderName() {
    this._senderName.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get senderNameInput() {
    return this._senderName.internalValue;
  }

  // url_categories - computed: false, optional: true, required: false
  private _urlCategories = new CloudNssFeedUrlCategoriesOutputReference(this, "url_categories");
  public get urlCategories() {
    return this._urlCategories;
  }
  public putUrlCategories(value: CloudNssFeedUrlCategories) {
    this._urlCategories.internalValue = value;
  }
  public resetUrlCategories() {
    this._urlCategories.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlCategoriesInput() {
    return this._urlCategories.internalValue;
  }

  // users - computed: false, optional: true, required: false
  private _users = new CloudNssFeedUsersOutputReference(this, "users");
  public get users() {
    return this._users;
  }
  public putUsers(value: CloudNssFeedUsers) {
    this._users.internalValue = value;
  }
  public resetUsers() {
    this._users.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usersInput() {
    return this._users.internalValue;
  }

  // vpn_credentials - computed: false, optional: true, required: false
  private _vpnCredentials = new CloudNssFeedVpnCredentialsOutputReference(this, "vpn_credentials");
  public get vpnCredentials() {
    return this._vpnCredentials;
  }
  public putVpnCredentials(value: CloudNssFeedVpnCredentials) {
    this._vpnCredentials.internalValue = value;
  }
  public resetVpnCredentials() {
    this._vpnCredentials.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpnCredentialsInput() {
    return this._vpnCredentials.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      action_filter: cdktf.stringToTerraform(this._actionFilter),
      activity: cdktf.listMapper(cdktf.stringToTerraform, false)(this._activity),
      adv_user_agents: cdktf.listMapper(cdktf.stringToTerraform, false)(this._advUserAgents),
      advanced_threats: cdktf.listMapper(cdktf.stringToTerraform, false)(this._advancedThreats),
      alerts: cdktf.listMapper(cdktf.stringToTerraform, false)(this._alerts),
      audit_log_type: cdktf.listMapper(cdktf.stringToTerraform, false)(this._auditLogType),
      authentication_token: cdktf.stringToTerraform(this._authenticationToken),
      authentication_url: cdktf.stringToTerraform(this._authenticationUrl),
      base64_encoded_certificate: cdktf.stringToTerraform(this._base64EncodedCertificate),
      casb_action: cdktf.listMapper(cdktf.stringToTerraform, false)(this._casbAction),
      casb_applications: cdktf.listMapper(cdktf.stringToTerraform, false)(this._casbApplications),
      casb_file_type: cdktf.listMapper(cdktf.stringToTerraform, false)(this._casbFileType),
      casb_file_type_super_categories: cdktf.listMapper(cdktf.stringToTerraform, false)(this._casbFileTypeSuperCategories),
      casb_policy_types: cdktf.listMapper(cdktf.stringToTerraform, false)(this._casbPolicyTypes),
      casb_severity: cdktf.listMapper(cdktf.stringToTerraform, false)(this._casbSeverity),
      channel_name: cdktf.listMapper(cdktf.stringToTerraform, false)(this._channelName),
      client_destination_ips: cdktf.listMapper(cdktf.stringToTerraform, false)(this._clientDestinationIps),
      client_destination_ports: cdktf.listMapper(cdktf.stringToTerraform, false)(this._clientDestinationPorts),
      client_id: cdktf.stringToTerraform(this._clientId),
      client_ips: cdktf.listMapper(cdktf.stringToTerraform, false)(this._clientIps),
      client_secret: cdktf.stringToTerraform(this._clientSecret),
      client_source_ips: cdktf.listMapper(cdktf.stringToTerraform, false)(this._clientSourceIps),
      client_source_ports: cdktf.listMapper(cdktf.stringToTerraform, false)(this._clientSourcePorts),
      connection_headers: cdktf.listMapper(cdktf.stringToTerraform, false)(this._connectionHeaders),
      connection_url: cdktf.stringToTerraform(this._connectionUrl),
      countries: cdktf.listMapper(cdktf.stringToTerraform, false)(this._countries),
      custom_escaped_character: cdktf.listMapper(cdktf.stringToTerraform, false)(this._customEscapedCharacter),
      direction: cdktf.stringToTerraform(this._direction),
      dns_actions: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dnsActions),
      dns_request_types: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dnsRequestTypes),
      dns_response_types: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dnsResponseTypes),
      dns_responses: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dnsResponses),
      domains: cdktf.listMapper(cdktf.stringToTerraform, false)(this._domains),
      download_time: cdktf.listMapper(cdktf.stringToTerraform, false)(this._downloadTime),
      durations: cdktf.listMapper(cdktf.stringToTerraform, false)(this._durations),
      email_dlp_log_type: cdktf.listMapper(cdktf.stringToTerraform, false)(this._emailDlpLogType),
      email_dlp_policy_action: cdktf.stringToTerraform(this._emailDlpPolicyAction),
      end_point_dlp_log_type: cdktf.listMapper(cdktf.stringToTerraform, false)(this._endPointDlpLogType),
      eps_rate_limit: cdktf.numberToTerraform(this._epsRateLimit),
      event: cdktf.stringToTerraform(this._event),
      feed_output_format: cdktf.stringToTerraform(this._feedOutputFormat),
      feed_status: cdktf.stringToTerraform(this._feedStatus),
      file_name: cdktf.listMapper(cdktf.stringToTerraform, false)(this._fileName),
      file_sizes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._fileSizes),
      file_source: cdktf.listMapper(cdktf.stringToTerraform, false)(this._fileSource),
      file_type_categories: cdktf.listMapper(cdktf.stringToTerraform, false)(this._fileTypeCategories),
      file_type_super_categories: cdktf.listMapper(cdktf.stringToTerraform, false)(this._fileTypeSuperCategories),
      firewall_actions: cdktf.listMapper(cdktf.stringToTerraform, false)(this._firewallActions),
      firewall_logging_mode: cdktf.stringToTerraform(this._firewallLoggingMode),
      full_urls: cdktf.listMapper(cdktf.stringToTerraform, false)(this._fullUrls),
      grant_type: cdktf.stringToTerraform(this._grantType),
      host_names: cdktf.listMapper(cdktf.stringToTerraform, false)(this._hostNames),
      in_bound_bytes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._inBoundBytes),
      internal_ips: cdktf.listMapper(cdktf.stringToTerraform, false)(this._internalIps),
      json_array_toggle: cdktf.booleanToTerraform(this._jsonArrayToggle),
      malware_classes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._malwareClasses),
      malware_names: cdktf.listMapper(cdktf.stringToTerraform, false)(this._malwareNames),
      max_batch_size: cdktf.numberToTerraform(this._maxBatchSize),
      name: cdktf.stringToTerraform(this._name),
      nat_actions: cdktf.listMapper(cdktf.stringToTerraform, false)(this._natActions),
      nss_feed_type: cdktf.stringToTerraform(this._nssFeedType),
      nss_log_type: cdktf.stringToTerraform(this._nssLogType),
      nss_type: cdktf.stringToTerraform(this._nssType),
      nw_applications: cdktf.listMapper(cdktf.stringToTerraform, false)(this._nwApplications),
      nw_applications_exclude: cdktf.listMapper(cdktf.stringToTerraform, false)(this._nwApplicationsExclude),
      oauth_authentication: cdktf.booleanToTerraform(this._oauthAuthentication),
      object_name: cdktf.listMapper(cdktf.stringToTerraform, false)(this._objectName),
      object_type: cdktf.listMapper(cdktf.stringToTerraform, false)(this._objectType),
      object_type1: cdktf.listMapper(cdktf.stringToTerraform, false)(this._objectType1),
      object_type2: cdktf.listMapper(cdktf.stringToTerraform, false)(this._objectType2),
      out_bound_bytes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._outBoundBytes),
      page_risk_indexes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._pageRiskIndexes),
      policy_reasons: cdktf.listMapper(cdktf.stringToTerraform, false)(this._policyReasons),
      project_name: cdktf.listMapper(cdktf.stringToTerraform, false)(this._projectName),
      protocol_types: cdktf.listMapper(cdktf.stringToTerraform, false)(this._protocolTypes),
      referer_urls: cdktf.listMapper(cdktf.stringToTerraform, false)(this._refererUrls),
      repo_name: cdktf.listMapper(cdktf.stringToTerraform, false)(this._repoName),
      request_methods: cdktf.listMapper(cdktf.stringToTerraform, false)(this._requestMethods),
      request_sizes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._requestSizes),
      response_codes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._responseCodes),
      response_sizes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._responseSizes),
      scan_time: cdktf.listMapper(cdktf.stringToTerraform, false)(this._scanTime),
      scope: cdktf.stringToTerraform(this._scope),
      server_destination_ips: cdktf.listMapper(cdktf.stringToTerraform, false)(this._serverDestinationIps),
      server_ips: cdktf.listMapper(cdktf.stringToTerraform, false)(this._serverIps),
      server_source_ips: cdktf.listMapper(cdktf.stringToTerraform, false)(this._serverSourceIps),
      server_source_ports: cdktf.listMapper(cdktf.stringToTerraform, false)(this._serverSourcePorts),
      session_counts: cdktf.listMapper(cdktf.stringToTerraform, false)(this._sessionCounts),
      siem_type: cdktf.stringToTerraform(this._siemType),
      threat_names: cdktf.listMapper(cdktf.stringToTerraform, false)(this._threatNames),
      time_zone: cdktf.stringToTerraform(this._timeZone),
      traffic_forwards: cdktf.listMapper(cdktf.stringToTerraform, false)(this._trafficForwards),
      transaction_sizes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._transactionSizes),
      tunnel_dest_ips: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tunnelDestIps),
      tunnel_ips: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tunnelIps),
      tunnel_source_ips: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tunnelSourceIps),
      tunnel_source_port: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tunnelSourcePort),
      tunnel_types: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tunnelTypes),
      url_classes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._urlClasses),
      url_super_categories: cdktf.listMapper(cdktf.stringToTerraform, false)(this._urlSuperCategories),
      user_agents: cdktf.listMapper(cdktf.stringToTerraform, false)(this._userAgents),
      web_application_classes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._webApplicationClasses),
      web_applications: cdktf.listMapper(cdktf.stringToTerraform, false)(this._webApplications),
      web_applications_exclude: cdktf.listMapper(cdktf.stringToTerraform, false)(this._webApplicationsExclude),
      web_traffic_forwards: cdktf.listMapper(cdktf.stringToTerraform, false)(this._webTrafficForwards),
      buckets: cloudNssFeedBucketsToTerraform(this._buckets.internalValue),
      casb_tenant: cloudNssFeedCasbTenantToTerraform(this._casbTenant.internalValue),
      departments: cloudNssFeedDepartmentsToTerraform(this._departments.internalValue),
      dlp_dictionaries: cloudNssFeedDlpDictionariesToTerraform(this._dlpDictionaries.internalValue),
      dlp_engines: cloudNssFeedDlpEnginesToTerraform(this._dlpEngines.internalValue),
      external_collaborators: cloudNssFeedExternalCollaboratorsToTerraform(this._externalCollaborators.internalValue),
      external_owners: cloudNssFeedExternalOwnersToTerraform(this._externalOwners.internalValue),
      internal_collaborators: cloudNssFeedInternalCollaboratorsToTerraform(this._internalCollaborators.internalValue),
      itsm_object_type: cloudNssFeedItsmObjectTypeToTerraform(this._itsmObjectType.internalValue),
      location_groups: cloudNssFeedLocationGroupsToTerraform(this._locationGroups.internalValue),
      locations: cloudNssFeedLocationsToTerraform(this._locations.internalValue),
      nw_services: cloudNssFeedNwServicesToTerraform(this._nwServices.internalValue),
      rules: cloudNssFeedRulesToTerraform(this._rules.internalValue),
      sender_name: cloudNssFeedSenderNameToTerraform(this._senderName.internalValue),
      url_categories: cloudNssFeedUrlCategoriesToTerraform(this._urlCategories.internalValue),
      users: cloudNssFeedUsersToTerraform(this._users.internalValue),
      vpn_credentials: cloudNssFeedVpnCredentialsToTerraform(this._vpnCredentials.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      action_filter: {
        value: cdktf.stringToHclTerraform(this._actionFilter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      activity: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._activity),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      adv_user_agents: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._advUserAgents),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      advanced_threats: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._advancedThreats),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      alerts: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._alerts),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      audit_log_type: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._auditLogType),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      authentication_token: {
        value: cdktf.stringToHclTerraform(this._authenticationToken),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      authentication_url: {
        value: cdktf.stringToHclTerraform(this._authenticationUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      base64_encoded_certificate: {
        value: cdktf.stringToHclTerraform(this._base64EncodedCertificate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      casb_action: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._casbAction),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      casb_applications: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._casbApplications),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      casb_file_type: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._casbFileType),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      casb_file_type_super_categories: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._casbFileTypeSuperCategories),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      casb_policy_types: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._casbPolicyTypes),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      casb_severity: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._casbSeverity),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      channel_name: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._channelName),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      client_destination_ips: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._clientDestinationIps),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      client_destination_ports: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._clientDestinationPorts),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      client_id: {
        value: cdktf.stringToHclTerraform(this._clientId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_ips: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._clientIps),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      client_secret: {
        value: cdktf.stringToHclTerraform(this._clientSecret),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_source_ips: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._clientSourceIps),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      client_source_ports: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._clientSourcePorts),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      connection_headers: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._connectionHeaders),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      connection_url: {
        value: cdktf.stringToHclTerraform(this._connectionUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      countries: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._countries),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      custom_escaped_character: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._customEscapedCharacter),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      direction: {
        value: cdktf.stringToHclTerraform(this._direction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dns_actions: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dnsActions),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      dns_request_types: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dnsRequestTypes),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      dns_response_types: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dnsResponseTypes),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      dns_responses: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dnsResponses),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      domains: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._domains),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      download_time: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._downloadTime),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      durations: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._durations),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      email_dlp_log_type: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._emailDlpLogType),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      email_dlp_policy_action: {
        value: cdktf.stringToHclTerraform(this._emailDlpPolicyAction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      end_point_dlp_log_type: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._endPointDlpLogType),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      eps_rate_limit: {
        value: cdktf.numberToHclTerraform(this._epsRateLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      event: {
        value: cdktf.stringToHclTerraform(this._event),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      feed_output_format: {
        value: cdktf.stringToHclTerraform(this._feedOutputFormat),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      feed_status: {
        value: cdktf.stringToHclTerraform(this._feedStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      file_name: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._fileName),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      file_sizes: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._fileSizes),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      file_source: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._fileSource),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      file_type_categories: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._fileTypeCategories),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      file_type_super_categories: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._fileTypeSuperCategories),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      firewall_actions: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._firewallActions),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      firewall_logging_mode: {
        value: cdktf.stringToHclTerraform(this._firewallLoggingMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      full_urls: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._fullUrls),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      grant_type: {
        value: cdktf.stringToHclTerraform(this._grantType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      host_names: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._hostNames),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      in_bound_bytes: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._inBoundBytes),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      internal_ips: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._internalIps),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      json_array_toggle: {
        value: cdktf.booleanToHclTerraform(this._jsonArrayToggle),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      malware_classes: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._malwareClasses),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      malware_names: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._malwareNames),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      max_batch_size: {
        value: cdktf.numberToHclTerraform(this._maxBatchSize),
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
      nat_actions: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._natActions),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      nss_feed_type: {
        value: cdktf.stringToHclTerraform(this._nssFeedType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nss_log_type: {
        value: cdktf.stringToHclTerraform(this._nssLogType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nss_type: {
        value: cdktf.stringToHclTerraform(this._nssType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nw_applications: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._nwApplications),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      nw_applications_exclude: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._nwApplicationsExclude),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      oauth_authentication: {
        value: cdktf.booleanToHclTerraform(this._oauthAuthentication),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      object_name: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._objectName),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      object_type: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._objectType),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      object_type1: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._objectType1),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      object_type2: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._objectType2),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      out_bound_bytes: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._outBoundBytes),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      page_risk_indexes: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._pageRiskIndexes),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      policy_reasons: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._policyReasons),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      project_name: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._projectName),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      protocol_types: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._protocolTypes),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      referer_urls: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._refererUrls),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      repo_name: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._repoName),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      request_methods: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._requestMethods),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      request_sizes: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._requestSizes),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      response_codes: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._responseCodes),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      response_sizes: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._responseSizes),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      scan_time: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._scanTime),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      scope: {
        value: cdktf.stringToHclTerraform(this._scope),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      server_destination_ips: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._serverDestinationIps),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      server_ips: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._serverIps),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      server_source_ips: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._serverSourceIps),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      server_source_ports: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._serverSourcePorts),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      session_counts: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._sessionCounts),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      siem_type: {
        value: cdktf.stringToHclTerraform(this._siemType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      threat_names: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._threatNames),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      time_zone: {
        value: cdktf.stringToHclTerraform(this._timeZone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      traffic_forwards: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._trafficForwards),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      transaction_sizes: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._transactionSizes),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      tunnel_dest_ips: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tunnelDestIps),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      tunnel_ips: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tunnelIps),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      tunnel_source_ips: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tunnelSourceIps),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      tunnel_source_port: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tunnelSourcePort),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      tunnel_types: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tunnelTypes),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      url_classes: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._urlClasses),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      url_super_categories: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._urlSuperCategories),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      user_agents: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._userAgents),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      web_application_classes: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._webApplicationClasses),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      web_applications: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._webApplications),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      web_applications_exclude: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._webApplicationsExclude),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      web_traffic_forwards: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._webTrafficForwards),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      buckets: {
        value: cloudNssFeedBucketsToHclTerraform(this._buckets.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "CloudNssFeedBucketsList",
      },
      casb_tenant: {
        value: cloudNssFeedCasbTenantToHclTerraform(this._casbTenant.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "CloudNssFeedCasbTenantList",
      },
      departments: {
        value: cloudNssFeedDepartmentsToHclTerraform(this._departments.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "CloudNssFeedDepartmentsList",
      },
      dlp_dictionaries: {
        value: cloudNssFeedDlpDictionariesToHclTerraform(this._dlpDictionaries.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "CloudNssFeedDlpDictionariesList",
      },
      dlp_engines: {
        value: cloudNssFeedDlpEnginesToHclTerraform(this._dlpEngines.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "CloudNssFeedDlpEnginesList",
      },
      external_collaborators: {
        value: cloudNssFeedExternalCollaboratorsToHclTerraform(this._externalCollaborators.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "CloudNssFeedExternalCollaboratorsList",
      },
      external_owners: {
        value: cloudNssFeedExternalOwnersToHclTerraform(this._externalOwners.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "CloudNssFeedExternalOwnersList",
      },
      internal_collaborators: {
        value: cloudNssFeedInternalCollaboratorsToHclTerraform(this._internalCollaborators.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "CloudNssFeedInternalCollaboratorsList",
      },
      itsm_object_type: {
        value: cloudNssFeedItsmObjectTypeToHclTerraform(this._itsmObjectType.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "CloudNssFeedItsmObjectTypeList",
      },
      location_groups: {
        value: cloudNssFeedLocationGroupsToHclTerraform(this._locationGroups.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "CloudNssFeedLocationGroupsList",
      },
      locations: {
        value: cloudNssFeedLocationsToHclTerraform(this._locations.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "CloudNssFeedLocationsList",
      },
      nw_services: {
        value: cloudNssFeedNwServicesToHclTerraform(this._nwServices.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "CloudNssFeedNwServicesList",
      },
      rules: {
        value: cloudNssFeedRulesToHclTerraform(this._rules.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "CloudNssFeedRulesList",
      },
      sender_name: {
        value: cloudNssFeedSenderNameToHclTerraform(this._senderName.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "CloudNssFeedSenderNameList",
      },
      url_categories: {
        value: cloudNssFeedUrlCategoriesToHclTerraform(this._urlCategories.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "CloudNssFeedUrlCategoriesList",
      },
      users: {
        value: cloudNssFeedUsersToHclTerraform(this._users.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "CloudNssFeedUsersList",
      },
      vpn_credentials: {
        value: cloudNssFeedVpnCredentialsToHclTerraform(this._vpnCredentials.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "CloudNssFeedVpnCredentialsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
