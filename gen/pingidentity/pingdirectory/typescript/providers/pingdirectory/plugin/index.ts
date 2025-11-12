// https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/plugin
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PluginConfig extends cdktf.TerraformMetaArguments {
  /**
  * An optional SCIM filter that will be ANDed with the filter created to identify the account in the PingOne service that corresponds to the local entry. Only the "eq", "sw", "and", and "or" filter types may be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/plugin#additional_user_mapping_scim_filter Plugin#additional_user_mapping_scim_filter}
  */
  readonly additionalUserMappingScimFilter?: string;
  /**
  * The hostname or IP address of the SNMP master agent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/plugin#agentx_address Plugin#agentx_address}
  */
  readonly agentxAddress?: string;
  /**
  * The port number on which the SNMP master agent will be contacted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/plugin#agentx_port Plugin#agentx_port}
  */
  readonly agentxPort?: number;
  /**
  * When the `type` attribute is set to:
  *   - `ping-one-pass-through-authentication`: Indicates whether to overwrite the user's local password even if the password used to authenticate to the PingOne service would have failed validation if the user attempted to set it directly.
  *   - `pass-through-authentication`: Indicates whether updates to the local password value should accept passwords that do not meet password policy constraints.
  *   - `pluggable-pass-through-authentication`: Indicates whether to overwrite the user's local password even if the password used to authenticate to the external service would have failed validation if the user attempted to set it directly.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/plugin#allow_lax_pass_through_authentication_passwords Plugin#allow_lax_pass_through_authentication_passwords}
  */
  readonly allowLaxPassThroughAuthenticationPasswords?: boolean | cdktf.IResolvable;
  /**
  * Specifies the OIDs of the controls that are allowed to be present in operations to coalesce. These controls are passed through when the request is validated, but they will not be included when the background thread applies the coalesced modify requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/plugin#allowed_request_control Plugin#allowed_request_control}
  */
  readonly allowedRequestControl?: string[];
  /**
  * When the `type` attribute is set to:
  *   - `dn-mapper`: Indicates whether DNs in response messages containing the target DN should always be remapped back to the source DN. If this is "false", then mapping will be performed for a response message only if one or more elements of the associated request are mapped. Otherwise, the mapping will be performed for all responses regardless of whether the mapping was applied to the request.
  *   - `attribute-mapper`: Indicates whether the target attribute in response messages should always be remapped back to the source attribute. If this is "false", then the mapping will be performed for a response message only if one or more elements of the associated request are mapped. Otherwise, the mapping will be performed for all responses regardless of whether the mapping was applied to the request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/plugin#always_map_responses Plugin#always_map_responses}
  */
  readonly alwaysMapResponses?: boolean | cdktf.IResolvable;
  /**
  * Specifies the API endpoint for the PingOne web service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/plugin#api_url Plugin#api_url}
  */
  readonly apiUrl?: string;
  /**
  * Specifies whether to append to existing log files.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/plugin#append Plugin#append}
  */
  readonly append?: boolean | cdktf.IResolvable;
  /**
  * When the `type` attribute is set to:
  *   - `seven-bit-clean`: Specifies the name or OID of an attribute type for which values should be checked to ensure that they are 7-bit clean.
  *   - `encrypt-attribute-values`: The attribute types whose values should be encrypted.
  *   - `composed-attribute`: The name or OID of the attribute type for which values are to be generated.
  *   - `referential-integrity`: Specifies the attribute types for which referential integrity is to be maintained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/plugin#attribute_type Plugin#attribute_type}
  */
  readonly attributeType?: string[];
  /**
  * Specifies the API endpoint for the PingOne authentication service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/plugin#auth_url Plugin#auth_url}
  */
  readonly authUrl?: string;
  /**
  * When the `type` attribute is set to:
  *   - One of [`clean-up-expired-pingfederate-persistent-access-grants`, `purge-expired-data`, `clean-up-inactive-pingfederate-persistent-sessions`, `clean-up-expired-pingfederate-persistent-sessions`]: Only entries located within the subtree specified by this base DN are eligible for purging.
  *   - `internal-search-rate`: Specifies the base DN to use for the searches to perform.
  *   - `modifiable-password-policy-state`: A base DN that may be used to identify entries that should support the ds-pwp-modifiable-state-json operational attribute.
  *   - `seven-bit-clean`: Specifies the base DN below which the checking is performed.
  *   - `search-shutdown`: The base DN to use for the search.
  *   - `referral-on-update`: Specifies a base DN for requests for which to send referrals in response to update operations.
  *   - `referential-integrity`: Specifies the base DN that limits the scope within which referential integrity is maintained.
  *   - `unique-attribute`: Specifies a base DN within which the attribute must be unique.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/plugin#base_dn Plugin#base_dn}
  */
  readonly baseDn?: string[];
  /**
  * A pattern to use to construct the bind DN for the simple bind request to send to the remote server. This may consist of a combination of static text and attribute values and other directives enclosed in curly braces.  For example, the value "cn={cn},ou=People,dc=example,dc=com" indicates that the remote bind DN should be constructed from the text "cn=" followed by the value of the local entry's cn attribute followed by the text "ou=People,dc=example,dc=com". If an attribute contains the value to use as the bind DN for pass-through authentication, then the pattern may simply be the name of that attribute in curly braces (e.g., if the seeAlso attribute contains the bind DN for the target user, then a bind DN pattern of "{seeAlso}" would be appropriate).  Note that a bind DN pattern can be used to construct a bind DN that is not actually a valid LDAP distinguished name. For example, if authentication is being passed through to a Microsoft Active Directory server, then a bind DN pattern could be used to construct a user principal name (UPN) as an alternative to a distinguished name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/plugin#bind_dn_pattern Plugin#bind_dn_pattern}
  */
  readonly bindDnPattern?: string;
  /**
  * When the `type` attribute is set to:
  *   - `stats-collector`: Some of the calculated statistics, such as the average and maximum queue sizes, can use multiple samples within a log interval. This value controls how often samples are gathered, and setting this value too small can have an adverse impact on performance.
  *   - `periodic-stats-logger`: Some of the calculated statistics, such as the average and maximum queue sizes, can use multiple samples within a log interval. This value controls how often samples are gathered. It should be a multiple of the log-interval.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/plugin#collection_interval Plugin#collection_interval}
  */
  readonly collectionInterval?: string;
  /**
  * The maximum amount of time to wait between attempts to establish a connection to the master agent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/plugin#connect_retry_max_wait Plugin#connect_retry_max_wait}
  */
  readonly connectRetryMaxWait?: string;
  /**
  * When the `type` attribute is set to:
  *   - `ping-one-pass-through-authentication`: A reference to connection criteria that will be used to indicate which bind requests should be passed through to the PingOne service.
  *   - `pass-through-authentication`: Specifies a set of connection criteria that must match the client associated with the bind request for the bind to be passed through to an alternate server.
  *   - `simple-to-external-bind`: Specifies a connection criteria object that may be used to indicate the set of clients for which this plugin should be used. If a value is provided, then this plugin will only be used for requests from client connections matching this criteria.
  *   - `delay`: Specifies a set of connection criteria used to indicate that only operations from clients matching this criteria should be subject to the configured delay.
  *   - `pluggable-pass-through-authentication`: A reference to connection criteria that will be used to indicate which bind requests should be passed through to the external authentication service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/plugin#connection_criteria Plugin#connection_criteria}
  */
  readonly connectionCriteria?: string;
  /**
  * The SNMP context name for this sub-agent. The context name must not be longer than 30 ASCII characters. Each server in a topology must have a unique SNMP context name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/plugin#context_name Plugin#context_name}
  */
  readonly contextName?: string;
  /**
  * When the datetime-format property is configured with a value of "custom", this specifies the format (using a string compatible with the java.text.SimpleDateFormat class) that will be used to search for expired data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/plugin#custom_datetime_format Plugin#custom_datetime_format}
  */
  readonly customDatetimeFormat?: string;
  /**
  * Specifies the time zone to use when generating a date string using the configured custom-datetime-format value. The provided value must be accepted by java.util.TimeZone.getTimeZone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/plugin#custom_timezone Plugin#custom_timezone}
  */
  readonly customTimezone?: string;
  /**
  * The LDAP attribute that determines when data should be deleted. This could store the expiration time, or it could store the creation time and the expiration-offset property specifies the duration before data is deleted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/plugin#datetime_attribute Plugin#datetime_attribute}
  */
  readonly datetimeAttribute?: string;
  /**
  * Specifies the format of the datetime stored within the entry that determines when data should be purged.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/plugin#datetime_format Plugin#datetime_format}
  */
  readonly datetimeFormat?: string;
  /**
  * The top-level JSON field within the configured datetime-attribute that determines when data should be deleted. This could store the expiration time, or it could store the creation time and the expiration-offset property specifies the duration before data is deleted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/plugin#datetime_json_field Plugin#datetime_json_field}
  */
  readonly datetimeJsonField?: string;
  /**
  * The delay to inject for operations matching the associated criteria.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/plugin#delay Plugin#delay}
  */
  readonly delay?: string;
  /**
  * Specifies the length of time that the Directory Server should wait after sending the "force-gc-starting" administrative alert before actually invoking the garbage collection processing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/plugin#delay_after_alert Plugin#delay_after_alert}
  */
  readonly delayAfterAlert?: string;
  /**
  * Specifies the length of time that the Directory Server should wait after successfully completing the garbage collection processing, before removing the "force-gc-starting" administrative alert, which marks the server as unavailable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/plugin#delay_post_gc Plugin#delay_post_gc}
  */
  readonly delayPostGc?: string;
  /**
  * A description for this Plugin
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/plugin#description Plugin#description}
  */
  readonly description?: string;
  /**
  * Specifies one or more DN mappings that may be used to transform bind DNs before attempting to bind to the external servers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/plugin#dn_map Plugin#dn_map}
  */
  readonly dnMap?: string[];
  /**
  * This property controls whether a value in the output is shown as empty if the value is zero.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/plugin#empty_instead_of_zero Plugin#empty_instead_of_zero}
  */
  readonly emptyInsteadOfZero?: boolean | cdktf.IResolvable;
  /**
  * Indicates whether DN mapping should be applied to the values of attributes with appropriate syntaxes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/plugin#enable_attribute_mapping Plugin#enable_attribute_mapping}
  */
  readonly enableAttributeMapping?: boolean | cdktf.IResolvable;
  /**
  * When the `type` attribute is set to:
  *   - `dn-mapper`: Indicates whether DN mapping should be applied to DNs that may be present in specific controls. DN mapping will only be applied for control types which are specifically supported by the DN mapper plugin.
  *   - `attribute-mapper`: Indicates whether mapping should be applied to attribute types that may be present in specific controls. If enabled, attribute mapping will only be applied for control types which are specifically supported by the attribute mapper plugin.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/plugin#enable_control_mapping Plugin#enable_control_mapping}
  */
  readonly enableControlMapping?: boolean | cdktf.IResolvable;
  /**
  * Indicates whether the plug-in is enabled for use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/plugin#enabled Plugin#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Specifies the level of detail to include for each entry cache.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/plugin#entry_cache_info Plugin#entry_cache_info}
  */
  readonly entryCacheInfo?: string;
  /**
  * Specifies the PingOne Environment that will be associated with this PingOne Pass Through Authentication Plugin.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/plugin#environment_id Plugin#environment_id}
  */
  readonly environmentId?: string;
  /**
  * The set of base DNs below which composed values will not be generated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/plugin#exclude_base_dn Plugin#exclude_base_dn}
  */
  readonly excludeBaseDn?: string[];
  /**
  * The set of search filters that identify entries for which composed values will not be generated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/plugin#exclude_filter Plugin#exclude_filter}
  */
  readonly excludeFilter?: string[];
  /**
  * When the `type` attribute is set to:
  *   - `purge-expired-data`: The duration to wait after the value specified in datetime-attribute (and optionally datetime-json-field) before purging the data.
  *   - `clean-up-inactive-pingfederate-persistent-sessions`: Sessions whose last activity timestamp is older than this offset will be removed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/plugin#expiration_offset Plugin#expiration_offset}
  */
  readonly expirationOffset?: string;
  /**
  * The set of arguments used to customize the behavior for the Third Party Plugin. Each configuration property should be given in the form 'name=value'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/plugin#extension_argument Plugin#extension_argument}
  */
  readonly extensionArgument?: string[];
  /**
  * The fully-qualified name of the Java class providing the logic for the Third Party Plugin.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/plugin#extension_class Plugin#extension_class}
  */
  readonly extensionClass?: string;
  /**
  * When the `type` attribute is set to:
  *   - `modifiable-password-policy-state`: A filter that may be used to identify entries that should support the ds-pwp-modifiable-state-json operational attribute.
  *   - `search-shutdown`: The filter to use for the search.
  *   - `purge-expired-data`: Only entries that match this LDAP filter will be eligible for having data purged.
  *   - `unique-attribute`: Specifies the search filter to apply to determine if attribute uniqueness is enforced for the matching entries.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/plugin#filter Plugin#filter}
  */
  readonly filter?: string[];
  /**
  * Specifies a prefix which will be used in front of the randomly-selected numeric value in all search filters used. If no upper bound is defined, then this should contain the entire filter string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/plugin#filter_prefix Plugin#filter_prefix}
  */
  readonly filterPrefix?: string;
  /**
  * Specifies a suffix which will be used after of the randomly-selected numeric value in all search filters used. If no upper bound is defined, then this should be omitted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/plugin#filter_suffix Plugin#filter_suffix}
  */
  readonly filterSuffix?: string;
  /**
  * Specifies the level of detail to include for Gauges.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/plugin#gauge_info Plugin#gauge_info}
  */
  readonly gaugeInfo?: string;
  /**
  * This property controls whether the header prefix, which applies to a group of columns, appears at the start of each column header or only the first column in a group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/plugin#header_prefix_per_column Plugin#header_prefix_per_column}
  */
  readonly headerPrefixPerColumn?: boolean | cdktf.IResolvable;
  /**
  * The format of the data in the processing time histogram.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/plugin#histogram_format Plugin#histogram_format}
  */
  readonly histogramFormat?: string;
  /**
  * Specifies the operation type(s) to use when outputting the response time histogram data. The order of the operations here determines the order of the columns in the output. Use the per-application-ldap-stats setting to further control this.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/plugin#histogram_op_type Plugin#histogram_op_type}
  */
  readonly histogramOpType?: string[];
  /**
  * Specifies the level of detail to include about the host system resource utilization including CPU, memory, disk and network activity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/plugin#host_info Plugin#host_info}
  */
  readonly hostInfo?: string[];
  /**
  * A reference to an HTTP proxy server that should be used for requests sent to the PingOne service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/plugin#http_proxy_external_server Plugin#http_proxy_external_server}
  */
  readonly httpProxyExternalServer?: string;
  /**
  * When the `type` attribute is set to:
  *   - `ping-one-pass-through-authentication`: A set of password policy state error conditions that should not be enforced when authentication succeeds when attempted in the PingOne service. This option can only be used if try-local-bind is true.
  *   - `pluggable-pass-through-authentication`: A set of password policy state error conditions that should not be enforced when authentication succeeds when attempted in the external service. This option can only be used if try-local-bind is true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/plugin#ignored_password_policy_state_error_condition Plugin#ignored_password_policy_state_error_condition}
  */
  readonly ignoredPasswordPolicyStateErrorCondition?: string[];
  /**
  * When the `type` attribute is set to:
  *   - `search-shutdown`: The name of an attribute that should be included in the results. This may include any token which is allowed as a requested attribute in search requests, including the name of an attribute, an asterisk (to indicate all user attributes), a plus sign (to indicate all operational attributes), an object class name preceded with an at symbol (to indicate all attributes associated with that object class), an attribute name preceded by a caret (to indicate that attribute should be excluded), or an object class name preceded by a caret and an at symbol (to indicate that all attributes associated with that object class should be excluded).
  *   - `last-mod`: Specifies the name or OID of an attribute type that must be updated in order for the modifiersName and modifyTimestamp attributes to be updated in the target entry.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/plugin#include_attribute Plugin#include_attribute}
  */
  readonly includeAttribute?: string[];
  /**
  * The set of base DNs below which composed values may be generated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/plugin#include_base_dn Plugin#include_base_dn}
  */
  readonly includeBaseDn?: string[];
  /**
  * The set of search filters that identify entries for which composed values may be generated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/plugin#include_filter Plugin#include_filter}
  */
  readonly includeFilter?: string[];
  /**
  * Supported in PingDirectory product version 10.3.0.0+. Specifies whether to log moving averages (1, 5, and 15-minute intervals) for HTTP socket, connection, queue, request, and response durations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/plugin#include_http_metrics Plugin#include_http_metrics}
  */
  readonly includeHttpMetrics?: boolean | cdktf.IResolvable;
  /**
  * If statistics should not be included for all applications, this property names the subset of applications that should be included.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/plugin#included_ldap_application Plugin#included_ldap_application}
  */
  readonly includedLdapApplication?: string[];
  /**
  * Specifies the types of statistics related to LDAP connections and operation processing that should be included in the output.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/plugin#included_ldap_stat Plugin#included_ldap_stat}
  */
  readonly includedLdapStat?: string[];
  /**
  * When the `type` attribute is set to:
  *   - `ping-one-pass-through-authentication`: The base DNs for the local users whose authentication attempts may be passed through to the PingOne service.
  *   - `pass-through-authentication`: The base DNs for the local users whose authentication attempts may be passed through to an alternate server.
  *   - `pluggable-pass-through-authentication`: The base DNs for the local users whose authentication attempts may be passed through to the external authentication service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/plugin#included_local_entry_base_dn Plugin#included_local_entry_base_dn}
  */
  readonly includedLocalEntryBaseDn?: string[];
  /**
  * Specifies whether statistics related to resource utilization such as JVM memory.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/plugin#included_resource_stat Plugin#included_resource_stat}
  */
  readonly includedResourceStat?: string[];
  /**
  * Specifies the initial number of connections to establish to each external server against which authentication may be attempted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/plugin#initial_connections Plugin#initial_connections}
  */
  readonly initialConnections?: number;
  /**
  * Indicates whether the plug-in should be invoked for internal operations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/plugin#invoke_for_internal_operations Plugin#invoke_for_internal_operations}
  */
  readonly invokeForInternalOperations?: boolean | cdktf.IResolvable;
  /**
  * Specifies the days of the week which the Periodic GC Plugin should run. If no values are provided, then the plugin will run every day at the specified time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/plugin#invoke_gc_day_of_week Plugin#invoke_gc_day_of_week}
  */
  readonly invokeGcDayOfWeek?: string[];
  /**
  * Specifies the times of the day at which garbage collection may be explicitly invoked. The times should be specified in "HH:MM" format, with "HH" as a two-digit numeric value between 00 and 23 representing the hour of the day, and MM as a two-digit numeric value between 00 and 59 representing the minute of the hour. All times will be interpreted in the UTC time zone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/plugin#invoke_gc_time_utc Plugin#invoke_gc_time_utc}
  */
  readonly invokeGcTimeUtc?: string[];
  /**
  * Specifies the level of detail to include for the LDAP changelog.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/plugin#ldap_changelog_info Plugin#ldap_changelog_info}
  */
  readonly ldapChangelogInfo?: string;
  /**
  * The number of lines to log between logging the header line that summarizes the columns in the table.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/plugin#lines_between_header Plugin#lines_between_header}
  */
  readonly linesBetweenHeader?: number;
  /**
  * Specifies the level of detail to include about the Local DB Backends.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/plugin#local_db_backend_info Plugin#local_db_backend_info}
  */
  readonly localDbBackendInfo?: string;
  /**
  * When the `type` attribute is set to:
  *   - `periodic-stats-logger`: The file name to use for the log files generated by the Periodic Stats Logger Plugin. The path to the file can be specified either as relative to the server root or as an absolute path.
  *   - `monitor-history`: The file name to use for the log files generated by the Monitor History Plugin. The path to the file can be specified either as relative to the server root or as an absolute path.
  *   - `referential-integrity`: Specifies the log file location where the update records are written when the plug-in is in background-mode processing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/plugin#log_file Plugin#log_file}
  */
  readonly logFile?: string;
  /**
  * Specifies the format to use when logging server statistics.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/plugin#log_file_format Plugin#log_file_format}
  */
  readonly logFileFormat?: string;
  /**
  * When the `type` attribute is set to:
  *   - `periodic-stats-logger`: The UNIX permissions of the log files created by this Periodic Stats Logger Plugin.
  *   - `monitor-history`: The UNIX permissions of the log files created by this Monitor History Plugin.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/plugin#log_file_permissions Plugin#log_file_permissions}
  */
  readonly logFilePermissions?: string;
  /**
  * When the `type` attribute is set to:
  *   - `periodic-stats-logger`: The duration between statistics collection and logging. A new line is logged to the output for each interval. Setting this value too small can have an impact on performance.
  *   - `monitor-history`: The duration between logging dumps of cn=monitor to a file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/plugin#log_interval Plugin#log_interval}
  */
  readonly logInterval?: string;
  /**
  * Specifies the behavior that the server should exhibit if an error occurs during logging processing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/plugin#logging_error_behavior Plugin#logging_error_behavior}
  */
  readonly loggingErrorBehavior?: string;
  /**
  * Specifies the lower bound for the numeric value which will be inserted into the search filter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/plugin#lower_bound Plugin#lower_bound}
  */
  readonly lowerBound?: number;
  /**
  * Specifies a set of specific attributes for which DN mapping should be applied. This will only be applicable if the enable-attribute-mapping property has a value of "true". Any attributes listed must be defined in the server schema with either the distinguished name syntax or the name and optional UID syntax.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/plugin#map_attribute Plugin#map_attribute}
  */
  readonly mapAttribute?: string[];
  /**
  * Specifies the maximum number of connections to maintain to each external server against which authentication may be attempted. This value must be greater than or equal to the value for the initial-connections property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/plugin#max_connections Plugin#max_connections}
  */
  readonly maxConnections?: number;
  /**
  * This setting smooths out the performance impact on the server by throttling the purging to the specified maximum number of updates per second. To avoid a large backlog, this value should be set comfortably above the average rate that expired data is generated. When purge-behavior is set to subtree-delete-entries, then deletion of the entire subtree is considered a single update for the purposes of throttling.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/plugin#max_updates_per_second Plugin#max_updates_per_second}
  */
  readonly maxUpdatesPerSecond?: number;
  /**
  * An integer property that specifies the maximum number of membership changes that will be supported in a single modify operation. A value of zero indicates that modify operations targeting the group entry should not be permitted to alter the set of members for the group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/plugin#maximum_membership_updates_per_modify Plugin#maximum_membership_updates_per_modify}
  */
  readonly maximumMembershipUpdatesPerModify?: number;
  /**
  * The behavior to exhibit for source attributes that have multiple values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/plugin#multi_valued_attribute_behavior Plugin#multi_valued_attribute_behavior}
  */
  readonly multiValuedAttributeBehavior?: string;
  /**
  * The behavior to exhibit if multiple attribute types are specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/plugin#multiple_attribute_behavior Plugin#multiple_attribute_behavior}
  */
  readonly multipleAttributeBehavior?: string;
  /**
  * The behavior to exhibit if the plugin is configured with multiple value patterns.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/plugin#multiple_value_pattern_behavior Plugin#multiple_value_pattern_behavior}
  */
  readonly multipleValuePatternBehavior?: string;
  /**
  * Name of this config object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/plugin#name Plugin#name}
  */
  readonly name: string;
  /**
  * The number of threads used to delete expired entries.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/plugin#num_delete_threads Plugin#num_delete_threads}
  */
  readonly numDeleteThreads?: number;
  /**
  * This controls how many of the most expensive phases are included per operation type in the monitor entry.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/plugin#num_most_expensive_phases_shown Plugin#num_most_expensive_phases_shown}
  */
  readonly numMostExpensivePhasesShown?: number;
  /**
  * Specifies the number of concurrent threads that should be used to process the search operations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/plugin#num_threads Plugin#num_threads}
  */
  readonly numThreads?: number;
  /**
  * The number of worker threads to use to handle SNMP requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/plugin#num_worker_threads Plugin#num_worker_threads}
  */
  readonly numWorkerThreads?: number;
  /**
  * Specifies the OAuth Client ID used to authenticate connections to the PingOne API.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/plugin#oauth_client_id Plugin#oauth_client_id}
  */
  readonly oauthClientId?: string;
  /**
  * Specifies the OAuth Client Secret used to authenticate connections to the PingOne API.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/plugin#oauth_client_secret Plugin#oauth_client_secret}
  */
  readonly oauthClientSecret?: string;
  /**
  * Specifies a passphrase provider that can be used to obtain the OAuth Client Secret used to authenticate connections to the PingOne API.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/plugin#oauth_client_secret_passphrase_provider Plugin#oauth_client_secret_passphrase_provider}
  */
  readonly oauthClientSecretPassphraseProvider?: string;
  /**
  * The path of an LDIF file that should be created with the results of the search.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/plugin#output_file Plugin#output_file}
  */
  readonly outputFile?: string;
  /**
  * When the `type` attribute is set to:
  *   - `ping-one-pass-through-authentication`: Indicates whether to attempt the authentication in the PingOne service if the local user entry includes a password. This property will only be used if try-local-bind is true.
  *   - `pass-through-authentication`: Indicates whether the bind attempt should be attempted against a remote server in the event that the local bind fails but the local password is present.
  *   - `pluggable-pass-through-authentication`: Indicates whether to attempt the authentication in the external service if the local user entry includes a password. This property will be ignored if try-local-bind is false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/plugin#override_local_password Plugin#override_local_password}
  */
  readonly overrideLocalPassword?: boolean | cdktf.IResolvable;
  /**
  * The component used to manage authentication with the external authentication service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/plugin#pass_through_authentication_handler Plugin#pass_through_authentication_handler}
  */
  readonly passThroughAuthenticationHandler?: string;
  /**
  * In a replicated environment, this determines the order in which peer servers should attempt to purge data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/plugin#peer_server_priority_index Plugin#peer_server_priority_index}
  */
  readonly peerServerPriorityIndex?: number;
  /**
  * Controls whether per application LDAP statistics are included in the output for selected LDAP operation statistics.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/plugin#per_application_ldap_stats Plugin#per_application_ldap_stats}
  */
  readonly perApplicationLdapStats?: string;
  /**
  * The amount of time between consecutive pings sent by the sub-agent on its connection to the master agent. A value of zero disables the sending of pings by the sub-agent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/plugin#ping_interval Plugin#ping_interval}
  */
  readonly pingInterval?: string;
  /**
  * Specifies the set of plug-in types for the plug-in, which specifies the times at which the plug-in is invoked.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/plugin#plugin_type Plugin#plugin_type}
  */
  readonly pluginType?: string[];
  /**
  * This specifies how often the plugin should check for expired data. It also controls the offset of peer servers (see the peer-server-priority-index for more information).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/plugin#polling_interval Plugin#polling_interval}
  */
  readonly pollingInterval?: string;
  /**
  * Indicates whether the server should prevent attempts to add a group as a regular member of an inverted static group. If the members of another group should be considered members of an inverted static group, then the other group should be added as a nested group rather than a regular member.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/plugin#prevent_adding_groups_as_inverted_static_group_members Plugin#prevent_adding_groups_as_inverted_static_group_members}
  */
  readonly preventAddingGroupsAsInvertedStaticGroupMembers?: boolean | cdktf.IResolvable;
  /**
  * Indicates whether the server should prevent updates to user entries that attempt to add them as a member of an inverted static group that does not exist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/plugin#prevent_adding_members_to_nonexistent_groups Plugin#prevent_adding_members_to_nonexistent_groups}
  */
  readonly preventAddingMembersToNonexistentGroups?: boolean | cdktf.IResolvable;
  /**
  * Indicates whether this Unique Attribute Plugin should reject a change that would result in one or more conflicts, even if those conflicts only exist in soft-deleted entries.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/plugin#prevent_conflicts_with_soft_deleted_entries Plugin#prevent_conflicts_with_soft_deleted_entries}
  */
  readonly preventConflictsWithSoftDeletedEntries?: boolean | cdktf.IResolvable;
  /**
  * Indicates whether the server should prevent updates to inverted static groups that add references to nested groups that don't exist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/plugin#prevent_nesting_nonexistent_groups Plugin#prevent_nesting_nonexistent_groups}
  */
  readonly preventNestingNonexistentGroups?: boolean | cdktf.IResolvable;
  /**
  * An extension that should be appended to the name of an existing output file rather than deleting it. If a file already exists with the full previous file name, then it will be deleted before the current file is renamed to become the previous file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/plugin#previous_file_extension Plugin#previous_file_extension}
  */
  readonly previousFileExtension?: string;
  /**
  * Specifies whether to delete expired entries or attribute values. By default entries are deleted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/plugin#purge_behavior Plugin#purge_behavior}
  */
  readonly purgeBehavior?: string;
  /**
  * The level of support that the server should offer to allow treating search and compare operations targeting inverted static groups as if they were traditional static groups.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/plugin#read_operation_support Plugin#read_operation_support}
  */
  readonly readOperationSupport?: string;
  /**
  * Specifies the base URL to use for the referrals generated by this plugin. It should include only the scheme, address, and port to use to communicate with the target server (e.g., "ldap://server.example.com:389/").
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/plugin#referral_base_url Plugin#referral_base_url}
  */
  readonly referralBaseUrl?: string[];
  /**
  * Specifies the level of detail to include about replication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/plugin#replication_info Plugin#replication_info}
  */
  readonly replicationInfo?: string;
  /**
  * When the `type` attribute is set to:
  *   - `last-access-time`: Specifies a set of request criteria that may be used to indicate whether to apply access time updates for the associated operation.
  *   - `ping-one-pass-through-authentication`: A reference to request criteria that will be used to indicate which bind requests should be passed through to the PingOne service.
  *   - `sub-operation-timing`: Specifies a set of request criteria used to indicate that only operations for requests matching this criteria should be counted when aggregating timing data.
  *   - `third-party`: Specifies a set of request criteria that may be used to indicate that this Third Party Plugin should only be invoked for operations in which the associated request matches this criteria.
  *   - `pass-through-authentication`: Specifies a set of request criteria that must match the bind request for the bind to be passed through to an alternate server.
  *   - `simple-to-external-bind`: Specifies a request criteria object that may be used to indicate the set of requests for which this plugin should be used. If a value is provided, then this plugin will only be used for bind requests matching this criteria.
  *   - `coalesce-modifications`: A reference to request criteria that indicates which modify requests should be coalesced.
  *   - `delay`: Specifies a set of request criteria used to indicate that only operations for requests matching this criteria should be subject to the configured delay.
  *   - `groovy-scripted`: Specifies a set of request criteria that may be used to indicate that this Groovy Scripted Plugin should only be invoked for operations in which the associated request matches this criteria.
  *   - `pluggable-pass-through-authentication`: A reference to request criteria that will be used to indicate which bind requests should be passed through to the external authentication service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/plugin#request_criteria Plugin#request_criteria}
  */
  readonly requestCriteria?: string;
  /**
  * The type of Plugin resource. Options are ['entry-counter', 'last-access-time', 'stats-collector', 'traditional-static-group-support-for-inverted-static-groups', 'internal-search-rate', 'modifiable-password-policy-state', 'seven-bit-clean', 'clean-up-expired-pingfederate-persistent-access-grants', 'periodic-gc', 'ping-one-pass-through-authentication', 'changelog-password-encryption', 'processing-time-histogram', 'search-shutdown', 'periodic-stats-logger', 'purge-expired-data', 'change-subscription-notification', 'sub-operation-timing', 'third-party', 'encrypt-attribute-values', 'pass-through-authentication', 'dn-mapper', 'monitor-history', 'referral-on-update', 'simple-to-external-bind', 'custom', 'snmp-subagent', 'coalesce-modifications', 'password-policy-import', 'profiler', 'clean-up-inactive-pingfederate-persistent-sessions', 'composed-attribute', 'ldap-result-code-tracker', 'attribute-mapper', 'delay', 'clean-up-expired-pingfederate-persistent-sessions', 'groovy-scripted', 'last-mod', 'pluggable-pass-through-authentication', 'referential-integrity', 'unique-attribute', 'inverted-static-group-referential-integrity']
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/plugin#resource_type Plugin#resource_type}
  */
  readonly resourceType: string;
  /**
  * When the `type` attribute is set to:
  *   - `periodic-stats-logger`: The retention policy to use for the Periodic Stats Logger Plugin .
  *   - `monitor-history`: The retention policy to use for the Monitor History Plugin .
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/plugin#retention_policy Plugin#retention_policy}
  */
  readonly retentionPolicy?: string[];
  /**
  * A listener that should be notified whenever a log file is rotated out of service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/plugin#rotation_listener Plugin#rotation_listener}
  */
  readonly rotationListener?: string[];
  /**
  * The rotation policy to use for the Periodic Stats Logger Plugin .
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/plugin#rotation_policy Plugin#rotation_policy}
  */
  readonly rotationPolicy?: string[];
  /**
  * The scope to use for the search.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/plugin#scope Plugin#scope}
  */
  readonly scope?: string;
  /**
  * The set of arguments used to customize the behavior for the Scripted Plugin. Each configuration property should be given in the form 'name=value'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/plugin#script_argument Plugin#script_argument}
  */
  readonly scriptArgument?: string[];
  /**
  * The fully-qualified name of the Groovy class providing the logic for the Groovy Scripted Plugin.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/plugin#script_class Plugin#script_class}
  */
  readonly scriptClass?: string;
  /**
  * The base DN to use when searching for the user entry using a filter constructed from the pattern defined in the search-filter-pattern property. If no base DN is specified, the null DN will be used as the search base DN.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/plugin#search_base_dn Plugin#search_base_dn}
  */
  readonly searchBaseDn?: string;
  /**
  * A pattern to use to construct a filter to use when searching an external server for the entry of the user as whom to bind. For example, "(mail={uid:ldapFilterEscape}@example.com)" would construct a search filter to search for a user whose entry in the local server contains a uid attribute whose value appears before "@example.com" in the mail attribute in the external server. Note that the "ldapFilterEscape" modifier should almost always be used with attributes specified in the pattern.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/plugin#search_filter_pattern Plugin#search_filter_pattern}
  */
  readonly searchFilterPattern?: string;
  /**
  * Specifies the LDAP external server(s) to which authentication attempts should be forwarded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/plugin#server Plugin#server}
  */
  readonly server?: string[];
  /**
  * Specifies the manner in which external servers should be used for pass-through authentication attempts if multiple servers are defined.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/plugin#server_access_mode Plugin#server_access_mode}
  */
  readonly serverAccessMode?: string;
  /**
  * Specifies the maximum amount of time to wait for a session to the master agent to be established.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/plugin#session_timeout Plugin#session_timeout}
  */
  readonly sessionTimeout?: string;
  /**
  * Specifies the source attribute type that may appear in client requests which should be remapped to the target attribute. Note that the source attribute type must be defined in the server schema and must not be equal to the target attribute type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/plugin#source_attribute Plugin#source_attribute}
  */
  readonly sourceAttribute?: string;
  /**
  * The behavior to exhibit for modify and modify DN operations that update an entry to remove source attributes in such a way that this plugin would no longer generate any composed values for that entry.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/plugin#source_attribute_removal_behavior Plugin#source_attribute_removal_behavior}
  */
  readonly sourceAttributeRemovalBehavior?: string;
  /**
  * Specifies the source DN that may appear in client requests which should be remapped to the target DN. Note that the source DN must not be equal to the target DN.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/plugin#source_dn Plugin#source_dn}
  */
  readonly sourceDn?: string;
  /**
  * Specifies the level of detail to include about the status summary monitor entry.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/plugin#status_summary_info Plugin#status_summary_info}
  */
  readonly statusSummaryInfo?: string;
  /**
  * If the server is idle during the specified interval, then do not log any output if this property is set to true. The server is idle if during the interval, no new connections were established, no operations were processed, and no operations are pending.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/plugin#suppress_if_idle Plugin#suppress_if_idle}
  */
  readonly suppressIfIdle?: boolean | cdktf.IResolvable;
  /**
  * Specifies the target attribute type to which the source attribute type should be mapped. Note that the target attribute type must be defined in the server schema and must not be equal to the source attribute type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/plugin#target_attribute Plugin#target_attribute}
  */
  readonly targetAttribute?: string;
  /**
  * The behavior to exhibit if the target attribute exists when initially populating the entry with composed values (whether during an LDIF import, an add operation, or an invocation of the populate composed attribute values task).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/plugin#target_attribute_exists_during_initial_population_behavior Plugin#target_attribute_exists_during_initial_population_behavior}
  */
  readonly targetAttributeExistsDuringInitialPopulationBehavior?: string;
  /**
  * Specifies the DN to which the source DN should be mapped. Note that the target DN must not be equal to the source DN.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/plugin#target_dn Plugin#target_dn}
  */
  readonly targetDn?: string;
  /**
  * The length of time between internal searches used to identify entries that match the sets of search criteria.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/plugin#time_between_searches Plugin#time_between_searches}
  */
  readonly timeBetweenSearches?: string;
  /**
  * The object class that defines the type of traditional static group that this plugin will attempt to emulate for inverted static groups.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/plugin#traditional_static_group_object_class Plugin#traditional_static_group_object_class}
  */
  readonly traditionalStaticGroupObjectClass?: string;
  /**
  * When the `type` attribute is set to:
  *   - `ping-one-pass-through-authentication`: Indicates whether to attempt the bind in the local server first, or to only send it to the PingOne service.
  *   - `pass-through-authentication`: Indicates whether the bind attempt should first be attempted against the local server. Depending on the value of the override-local-password property, the bind attempt may then be attempted against a remote server if the local bind fails.
  *   - `pluggable-pass-through-authentication`: Indicates whether to attempt the bind in the local server first and only send the request to the external authentication service if the local bind attempt fails, or to only attempt the bind in the external service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/plugin#try_local_bind Plugin#try_local_bind}
  */
  readonly tryLocalBind?: boolean | cdktf.IResolvable;
  /**
  * Specifies the type of attributes to check for value uniqueness.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/plugin#type Plugin#type}
  */
  readonly type?: string[];
  /**
  * Specifies the interval in seconds when referential integrity updates are made.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/plugin#update_interval Plugin#update_interval}
  */
  readonly updateInterval?: string;
  /**
  * When the `type` attribute is set to:
  *   - `ping-one-pass-through-authentication`: Indicates whether to overwrite the user's local password if the local bind fails but the authentication attempt succeeds when attempted in the PingOne service.
  *   - `pass-through-authentication`: Indicates whether the local password value should be updated to the value used in the bind request in the event that the local bind fails but the remote bind succeeds.
  *   - `pluggable-pass-through-authentication`: Indicates whether to overwrite the user's local password if the local bind fails but the authentication attempt succeeds when attempted in the external service. This property may only be set to true if try-local-bind is also true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/plugin#update_local_password Plugin#update_local_password}
  */
  readonly updateLocalPassword?: boolean | cdktf.IResolvable;
  /**
  * When the `type` attribute is set to:
  *   - `ping-one-pass-through-authentication`: This is the DN of the user that will be used to overwrite the user's local password if update-local-password is set. The DN put here should be added to 'ignore-changes-by-dn' in the appropriate Sync Source.
  *   - `pluggable-pass-through-authentication`: The DN of the authorization identity that will be used when updating the user's local password if update-local-password is true. This is primarily intended for use if the Data Sync Server will be used to synchronize passwords between the local server and the external service, and in that case, the DN used here should also be added to the ignore-changes-by-dn property in the appropriate Sync Source object in the Data Sync Server configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/plugin#update_local_password_dn Plugin#update_local_password_dn}
  */
  readonly updateLocalPasswordDn?: string;
  /**
  * The behavior to exhibit for modify and modify DN operations that update one or more of the source attributes used in any of the value patterns.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/plugin#update_source_attribute_behavior Plugin#update_source_attribute_behavior}
  */
  readonly updateSourceAttributeBehavior?: string;
  /**
  * The behavior to exhibit for modify and modify DN operations that attempt to update the set of values for the target attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/plugin#update_target_attribute_behavior Plugin#update_target_attribute_behavior}
  */
  readonly updateTargetAttributeBehavior?: string;
  /**
  * The behavior to exhibit for modify or modify DN operations that update an entry that previously did not satisfy either the base DN or filter criteria, but now do satisfy that criteria.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/plugin#updated_entry_newly_matches_criteria_behavior Plugin#updated_entry_newly_matches_criteria_behavior}
  */
  readonly updatedEntryNewlyMatchesCriteriaBehavior?: string;
  /**
  * The behavior to exhibit for modify or modify DN operations that update an entry that previously satisfied the base DN and filter criteria, but now no longer satisfies that criteria.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/plugin#updated_entry_no_longer_matches_criteria_behavior Plugin#updated_entry_no_longer_matches_criteria_behavior}
  */
  readonly updatedEntryNoLongerMatchesCriteriaBehavior?: string;
  /**
  * Specifies the upper bound for the numeric value which will be inserted into the search filter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/plugin#upper_bound Plugin#upper_bound}
  */
  readonly upperBound?: number;
  /**
  * The names of the attributes in the local user entry whose values must match the values of the corresponding fields in the PingOne service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/plugin#user_mapping_local_attribute Plugin#user_mapping_local_attribute}
  */
  readonly userMappingLocalAttribute?: string[];
  /**
  * The names of the fields in the PingOne service whose values must match the values of the corresponding attributes in the local user entry, as specified in the user-mapping-local-attribute property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/plugin#user_mapping_remote_json_field Plugin#user_mapping_remote_json_field}
  */
  readonly userMappingRemoteJsonField?: string[];
  /**
  * Specifies a pattern for constructing the values to use for the target attribute type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/plugin#value_pattern Plugin#value_pattern}
  */
  readonly valuePattern?: string[];
}
export interface PluginRequiredActions {
}

