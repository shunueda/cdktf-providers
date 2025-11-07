// https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_global_configuration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DefaultGlobalConfigurationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Indicates whether the Directory Server should allow underscores in attribute names and allow attribute names to begin with numeric digits (both of which are violations of the LDAP standards).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_global_configuration#allow_attribute_name_exceptions DefaultGlobalConfiguration#allow_attribute_name_exceptions}
  */
  readonly allowAttributeNameExceptions?: boolean | cdktf.IResolvable;
  /**
  * Allow replication to be inherited by subordinate/child backends.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_global_configuration#allow_inherited_replication_of_subordinate_backends DefaultGlobalConfiguration#allow_inherited_replication_of_subordinate_backends}
  */
  readonly allowInheritedReplicationOfSubordinateBackends?: boolean | cdktf.IResolvable;
  /**
  * Indicates that processes attaching to this server's local JVM are allowed to access internal data through JMX without the authentication requirements that remote JMX connections are subject to. Please review and understand the data that this option will expose (such as cn=monitor) to client applications to ensure there are no security concerns.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_global_configuration#allow_insecure_local_jmx_connections DefaultGlobalConfiguration#allow_insecure_local_jmx_connections}
  */
  readonly allowInsecureLocalJmxConnections?: boolean | cdktf.IResolvable;
  /**
  * A set of criteria that may be used to match LDAP requests that may be permitted over an insecure connection even if reject-insecure-requests is true. Note that some types of requests will always be permitted, including StartTLS and start administrative session requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_global_configuration#allowed_insecure_request_criteria DefaultGlobalConfiguration#allowed_insecure_request_criteria}
  */
  readonly allowedInsecureRequestCriteria?: string;
  /**
  * Specifies a set of TLS protocols that will be permitted for use in the server even though there may be known vulnerabilities that could cause their use to be unsafe in some conditions. Enabling support for insecure TLS protocols is discouraged, and is generally recommended only as a short-term measure to permit legacy clients to interact with the server until they can be updated to support more secure communication protocols.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_global_configuration#allowed_insecure_tls_protocol DefaultGlobalConfiguration#allowed_insecure_tls_protocol}
  */
  readonly allowedInsecureTlsProtocol?: string[];
  /**
  * Specifies the fully-qualified name of a Java class that may be invoked in the server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_global_configuration#allowed_task DefaultGlobalConfiguration#allowed_task}
  */
  readonly allowedTask?: string[];
  /**
  * A set of criteria that may be used to match LDAP requests that may be permitted over an unauthenticated connection even if reject-unauthenticated-requests is true. Note that some types of requests will always be permitted, including bind, StartTLS, and start administrative session requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_global_configuration#allowed_unauthenticated_request_criteria DefaultGlobalConfiguration#allowed_unauthenticated_request_criteria}
  */
  readonly allowedUnauthenticatedRequestCriteria?: string;
  /**
  * Specifies the operational attribute types that are defined in the schema with the NO-USER-MODIFICATION constraint that the server will allow to be altered if the associated request contains the ignore NO-USER-MODIFICATION request control.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_global_configuration#attributes_modifiable_with_ignore_no_user_modification_request_control DefaultGlobalConfiguration#attributes_modifiable_with_ignore_no_user_modification_request_control}
  */
  readonly attributesModifiableWithIgnoreNoUserModificationRequestControl?: string[];
  /**
  * Connection criteria that may be used to identify clients whose add requests should use entryUUID as the naming attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_global_configuration#auto_name_with_entry_uuid_connection_criteria DefaultGlobalConfiguration#auto_name_with_entry_uuid_connection_criteria}
  */
  readonly autoNameWithEntryUuidConnectionCriteria?: string;
  /**
  * Request criteria that may be used to identify add requests that should use entryUUID as the naming attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_global_configuration#auto_name_with_entry_uuid_request_criteria DefaultGlobalConfiguration#auto_name_with_entry_uuid_request_criteria}
  */
  readonly autoNameWithEntryUuidRequestCriteria?: string;
  /**
  * Indicates whether to automatically compress LDIF exports that are also encrypted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_global_configuration#automatically_compress_encrypted_ldif_exports DefaultGlobalConfiguration#automatically_compress_encrypted_ldif_exports}
  */
  readonly automaticallyCompressEncryptedLdifExports?: boolean | cdktf.IResolvable;
  /**
  * Indicates whether the server should use a separate background thread for each persistent search.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_global_configuration#background_thread_for_each_persistent_search DefaultGlobalConfiguration#background_thread_for_each_persistent_search}
  */
  readonly backgroundThreadForEachPersistentSearch?: boolean | cdktf.IResolvable;
  /**
  * The unique identifier for the encryption settings definition to use to generate the encryption key for encrypted backups by default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_global_configuration#backup_encryption_settings_definition_id DefaultGlobalConfiguration#backup_encryption_settings_definition_id}
  */
  readonly backupEncryptionSettingsDefinitionId?: string;
  /**
  * Indicates whether the Directory Server should reject any simple bind request that contains a DN but no password.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_global_configuration#bind_with_dn_requires_password DefaultGlobalConfiguration#bind_with_dn_requires_password}
  */
  readonly bindWithDnRequiresPassword?: boolean | cdktf.IResolvable;
  /**
  * When this property is set, changes made to this server using the console or dsconfig can be automatically applied to all servers in the specified server group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_global_configuration#configuration_server_group DefaultGlobalConfiguration#configuration_server_group}
  */
  readonly configurationServerGroup?: string;
  /**
  * This setting provides data integrity options when the Directory Server is installed with a database on a network storage device. A storage device may be accessed directly by a physical server, or indirectly through a virtual machine running on a hypervisor. Enabling this setting will apply changes to all Local DB Backends, the LDAP Changelog Backend, and the replication changelog database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_global_configuration#database_on_virtualized_or_network_storage DefaultGlobalConfiguration#database_on_virtualized_or_network_storage}
  */
  readonly databaseOnVirtualizedOrNetworkStorage?: boolean | cdktf.IResolvable;
  /**
  * Specifies the client connection policy that will be used by default for internal operations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_global_configuration#default_internal_operation_client_connection_policy DefaultGlobalConfiguration#default_internal_operation_client_connection_policy}
  */
  readonly defaultInternalOperationClientConnectionPolicy?: string;
  /**
  * Specifies the name of the password policy that is in effect for users whose entries do not specify an alternate password policy (either via a real or virtual attribute).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_global_configuration#default_password_policy DefaultGlobalConfiguration#default_password_policy}
  */
  readonly defaultPasswordPolicy?: string;
  /**
  * Specifies the name of a privilege that should not be evaluated by the server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_global_configuration#disabled_privilege DefaultGlobalConfiguration#disabled_privilege}
  */
  readonly disabledPrivilege?: string[];
  /**
  * Specifies the maximum number of duplicate alert messages that should be sent via the administrative alert framework in the time window specified by the duplicate-alert-time-limit property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_global_configuration#duplicate_alert_limit DefaultGlobalConfiguration#duplicate_alert_limit}
  */
  readonly duplicateAlertLimit?: number;
  /**
  * Specifies the length of time that must expire before duplicate messages are sent via the administrative alert framework.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_global_configuration#duplicate_alert_time_limit DefaultGlobalConfiguration#duplicate_alert_time_limit}
  */
  readonly duplicateAlertTimeLimit?: string;
  /**
  * Specifies the maximum number of duplicate error log messages that should be logged in the time window specified by the duplicate-error-log-time-limit property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_global_configuration#duplicate_error_log_limit DefaultGlobalConfiguration#duplicate_error_log_limit}
  */
  readonly duplicateErrorLogLimit?: number;
  /**
  * Specifies the length of time that must expire before duplicate log messages above the duplicate-error-log-limit threshold are logged again to the error log.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_global_configuration#duplicate_error_log_time_limit DefaultGlobalConfiguration#duplicate_error_log_time_limit}
  */
  readonly duplicateErrorLogTimeLimit?: string;
  /**
  * Indicates whether the Directory Server should attempt to record information about the length of time required to process various phases of an operation. Enabling this feature may impact performance, but could make it easier to identify potential bottlenecks in operation processing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_global_configuration#enable_sub_operation_timer DefaultGlobalConfiguration#enable_sub_operation_timer}
  */
  readonly enableSubOperationTimer?: boolean | cdktf.IResolvable;
  /**
  * Indicates whether the server should encrypt backups by default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_global_configuration#encrypt_backups_by_default DefaultGlobalConfiguration#encrypt_backups_by_default}
  */
  readonly encryptBackupsByDefault?: boolean | cdktf.IResolvable;
  /**
  * Indicates whether the Directory Server should encrypt the data that it stores in all components that support it. This may include certain types of backends (including local DB and large attribute backends), the LDAP changelog, and the replication server database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_global_configuration#encrypt_data DefaultGlobalConfiguration#encrypt_data}
  */
  readonly encryptData?: boolean | cdktf.IResolvable;
  /**
  * Indicates whether the server should encrypt LDIF exports by default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_global_configuration#encrypt_ldif_exports_by_default DefaultGlobalConfiguration#encrypt_ldif_exports_by_default}
  */
  readonly encryptLdifExportsByDefault?: boolean | cdktf.IResolvable;
  /**
  * Specifies the cipher stream provider that should be used to protect the contents of the encryption settings database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_global_configuration#encryption_settings_cipher_stream_provider DefaultGlobalConfiguration#encryption_settings_cipher_stream_provider}
  */
  readonly encryptionSettingsCipherStreamProvider?: string;
  /**
  * Indicates whether the Directory Server should be shut down if a severe error is raised (e.g., an out of memory error) which may prevent the JVM from continuing to run properly.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_global_configuration#exit_on_jvm_error DefaultGlobalConfiguration#exit_on_jvm_error}
  */
  readonly exitOnJvmError?: boolean | cdktf.IResolvable;
  /**
  * Indicates whether this server should be forced to assume the master role if no other suitable server is found to act as master or if multiple masters are detected. A master is only needed when changes are made to mirrored data, i.e. data specific to the topology itself and cluster-wide configuration data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_global_configuration#force_as_master_for_mirrored_data DefaultGlobalConfiguration#force_as_master_for_mirrored_data}
  */
  readonly forceAsMasterForMirroredData?: boolean | cdktf.IResolvable;
  /**
  * Specifies the minimum length of time required for backend or request processor initialization that will trigger the server to force an explicit garbage collection. A value of "0 seconds" indicates that the server should never invoke an explicit garbage collection regardless of the length of time required to initialize the server backends.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_global_configuration#forced_gc_prime_duration DefaultGlobalConfiguration#forced_gc_prime_duration}
  */
  readonly forcedGcPrimeDuration?: string;
  /**
  * Specifies the maximum length of time that a client connection may remain established since its last completed operation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_global_configuration#idle_time_limit DefaultGlobalConfiguration#idle_time_limit}
  */
  readonly idleTimeLimit?: string;
  /**
  * Specifies a name that may be used to uniquely identify this Directory Server instance among other instances in the environment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_global_configuration#instance_name DefaultGlobalConfiguration#instance_name}
  */
  readonly instanceName?: string;
  /**
  * Specifies how the Directory Server should handle operations whenever an attribute value violates the associated attribute syntax.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_global_configuration#invalid_attribute_syntax_behavior DefaultGlobalConfiguration#invalid_attribute_syntax_behavior}
  */
  readonly invalidAttributeSyntaxBehavior?: string;
  /**
  * When set to true, the server will use its original, non-standard JMX MBean names for the monitoring MBeans. These include RDN keys of "Rdn1" and "Rdn2" instead of the recommended "type" and "name" keys. This should option should only be enabled for installations that have monitoring infrastructure that depends on the old keys.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_global_configuration#jmx_use_legacy_mbean_names DefaultGlobalConfiguration#jmx_use_legacy_mbean_names}
  */
  readonly jmxUseLegacyMbeanNames?: boolean | cdktf.IResolvable;
  /**
  * Specifies how a Java type is chosen for monitor attributes exposed as JMX attribute values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_global_configuration#jmx_value_behavior DefaultGlobalConfiguration#jmx_value_behavior}
  */
  readonly jmxValueBehavior?: string;
  /**
  * Specifies the maximum number of entries that may be directly joined with any individual search result entry.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_global_configuration#ldap_join_size_limit DefaultGlobalConfiguration#ldap_join_size_limit}
  */
  readonly ldapJoinSizeLimit?: number;
  /**
  * The unique identifier for the encryption settings definition to use to generate the encryption key for encrypted LDIF exports by default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_global_configuration#ldif_export_encryption_settings_definition_id DefaultGlobalConfiguration#ldif_export_encryption_settings_definition_id}
  */
  readonly ldifExportEncryptionSettingsDefinitionId?: string;
  /**
  * Specifies the location for this Directory Server. Operations performed which involve communication with other servers may prefer servers in the same location to help ensure low-latency responses.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_global_configuration#location DefaultGlobalConfiguration#location}
  */
  readonly location?: string;
  /**
  * Specifies the maximum number of entries that the Directory Server should "look through" in the course of processing a search request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_global_configuration#lookthrough_limit DefaultGlobalConfiguration#lookthrough_limit}
  */
  readonly lookthroughLimit?: number;
  /**
  * The maximum length of time that a connection to an SMTP server should be considered valid.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_global_configuration#max_smtp_connection_age DefaultGlobalConfiguration#max_smtp_connection_age}
  */
  readonly maxSmtpConnectionAge?: string;
  /**
  * The maximum number of SMTP connections that will be maintained for delivering email messages.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_global_configuration#max_smtp_connection_count DefaultGlobalConfiguration#max_smtp_connection_count}
  */
  readonly maxSmtpConnectionCount?: number;
  /**
  * Specifies the maximum number of attributes that may be included in an add request. This property does not impose any limit on the number of values that an attribute may have.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_global_configuration#maximum_attributes_per_add_request DefaultGlobalConfiguration#maximum_attributes_per_add_request}
  */
  readonly maximumAttributesPerAddRequest?: number;
  /**
  * Specifies the maximum number of LDAP client connections which may be established to this Directory Server at the same time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_global_configuration#maximum_concurrent_connections DefaultGlobalConfiguration#maximum_concurrent_connections}
  */
  readonly maximumConcurrentConnections?: number;
  /**
  * Specifies the maximum number of LDAP client connections which may be established to this Directory Server at the same time and authenticated as the same user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_global_configuration#maximum_concurrent_connections_per_bind_dn DefaultGlobalConfiguration#maximum_concurrent_connections_per_bind_dn}
  */
  readonly maximumConcurrentConnectionsPerBindDn?: number;
  /**
  * Specifies the maximum number of LDAP client connections originating from the same IP address which may be established to this Directory Server at the same time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_global_configuration#maximum_concurrent_connections_per_ip_address DefaultGlobalConfiguration#maximum_concurrent_connections_per_ip_address}
  */
  readonly maximumConcurrentConnectionsPerIpAddress?: number;
  /**
  * Specifies the maximum number of unindexed searches that may be in progress in this backend at any given time. Any unindexed searches requested while the maximum number of unindexed searches are already being processed will be rejected. A value of zero indicates that no limit will be enforced.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_global_configuration#maximum_concurrent_unindexed_searches DefaultGlobalConfiguration#maximum_concurrent_unindexed_searches}
  */
  readonly maximumConcurrentUnindexedSearches?: number;
  /**
  * Specifies the maximum number of modifications that may be included in a modify request. This property does not impose any limit on the number of attribute values that a modification may have.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_global_configuration#maximum_modifications_per_modify_request DefaultGlobalConfiguration#maximum_modifications_per_modify_request}
  */
  readonly maximumModificationsPerModifyRequest?: number;
  /**
  * The maximum number of server.out log files (including the current active log file) that should be retained. When rotating the log file, if the total number of files exceeds this count, then the oldest file(s) will be removed so that the total number of log files is within this limit.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_global_configuration#maximum_server_out_log_file_count DefaultGlobalConfiguration#maximum_server_out_log_file_count}
  */
  readonly maximumServerOutLogFileCount?: number;
  /**
  * The maximum allowed size that the server.out log file will be allowed to have. If a write would cause the file to exceed this size, then the current file will be rotated out of place and a new empty file will be created and the message written to it.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_global_configuration#maximum_server_out_log_file_size DefaultGlobalConfiguration#maximum_server_out_log_file_size}
  */
  readonly maximumServerOutLogFileSize?: string;
  /**
  * Specifies the maximum amount of time the shutdown of Directory Server may take.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_global_configuration#maximum_shutdown_time DefaultGlobalConfiguration#maximum_shutdown_time}
  */
  readonly maximumShutdownTime?: string;
  /**
  * Specifies the maximum number of password policies that are defined in the user data (that is, outside of the configuration) that the server should cache in memory for faster access. A value of zero indicates that the server should not cache any user data password policies.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_global_configuration#maximum_user_data_password_policies_to_cache DefaultGlobalConfiguration#maximum_user_data_password_policies_to_cache}
  */
  readonly maximumUserDataPasswordPoliciesToCache?: number;
  /**
  * Specifies the length of time that the Directory Server should cache the IP addresses associated with the names of systems with which it interacts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_global_configuration#network_address_cache_ttl DefaultGlobalConfiguration#network_address_cache_ttl}
  */
  readonly networkAddressCacheTtl?: string;
  /**
  * Specifies whether the Directory Server should cache the last valid IP addresses associated with the names of systems with which it interacts with when the domain name service returns an unknown host exception. Java may return an unknown host exception when there is unexpected interruption in domain name service so this setting protects the Directory Server from temporary DNS server outages if previous results have been cached.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_global_configuration#network_address_outage_cache_enabled DefaultGlobalConfiguration#network_address_outage_cache_enabled}
  */
  readonly networkAddressOutageCacheEnabled?: boolean | cdktf.IResolvable;
  /**
  * Indicates whether the Directory Server should send a response to any operation that is interrupted via an abandon request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_global_configuration#notify_abandoned_operations DefaultGlobalConfiguration#notify_abandoned_operations}
  */
  readonly notifyAbandonedOperations?: boolean | cdktf.IResolvable;
  /**
  * Specifies a set of attribute types for which the server will permit values that do not conform to the associated attribute syntax.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_global_configuration#permit_syntax_violations_for_attribute DefaultGlobalConfiguration#permit_syntax_violations_for_attribute}
  */
  readonly permitSyntaxViolationsForAttribute?: string[];
  /**
  * Specifies the name of the identity mapper to map authorization ID values (using the "u:" form) provided in the proxied authorization control to the corresponding user entry.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_global_configuration#proxied_authorization_identity_mapper DefaultGlobalConfiguration#proxied_authorization_identity_mapper}
  */
  readonly proxiedAuthorizationIdentityMapper?: string;
  /**
  * Indicates whether the values of sensitive configuration properties should be redacted when logging configuration changes, including in the configuration audit log, the error log, and the server.out log file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_global_configuration#redact_sensitive_values_in_config_logs DefaultGlobalConfiguration#redact_sensitive_values_in_config_logs}
  */
  readonly redactSensitiveValuesInConfigLogs?: boolean | cdktf.IResolvable;
  /**
  * Indicates whether the Directory Server should reject any LDAP request (other than StartTLS) received from a client that is not using an encrypted connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_global_configuration#reject_insecure_requests DefaultGlobalConfiguration#reject_insecure_requests}
  */
  readonly rejectInsecureRequests?: boolean | cdktf.IResolvable;
  /**
  * Indicates whether the Directory Server should reject any LDAP request (other than bind or StartTLS requests) received from a client that has not yet been authenticated, whose last authentication attempt was unsuccessful, or whose last authentication attempt used anonymous authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_global_configuration#reject_unauthenticated_requests DefaultGlobalConfiguration#reject_unauthenticated_requests}
  */
  readonly rejectUnauthenticatedRequests?: boolean | cdktf.IResolvable;
  /**
  * The maximum number of replication backlog updates a replication assurance source (i.e. a peer Directory Server) can have and be immediately recognized as an available assurance source by this Directory Server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_global_configuration#replication_assurance_source_backlog_fast_start_threshold DefaultGlobalConfiguration#replication_assurance_source_backlog_fast_start_threshold}
  */
  readonly replicationAssuranceSourceBacklogFastStartThreshold?: number;
  /**
  * The amount of time a replication assurance source (i.e. a peer Directory Server) will be suspended from assurance requirements on this Directory Server if it experiences an assurance timeout.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_global_configuration#replication_assurance_source_timeout_suspend_duration DefaultGlobalConfiguration#replication_assurance_source_timeout_suspend_duration}
  */
  readonly replicationAssuranceSourceTimeoutSuspendDuration?: string;
  /**
  * An alert is sent when the number of outstanding replication changes for the Directory Server has exceeded this threshold for longer than the replication backlog duration alert threshold.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_global_configuration#replication_backlog_count_alert_threshold DefaultGlobalConfiguration#replication_backlog_count_alert_threshold}
  */
  readonly replicationBacklogCountAlertThreshold?: number;
  /**
  * An alert is sent when the number of outstanding replication changes for the Directory Server has exceeded the replication backlog count alert threshold for longer than this duration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_global_configuration#replication_backlog_duration_alert_threshold DefaultGlobalConfiguration#replication_backlog_duration_alert_threshold}
  */
  readonly replicationBacklogDurationAlertThreshold?: string;
  /**
  * Specifies the size limit for historical information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_global_configuration#replication_history_limit DefaultGlobalConfiguration#replication_history_limit}
  */
  readonly replicationHistoryLimit?: number;
  /**
  * Indicates whether state about obsolete replicas is automatically purged.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_global_configuration#replication_purge_obsolete_replicas DefaultGlobalConfiguration#replication_purge_obsolete_replicas}
  */
  readonly replicationPurgeObsoleteReplicas?: boolean | cdktf.IResolvable;
  /**
  * The name of the replication set assigned to this Directory Server. Restricted domains are only replicated within instances using the same replication set name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_global_configuration#replication_set_name DefaultGlobalConfiguration#replication_set_name}
  */
  readonly replicationSetName?: string;
  /**
  * Specifies a result code map that should be used for clients that do not have a map associated with their client connection policy. If the associated client connection policy has a result code map, then that map will be used instead. If no map is associated either with the client connection policy or the global configuration, then an internal default will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_global_configuration#result_code_map DefaultGlobalConfiguration#result_code_map}
  */
  readonly resultCodeMap?: string;
  /**
  * Indicates whether responses for failed bind operations should include a message string providing the reason for the authentication failure.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_global_configuration#return_bind_error_messages DefaultGlobalConfiguration#return_bind_error_messages}
  */
  readonly returnBindErrorMessages?: boolean | cdktf.IResolvable;
  /**
  * Provides the ability to indicate that some attributes should be considered sensitive and additional protection should be in place when interacting with those attributes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_global_configuration#sensitive_attribute DefaultGlobalConfiguration#sensitive_attribute}
  */
  readonly sensitiveAttribute?: string[];
  /**
  * Specifies the numeric value of the result code when request processing fails due to an internal server error.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_global_configuration#server_error_result_code DefaultGlobalConfiguration#server_error_result_code}
  */
  readonly serverErrorResultCode?: number;
  /**
  * Supported in PingDirectory product version 10.0.0.0+. Specifies the percentage of the JVM memory to allocate to the database cache that is shared across all local DB backends.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_global_configuration#shared_local_db_backend_database_cache_percent DefaultGlobalConfiguration#shared_local_db_backend_database_cache_percent}
  */
  readonly sharedLocalDbBackendDatabaseCachePercent?: number;
  /**
  * Specifies how the Directory Server should handle operations for an entry does not contain a structural object class, or for an entry that contains multiple structural classes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_global_configuration#single_structural_objectclass_behavior DefaultGlobalConfiguration#single_structural_objectclass_behavior}
  */
  readonly singleStructuralObjectclassBehavior?: string;
  /**
  * Specifies the maximum number of entries that the Directory Server should return to clients by default when processing a search operation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_global_configuration#size_limit DefaultGlobalConfiguration#size_limit}
  */
  readonly sizeLimit?: number;
  /**
  * The length of time between checks to ensure that available SMTP connections are still valid.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_global_configuration#smtp_connection_health_check_interval DefaultGlobalConfiguration#smtp_connection_health_check_interval}
  */
  readonly smtpConnectionHealthCheckInterval?: string;
  /**
  * Specifies the set of servers that will be used to send email messages. The order in which the servers are listed indicates the order in which the Directory Server will attempt to use them in the course of sending a message. The first attempt will always go to the server at the top of the list, and servers further down the list will only be used if none of the servers listed above it were able to successfully send the message.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_global_configuration#smtp_server DefaultGlobalConfiguration#smtp_server}
  */
  readonly smtpServer?: string[];
  /**
  * Specifies the soft delete policy that will be used by default for delete operations. Soft delete operations introduce the ability to control the server behavior of the delete operation. Instead of performing a permanent delete of an entry, deleted entries can be retained as soft deleted entries by their entryUUID values and are available for undelete at a later time. In addition to a soft delete policy enabling soft deletes, delete operations sent to the server must have the soft delete request control present with sufficient access privileges to access the soft delete request control.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_global_configuration#soft_delete_policy DefaultGlobalConfiguration#soft_delete_policy}
  */
  readonly softDeletePolicy?: string;
  /**
  * Specifies how the server should handle error log messages (which may include errors, warnings, and notices) generated during startup. All of these messages will be written to all configured error loggers, but they may also be written to other locations (like standard output, standard error, or the server.out log file) so that they are displayed on the console when the server is starting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_global_configuration#startup_error_logger_output_location DefaultGlobalConfiguration#startup_error_logger_output_location}
  */
  readonly startupErrorLoggerOutputLocation?: string;
  /**
  * The number of outstanding changes any replica can have before the Directory Server will start accepting connections. The Directory Server may never accept connections if this setting is too low. If you are unsure which value to use, you can use the number of expected updates within a five second interval.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_global_configuration#startup_min_replication_backlog_count DefaultGlobalConfiguration#startup_min_replication_backlog_count}
  */
  readonly startupMinReplicationBacklogCount?: number;
  /**
  * Specifies the length of time that a subtree may remain hidden or read-only before an administrative alert is sent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_global_configuration#subtree_accessibility_alert_time_limit DefaultGlobalConfiguration#subtree_accessibility_alert_time_limit}
  */
  readonly subtreeAccessibilityAlertTimeLimit?: string;
  /**
  * Supported in PingDirectory product version 10.2.0.0+. Specifies the name and value of a system property to set in the JVM.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_global_configuration#system_property DefaultGlobalConfiguration#system_property}
  */
  readonly systemProperty?: string[];
  /**
  * Specifies the maximum length of time that the Directory Server should be allowed to spend processing a search operation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_global_configuration#time_limit DefaultGlobalConfiguration#time_limit}
  */
  readonly timeLimit?: string;
  /**
  * Specifies criteria for identifying specific applications that access the server to enable tracking throughput and latency of LDAP operations issued by an application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_global_configuration#tracked_application DefaultGlobalConfiguration#tracked_application}
  */
  readonly trackedApplication?: string[];
  /**
  * The idle-time-limit limit value that will apply for connections from unauthenticated clients. If this is not specified, then the value of the idle-time-limit property will be applied for both authenticated and unauthenticated connections.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_global_configuration#unauthenticated_idle_time_limit DefaultGlobalConfiguration#unauthenticated_idle_time_limit}
  */
  readonly unauthenticatedIdleTimeLimit?: string;
  /**
  * The lookthrough limit value that will apply for connections from unauthenticated clients. If this is not specified, then the value of the lookthrough-limit property will be applied for both authenticated and unauthenticated connections.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_global_configuration#unauthenticated_lookthrough_limit DefaultGlobalConfiguration#unauthenticated_lookthrough_limit}
  */
  readonly unauthenticatedLookthroughLimit?: number;
  /**
  * The size limit value that will apply for connections from unauthenticated clients. If this is not specified, then the value of the size-limit property will be applied for both authenticated and unauthenticated connections.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_global_configuration#unauthenticated_size_limit DefaultGlobalConfiguration#unauthenticated_size_limit}
  */
  readonly unauthenticatedSizeLimit?: number;
  /**
  * The time limit value that will apply for connections from unauthenticated clients. If this is not specified, then the value of the time-limit property will be applied for both authenticated and unauthenticated connections.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_global_configuration#unauthenticated_time_limit DefaultGlobalConfiguration#unauthenticated_time_limit}
  */
  readonly unauthenticatedTimeLimit?: string;
  /**
  * Specifies the action which should be taken for any database that experiences an unrecoverable error. Action applies to local database backends and the replication recent changes database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_global_configuration#unrecoverable_database_error_mode DefaultGlobalConfiguration#unrecoverable_database_error_mode}
  */
  readonly unrecoverableDatabaseErrorMode?: string;
  /**
  * Supported in PingDirectory product version 10.0.0.0+. Indicates whether the server should use a common database cache that is shared across all local DB backends instead of maintaining a separate cache for each backend.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_global_configuration#use_shared_database_cache_across_all_local_db_backends DefaultGlobalConfiguration#use_shared_database_cache_across_all_local_db_backends}
  */
  readonly useSharedDatabaseCacheAcrossAllLocalDbBackends?: boolean | cdktf.IResolvable;
  /**
  * Indicates whether the digest should always be verified whenever an entry containing a digest is decoded. If this is "true", then if a digest exists, it will always be verified. Otherwise, the digest will be written when encoding entries but ignored when decoding entries but may still be available for other verification processing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_global_configuration#verify_entry_digests DefaultGlobalConfiguration#verify_entry_digests}
  */
  readonly verifyEntryDigests?: boolean | cdktf.IResolvable;
  /**
  * Indicates whether the server should issue a warning when enabling a backend that contains multiple base DNs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_global_configuration#warn_for_backends_with_multiple_base_dns DefaultGlobalConfiguration#warn_for_backends_with_multiple_base_dns}
  */
  readonly warnForBackendsWithMultipleBaseDns?: boolean | cdktf.IResolvable;
  /**
  * Specifies the kinds of write operations the Directory Server can process.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_global_configuration#writability_mode DefaultGlobalConfiguration#writability_mode}
  */
  readonly writabilityMode?: string;
}
export interface DefaultGlobalConfigurationRequiredActions {
}

