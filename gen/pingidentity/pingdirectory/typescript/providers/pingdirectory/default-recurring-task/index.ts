// https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_recurring_task
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DefaultRecurringTaskConfig extends cdktf.TerraformMetaArguments {
  /**
  * Indicates whether the server should generate an administrative alert whenever an instance of this Recurring Task fails to complete successfully.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_recurring_task#alert_on_failure DefaultRecurringTask#alert_on_failure}
  */
  readonly alertOnFailure?: boolean | cdktf.IResolvable;
  /**
  * Indicates whether the server should generate an administrative alert whenever an instance of this Recurring Task starts running.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_recurring_task#alert_on_start DefaultRecurringTask#alert_on_start}
  */
  readonly alertOnStart?: boolean | cdktf.IResolvable;
  /**
  * Indicates whether the server should generate an administrative alert whenever an instance of this Recurring Task completes successfully.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_recurring_task#alert_on_success DefaultRecurringTask#alert_on_success}
  */
  readonly alertOnSuccess?: boolean | cdktf.IResolvable;
  /**
  * The set of backends that should be examined. If no backends are specified, then all backends that support this functionality will be included.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_recurring_task#backend DefaultRecurringTask#backend}
  */
  readonly backend?: string[];
  /**
  * The backend ID for a backend to be exported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_recurring_task#backend_id DefaultRecurringTask#backend_id}
  */
  readonly backendId?: string[];
  /**
  * The directory in which backup files will be placed. When backing up a single backend, the backup files will be placed directly in this directory. When backing up multiple backends, the backup files for each backend will be placed in a subdirectory whose name is the corresponding backend ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_recurring_task#backup_directory DefaultRecurringTask#backup_directory}
  */
  readonly backupDirectory?: string;
  /**
  * The base directory below which generated reports will be written. Each invocation of the audit-data-security task will create a new subdirectory below this base directory whose name is a timestamp indicating when the report was generated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_recurring_task#base_output_directory DefaultRecurringTask#base_output_directory}
  */
  readonly baseOutputDirectory?: string;
  /**
  * Indicates whether an instance of this Recurring Task should be canceled if the task immediately before it in the recurring task chain fails to complete successfully (including if it is canceled by an administrator before it starts or while it is running).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_recurring_task#cancel_on_task_dependency_failure DefaultRecurringTask#cancel_on_task_dependency_failure}
  */
  readonly cancelOnTaskDependencyFailure?: boolean | cdktf.IResolvable;
  /**
  * A string containing the arguments to provide to the command. If the command should be run without arguments, this property should be left undefined. If there should be multiple arguments, then they should be separated with spaces.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_recurring_task#command_arguments DefaultRecurringTask#command_arguments}
  */
  readonly commandArguments?: string;
  /**
  * The path and base name for a file to which the command output (both standard output and standard error) should be written. This may be left undefined if the command output should not be recorded into a file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_recurring_task#command_output_file_base_name DefaultRecurringTask#command_output_file_base_name}
  */
  readonly commandOutputFileBaseName?: string;
  /**
  * The absolute path to the command to execute. It must be an absolute path, the corresponding file must exist, and it must be listed in the config/exec-command-whitelist.txt file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_recurring_task#command_path DefaultRecurringTask#command_path}
  */
  readonly commandPath?: string;
  /**
  * An optional comment to include in a README file within the support data archive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_recurring_task#comment DefaultRecurringTask#comment}
  */
  readonly comment?: string;
  /**
  * When the `type` attribute is set to:
  *   - `backup`: Indicates whether to compress the data as it is written into the backup.
  *   - `ldif-export`: Indicates whether to compress the LDIF data as it is exported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_recurring_task#compress DefaultRecurringTask#compress}
  */
  readonly compress?: boolean | cdktf.IResolvable;
  /**
  * The set of data security auditors that should be invoked. If no auditors are specified, then all auditors defined in the configuration will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_recurring_task#data_security_auditor DefaultRecurringTask#data_security_auditor}
  */
  readonly dataSecurityAuditor?: string[];
  /**
  * A description for this Recurring Task
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_recurring_task#description DefaultRecurringTask#description}
  */
  readonly description?: string;
  /**
  * The maximum length of time that the server will continue to perform internal searches using the criteria from the ldap-url-for-search-expected-to-return-entries property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_recurring_task#duration_to_wait_for_search_to_return_entries DefaultRecurringTask#duration_to_wait_for_search_to_return_entries}
  */
  readonly durationToWaitForSearchToReturnEntries?: string;
  /**
  * Indicates that task should wait for up to the specified length of time for the work queue to report that all worker threads are idle and there are no pending operations. Note that this primarily monitors operations that use worker threads, which does not include internal operations (for example, those invoked by extensions), and may not include requests from non-LDAP clients (for example, HTTP-based clients).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_recurring_task#duration_to_wait_for_work_queue_idle DefaultRecurringTask#duration_to_wait_for_work_queue_idle}
  */
  readonly durationToWaitForWorkQueueIdle?: string;
  /**
  * The email addresses to which a message should be sent if an instance of this Recurring Task fails to complete successfully. If this option is used, then at least one smtp-server must be configured in the global configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_recurring_task#email_on_failure DefaultRecurringTask#email_on_failure}
  */
  readonly emailOnFailure?: string[];
  /**
  * The email addresses to which a message should be sent whenever an instance of this Recurring Task starts running. If this option is used, then at least one smtp-server must be configured in the global configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_recurring_task#email_on_start DefaultRecurringTask#email_on_start}
  */
  readonly emailOnStart?: string[];
  /**
  * The email addresses to which a message should be sent whenever an instance of this Recurring Task completes successfully. If this option is used, then at least one smtp-server must be configured in the global configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_recurring_task#email_on_success DefaultRecurringTask#email_on_success}
  */
  readonly emailOnSuccess?: string[];
  /**
  * When the `type` attribute is set to:
  *   - `backup`: Indicates whether to encrypt the data as it is written into the backup.
  *   - `ldif-export`: Indicates whether to encrypt the LDIF data as it exported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_recurring_task#encrypt DefaultRecurringTask#encrypt}
  */
  readonly encrypt?: boolean | cdktf.IResolvable;
  /**
  * The path to a file that contains the passphrase to encrypt the contents of the support data archive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_recurring_task#encryption_passphrase_file DefaultRecurringTask#encryption_passphrase_file}
  */
  readonly encryptionPassphraseFile?: string;
  /**
  * When the `type` attribute is set to:
  *   - `backup`: The ID of an encryption settings definition to use to obtain the backup encryption key.
  *   - `ldif-export`: The ID of an encryption settings definition to use to obtain the LDIF export encryption key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_recurring_task#encryption_settings_definition_id DefaultRecurringTask#encryption_settings_definition_id}
  */
  readonly encryptionSettingsDefinitionId?: string;
  /**
  * The backend ID for a backend to be excluded from the export.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_recurring_task#exclude_backend_id DefaultRecurringTask#exclude_backend_id}
  */
  readonly excludeBackendId?: string[];
  /**
  * The backend IDs of any backends that should be excluded from the backup. All backends that support backups and are not listed will be included.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_recurring_task#excluded_backend_id DefaultRecurringTask#excluded_backend_id}
  */
  readonly excludedBackendId?: string[];
  /**
  * The set of arguments used to customize the behavior for the Third Party Recurring Task. Each configuration property should be given in the form 'name=value'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_recurring_task#extension_argument DefaultRecurringTask#extension_argument}
  */
  readonly extensionArgument?: string[];
  /**
  * The fully-qualified name of the Java class providing the logic for the Third Party Recurring Task.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_recurring_task#extension_class DefaultRecurringTask#extension_class}
  */
  readonly extensionClass?: string;
  /**
  * A pattern that specifies the names of the files to examine. The pattern may contain zero or more asterisks as wildcards, where each wildcard matches zero or more characters. It may also contain at most one occurrence of the special string "${timestamp}", which will match a timestamp with the format specified using the timestamp-format property. All other characters in the pattern will be treated literally.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_recurring_task#filename_pattern DefaultRecurringTask#filename_pattern}
  */
  readonly filenamePattern?: string;
  /**
  * Indicates whether the support data archive should include binary files that may not have otherwise been included. Note that it may not be possible to obscure or redact sensitive information in binary files.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_recurring_task#include_binary_files DefaultRecurringTask#include_binary_files}
  */
  readonly includeBinaryFiles?: boolean | cdktf.IResolvable;
  /**
  * Indicates whether the support data archive should include information that may be expensive to obtain, and that may temporarily affect the server's performance or responsiveness.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_recurring_task#include_expensive_data DefaultRecurringTask#include_expensive_data}
  */
  readonly includeExpensiveData?: boolean | cdktf.IResolvable;
  /**
  * Indicates whether the support data archive should include the source code (if available) for any third-party extensions that may be installed in the server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_recurring_task#include_extension_source DefaultRecurringTask#include_extension_source}
  */
  readonly includeExtensionSource?: boolean | cdktf.IResolvable;
  /**
  * A filter that will be used to identify entries that may be included in the generated report. If multiple filters are specified, then any entry that matches at least one of the filters will be included. If no filters are specified, then all entries will be included.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_recurring_task#include_filter DefaultRecurringTask#include_filter}
  */
  readonly includeFilter?: string[];
  /**
  * An optional set of additional paths to files within the instance root that should be included in the generated server profile. All paths must be within the instance root, and relative paths will be relative to the instance root.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_recurring_task#include_path DefaultRecurringTask#include_path}
  */
  readonly includePath?: string[];
  /**
  * Indicates whether the support data archive should include a replication state dump, which may be several megabytes in size.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_recurring_task#include_replication_state_dump DefaultRecurringTask#include_replication_state_dump}
  */
  readonly includeReplicationStateDump?: boolean | cdktf.IResolvable;
  /**
  * The backend IDs of any backends that should be included in the backup.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_recurring_task#included_backend_id DefaultRecurringTask#included_backend_id}
  */
  readonly includedBackendId?: string[];
  /**
  * The number of times to invoke the jstack utility to obtain a stack trace of all threads running in the JVM. A value of zero indicates that the jstack utility should not be invoked.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_recurring_task#jstack_count DefaultRecurringTask#jstack_count}
  */
  readonly jstackCount?: number;
  /**
  * An LDAP URL that provides the criteria for a search request that is expected to return at least one entry. The search will be performed internally, and only the base DN, scope, and filter from the URL will be used; any host, port, or requested attributes included in the URL will be ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_recurring_task#ldap_url_for_search_expected_to_return_entries DefaultRecurringTask#ldap_url_for_search_expected_to_return_entries}
  */
  readonly ldapUrlForSearchExpectedToReturnEntries?: string[];
  /**
  * The directory in which LDIF export files will be placed. The directory must already exist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_recurring_task#ldif_directory DefaultRecurringTask#ldif_directory}
  */
  readonly ldifDirectory?: string;
  /**
  * Indicates whether the command's output (both standard output and standard error) should be recorded in the server's error log.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_recurring_task#log_command_output DefaultRecurringTask#log_command_output}
  */
  readonly logCommandOutput?: boolean | cdktf.IResolvable;
  /**
  * The maximum age (leading up to the time the collect-support-data tool was invoked) for log content to include in the support data archive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_recurring_task#log_duration DefaultRecurringTask#log_duration}
  */
  readonly logDuration?: string;
  /**
  * The amount of data to collect from the beginning of each log file included in the support data archive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_recurring_task#log_file_head_collection_size DefaultRecurringTask#log_file_head_collection_size}
  */
  readonly logFileHeadCollectionSize?: string;
  /**
  * The amount of data to collect from the end of each log file included in the support data archive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_recurring_task#log_file_tail_collection_size DefaultRecurringTask#log_file_tail_collection_size}
  */
  readonly logFileTailCollectionSize?: string;
  /**
  * When the `type` attribute is set to:
  *   - `backup`: The maximum rate, in megabytes per second, at which backups should be written.
  *   - `ldif-export`: The maximum rate, in megabytes per second, at which LDIF exports should be written.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_recurring_task#max_megabytes_per_second DefaultRecurringTask#max_megabytes_per_second}
  */
  readonly maxMegabytesPerSecond?: number;
  /**
  * Name of this config object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_recurring_task#name DefaultRecurringTask#name}
  */
  readonly name: string;
  /**
  * The directory in which the support data archive files will be placed. The path must be a directory, and that directory must already exist. Relative paths will be interpreted as relative to the server root.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_recurring_task#output_directory DefaultRecurringTask#output_directory}
  */
  readonly outputDirectory?: string;
  /**
  * Supported in PingDirectory product version 10.0.0.0+. An optional set of post-LDIF-export task processors that should be invoked for the resulting LDIF export files.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_recurring_task#post_ldif_export_task_processor DefaultRecurringTask#post_ldif_export_task_processor}
  */
  readonly postLdifExportTaskProcessor?: string[];
  /**
  * The directory in which the generated server profiles will be placed. The files will be named with the pattern "server-profile-{timestamp}.zip", where "{timestamp}" represents the time that the profile was generated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_recurring_task#profile_directory DefaultRecurringTask#profile_directory}
  */
  readonly profileDirectory?: string;
  /**
  * When the `type` attribute is set to:
  *   - `leave-lockdown-mode`: The reason that the server is being taken out of in lockdown mode.
  *   - `enter-lockdown-mode`: The reason that the server is being placed in lockdown mode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_recurring_task#reason DefaultRecurringTask#reason}
  */
  readonly reason?: string;
  /**
  * The number of intervals of data to collect from tools that use sample-based reporting, like vmstat, iostat, and mpstat. A value of zero indicates that these kinds of tools should not be used to collect any information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_recurring_task#report_count DefaultRecurringTask#report_count}
  */
  readonly reportCount?: number;
  /**
  * The duration (in seconds) between each interval of data to collect from tools that use sample-based reporting, like vmstat, iostat, and mpstat.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_recurring_task#report_interval_seconds DefaultRecurringTask#report_interval_seconds}
  */
  readonly reportIntervalSeconds?: number;
  /**
  * The minimum aggregate size of files that will be retained. The size should be specified as an integer followed by a unit that is one of "b" or "bytes", "kb" or "kilobytes", "mb" or "megabytes", "gb" or "gigabytes", or "tb" or "terabytes". For example, a value of "1 gb" indicates that at least one gigabyte of files should be retained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_recurring_task#retain_aggregate_file_size DefaultRecurringTask#retain_aggregate_file_size}
  */
  readonly retainAggregateFileSize?: string;
  /**
  * The minimum age of files matching the pattern that will be retained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_recurring_task#retain_file_age DefaultRecurringTask#retain_file_age}
  */
  readonly retainFileAge?: string;
  /**
  * The minimum number of files matching the pattern that will be retained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_recurring_task#retain_file_count DefaultRecurringTask#retain_file_count}
  */
  readonly retainFileCount?: number;
  /**
  * The minimum age of previous full backups that should be preserved after a new backup completes successfully.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_recurring_task#retain_previous_full_backup_age DefaultRecurringTask#retain_previous_full_backup_age}
  */
  readonly retainPreviousFullBackupAge?: string;
  /**
  * The minimum number of previous full backups that should be preserved after a new backup completes successfully.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_recurring_task#retain_previous_full_backup_count DefaultRecurringTask#retain_previous_full_backup_count}
  */
  readonly retainPreviousFullBackupCount?: number;
  /**
  * The minimum age of previous LDIF exports that should be preserved after a new export completes successfully.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_recurring_task#retain_previous_ldif_export_age DefaultRecurringTask#retain_previous_ldif_export_age}
  */
  readonly retainPreviousLdifExportAge?: string;
  /**
  * The minimum number of previous LDIF exports that should be preserved after a new export completes successfully.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_recurring_task#retain_previous_ldif_export_count DefaultRecurringTask#retain_previous_ldif_export_count}
  */
  readonly retainPreviousLdifExportCount?: number;
  /**
  * The minimum age of previous command output files that should be preserved after a new instance of the command is invoked.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_recurring_task#retain_previous_output_file_age DefaultRecurringTask#retain_previous_output_file_age}
  */
  readonly retainPreviousOutputFileAge?: string;
  /**
  * The minimum number of previous command output files that should be preserved after a new instance of the command is invoked.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_recurring_task#retain_previous_output_file_count DefaultRecurringTask#retain_previous_output_file_count}
  */
  readonly retainPreviousOutputFileCount?: number;
  /**
  * The minimum age of previous server profile zip files that should be preserved after a new profile is generated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_recurring_task#retain_previous_profile_age DefaultRecurringTask#retain_previous_profile_age}
  */
  readonly retainPreviousProfileAge?: string;
  /**
  * The minimum number of previous server profile zip files that should be preserved after a new profile is generated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_recurring_task#retain_previous_profile_count DefaultRecurringTask#retain_previous_profile_count}
  */
  readonly retainPreviousProfileCount?: number;
  /**
  * The minimum age of previous reports that should be preserved after a new report completes successfully.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_recurring_task#retain_previous_report_age DefaultRecurringTask#retain_previous_report_age}
  */
  readonly retainPreviousReportAge?: string;
  /**
  * The minimum number of previous reports that should be preserved after a new report is generated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_recurring_task#retain_previous_report_count DefaultRecurringTask#retain_previous_report_count}
  */
  readonly retainPreviousReportCount?: number;
  /**
  * The minimum age of previous support data archives that should be preserved after a new archive is generated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_recurring_task#retain_previous_support_data_archive_age DefaultRecurringTask#retain_previous_support_data_archive_age}
  */
  readonly retainPreviousSupportDataArchiveAge?: string;
  /**
  * The minimum number of previous support data archives that should be preserved after a new archive is generated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_recurring_task#retain_previous_support_data_archive_count DefaultRecurringTask#retain_previous_support_data_archive_count}
  */
  readonly retainPreviousSupportDataArchiveCount?: number;
  /**
  * The length of time the server should sleep between searches performed using the criteria from the ldap-url-for-search-expected-to-return-entries property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_recurring_task#search_interval DefaultRecurringTask#search_interval}
  */
  readonly searchInterval?: string;
  /**
  * The length of time that the server will wait for a response to each internal search performed using the criteria from the ldap-url-for-search-expected-to-return-entries property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_recurring_task#search_time_limit DefaultRecurringTask#search_time_limit}
  */
  readonly searchTimeLimit?: string;
  /**
  * The security level to use when deciding which information to include in or exclude from the support data archive, and which included data should be obscured or redacted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_recurring_task#security_level DefaultRecurringTask#security_level}
  */
  readonly securityLevel?: string;
  /**
  * When the `type` attribute is set to:
  *   - `backup`: Indicates whether to cryptographically sign backups, which will make it possible to detect whether the backup has been altered since it was created.
  *   - `ldif-export`: Indicates whether to cryptographically sign the exported data, which will make it possible to detect whether the LDIF data has been altered since it was exported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_recurring_task#sign DefaultRecurringTask#sign}
  */
  readonly sign?: boolean | cdktf.IResolvable;
  /**
  * The length of time to sleep before the task completes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_recurring_task#sleep_duration DefaultRecurringTask#sleep_duration}
  */
  readonly sleepDuration?: string;
  /**
  * The path to the directory containing the files to examine. The directory must exist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_recurring_task#target_directory DefaultRecurringTask#target_directory}
  */
  readonly targetDirectory?: string;
  /**
  * The set of attribute values that should be included in the tasks that are scheduled from this Statically Defined Recurring Task. Each value must be in the form {attribute-type}={value}, where {attribute-type} is the name or OID of an attribute type that is defined in the schema and permitted with the configured set of object classes, and {value} is a value to assign to an attribute with that type. A multivalued attribute can be created by providing multiple name-value pairs with the same name and different values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_recurring_task#task_attribute_value DefaultRecurringTask#task_attribute_value}
  */
  readonly taskAttributeValue?: string[];
  /**
  * The final task state that a task instance should have if the task executes the specified command and that command completes with a nonzero exit code, which generally means that the command did not complete successfully.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_recurring_task#task_completion_state_for_nonzero_exit_code DefaultRecurringTask#task_completion_state_for_nonzero_exit_code}
  */
  readonly taskCompletionStateForNonzeroExitCode?: string;
  /**
  * The fully-qualified name of the Java class that provides the logic for the task to be invoked.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_recurring_task#task_java_class DefaultRecurringTask#task_java_class}
  */
  readonly taskJavaClass?: string;
  /**
  * The names or OIDs of the object classes to include in the tasks that are scheduled from this Statically Defined Recurring Task. All object classes must be defined in the server schema, and the combination of object classes must be valid for a task entry.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_recurring_task#task_object_class DefaultRecurringTask#task_object_class}
  */
  readonly taskObjectClass?: string[];
  /**
  * The return state to use if a timeout is encountered while waiting for the server work queue to become idle (if the duration-to-wait-for-work-queue-idle property has a value), or if the time specified by the duration-to-wait-for-search-to-return-entries elapses without the associated search returning any entries.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_recurring_task#task_return_state_if_timeout_is_encountered DefaultRecurringTask#task_return_state_if_timeout_is_encountered}
  */
  readonly taskReturnStateIfTimeoutIsEncountered?: string;
  /**
  * The format to use for the timestamp represented by the "${timestamp}" token in the filename pattern.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_recurring_task#timestamp_format DefaultRecurringTask#timestamp_format}
  */
  readonly timestampFormat?: string;
  /**
  * Indicates whether to capture support data information sequentially rather than in parallel. Capturing data in sequential mode may reduce the amount of memory that the tool requires to operate, at the cost of taking longer to run.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_recurring_task#use_sequential_mode DefaultRecurringTask#use_sequential_mode}
  */
  readonly useSequentialMode?: boolean | cdktf.IResolvable;
  /**
  * The absolute path to a working directory where the command should be executed. It must be an absolute path and the corresponding directory must exist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_recurring_task#working_directory DefaultRecurringTask#working_directory}
  */
  readonly workingDirectory?: string;
}
export interface DefaultRecurringTaskRequiredActions {
}