export function pluginRequiredActionsToTerraform(struct?: PluginRequiredActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function pluginRequiredActionsToHclTerraform(struct?: PluginRequiredActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PluginRequiredActionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): PluginRequiredActions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PluginRequiredActions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // property - computed: true, optional: false, required: false
  public get property() {
    return this.getStringAttribute('property');
  }

  // synopsis - computed: true, optional: false, required: false
  public get synopsis() {
    return this.getStringAttribute('synopsis');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class PluginRequiredActionsList extends cdktf.ComplexList {

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
  public get(index: number): PluginRequiredActionsOutputReference {
    return new PluginRequiredActionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/plugin pingdirectory_plugin}
*/
export class Plugin extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingdirectory_plugin";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Plugin resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Plugin to import
  * @param importFromId The id of the existing Plugin that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/plugin#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Plugin to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingdirectory_plugin", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/plugin pingdirectory_plugin} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PluginConfig
  */
  public constructor(scope: Construct, id: string, config: PluginConfig) {
    super(scope, id, {
      terraformResourceType: 'pingdirectory_plugin',
      terraformGeneratorMetadata: {
        providerName: 'pingdirectory',
        providerVersion: '1.5.0',
        providerVersionConstraint: '1.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._additionalUserMappingScimFilter = config.additionalUserMappingScimFilter;
    this._agentxAddress = config.agentxAddress;
    this._agentxPort = config.agentxPort;
    this._allowLaxPassThroughAuthenticationPasswords = config.allowLaxPassThroughAuthenticationPasswords;
    this._allowedRequestControl = config.allowedRequestControl;
    this._alwaysMapResponses = config.alwaysMapResponses;
    this._apiUrl = config.apiUrl;
    this._append = config.append;
    this._attributeType = config.attributeType;
    this._authUrl = config.authUrl;
    this._baseDn = config.baseDn;
    this._bindDnPattern = config.bindDnPattern;
    this._collectionInterval = config.collectionInterval;
    this._connectRetryMaxWait = config.connectRetryMaxWait;
    this._connectionCriteria = config.connectionCriteria;
    this._contextName = config.contextName;
    this._customDatetimeFormat = config.customDatetimeFormat;
    this._customTimezone = config.customTimezone;
    this._datetimeAttribute = config.datetimeAttribute;
    this._datetimeFormat = config.datetimeFormat;
    this._datetimeJsonField = config.datetimeJsonField;
    this._delay = config.delay;
    this._delayAfterAlert = config.delayAfterAlert;
    this._delayPostGc = config.delayPostGc;
    this._description = config.description;
    this._dnMap = config.dnMap;
    this._emptyInsteadOfZero = config.emptyInsteadOfZero;
    this._enableAttributeMapping = config.enableAttributeMapping;
    this._enableControlMapping = config.enableControlMapping;
    this._enabled = config.enabled;
    this._entryCacheInfo = config.entryCacheInfo;
    this._environmentId = config.environmentId;
    this._excludeBaseDn = config.excludeBaseDn;
    this._excludeFilter = config.excludeFilter;
    this._expirationOffset = config.expirationOffset;
    this._extensionArgument = config.extensionArgument;
    this._extensionClass = config.extensionClass;
    this._filter = config.filter;
    this._filterPrefix = config.filterPrefix;
    this._filterSuffix = config.filterSuffix;
    this._gaugeInfo = config.gaugeInfo;
    this._headerPrefixPerColumn = config.headerPrefixPerColumn;
    this._histogramFormat = config.histogramFormat;
    this._histogramOpType = config.histogramOpType;
    this._hostInfo = config.hostInfo;
    this._httpProxyExternalServer = config.httpProxyExternalServer;
    this._ignoredPasswordPolicyStateErrorCondition = config.ignoredPasswordPolicyStateErrorCondition;
    this._includeAttribute = config.includeAttribute;
    this._includeBaseDn = config.includeBaseDn;
    this._includeFilter = config.includeFilter;
    this._includeHttpMetrics = config.includeHttpMetrics;
    this._includedLdapApplication = config.includedLdapApplication;
    this._includedLdapStat = config.includedLdapStat;
    this._includedLocalEntryBaseDn = config.includedLocalEntryBaseDn;
    this._includedResourceStat = config.includedResourceStat;
    this._initialConnections = config.initialConnections;
    this._invokeForInternalOperations = config.invokeForInternalOperations;
    this._invokeGcDayOfWeek = config.invokeGcDayOfWeek;
    this._invokeGcTimeUtc = config.invokeGcTimeUtc;
    this._ldapChangelogInfo = config.ldapChangelogInfo;
    this._linesBetweenHeader = config.linesBetweenHeader;
    this._localDbBackendInfo = config.localDbBackendInfo;
    this._logFile = config.logFile;
    this._logFileFormat = config.logFileFormat;
    this._logFilePermissions = config.logFilePermissions;
    this._logInterval = config.logInterval;
    this._loggingErrorBehavior = config.loggingErrorBehavior;
    this._lowerBound = config.lowerBound;
    this._mapAttribute = config.mapAttribute;
    this._maxConnections = config.maxConnections;
    this._maxUpdatesPerSecond = config.maxUpdatesPerSecond;
    this._maximumMembershipUpdatesPerModify = config.maximumMembershipUpdatesPerModify;
    this._multiValuedAttributeBehavior = config.multiValuedAttributeBehavior;
    this._multipleAttributeBehavior = config.multipleAttributeBehavior;
    this._multipleValuePatternBehavior = config.multipleValuePatternBehavior;
    this._name = config.name;
    this._numDeleteThreads = config.numDeleteThreads;
    this._numMostExpensivePhasesShown = config.numMostExpensivePhasesShown;
    this._numThreads = config.numThreads;
    this._numWorkerThreads = config.numWorkerThreads;
    this._oauthClientId = config.oauthClientId;
    this._oauthClientSecret = config.oauthClientSecret;
    this._oauthClientSecretPassphraseProvider = config.oauthClientSecretPassphraseProvider;
    this._outputFile = config.outputFile;
    this._overrideLocalPassword = config.overrideLocalPassword;
    this._passThroughAuthenticationHandler = config.passThroughAuthenticationHandler;
    this._peerServerPriorityIndex = config.peerServerPriorityIndex;
    this._perApplicationLdapStats = config.perApplicationLdapStats;
    this._pingInterval = config.pingInterval;
    this._pluginType = config.pluginType;
    this._pollingInterval = config.pollingInterval;
    this._preventAddingGroupsAsInvertedStaticGroupMembers = config.preventAddingGroupsAsInvertedStaticGroupMembers;
    this._preventAddingMembersToNonexistentGroups = config.preventAddingMembersToNonexistentGroups;
    this._preventConflictsWithSoftDeletedEntries = config.preventConflictsWithSoftDeletedEntries;
    this._preventNestingNonexistentGroups = config.preventNestingNonexistentGroups;
    this._previousFileExtension = config.previousFileExtension;
    this._purgeBehavior = config.purgeBehavior;
    this._readOperationSupport = config.readOperationSupport;
    this._referralBaseUrl = config.referralBaseUrl;
    this._replicationInfo = config.replicationInfo;
    this._requestCriteria = config.requestCriteria;
    this._resourceType = config.resourceType;
    this._retentionPolicy = config.retentionPolicy;
    this._rotationListener = config.rotationListener;
    this._rotationPolicy = config.rotationPolicy;
    this._scope = config.scope;
    this._scriptArgument = config.scriptArgument;
    this._scriptClass = config.scriptClass;
    this._searchBaseDn = config.searchBaseDn;
    this._searchFilterPattern = config.searchFilterPattern;
    this._server = config.server;
    this._serverAccessMode = config.serverAccessMode;
    this._sessionTimeout = config.sessionTimeout;
    this._sourceAttribute = config.sourceAttribute;
    this._sourceAttributeRemovalBehavior = config.sourceAttributeRemovalBehavior;
    this._sourceDn = config.sourceDn;
    this._statusSummaryInfo = config.statusSummaryInfo;
    this._suppressIfIdle = config.suppressIfIdle;
    this._targetAttribute = config.targetAttribute;
    this._targetAttributeExistsDuringInitialPopulationBehavior = config.targetAttributeExistsDuringInitialPopulationBehavior;
    this._targetDn = config.targetDn;
    this._timeBetweenSearches = config.timeBetweenSearches;
    this._traditionalStaticGroupObjectClass = config.traditionalStaticGroupObjectClass;
    this._tryLocalBind = config.tryLocalBind;
    this._type = config.type;
    this._updateInterval = config.updateInterval;
    this._updateLocalPassword = config.updateLocalPassword;
    this._updateLocalPasswordDn = config.updateLocalPasswordDn;
    this._updateSourceAttributeBehavior = config.updateSourceAttributeBehavior;
    this._updateTargetAttributeBehavior = config.updateTargetAttributeBehavior;
    this._updatedEntryNewlyMatchesCriteriaBehavior = config.updatedEntryNewlyMatchesCriteriaBehavior;
    this._updatedEntryNoLongerMatchesCriteriaBehavior = config.updatedEntryNoLongerMatchesCriteriaBehavior;
    this._upperBound = config.upperBound;
    this._userMappingLocalAttribute = config.userMappingLocalAttribute;
    this._userMappingRemoteJsonField = config.userMappingRemoteJsonField;
    this._valuePattern = config.valuePattern;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // additional_user_mapping_scim_filter - computed: false, optional: true, required: false
  private _additionalUserMappingScimFilter?: string; 
  public get additionalUserMappingScimFilter() {
    return this.getStringAttribute('additional_user_mapping_scim_filter');
  }
  public set additionalUserMappingScimFilter(value: string) {
    this._additionalUserMappingScimFilter = value;
  }
  public resetAdditionalUserMappingScimFilter() {
    this._additionalUserMappingScimFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalUserMappingScimFilterInput() {
    return this._additionalUserMappingScimFilter;
  }

  // agentx_address - computed: true, optional: true, required: false
  private _agentxAddress?: string; 
  public get agentxAddress() {
    return this.getStringAttribute('agentx_address');
  }
  public set agentxAddress(value: string) {
    this._agentxAddress = value;
  }
  public resetAgentxAddress() {
    this._agentxAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get agentxAddressInput() {
    return this._agentxAddress;
  }

  // agentx_port - computed: true, optional: true, required: false
  private _agentxPort?: number; 
  public get agentxPort() {
    return this.getNumberAttribute('agentx_port');
  }
  public set agentxPort(value: number) {
    this._agentxPort = value;
  }
  public resetAgentxPort() {
    this._agentxPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get agentxPortInput() {
    return this._agentxPort;
  }

  // allow_lax_pass_through_authentication_passwords - computed: true, optional: true, required: false
  private _allowLaxPassThroughAuthenticationPasswords?: boolean | cdktf.IResolvable; 
  public get allowLaxPassThroughAuthenticationPasswords() {
    return this.getBooleanAttribute('allow_lax_pass_through_authentication_passwords');
  }
  public set allowLaxPassThroughAuthenticationPasswords(value: boolean | cdktf.IResolvable) {
    this._allowLaxPassThroughAuthenticationPasswords = value;
  }
  public resetAllowLaxPassThroughAuthenticationPasswords() {
    this._allowLaxPassThroughAuthenticationPasswords = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowLaxPassThroughAuthenticationPasswordsInput() {
    return this._allowLaxPassThroughAuthenticationPasswords;
  }

  // allowed_request_control - computed: true, optional: true, required: false
  private _allowedRequestControl?: string[]; 
  public get allowedRequestControl() {
    return cdktf.Fn.tolist(this.getListAttribute('allowed_request_control'));
  }
  public set allowedRequestControl(value: string[]) {
    this._allowedRequestControl = value;
  }
  public resetAllowedRequestControl() {
    this._allowedRequestControl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedRequestControlInput() {
    return this._allowedRequestControl;
  }

  // always_map_responses - computed: true, optional: true, required: false
  private _alwaysMapResponses?: boolean | cdktf.IResolvable; 
  public get alwaysMapResponses() {
    return this.getBooleanAttribute('always_map_responses');
  }
  public set alwaysMapResponses(value: boolean | cdktf.IResolvable) {
    this._alwaysMapResponses = value;
  }
  public resetAlwaysMapResponses() {
    this._alwaysMapResponses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alwaysMapResponsesInput() {
    return this._alwaysMapResponses;
  }

  // api_url - computed: false, optional: true, required: false
  private _apiUrl?: string; 
  public get apiUrl() {
    return this.getStringAttribute('api_url');
  }
  public set apiUrl(value: string) {
    this._apiUrl = value;
  }
  public resetApiUrl() {
    this._apiUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiUrlInput() {
    return this._apiUrl;
  }

  // append - computed: true, optional: true, required: false
  private _append?: boolean | cdktf.IResolvable; 
  public get append() {
    return this.getBooleanAttribute('append');
  }
  public set append(value: boolean | cdktf.IResolvable) {
    this._append = value;
  }
  public resetAppend() {
    this._append = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appendInput() {
    return this._append;
  }

  // attribute_type - computed: true, optional: true, required: false
  private _attributeType?: string[]; 
  public get attributeType() {
    return cdktf.Fn.tolist(this.getListAttribute('attribute_type'));
  }
  public set attributeType(value: string[]) {
    this._attributeType = value;
  }
  public resetAttributeType() {
    this._attributeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeTypeInput() {
    return this._attributeType;
  }

  // auth_url - computed: false, optional: true, required: false
  private _authUrl?: string; 
  public get authUrl() {
    return this.getStringAttribute('auth_url');
  }
  public set authUrl(value: string) {
    this._authUrl = value;
  }
  public resetAuthUrl() {
    this._authUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authUrlInput() {
    return this._authUrl;
  }

  // base_dn - computed: true, optional: true, required: false
  private _baseDn?: string[]; 
  public get baseDn() {
    return cdktf.Fn.tolist(this.getListAttribute('base_dn'));
  }
  public set baseDn(value: string[]) {
    this._baseDn = value;
  }
  public resetBaseDn() {
    this._baseDn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baseDnInput() {
    return this._baseDn;
  }

  // bind_dn_pattern - computed: false, optional: true, required: false
  private _bindDnPattern?: string; 
  public get bindDnPattern() {
    return this.getStringAttribute('bind_dn_pattern');
  }
  public set bindDnPattern(value: string) {
    this._bindDnPattern = value;
  }
  public resetBindDnPattern() {
    this._bindDnPattern = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bindDnPatternInput() {
    return this._bindDnPattern;
  }

  // collection_interval - computed: true, optional: true, required: false
  private _collectionInterval?: string; 
  public get collectionInterval() {
    return this.getStringAttribute('collection_interval');
  }
  public set collectionInterval(value: string) {
    this._collectionInterval = value;
  }
  public resetCollectionInterval() {
    this._collectionInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get collectionIntervalInput() {
    return this._collectionInterval;
  }

  // connect_retry_max_wait - computed: true, optional: true, required: false
  private _connectRetryMaxWait?: string; 
  public get connectRetryMaxWait() {
    return this.getStringAttribute('connect_retry_max_wait');
  }
  public set connectRetryMaxWait(value: string) {
    this._connectRetryMaxWait = value;
  }
  public resetConnectRetryMaxWait() {
    this._connectRetryMaxWait = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectRetryMaxWaitInput() {
    return this._connectRetryMaxWait;
  }

  // connection_criteria - computed: false, optional: true, required: false
  private _connectionCriteria?: string; 
  public get connectionCriteria() {
    return this.getStringAttribute('connection_criteria');
  }
  public set connectionCriteria(value: string) {
    this._connectionCriteria = value;
  }
  public resetConnectionCriteria() {
    this._connectionCriteria = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionCriteriaInput() {
    return this._connectionCriteria;
  }

  // context_name - computed: false, optional: true, required: false
  private _contextName?: string; 
  public get contextName() {
    return this.getStringAttribute('context_name');
  }
  public set contextName(value: string) {
    this._contextName = value;
  }
  public resetContextName() {
    this._contextName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contextNameInput() {
    return this._contextName;
  }

  // custom_datetime_format - computed: false, optional: true, required: false
  private _customDatetimeFormat?: string; 
  public get customDatetimeFormat() {
    return this.getStringAttribute('custom_datetime_format');
  }
  public set customDatetimeFormat(value: string) {
    this._customDatetimeFormat = value;
  }
  public resetCustomDatetimeFormat() {
    this._customDatetimeFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customDatetimeFormatInput() {
    return this._customDatetimeFormat;
  }

  // custom_timezone - computed: false, optional: true, required: false
  private _customTimezone?: string; 
  public get customTimezone() {
    return this.getStringAttribute('custom_timezone');
  }
  public set customTimezone(value: string) {
    this._customTimezone = value;
  }
  public resetCustomTimezone() {
    this._customTimezone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customTimezoneInput() {
    return this._customTimezone;
  }

  // datetime_attribute - computed: false, optional: true, required: false
  private _datetimeAttribute?: string; 
  public get datetimeAttribute() {
    return this.getStringAttribute('datetime_attribute');
  }
  public set datetimeAttribute(value: string) {
    this._datetimeAttribute = value;
  }
  public resetDatetimeAttribute() {
    this._datetimeAttribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datetimeAttributeInput() {
    return this._datetimeAttribute;
  }

  // datetime_format - computed: true, optional: true, required: false
  private _datetimeFormat?: string; 
  public get datetimeFormat() {
    return this.getStringAttribute('datetime_format');
  }
  public set datetimeFormat(value: string) {
    this._datetimeFormat = value;
  }
  public resetDatetimeFormat() {
    this._datetimeFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datetimeFormatInput() {
    return this._datetimeFormat;
  }

  // datetime_json_field - computed: false, optional: true, required: false
  private _datetimeJsonField?: string; 
  public get datetimeJsonField() {
    return this.getStringAttribute('datetime_json_field');
  }
  public set datetimeJsonField(value: string) {
    this._datetimeJsonField = value;
  }
  public resetDatetimeJsonField() {
    this._datetimeJsonField = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datetimeJsonFieldInput() {
    return this._datetimeJsonField;
  }

  // delay - computed: false, optional: true, required: false
  private _delay?: string; 
  public get delay() {
    return this.getStringAttribute('delay');
  }
  public set delay(value: string) {
    this._delay = value;
  }
  public resetDelay() {
    this._delay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delayInput() {
    return this._delay;
  }

  // delay_after_alert - computed: true, optional: true, required: false
  private _delayAfterAlert?: string; 
  public get delayAfterAlert() {
    return this.getStringAttribute('delay_after_alert');
  }
  public set delayAfterAlert(value: string) {
    this._delayAfterAlert = value;
  }
  public resetDelayAfterAlert() {
    this._delayAfterAlert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delayAfterAlertInput() {
    return this._delayAfterAlert;
  }

  // delay_post_gc - computed: true, optional: true, required: false
  private _delayPostGc?: string; 
  public get delayPostGc() {
    return this.getStringAttribute('delay_post_gc');
  }
  public set delayPostGc(value: string) {
    this._delayPostGc = value;
  }
  public resetDelayPostGc() {
    this._delayPostGc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delayPostGcInput() {
    return this._delayPostGc;
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

  // dn_map - computed: true, optional: true, required: false
  private _dnMap?: string[]; 
  public get dnMap() {
    return cdktf.Fn.tolist(this.getListAttribute('dn_map'));
  }
  public set dnMap(value: string[]) {
    this._dnMap = value;
  }
  public resetDnMap() {
    this._dnMap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnMapInput() {
    return this._dnMap;
  }

  // empty_instead_of_zero - computed: true, optional: true, required: false
  private _emptyInsteadOfZero?: boolean | cdktf.IResolvable; 
  public get emptyInsteadOfZero() {
    return this.getBooleanAttribute('empty_instead_of_zero');
  }
  public set emptyInsteadOfZero(value: boolean | cdktf.IResolvable) {
    this._emptyInsteadOfZero = value;
  }
  public resetEmptyInsteadOfZero() {
    this._emptyInsteadOfZero = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emptyInsteadOfZeroInput() {
    return this._emptyInsteadOfZero;
  }

  // enable_attribute_mapping - computed: true, optional: true, required: false
  private _enableAttributeMapping?: boolean | cdktf.IResolvable; 
  public get enableAttributeMapping() {
    return this.getBooleanAttribute('enable_attribute_mapping');
  }
  public set enableAttributeMapping(value: boolean | cdktf.IResolvable) {
    this._enableAttributeMapping = value;
  }
  public resetEnableAttributeMapping() {
    this._enableAttributeMapping = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableAttributeMappingInput() {
    return this._enableAttributeMapping;
  }

  // enable_control_mapping - computed: true, optional: true, required: false
  private _enableControlMapping?: boolean | cdktf.IResolvable; 
  public get enableControlMapping() {
    return this.getBooleanAttribute('enable_control_mapping');
  }
  public set enableControlMapping(value: boolean | cdktf.IResolvable) {
    this._enableControlMapping = value;
  }
  public resetEnableControlMapping() {
    this._enableControlMapping = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableControlMappingInput() {
    return this._enableControlMapping;
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // entry_cache_info - computed: true, optional: true, required: false
  private _entryCacheInfo?: string; 
  public get entryCacheInfo() {
    return this.getStringAttribute('entry_cache_info');
  }
  public set entryCacheInfo(value: string) {
    this._entryCacheInfo = value;
  }
  public resetEntryCacheInfo() {
    this._entryCacheInfo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entryCacheInfoInput() {
    return this._entryCacheInfo;
  }

  // environment_id - computed: false, optional: true, required: false
  private _environmentId?: string; 
  public get environmentId() {
    return this.getStringAttribute('environment_id');
  }
  public set environmentId(value: string) {
    this._environmentId = value;
  }
  public resetEnvironmentId() {
    this._environmentId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentIdInput() {
    return this._environmentId;
  }

  // exclude_base_dn - computed: true, optional: true, required: false
  private _excludeBaseDn?: string[]; 
  public get excludeBaseDn() {
    return cdktf.Fn.tolist(this.getListAttribute('exclude_base_dn'));
  }
  public set excludeBaseDn(value: string[]) {
    this._excludeBaseDn = value;
  }
  public resetExcludeBaseDn() {
    this._excludeBaseDn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeBaseDnInput() {
    return this._excludeBaseDn;
  }

  // exclude_filter - computed: true, optional: true, required: false
  private _excludeFilter?: string[]; 
  public get excludeFilter() {
    return cdktf.Fn.tolist(this.getListAttribute('exclude_filter'));
  }
  public set excludeFilter(value: string[]) {
    this._excludeFilter = value;
  }
  public resetExcludeFilter() {
    this._excludeFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeFilterInput() {
    return this._excludeFilter;
  }

  // expiration_offset - computed: false, optional: true, required: false
  private _expirationOffset?: string; 
  public get expirationOffset() {
    return this.getStringAttribute('expiration_offset');
  }
  public set expirationOffset(value: string) {
    this._expirationOffset = value;
  }
  public resetExpirationOffset() {
    this._expirationOffset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expirationOffsetInput() {
    return this._expirationOffset;
  }

  // extension_argument - computed: true, optional: true, required: false
  private _extensionArgument?: string[]; 
  public get extensionArgument() {
    return cdktf.Fn.tolist(this.getListAttribute('extension_argument'));
  }
  public set extensionArgument(value: string[]) {
    this._extensionArgument = value;
  }
  public resetExtensionArgument() {
    this._extensionArgument = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extensionArgumentInput() {
    return this._extensionArgument;
  }

  // extension_class - computed: false, optional: true, required: false
  private _extensionClass?: string; 
  public get extensionClass() {
    return this.getStringAttribute('extension_class');
  }
  public set extensionClass(value: string) {
    this._extensionClass = value;
  }
  public resetExtensionClass() {
    this._extensionClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extensionClassInput() {
    return this._extensionClass;
  }

  // filter - computed: true, optional: true, required: false
  private _filter?: string[]; 
  public get filter() {
    return cdktf.Fn.tolist(this.getListAttribute('filter'));
  }
  public set filter(value: string[]) {
    this._filter = value;
  }
  public resetFilter() {
    this._filter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter;
  }

  // filter_prefix - computed: false, optional: true, required: false
  private _filterPrefix?: string; 
  public get filterPrefix() {
    return this.getStringAttribute('filter_prefix');
  }
  public set filterPrefix(value: string) {
    this._filterPrefix = value;
  }
  public resetFilterPrefix() {
    this._filterPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterPrefixInput() {
    return this._filterPrefix;
  }

  // filter_suffix - computed: false, optional: true, required: false
  private _filterSuffix?: string; 
  public get filterSuffix() {
    return this.getStringAttribute('filter_suffix');
  }
  public set filterSuffix(value: string) {
    this._filterSuffix = value;
  }
  public resetFilterSuffix() {
    this._filterSuffix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterSuffixInput() {
    return this._filterSuffix;
  }

  // gauge_info - computed: true, optional: true, required: false
  private _gaugeInfo?: string; 
  public get gaugeInfo() {
    return this.getStringAttribute('gauge_info');
  }
  public set gaugeInfo(value: string) {
    this._gaugeInfo = value;
  }
  public resetGaugeInfo() {
    this._gaugeInfo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gaugeInfoInput() {
    return this._gaugeInfo;
  }

  // header_prefix_per_column - computed: true, optional: true, required: false
  private _headerPrefixPerColumn?: boolean | cdktf.IResolvable; 
  public get headerPrefixPerColumn() {
    return this.getBooleanAttribute('header_prefix_per_column');
  }
  public set headerPrefixPerColumn(value: boolean | cdktf.IResolvable) {
    this._headerPrefixPerColumn = value;
  }
  public resetHeaderPrefixPerColumn() {
    this._headerPrefixPerColumn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerPrefixPerColumnInput() {
    return this._headerPrefixPerColumn;
  }

  // histogram_format - computed: true, optional: true, required: false
  private _histogramFormat?: string; 
  public get histogramFormat() {
    return this.getStringAttribute('histogram_format');
  }
  public set histogramFormat(value: string) {
    this._histogramFormat = value;
  }
  public resetHistogramFormat() {
    this._histogramFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get histogramFormatInput() {
    return this._histogramFormat;
  }

  // histogram_op_type - computed: true, optional: true, required: false
  private _histogramOpType?: string[]; 
  public get histogramOpType() {
    return cdktf.Fn.tolist(this.getListAttribute('histogram_op_type'));
  }
  public set histogramOpType(value: string[]) {
    this._histogramOpType = value;
  }
  public resetHistogramOpType() {
    this._histogramOpType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get histogramOpTypeInput() {
    return this._histogramOpType;
  }

  // host_info - computed: true, optional: true, required: false
  private _hostInfo?: string[]; 
  public get hostInfo() {
    return cdktf.Fn.tolist(this.getListAttribute('host_info'));
  }
  public set hostInfo(value: string[]) {
    this._hostInfo = value;
  }
  public resetHostInfo() {
    this._hostInfo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInfoInput() {
    return this._hostInfo;
  }

  // http_proxy_external_server - computed: false, optional: true, required: false
  private _httpProxyExternalServer?: string; 
  public get httpProxyExternalServer() {
    return this.getStringAttribute('http_proxy_external_server');
  }
  public set httpProxyExternalServer(value: string) {
    this._httpProxyExternalServer = value;
  }
  public resetHttpProxyExternalServer() {
    this._httpProxyExternalServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpProxyExternalServerInput() {
    return this._httpProxyExternalServer;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ignored_password_policy_state_error_condition - computed: true, optional: true, required: false
  private _ignoredPasswordPolicyStateErrorCondition?: string[]; 
  public get ignoredPasswordPolicyStateErrorCondition() {
    return cdktf.Fn.tolist(this.getListAttribute('ignored_password_policy_state_error_condition'));
  }
  public set ignoredPasswordPolicyStateErrorCondition(value: string[]) {
    this._ignoredPasswordPolicyStateErrorCondition = value;
  }
  public resetIgnoredPasswordPolicyStateErrorCondition() {
    this._ignoredPasswordPolicyStateErrorCondition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoredPasswordPolicyStateErrorConditionInput() {
    return this._ignoredPasswordPolicyStateErrorCondition;
  }

  // include_attribute - computed: true, optional: true, required: false
  private _includeAttribute?: string[]; 
  public get includeAttribute() {
    return cdktf.Fn.tolist(this.getListAttribute('include_attribute'));
  }
  public set includeAttribute(value: string[]) {
    this._includeAttribute = value;
  }
  public resetIncludeAttribute() {
    this._includeAttribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeAttributeInput() {
    return this._includeAttribute;
  }

  // include_base_dn - computed: true, optional: true, required: false
  private _includeBaseDn?: string[]; 
  public get includeBaseDn() {
    return cdktf.Fn.tolist(this.getListAttribute('include_base_dn'));
  }
  public set includeBaseDn(value: string[]) {
    this._includeBaseDn = value;
  }
  public resetIncludeBaseDn() {
    this._includeBaseDn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeBaseDnInput() {
    return this._includeBaseDn;
  }

  // include_filter - computed: true, optional: true, required: false
  private _includeFilter?: string[]; 
  public get includeFilter() {
    return cdktf.Fn.tolist(this.getListAttribute('include_filter'));
  }
  public set includeFilter(value: string[]) {
    this._includeFilter = value;
  }
  public resetIncludeFilter() {
    this._includeFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeFilterInput() {
    return this._includeFilter;
  }

  // include_http_metrics - computed: true, optional: true, required: false
  private _includeHttpMetrics?: boolean | cdktf.IResolvable; 
  public get includeHttpMetrics() {
    return this.getBooleanAttribute('include_http_metrics');
  }
  public set includeHttpMetrics(value: boolean | cdktf.IResolvable) {
    this._includeHttpMetrics = value;
  }
  public resetIncludeHttpMetrics() {
    this._includeHttpMetrics = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeHttpMetricsInput() {
    return this._includeHttpMetrics;
  }

  // included_ldap_application - computed: true, optional: true, required: false
  private _includedLdapApplication?: string[]; 
  public get includedLdapApplication() {
    return cdktf.Fn.tolist(this.getListAttribute('included_ldap_application'));
  }
  public set includedLdapApplication(value: string[]) {
    this._includedLdapApplication = value;
  }
  public resetIncludedLdapApplication() {
    this._includedLdapApplication = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includedLdapApplicationInput() {
    return this._includedLdapApplication;
  }

  // included_ldap_stat - computed: true, optional: true, required: false
  private _includedLdapStat?: string[]; 
  public get includedLdapStat() {
    return cdktf.Fn.tolist(this.getListAttribute('included_ldap_stat'));
  }
  public set includedLdapStat(value: string[]) {
    this._includedLdapStat = value;
  }
  public resetIncludedLdapStat() {
    this._includedLdapStat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includedLdapStatInput() {
    return this._includedLdapStat;
  }

  // included_local_entry_base_dn - computed: true, optional: true, required: false
  private _includedLocalEntryBaseDn?: string[]; 
  public get includedLocalEntryBaseDn() {
    return cdktf.Fn.tolist(this.getListAttribute('included_local_entry_base_dn'));
  }
  public set includedLocalEntryBaseDn(value: string[]) {
    this._includedLocalEntryBaseDn = value;
  }
  public resetIncludedLocalEntryBaseDn() {
    this._includedLocalEntryBaseDn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includedLocalEntryBaseDnInput() {
    return this._includedLocalEntryBaseDn;
  }

  // included_resource_stat - computed: true, optional: true, required: false
  private _includedResourceStat?: string[]; 
  public get includedResourceStat() {
    return cdktf.Fn.tolist(this.getListAttribute('included_resource_stat'));
  }
  public set includedResourceStat(value: string[]) {
    this._includedResourceStat = value;
  }
  public resetIncludedResourceStat() {
    this._includedResourceStat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includedResourceStatInput() {
    return this._includedResourceStat;
  }

  // initial_connections - computed: true, optional: true, required: false
  private _initialConnections?: number; 
  public get initialConnections() {
    return this.getNumberAttribute('initial_connections');
  }
  public set initialConnections(value: number) {
    this._initialConnections = value;
  }
  public resetInitialConnections() {
    this._initialConnections = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initialConnectionsInput() {
    return this._initialConnections;
  }

  // invoke_for_internal_operations - computed: true, optional: true, required: false
  private _invokeForInternalOperations?: boolean | cdktf.IResolvable; 
  public get invokeForInternalOperations() {
    return this.getBooleanAttribute('invoke_for_internal_operations');
  }
  public set invokeForInternalOperations(value: boolean | cdktf.IResolvable) {
    this._invokeForInternalOperations = value;
  }
  public resetInvokeForInternalOperations() {
    this._invokeForInternalOperations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invokeForInternalOperationsInput() {
    return this._invokeForInternalOperations;
  }

  // invoke_gc_day_of_week - computed: true, optional: true, required: false
  private _invokeGcDayOfWeek?: string[]; 
  public get invokeGcDayOfWeek() {
    return cdktf.Fn.tolist(this.getListAttribute('invoke_gc_day_of_week'));
  }
  public set invokeGcDayOfWeek(value: string[]) {
    this._invokeGcDayOfWeek = value;
  }
  public resetInvokeGcDayOfWeek() {
    this._invokeGcDayOfWeek = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invokeGcDayOfWeekInput() {
    return this._invokeGcDayOfWeek;
  }

  // invoke_gc_time_utc - computed: true, optional: true, required: false
  private _invokeGcTimeUtc?: string[]; 
  public get invokeGcTimeUtc() {
    return cdktf.Fn.tolist(this.getListAttribute('invoke_gc_time_utc'));
  }
  public set invokeGcTimeUtc(value: string[]) {
    this._invokeGcTimeUtc = value;
  }
  public resetInvokeGcTimeUtc() {
    this._invokeGcTimeUtc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invokeGcTimeUtcInput() {
    return this._invokeGcTimeUtc;
  }

  // ldap_changelog_info - computed: true, optional: true, required: false
  private _ldapChangelogInfo?: string; 
  public get ldapChangelogInfo() {
    return this.getStringAttribute('ldap_changelog_info');
  }
  public set ldapChangelogInfo(value: string) {
    this._ldapChangelogInfo = value;
  }
  public resetLdapChangelogInfo() {
    this._ldapChangelogInfo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ldapChangelogInfoInput() {
    return this._ldapChangelogInfo;
  }

  // lines_between_header - computed: true, optional: true, required: false
  private _linesBetweenHeader?: number; 
  public get linesBetweenHeader() {
    return this.getNumberAttribute('lines_between_header');
  }
  public set linesBetweenHeader(value: number) {
    this._linesBetweenHeader = value;
  }
  public resetLinesBetweenHeader() {
    this._linesBetweenHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linesBetweenHeaderInput() {
    return this._linesBetweenHeader;
  }

  // local_db_backend_info - computed: true, optional: true, required: false
  private _localDbBackendInfo?: string; 
  public get localDbBackendInfo() {
    return this.getStringAttribute('local_db_backend_info');
  }
  public set localDbBackendInfo(value: string) {
    this._localDbBackendInfo = value;
  }
  public resetLocalDbBackendInfo() {
    this._localDbBackendInfo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localDbBackendInfoInput() {
    return this._localDbBackendInfo;
  }

  // log_file - computed: true, optional: true, required: false
  private _logFile?: string; 
  public get logFile() {
    return this.getStringAttribute('log_file');
  }
  public set logFile(value: string) {
    this._logFile = value;
  }
  public resetLogFile() {
    this._logFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logFileInput() {
    return this._logFile;
  }

  // log_file_format - computed: true, optional: true, required: false
  private _logFileFormat?: string; 
  public get logFileFormat() {
    return this.getStringAttribute('log_file_format');
  }
  public set logFileFormat(value: string) {
    this._logFileFormat = value;
  }
  public resetLogFileFormat() {
    this._logFileFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logFileFormatInput() {
    return this._logFileFormat;
  }

  // log_file_permissions - computed: true, optional: true, required: false
  private _logFilePermissions?: string; 
  public get logFilePermissions() {
    return this.getStringAttribute('log_file_permissions');
  }
  public set logFilePermissions(value: string) {
    this._logFilePermissions = value;
  }
  public resetLogFilePermissions() {
    this._logFilePermissions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logFilePermissionsInput() {
    return this._logFilePermissions;
  }

  // log_interval - computed: true, optional: true, required: false
  private _logInterval?: string; 
  public get logInterval() {
    return this.getStringAttribute('log_interval');
  }
  public set logInterval(value: string) {
    this._logInterval = value;
  }
  public resetLogInterval() {
    this._logInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logIntervalInput() {
    return this._logInterval;
  }

  // logging_error_behavior - computed: true, optional: true, required: false
  private _loggingErrorBehavior?: string; 
  public get loggingErrorBehavior() {
    return this.getStringAttribute('logging_error_behavior');
  }
  public set loggingErrorBehavior(value: string) {
    this._loggingErrorBehavior = value;
  }
  public resetLoggingErrorBehavior() {
    this._loggingErrorBehavior = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingErrorBehaviorInput() {
    return this._loggingErrorBehavior;
  }

  // lower_bound - computed: true, optional: true, required: false
  private _lowerBound?: number; 
  public get lowerBound() {
    return this.getNumberAttribute('lower_bound');
  }
  public set lowerBound(value: number) {
    this._lowerBound = value;
  }
  public resetLowerBound() {
    this._lowerBound = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lowerBoundInput() {
    return this._lowerBound;
  }

  // map_attribute - computed: true, optional: true, required: false
  private _mapAttribute?: string[]; 
  public get mapAttribute() {
    return cdktf.Fn.tolist(this.getListAttribute('map_attribute'));
  }
  public set mapAttribute(value: string[]) {
    this._mapAttribute = value;
  }
  public resetMapAttribute() {
    this._mapAttribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mapAttributeInput() {
    return this._mapAttribute;
  }

  // max_connections - computed: true, optional: true, required: false
  private _maxConnections?: number; 
  public get maxConnections() {
    return this.getNumberAttribute('max_connections');
  }
  public set maxConnections(value: number) {
    this._maxConnections = value;
  }
  public resetMaxConnections() {
    this._maxConnections = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxConnectionsInput() {
    return this._maxConnections;
  }

  // max_updates_per_second - computed: true, optional: true, required: false
  private _maxUpdatesPerSecond?: number; 
  public get maxUpdatesPerSecond() {
    return this.getNumberAttribute('max_updates_per_second');
  }
  public set maxUpdatesPerSecond(value: number) {
    this._maxUpdatesPerSecond = value;
  }
  public resetMaxUpdatesPerSecond() {
    this._maxUpdatesPerSecond = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxUpdatesPerSecondInput() {
    return this._maxUpdatesPerSecond;
  }

  // maximum_membership_updates_per_modify - computed: true, optional: true, required: false
  private _maximumMembershipUpdatesPerModify?: number; 
  public get maximumMembershipUpdatesPerModify() {
    return this.getNumberAttribute('maximum_membership_updates_per_modify');
  }
  public set maximumMembershipUpdatesPerModify(value: number) {
    this._maximumMembershipUpdatesPerModify = value;
  }
  public resetMaximumMembershipUpdatesPerModify() {
    this._maximumMembershipUpdatesPerModify = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumMembershipUpdatesPerModifyInput() {
    return this._maximumMembershipUpdatesPerModify;
  }

  // multi_valued_attribute_behavior - computed: true, optional: true, required: false
  private _multiValuedAttributeBehavior?: string; 
  public get multiValuedAttributeBehavior() {
    return this.getStringAttribute('multi_valued_attribute_behavior');
  }
  public set multiValuedAttributeBehavior(value: string) {
    this._multiValuedAttributeBehavior = value;
  }
  public resetMultiValuedAttributeBehavior() {
    this._multiValuedAttributeBehavior = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiValuedAttributeBehaviorInput() {
    return this._multiValuedAttributeBehavior;
  }

  // multiple_attribute_behavior - computed: true, optional: true, required: false
  private _multipleAttributeBehavior?: string; 
  public get multipleAttributeBehavior() {
    return this.getStringAttribute('multiple_attribute_behavior');
  }
  public set multipleAttributeBehavior(value: string) {
    this._multipleAttributeBehavior = value;
  }
  public resetMultipleAttributeBehavior() {
    this._multipleAttributeBehavior = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multipleAttributeBehaviorInput() {
    return this._multipleAttributeBehavior;
  }

  // multiple_value_pattern_behavior - computed: true, optional: true, required: false
  private _multipleValuePatternBehavior?: string; 
  public get multipleValuePatternBehavior() {
    return this.getStringAttribute('multiple_value_pattern_behavior');
  }
  public set multipleValuePatternBehavior(value: string) {
    this._multipleValuePatternBehavior = value;
  }
  public resetMultipleValuePatternBehavior() {
    this._multipleValuePatternBehavior = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multipleValuePatternBehaviorInput() {
    return this._multipleValuePatternBehavior;
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

  // notifications - computed: true, optional: false, required: false
  public get notifications() {
    return cdktf.Fn.tolist(this.getListAttribute('notifications'));
  }

  // num_delete_threads - computed: true, optional: true, required: false
  private _numDeleteThreads?: number; 
  public get numDeleteThreads() {
    return this.getNumberAttribute('num_delete_threads');
  }
  public set numDeleteThreads(value: number) {
    this._numDeleteThreads = value;
  }
  public resetNumDeleteThreads() {
    this._numDeleteThreads = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numDeleteThreadsInput() {
    return this._numDeleteThreads;
  }

  // num_most_expensive_phases_shown - computed: true, optional: true, required: false
  private _numMostExpensivePhasesShown?: number; 
  public get numMostExpensivePhasesShown() {
    return this.getNumberAttribute('num_most_expensive_phases_shown');
  }
  public set numMostExpensivePhasesShown(value: number) {
    this._numMostExpensivePhasesShown = value;
  }
  public resetNumMostExpensivePhasesShown() {
    this._numMostExpensivePhasesShown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numMostExpensivePhasesShownInput() {
    return this._numMostExpensivePhasesShown;
  }

  // num_threads - computed: true, optional: true, required: false
  private _numThreads?: number; 
  public get numThreads() {
    return this.getNumberAttribute('num_threads');
  }
  public set numThreads(value: number) {
    this._numThreads = value;
  }
  public resetNumThreads() {
    this._numThreads = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numThreadsInput() {
    return this._numThreads;
  }

  // num_worker_threads - computed: true, optional: true, required: false
  private _numWorkerThreads?: number; 
  public get numWorkerThreads() {
    return this.getNumberAttribute('num_worker_threads');
  }
  public set numWorkerThreads(value: number) {
    this._numWorkerThreads = value;
  }
  public resetNumWorkerThreads() {
    this._numWorkerThreads = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numWorkerThreadsInput() {
    return this._numWorkerThreads;
  }

  // oauth_client_id - computed: false, optional: true, required: false
  private _oauthClientId?: string; 
  public get oauthClientId() {
    return this.getStringAttribute('oauth_client_id');
  }
  public set oauthClientId(value: string) {
    this._oauthClientId = value;
  }
  public resetOauthClientId() {
    this._oauthClientId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauthClientIdInput() {
    return this._oauthClientId;
  }

  // oauth_client_secret - computed: false, optional: true, required: false
  private _oauthClientSecret?: string; 
  public get oauthClientSecret() {
    return this.getStringAttribute('oauth_client_secret');
  }
  public set oauthClientSecret(value: string) {
    this._oauthClientSecret = value;
  }
  public resetOauthClientSecret() {
    this._oauthClientSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauthClientSecretInput() {
    return this._oauthClientSecret;
  }

  // oauth_client_secret_passphrase_provider - computed: false, optional: true, required: false
  private _oauthClientSecretPassphraseProvider?: string; 
  public get oauthClientSecretPassphraseProvider() {
    return this.getStringAttribute('oauth_client_secret_passphrase_provider');
  }
  public set oauthClientSecretPassphraseProvider(value: string) {
    this._oauthClientSecretPassphraseProvider = value;
  }
  public resetOauthClientSecretPassphraseProvider() {
    this._oauthClientSecretPassphraseProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauthClientSecretPassphraseProviderInput() {
    return this._oauthClientSecretPassphraseProvider;
  }

  // output_file - computed: false, optional: true, required: false
  private _outputFile?: string; 
  public get outputFile() {
    return this.getStringAttribute('output_file');
  }
  public set outputFile(value: string) {
    this._outputFile = value;
  }
  public resetOutputFile() {
    this._outputFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputFileInput() {
    return this._outputFile;
  }

  // override_local_password - computed: true, optional: true, required: false
  private _overrideLocalPassword?: boolean | cdktf.IResolvable; 
  public get overrideLocalPassword() {
    return this.getBooleanAttribute('override_local_password');
  }
  public set overrideLocalPassword(value: boolean | cdktf.IResolvable) {
    this._overrideLocalPassword = value;
  }
  public resetOverrideLocalPassword() {
    this._overrideLocalPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideLocalPasswordInput() {
    return this._overrideLocalPassword;
  }

  // pass_through_authentication_handler - computed: false, optional: true, required: false
  private _passThroughAuthenticationHandler?: string; 
  public get passThroughAuthenticationHandler() {
    return this.getStringAttribute('pass_through_authentication_handler');
  }
  public set passThroughAuthenticationHandler(value: string) {
    this._passThroughAuthenticationHandler = value;
  }
  public resetPassThroughAuthenticationHandler() {
    this._passThroughAuthenticationHandler = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passThroughAuthenticationHandlerInput() {
    return this._passThroughAuthenticationHandler;
  }

  // peer_server_priority_index - computed: false, optional: true, required: false
  private _peerServerPriorityIndex?: number; 
  public get peerServerPriorityIndex() {
    return this.getNumberAttribute('peer_server_priority_index');
  }
  public set peerServerPriorityIndex(value: number) {
    this._peerServerPriorityIndex = value;
  }
  public resetPeerServerPriorityIndex() {
    this._peerServerPriorityIndex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerServerPriorityIndexInput() {
    return this._peerServerPriorityIndex;
  }

  // per_application_ldap_stats - computed: true, optional: true, required: false
  private _perApplicationLdapStats?: string; 
  public get perApplicationLdapStats() {
    return this.getStringAttribute('per_application_ldap_stats');
  }
  public set perApplicationLdapStats(value: string) {
    this._perApplicationLdapStats = value;
  }
  public resetPerApplicationLdapStats() {
    this._perApplicationLdapStats = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perApplicationLdapStatsInput() {
    return this._perApplicationLdapStats;
  }

  // ping_interval - computed: true, optional: true, required: false
  private _pingInterval?: string; 
  public get pingInterval() {
    return this.getStringAttribute('ping_interval');
  }
  public set pingInterval(value: string) {
    this._pingInterval = value;
  }
  public resetPingInterval() {
    this._pingInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pingIntervalInput() {
    return this._pingInterval;
  }

  // plugin_type - computed: true, optional: true, required: false
  private _pluginType?: string[]; 
  public get pluginType() {
    return cdktf.Fn.tolist(this.getListAttribute('plugin_type'));
  }
  public set pluginType(value: string[]) {
    this._pluginType = value;
  }
  public resetPluginType() {
    this._pluginType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pluginTypeInput() {
    return this._pluginType;
  }

  // polling_interval - computed: true, optional: true, required: false
  private _pollingInterval?: string; 
  public get pollingInterval() {
    return this.getStringAttribute('polling_interval');
  }
  public set pollingInterval(value: string) {
    this._pollingInterval = value;
  }
  public resetPollingInterval() {
    this._pollingInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pollingIntervalInput() {
    return this._pollingInterval;
  }

  // prevent_adding_groups_as_inverted_static_group_members - computed: true, optional: true, required: false
  private _preventAddingGroupsAsInvertedStaticGroupMembers?: boolean | cdktf.IResolvable; 
  public get preventAddingGroupsAsInvertedStaticGroupMembers() {
    return this.getBooleanAttribute('prevent_adding_groups_as_inverted_static_group_members');
  }
  public set preventAddingGroupsAsInvertedStaticGroupMembers(value: boolean | cdktf.IResolvable) {
    this._preventAddingGroupsAsInvertedStaticGroupMembers = value;
  }
  public resetPreventAddingGroupsAsInvertedStaticGroupMembers() {
    this._preventAddingGroupsAsInvertedStaticGroupMembers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preventAddingGroupsAsInvertedStaticGroupMembersInput() {
    return this._preventAddingGroupsAsInvertedStaticGroupMembers;
  }

  // prevent_adding_members_to_nonexistent_groups - computed: true, optional: true, required: false
  private _preventAddingMembersToNonexistentGroups?: boolean | cdktf.IResolvable; 
  public get preventAddingMembersToNonexistentGroups() {
    return this.getBooleanAttribute('prevent_adding_members_to_nonexistent_groups');
  }
  public set preventAddingMembersToNonexistentGroups(value: boolean | cdktf.IResolvable) {
    this._preventAddingMembersToNonexistentGroups = value;
  }
  public resetPreventAddingMembersToNonexistentGroups() {
    this._preventAddingMembersToNonexistentGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preventAddingMembersToNonexistentGroupsInput() {
    return this._preventAddingMembersToNonexistentGroups;
  }

  // prevent_conflicts_with_soft_deleted_entries - computed: true, optional: true, required: false
  private _preventConflictsWithSoftDeletedEntries?: boolean | cdktf.IResolvable; 
  public get preventConflictsWithSoftDeletedEntries() {
    return this.getBooleanAttribute('prevent_conflicts_with_soft_deleted_entries');
  }
  public set preventConflictsWithSoftDeletedEntries(value: boolean | cdktf.IResolvable) {
    this._preventConflictsWithSoftDeletedEntries = value;
  }
  public resetPreventConflictsWithSoftDeletedEntries() {
    this._preventConflictsWithSoftDeletedEntries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preventConflictsWithSoftDeletedEntriesInput() {
    return this._preventConflictsWithSoftDeletedEntries;
  }

  // prevent_nesting_nonexistent_groups - computed: true, optional: true, required: false
  private _preventNestingNonexistentGroups?: boolean | cdktf.IResolvable; 
  public get preventNestingNonexistentGroups() {
    return this.getBooleanAttribute('prevent_nesting_nonexistent_groups');
  }
  public set preventNestingNonexistentGroups(value: boolean | cdktf.IResolvable) {
    this._preventNestingNonexistentGroups = value;
  }
  public resetPreventNestingNonexistentGroups() {
    this._preventNestingNonexistentGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preventNestingNonexistentGroupsInput() {
    return this._preventNestingNonexistentGroups;
  }

  // previous_file_extension - computed: false, optional: true, required: false
  private _previousFileExtension?: string; 
  public get previousFileExtension() {
    return this.getStringAttribute('previous_file_extension');
  }
  public set previousFileExtension(value: string) {
    this._previousFileExtension = value;
  }
  public resetPreviousFileExtension() {
    this._previousFileExtension = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get previousFileExtensionInput() {
    return this._previousFileExtension;
  }

  // purge_behavior - computed: false, optional: true, required: false
  private _purgeBehavior?: string; 
  public get purgeBehavior() {
    return this.getStringAttribute('purge_behavior');
  }
  public set purgeBehavior(value: string) {
    this._purgeBehavior = value;
  }
  public resetPurgeBehavior() {
    this._purgeBehavior = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get purgeBehaviorInput() {
    return this._purgeBehavior;
  }

  // read_operation_support - computed: true, optional: true, required: false
  private _readOperationSupport?: string; 
  public get readOperationSupport() {
    return this.getStringAttribute('read_operation_support');
  }
  public set readOperationSupport(value: string) {
    this._readOperationSupport = value;
  }
  public resetReadOperationSupport() {
    this._readOperationSupport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readOperationSupportInput() {
    return this._readOperationSupport;
  }

  // referral_base_url - computed: true, optional: true, required: false
  private _referralBaseUrl?: string[]; 
  public get referralBaseUrl() {
    return cdktf.Fn.tolist(this.getListAttribute('referral_base_url'));
  }
  public set referralBaseUrl(value: string[]) {
    this._referralBaseUrl = value;
  }
  public resetReferralBaseUrl() {
    this._referralBaseUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get referralBaseUrlInput() {
    return this._referralBaseUrl;
  }

  // replication_info - computed: true, optional: true, required: false
  private _replicationInfo?: string; 
  public get replicationInfo() {
    return this.getStringAttribute('replication_info');
  }
  public set replicationInfo(value: string) {
    this._replicationInfo = value;
  }
  public resetReplicationInfo() {
    this._replicationInfo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicationInfoInput() {
    return this._replicationInfo;
  }

  // request_criteria - computed: false, optional: true, required: false
  private _requestCriteria?: string; 
  public get requestCriteria() {
    return this.getStringAttribute('request_criteria');
  }
  public set requestCriteria(value: string) {
    this._requestCriteria = value;
  }
  public resetRequestCriteria() {
    this._requestCriteria = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestCriteriaInput() {
    return this._requestCriteria;
  }

  // required_actions - computed: true, optional: false, required: false
  private _requiredActions = new PluginRequiredActionsList(this, "required_actions", true);
  public get requiredActions() {
    return this._requiredActions;
  }

  // resource_type - computed: false, optional: false, required: true
  private _resourceType?: string; 
  public get resourceType() {
    return this.getStringAttribute('resource_type');
  }
  public set resourceType(value: string) {
    this._resourceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTypeInput() {
    return this._resourceType;
  }

  // retention_policy - computed: true, optional: true, required: false
  private _retentionPolicy?: string[]; 
  public get retentionPolicy() {
    return cdktf.Fn.tolist(this.getListAttribute('retention_policy'));
  }
  public set retentionPolicy(value: string[]) {
    this._retentionPolicy = value;
  }
  public resetRetentionPolicy() {
    this._retentionPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionPolicyInput() {
    return this._retentionPolicy;
  }

  // rotation_listener - computed: true, optional: true, required: false
  private _rotationListener?: string[]; 
  public get rotationListener() {
    return cdktf.Fn.tolist(this.getListAttribute('rotation_listener'));
  }
  public set rotationListener(value: string[]) {
    this._rotationListener = value;
  }
  public resetRotationListener() {
    this._rotationListener = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rotationListenerInput() {
    return this._rotationListener;
  }

  // rotation_policy - computed: true, optional: true, required: false
  private _rotationPolicy?: string[]; 
  public get rotationPolicy() {
    return cdktf.Fn.tolist(this.getListAttribute('rotation_policy'));
  }
  public set rotationPolicy(value: string[]) {
    this._rotationPolicy = value;
  }
  public resetRotationPolicy() {
    this._rotationPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rotationPolicyInput() {
    return this._rotationPolicy;
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

  // script_argument - computed: true, optional: true, required: false
  private _scriptArgument?: string[]; 
  public get scriptArgument() {
    return cdktf.Fn.tolist(this.getListAttribute('script_argument'));
  }
  public set scriptArgument(value: string[]) {
    this._scriptArgument = value;
  }
  public resetScriptArgument() {
    this._scriptArgument = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scriptArgumentInput() {
    return this._scriptArgument;
  }

  // script_class - computed: false, optional: true, required: false
  private _scriptClass?: string; 
  public get scriptClass() {
    return this.getStringAttribute('script_class');
  }
  public set scriptClass(value: string) {
    this._scriptClass = value;
  }
  public resetScriptClass() {
    this._scriptClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scriptClassInput() {
    return this._scriptClass;
  }

  // search_base_dn - computed: false, optional: true, required: false
  private _searchBaseDn?: string; 
  public get searchBaseDn() {
    return this.getStringAttribute('search_base_dn');
  }
  public set searchBaseDn(value: string) {
    this._searchBaseDn = value;
  }
  public resetSearchBaseDn() {
    this._searchBaseDn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchBaseDnInput() {
    return this._searchBaseDn;
  }

  // search_filter_pattern - computed: false, optional: true, required: false
  private _searchFilterPattern?: string; 
  public get searchFilterPattern() {
    return this.getStringAttribute('search_filter_pattern');
  }
  public set searchFilterPattern(value: string) {
    this._searchFilterPattern = value;
  }
  public resetSearchFilterPattern() {
    this._searchFilterPattern = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchFilterPatternInput() {
    return this._searchFilterPattern;
  }

  // server - computed: true, optional: true, required: false
  private _server?: string[]; 
  public get server() {
    return cdktf.Fn.tolist(this.getListAttribute('server'));
  }
  public set server(value: string[]) {
    this._server = value;
  }
  public resetServer() {
    this._server = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverInput() {
    return this._server;
  }

  // server_access_mode - computed: true, optional: true, required: false
  private _serverAccessMode?: string; 
  public get serverAccessMode() {
    return this.getStringAttribute('server_access_mode');
  }
  public set serverAccessMode(value: string) {
    this._serverAccessMode = value;
  }
  public resetServerAccessMode() {
    this._serverAccessMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverAccessModeInput() {
    return this._serverAccessMode;
  }

  // session_timeout - computed: true, optional: true, required: false
  private _sessionTimeout?: string; 
  public get sessionTimeout() {
    return this.getStringAttribute('session_timeout');
  }
  public set sessionTimeout(value: string) {
    this._sessionTimeout = value;
  }
  public resetSessionTimeout() {
    this._sessionTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionTimeoutInput() {
    return this._sessionTimeout;
  }

  // source_attribute - computed: false, optional: true, required: false
  private _sourceAttribute?: string; 
  public get sourceAttribute() {
    return this.getStringAttribute('source_attribute');
  }
  public set sourceAttribute(value: string) {
    this._sourceAttribute = value;
  }
  public resetSourceAttribute() {
    this._sourceAttribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceAttributeInput() {
    return this._sourceAttribute;
  }

  // source_attribute_removal_behavior - computed: true, optional: true, required: false
  private _sourceAttributeRemovalBehavior?: string; 
  public get sourceAttributeRemovalBehavior() {
    return this.getStringAttribute('source_attribute_removal_behavior');
  }
  public set sourceAttributeRemovalBehavior(value: string) {
    this._sourceAttributeRemovalBehavior = value;
  }
  public resetSourceAttributeRemovalBehavior() {
    this._sourceAttributeRemovalBehavior = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceAttributeRemovalBehaviorInput() {
    return this._sourceAttributeRemovalBehavior;
  }

  // source_dn - computed: false, optional: true, required: false
  private _sourceDn?: string; 
  public get sourceDn() {
    return this.getStringAttribute('source_dn');
  }
  public set sourceDn(value: string) {
    this._sourceDn = value;
  }
  public resetSourceDn() {
    this._sourceDn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceDnInput() {
    return this._sourceDn;
  }

  // status_summary_info - computed: true, optional: true, required: false
  private _statusSummaryInfo?: string; 
  public get statusSummaryInfo() {
    return this.getStringAttribute('status_summary_info');
  }
  public set statusSummaryInfo(value: string) {
    this._statusSummaryInfo = value;
  }
  public resetStatusSummaryInfo() {
    this._statusSummaryInfo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusSummaryInfoInput() {
    return this._statusSummaryInfo;
  }

  // suppress_if_idle - computed: true, optional: true, required: false
  private _suppressIfIdle?: boolean | cdktf.IResolvable; 
  public get suppressIfIdle() {
    return this.getBooleanAttribute('suppress_if_idle');
  }
  public set suppressIfIdle(value: boolean | cdktf.IResolvable) {
    this._suppressIfIdle = value;
  }
  public resetSuppressIfIdle() {
    this._suppressIfIdle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suppressIfIdleInput() {
    return this._suppressIfIdle;
  }

  // target_attribute - computed: false, optional: true, required: false
  private _targetAttribute?: string; 
  public get targetAttribute() {
    return this.getStringAttribute('target_attribute');
  }
  public set targetAttribute(value: string) {
    this._targetAttribute = value;
  }
  public resetTargetAttribute() {
    this._targetAttribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetAttributeInput() {
    return this._targetAttribute;
  }

  // target_attribute_exists_during_initial_population_behavior - computed: true, optional: true, required: false
  private _targetAttributeExistsDuringInitialPopulationBehavior?: string; 
  public get targetAttributeExistsDuringInitialPopulationBehavior() {
    return this.getStringAttribute('target_attribute_exists_during_initial_population_behavior');
  }
  public set targetAttributeExistsDuringInitialPopulationBehavior(value: string) {
    this._targetAttributeExistsDuringInitialPopulationBehavior = value;
  }
  public resetTargetAttributeExistsDuringInitialPopulationBehavior() {
    this._targetAttributeExistsDuringInitialPopulationBehavior = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetAttributeExistsDuringInitialPopulationBehaviorInput() {
    return this._targetAttributeExistsDuringInitialPopulationBehavior;
  }

  // target_dn - computed: false, optional: true, required: false
  private _targetDn?: string; 
  public get targetDn() {
    return this.getStringAttribute('target_dn');
  }
  public set targetDn(value: string) {
    this._targetDn = value;
  }
  public resetTargetDn() {
    this._targetDn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetDnInput() {
    return this._targetDn;
  }

  // time_between_searches - computed: true, optional: true, required: false
  private _timeBetweenSearches?: string; 
  public get timeBetweenSearches() {
    return this.getStringAttribute('time_between_searches');
  }
  public set timeBetweenSearches(value: string) {
    this._timeBetweenSearches = value;
  }
  public resetTimeBetweenSearches() {
    this._timeBetweenSearches = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeBetweenSearchesInput() {
    return this._timeBetweenSearches;
  }

  // traditional_static_group_object_class - computed: true, optional: true, required: false
  private _traditionalStaticGroupObjectClass?: string; 
  public get traditionalStaticGroupObjectClass() {
    return this.getStringAttribute('traditional_static_group_object_class');
  }
  public set traditionalStaticGroupObjectClass(value: string) {
    this._traditionalStaticGroupObjectClass = value;
  }
  public resetTraditionalStaticGroupObjectClass() {
    this._traditionalStaticGroupObjectClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get traditionalStaticGroupObjectClassInput() {
    return this._traditionalStaticGroupObjectClass;
  }

  // try_local_bind - computed: true, optional: true, required: false
  private _tryLocalBind?: boolean | cdktf.IResolvable; 
  public get tryLocalBind() {
    return this.getBooleanAttribute('try_local_bind');
  }
  public set tryLocalBind(value: boolean | cdktf.IResolvable) {
    this._tryLocalBind = value;
  }
  public resetTryLocalBind() {
    this._tryLocalBind = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tryLocalBindInput() {
    return this._tryLocalBind;
  }

  // type - computed: true, optional: true, required: false
  private _type?: string[]; 
  public get type() {
    return cdktf.Fn.tolist(this.getListAttribute('type'));
  }
  public set type(value: string[]) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // update_interval - computed: true, optional: true, required: false
  private _updateInterval?: string; 
  public get updateInterval() {
    return this.getStringAttribute('update_interval');
  }
  public set updateInterval(value: string) {
    this._updateInterval = value;
  }
  public resetUpdateInterval() {
    this._updateInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateIntervalInput() {
    return this._updateInterval;
  }

  // update_local_password - computed: true, optional: true, required: false
  private _updateLocalPassword?: boolean | cdktf.IResolvable; 
  public get updateLocalPassword() {
    return this.getBooleanAttribute('update_local_password');
  }
  public set updateLocalPassword(value: boolean | cdktf.IResolvable) {
    this._updateLocalPassword = value;
  }
  public resetUpdateLocalPassword() {
    this._updateLocalPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateLocalPasswordInput() {
    return this._updateLocalPassword;
  }

  // update_local_password_dn - computed: false, optional: true, required: false
  private _updateLocalPasswordDn?: string; 
  public get updateLocalPasswordDn() {
    return this.getStringAttribute('update_local_password_dn');
  }
  public set updateLocalPasswordDn(value: string) {
    this._updateLocalPasswordDn = value;
  }
  public resetUpdateLocalPasswordDn() {
    this._updateLocalPasswordDn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateLocalPasswordDnInput() {
    return this._updateLocalPasswordDn;
  }

  // update_source_attribute_behavior - computed: true, optional: true, required: false
  private _updateSourceAttributeBehavior?: string; 
  public get updateSourceAttributeBehavior() {
    return this.getStringAttribute('update_source_attribute_behavior');
  }
  public set updateSourceAttributeBehavior(value: string) {
    this._updateSourceAttributeBehavior = value;
  }
  public resetUpdateSourceAttributeBehavior() {
    this._updateSourceAttributeBehavior = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateSourceAttributeBehaviorInput() {
    return this._updateSourceAttributeBehavior;
  }

  // update_target_attribute_behavior - computed: true, optional: true, required: false
  private _updateTargetAttributeBehavior?: string; 
  public get updateTargetAttributeBehavior() {
    return this.getStringAttribute('update_target_attribute_behavior');
  }
  public set updateTargetAttributeBehavior(value: string) {
    this._updateTargetAttributeBehavior = value;
  }
  public resetUpdateTargetAttributeBehavior() {
    this._updateTargetAttributeBehavior = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateTargetAttributeBehaviorInput() {
    return this._updateTargetAttributeBehavior;
  }

  // updated_entry_newly_matches_criteria_behavior - computed: true, optional: true, required: false
  private _updatedEntryNewlyMatchesCriteriaBehavior?: string; 
  public get updatedEntryNewlyMatchesCriteriaBehavior() {
    return this.getStringAttribute('updated_entry_newly_matches_criteria_behavior');
  }
  public set updatedEntryNewlyMatchesCriteriaBehavior(value: string) {
    this._updatedEntryNewlyMatchesCriteriaBehavior = value;
  }
  public resetUpdatedEntryNewlyMatchesCriteriaBehavior() {
    this._updatedEntryNewlyMatchesCriteriaBehavior = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updatedEntryNewlyMatchesCriteriaBehaviorInput() {
    return this._updatedEntryNewlyMatchesCriteriaBehavior;
  }

  // updated_entry_no_longer_matches_criteria_behavior - computed: true, optional: true, required: false
  private _updatedEntryNoLongerMatchesCriteriaBehavior?: string; 
  public get updatedEntryNoLongerMatchesCriteriaBehavior() {
    return this.getStringAttribute('updated_entry_no_longer_matches_criteria_behavior');
  }
  public set updatedEntryNoLongerMatchesCriteriaBehavior(value: string) {
    this._updatedEntryNoLongerMatchesCriteriaBehavior = value;
  }
  public resetUpdatedEntryNoLongerMatchesCriteriaBehavior() {
    this._updatedEntryNoLongerMatchesCriteriaBehavior = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updatedEntryNoLongerMatchesCriteriaBehaviorInput() {
    return this._updatedEntryNoLongerMatchesCriteriaBehavior;
  }

  // upper_bound - computed: false, optional: true, required: false
  private _upperBound?: number; 
  public get upperBound() {
    return this.getNumberAttribute('upper_bound');
  }
  public set upperBound(value: number) {
    this._upperBound = value;
  }
  public resetUpperBound() {
    this._upperBound = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upperBoundInput() {
    return this._upperBound;
  }

  // user_mapping_local_attribute - computed: true, optional: true, required: false
  private _userMappingLocalAttribute?: string[]; 
  public get userMappingLocalAttribute() {
    return cdktf.Fn.tolist(this.getListAttribute('user_mapping_local_attribute'));
  }
  public set userMappingLocalAttribute(value: string[]) {
    this._userMappingLocalAttribute = value;
  }
  public resetUserMappingLocalAttribute() {
    this._userMappingLocalAttribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userMappingLocalAttributeInput() {
    return this._userMappingLocalAttribute;
  }

  // user_mapping_remote_json_field - computed: true, optional: true, required: false
  private _userMappingRemoteJsonField?: string[]; 
  public get userMappingRemoteJsonField() {
    return cdktf.Fn.tolist(this.getListAttribute('user_mapping_remote_json_field'));
  }
  public set userMappingRemoteJsonField(value: string[]) {
    this._userMappingRemoteJsonField = value;
  }
  public resetUserMappingRemoteJsonField() {
    this._userMappingRemoteJsonField = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userMappingRemoteJsonFieldInput() {
    return this._userMappingRemoteJsonField;
  }

  // value_pattern - computed: true, optional: true, required: false
  private _valuePattern?: string[]; 
  public get valuePattern() {
    return cdktf.Fn.tolist(this.getListAttribute('value_pattern'));
  }
  public set valuePattern(value: string[]) {
    this._valuePattern = value;
  }
  public resetValuePattern() {
    this._valuePattern = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuePatternInput() {
    return this._valuePattern;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      additional_user_mapping_scim_filter: cdktf.stringToTerraform(this._additionalUserMappingScimFilter),
      agentx_address: cdktf.stringToTerraform(this._agentxAddress),
      agentx_port: cdktf.numberToTerraform(this._agentxPort),
      allow_lax_pass_through_authentication_passwords: cdktf.booleanToTerraform(this._allowLaxPassThroughAuthenticationPasswords),
      allowed_request_control: cdktf.listMapper(cdktf.stringToTerraform, false)(this._allowedRequestControl),
      always_map_responses: cdktf.booleanToTerraform(this._alwaysMapResponses),
      api_url: cdktf.stringToTerraform(this._apiUrl),
      append: cdktf.booleanToTerraform(this._append),
      attribute_type: cdktf.listMapper(cdktf.stringToTerraform, false)(this._attributeType),
      auth_url: cdktf.stringToTerraform(this._authUrl),
      base_dn: cdktf.listMapper(cdktf.stringToTerraform, false)(this._baseDn),
      bind_dn_pattern: cdktf.stringToTerraform(this._bindDnPattern),
      collection_interval: cdktf.stringToTerraform(this._collectionInterval),
      connect_retry_max_wait: cdktf.stringToTerraform(this._connectRetryMaxWait),
      connection_criteria: cdktf.stringToTerraform(this._connectionCriteria),
      context_name: cdktf.stringToTerraform(this._contextName),
      custom_datetime_format: cdktf.stringToTerraform(this._customDatetimeFormat),
      custom_timezone: cdktf.stringToTerraform(this._customTimezone),
      datetime_attribute: cdktf.stringToTerraform(this._datetimeAttribute),
      datetime_format: cdktf.stringToTerraform(this._datetimeFormat),
      datetime_json_field: cdktf.stringToTerraform(this._datetimeJsonField),
      delay: cdktf.stringToTerraform(this._delay),
      delay_after_alert: cdktf.stringToTerraform(this._delayAfterAlert),
      delay_post_gc: cdktf.stringToTerraform(this._delayPostGc),
      description: cdktf.stringToTerraform(this._description),
      dn_map: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dnMap),
      empty_instead_of_zero: cdktf.booleanToTerraform(this._emptyInsteadOfZero),
      enable_attribute_mapping: cdktf.booleanToTerraform(this._enableAttributeMapping),
      enable_control_mapping: cdktf.booleanToTerraform(this._enableControlMapping),
      enabled: cdktf.booleanToTerraform(this._enabled),
      entry_cache_info: cdktf.stringToTerraform(this._entryCacheInfo),
      environment_id: cdktf.stringToTerraform(this._environmentId),
      exclude_base_dn: cdktf.listMapper(cdktf.stringToTerraform, false)(this._excludeBaseDn),
      exclude_filter: cdktf.listMapper(cdktf.stringToTerraform, false)(this._excludeFilter),
      expiration_offset: cdktf.stringToTerraform(this._expirationOffset),
      extension_argument: cdktf.listMapper(cdktf.stringToTerraform, false)(this._extensionArgument),
      extension_class: cdktf.stringToTerraform(this._extensionClass),
      filter: cdktf.listMapper(cdktf.stringToTerraform, false)(this._filter),
      filter_prefix: cdktf.stringToTerraform(this._filterPrefix),
      filter_suffix: cdktf.stringToTerraform(this._filterSuffix),
      gauge_info: cdktf.stringToTerraform(this._gaugeInfo),
      header_prefix_per_column: cdktf.booleanToTerraform(this._headerPrefixPerColumn),
      histogram_format: cdktf.stringToTerraform(this._histogramFormat),
      histogram_op_type: cdktf.listMapper(cdktf.stringToTerraform, false)(this._histogramOpType),
      host_info: cdktf.listMapper(cdktf.stringToTerraform, false)(this._hostInfo),
      http_proxy_external_server: cdktf.stringToTerraform(this._httpProxyExternalServer),
      ignored_password_policy_state_error_condition: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ignoredPasswordPolicyStateErrorCondition),
      include_attribute: cdktf.listMapper(cdktf.stringToTerraform, false)(this._includeAttribute),
      include_base_dn: cdktf.listMapper(cdktf.stringToTerraform, false)(this._includeBaseDn),
      include_filter: cdktf.listMapper(cdktf.stringToTerraform, false)(this._includeFilter),
      include_http_metrics: cdktf.booleanToTerraform(this._includeHttpMetrics),
      included_ldap_application: cdktf.listMapper(cdktf.stringToTerraform, false)(this._includedLdapApplication),
      included_ldap_stat: cdktf.listMapper(cdktf.stringToTerraform, false)(this._includedLdapStat),
      included_local_entry_base_dn: cdktf.listMapper(cdktf.stringToTerraform, false)(this._includedLocalEntryBaseDn),
      included_resource_stat: cdktf.listMapper(cdktf.stringToTerraform, false)(this._includedResourceStat),
      initial_connections: cdktf.numberToTerraform(this._initialConnections),
      invoke_for_internal_operations: cdktf.booleanToTerraform(this._invokeForInternalOperations),
      invoke_gc_day_of_week: cdktf.listMapper(cdktf.stringToTerraform, false)(this._invokeGcDayOfWeek),
      invoke_gc_time_utc: cdktf.listMapper(cdktf.stringToTerraform, false)(this._invokeGcTimeUtc),
      ldap_changelog_info: cdktf.stringToTerraform(this._ldapChangelogInfo),
      lines_between_header: cdktf.numberToTerraform(this._linesBetweenHeader),
      local_db_backend_info: cdktf.stringToTerraform(this._localDbBackendInfo),
      log_file: cdktf.stringToTerraform(this._logFile),
      log_file_format: cdktf.stringToTerraform(this._logFileFormat),
      log_file_permissions: cdktf.stringToTerraform(this._logFilePermissions),
      log_interval: cdktf.stringToTerraform(this._logInterval),
      logging_error_behavior: cdktf.stringToTerraform(this._loggingErrorBehavior),
      lower_bound: cdktf.numberToTerraform(this._lowerBound),
      map_attribute: cdktf.listMapper(cdktf.stringToTerraform, false)(this._mapAttribute),
      max_connections: cdktf.numberToTerraform(this._maxConnections),
      max_updates_per_second: cdktf.numberToTerraform(this._maxUpdatesPerSecond),
      maximum_membership_updates_per_modify: cdktf.numberToTerraform(this._maximumMembershipUpdatesPerModify),
      multi_valued_attribute_behavior: cdktf.stringToTerraform(this._multiValuedAttributeBehavior),
      multiple_attribute_behavior: cdktf.stringToTerraform(this._multipleAttributeBehavior),
      multiple_value_pattern_behavior: cdktf.stringToTerraform(this._multipleValuePatternBehavior),
      name: cdktf.stringToTerraform(this._name),
      num_delete_threads: cdktf.numberToTerraform(this._numDeleteThreads),
      num_most_expensive_phases_shown: cdktf.numberToTerraform(this._numMostExpensivePhasesShown),
      num_threads: cdktf.numberToTerraform(this._numThreads),
      num_worker_threads: cdktf.numberToTerraform(this._numWorkerThreads),
      oauth_client_id: cdktf.stringToTerraform(this._oauthClientId),
      oauth_client_secret: cdktf.stringToTerraform(this._oauthClientSecret),
      oauth_client_secret_passphrase_provider: cdktf.stringToTerraform(this._oauthClientSecretPassphraseProvider),
      output_file: cdktf.stringToTerraform(this._outputFile),
      override_local_password: cdktf.booleanToTerraform(this._overrideLocalPassword),
      pass_through_authentication_handler: cdktf.stringToTerraform(this._passThroughAuthenticationHandler),
      peer_server_priority_index: cdktf.numberToTerraform(this._peerServerPriorityIndex),
      per_application_ldap_stats: cdktf.stringToTerraform(this._perApplicationLdapStats),
      ping_interval: cdktf.stringToTerraform(this._pingInterval),
      plugin_type: cdktf.listMapper(cdktf.stringToTerraform, false)(this._pluginType),
      polling_interval: cdktf.stringToTerraform(this._pollingInterval),
      prevent_adding_groups_as_inverted_static_group_members: cdktf.booleanToTerraform(this._preventAddingGroupsAsInvertedStaticGroupMembers),
      prevent_adding_members_to_nonexistent_groups: cdktf.booleanToTerraform(this._preventAddingMembersToNonexistentGroups),
      prevent_conflicts_with_soft_deleted_entries: cdktf.booleanToTerraform(this._preventConflictsWithSoftDeletedEntries),
      prevent_nesting_nonexistent_groups: cdktf.booleanToTerraform(this._preventNestingNonexistentGroups),
      previous_file_extension: cdktf.stringToTerraform(this._previousFileExtension),
      purge_behavior: cdktf.stringToTerraform(this._purgeBehavior),
      read_operation_support: cdktf.stringToTerraform(this._readOperationSupport),
      referral_base_url: cdktf.listMapper(cdktf.stringToTerraform, false)(this._referralBaseUrl),
      replication_info: cdktf.stringToTerraform(this._replicationInfo),
      request_criteria: cdktf.stringToTerraform(this._requestCriteria),
      resource_type: cdktf.stringToTerraform(this._resourceType),
      retention_policy: cdktf.listMapper(cdktf.stringToTerraform, false)(this._retentionPolicy),
      rotation_listener: cdktf.listMapper(cdktf.stringToTerraform, false)(this._rotationListener),
      rotation_policy: cdktf.listMapper(cdktf.stringToTerraform, false)(this._rotationPolicy),
      scope: cdktf.stringToTerraform(this._scope),
      script_argument: cdktf.listMapper(cdktf.stringToTerraform, false)(this._scriptArgument),
      script_class: cdktf.stringToTerraform(this._scriptClass),
      search_base_dn: cdktf.stringToTerraform(this._searchBaseDn),
      search_filter_pattern: cdktf.stringToTerraform(this._searchFilterPattern),
      server: cdktf.listMapper(cdktf.stringToTerraform, false)(this._server),
      server_access_mode: cdktf.stringToTerraform(this._serverAccessMode),
      session_timeout: cdktf.stringToTerraform(this._sessionTimeout),
      source_attribute: cdktf.stringToTerraform(this._sourceAttribute),
      source_attribute_removal_behavior: cdktf.stringToTerraform(this._sourceAttributeRemovalBehavior),
      source_dn: cdktf.stringToTerraform(this._sourceDn),
      status_summary_info: cdktf.stringToTerraform(this._statusSummaryInfo),
      suppress_if_idle: cdktf.booleanToTerraform(this._suppressIfIdle),
      target_attribute: cdktf.stringToTerraform(this._targetAttribute),
      target_attribute_exists_during_initial_population_behavior: cdktf.stringToTerraform(this._targetAttributeExistsDuringInitialPopulationBehavior),
      target_dn: cdktf.stringToTerraform(this._targetDn),
      time_between_searches: cdktf.stringToTerraform(this._timeBetweenSearches),
      traditional_static_group_object_class: cdktf.stringToTerraform(this._traditionalStaticGroupObjectClass),
      try_local_bind: cdktf.booleanToTerraform(this._tryLocalBind),
      type: cdktf.listMapper(cdktf.stringToTerraform, false)(this._type),
      update_interval: cdktf.stringToTerraform(this._updateInterval),
      update_local_password: cdktf.booleanToTerraform(this._updateLocalPassword),
      update_local_password_dn: cdktf.stringToTerraform(this._updateLocalPasswordDn),
      update_source_attribute_behavior: cdktf.stringToTerraform(this._updateSourceAttributeBehavior),
      update_target_attribute_behavior: cdktf.stringToTerraform(this._updateTargetAttributeBehavior),
      updated_entry_newly_matches_criteria_behavior: cdktf.stringToTerraform(this._updatedEntryNewlyMatchesCriteriaBehavior),
      updated_entry_no_longer_matches_criteria_behavior: cdktf.stringToTerraform(this._updatedEntryNoLongerMatchesCriteriaBehavior),
      upper_bound: cdktf.numberToTerraform(this._upperBound),
      user_mapping_local_attribute: cdktf.listMapper(cdktf.stringToTerraform, false)(this._userMappingLocalAttribute),
      user_mapping_remote_json_field: cdktf.listMapper(cdktf.stringToTerraform, false)(this._userMappingRemoteJsonField),
      value_pattern: cdktf.listMapper(cdktf.stringToTerraform, false)(this._valuePattern),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      additional_user_mapping_scim_filter: {
        value: cdktf.stringToHclTerraform(this._additionalUserMappingScimFilter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      agentx_address: {
        value: cdktf.stringToHclTerraform(this._agentxAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      agentx_port: {
        value: cdktf.numberToHclTerraform(this._agentxPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      allow_lax_pass_through_authentication_passwords: {
        value: cdktf.booleanToHclTerraform(this._allowLaxPassThroughAuthenticationPasswords),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      allowed_request_control: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._allowedRequestControl),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      always_map_responses: {
        value: cdktf.booleanToHclTerraform(this._alwaysMapResponses),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      api_url: {
        value: cdktf.stringToHclTerraform(this._apiUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      append: {
        value: cdktf.booleanToHclTerraform(this._append),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      attribute_type: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._attributeType),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      auth_url: {
        value: cdktf.stringToHclTerraform(this._authUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      base_dn: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._baseDn),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      bind_dn_pattern: {
        value: cdktf.stringToHclTerraform(this._bindDnPattern),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      collection_interval: {
        value: cdktf.stringToHclTerraform(this._collectionInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      connect_retry_max_wait: {
        value: cdktf.stringToHclTerraform(this._connectRetryMaxWait),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      connection_criteria: {
        value: cdktf.stringToHclTerraform(this._connectionCriteria),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      context_name: {
        value: cdktf.stringToHclTerraform(this._contextName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_datetime_format: {
        value: cdktf.stringToHclTerraform(this._customDatetimeFormat),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_timezone: {
        value: cdktf.stringToHclTerraform(this._customTimezone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      datetime_attribute: {
        value: cdktf.stringToHclTerraform(this._datetimeAttribute),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      datetime_format: {
        value: cdktf.stringToHclTerraform(this._datetimeFormat),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      datetime_json_field: {
        value: cdktf.stringToHclTerraform(this._datetimeJsonField),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      delay: {
        value: cdktf.stringToHclTerraform(this._delay),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      delay_after_alert: {
        value: cdktf.stringToHclTerraform(this._delayAfterAlert),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      delay_post_gc: {
        value: cdktf.stringToHclTerraform(this._delayPostGc),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dn_map: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dnMap),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      empty_instead_of_zero: {
        value: cdktf.booleanToHclTerraform(this._emptyInsteadOfZero),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_attribute_mapping: {
        value: cdktf.booleanToHclTerraform(this._enableAttributeMapping),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_control_mapping: {
        value: cdktf.booleanToHclTerraform(this._enableControlMapping),
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
      entry_cache_info: {
        value: cdktf.stringToHclTerraform(this._entryCacheInfo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      environment_id: {
        value: cdktf.stringToHclTerraform(this._environmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      exclude_base_dn: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._excludeBaseDn),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      exclude_filter: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._excludeFilter),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      expiration_offset: {
        value: cdktf.stringToHclTerraform(this._expirationOffset),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      extension_argument: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._extensionArgument),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      extension_class: {
        value: cdktf.stringToHclTerraform(this._extensionClass),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._filter),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      filter_prefix: {
        value: cdktf.stringToHclTerraform(this._filterPrefix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter_suffix: {
        value: cdktf.stringToHclTerraform(this._filterSuffix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gauge_info: {
        value: cdktf.stringToHclTerraform(this._gaugeInfo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      header_prefix_per_column: {
        value: cdktf.booleanToHclTerraform(this._headerPrefixPerColumn),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      histogram_format: {
        value: cdktf.stringToHclTerraform(this._histogramFormat),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      histogram_op_type: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._histogramOpType),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      host_info: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._hostInfo),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      http_proxy_external_server: {
        value: cdktf.stringToHclTerraform(this._httpProxyExternalServer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ignored_password_policy_state_error_condition: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ignoredPasswordPolicyStateErrorCondition),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      include_attribute: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._includeAttribute),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      include_base_dn: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._includeBaseDn),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      include_filter: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._includeFilter),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      include_http_metrics: {
        value: cdktf.booleanToHclTerraform(this._includeHttpMetrics),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      included_ldap_application: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._includedLdapApplication),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      included_ldap_stat: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._includedLdapStat),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      included_local_entry_base_dn: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._includedLocalEntryBaseDn),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      included_resource_stat: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._includedResourceStat),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      initial_connections: {
        value: cdktf.numberToHclTerraform(this._initialConnections),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      invoke_for_internal_operations: {
        value: cdktf.booleanToHclTerraform(this._invokeForInternalOperations),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      invoke_gc_day_of_week: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._invokeGcDayOfWeek),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      invoke_gc_time_utc: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._invokeGcTimeUtc),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      ldap_changelog_info: {
        value: cdktf.stringToHclTerraform(this._ldapChangelogInfo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      lines_between_header: {
        value: cdktf.numberToHclTerraform(this._linesBetweenHeader),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      local_db_backend_info: {
        value: cdktf.stringToHclTerraform(this._localDbBackendInfo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_file: {
        value: cdktf.stringToHclTerraform(this._logFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_file_format: {
        value: cdktf.stringToHclTerraform(this._logFileFormat),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_file_permissions: {
        value: cdktf.stringToHclTerraform(this._logFilePermissions),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_interval: {
        value: cdktf.stringToHclTerraform(this._logInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      logging_error_behavior: {
        value: cdktf.stringToHclTerraform(this._loggingErrorBehavior),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      lower_bound: {
        value: cdktf.numberToHclTerraform(this._lowerBound),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      map_attribute: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._mapAttribute),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      max_connections: {
        value: cdktf.numberToHclTerraform(this._maxConnections),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_updates_per_second: {
        value: cdktf.numberToHclTerraform(this._maxUpdatesPerSecond),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      maximum_membership_updates_per_modify: {
        value: cdktf.numberToHclTerraform(this._maximumMembershipUpdatesPerModify),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      multi_valued_attribute_behavior: {
        value: cdktf.stringToHclTerraform(this._multiValuedAttributeBehavior),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      multiple_attribute_behavior: {
        value: cdktf.stringToHclTerraform(this._multipleAttributeBehavior),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      multiple_value_pattern_behavior: {
        value: cdktf.stringToHclTerraform(this._multipleValuePatternBehavior),
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
      num_delete_threads: {
        value: cdktf.numberToHclTerraform(this._numDeleteThreads),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      num_most_expensive_phases_shown: {
        value: cdktf.numberToHclTerraform(this._numMostExpensivePhasesShown),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      num_threads: {
        value: cdktf.numberToHclTerraform(this._numThreads),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      num_worker_threads: {
        value: cdktf.numberToHclTerraform(this._numWorkerThreads),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      oauth_client_id: {
        value: cdktf.stringToHclTerraform(this._oauthClientId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oauth_client_secret: {
        value: cdktf.stringToHclTerraform(this._oauthClientSecret),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oauth_client_secret_passphrase_provider: {
        value: cdktf.stringToHclTerraform(this._oauthClientSecretPassphraseProvider),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      output_file: {
        value: cdktf.stringToHclTerraform(this._outputFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      override_local_password: {
        value: cdktf.booleanToHclTerraform(this._overrideLocalPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      pass_through_authentication_handler: {
        value: cdktf.stringToHclTerraform(this._passThroughAuthenticationHandler),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      peer_server_priority_index: {
        value: cdktf.numberToHclTerraform(this._peerServerPriorityIndex),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      per_application_ldap_stats: {
        value: cdktf.stringToHclTerraform(this._perApplicationLdapStats),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ping_interval: {
        value: cdktf.stringToHclTerraform(this._pingInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      plugin_type: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._pluginType),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      polling_interval: {
        value: cdktf.stringToHclTerraform(this._pollingInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      prevent_adding_groups_as_inverted_static_group_members: {
        value: cdktf.booleanToHclTerraform(this._preventAddingGroupsAsInvertedStaticGroupMembers),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      prevent_adding_members_to_nonexistent_groups: {
        value: cdktf.booleanToHclTerraform(this._preventAddingMembersToNonexistentGroups),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      prevent_conflicts_with_soft_deleted_entries: {
        value: cdktf.booleanToHclTerraform(this._preventConflictsWithSoftDeletedEntries),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      prevent_nesting_nonexistent_groups: {
        value: cdktf.booleanToHclTerraform(this._preventNestingNonexistentGroups),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      previous_file_extension: {
        value: cdktf.stringToHclTerraform(this._previousFileExtension),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      purge_behavior: {
        value: cdktf.stringToHclTerraform(this._purgeBehavior),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      read_operation_support: {
        value: cdktf.stringToHclTerraform(this._readOperationSupport),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      referral_base_url: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._referralBaseUrl),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      replication_info: {
        value: cdktf.stringToHclTerraform(this._replicationInfo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      request_criteria: {
        value: cdktf.stringToHclTerraform(this._requestCriteria),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_type: {
        value: cdktf.stringToHclTerraform(this._resourceType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      retention_policy: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._retentionPolicy),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      rotation_listener: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._rotationListener),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      rotation_policy: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._rotationPolicy),
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
      script_argument: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._scriptArgument),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      script_class: {
        value: cdktf.stringToHclTerraform(this._scriptClass),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      search_base_dn: {
        value: cdktf.stringToHclTerraform(this._searchBaseDn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      search_filter_pattern: {
        value: cdktf.stringToHclTerraform(this._searchFilterPattern),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      server: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._server),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      server_access_mode: {
        value: cdktf.stringToHclTerraform(this._serverAccessMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      session_timeout: {
        value: cdktf.stringToHclTerraform(this._sessionTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_attribute: {
        value: cdktf.stringToHclTerraform(this._sourceAttribute),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_attribute_removal_behavior: {
        value: cdktf.stringToHclTerraform(this._sourceAttributeRemovalBehavior),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_dn: {
        value: cdktf.stringToHclTerraform(this._sourceDn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      status_summary_info: {
        value: cdktf.stringToHclTerraform(this._statusSummaryInfo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      suppress_if_idle: {
        value: cdktf.booleanToHclTerraform(this._suppressIfIdle),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      target_attribute: {
        value: cdktf.stringToHclTerraform(this._targetAttribute),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      target_attribute_exists_during_initial_population_behavior: {
        value: cdktf.stringToHclTerraform(this._targetAttributeExistsDuringInitialPopulationBehavior),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      target_dn: {
        value: cdktf.stringToHclTerraform(this._targetDn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      time_between_searches: {
        value: cdktf.stringToHclTerraform(this._timeBetweenSearches),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      traditional_static_group_object_class: {
        value: cdktf.stringToHclTerraform(this._traditionalStaticGroupObjectClass),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      try_local_bind: {
        value: cdktf.booleanToHclTerraform(this._tryLocalBind),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      type: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._type),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      update_interval: {
        value: cdktf.stringToHclTerraform(this._updateInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      update_local_password: {
        value: cdktf.booleanToHclTerraform(this._updateLocalPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      update_local_password_dn: {
        value: cdktf.stringToHclTerraform(this._updateLocalPasswordDn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      update_source_attribute_behavior: {
        value: cdktf.stringToHclTerraform(this._updateSourceAttributeBehavior),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      update_target_attribute_behavior: {
        value: cdktf.stringToHclTerraform(this._updateTargetAttributeBehavior),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      updated_entry_newly_matches_criteria_behavior: {
        value: cdktf.stringToHclTerraform(this._updatedEntryNewlyMatchesCriteriaBehavior),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      updated_entry_no_longer_matches_criteria_behavior: {
        value: cdktf.stringToHclTerraform(this._updatedEntryNoLongerMatchesCriteriaBehavior),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      upper_bound: {
        value: cdktf.numberToHclTerraform(this._upperBound),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      user_mapping_local_attribute: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._userMappingLocalAttribute),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      user_mapping_remote_json_field: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._userMappingRemoteJsonField),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      value_pattern: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._valuePattern),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