export function defaultGlobalConfigurationRequiredActionsToTerraform(struct?: DefaultGlobalConfigurationRequiredActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function defaultGlobalConfigurationRequiredActionsToHclTerraform(struct?: DefaultGlobalConfigurationRequiredActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DefaultGlobalConfigurationRequiredActionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DefaultGlobalConfigurationRequiredActions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DefaultGlobalConfigurationRequiredActions | undefined) {
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

export class DefaultGlobalConfigurationRequiredActionsList extends cdktf.ComplexList {

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
  public get(index: number): DefaultGlobalConfigurationRequiredActionsOutputReference {
    return new DefaultGlobalConfigurationRequiredActionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_global_configuration pingdirectory_default_global_configuration}
*/
export class DefaultGlobalConfiguration extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingdirectory_default_global_configuration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DefaultGlobalConfiguration resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DefaultGlobalConfiguration to import
  * @param importFromId The id of the existing DefaultGlobalConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_global_configuration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DefaultGlobalConfiguration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingdirectory_default_global_configuration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_global_configuration pingdirectory_default_global_configuration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DefaultGlobalConfigurationConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DefaultGlobalConfigurationConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'pingdirectory_default_global_configuration',
      terraformGeneratorMetadata: {
        providerName: 'pingdirectory',
        providerVersion: '1.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._allowAttributeNameExceptions = config.allowAttributeNameExceptions;
    this._allowInheritedReplicationOfSubordinateBackends = config.allowInheritedReplicationOfSubordinateBackends;
    this._allowInsecureLocalJmxConnections = config.allowInsecureLocalJmxConnections;
    this._allowedInsecureRequestCriteria = config.allowedInsecureRequestCriteria;
    this._allowedInsecureTlsProtocol = config.allowedInsecureTlsProtocol;
    this._allowedTask = config.allowedTask;
    this._allowedUnauthenticatedRequestCriteria = config.allowedUnauthenticatedRequestCriteria;
    this._attributesModifiableWithIgnoreNoUserModificationRequestControl = config.attributesModifiableWithIgnoreNoUserModificationRequestControl;
    this._autoNameWithEntryUuidConnectionCriteria = config.autoNameWithEntryUuidConnectionCriteria;
    this._autoNameWithEntryUuidRequestCriteria = config.autoNameWithEntryUuidRequestCriteria;
    this._automaticallyCompressEncryptedLdifExports = config.automaticallyCompressEncryptedLdifExports;
    this._backgroundThreadForEachPersistentSearch = config.backgroundThreadForEachPersistentSearch;
    this._backupEncryptionSettingsDefinitionId = config.backupEncryptionSettingsDefinitionId;
    this._bindWithDnRequiresPassword = config.bindWithDnRequiresPassword;
    this._configurationServerGroup = config.configurationServerGroup;
    this._databaseOnVirtualizedOrNetworkStorage = config.databaseOnVirtualizedOrNetworkStorage;
    this._defaultInternalOperationClientConnectionPolicy = config.defaultInternalOperationClientConnectionPolicy;
    this._defaultPasswordPolicy = config.defaultPasswordPolicy;
    this._disabledPrivilege = config.disabledPrivilege;
    this._duplicateAlertLimit = config.duplicateAlertLimit;
    this._duplicateAlertTimeLimit = config.duplicateAlertTimeLimit;
    this._duplicateErrorLogLimit = config.duplicateErrorLogLimit;
    this._duplicateErrorLogTimeLimit = config.duplicateErrorLogTimeLimit;
    this._enableSubOperationTimer = config.enableSubOperationTimer;
    this._encryptBackupsByDefault = config.encryptBackupsByDefault;
    this._encryptData = config.encryptData;
    this._encryptLdifExportsByDefault = config.encryptLdifExportsByDefault;
    this._encryptionSettingsCipherStreamProvider = config.encryptionSettingsCipherStreamProvider;
    this._exitOnJvmError = config.exitOnJvmError;
    this._forceAsMasterForMirroredData = config.forceAsMasterForMirroredData;
    this._forcedGcPrimeDuration = config.forcedGcPrimeDuration;
    this._idleTimeLimit = config.idleTimeLimit;
    this._instanceName = config.instanceName;
    this._invalidAttributeSyntaxBehavior = config.invalidAttributeSyntaxBehavior;
    this._jmxUseLegacyMbeanNames = config.jmxUseLegacyMbeanNames;
    this._jmxValueBehavior = config.jmxValueBehavior;
    this._ldapJoinSizeLimit = config.ldapJoinSizeLimit;
    this._ldifExportEncryptionSettingsDefinitionId = config.ldifExportEncryptionSettingsDefinitionId;
    this._location = config.location;
    this._lookthroughLimit = config.lookthroughLimit;
    this._maxSmtpConnectionAge = config.maxSmtpConnectionAge;
    this._maxSmtpConnectionCount = config.maxSmtpConnectionCount;
    this._maximumAttributesPerAddRequest = config.maximumAttributesPerAddRequest;
    this._maximumConcurrentConnections = config.maximumConcurrentConnections;
    this._maximumConcurrentConnectionsPerBindDn = config.maximumConcurrentConnectionsPerBindDn;
    this._maximumConcurrentConnectionsPerIpAddress = config.maximumConcurrentConnectionsPerIpAddress;
    this._maximumConcurrentUnindexedSearches = config.maximumConcurrentUnindexedSearches;
    this._maximumModificationsPerModifyRequest = config.maximumModificationsPerModifyRequest;
    this._maximumServerOutLogFileCount = config.maximumServerOutLogFileCount;
    this._maximumServerOutLogFileSize = config.maximumServerOutLogFileSize;
    this._maximumShutdownTime = config.maximumShutdownTime;
    this._maximumUserDataPasswordPoliciesToCache = config.maximumUserDataPasswordPoliciesToCache;
    this._networkAddressCacheTtl = config.networkAddressCacheTtl;
    this._networkAddressOutageCacheEnabled = config.networkAddressOutageCacheEnabled;
    this._notifyAbandonedOperations = config.notifyAbandonedOperations;
    this._permitSyntaxViolationsForAttribute = config.permitSyntaxViolationsForAttribute;
    this._proxiedAuthorizationIdentityMapper = config.proxiedAuthorizationIdentityMapper;
    this._redactSensitiveValuesInConfigLogs = config.redactSensitiveValuesInConfigLogs;
    this._rejectInsecureRequests = config.rejectInsecureRequests;
    this._rejectUnauthenticatedRequests = config.rejectUnauthenticatedRequests;
    this._replicationAssuranceSourceBacklogFastStartThreshold = config.replicationAssuranceSourceBacklogFastStartThreshold;
    this._replicationAssuranceSourceTimeoutSuspendDuration = config.replicationAssuranceSourceTimeoutSuspendDuration;
    this._replicationBacklogCountAlertThreshold = config.replicationBacklogCountAlertThreshold;
    this._replicationBacklogDurationAlertThreshold = config.replicationBacklogDurationAlertThreshold;
    this._replicationHistoryLimit = config.replicationHistoryLimit;
    this._replicationPurgeObsoleteReplicas = config.replicationPurgeObsoleteReplicas;
    this._replicationSetName = config.replicationSetName;
    this._resultCodeMap = config.resultCodeMap;
    this._returnBindErrorMessages = config.returnBindErrorMessages;
    this._sensitiveAttribute = config.sensitiveAttribute;
    this._serverErrorResultCode = config.serverErrorResultCode;
    this._sharedLocalDbBackendDatabaseCachePercent = config.sharedLocalDbBackendDatabaseCachePercent;
    this._singleStructuralObjectclassBehavior = config.singleStructuralObjectclassBehavior;
    this._sizeLimit = config.sizeLimit;
    this._smtpConnectionHealthCheckInterval = config.smtpConnectionHealthCheckInterval;
    this._smtpServer = config.smtpServer;
    this._softDeletePolicy = config.softDeletePolicy;
    this._startupErrorLoggerOutputLocation = config.startupErrorLoggerOutputLocation;
    this._startupMinReplicationBacklogCount = config.startupMinReplicationBacklogCount;
    this._subtreeAccessibilityAlertTimeLimit = config.subtreeAccessibilityAlertTimeLimit;
    this._systemProperty = config.systemProperty;
    this._timeLimit = config.timeLimit;
    this._trackedApplication = config.trackedApplication;
    this._unauthenticatedIdleTimeLimit = config.unauthenticatedIdleTimeLimit;
    this._unauthenticatedLookthroughLimit = config.unauthenticatedLookthroughLimit;
    this._unauthenticatedSizeLimit = config.unauthenticatedSizeLimit;
    this._unauthenticatedTimeLimit = config.unauthenticatedTimeLimit;
    this._unrecoverableDatabaseErrorMode = config.unrecoverableDatabaseErrorMode;
    this._useSharedDatabaseCacheAcrossAllLocalDbBackends = config.useSharedDatabaseCacheAcrossAllLocalDbBackends;
    this._verifyEntryDigests = config.verifyEntryDigests;
    this._warnForBackendsWithMultipleBaseDns = config.warnForBackendsWithMultipleBaseDns;
    this._writabilityMode = config.writabilityMode;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_attribute_name_exceptions - computed: true, optional: true, required: false
  private _allowAttributeNameExceptions?: boolean | cdktf.IResolvable; 
  public get allowAttributeNameExceptions() {
    return this.getBooleanAttribute('allow_attribute_name_exceptions');
  }
  public set allowAttributeNameExceptions(value: boolean | cdktf.IResolvable) {
    this._allowAttributeNameExceptions = value;
  }
  public resetAllowAttributeNameExceptions() {
    this._allowAttributeNameExceptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowAttributeNameExceptionsInput() {
    return this._allowAttributeNameExceptions;
  }

  // allow_inherited_replication_of_subordinate_backends - computed: true, optional: true, required: false
  private _allowInheritedReplicationOfSubordinateBackends?: boolean | cdktf.IResolvable; 
  public get allowInheritedReplicationOfSubordinateBackends() {
    return this.getBooleanAttribute('allow_inherited_replication_of_subordinate_backends');
  }
  public set allowInheritedReplicationOfSubordinateBackends(value: boolean | cdktf.IResolvable) {
    this._allowInheritedReplicationOfSubordinateBackends = value;
  }
  public resetAllowInheritedReplicationOfSubordinateBackends() {
    this._allowInheritedReplicationOfSubordinateBackends = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowInheritedReplicationOfSubordinateBackendsInput() {
    return this._allowInheritedReplicationOfSubordinateBackends;
  }

  // allow_insecure_local_jmx_connections - computed: true, optional: true, required: false
  private _allowInsecureLocalJmxConnections?: boolean | cdktf.IResolvable; 
  public get allowInsecureLocalJmxConnections() {
    return this.getBooleanAttribute('allow_insecure_local_jmx_connections');
  }
  public set allowInsecureLocalJmxConnections(value: boolean | cdktf.IResolvable) {
    this._allowInsecureLocalJmxConnections = value;
  }
  public resetAllowInsecureLocalJmxConnections() {
    this._allowInsecureLocalJmxConnections = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowInsecureLocalJmxConnectionsInput() {
    return this._allowInsecureLocalJmxConnections;
  }

  // allowed_insecure_request_criteria - computed: true, optional: true, required: false
  private _allowedInsecureRequestCriteria?: string; 
  public get allowedInsecureRequestCriteria() {
    return this.getStringAttribute('allowed_insecure_request_criteria');
  }
  public set allowedInsecureRequestCriteria(value: string) {
    this._allowedInsecureRequestCriteria = value;
  }
  public resetAllowedInsecureRequestCriteria() {
    this._allowedInsecureRequestCriteria = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedInsecureRequestCriteriaInput() {
    return this._allowedInsecureRequestCriteria;
  }

  // allowed_insecure_tls_protocol - computed: true, optional: true, required: false
  private _allowedInsecureTlsProtocol?: string[]; 
  public get allowedInsecureTlsProtocol() {
    return cdktf.Fn.tolist(this.getListAttribute('allowed_insecure_tls_protocol'));
  }
  public set allowedInsecureTlsProtocol(value: string[]) {
    this._allowedInsecureTlsProtocol = value;
  }
  public resetAllowedInsecureTlsProtocol() {
    this._allowedInsecureTlsProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedInsecureTlsProtocolInput() {
    return this._allowedInsecureTlsProtocol;
  }

  // allowed_task - computed: true, optional: true, required: false
  private _allowedTask?: string[]; 
  public get allowedTask() {
    return cdktf.Fn.tolist(this.getListAttribute('allowed_task'));
  }
  public set allowedTask(value: string[]) {
    this._allowedTask = value;
  }
  public resetAllowedTask() {
    this._allowedTask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedTaskInput() {
    return this._allowedTask;
  }

  // allowed_unauthenticated_request_criteria - computed: true, optional: true, required: false
  private _allowedUnauthenticatedRequestCriteria?: string; 
  public get allowedUnauthenticatedRequestCriteria() {
    return this.getStringAttribute('allowed_unauthenticated_request_criteria');
  }
  public set allowedUnauthenticatedRequestCriteria(value: string) {
    this._allowedUnauthenticatedRequestCriteria = value;
  }
  public resetAllowedUnauthenticatedRequestCriteria() {
    this._allowedUnauthenticatedRequestCriteria = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedUnauthenticatedRequestCriteriaInput() {
    return this._allowedUnauthenticatedRequestCriteria;
  }

  // attributes_modifiable_with_ignore_no_user_modification_request_control - computed: true, optional: true, required: false
  private _attributesModifiableWithIgnoreNoUserModificationRequestControl?: string[]; 
  public get attributesModifiableWithIgnoreNoUserModificationRequestControl() {
    return cdktf.Fn.tolist(this.getListAttribute('attributes_modifiable_with_ignore_no_user_modification_request_control'));
  }
  public set attributesModifiableWithIgnoreNoUserModificationRequestControl(value: string[]) {
    this._attributesModifiableWithIgnoreNoUserModificationRequestControl = value;
  }
  public resetAttributesModifiableWithIgnoreNoUserModificationRequestControl() {
    this._attributesModifiableWithIgnoreNoUserModificationRequestControl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributesModifiableWithIgnoreNoUserModificationRequestControlInput() {
    return this._attributesModifiableWithIgnoreNoUserModificationRequestControl;
  }

  // auto_name_with_entry_uuid_connection_criteria - computed: true, optional: true, required: false
  private _autoNameWithEntryUuidConnectionCriteria?: string; 
  public get autoNameWithEntryUuidConnectionCriteria() {
    return this.getStringAttribute('auto_name_with_entry_uuid_connection_criteria');
  }
  public set autoNameWithEntryUuidConnectionCriteria(value: string) {
    this._autoNameWithEntryUuidConnectionCriteria = value;
  }
  public resetAutoNameWithEntryUuidConnectionCriteria() {
    this._autoNameWithEntryUuidConnectionCriteria = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoNameWithEntryUuidConnectionCriteriaInput() {
    return this._autoNameWithEntryUuidConnectionCriteria;
  }

  // auto_name_with_entry_uuid_request_criteria - computed: true, optional: true, required: false
  private _autoNameWithEntryUuidRequestCriteria?: string; 
  public get autoNameWithEntryUuidRequestCriteria() {
    return this.getStringAttribute('auto_name_with_entry_uuid_request_criteria');
  }
  public set autoNameWithEntryUuidRequestCriteria(value: string) {
    this._autoNameWithEntryUuidRequestCriteria = value;
  }
  public resetAutoNameWithEntryUuidRequestCriteria() {
    this._autoNameWithEntryUuidRequestCriteria = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoNameWithEntryUuidRequestCriteriaInput() {
    return this._autoNameWithEntryUuidRequestCriteria;
  }

  // automatically_compress_encrypted_ldif_exports - computed: true, optional: true, required: false
  private _automaticallyCompressEncryptedLdifExports?: boolean | cdktf.IResolvable; 
  public get automaticallyCompressEncryptedLdifExports() {
    return this.getBooleanAttribute('automatically_compress_encrypted_ldif_exports');
  }
  public set automaticallyCompressEncryptedLdifExports(value: boolean | cdktf.IResolvable) {
    this._automaticallyCompressEncryptedLdifExports = value;
  }
  public resetAutomaticallyCompressEncryptedLdifExports() {
    this._automaticallyCompressEncryptedLdifExports = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get automaticallyCompressEncryptedLdifExportsInput() {
    return this._automaticallyCompressEncryptedLdifExports;
  }

  // background_thread_for_each_persistent_search - computed: true, optional: true, required: false
  private _backgroundThreadForEachPersistentSearch?: boolean | cdktf.IResolvable; 
  public get backgroundThreadForEachPersistentSearch() {
    return this.getBooleanAttribute('background_thread_for_each_persistent_search');
  }
  public set backgroundThreadForEachPersistentSearch(value: boolean | cdktf.IResolvable) {
    this._backgroundThreadForEachPersistentSearch = value;
  }
  public resetBackgroundThreadForEachPersistentSearch() {
    this._backgroundThreadForEachPersistentSearch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backgroundThreadForEachPersistentSearchInput() {
    return this._backgroundThreadForEachPersistentSearch;
  }

  // backup_encryption_settings_definition_id - computed: true, optional: true, required: false
  private _backupEncryptionSettingsDefinitionId?: string; 
  public get backupEncryptionSettingsDefinitionId() {
    return this.getStringAttribute('backup_encryption_settings_definition_id');
  }
  public set backupEncryptionSettingsDefinitionId(value: string) {
    this._backupEncryptionSettingsDefinitionId = value;
  }
  public resetBackupEncryptionSettingsDefinitionId() {
    this._backupEncryptionSettingsDefinitionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupEncryptionSettingsDefinitionIdInput() {
    return this._backupEncryptionSettingsDefinitionId;
  }

  // bind_with_dn_requires_password - computed: true, optional: true, required: false
  private _bindWithDnRequiresPassword?: boolean | cdktf.IResolvable; 
  public get bindWithDnRequiresPassword() {
    return this.getBooleanAttribute('bind_with_dn_requires_password');
  }
  public set bindWithDnRequiresPassword(value: boolean | cdktf.IResolvable) {
    this._bindWithDnRequiresPassword = value;
  }
  public resetBindWithDnRequiresPassword() {
    this._bindWithDnRequiresPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bindWithDnRequiresPasswordInput() {
    return this._bindWithDnRequiresPassword;
  }

  // configuration_server_group - computed: true, optional: true, required: false
  private _configurationServerGroup?: string; 
  public get configurationServerGroup() {
    return this.getStringAttribute('configuration_server_group');
  }
  public set configurationServerGroup(value: string) {
    this._configurationServerGroup = value;
  }
  public resetConfigurationServerGroup() {
    this._configurationServerGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationServerGroupInput() {
    return this._configurationServerGroup;
  }

  // database_on_virtualized_or_network_storage - computed: true, optional: true, required: false
  private _databaseOnVirtualizedOrNetworkStorage?: boolean | cdktf.IResolvable; 
  public get databaseOnVirtualizedOrNetworkStorage() {
    return this.getBooleanAttribute('database_on_virtualized_or_network_storage');
  }
  public set databaseOnVirtualizedOrNetworkStorage(value: boolean | cdktf.IResolvable) {
    this._databaseOnVirtualizedOrNetworkStorage = value;
  }
  public resetDatabaseOnVirtualizedOrNetworkStorage() {
    this._databaseOnVirtualizedOrNetworkStorage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseOnVirtualizedOrNetworkStorageInput() {
    return this._databaseOnVirtualizedOrNetworkStorage;
  }

  // default_internal_operation_client_connection_policy - computed: true, optional: true, required: false
  private _defaultInternalOperationClientConnectionPolicy?: string; 
  public get defaultInternalOperationClientConnectionPolicy() {
    return this.getStringAttribute('default_internal_operation_client_connection_policy');
  }
  public set defaultInternalOperationClientConnectionPolicy(value: string) {
    this._defaultInternalOperationClientConnectionPolicy = value;
  }
  public resetDefaultInternalOperationClientConnectionPolicy() {
    this._defaultInternalOperationClientConnectionPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInternalOperationClientConnectionPolicyInput() {
    return this._defaultInternalOperationClientConnectionPolicy;
  }

  // default_password_policy - computed: true, optional: true, required: false
  private _defaultPasswordPolicy?: string; 
  public get defaultPasswordPolicy() {
    return this.getStringAttribute('default_password_policy');
  }
  public set defaultPasswordPolicy(value: string) {
    this._defaultPasswordPolicy = value;
  }
  public resetDefaultPasswordPolicy() {
    this._defaultPasswordPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultPasswordPolicyInput() {
    return this._defaultPasswordPolicy;
  }

  // disabled_privilege - computed: true, optional: true, required: false
  private _disabledPrivilege?: string[]; 
  public get disabledPrivilege() {
    return cdktf.Fn.tolist(this.getListAttribute('disabled_privilege'));
  }
  public set disabledPrivilege(value: string[]) {
    this._disabledPrivilege = value;
  }
  public resetDisabledPrivilege() {
    this._disabledPrivilege = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledPrivilegeInput() {
    return this._disabledPrivilege;
  }

  // duplicate_alert_limit - computed: true, optional: true, required: false
  private _duplicateAlertLimit?: number; 
  public get duplicateAlertLimit() {
    return this.getNumberAttribute('duplicate_alert_limit');
  }
  public set duplicateAlertLimit(value: number) {
    this._duplicateAlertLimit = value;
  }
  public resetDuplicateAlertLimit() {
    this._duplicateAlertLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get duplicateAlertLimitInput() {
    return this._duplicateAlertLimit;
  }

  // duplicate_alert_time_limit - computed: true, optional: true, required: false
  private _duplicateAlertTimeLimit?: string; 
  public get duplicateAlertTimeLimit() {
    return this.getStringAttribute('duplicate_alert_time_limit');
  }
  public set duplicateAlertTimeLimit(value: string) {
    this._duplicateAlertTimeLimit = value;
  }
  public resetDuplicateAlertTimeLimit() {
    this._duplicateAlertTimeLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get duplicateAlertTimeLimitInput() {
    return this._duplicateAlertTimeLimit;
  }

  // duplicate_error_log_limit - computed: true, optional: true, required: false
  private _duplicateErrorLogLimit?: number; 
  public get duplicateErrorLogLimit() {
    return this.getNumberAttribute('duplicate_error_log_limit');
  }
  public set duplicateErrorLogLimit(value: number) {
    this._duplicateErrorLogLimit = value;
  }
  public resetDuplicateErrorLogLimit() {
    this._duplicateErrorLogLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get duplicateErrorLogLimitInput() {
    return this._duplicateErrorLogLimit;
  }

  // duplicate_error_log_time_limit - computed: true, optional: true, required: false
  private _duplicateErrorLogTimeLimit?: string; 
  public get duplicateErrorLogTimeLimit() {
    return this.getStringAttribute('duplicate_error_log_time_limit');
  }
  public set duplicateErrorLogTimeLimit(value: string) {
    this._duplicateErrorLogTimeLimit = value;
  }
  public resetDuplicateErrorLogTimeLimit() {
    this._duplicateErrorLogTimeLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get duplicateErrorLogTimeLimitInput() {
    return this._duplicateErrorLogTimeLimit;
  }

  // enable_sub_operation_timer - computed: true, optional: true, required: false
  private _enableSubOperationTimer?: boolean | cdktf.IResolvable; 
  public get enableSubOperationTimer() {
    return this.getBooleanAttribute('enable_sub_operation_timer');
  }
  public set enableSubOperationTimer(value: boolean | cdktf.IResolvable) {
    this._enableSubOperationTimer = value;
  }
  public resetEnableSubOperationTimer() {
    this._enableSubOperationTimer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableSubOperationTimerInput() {
    return this._enableSubOperationTimer;
  }

  // encrypt_backups_by_default - computed: true, optional: true, required: false
  private _encryptBackupsByDefault?: boolean | cdktf.IResolvable; 
  public get encryptBackupsByDefault() {
    return this.getBooleanAttribute('encrypt_backups_by_default');
  }
  public set encryptBackupsByDefault(value: boolean | cdktf.IResolvable) {
    this._encryptBackupsByDefault = value;
  }
  public resetEncryptBackupsByDefault() {
    this._encryptBackupsByDefault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptBackupsByDefaultInput() {
    return this._encryptBackupsByDefault;
  }

  // encrypt_data - computed: true, optional: true, required: false
  private _encryptData?: boolean | cdktf.IResolvable; 
  public get encryptData() {
    return this.getBooleanAttribute('encrypt_data');
  }
  public set encryptData(value: boolean | cdktf.IResolvable) {
    this._encryptData = value;
  }
  public resetEncryptData() {
    this._encryptData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptDataInput() {
    return this._encryptData;
  }

  // encrypt_ldif_exports_by_default - computed: true, optional: true, required: false
  private _encryptLdifExportsByDefault?: boolean | cdktf.IResolvable; 
  public get encryptLdifExportsByDefault() {
    return this.getBooleanAttribute('encrypt_ldif_exports_by_default');
  }
  public set encryptLdifExportsByDefault(value: boolean | cdktf.IResolvable) {
    this._encryptLdifExportsByDefault = value;
  }
  public resetEncryptLdifExportsByDefault() {
    this._encryptLdifExportsByDefault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptLdifExportsByDefaultInput() {
    return this._encryptLdifExportsByDefault;
  }

  // encryption_settings_cipher_stream_provider - computed: true, optional: true, required: false
  private _encryptionSettingsCipherStreamProvider?: string; 
  public get encryptionSettingsCipherStreamProvider() {
    return this.getStringAttribute('encryption_settings_cipher_stream_provider');
  }
  public set encryptionSettingsCipherStreamProvider(value: string) {
    this._encryptionSettingsCipherStreamProvider = value;
  }
  public resetEncryptionSettingsCipherStreamProvider() {
    this._encryptionSettingsCipherStreamProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionSettingsCipherStreamProviderInput() {
    return this._encryptionSettingsCipherStreamProvider;
  }

  // exit_on_jvm_error - computed: true, optional: true, required: false
  private _exitOnJvmError?: boolean | cdktf.IResolvable; 
  public get exitOnJvmError() {
    return this.getBooleanAttribute('exit_on_jvm_error');
  }
  public set exitOnJvmError(value: boolean | cdktf.IResolvable) {
    this._exitOnJvmError = value;
  }
  public resetExitOnJvmError() {
    this._exitOnJvmError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exitOnJvmErrorInput() {
    return this._exitOnJvmError;
  }

  // force_as_master_for_mirrored_data - computed: true, optional: true, required: false
  private _forceAsMasterForMirroredData?: boolean | cdktf.IResolvable; 
  public get forceAsMasterForMirroredData() {
    return this.getBooleanAttribute('force_as_master_for_mirrored_data');
  }
  public set forceAsMasterForMirroredData(value: boolean | cdktf.IResolvable) {
    this._forceAsMasterForMirroredData = value;
  }
  public resetForceAsMasterForMirroredData() {
    this._forceAsMasterForMirroredData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceAsMasterForMirroredDataInput() {
    return this._forceAsMasterForMirroredData;
  }

  // forced_gc_prime_duration - computed: true, optional: true, required: false
  private _forcedGcPrimeDuration?: string; 
  public get forcedGcPrimeDuration() {
    return this.getStringAttribute('forced_gc_prime_duration');
  }
  public set forcedGcPrimeDuration(value: string) {
    this._forcedGcPrimeDuration = value;
  }
  public resetForcedGcPrimeDuration() {
    this._forcedGcPrimeDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forcedGcPrimeDurationInput() {
    return this._forcedGcPrimeDuration;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // idle_time_limit - computed: true, optional: true, required: false
  private _idleTimeLimit?: string; 
  public get idleTimeLimit() {
    return this.getStringAttribute('idle_time_limit');
  }
  public set idleTimeLimit(value: string) {
    this._idleTimeLimit = value;
  }
  public resetIdleTimeLimit() {
    this._idleTimeLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idleTimeLimitInput() {
    return this._idleTimeLimit;
  }

  // instance_name - computed: true, optional: true, required: false
  private _instanceName?: string; 
  public get instanceName() {
    return this.getStringAttribute('instance_name');
  }
  public set instanceName(value: string) {
    this._instanceName = value;
  }
  public resetInstanceName() {
    this._instanceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceNameInput() {
    return this._instanceName;
  }

  // invalid_attribute_syntax_behavior - computed: true, optional: true, required: false
  private _invalidAttributeSyntaxBehavior?: string; 
  public get invalidAttributeSyntaxBehavior() {
    return this.getStringAttribute('invalid_attribute_syntax_behavior');
  }
  public set invalidAttributeSyntaxBehavior(value: string) {
    this._invalidAttributeSyntaxBehavior = value;
  }
  public resetInvalidAttributeSyntaxBehavior() {
    this._invalidAttributeSyntaxBehavior = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invalidAttributeSyntaxBehaviorInput() {
    return this._invalidAttributeSyntaxBehavior;
  }

  // jmx_use_legacy_mbean_names - computed: true, optional: true, required: false
  private _jmxUseLegacyMbeanNames?: boolean | cdktf.IResolvable; 
  public get jmxUseLegacyMbeanNames() {
    return this.getBooleanAttribute('jmx_use_legacy_mbean_names');
  }
  public set jmxUseLegacyMbeanNames(value: boolean | cdktf.IResolvable) {
    this._jmxUseLegacyMbeanNames = value;
  }
  public resetJmxUseLegacyMbeanNames() {
    this._jmxUseLegacyMbeanNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jmxUseLegacyMbeanNamesInput() {
    return this._jmxUseLegacyMbeanNames;
  }

  // jmx_value_behavior - computed: true, optional: true, required: false
  private _jmxValueBehavior?: string; 
  public get jmxValueBehavior() {
    return this.getStringAttribute('jmx_value_behavior');
  }
  public set jmxValueBehavior(value: string) {
    this._jmxValueBehavior = value;
  }
  public resetJmxValueBehavior() {
    this._jmxValueBehavior = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jmxValueBehaviorInput() {
    return this._jmxValueBehavior;
  }

  // ldap_join_size_limit - computed: true, optional: true, required: false
  private _ldapJoinSizeLimit?: number; 
  public get ldapJoinSizeLimit() {
    return this.getNumberAttribute('ldap_join_size_limit');
  }
  public set ldapJoinSizeLimit(value: number) {
    this._ldapJoinSizeLimit = value;
  }
  public resetLdapJoinSizeLimit() {
    this._ldapJoinSizeLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ldapJoinSizeLimitInput() {
    return this._ldapJoinSizeLimit;
  }

  // ldif_export_encryption_settings_definition_id - computed: true, optional: true, required: false
  private _ldifExportEncryptionSettingsDefinitionId?: string; 
  public get ldifExportEncryptionSettingsDefinitionId() {
    return this.getStringAttribute('ldif_export_encryption_settings_definition_id');
  }
  public set ldifExportEncryptionSettingsDefinitionId(value: string) {
    this._ldifExportEncryptionSettingsDefinitionId = value;
  }
  public resetLdifExportEncryptionSettingsDefinitionId() {
    this._ldifExportEncryptionSettingsDefinitionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ldifExportEncryptionSettingsDefinitionIdInput() {
    return this._ldifExportEncryptionSettingsDefinitionId;
  }

  // location - computed: true, optional: true, required: false
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  public resetLocation() {
    this._location = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // lookthrough_limit - computed: true, optional: true, required: false
  private _lookthroughLimit?: number; 
  public get lookthroughLimit() {
    return this.getNumberAttribute('lookthrough_limit');
  }
  public set lookthroughLimit(value: number) {
    this._lookthroughLimit = value;
  }
  public resetLookthroughLimit() {
    this._lookthroughLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lookthroughLimitInput() {
    return this._lookthroughLimit;
  }

  // max_smtp_connection_age - computed: true, optional: true, required: false
  private _maxSmtpConnectionAge?: string; 
  public get maxSmtpConnectionAge() {
    return this.getStringAttribute('max_smtp_connection_age');
  }
  public set maxSmtpConnectionAge(value: string) {
    this._maxSmtpConnectionAge = value;
  }
  public resetMaxSmtpConnectionAge() {
    this._maxSmtpConnectionAge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxSmtpConnectionAgeInput() {
    return this._maxSmtpConnectionAge;
  }

  // max_smtp_connection_count - computed: true, optional: true, required: false
  private _maxSmtpConnectionCount?: number; 
  public get maxSmtpConnectionCount() {
    return this.getNumberAttribute('max_smtp_connection_count');
  }
  public set maxSmtpConnectionCount(value: number) {
    this._maxSmtpConnectionCount = value;
  }
  public resetMaxSmtpConnectionCount() {
    this._maxSmtpConnectionCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxSmtpConnectionCountInput() {
    return this._maxSmtpConnectionCount;
  }

  // maximum_attributes_per_add_request - computed: true, optional: true, required: false
  private _maximumAttributesPerAddRequest?: number; 
  public get maximumAttributesPerAddRequest() {
    return this.getNumberAttribute('maximum_attributes_per_add_request');
  }
  public set maximumAttributesPerAddRequest(value: number) {
    this._maximumAttributesPerAddRequest = value;
  }
  public resetMaximumAttributesPerAddRequest() {
    this._maximumAttributesPerAddRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumAttributesPerAddRequestInput() {
    return this._maximumAttributesPerAddRequest;
  }

  // maximum_concurrent_connections - computed: true, optional: true, required: false
  private _maximumConcurrentConnections?: number; 
  public get maximumConcurrentConnections() {
    return this.getNumberAttribute('maximum_concurrent_connections');
  }
  public set maximumConcurrentConnections(value: number) {
    this._maximumConcurrentConnections = value;
  }
  public resetMaximumConcurrentConnections() {
    this._maximumConcurrentConnections = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumConcurrentConnectionsInput() {
    return this._maximumConcurrentConnections;
  }

  // maximum_concurrent_connections_per_bind_dn - computed: true, optional: true, required: false
  private _maximumConcurrentConnectionsPerBindDn?: number; 
  public get maximumConcurrentConnectionsPerBindDn() {
    return this.getNumberAttribute('maximum_concurrent_connections_per_bind_dn');
  }
  public set maximumConcurrentConnectionsPerBindDn(value: number) {
    this._maximumConcurrentConnectionsPerBindDn = value;
  }
  public resetMaximumConcurrentConnectionsPerBindDn() {
    this._maximumConcurrentConnectionsPerBindDn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumConcurrentConnectionsPerBindDnInput() {
    return this._maximumConcurrentConnectionsPerBindDn;
  }

  // maximum_concurrent_connections_per_ip_address - computed: true, optional: true, required: false
  private _maximumConcurrentConnectionsPerIpAddress?: number; 
  public get maximumConcurrentConnectionsPerIpAddress() {
    return this.getNumberAttribute('maximum_concurrent_connections_per_ip_address');
  }
  public set maximumConcurrentConnectionsPerIpAddress(value: number) {
    this._maximumConcurrentConnectionsPerIpAddress = value;
  }
  public resetMaximumConcurrentConnectionsPerIpAddress() {
    this._maximumConcurrentConnectionsPerIpAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumConcurrentConnectionsPerIpAddressInput() {
    return this._maximumConcurrentConnectionsPerIpAddress;
  }

  // maximum_concurrent_unindexed_searches - computed: true, optional: true, required: false
  private _maximumConcurrentUnindexedSearches?: number; 
  public get maximumConcurrentUnindexedSearches() {
    return this.getNumberAttribute('maximum_concurrent_unindexed_searches');
  }
  public set maximumConcurrentUnindexedSearches(value: number) {
    this._maximumConcurrentUnindexedSearches = value;
  }
  public resetMaximumConcurrentUnindexedSearches() {
    this._maximumConcurrentUnindexedSearches = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumConcurrentUnindexedSearchesInput() {
    return this._maximumConcurrentUnindexedSearches;
  }

  // maximum_modifications_per_modify_request - computed: true, optional: true, required: false
  private _maximumModificationsPerModifyRequest?: number; 
  public get maximumModificationsPerModifyRequest() {
    return this.getNumberAttribute('maximum_modifications_per_modify_request');
  }
  public set maximumModificationsPerModifyRequest(value: number) {
    this._maximumModificationsPerModifyRequest = value;
  }
  public resetMaximumModificationsPerModifyRequest() {
    this._maximumModificationsPerModifyRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumModificationsPerModifyRequestInput() {
    return this._maximumModificationsPerModifyRequest;
  }

  // maximum_server_out_log_file_count - computed: true, optional: true, required: false
  private _maximumServerOutLogFileCount?: number; 
  public get maximumServerOutLogFileCount() {
    return this.getNumberAttribute('maximum_server_out_log_file_count');
  }
  public set maximumServerOutLogFileCount(value: number) {
    this._maximumServerOutLogFileCount = value;
  }
  public resetMaximumServerOutLogFileCount() {
    this._maximumServerOutLogFileCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumServerOutLogFileCountInput() {
    return this._maximumServerOutLogFileCount;
  }

  // maximum_server_out_log_file_size - computed: true, optional: true, required: false
  private _maximumServerOutLogFileSize?: string; 
  public get maximumServerOutLogFileSize() {
    return this.getStringAttribute('maximum_server_out_log_file_size');
  }
  public set maximumServerOutLogFileSize(value: string) {
    this._maximumServerOutLogFileSize = value;
  }
  public resetMaximumServerOutLogFileSize() {
    this._maximumServerOutLogFileSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumServerOutLogFileSizeInput() {
    return this._maximumServerOutLogFileSize;
  }

  // maximum_shutdown_time - computed: true, optional: true, required: false
  private _maximumShutdownTime?: string; 
  public get maximumShutdownTime() {
    return this.getStringAttribute('maximum_shutdown_time');
  }
  public set maximumShutdownTime(value: string) {
    this._maximumShutdownTime = value;
  }
  public resetMaximumShutdownTime() {
    this._maximumShutdownTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumShutdownTimeInput() {
    return this._maximumShutdownTime;
  }

  // maximum_user_data_password_policies_to_cache - computed: true, optional: true, required: false
  private _maximumUserDataPasswordPoliciesToCache?: number; 
  public get maximumUserDataPasswordPoliciesToCache() {
    return this.getNumberAttribute('maximum_user_data_password_policies_to_cache');
  }
  public set maximumUserDataPasswordPoliciesToCache(value: number) {
    this._maximumUserDataPasswordPoliciesToCache = value;
  }
  public resetMaximumUserDataPasswordPoliciesToCache() {
    this._maximumUserDataPasswordPoliciesToCache = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumUserDataPasswordPoliciesToCacheInput() {
    return this._maximumUserDataPasswordPoliciesToCache;
  }

  // network_address_cache_ttl - computed: true, optional: true, required: false
  private _networkAddressCacheTtl?: string; 
  public get networkAddressCacheTtl() {
    return this.getStringAttribute('network_address_cache_ttl');
  }
  public set networkAddressCacheTtl(value: string) {
    this._networkAddressCacheTtl = value;
  }
  public resetNetworkAddressCacheTtl() {
    this._networkAddressCacheTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkAddressCacheTtlInput() {
    return this._networkAddressCacheTtl;
  }

  // network_address_outage_cache_enabled - computed: true, optional: true, required: false
  private _networkAddressOutageCacheEnabled?: boolean | cdktf.IResolvable; 
  public get networkAddressOutageCacheEnabled() {
    return this.getBooleanAttribute('network_address_outage_cache_enabled');
  }
  public set networkAddressOutageCacheEnabled(value: boolean | cdktf.IResolvable) {
    this._networkAddressOutageCacheEnabled = value;
  }
  public resetNetworkAddressOutageCacheEnabled() {
    this._networkAddressOutageCacheEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkAddressOutageCacheEnabledInput() {
    return this._networkAddressOutageCacheEnabled;
  }

  // notifications - computed: true, optional: false, required: false
  public get notifications() {
    return cdktf.Fn.tolist(this.getListAttribute('notifications'));
  }

  // notify_abandoned_operations - computed: true, optional: true, required: false
  private _notifyAbandonedOperations?: boolean | cdktf.IResolvable; 
  public get notifyAbandonedOperations() {
    return this.getBooleanAttribute('notify_abandoned_operations');
  }
  public set notifyAbandonedOperations(value: boolean | cdktf.IResolvable) {
    this._notifyAbandonedOperations = value;
  }
  public resetNotifyAbandonedOperations() {
    this._notifyAbandonedOperations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notifyAbandonedOperationsInput() {
    return this._notifyAbandonedOperations;
  }

  // permit_syntax_violations_for_attribute - computed: true, optional: true, required: false
  private _permitSyntaxViolationsForAttribute?: string[]; 
  public get permitSyntaxViolationsForAttribute() {
    return cdktf.Fn.tolist(this.getListAttribute('permit_syntax_violations_for_attribute'));
  }
  public set permitSyntaxViolationsForAttribute(value: string[]) {
    this._permitSyntaxViolationsForAttribute = value;
  }
  public resetPermitSyntaxViolationsForAttribute() {
    this._permitSyntaxViolationsForAttribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permitSyntaxViolationsForAttributeInput() {
    return this._permitSyntaxViolationsForAttribute;
  }

  // proxied_authorization_identity_mapper - computed: true, optional: true, required: false
  private _proxiedAuthorizationIdentityMapper?: string; 
  public get proxiedAuthorizationIdentityMapper() {
    return this.getStringAttribute('proxied_authorization_identity_mapper');
  }
  public set proxiedAuthorizationIdentityMapper(value: string) {
    this._proxiedAuthorizationIdentityMapper = value;
  }
  public resetProxiedAuthorizationIdentityMapper() {
    this._proxiedAuthorizationIdentityMapper = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxiedAuthorizationIdentityMapperInput() {
    return this._proxiedAuthorizationIdentityMapper;
  }

  // redact_sensitive_values_in_config_logs - computed: true, optional: true, required: false
  private _redactSensitiveValuesInConfigLogs?: boolean | cdktf.IResolvable; 
  public get redactSensitiveValuesInConfigLogs() {
    return this.getBooleanAttribute('redact_sensitive_values_in_config_logs');
  }
  public set redactSensitiveValuesInConfigLogs(value: boolean | cdktf.IResolvable) {
    this._redactSensitiveValuesInConfigLogs = value;
  }
  public resetRedactSensitiveValuesInConfigLogs() {
    this._redactSensitiveValuesInConfigLogs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redactSensitiveValuesInConfigLogsInput() {
    return this._redactSensitiveValuesInConfigLogs;
  }

  // reject_insecure_requests - computed: true, optional: true, required: false
  private _rejectInsecureRequests?: boolean | cdktf.IResolvable; 
  public get rejectInsecureRequests() {
    return this.getBooleanAttribute('reject_insecure_requests');
  }
  public set rejectInsecureRequests(value: boolean | cdktf.IResolvable) {
    this._rejectInsecureRequests = value;
  }
  public resetRejectInsecureRequests() {
    this._rejectInsecureRequests = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rejectInsecureRequestsInput() {
    return this._rejectInsecureRequests;
  }

  // reject_unauthenticated_requests - computed: true, optional: true, required: false
  private _rejectUnauthenticatedRequests?: boolean | cdktf.IResolvable; 
  public get rejectUnauthenticatedRequests() {
    return this.getBooleanAttribute('reject_unauthenticated_requests');
  }
  public set rejectUnauthenticatedRequests(value: boolean | cdktf.IResolvable) {
    this._rejectUnauthenticatedRequests = value;
  }
  public resetRejectUnauthenticatedRequests() {
    this._rejectUnauthenticatedRequests = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rejectUnauthenticatedRequestsInput() {
    return this._rejectUnauthenticatedRequests;
  }

  // replication_assurance_source_backlog_fast_start_threshold - computed: true, optional: true, required: false
  private _replicationAssuranceSourceBacklogFastStartThreshold?: number; 
  public get replicationAssuranceSourceBacklogFastStartThreshold() {
    return this.getNumberAttribute('replication_assurance_source_backlog_fast_start_threshold');
  }
  public set replicationAssuranceSourceBacklogFastStartThreshold(value: number) {
    this._replicationAssuranceSourceBacklogFastStartThreshold = value;
  }
  public resetReplicationAssuranceSourceBacklogFastStartThreshold() {
    this._replicationAssuranceSourceBacklogFastStartThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicationAssuranceSourceBacklogFastStartThresholdInput() {
    return this._replicationAssuranceSourceBacklogFastStartThreshold;
  }

  // replication_assurance_source_timeout_suspend_duration - computed: true, optional: true, required: false
  private _replicationAssuranceSourceTimeoutSuspendDuration?: string; 
  public get replicationAssuranceSourceTimeoutSuspendDuration() {
    return this.getStringAttribute('replication_assurance_source_timeout_suspend_duration');
  }
  public set replicationAssuranceSourceTimeoutSuspendDuration(value: string) {
    this._replicationAssuranceSourceTimeoutSuspendDuration = value;
  }
  public resetReplicationAssuranceSourceTimeoutSuspendDuration() {
    this._replicationAssuranceSourceTimeoutSuspendDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicationAssuranceSourceTimeoutSuspendDurationInput() {
    return this._replicationAssuranceSourceTimeoutSuspendDuration;
  }

  // replication_backlog_count_alert_threshold - computed: true, optional: true, required: false
  private _replicationBacklogCountAlertThreshold?: number; 
  public get replicationBacklogCountAlertThreshold() {
    return this.getNumberAttribute('replication_backlog_count_alert_threshold');
  }
  public set replicationBacklogCountAlertThreshold(value: number) {
    this._replicationBacklogCountAlertThreshold = value;
  }
  public resetReplicationBacklogCountAlertThreshold() {
    this._replicationBacklogCountAlertThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicationBacklogCountAlertThresholdInput() {
    return this._replicationBacklogCountAlertThreshold;
  }

  // replication_backlog_duration_alert_threshold - computed: true, optional: true, required: false
  private _replicationBacklogDurationAlertThreshold?: string; 
  public get replicationBacklogDurationAlertThreshold() {
    return this.getStringAttribute('replication_backlog_duration_alert_threshold');
  }
  public set replicationBacklogDurationAlertThreshold(value: string) {
    this._replicationBacklogDurationAlertThreshold = value;
  }
  public resetReplicationBacklogDurationAlertThreshold() {
    this._replicationBacklogDurationAlertThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicationBacklogDurationAlertThresholdInput() {
    return this._replicationBacklogDurationAlertThreshold;
  }

  // replication_history_limit - computed: true, optional: true, required: false
  private _replicationHistoryLimit?: number; 
  public get replicationHistoryLimit() {
    return this.getNumberAttribute('replication_history_limit');
  }
  public set replicationHistoryLimit(value: number) {
    this._replicationHistoryLimit = value;
  }
  public resetReplicationHistoryLimit() {
    this._replicationHistoryLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicationHistoryLimitInput() {
    return this._replicationHistoryLimit;
  }

  // replication_purge_obsolete_replicas - computed: true, optional: true, required: false
  private _replicationPurgeObsoleteReplicas?: boolean | cdktf.IResolvable; 
  public get replicationPurgeObsoleteReplicas() {
    return this.getBooleanAttribute('replication_purge_obsolete_replicas');
  }
  public set replicationPurgeObsoleteReplicas(value: boolean | cdktf.IResolvable) {
    this._replicationPurgeObsoleteReplicas = value;
  }
  public resetReplicationPurgeObsoleteReplicas() {
    this._replicationPurgeObsoleteReplicas = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicationPurgeObsoleteReplicasInput() {
    return this._replicationPurgeObsoleteReplicas;
  }

  // replication_set_name - computed: true, optional: true, required: false
  private _replicationSetName?: string; 
  public get replicationSetName() {
    return this.getStringAttribute('replication_set_name');
  }
  public set replicationSetName(value: string) {
    this._replicationSetName = value;
  }
  public resetReplicationSetName() {
    this._replicationSetName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicationSetNameInput() {
    return this._replicationSetName;
  }

  // required_actions - computed: true, optional: false, required: false
  private _requiredActions = new DefaultGlobalConfigurationRequiredActionsList(this, "required_actions", true);
  public get requiredActions() {
    return this._requiredActions;
  }

  // result_code_map - computed: true, optional: true, required: false
  private _resultCodeMap?: string; 
  public get resultCodeMap() {
    return this.getStringAttribute('result_code_map');
  }
  public set resultCodeMap(value: string) {
    this._resultCodeMap = value;
  }
  public resetResultCodeMap() {
    this._resultCodeMap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resultCodeMapInput() {
    return this._resultCodeMap;
  }

  // return_bind_error_messages - computed: true, optional: true, required: false
  private _returnBindErrorMessages?: boolean | cdktf.IResolvable; 
  public get returnBindErrorMessages() {
    return this.getBooleanAttribute('return_bind_error_messages');
  }
  public set returnBindErrorMessages(value: boolean | cdktf.IResolvable) {
    this._returnBindErrorMessages = value;
  }
  public resetReturnBindErrorMessages() {
    this._returnBindErrorMessages = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get returnBindErrorMessagesInput() {
    return this._returnBindErrorMessages;
  }

  // sensitive_attribute - computed: true, optional: true, required: false
  private _sensitiveAttribute?: string[]; 
  public get sensitiveAttribute() {
    return cdktf.Fn.tolist(this.getListAttribute('sensitive_attribute'));
  }
  public set sensitiveAttribute(value: string[]) {
    this._sensitiveAttribute = value;
  }
  public resetSensitiveAttribute() {
    this._sensitiveAttribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sensitiveAttributeInput() {
    return this._sensitiveAttribute;
  }

  // server_error_result_code - computed: true, optional: true, required: false
  private _serverErrorResultCode?: number; 
  public get serverErrorResultCode() {
    return this.getNumberAttribute('server_error_result_code');
  }
  public set serverErrorResultCode(value: number) {
    this._serverErrorResultCode = value;
  }
  public resetServerErrorResultCode() {
    this._serverErrorResultCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverErrorResultCodeInput() {
    return this._serverErrorResultCode;
  }

  // shared_local_db_backend_database_cache_percent - computed: true, optional: true, required: false
  private _sharedLocalDbBackendDatabaseCachePercent?: number; 
  public get sharedLocalDbBackendDatabaseCachePercent() {
    return this.getNumberAttribute('shared_local_db_backend_database_cache_percent');
  }
  public set sharedLocalDbBackendDatabaseCachePercent(value: number) {
    this._sharedLocalDbBackendDatabaseCachePercent = value;
  }
  public resetSharedLocalDbBackendDatabaseCachePercent() {
    this._sharedLocalDbBackendDatabaseCachePercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedLocalDbBackendDatabaseCachePercentInput() {
    return this._sharedLocalDbBackendDatabaseCachePercent;
  }

  // single_structural_objectclass_behavior - computed: true, optional: true, required: false
  private _singleStructuralObjectclassBehavior?: string; 
  public get singleStructuralObjectclassBehavior() {
    return this.getStringAttribute('single_structural_objectclass_behavior');
  }
  public set singleStructuralObjectclassBehavior(value: string) {
    this._singleStructuralObjectclassBehavior = value;
  }
  public resetSingleStructuralObjectclassBehavior() {
    this._singleStructuralObjectclassBehavior = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get singleStructuralObjectclassBehaviorInput() {
    return this._singleStructuralObjectclassBehavior;
  }

  // size_limit - computed: true, optional: true, required: false
  private _sizeLimit?: number; 
  public get sizeLimit() {
    return this.getNumberAttribute('size_limit');
  }
  public set sizeLimit(value: number) {
    this._sizeLimit = value;
  }
  public resetSizeLimit() {
    this._sizeLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeLimitInput() {
    return this._sizeLimit;
  }

  // smtp_connection_health_check_interval - computed: true, optional: true, required: false
  private _smtpConnectionHealthCheckInterval?: string; 
  public get smtpConnectionHealthCheckInterval() {
    return this.getStringAttribute('smtp_connection_health_check_interval');
  }
  public set smtpConnectionHealthCheckInterval(value: string) {
    this._smtpConnectionHealthCheckInterval = value;
  }
  public resetSmtpConnectionHealthCheckInterval() {
    this._smtpConnectionHealthCheckInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smtpConnectionHealthCheckIntervalInput() {
    return this._smtpConnectionHealthCheckInterval;
  }

  // smtp_server - computed: true, optional: true, required: false
  private _smtpServer?: string[]; 
  public get smtpServer() {
    return cdktf.Fn.tolist(this.getListAttribute('smtp_server'));
  }
  public set smtpServer(value: string[]) {
    this._smtpServer = value;
  }
  public resetSmtpServer() {
    this._smtpServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smtpServerInput() {
    return this._smtpServer;
  }

  // soft_delete_policy - computed: true, optional: true, required: false
  private _softDeletePolicy?: string; 
  public get softDeletePolicy() {
    return this.getStringAttribute('soft_delete_policy');
  }
  public set softDeletePolicy(value: string) {
    this._softDeletePolicy = value;
  }
  public resetSoftDeletePolicy() {
    this._softDeletePolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get softDeletePolicyInput() {
    return this._softDeletePolicy;
  }

  // startup_error_logger_output_location - computed: true, optional: true, required: false
  private _startupErrorLoggerOutputLocation?: string; 
  public get startupErrorLoggerOutputLocation() {
    return this.getStringAttribute('startup_error_logger_output_location');
  }
  public set startupErrorLoggerOutputLocation(value: string) {
    this._startupErrorLoggerOutputLocation = value;
  }
  public resetStartupErrorLoggerOutputLocation() {
    this._startupErrorLoggerOutputLocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startupErrorLoggerOutputLocationInput() {
    return this._startupErrorLoggerOutputLocation;
  }

  // startup_min_replication_backlog_count - computed: true, optional: true, required: false
  private _startupMinReplicationBacklogCount?: number; 
  public get startupMinReplicationBacklogCount() {
    return this.getNumberAttribute('startup_min_replication_backlog_count');
  }
  public set startupMinReplicationBacklogCount(value: number) {
    this._startupMinReplicationBacklogCount = value;
  }
  public resetStartupMinReplicationBacklogCount() {
    this._startupMinReplicationBacklogCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startupMinReplicationBacklogCountInput() {
    return this._startupMinReplicationBacklogCount;
  }

  // subtree_accessibility_alert_time_limit - computed: true, optional: true, required: false
  private _subtreeAccessibilityAlertTimeLimit?: string; 
  public get subtreeAccessibilityAlertTimeLimit() {
    return this.getStringAttribute('subtree_accessibility_alert_time_limit');
  }
  public set subtreeAccessibilityAlertTimeLimit(value: string) {
    this._subtreeAccessibilityAlertTimeLimit = value;
  }
  public resetSubtreeAccessibilityAlertTimeLimit() {
    this._subtreeAccessibilityAlertTimeLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subtreeAccessibilityAlertTimeLimitInput() {
    return this._subtreeAccessibilityAlertTimeLimit;
  }

  // system_property - computed: true, optional: true, required: false
  private _systemProperty?: string[]; 
  public get systemProperty() {
    return cdktf.Fn.tolist(this.getListAttribute('system_property'));
  }
  public set systemProperty(value: string[]) {
    this._systemProperty = value;
  }
  public resetSystemProperty() {
    this._systemProperty = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemPropertyInput() {
    return this._systemProperty;
  }

  // time_limit - computed: true, optional: true, required: false
  private _timeLimit?: string; 
  public get timeLimit() {
    return this.getStringAttribute('time_limit');
  }
  public set timeLimit(value: string) {
    this._timeLimit = value;
  }
  public resetTimeLimit() {
    this._timeLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeLimitInput() {
    return this._timeLimit;
  }

  // tracked_application - computed: true, optional: true, required: false
  private _trackedApplication?: string[]; 
  public get trackedApplication() {
    return cdktf.Fn.tolist(this.getListAttribute('tracked_application'));
  }
  public set trackedApplication(value: string[]) {
    this._trackedApplication = value;
  }
  public resetTrackedApplication() {
    this._trackedApplication = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trackedApplicationInput() {
    return this._trackedApplication;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // unauthenticated_idle_time_limit - computed: true, optional: true, required: false
  private _unauthenticatedIdleTimeLimit?: string; 
  public get unauthenticatedIdleTimeLimit() {
    return this.getStringAttribute('unauthenticated_idle_time_limit');
  }
  public set unauthenticatedIdleTimeLimit(value: string) {
    this._unauthenticatedIdleTimeLimit = value;
  }
  public resetUnauthenticatedIdleTimeLimit() {
    this._unauthenticatedIdleTimeLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unauthenticatedIdleTimeLimitInput() {
    return this._unauthenticatedIdleTimeLimit;
  }

  // unauthenticated_lookthrough_limit - computed: true, optional: true, required: false
  private _unauthenticatedLookthroughLimit?: number; 
  public get unauthenticatedLookthroughLimit() {
    return this.getNumberAttribute('unauthenticated_lookthrough_limit');
  }
  public set unauthenticatedLookthroughLimit(value: number) {
    this._unauthenticatedLookthroughLimit = value;
  }
  public resetUnauthenticatedLookthroughLimit() {
    this._unauthenticatedLookthroughLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unauthenticatedLookthroughLimitInput() {
    return this._unauthenticatedLookthroughLimit;
  }

  // unauthenticated_size_limit - computed: true, optional: true, required: false
  private _unauthenticatedSizeLimit?: number; 
  public get unauthenticatedSizeLimit() {
    return this.getNumberAttribute('unauthenticated_size_limit');
  }
  public set unauthenticatedSizeLimit(value: number) {
    this._unauthenticatedSizeLimit = value;
  }
  public resetUnauthenticatedSizeLimit() {
    this._unauthenticatedSizeLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unauthenticatedSizeLimitInput() {
    return this._unauthenticatedSizeLimit;
  }

  // unauthenticated_time_limit - computed: true, optional: true, required: false
  private _unauthenticatedTimeLimit?: string; 
  public get unauthenticatedTimeLimit() {
    return this.getStringAttribute('unauthenticated_time_limit');
  }
  public set unauthenticatedTimeLimit(value: string) {
    this._unauthenticatedTimeLimit = value;
  }
  public resetUnauthenticatedTimeLimit() {
    this._unauthenticatedTimeLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unauthenticatedTimeLimitInput() {
    return this._unauthenticatedTimeLimit;
  }

  // unrecoverable_database_error_mode - computed: true, optional: true, required: false
  private _unrecoverableDatabaseErrorMode?: string; 
  public get unrecoverableDatabaseErrorMode() {
    return this.getStringAttribute('unrecoverable_database_error_mode');
  }
  public set unrecoverableDatabaseErrorMode(value: string) {
    this._unrecoverableDatabaseErrorMode = value;
  }
  public resetUnrecoverableDatabaseErrorMode() {
    this._unrecoverableDatabaseErrorMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unrecoverableDatabaseErrorModeInput() {
    return this._unrecoverableDatabaseErrorMode;
  }

  // use_shared_database_cache_across_all_local_db_backends - computed: true, optional: true, required: false
  private _useSharedDatabaseCacheAcrossAllLocalDbBackends?: boolean | cdktf.IResolvable; 
  public get useSharedDatabaseCacheAcrossAllLocalDbBackends() {
    return this.getBooleanAttribute('use_shared_database_cache_across_all_local_db_backends');
  }
  public set useSharedDatabaseCacheAcrossAllLocalDbBackends(value: boolean | cdktf.IResolvable) {
    this._useSharedDatabaseCacheAcrossAllLocalDbBackends = value;
  }
  public resetUseSharedDatabaseCacheAcrossAllLocalDbBackends() {
    this._useSharedDatabaseCacheAcrossAllLocalDbBackends = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useSharedDatabaseCacheAcrossAllLocalDbBackendsInput() {
    return this._useSharedDatabaseCacheAcrossAllLocalDbBackends;
  }

  // verify_entry_digests - computed: true, optional: true, required: false
  private _verifyEntryDigests?: boolean | cdktf.IResolvable; 
  public get verifyEntryDigests() {
    return this.getBooleanAttribute('verify_entry_digests');
  }
  public set verifyEntryDigests(value: boolean | cdktf.IResolvable) {
    this._verifyEntryDigests = value;
  }
  public resetVerifyEntryDigests() {
    this._verifyEntryDigests = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verifyEntryDigestsInput() {
    return this._verifyEntryDigests;
  }

  // warn_for_backends_with_multiple_base_dns - computed: true, optional: true, required: false
  private _warnForBackendsWithMultipleBaseDns?: boolean | cdktf.IResolvable; 
  public get warnForBackendsWithMultipleBaseDns() {
    return this.getBooleanAttribute('warn_for_backends_with_multiple_base_dns');
  }
  public set warnForBackendsWithMultipleBaseDns(value: boolean | cdktf.IResolvable) {
    this._warnForBackendsWithMultipleBaseDns = value;
  }
  public resetWarnForBackendsWithMultipleBaseDns() {
    this._warnForBackendsWithMultipleBaseDns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get warnForBackendsWithMultipleBaseDnsInput() {
    return this._warnForBackendsWithMultipleBaseDns;
  }

  // writability_mode - computed: true, optional: true, required: false
  private _writabilityMode?: string; 
  public get writabilityMode() {
    return this.getStringAttribute('writability_mode');
  }
  public set writabilityMode(value: string) {
    this._writabilityMode = value;
  }
  public resetWritabilityMode() {
    this._writabilityMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get writabilityModeInput() {
    return this._writabilityMode;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allow_attribute_name_exceptions: cdktf.booleanToTerraform(this._allowAttributeNameExceptions),
      allow_inherited_replication_of_subordinate_backends: cdktf.booleanToTerraform(this._allowInheritedReplicationOfSubordinateBackends),
      allow_insecure_local_jmx_connections: cdktf.booleanToTerraform(this._allowInsecureLocalJmxConnections),
      allowed_insecure_request_criteria: cdktf.stringToTerraform(this._allowedInsecureRequestCriteria),
      allowed_insecure_tls_protocol: cdktf.listMapper(cdktf.stringToTerraform, false)(this._allowedInsecureTlsProtocol),
      allowed_task: cdktf.listMapper(cdktf.stringToTerraform, false)(this._allowedTask),
      allowed_unauthenticated_request_criteria: cdktf.stringToTerraform(this._allowedUnauthenticatedRequestCriteria),
      attributes_modifiable_with_ignore_no_user_modification_request_control: cdktf.listMapper(cdktf.stringToTerraform, false)(this._attributesModifiableWithIgnoreNoUserModificationRequestControl),
      auto_name_with_entry_uuid_connection_criteria: cdktf.stringToTerraform(this._autoNameWithEntryUuidConnectionCriteria),
      auto_name_with_entry_uuid_request_criteria: cdktf.stringToTerraform(this._autoNameWithEntryUuidRequestCriteria),
      automatically_compress_encrypted_ldif_exports: cdktf.booleanToTerraform(this._automaticallyCompressEncryptedLdifExports),
      background_thread_for_each_persistent_search: cdktf.booleanToTerraform(this._backgroundThreadForEachPersistentSearch),
      backup_encryption_settings_definition_id: cdktf.stringToTerraform(this._backupEncryptionSettingsDefinitionId),
      bind_with_dn_requires_password: cdktf.booleanToTerraform(this._bindWithDnRequiresPassword),
      configuration_server_group: cdktf.stringToTerraform(this._configurationServerGroup),
      database_on_virtualized_or_network_storage: cdktf.booleanToTerraform(this._databaseOnVirtualizedOrNetworkStorage),
      default_internal_operation_client_connection_policy: cdktf.stringToTerraform(this._defaultInternalOperationClientConnectionPolicy),
      default_password_policy: cdktf.stringToTerraform(this._defaultPasswordPolicy),
      disabled_privilege: cdktf.listMapper(cdktf.stringToTerraform, false)(this._disabledPrivilege),
      duplicate_alert_limit: cdktf.numberToTerraform(this._duplicateAlertLimit),
      duplicate_alert_time_limit: cdktf.stringToTerraform(this._duplicateAlertTimeLimit),
      duplicate_error_log_limit: cdktf.numberToTerraform(this._duplicateErrorLogLimit),
      duplicate_error_log_time_limit: cdktf.stringToTerraform(this._duplicateErrorLogTimeLimit),
      enable_sub_operation_timer: cdktf.booleanToTerraform(this._enableSubOperationTimer),
      encrypt_backups_by_default: cdktf.booleanToTerraform(this._encryptBackupsByDefault),
      encrypt_data: cdktf.booleanToTerraform(this._encryptData),
      encrypt_ldif_exports_by_default: cdktf.booleanToTerraform(this._encryptLdifExportsByDefault),
      encryption_settings_cipher_stream_provider: cdktf.stringToTerraform(this._encryptionSettingsCipherStreamProvider),
      exit_on_jvm_error: cdktf.booleanToTerraform(this._exitOnJvmError),
      force_as_master_for_mirrored_data: cdktf.booleanToTerraform(this._forceAsMasterForMirroredData),
      forced_gc_prime_duration: cdktf.stringToTerraform(this._forcedGcPrimeDuration),
      idle_time_limit: cdktf.stringToTerraform(this._idleTimeLimit),
      instance_name: cdktf.stringToTerraform(this._instanceName),
      invalid_attribute_syntax_behavior: cdktf.stringToTerraform(this._invalidAttributeSyntaxBehavior),
      jmx_use_legacy_mbean_names: cdktf.booleanToTerraform(this._jmxUseLegacyMbeanNames),
      jmx_value_behavior: cdktf.stringToTerraform(this._jmxValueBehavior),
      ldap_join_size_limit: cdktf.numberToTerraform(this._ldapJoinSizeLimit),
      ldif_export_encryption_settings_definition_id: cdktf.stringToTerraform(this._ldifExportEncryptionSettingsDefinitionId),
      location: cdktf.stringToTerraform(this._location),
      lookthrough_limit: cdktf.numberToTerraform(this._lookthroughLimit),
      max_smtp_connection_age: cdktf.stringToTerraform(this._maxSmtpConnectionAge),
      max_smtp_connection_count: cdktf.numberToTerraform(this._maxSmtpConnectionCount),
      maximum_attributes_per_add_request: cdktf.numberToTerraform(this._maximumAttributesPerAddRequest),
      maximum_concurrent_connections: cdktf.numberToTerraform(this._maximumConcurrentConnections),
      maximum_concurrent_connections_per_bind_dn: cdktf.numberToTerraform(this._maximumConcurrentConnectionsPerBindDn),
      maximum_concurrent_connections_per_ip_address: cdktf.numberToTerraform(this._maximumConcurrentConnectionsPerIpAddress),
      maximum_concurrent_unindexed_searches: cdktf.numberToTerraform(this._maximumConcurrentUnindexedSearches),
      maximum_modifications_per_modify_request: cdktf.numberToTerraform(this._maximumModificationsPerModifyRequest),
      maximum_server_out_log_file_count: cdktf.numberToTerraform(this._maximumServerOutLogFileCount),
      maximum_server_out_log_file_size: cdktf.stringToTerraform(this._maximumServerOutLogFileSize),
      maximum_shutdown_time: cdktf.stringToTerraform(this._maximumShutdownTime),
      maximum_user_data_password_policies_to_cache: cdktf.numberToTerraform(this._maximumUserDataPasswordPoliciesToCache),
      network_address_cache_ttl: cdktf.stringToTerraform(this._networkAddressCacheTtl),
      network_address_outage_cache_enabled: cdktf.booleanToTerraform(this._networkAddressOutageCacheEnabled),
      notify_abandoned_operations: cdktf.booleanToTerraform(this._notifyAbandonedOperations),
      permit_syntax_violations_for_attribute: cdktf.listMapper(cdktf.stringToTerraform, false)(this._permitSyntaxViolationsForAttribute),
      proxied_authorization_identity_mapper: cdktf.stringToTerraform(this._proxiedAuthorizationIdentityMapper),
      redact_sensitive_values_in_config_logs: cdktf.booleanToTerraform(this._redactSensitiveValuesInConfigLogs),
      reject_insecure_requests: cdktf.booleanToTerraform(this._rejectInsecureRequests),
      reject_unauthenticated_requests: cdktf.booleanToTerraform(this._rejectUnauthenticatedRequests),
      replication_assurance_source_backlog_fast_start_threshold: cdktf.numberToTerraform(this._replicationAssuranceSourceBacklogFastStartThreshold),
      replication_assurance_source_timeout_suspend_duration: cdktf.stringToTerraform(this._replicationAssuranceSourceTimeoutSuspendDuration),
      replication_backlog_count_alert_threshold: cdktf.numberToTerraform(this._replicationBacklogCountAlertThreshold),
      replication_backlog_duration_alert_threshold: cdktf.stringToTerraform(this._replicationBacklogDurationAlertThreshold),
      replication_history_limit: cdktf.numberToTerraform(this._replicationHistoryLimit),
      replication_purge_obsolete_replicas: cdktf.booleanToTerraform(this._replicationPurgeObsoleteReplicas),
      replication_set_name: cdktf.stringToTerraform(this._replicationSetName),
      result_code_map: cdktf.stringToTerraform(this._resultCodeMap),
      return_bind_error_messages: cdktf.booleanToTerraform(this._returnBindErrorMessages),
      sensitive_attribute: cdktf.listMapper(cdktf.stringToTerraform, false)(this._sensitiveAttribute),
      server_error_result_code: cdktf.numberToTerraform(this._serverErrorResultCode),
      shared_local_db_backend_database_cache_percent: cdktf.numberToTerraform(this._sharedLocalDbBackendDatabaseCachePercent),
      single_structural_objectclass_behavior: cdktf.stringToTerraform(this._singleStructuralObjectclassBehavior),
      size_limit: cdktf.numberToTerraform(this._sizeLimit),
      smtp_connection_health_check_interval: cdktf.stringToTerraform(this._smtpConnectionHealthCheckInterval),
      smtp_server: cdktf.listMapper(cdktf.stringToTerraform, false)(this._smtpServer),
      soft_delete_policy: cdktf.stringToTerraform(this._softDeletePolicy),
      startup_error_logger_output_location: cdktf.stringToTerraform(this._startupErrorLoggerOutputLocation),
      startup_min_replication_backlog_count: cdktf.numberToTerraform(this._startupMinReplicationBacklogCount),
      subtree_accessibility_alert_time_limit: cdktf.stringToTerraform(this._subtreeAccessibilityAlertTimeLimit),
      system_property: cdktf.listMapper(cdktf.stringToTerraform, false)(this._systemProperty),
      time_limit: cdktf.stringToTerraform(this._timeLimit),
      tracked_application: cdktf.listMapper(cdktf.stringToTerraform, false)(this._trackedApplication),
      unauthenticated_idle_time_limit: cdktf.stringToTerraform(this._unauthenticatedIdleTimeLimit),
      unauthenticated_lookthrough_limit: cdktf.numberToTerraform(this._unauthenticatedLookthroughLimit),
      unauthenticated_size_limit: cdktf.numberToTerraform(this._unauthenticatedSizeLimit),
      unauthenticated_time_limit: cdktf.stringToTerraform(this._unauthenticatedTimeLimit),
      unrecoverable_database_error_mode: cdktf.stringToTerraform(this._unrecoverableDatabaseErrorMode),
      use_shared_database_cache_across_all_local_db_backends: cdktf.booleanToTerraform(this._useSharedDatabaseCacheAcrossAllLocalDbBackends),
      verify_entry_digests: cdktf.booleanToTerraform(this._verifyEntryDigests),
      warn_for_backends_with_multiple_base_dns: cdktf.booleanToTerraform(this._warnForBackendsWithMultipleBaseDns),
      writability_mode: cdktf.stringToTerraform(this._writabilityMode),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allow_attribute_name_exceptions: {
        value: cdktf.booleanToHclTerraform(this._allowAttributeNameExceptions),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      allow_inherited_replication_of_subordinate_backends: {
        value: cdktf.booleanToHclTerraform(this._allowInheritedReplicationOfSubordinateBackends),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      allow_insecure_local_jmx_connections: {
        value: cdktf.booleanToHclTerraform(this._allowInsecureLocalJmxConnections),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      allowed_insecure_request_criteria: {
        value: cdktf.stringToHclTerraform(this._allowedInsecureRequestCriteria),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      allowed_insecure_tls_protocol: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._allowedInsecureTlsProtocol),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      allowed_task: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._allowedTask),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      allowed_unauthenticated_request_criteria: {
        value: cdktf.stringToHclTerraform(this._allowedUnauthenticatedRequestCriteria),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      attributes_modifiable_with_ignore_no_user_modification_request_control: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._attributesModifiableWithIgnoreNoUserModificationRequestControl),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      auto_name_with_entry_uuid_connection_criteria: {
        value: cdktf.stringToHclTerraform(this._autoNameWithEntryUuidConnectionCriteria),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auto_name_with_entry_uuid_request_criteria: {
        value: cdktf.stringToHclTerraform(this._autoNameWithEntryUuidRequestCriteria),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      automatically_compress_encrypted_ldif_exports: {
        value: cdktf.booleanToHclTerraform(this._automaticallyCompressEncryptedLdifExports),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      background_thread_for_each_persistent_search: {
        value: cdktf.booleanToHclTerraform(this._backgroundThreadForEachPersistentSearch),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      backup_encryption_settings_definition_id: {
        value: cdktf.stringToHclTerraform(this._backupEncryptionSettingsDefinitionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bind_with_dn_requires_password: {
        value: cdktf.booleanToHclTerraform(this._bindWithDnRequiresPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      configuration_server_group: {
        value: cdktf.stringToHclTerraform(this._configurationServerGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      database_on_virtualized_or_network_storage: {
        value: cdktf.booleanToHclTerraform(this._databaseOnVirtualizedOrNetworkStorage),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      default_internal_operation_client_connection_policy: {
        value: cdktf.stringToHclTerraform(this._defaultInternalOperationClientConnectionPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_password_policy: {
        value: cdktf.stringToHclTerraform(this._defaultPasswordPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disabled_privilege: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._disabledPrivilege),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      duplicate_alert_limit: {
        value: cdktf.numberToHclTerraform(this._duplicateAlertLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      duplicate_alert_time_limit: {
        value: cdktf.stringToHclTerraform(this._duplicateAlertTimeLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      duplicate_error_log_limit: {
        value: cdktf.numberToHclTerraform(this._duplicateErrorLogLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      duplicate_error_log_time_limit: {
        value: cdktf.stringToHclTerraform(this._duplicateErrorLogTimeLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_sub_operation_timer: {
        value: cdktf.booleanToHclTerraform(this._enableSubOperationTimer),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      encrypt_backups_by_default: {
        value: cdktf.booleanToHclTerraform(this._encryptBackupsByDefault),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      encrypt_data: {
        value: cdktf.booleanToHclTerraform(this._encryptData),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      encrypt_ldif_exports_by_default: {
        value: cdktf.booleanToHclTerraform(this._encryptLdifExportsByDefault),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      encryption_settings_cipher_stream_provider: {
        value: cdktf.stringToHclTerraform(this._encryptionSettingsCipherStreamProvider),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      exit_on_jvm_error: {
        value: cdktf.booleanToHclTerraform(this._exitOnJvmError),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      force_as_master_for_mirrored_data: {
        value: cdktf.booleanToHclTerraform(this._forceAsMasterForMirroredData),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      forced_gc_prime_duration: {
        value: cdktf.stringToHclTerraform(this._forcedGcPrimeDuration),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      idle_time_limit: {
        value: cdktf.stringToHclTerraform(this._idleTimeLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      instance_name: {
        value: cdktf.stringToHclTerraform(this._instanceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      invalid_attribute_syntax_behavior: {
        value: cdktf.stringToHclTerraform(this._invalidAttributeSyntaxBehavior),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      jmx_use_legacy_mbean_names: {
        value: cdktf.booleanToHclTerraform(this._jmxUseLegacyMbeanNames),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      jmx_value_behavior: {
        value: cdktf.stringToHclTerraform(this._jmxValueBehavior),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ldap_join_size_limit: {
        value: cdktf.numberToHclTerraform(this._ldapJoinSizeLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ldif_export_encryption_settings_definition_id: {
        value: cdktf.stringToHclTerraform(this._ldifExportEncryptionSettingsDefinitionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      location: {
        value: cdktf.stringToHclTerraform(this._location),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      lookthrough_limit: {
        value: cdktf.numberToHclTerraform(this._lookthroughLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_smtp_connection_age: {
        value: cdktf.stringToHclTerraform(this._maxSmtpConnectionAge),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_smtp_connection_count: {
        value: cdktf.numberToHclTerraform(this._maxSmtpConnectionCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      maximum_attributes_per_add_request: {
        value: cdktf.numberToHclTerraform(this._maximumAttributesPerAddRequest),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      maximum_concurrent_connections: {
        value: cdktf.numberToHclTerraform(this._maximumConcurrentConnections),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      maximum_concurrent_connections_per_bind_dn: {
        value: cdktf.numberToHclTerraform(this._maximumConcurrentConnectionsPerBindDn),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      maximum_concurrent_connections_per_ip_address: {
        value: cdktf.numberToHclTerraform(this._maximumConcurrentConnectionsPerIpAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      maximum_concurrent_unindexed_searches: {
        value: cdktf.numberToHclTerraform(this._maximumConcurrentUnindexedSearches),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      maximum_modifications_per_modify_request: {
        value: cdktf.numberToHclTerraform(this._maximumModificationsPerModifyRequest),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      maximum_server_out_log_file_count: {
        value: cdktf.numberToHclTerraform(this._maximumServerOutLogFileCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      maximum_server_out_log_file_size: {
        value: cdktf.stringToHclTerraform(this._maximumServerOutLogFileSize),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      maximum_shutdown_time: {
        value: cdktf.stringToHclTerraform(this._maximumShutdownTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      maximum_user_data_password_policies_to_cache: {
        value: cdktf.numberToHclTerraform(this._maximumUserDataPasswordPoliciesToCache),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      network_address_cache_ttl: {
        value: cdktf.stringToHclTerraform(this._networkAddressCacheTtl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      network_address_outage_cache_enabled: {
        value: cdktf.booleanToHclTerraform(this._networkAddressOutageCacheEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      notify_abandoned_operations: {
        value: cdktf.booleanToHclTerraform(this._notifyAbandonedOperations),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      permit_syntax_violations_for_attribute: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._permitSyntaxViolationsForAttribute),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      proxied_authorization_identity_mapper: {
        value: cdktf.stringToHclTerraform(this._proxiedAuthorizationIdentityMapper),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      redact_sensitive_values_in_config_logs: {
        value: cdktf.booleanToHclTerraform(this._redactSensitiveValuesInConfigLogs),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      reject_insecure_requests: {
        value: cdktf.booleanToHclTerraform(this._rejectInsecureRequests),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      reject_unauthenticated_requests: {
        value: cdktf.booleanToHclTerraform(this._rejectUnauthenticatedRequests),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      replication_assurance_source_backlog_fast_start_threshold: {
        value: cdktf.numberToHclTerraform(this._replicationAssuranceSourceBacklogFastStartThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      replication_assurance_source_timeout_suspend_duration: {
        value: cdktf.stringToHclTerraform(this._replicationAssuranceSourceTimeoutSuspendDuration),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      replication_backlog_count_alert_threshold: {
        value: cdktf.numberToHclTerraform(this._replicationBacklogCountAlertThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      replication_backlog_duration_alert_threshold: {
        value: cdktf.stringToHclTerraform(this._replicationBacklogDurationAlertThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      replication_history_limit: {
        value: cdktf.numberToHclTerraform(this._replicationHistoryLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      replication_purge_obsolete_replicas: {
        value: cdktf.booleanToHclTerraform(this._replicationPurgeObsoleteReplicas),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      replication_set_name: {
        value: cdktf.stringToHclTerraform(this._replicationSetName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      result_code_map: {
        value: cdktf.stringToHclTerraform(this._resultCodeMap),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      return_bind_error_messages: {
        value: cdktf.booleanToHclTerraform(this._returnBindErrorMessages),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      sensitive_attribute: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._sensitiveAttribute),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      server_error_result_code: {
        value: cdktf.numberToHclTerraform(this._serverErrorResultCode),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      shared_local_db_backend_database_cache_percent: {
        value: cdktf.numberToHclTerraform(this._sharedLocalDbBackendDatabaseCachePercent),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      single_structural_objectclass_behavior: {
        value: cdktf.stringToHclTerraform(this._singleStructuralObjectclassBehavior),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      size_limit: {
        value: cdktf.numberToHclTerraform(this._sizeLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      smtp_connection_health_check_interval: {
        value: cdktf.stringToHclTerraform(this._smtpConnectionHealthCheckInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      smtp_server: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._smtpServer),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      soft_delete_policy: {
        value: cdktf.stringToHclTerraform(this._softDeletePolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      startup_error_logger_output_location: {
        value: cdktf.stringToHclTerraform(this._startupErrorLoggerOutputLocation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      startup_min_replication_backlog_count: {
        value: cdktf.numberToHclTerraform(this._startupMinReplicationBacklogCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      subtree_accessibility_alert_time_limit: {
        value: cdktf.stringToHclTerraform(this._subtreeAccessibilityAlertTimeLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      system_property: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._systemProperty),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      time_limit: {
        value: cdktf.stringToHclTerraform(this._timeLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tracked_application: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._trackedApplication),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      unauthenticated_idle_time_limit: {
        value: cdktf.stringToHclTerraform(this._unauthenticatedIdleTimeLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      unauthenticated_lookthrough_limit: {
        value: cdktf.numberToHclTerraform(this._unauthenticatedLookthroughLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      unauthenticated_size_limit: {
        value: cdktf.numberToHclTerraform(this._unauthenticatedSizeLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      unauthenticated_time_limit: {
        value: cdktf.stringToHclTerraform(this._unauthenticatedTimeLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      unrecoverable_database_error_mode: {
        value: cdktf.stringToHclTerraform(this._unrecoverableDatabaseErrorMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      use_shared_database_cache_across_all_local_db_backends: {
        value: cdktf.booleanToHclTerraform(this._useSharedDatabaseCacheAcrossAllLocalDbBackends),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      verify_entry_digests: {
        value: cdktf.booleanToHclTerraform(this._verifyEntryDigests),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      warn_for_backends_with_multiple_base_dns: {
        value: cdktf.booleanToHclTerraform(this._warnForBackendsWithMultipleBaseDns),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      writability_mode: {
        value: cdktf.stringToHclTerraform(this._writabilityMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
