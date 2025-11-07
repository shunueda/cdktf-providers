// https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/recurring_task
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataPingdirectoryRecurringTaskConfig extends cdktf.TerraformMetaArguments {
  /**
  * Name of this config object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/recurring_task#name DataPingdirectoryRecurringTask#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/recurring_task pingdirectory_recurring_task}
*/
export class DataPingdirectoryRecurringTask extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingdirectory_recurring_task";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataPingdirectoryRecurringTask resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataPingdirectoryRecurringTask to import
  * @param importFromId The id of the existing DataPingdirectoryRecurringTask that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/recurring_task#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataPingdirectoryRecurringTask to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingdirectory_recurring_task", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/recurring_task pingdirectory_recurring_task} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataPingdirectoryRecurringTaskConfig
  */
  public constructor(scope: Construct, id: string, config: DataPingdirectoryRecurringTaskConfig) {
    super(scope, id, {
      terraformResourceType: 'pingdirectory_recurring_task',
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
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alert_on_failure - computed: true, optional: false, required: false
  public get alertOnFailure() {
    return this.getBooleanAttribute('alert_on_failure');
  }

  // alert_on_start - computed: true, optional: false, required: false
  public get alertOnStart() {
    return this.getBooleanAttribute('alert_on_start');
  }

  // alert_on_success - computed: true, optional: false, required: false
  public get alertOnSuccess() {
    return this.getBooleanAttribute('alert_on_success');
  }

  // backend - computed: true, optional: false, required: false
  public get backend() {
    return cdktf.Fn.tolist(this.getListAttribute('backend'));
  }

  // backend_id - computed: true, optional: false, required: false
  public get backendId() {
    return cdktf.Fn.tolist(this.getListAttribute('backend_id'));
  }

  // backup_directory - computed: true, optional: false, required: false
  public get backupDirectory() {
    return this.getStringAttribute('backup_directory');
  }

  // base_output_directory - computed: true, optional: false, required: false
  public get baseOutputDirectory() {
    return this.getStringAttribute('base_output_directory');
  }

  // cancel_on_task_dependency_failure - computed: true, optional: false, required: false
  public get cancelOnTaskDependencyFailure() {
    return this.getBooleanAttribute('cancel_on_task_dependency_failure');
  }

  // command_arguments - computed: true, optional: false, required: false
  public get commandArguments() {
    return this.getStringAttribute('command_arguments');
  }

  // command_output_file_base_name - computed: true, optional: false, required: false
  public get commandOutputFileBaseName() {
    return this.getStringAttribute('command_output_file_base_name');
  }

  // command_path - computed: true, optional: false, required: false
  public get commandPath() {
    return this.getStringAttribute('command_path');
  }

  // comment - computed: true, optional: false, required: false
  public get comment() {
    return this.getStringAttribute('comment');
  }

  // compress - computed: true, optional: false, required: false
  public get compress() {
    return this.getBooleanAttribute('compress');
  }

  // data_security_auditor - computed: true, optional: false, required: false
  public get dataSecurityAuditor() {
    return cdktf.Fn.tolist(this.getListAttribute('data_security_auditor'));
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // duration_to_wait_for_search_to_return_entries - computed: true, optional: false, required: false
  public get durationToWaitForSearchToReturnEntries() {
    return this.getStringAttribute('duration_to_wait_for_search_to_return_entries');
  }

  // duration_to_wait_for_work_queue_idle - computed: true, optional: false, required: false
  public get durationToWaitForWorkQueueIdle() {
    return this.getStringAttribute('duration_to_wait_for_work_queue_idle');
  }

  // email_on_failure - computed: true, optional: false, required: false
  public get emailOnFailure() {
    return cdktf.Fn.tolist(this.getListAttribute('email_on_failure'));
  }

  // email_on_start - computed: true, optional: false, required: false
  public get emailOnStart() {
    return cdktf.Fn.tolist(this.getListAttribute('email_on_start'));
  }

  // email_on_success - computed: true, optional: false, required: false
  public get emailOnSuccess() {
    return cdktf.Fn.tolist(this.getListAttribute('email_on_success'));
  }

  // encrypt - computed: true, optional: false, required: false
  public get encrypt() {
    return this.getBooleanAttribute('encrypt');
  }

  // encryption_passphrase_file - computed: true, optional: false, required: false
  public get encryptionPassphraseFile() {
    return this.getStringAttribute('encryption_passphrase_file');
  }

  // encryption_settings_definition_id - computed: true, optional: false, required: false
  public get encryptionSettingsDefinitionId() {
    return this.getStringAttribute('encryption_settings_definition_id');
  }

  // exclude_backend_id - computed: true, optional: false, required: false
  public get excludeBackendId() {
    return cdktf.Fn.tolist(this.getListAttribute('exclude_backend_id'));
  }

  // excluded_backend_id - computed: true, optional: false, required: false
  public get excludedBackendId() {
    return cdktf.Fn.tolist(this.getListAttribute('excluded_backend_id'));
  }

  // extension_argument - computed: true, optional: false, required: false
  public get extensionArgument() {
    return cdktf.Fn.tolist(this.getListAttribute('extension_argument'));
  }

  // extension_class - computed: true, optional: false, required: false
  public get extensionClass() {
    return this.getStringAttribute('extension_class');
  }

  // filename_pattern - computed: true, optional: false, required: false
  public get filenamePattern() {
    return this.getStringAttribute('filename_pattern');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // include_binary_files - computed: true, optional: false, required: false
  public get includeBinaryFiles() {
    return this.getBooleanAttribute('include_binary_files');
  }

  // include_expensive_data - computed: true, optional: false, required: false
  public get includeExpensiveData() {
    return this.getBooleanAttribute('include_expensive_data');
  }

  // include_extension_source - computed: true, optional: false, required: false
  public get includeExtensionSource() {
    return this.getBooleanAttribute('include_extension_source');
  }

  // include_filter - computed: true, optional: false, required: false
  public get includeFilter() {
    return cdktf.Fn.tolist(this.getListAttribute('include_filter'));
  }

  // include_path - computed: true, optional: false, required: false
  public get includePath() {
    return cdktf.Fn.tolist(this.getListAttribute('include_path'));
  }

  // include_replication_state_dump - computed: true, optional: false, required: false
  public get includeReplicationStateDump() {
    return this.getBooleanAttribute('include_replication_state_dump');
  }

  // included_backend_id - computed: true, optional: false, required: false
  public get includedBackendId() {
    return cdktf.Fn.tolist(this.getListAttribute('included_backend_id'));
  }

  // jstack_count - computed: true, optional: false, required: false
  public get jstackCount() {
    return this.getNumberAttribute('jstack_count');
  }

  // ldap_url_for_search_expected_to_return_entries - computed: true, optional: false, required: false
  public get ldapUrlForSearchExpectedToReturnEntries() {
    return cdktf.Fn.tolist(this.getListAttribute('ldap_url_for_search_expected_to_return_entries'));
  }

  // ldif_directory - computed: true, optional: false, required: false
  public get ldifDirectory() {
    return this.getStringAttribute('ldif_directory');
  }

  // log_command_output - computed: true, optional: false, required: false
  public get logCommandOutput() {
    return this.getBooleanAttribute('log_command_output');
  }

  // log_duration - computed: true, optional: false, required: false
  public get logDuration() {
    return this.getStringAttribute('log_duration');
  }

  // log_file_head_collection_size - computed: true, optional: false, required: false
  public get logFileHeadCollectionSize() {
    return this.getStringAttribute('log_file_head_collection_size');
  }

  // log_file_tail_collection_size - computed: true, optional: false, required: false
  public get logFileTailCollectionSize() {
    return this.getStringAttribute('log_file_tail_collection_size');
  }

  // max_megabytes_per_second - computed: true, optional: false, required: false
  public get maxMegabytesPerSecond() {
    return this.getNumberAttribute('max_megabytes_per_second');
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

  // output_directory - computed: true, optional: false, required: false
  public get outputDirectory() {
    return this.getStringAttribute('output_directory');
  }

  // post_ldif_export_task_processor - computed: true, optional: false, required: false
  public get postLdifExportTaskProcessor() {
    return cdktf.Fn.tolist(this.getListAttribute('post_ldif_export_task_processor'));
  }

  // profile_directory - computed: true, optional: false, required: false
  public get profileDirectory() {
    return this.getStringAttribute('profile_directory');
  }

  // reason - computed: true, optional: false, required: false
  public get reason() {
    return this.getStringAttribute('reason');
  }

  // report_count - computed: true, optional: false, required: false
  public get reportCount() {
    return this.getNumberAttribute('report_count');
  }

  // report_interval_seconds - computed: true, optional: false, required: false
  public get reportIntervalSeconds() {
    return this.getNumberAttribute('report_interval_seconds');
  }

  // retain_aggregate_file_size - computed: true, optional: false, required: false
  public get retainAggregateFileSize() {
    return this.getStringAttribute('retain_aggregate_file_size');
  }

  // retain_file_age - computed: true, optional: false, required: false
  public get retainFileAge() {
    return this.getStringAttribute('retain_file_age');
  }

  // retain_file_count - computed: true, optional: false, required: false
  public get retainFileCount() {
    return this.getNumberAttribute('retain_file_count');
  }

  // retain_previous_full_backup_age - computed: true, optional: false, required: false
  public get retainPreviousFullBackupAge() {
    return this.getStringAttribute('retain_previous_full_backup_age');
  }

  // retain_previous_full_backup_count - computed: true, optional: false, required: false
  public get retainPreviousFullBackupCount() {
    return this.getNumberAttribute('retain_previous_full_backup_count');
  }

  // retain_previous_ldif_export_age - computed: true, optional: false, required: false
  public get retainPreviousLdifExportAge() {
    return this.getStringAttribute('retain_previous_ldif_export_age');
  }

  // retain_previous_ldif_export_count - computed: true, optional: false, required: false
  public get retainPreviousLdifExportCount() {
    return this.getNumberAttribute('retain_previous_ldif_export_count');
  }

  // retain_previous_output_file_age - computed: true, optional: false, required: false
  public get retainPreviousOutputFileAge() {
    return this.getStringAttribute('retain_previous_output_file_age');
  }

  // retain_previous_output_file_count - computed: true, optional: false, required: false
  public get retainPreviousOutputFileCount() {
    return this.getNumberAttribute('retain_previous_output_file_count');
  }

  // retain_previous_profile_age - computed: true, optional: false, required: false
  public get retainPreviousProfileAge() {
    return this.getStringAttribute('retain_previous_profile_age');
  }

  // retain_previous_profile_count - computed: true, optional: false, required: false
  public get retainPreviousProfileCount() {
    return this.getNumberAttribute('retain_previous_profile_count');
  }

  // retain_previous_report_age - computed: true, optional: false, required: false
  public get retainPreviousReportAge() {
    return this.getStringAttribute('retain_previous_report_age');
  }

  // retain_previous_report_count - computed: true, optional: false, required: false
  public get retainPreviousReportCount() {
    return this.getNumberAttribute('retain_previous_report_count');
  }

  // retain_previous_support_data_archive_age - computed: true, optional: false, required: false
  public get retainPreviousSupportDataArchiveAge() {
    return this.getStringAttribute('retain_previous_support_data_archive_age');
  }

  // retain_previous_support_data_archive_count - computed: true, optional: false, required: false
  public get retainPreviousSupportDataArchiveCount() {
    return this.getNumberAttribute('retain_previous_support_data_archive_count');
  }

  // search_interval - computed: true, optional: false, required: false
  public get searchInterval() {
    return this.getStringAttribute('search_interval');
  }

  // search_time_limit - computed: true, optional: false, required: false
  public get searchTimeLimit() {
    return this.getStringAttribute('search_time_limit');
  }

  // security_level - computed: true, optional: false, required: false
  public get securityLevel() {
    return this.getStringAttribute('security_level');
  }

  // sign - computed: true, optional: false, required: false
  public get sign() {
    return this.getBooleanAttribute('sign');
  }

  // sleep_duration - computed: true, optional: false, required: false
  public get sleepDuration() {
    return this.getStringAttribute('sleep_duration');
  }

  // target_directory - computed: true, optional: false, required: false
  public get targetDirectory() {
    return this.getStringAttribute('target_directory');
  }

  // task_attribute_value - computed: true, optional: false, required: false
  public get taskAttributeValue() {
    return cdktf.Fn.tolist(this.getListAttribute('task_attribute_value'));
  }

  // task_completion_state_for_nonzero_exit_code - computed: true, optional: false, required: false
  public get taskCompletionStateForNonzeroExitCode() {
    return this.getStringAttribute('task_completion_state_for_nonzero_exit_code');
  }

  // task_java_class - computed: true, optional: false, required: false
  public get taskJavaClass() {
    return this.getStringAttribute('task_java_class');
  }

  // task_object_class - computed: true, optional: false, required: false
  public get taskObjectClass() {
    return cdktf.Fn.tolist(this.getListAttribute('task_object_class'));
  }

  // task_return_state_if_timeout_is_encountered - computed: true, optional: false, required: false
  public get taskReturnStateIfTimeoutIsEncountered() {
    return this.getStringAttribute('task_return_state_if_timeout_is_encountered');
  }

  // timestamp_format - computed: true, optional: false, required: false
  public get timestampFormat() {
    return this.getStringAttribute('timestamp_format');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // use_sequential_mode - computed: true, optional: false, required: false
  public get useSequentialMode() {
    return this.getBooleanAttribute('use_sequential_mode');
  }

  // working_directory - computed: true, optional: false, required: false
  public get workingDirectory() {
    return this.getStringAttribute('working_directory');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