export function defaultRecurringTaskRequiredActionsToTerraform(struct?: DefaultRecurringTaskRequiredActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function defaultRecurringTaskRequiredActionsToHclTerraform(struct?: DefaultRecurringTaskRequiredActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DefaultRecurringTaskRequiredActionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DefaultRecurringTaskRequiredActions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DefaultRecurringTaskRequiredActions | undefined) {
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

export class DefaultRecurringTaskRequiredActionsList extends cdktf.ComplexList {

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
  public get(index: number): DefaultRecurringTaskRequiredActionsOutputReference {
    return new DefaultRecurringTaskRequiredActionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_recurring_task pingdirectory_default_recurring_task}
*/
export class DefaultRecurringTask extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingdirectory_default_recurring_task";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DefaultRecurringTask resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DefaultRecurringTask to import
  * @param importFromId The id of the existing DefaultRecurringTask that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_recurring_task#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DefaultRecurringTask to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingdirectory_default_recurring_task", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_recurring_task pingdirectory_default_recurring_task} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DefaultRecurringTaskConfig
  */
  public constructor(scope: Construct, id: string, config: DefaultRecurringTaskConfig) {
    super(scope, id, {
      terraformResourceType: 'pingdirectory_default_recurring_task',
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
    this._alertOnFailure = config.alertOnFailure;
    this._alertOnStart = config.alertOnStart;
    this._alertOnSuccess = config.alertOnSuccess;
    this._backend = config.backend;
    this._backendId = config.backendId;
    this._backupDirectory = config.backupDirectory;
    this._baseOutputDirectory = config.baseOutputDirectory;
    this._cancelOnTaskDependencyFailure = config.cancelOnTaskDependencyFailure;
    this._commandArguments = config.commandArguments;
    this._commandOutputFileBaseName = config.commandOutputFileBaseName;
    this._commandPath = config.commandPath;
    this._comment = config.comment;
    this._compress = config.compress;
    this._dataSecurityAuditor = config.dataSecurityAuditor;
    this._description = config.description;
    this._durationToWaitForSearchToReturnEntries = config.durationToWaitForSearchToReturnEntries;
    this._durationToWaitForWorkQueueIdle = config.durationToWaitForWorkQueueIdle;
    this._emailOnFailure = config.emailOnFailure;
    this._emailOnStart = config.emailOnStart;
    this._emailOnSuccess = config.emailOnSuccess;
    this._encrypt = config.encrypt;
    this._encryptionPassphraseFile = config.encryptionPassphraseFile;
    this._encryptionSettingsDefinitionId = config.encryptionSettingsDefinitionId;
    this._excludeBackendId = config.excludeBackendId;
    this._excludedBackendId = config.excludedBackendId;
    this._extensionArgument = config.extensionArgument;
    this._extensionClass = config.extensionClass;
    this._filenamePattern = config.filenamePattern;
    this._includeBinaryFiles = config.includeBinaryFiles;
    this._includeExpensiveData = config.includeExpensiveData;
    this._includeExtensionSource = config.includeExtensionSource;
    this._includeFilter = config.includeFilter;
    this._includePath = config.includePath;
    this._includeReplicationStateDump = config.includeReplicationStateDump;
    this._includedBackendId = config.includedBackendId;
    this._jstackCount = config.jstackCount;
    this._ldapUrlForSearchExpectedToReturnEntries = config.ldapUrlForSearchExpectedToReturnEntries;
    this._ldifDirectory = config.ldifDirectory;
    this._logCommandOutput = config.logCommandOutput;
    this._logDuration = config.logDuration;
    this._logFileHeadCollectionSize = config.logFileHeadCollectionSize;
    this._logFileTailCollectionSize = config.logFileTailCollectionSize;
    this._maxMegabytesPerSecond = config.maxMegabytesPerSecond;
    this._name = config.name;
    this._outputDirectory = config.outputDirectory;
    this._postLdifExportTaskProcessor = config.postLdifExportTaskProcessor;
    this._profileDirectory = config.profileDirectory;
    this._reason = config.reason;
    this._reportCount = config.reportCount;
    this._reportIntervalSeconds = config.reportIntervalSeconds;
    this._retainAggregateFileSize = config.retainAggregateFileSize;
    this._retainFileAge = config.retainFileAge;
    this._retainFileCount = config.retainFileCount;
    this._retainPreviousFullBackupAge = config.retainPreviousFullBackupAge;
    this._retainPreviousFullBackupCount = config.retainPreviousFullBackupCount;
    this._retainPreviousLdifExportAge = config.retainPreviousLdifExportAge;
    this._retainPreviousLdifExportCount = config.retainPreviousLdifExportCount;
    this._retainPreviousOutputFileAge = config.retainPreviousOutputFileAge;
    this._retainPreviousOutputFileCount = config.retainPreviousOutputFileCount;
    this._retainPreviousProfileAge = config.retainPreviousProfileAge;
    this._retainPreviousProfileCount = config.retainPreviousProfileCount;
    this._retainPreviousReportAge = config.retainPreviousReportAge;
    this._retainPreviousReportCount = config.retainPreviousReportCount;
    this._retainPreviousSupportDataArchiveAge = config.retainPreviousSupportDataArchiveAge;
    this._retainPreviousSupportDataArchiveCount = config.retainPreviousSupportDataArchiveCount;
    this._searchInterval = config.searchInterval;
    this._searchTimeLimit = config.searchTimeLimit;
    this._securityLevel = config.securityLevel;
    this._sign = config.sign;
    this._sleepDuration = config.sleepDuration;
    this._targetDirectory = config.targetDirectory;
    this._taskAttributeValue = config.taskAttributeValue;
    this._taskCompletionStateForNonzeroExitCode = config.taskCompletionStateForNonzeroExitCode;
    this._taskJavaClass = config.taskJavaClass;
    this._taskObjectClass = config.taskObjectClass;
    this._taskReturnStateIfTimeoutIsEncountered = config.taskReturnStateIfTimeoutIsEncountered;
    this._timestampFormat = config.timestampFormat;
    this._useSequentialMode = config.useSequentialMode;
    this._workingDirectory = config.workingDirectory;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alert_on_failure - computed: true, optional: true, required: false
  private _alertOnFailure?: boolean | cdktf.IResolvable; 
  public get alertOnFailure() {
    return this.getBooleanAttribute('alert_on_failure');
  }
  public set alertOnFailure(value: boolean | cdktf.IResolvable) {
    this._alertOnFailure = value;
  }
  public resetAlertOnFailure() {
    this._alertOnFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertOnFailureInput() {
    return this._alertOnFailure;
  }

  // alert_on_start - computed: true, optional: true, required: false
  private _alertOnStart?: boolean | cdktf.IResolvable; 
  public get alertOnStart() {
    return this.getBooleanAttribute('alert_on_start');
  }
  public set alertOnStart(value: boolean | cdktf.IResolvable) {
    this._alertOnStart = value;
  }
  public resetAlertOnStart() {
    this._alertOnStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertOnStartInput() {
    return this._alertOnStart;
  }

  // alert_on_success - computed: true, optional: true, required: false
  private _alertOnSuccess?: boolean | cdktf.IResolvable; 
  public get alertOnSuccess() {
    return this.getBooleanAttribute('alert_on_success');
  }
  public set alertOnSuccess(value: boolean | cdktf.IResolvable) {
    this._alertOnSuccess = value;
  }
  public resetAlertOnSuccess() {
    this._alertOnSuccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertOnSuccessInput() {
    return this._alertOnSuccess;
  }

  // backend - computed: true, optional: true, required: false
  private _backend?: string[]; 
  public get backend() {
    return cdktf.Fn.tolist(this.getListAttribute('backend'));
  }
  public set backend(value: string[]) {
    this._backend = value;
  }
  public resetBackend() {
    this._backend = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backendInput() {
    return this._backend;
  }

  // backend_id - computed: true, optional: true, required: false
  private _backendId?: string[]; 
  public get backendId() {
    return cdktf.Fn.tolist(this.getListAttribute('backend_id'));
  }
  public set backendId(value: string[]) {
    this._backendId = value;
  }
  public resetBackendId() {
    this._backendId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backendIdInput() {
    return this._backendId;
  }

  // backup_directory - computed: true, optional: true, required: false
  private _backupDirectory?: string; 
  public get backupDirectory() {
    return this.getStringAttribute('backup_directory');
  }
  public set backupDirectory(value: string) {
    this._backupDirectory = value;
  }
  public resetBackupDirectory() {
    this._backupDirectory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupDirectoryInput() {
    return this._backupDirectory;
  }

  // base_output_directory - computed: true, optional: true, required: false
  private _baseOutputDirectory?: string; 
  public get baseOutputDirectory() {
    return this.getStringAttribute('base_output_directory');
  }
  public set baseOutputDirectory(value: string) {
    this._baseOutputDirectory = value;
  }
  public resetBaseOutputDirectory() {
    this._baseOutputDirectory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baseOutputDirectoryInput() {
    return this._baseOutputDirectory;
  }

  // cancel_on_task_dependency_failure - computed: true, optional: true, required: false
  private _cancelOnTaskDependencyFailure?: boolean | cdktf.IResolvable; 
  public get cancelOnTaskDependencyFailure() {
    return this.getBooleanAttribute('cancel_on_task_dependency_failure');
  }
  public set cancelOnTaskDependencyFailure(value: boolean | cdktf.IResolvable) {
    this._cancelOnTaskDependencyFailure = value;
  }
  public resetCancelOnTaskDependencyFailure() {
    this._cancelOnTaskDependencyFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cancelOnTaskDependencyFailureInput() {
    return this._cancelOnTaskDependencyFailure;
  }

  // command_arguments - computed: true, optional: true, required: false
  private _commandArguments?: string; 
  public get commandArguments() {
    return this.getStringAttribute('command_arguments');
  }
  public set commandArguments(value: string) {
    this._commandArguments = value;
  }
  public resetCommandArguments() {
    this._commandArguments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commandArgumentsInput() {
    return this._commandArguments;
  }

  // command_output_file_base_name - computed: true, optional: true, required: false
  private _commandOutputFileBaseName?: string; 
  public get commandOutputFileBaseName() {
    return this.getStringAttribute('command_output_file_base_name');
  }
  public set commandOutputFileBaseName(value: string) {
    this._commandOutputFileBaseName = value;
  }
  public resetCommandOutputFileBaseName() {
    this._commandOutputFileBaseName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commandOutputFileBaseNameInput() {
    return this._commandOutputFileBaseName;
  }

  // command_path - computed: true, optional: true, required: false
  private _commandPath?: string; 
  public get commandPath() {
    return this.getStringAttribute('command_path');
  }
  public set commandPath(value: string) {
    this._commandPath = value;
  }
  public resetCommandPath() {
    this._commandPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commandPathInput() {
    return this._commandPath;
  }

  // comment - computed: true, optional: true, required: false
  private _comment?: string; 
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string) {
    this._comment = value;
  }
  public resetComment() {
    this._comment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment;
  }

  // compress - computed: true, optional: true, required: false
  private _compress?: boolean | cdktf.IResolvable; 
  public get compress() {
    return this.getBooleanAttribute('compress');
  }
  public set compress(value: boolean | cdktf.IResolvable) {
    this._compress = value;
  }
  public resetCompress() {
    this._compress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressInput() {
    return this._compress;
  }

  // data_security_auditor - computed: true, optional: true, required: false
  private _dataSecurityAuditor?: string[]; 
  public get dataSecurityAuditor() {
    return cdktf.Fn.tolist(this.getListAttribute('data_security_auditor'));
  }
  public set dataSecurityAuditor(value: string[]) {
    this._dataSecurityAuditor = value;
  }
  public resetDataSecurityAuditor() {
    this._dataSecurityAuditor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSecurityAuditorInput() {
    return this._dataSecurityAuditor;
  }

  // description - computed: true, optional: true, required: false
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

  // duration_to_wait_for_search_to_return_entries - computed: true, optional: true, required: false
  private _durationToWaitForSearchToReturnEntries?: string; 
  public get durationToWaitForSearchToReturnEntries() {
    return this.getStringAttribute('duration_to_wait_for_search_to_return_entries');
  }
  public set durationToWaitForSearchToReturnEntries(value: string) {
    this._durationToWaitForSearchToReturnEntries = value;
  }
  public resetDurationToWaitForSearchToReturnEntries() {
    this._durationToWaitForSearchToReturnEntries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get durationToWaitForSearchToReturnEntriesInput() {
    return this._durationToWaitForSearchToReturnEntries;
  }

  // duration_to_wait_for_work_queue_idle - computed: true, optional: true, required: false
  private _durationToWaitForWorkQueueIdle?: string; 
  public get durationToWaitForWorkQueueIdle() {
    return this.getStringAttribute('duration_to_wait_for_work_queue_idle');
  }
  public set durationToWaitForWorkQueueIdle(value: string) {
    this._durationToWaitForWorkQueueIdle = value;
  }
  public resetDurationToWaitForWorkQueueIdle() {
    this._durationToWaitForWorkQueueIdle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get durationToWaitForWorkQueueIdleInput() {
    return this._durationToWaitForWorkQueueIdle;
  }

  // email_on_failure - computed: true, optional: true, required: false
  private _emailOnFailure?: string[]; 
  public get emailOnFailure() {
    return cdktf.Fn.tolist(this.getListAttribute('email_on_failure'));
  }
  public set emailOnFailure(value: string[]) {
    this._emailOnFailure = value;
  }
  public resetEmailOnFailure() {
    this._emailOnFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailOnFailureInput() {
    return this._emailOnFailure;
  }

  // email_on_start - computed: true, optional: true, required: false
  private _emailOnStart?: string[]; 
  public get emailOnStart() {
    return cdktf.Fn.tolist(this.getListAttribute('email_on_start'));
  }
  public set emailOnStart(value: string[]) {
    this._emailOnStart = value;
  }
  public resetEmailOnStart() {
    this._emailOnStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailOnStartInput() {
    return this._emailOnStart;
  }

  // email_on_success - computed: true, optional: true, required: false
  private _emailOnSuccess?: string[]; 
  public get emailOnSuccess() {
    return cdktf.Fn.tolist(this.getListAttribute('email_on_success'));
  }
  public set emailOnSuccess(value: string[]) {
    this._emailOnSuccess = value;
  }
  public resetEmailOnSuccess() {
    this._emailOnSuccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailOnSuccessInput() {
    return this._emailOnSuccess;
  }

  // encrypt - computed: true, optional: true, required: false
  private _encrypt?: boolean | cdktf.IResolvable; 
  public get encrypt() {
    return this.getBooleanAttribute('encrypt');
  }
  public set encrypt(value: boolean | cdktf.IResolvable) {
    this._encrypt = value;
  }
  public resetEncrypt() {
    this._encrypt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptInput() {
    return this._encrypt;
  }

  // encryption_passphrase_file - computed: true, optional: true, required: false
  private _encryptionPassphraseFile?: string; 
  public get encryptionPassphraseFile() {
    return this.getStringAttribute('encryption_passphrase_file');
  }
  public set encryptionPassphraseFile(value: string) {
    this._encryptionPassphraseFile = value;
  }
  public resetEncryptionPassphraseFile() {
    this._encryptionPassphraseFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionPassphraseFileInput() {
    return this._encryptionPassphraseFile;
  }

  // encryption_settings_definition_id - computed: true, optional: true, required: false
  private _encryptionSettingsDefinitionId?: string; 
  public get encryptionSettingsDefinitionId() {
    return this.getStringAttribute('encryption_settings_definition_id');
  }
  public set encryptionSettingsDefinitionId(value: string) {
    this._encryptionSettingsDefinitionId = value;
  }
  public resetEncryptionSettingsDefinitionId() {
    this._encryptionSettingsDefinitionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionSettingsDefinitionIdInput() {
    return this._encryptionSettingsDefinitionId;
  }

  // exclude_backend_id - computed: true, optional: true, required: false
  private _excludeBackendId?: string[]; 
  public get excludeBackendId() {
    return cdktf.Fn.tolist(this.getListAttribute('exclude_backend_id'));
  }
  public set excludeBackendId(value: string[]) {
    this._excludeBackendId = value;
  }
  public resetExcludeBackendId() {
    this._excludeBackendId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeBackendIdInput() {
    return this._excludeBackendId;
  }

  // excluded_backend_id - computed: true, optional: true, required: false
  private _excludedBackendId?: string[]; 
  public get excludedBackendId() {
    return cdktf.Fn.tolist(this.getListAttribute('excluded_backend_id'));
  }
  public set excludedBackendId(value: string[]) {
    this._excludedBackendId = value;
  }
  public resetExcludedBackendId() {
    this._excludedBackendId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludedBackendIdInput() {
    return this._excludedBackendId;
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

  // extension_class - computed: true, optional: true, required: false
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

  // filename_pattern - computed: true, optional: true, required: false
  private _filenamePattern?: string; 
  public get filenamePattern() {
    return this.getStringAttribute('filename_pattern');
  }
  public set filenamePattern(value: string) {
    this._filenamePattern = value;
  }
  public resetFilenamePattern() {
    this._filenamePattern = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filenamePatternInput() {
    return this._filenamePattern;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // include_binary_files - computed: true, optional: true, required: false
  private _includeBinaryFiles?: boolean | cdktf.IResolvable; 
  public get includeBinaryFiles() {
    return this.getBooleanAttribute('include_binary_files');
  }
  public set includeBinaryFiles(value: boolean | cdktf.IResolvable) {
    this._includeBinaryFiles = value;
  }
  public resetIncludeBinaryFiles() {
    this._includeBinaryFiles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeBinaryFilesInput() {
    return this._includeBinaryFiles;
  }

  // include_expensive_data - computed: true, optional: true, required: false
  private _includeExpensiveData?: boolean | cdktf.IResolvable; 
  public get includeExpensiveData() {
    return this.getBooleanAttribute('include_expensive_data');
  }
  public set includeExpensiveData(value: boolean | cdktf.IResolvable) {
    this._includeExpensiveData = value;
  }
  public resetIncludeExpensiveData() {
    this._includeExpensiveData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeExpensiveDataInput() {
    return this._includeExpensiveData;
  }

  // include_extension_source - computed: true, optional: true, required: false
  private _includeExtensionSource?: boolean | cdktf.IResolvable; 
  public get includeExtensionSource() {
    return this.getBooleanAttribute('include_extension_source');
  }
  public set includeExtensionSource(value: boolean | cdktf.IResolvable) {
    this._includeExtensionSource = value;
  }
  public resetIncludeExtensionSource() {
    this._includeExtensionSource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeExtensionSourceInput() {
    return this._includeExtensionSource;
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

  // include_path - computed: true, optional: true, required: false
  private _includePath?: string[]; 
  public get includePath() {
    return cdktf.Fn.tolist(this.getListAttribute('include_path'));
  }
  public set includePath(value: string[]) {
    this._includePath = value;
  }
  public resetIncludePath() {
    this._includePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includePathInput() {
    return this._includePath;
  }

  // include_replication_state_dump - computed: true, optional: true, required: false
  private _includeReplicationStateDump?: boolean | cdktf.IResolvable; 
  public get includeReplicationStateDump() {
    return this.getBooleanAttribute('include_replication_state_dump');
  }
  public set includeReplicationStateDump(value: boolean | cdktf.IResolvable) {
    this._includeReplicationStateDump = value;
  }
  public resetIncludeReplicationStateDump() {
    this._includeReplicationStateDump = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeReplicationStateDumpInput() {
    return this._includeReplicationStateDump;
  }

  // included_backend_id - computed: true, optional: true, required: false
  private _includedBackendId?: string[]; 
  public get includedBackendId() {
    return cdktf.Fn.tolist(this.getListAttribute('included_backend_id'));
  }
  public set includedBackendId(value: string[]) {
    this._includedBackendId = value;
  }
  public resetIncludedBackendId() {
    this._includedBackendId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includedBackendIdInput() {
    return this._includedBackendId;
  }

  // jstack_count - computed: true, optional: true, required: false
  private _jstackCount?: number; 
  public get jstackCount() {
    return this.getNumberAttribute('jstack_count');
  }
  public set jstackCount(value: number) {
    this._jstackCount = value;
  }
  public resetJstackCount() {
    this._jstackCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jstackCountInput() {
    return this._jstackCount;
  }

  // ldap_url_for_search_expected_to_return_entries - computed: true, optional: true, required: false
  private _ldapUrlForSearchExpectedToReturnEntries?: string[]; 
  public get ldapUrlForSearchExpectedToReturnEntries() {
    return cdktf.Fn.tolist(this.getListAttribute('ldap_url_for_search_expected_to_return_entries'));
  }
  public set ldapUrlForSearchExpectedToReturnEntries(value: string[]) {
    this._ldapUrlForSearchExpectedToReturnEntries = value;
  }
  public resetLdapUrlForSearchExpectedToReturnEntries() {
    this._ldapUrlForSearchExpectedToReturnEntries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ldapUrlForSearchExpectedToReturnEntriesInput() {
    return this._ldapUrlForSearchExpectedToReturnEntries;
  }

  // ldif_directory - computed: true, optional: true, required: false
  private _ldifDirectory?: string; 
  public get ldifDirectory() {
    return this.getStringAttribute('ldif_directory');
  }
  public set ldifDirectory(value: string) {
    this._ldifDirectory = value;
  }
  public resetLdifDirectory() {
    this._ldifDirectory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ldifDirectoryInput() {
    return this._ldifDirectory;
  }

  // log_command_output - computed: true, optional: true, required: false
  private _logCommandOutput?: boolean | cdktf.IResolvable; 
  public get logCommandOutput() {
    return this.getBooleanAttribute('log_command_output');
  }
  public set logCommandOutput(value: boolean | cdktf.IResolvable) {
    this._logCommandOutput = value;
  }
  public resetLogCommandOutput() {
    this._logCommandOutput = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logCommandOutputInput() {
    return this._logCommandOutput;
  }

  // log_duration - computed: true, optional: true, required: false
  private _logDuration?: string; 
  public get logDuration() {
    return this.getStringAttribute('log_duration');
  }
  public set logDuration(value: string) {
    this._logDuration = value;
  }
  public resetLogDuration() {
    this._logDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logDurationInput() {
    return this._logDuration;
  }

  // log_file_head_collection_size - computed: true, optional: true, required: false
  private _logFileHeadCollectionSize?: string; 
  public get logFileHeadCollectionSize() {
    return this.getStringAttribute('log_file_head_collection_size');
  }
  public set logFileHeadCollectionSize(value: string) {
    this._logFileHeadCollectionSize = value;
  }
  public resetLogFileHeadCollectionSize() {
    this._logFileHeadCollectionSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logFileHeadCollectionSizeInput() {
    return this._logFileHeadCollectionSize;
  }

  // log_file_tail_collection_size - computed: true, optional: true, required: false
  private _logFileTailCollectionSize?: string; 
  public get logFileTailCollectionSize() {
    return this.getStringAttribute('log_file_tail_collection_size');
  }
  public set logFileTailCollectionSize(value: string) {
    this._logFileTailCollectionSize = value;
  }
  public resetLogFileTailCollectionSize() {
    this._logFileTailCollectionSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logFileTailCollectionSizeInput() {
    return this._logFileTailCollectionSize;
  }

  // max_megabytes_per_second - computed: true, optional: true, required: false
  private _maxMegabytesPerSecond?: number; 
  public get maxMegabytesPerSecond() {
    return this.getNumberAttribute('max_megabytes_per_second');
  }
  public set maxMegabytesPerSecond(value: number) {
    this._maxMegabytesPerSecond = value;
  }
  public resetMaxMegabytesPerSecond() {
    this._maxMegabytesPerSecond = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxMegabytesPerSecondInput() {
    return this._maxMegabytesPerSecond;
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

  // output_directory - computed: true, optional: true, required: false
  private _outputDirectory?: string; 
  public get outputDirectory() {
    return this.getStringAttribute('output_directory');
  }
  public set outputDirectory(value: string) {
    this._outputDirectory = value;
  }
  public resetOutputDirectory() {
    this._outputDirectory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputDirectoryInput() {
    return this._outputDirectory;
  }

  // post_ldif_export_task_processor - computed: true, optional: true, required: false
  private _postLdifExportTaskProcessor?: string[]; 
  public get postLdifExportTaskProcessor() {
    return cdktf.Fn.tolist(this.getListAttribute('post_ldif_export_task_processor'));
  }
  public set postLdifExportTaskProcessor(value: string[]) {
    this._postLdifExportTaskProcessor = value;
  }
  public resetPostLdifExportTaskProcessor() {
    this._postLdifExportTaskProcessor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postLdifExportTaskProcessorInput() {
    return this._postLdifExportTaskProcessor;
  }

  // profile_directory - computed: true, optional: true, required: false
  private _profileDirectory?: string; 
  public get profileDirectory() {
    return this.getStringAttribute('profile_directory');
  }
  public set profileDirectory(value: string) {
    this._profileDirectory = value;
  }
  public resetProfileDirectory() {
    this._profileDirectory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profileDirectoryInput() {
    return this._profileDirectory;
  }

  // reason - computed: true, optional: true, required: false
  private _reason?: string; 
  public get reason() {
    return this.getStringAttribute('reason');
  }
  public set reason(value: string) {
    this._reason = value;
  }
  public resetReason() {
    this._reason = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reasonInput() {
    return this._reason;
  }

  // report_count - computed: true, optional: true, required: false
  private _reportCount?: number; 
  public get reportCount() {
    return this.getNumberAttribute('report_count');
  }
  public set reportCount(value: number) {
    this._reportCount = value;
  }
  public resetReportCount() {
    this._reportCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reportCountInput() {
    return this._reportCount;
  }

  // report_interval_seconds - computed: true, optional: true, required: false
  private _reportIntervalSeconds?: number; 
  public get reportIntervalSeconds() {
    return this.getNumberAttribute('report_interval_seconds');
  }
  public set reportIntervalSeconds(value: number) {
    this._reportIntervalSeconds = value;
  }
  public resetReportIntervalSeconds() {
    this._reportIntervalSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reportIntervalSecondsInput() {
    return this._reportIntervalSeconds;
  }

  // required_actions - computed: true, optional: false, required: false
  private _requiredActions = new DefaultRecurringTaskRequiredActionsList(this, "required_actions", true);
  public get requiredActions() {
    return this._requiredActions;
  }

  // retain_aggregate_file_size - computed: true, optional: true, required: false
  private _retainAggregateFileSize?: string; 
  public get retainAggregateFileSize() {
    return this.getStringAttribute('retain_aggregate_file_size');
  }
  public set retainAggregateFileSize(value: string) {
    this._retainAggregateFileSize = value;
  }
  public resetRetainAggregateFileSize() {
    this._retainAggregateFileSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retainAggregateFileSizeInput() {
    return this._retainAggregateFileSize;
  }

  // retain_file_age - computed: true, optional: true, required: false
  private _retainFileAge?: string; 
  public get retainFileAge() {
    return this.getStringAttribute('retain_file_age');
  }
  public set retainFileAge(value: string) {
    this._retainFileAge = value;
  }
  public resetRetainFileAge() {
    this._retainFileAge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retainFileAgeInput() {
    return this._retainFileAge;
  }

  // retain_file_count - computed: true, optional: true, required: false
  private _retainFileCount?: number; 
  public get retainFileCount() {
    return this.getNumberAttribute('retain_file_count');
  }
  public set retainFileCount(value: number) {
    this._retainFileCount = value;
  }
  public resetRetainFileCount() {
    this._retainFileCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retainFileCountInput() {
    return this._retainFileCount;
  }

  // retain_previous_full_backup_age - computed: true, optional: true, required: false
  private _retainPreviousFullBackupAge?: string; 
  public get retainPreviousFullBackupAge() {
    return this.getStringAttribute('retain_previous_full_backup_age');
  }
  public set retainPreviousFullBackupAge(value: string) {
    this._retainPreviousFullBackupAge = value;
  }
  public resetRetainPreviousFullBackupAge() {
    this._retainPreviousFullBackupAge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retainPreviousFullBackupAgeInput() {
    return this._retainPreviousFullBackupAge;
  }

  // retain_previous_full_backup_count - computed: true, optional: true, required: false
  private _retainPreviousFullBackupCount?: number; 
  public get retainPreviousFullBackupCount() {
    return this.getNumberAttribute('retain_previous_full_backup_count');
  }
  public set retainPreviousFullBackupCount(value: number) {
    this._retainPreviousFullBackupCount = value;
  }
  public resetRetainPreviousFullBackupCount() {
    this._retainPreviousFullBackupCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retainPreviousFullBackupCountInput() {
    return this._retainPreviousFullBackupCount;
  }

  // retain_previous_ldif_export_age - computed: true, optional: true, required: false
  private _retainPreviousLdifExportAge?: string; 
  public get retainPreviousLdifExportAge() {
    return this.getStringAttribute('retain_previous_ldif_export_age');
  }
  public set retainPreviousLdifExportAge(value: string) {
    this._retainPreviousLdifExportAge = value;
  }
  public resetRetainPreviousLdifExportAge() {
    this._retainPreviousLdifExportAge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retainPreviousLdifExportAgeInput() {
    return this._retainPreviousLdifExportAge;
  }

  // retain_previous_ldif_export_count - computed: true, optional: true, required: false
  private _retainPreviousLdifExportCount?: number; 
  public get retainPreviousLdifExportCount() {
    return this.getNumberAttribute('retain_previous_ldif_export_count');
  }
  public set retainPreviousLdifExportCount(value: number) {
    this._retainPreviousLdifExportCount = value;
  }
  public resetRetainPreviousLdifExportCount() {
    this._retainPreviousLdifExportCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retainPreviousLdifExportCountInput() {
    return this._retainPreviousLdifExportCount;
  }

  // retain_previous_output_file_age - computed: true, optional: true, required: false
  private _retainPreviousOutputFileAge?: string; 
  public get retainPreviousOutputFileAge() {
    return this.getStringAttribute('retain_previous_output_file_age');
  }
  public set retainPreviousOutputFileAge(value: string) {
    this._retainPreviousOutputFileAge = value;
  }
  public resetRetainPreviousOutputFileAge() {
    this._retainPreviousOutputFileAge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retainPreviousOutputFileAgeInput() {
    return this._retainPreviousOutputFileAge;
  }

  // retain_previous_output_file_count - computed: true, optional: true, required: false
  private _retainPreviousOutputFileCount?: number; 
  public get retainPreviousOutputFileCount() {
    return this.getNumberAttribute('retain_previous_output_file_count');
  }
  public set retainPreviousOutputFileCount(value: number) {
    this._retainPreviousOutputFileCount = value;
  }
  public resetRetainPreviousOutputFileCount() {
    this._retainPreviousOutputFileCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retainPreviousOutputFileCountInput() {
    return this._retainPreviousOutputFileCount;
  }

  // retain_previous_profile_age - computed: true, optional: true, required: false
  private _retainPreviousProfileAge?: string; 
  public get retainPreviousProfileAge() {
    return this.getStringAttribute('retain_previous_profile_age');
  }
  public set retainPreviousProfileAge(value: string) {
    this._retainPreviousProfileAge = value;
  }
  public resetRetainPreviousProfileAge() {
    this._retainPreviousProfileAge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retainPreviousProfileAgeInput() {
    return this._retainPreviousProfileAge;
  }

  // retain_previous_profile_count - computed: true, optional: true, required: false
  private _retainPreviousProfileCount?: number; 
  public get retainPreviousProfileCount() {
    return this.getNumberAttribute('retain_previous_profile_count');
  }
  public set retainPreviousProfileCount(value: number) {
    this._retainPreviousProfileCount = value;
  }
  public resetRetainPreviousProfileCount() {
    this._retainPreviousProfileCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retainPreviousProfileCountInput() {
    return this._retainPreviousProfileCount;
  }

  // retain_previous_report_age - computed: true, optional: true, required: false
  private _retainPreviousReportAge?: string; 
  public get retainPreviousReportAge() {
    return this.getStringAttribute('retain_previous_report_age');
  }
  public set retainPreviousReportAge(value: string) {
    this._retainPreviousReportAge = value;
  }
  public resetRetainPreviousReportAge() {
    this._retainPreviousReportAge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retainPreviousReportAgeInput() {
    return this._retainPreviousReportAge;
  }

  // retain_previous_report_count - computed: true, optional: true, required: false
  private _retainPreviousReportCount?: number; 
  public get retainPreviousReportCount() {
    return this.getNumberAttribute('retain_previous_report_count');
  }
  public set retainPreviousReportCount(value: number) {
    this._retainPreviousReportCount = value;
  }
  public resetRetainPreviousReportCount() {
    this._retainPreviousReportCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retainPreviousReportCountInput() {
    return this._retainPreviousReportCount;
  }

  // retain_previous_support_data_archive_age - computed: true, optional: true, required: false
  private _retainPreviousSupportDataArchiveAge?: string; 
  public get retainPreviousSupportDataArchiveAge() {
    return this.getStringAttribute('retain_previous_support_data_archive_age');
  }
  public set retainPreviousSupportDataArchiveAge(value: string) {
    this._retainPreviousSupportDataArchiveAge = value;
  }
  public resetRetainPreviousSupportDataArchiveAge() {
    this._retainPreviousSupportDataArchiveAge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retainPreviousSupportDataArchiveAgeInput() {
    return this._retainPreviousSupportDataArchiveAge;
  }

  // retain_previous_support_data_archive_count - computed: true, optional: true, required: false
  private _retainPreviousSupportDataArchiveCount?: number; 
  public get retainPreviousSupportDataArchiveCount() {
    return this.getNumberAttribute('retain_previous_support_data_archive_count');
  }
  public set retainPreviousSupportDataArchiveCount(value: number) {
    this._retainPreviousSupportDataArchiveCount = value;
  }
  public resetRetainPreviousSupportDataArchiveCount() {
    this._retainPreviousSupportDataArchiveCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retainPreviousSupportDataArchiveCountInput() {
    return this._retainPreviousSupportDataArchiveCount;
  }

  // search_interval - computed: true, optional: true, required: false
  private _searchInterval?: string; 
  public get searchInterval() {
    return this.getStringAttribute('search_interval');
  }
  public set searchInterval(value: string) {
    this._searchInterval = value;
  }
  public resetSearchInterval() {
    this._searchInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchIntervalInput() {
    return this._searchInterval;
  }

  // search_time_limit - computed: true, optional: true, required: false
  private _searchTimeLimit?: string; 
  public get searchTimeLimit() {
    return this.getStringAttribute('search_time_limit');
  }
  public set searchTimeLimit(value: string) {
    this._searchTimeLimit = value;
  }
  public resetSearchTimeLimit() {
    this._searchTimeLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchTimeLimitInput() {
    return this._searchTimeLimit;
  }

  // security_level - computed: true, optional: true, required: false
  private _securityLevel?: string; 
  public get securityLevel() {
    return this.getStringAttribute('security_level');
  }
  public set securityLevel(value: string) {
    this._securityLevel = value;
  }
  public resetSecurityLevel() {
    this._securityLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityLevelInput() {
    return this._securityLevel;
  }

  // sign - computed: true, optional: true, required: false
  private _sign?: boolean | cdktf.IResolvable; 
  public get sign() {
    return this.getBooleanAttribute('sign');
  }
  public set sign(value: boolean | cdktf.IResolvable) {
    this._sign = value;
  }
  public resetSign() {
    this._sign = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signInput() {
    return this._sign;
  }

  // sleep_duration - computed: true, optional: true, required: false
  private _sleepDuration?: string; 
  public get sleepDuration() {
    return this.getStringAttribute('sleep_duration');
  }
  public set sleepDuration(value: string) {
    this._sleepDuration = value;
  }
  public resetSleepDuration() {
    this._sleepDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sleepDurationInput() {
    return this._sleepDuration;
  }

  // target_directory - computed: true, optional: true, required: false
  private _targetDirectory?: string; 
  public get targetDirectory() {
    return this.getStringAttribute('target_directory');
  }
  public set targetDirectory(value: string) {
    this._targetDirectory = value;
  }
  public resetTargetDirectory() {
    this._targetDirectory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetDirectoryInput() {
    return this._targetDirectory;
  }

  // task_attribute_value - computed: true, optional: true, required: false
  private _taskAttributeValue?: string[]; 
  public get taskAttributeValue() {
    return cdktf.Fn.tolist(this.getListAttribute('task_attribute_value'));
  }
  public set taskAttributeValue(value: string[]) {
    this._taskAttributeValue = value;
  }
  public resetTaskAttributeValue() {
    this._taskAttributeValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taskAttributeValueInput() {
    return this._taskAttributeValue;
  }

  // task_completion_state_for_nonzero_exit_code - computed: true, optional: true, required: false
  private _taskCompletionStateForNonzeroExitCode?: string; 
  public get taskCompletionStateForNonzeroExitCode() {
    return this.getStringAttribute('task_completion_state_for_nonzero_exit_code');
  }
  public set taskCompletionStateForNonzeroExitCode(value: string) {
    this._taskCompletionStateForNonzeroExitCode = value;
  }
  public resetTaskCompletionStateForNonzeroExitCode() {
    this._taskCompletionStateForNonzeroExitCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taskCompletionStateForNonzeroExitCodeInput() {
    return this._taskCompletionStateForNonzeroExitCode;
  }

  // task_java_class - computed: true, optional: true, required: false
  private _taskJavaClass?: string; 
  public get taskJavaClass() {
    return this.getStringAttribute('task_java_class');
  }
  public set taskJavaClass(value: string) {
    this._taskJavaClass = value;
  }
  public resetTaskJavaClass() {
    this._taskJavaClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taskJavaClassInput() {
    return this._taskJavaClass;
  }

  // task_object_class - computed: true, optional: true, required: false
  private _taskObjectClass?: string[]; 
  public get taskObjectClass() {
    return cdktf.Fn.tolist(this.getListAttribute('task_object_class'));
  }
  public set taskObjectClass(value: string[]) {
    this._taskObjectClass = value;
  }
  public resetTaskObjectClass() {
    this._taskObjectClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taskObjectClassInput() {
    return this._taskObjectClass;
  }

  // task_return_state_if_timeout_is_encountered - computed: true, optional: true, required: false
  private _taskReturnStateIfTimeoutIsEncountered?: string; 
  public get taskReturnStateIfTimeoutIsEncountered() {
    return this.getStringAttribute('task_return_state_if_timeout_is_encountered');
  }
  public set taskReturnStateIfTimeoutIsEncountered(value: string) {
    this._taskReturnStateIfTimeoutIsEncountered = value;
  }
  public resetTaskReturnStateIfTimeoutIsEncountered() {
    this._taskReturnStateIfTimeoutIsEncountered = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taskReturnStateIfTimeoutIsEncounteredInput() {
    return this._taskReturnStateIfTimeoutIsEncountered;
  }

  // timestamp_format - computed: true, optional: true, required: false
  private _timestampFormat?: string; 
  public get timestampFormat() {
    return this.getStringAttribute('timestamp_format');
  }
  public set timestampFormat(value: string) {
    this._timestampFormat = value;
  }
  public resetTimestampFormat() {
    this._timestampFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timestampFormatInput() {
    return this._timestampFormat;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // use_sequential_mode - computed: true, optional: true, required: false
  private _useSequentialMode?: boolean | cdktf.IResolvable; 
  public get useSequentialMode() {
    return this.getBooleanAttribute('use_sequential_mode');
  }
  public set useSequentialMode(value: boolean | cdktf.IResolvable) {
    this._useSequentialMode = value;
  }
  public resetUseSequentialMode() {
    this._useSequentialMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useSequentialModeInput() {
    return this._useSequentialMode;
  }

  // working_directory - computed: true, optional: true, required: false
  private _workingDirectory?: string; 
  public get workingDirectory() {
    return this.getStringAttribute('working_directory');
  }
  public set workingDirectory(value: string) {
    this._workingDirectory = value;
  }
  public resetWorkingDirectory() {
    this._workingDirectory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workingDirectoryInput() {
    return this._workingDirectory;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      alert_on_failure: cdktf.booleanToTerraform(this._alertOnFailure),
      alert_on_start: cdktf.booleanToTerraform(this._alertOnStart),
      alert_on_success: cdktf.booleanToTerraform(this._alertOnSuccess),
      backend: cdktf.listMapper(cdktf.stringToTerraform, false)(this._backend),
      backend_id: cdktf.listMapper(cdktf.stringToTerraform, false)(this._backendId),
      backup_directory: cdktf.stringToTerraform(this._backupDirectory),
      base_output_directory: cdktf.stringToTerraform(this._baseOutputDirectory),
      cancel_on_task_dependency_failure: cdktf.booleanToTerraform(this._cancelOnTaskDependencyFailure),
      command_arguments: cdktf.stringToTerraform(this._commandArguments),
      command_output_file_base_name: cdktf.stringToTerraform(this._commandOutputFileBaseName),
      command_path: cdktf.stringToTerraform(this._commandPath),
      comment: cdktf.stringToTerraform(this._comment),
      compress: cdktf.booleanToTerraform(this._compress),
      data_security_auditor: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dataSecurityAuditor),
      description: cdktf.stringToTerraform(this._description),
      duration_to_wait_for_search_to_return_entries: cdktf.stringToTerraform(this._durationToWaitForSearchToReturnEntries),
      duration_to_wait_for_work_queue_idle: cdktf.stringToTerraform(this._durationToWaitForWorkQueueIdle),
      email_on_failure: cdktf.listMapper(cdktf.stringToTerraform, false)(this._emailOnFailure),
      email_on_start: cdktf.listMapper(cdktf.stringToTerraform, false)(this._emailOnStart),
      email_on_success: cdktf.listMapper(cdktf.stringToTerraform, false)(this._emailOnSuccess),
      encrypt: cdktf.booleanToTerraform(this._encrypt),
      encryption_passphrase_file: cdktf.stringToTerraform(this._encryptionPassphraseFile),
      encryption_settings_definition_id: cdktf.stringToTerraform(this._encryptionSettingsDefinitionId),
      exclude_backend_id: cdktf.listMapper(cdktf.stringToTerraform, false)(this._excludeBackendId),
      excluded_backend_id: cdktf.listMapper(cdktf.stringToTerraform, false)(this._excludedBackendId),
      extension_argument: cdktf.listMapper(cdktf.stringToTerraform, false)(this._extensionArgument),
      extension_class: cdktf.stringToTerraform(this._extensionClass),
      filename_pattern: cdktf.stringToTerraform(this._filenamePattern),
      include_binary_files: cdktf.booleanToTerraform(this._includeBinaryFiles),
      include_expensive_data: cdktf.booleanToTerraform(this._includeExpensiveData),
      include_extension_source: cdktf.booleanToTerraform(this._includeExtensionSource),
      include_filter: cdktf.listMapper(cdktf.stringToTerraform, false)(this._includeFilter),
      include_path: cdktf.listMapper(cdktf.stringToTerraform, false)(this._includePath),
      include_replication_state_dump: cdktf.booleanToTerraform(this._includeReplicationStateDump),
      included_backend_id: cdktf.listMapper(cdktf.stringToTerraform, false)(this._includedBackendId),
      jstack_count: cdktf.numberToTerraform(this._jstackCount),
      ldap_url_for_search_expected_to_return_entries: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ldapUrlForSearchExpectedToReturnEntries),
      ldif_directory: cdktf.stringToTerraform(this._ldifDirectory),
      log_command_output: cdktf.booleanToTerraform(this._logCommandOutput),
      log_duration: cdktf.stringToTerraform(this._logDuration),
      log_file_head_collection_size: cdktf.stringToTerraform(this._logFileHeadCollectionSize),
      log_file_tail_collection_size: cdktf.stringToTerraform(this._logFileTailCollectionSize),
      max_megabytes_per_second: cdktf.numberToTerraform(this._maxMegabytesPerSecond),
      name: cdktf.stringToTerraform(this._name),
      output_directory: cdktf.stringToTerraform(this._outputDirectory),
      post_ldif_export_task_processor: cdktf.listMapper(cdktf.stringToTerraform, false)(this._postLdifExportTaskProcessor),
      profile_directory: cdktf.stringToTerraform(this._profileDirectory),
      reason: cdktf.stringToTerraform(this._reason),
      report_count: cdktf.numberToTerraform(this._reportCount),
      report_interval_seconds: cdktf.numberToTerraform(this._reportIntervalSeconds),
      retain_aggregate_file_size: cdktf.stringToTerraform(this._retainAggregateFileSize),
      retain_file_age: cdktf.stringToTerraform(this._retainFileAge),
      retain_file_count: cdktf.numberToTerraform(this._retainFileCount),
      retain_previous_full_backup_age: cdktf.stringToTerraform(this._retainPreviousFullBackupAge),
      retain_previous_full_backup_count: cdktf.numberToTerraform(this._retainPreviousFullBackupCount),
      retain_previous_ldif_export_age: cdktf.stringToTerraform(this._retainPreviousLdifExportAge),
      retain_previous_ldif_export_count: cdktf.numberToTerraform(this._retainPreviousLdifExportCount),
      retain_previous_output_file_age: cdktf.stringToTerraform(this._retainPreviousOutputFileAge),
      retain_previous_output_file_count: cdktf.numberToTerraform(this._retainPreviousOutputFileCount),
      retain_previous_profile_age: cdktf.stringToTerraform(this._retainPreviousProfileAge),
      retain_previous_profile_count: cdktf.numberToTerraform(this._retainPreviousProfileCount),
      retain_previous_report_age: cdktf.stringToTerraform(this._retainPreviousReportAge),
      retain_previous_report_count: cdktf.numberToTerraform(this._retainPreviousReportCount),
      retain_previous_support_data_archive_age: cdktf.stringToTerraform(this._retainPreviousSupportDataArchiveAge),
      retain_previous_support_data_archive_count: cdktf.numberToTerraform(this._retainPreviousSupportDataArchiveCount),
      search_interval: cdktf.stringToTerraform(this._searchInterval),
      search_time_limit: cdktf.stringToTerraform(this._searchTimeLimit),
      security_level: cdktf.stringToTerraform(this._securityLevel),
      sign: cdktf.booleanToTerraform(this._sign),
      sleep_duration: cdktf.stringToTerraform(this._sleepDuration),
      target_directory: cdktf.stringToTerraform(this._targetDirectory),
      task_attribute_value: cdktf.listMapper(cdktf.stringToTerraform, false)(this._taskAttributeValue),
      task_completion_state_for_nonzero_exit_code: cdktf.stringToTerraform(this._taskCompletionStateForNonzeroExitCode),
      task_java_class: cdktf.stringToTerraform(this._taskJavaClass),
      task_object_class: cdktf.listMapper(cdktf.stringToTerraform, false)(this._taskObjectClass),
      task_return_state_if_timeout_is_encountered: cdktf.stringToTerraform(this._taskReturnStateIfTimeoutIsEncountered),
      timestamp_format: cdktf.stringToTerraform(this._timestampFormat),
      use_sequential_mode: cdktf.booleanToTerraform(this._useSequentialMode),
      working_directory: cdktf.stringToTerraform(this._workingDirectory),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      alert_on_failure: {
        value: cdktf.booleanToHclTerraform(this._alertOnFailure),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      alert_on_start: {
        value: cdktf.booleanToHclTerraform(this._alertOnStart),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      alert_on_success: {
        value: cdktf.booleanToHclTerraform(this._alertOnSuccess),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      backend: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._backend),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      backend_id: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._backendId),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      backup_directory: {
        value: cdktf.stringToHclTerraform(this._backupDirectory),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      base_output_directory: {
        value: cdktf.stringToHclTerraform(this._baseOutputDirectory),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cancel_on_task_dependency_failure: {
        value: cdktf.booleanToHclTerraform(this._cancelOnTaskDependencyFailure),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      command_arguments: {
        value: cdktf.stringToHclTerraform(this._commandArguments),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      command_output_file_base_name: {
        value: cdktf.stringToHclTerraform(this._commandOutputFileBaseName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      command_path: {
        value: cdktf.stringToHclTerraform(this._commandPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      comment: {
        value: cdktf.stringToHclTerraform(this._comment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      compress: {
        value: cdktf.booleanToHclTerraform(this._compress),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      data_security_auditor: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dataSecurityAuditor),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      duration_to_wait_for_search_to_return_entries: {
        value: cdktf.stringToHclTerraform(this._durationToWaitForSearchToReturnEntries),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      duration_to_wait_for_work_queue_idle: {
        value: cdktf.stringToHclTerraform(this._durationToWaitForWorkQueueIdle),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      email_on_failure: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._emailOnFailure),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      email_on_start: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._emailOnStart),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      email_on_success: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._emailOnSuccess),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      encrypt: {
        value: cdktf.booleanToHclTerraform(this._encrypt),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      encryption_passphrase_file: {
        value: cdktf.stringToHclTerraform(this._encryptionPassphraseFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      encryption_settings_definition_id: {
        value: cdktf.stringToHclTerraform(this._encryptionSettingsDefinitionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      exclude_backend_id: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._excludeBackendId),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      excluded_backend_id: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._excludedBackendId),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
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
      filename_pattern: {
        value: cdktf.stringToHclTerraform(this._filenamePattern),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      include_binary_files: {
        value: cdktf.booleanToHclTerraform(this._includeBinaryFiles),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      include_expensive_data: {
        value: cdktf.booleanToHclTerraform(this._includeExpensiveData),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      include_extension_source: {
        value: cdktf.booleanToHclTerraform(this._includeExtensionSource),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      include_filter: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._includeFilter),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      include_path: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._includePath),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      include_replication_state_dump: {
        value: cdktf.booleanToHclTerraform(this._includeReplicationStateDump),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      included_backend_id: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._includedBackendId),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      jstack_count: {
        value: cdktf.numberToHclTerraform(this._jstackCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ldap_url_for_search_expected_to_return_entries: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ldapUrlForSearchExpectedToReturnEntries),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      ldif_directory: {
        value: cdktf.stringToHclTerraform(this._ldifDirectory),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_command_output: {
        value: cdktf.booleanToHclTerraform(this._logCommandOutput),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      log_duration: {
        value: cdktf.stringToHclTerraform(this._logDuration),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_file_head_collection_size: {
        value: cdktf.stringToHclTerraform(this._logFileHeadCollectionSize),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_file_tail_collection_size: {
        value: cdktf.stringToHclTerraform(this._logFileTailCollectionSize),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_megabytes_per_second: {
        value: cdktf.numberToHclTerraform(this._maxMegabytesPerSecond),
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
      output_directory: {
        value: cdktf.stringToHclTerraform(this._outputDirectory),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      post_ldif_export_task_processor: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._postLdifExportTaskProcessor),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      profile_directory: {
        value: cdktf.stringToHclTerraform(this._profileDirectory),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      reason: {
        value: cdktf.stringToHclTerraform(this._reason),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      report_count: {
        value: cdktf.numberToHclTerraform(this._reportCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      report_interval_seconds: {
        value: cdktf.numberToHclTerraform(this._reportIntervalSeconds),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      retain_aggregate_file_size: {
        value: cdktf.stringToHclTerraform(this._retainAggregateFileSize),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      retain_file_age: {
        value: cdktf.stringToHclTerraform(this._retainFileAge),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      retain_file_count: {
        value: cdktf.numberToHclTerraform(this._retainFileCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      retain_previous_full_backup_age: {
        value: cdktf.stringToHclTerraform(this._retainPreviousFullBackupAge),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      retain_previous_full_backup_count: {
        value: cdktf.numberToHclTerraform(this._retainPreviousFullBackupCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      retain_previous_ldif_export_age: {
        value: cdktf.stringToHclTerraform(this._retainPreviousLdifExportAge),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      retain_previous_ldif_export_count: {
        value: cdktf.numberToHclTerraform(this._retainPreviousLdifExportCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      retain_previous_output_file_age: {
        value: cdktf.stringToHclTerraform(this._retainPreviousOutputFileAge),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      retain_previous_output_file_count: {
        value: cdktf.numberToHclTerraform(this._retainPreviousOutputFileCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      retain_previous_profile_age: {
        value: cdktf.stringToHclTerraform(this._retainPreviousProfileAge),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      retain_previous_profile_count: {
        value: cdktf.numberToHclTerraform(this._retainPreviousProfileCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      retain_previous_report_age: {
        value: cdktf.stringToHclTerraform(this._retainPreviousReportAge),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      retain_previous_report_count: {
        value: cdktf.numberToHclTerraform(this._retainPreviousReportCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      retain_previous_support_data_archive_age: {
        value: cdktf.stringToHclTerraform(this._retainPreviousSupportDataArchiveAge),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      retain_previous_support_data_archive_count: {
        value: cdktf.numberToHclTerraform(this._retainPreviousSupportDataArchiveCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      search_interval: {
        value: cdktf.stringToHclTerraform(this._searchInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      search_time_limit: {
        value: cdktf.stringToHclTerraform(this._searchTimeLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      security_level: {
        value: cdktf.stringToHclTerraform(this._securityLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sign: {
        value: cdktf.booleanToHclTerraform(this._sign),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      sleep_duration: {
        value: cdktf.stringToHclTerraform(this._sleepDuration),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      target_directory: {
        value: cdktf.stringToHclTerraform(this._targetDirectory),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      task_attribute_value: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._taskAttributeValue),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      task_completion_state_for_nonzero_exit_code: {
        value: cdktf.stringToHclTerraform(this._taskCompletionStateForNonzeroExitCode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      task_java_class: {
        value: cdktf.stringToHclTerraform(this._taskJavaClass),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      task_object_class: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._taskObjectClass),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      task_return_state_if_timeout_is_encountered: {
        value: cdktf.stringToHclTerraform(this._taskReturnStateIfTimeoutIsEncountered),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timestamp_format: {
        value: cdktf.stringToHclTerraform(this._timestampFormat),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      use_sequential_mode: {
        value: cdktf.booleanToHclTerraform(this._useSequentialMode),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      working_directory: {
        value: cdktf.stringToHclTerraform(this._workingDirectory),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
