// https://registry.terraform.io/providers/shorelinesoftware/shoreline/1.15.38/docs/resources/system_settings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemSettingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * System setting controlling if administrators can create users. Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shorelinesoftware/shoreline/1.15.38/docs/resources/system_settings#administrator_grants_create_user SystemSettings#administrator_grants_create_user}
  */
  readonly administratorGrantsCreateUser?: boolean | cdktf.IResolvable;
  /**
  * System setting controlling if administrators can create user access tokens. Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shorelinesoftware/shoreline/1.15.38/docs/resources/system_settings#administrator_grants_create_user_token SystemSettings#administrator_grants_create_user_token}
  */
  readonly administratorGrantsCreateUserToken?: boolean | cdktf.IResolvable;
  /**
  * System setting controlling if administrators can view user access tokens. Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shorelinesoftware/shoreline/1.15.38/docs/resources/system_settings#administrator_grants_read_user_token SystemSettings#administrator_grants_read_user_token}
  */
  readonly administratorGrantsReadUserToken?: boolean | cdktf.IResolvable;
  /**
  * System setting controlling if administrators can update user access tokens. Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shorelinesoftware/shoreline/1.15.38/docs/resources/system_settings#administrator_grants_regenerate_user_token SystemSettings#administrator_grants_regenerate_user_token}
  */
  readonly administratorGrantsRegenerateUserToken?: boolean | cdktf.IResolvable;
  /**
  * Defines a list of tags that are allowed on agent tag ingestion
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shorelinesoftware/shoreline/1.15.38/docs/resources/system_settings#allowed_tags SystemSettings#allowed_tags}
  */
  readonly allowedTags?: string[];
  /**
  * System setting controlling if approvals notifications are sent to individual users, in case no specific notebook communication setting is defined. Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shorelinesoftware/shoreline/1.15.38/docs/resources/system_settings#approval_allow_individual_notification SystemSettings#approval_allow_individual_notification}
  */
  readonly approvalAllowIndividualNotification?: boolean | cdktf.IResolvable;
  /**
  * System setting controlling if notebook resource queries can be modified on approved executions. Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shorelinesoftware/shoreline/1.15.38/docs/resources/system_settings#approval_editable_allowed_resource_query_enabled SystemSettings#approval_editable_allowed_resource_query_enabled}
  */
  readonly approvalEditableAllowedResourceQueryEnabled?: boolean | cdktf.IResolvable;
  /**
  * System setting controlling if notebook approvals are enabled. Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shorelinesoftware/shoreline/1.15.38/docs/resources/system_settings#approval_feature_enabled SystemSettings#approval_feature_enabled}
  */
  readonly approvalFeatureEnabled?: boolean | cdktf.IResolvable;
  /**
  * System setting controlling if the ticket url is optional when creating an approval request. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shorelinesoftware/shoreline/1.15.38/docs/resources/system_settings#approval_optional_request_ticket_url SystemSettings#approval_optional_request_ticket_url}
  */
  readonly approvalOptionalRequestTicketUrl?: boolean | cdktf.IResolvable;
  /**
  * System setting for the name of the environment. Defaults to ``.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shorelinesoftware/shoreline/1.15.38/docs/resources/system_settings#environment_name SystemSettings#environment_name}
  */
  readonly environmentName?: string;
  /**
  * System setting for the background colour of the environment name. The format is #<6-digit hex> Defaults to `#EF5350`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shorelinesoftware/shoreline/1.15.38/docs/resources/system_settings#environment_name_background SystemSettings#environment_name_background}
  */
  readonly environmentNameBackground?: string;
  /**
  * System setting for alternate audit storage batching interval (in seconds). Defaults to `5`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shorelinesoftware/shoreline/1.15.38/docs/resources/system_settings#external_audit_storage_batch_period_sec SystemSettings#external_audit_storage_batch_period_sec}
  */
  readonly externalAuditStorageBatchPeriodSec?: number;
  /**
  * System setting controlling if audit information is stored in an alternate location. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shorelinesoftware/shoreline/1.15.38/docs/resources/system_settings#external_audit_storage_enabled SystemSettings#external_audit_storage_enabled}
  */
  readonly externalAuditStorageEnabled?: boolean | cdktf.IResolvable;
  /**
  * System setting for alternate audit storage type (e.g. 'ELASTIC'). Defaults to `ELASTIC`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shorelinesoftware/shoreline/1.15.38/docs/resources/system_settings#external_audit_storage_type SystemSettings#external_audit_storage_type}
  */
  readonly externalAuditStorageType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shorelinesoftware/shoreline/1.15.38/docs/resources/system_settings#id SystemSettings#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * System setting that when enabled, rejects new runs, allowing ongoing tasks to complete before stopping. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shorelinesoftware/shoreline/1.15.38/docs/resources/system_settings#maintenance_mode_enabled SystemSettings#maintenance_mode_enabled}
  */
  readonly maintenanceModeEnabled?: boolean | cdktf.IResolvable;
  /**
  * System setting that discriminates between usage of external vaults and the built in one. Defaults to `LOCAL`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shorelinesoftware/shoreline/1.15.38/docs/resources/system_settings#managed_secrets SystemSettings#managed_secrets}
  */
  readonly managedSecrets?: string;
  /**
  * The name/symbol for the object within Shoreline and the op language (must be unique, only alphanumeric/underscore).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shorelinesoftware/shoreline/1.15.38/docs/resources/system_settings#name SystemSettings#name}
  */
  readonly name: string;
  /**
  * **Deprecated** Please use 'runbook_ad_hoc_approval_request_enabled' instead. System setting controlling if approvals are enabled for ad-hoc notebook execution. Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shorelinesoftware/shoreline/1.15.38/docs/resources/system_settings#notebook_ad_hoc_approval_request_enabled SystemSettings#notebook_ad_hoc_approval_request_enabled}
  */
  readonly notebookAdHocApprovalRequestEnabled?: boolean | cdktf.IResolvable;
  /**
  * **Deprecated** Please use 'runbook_approval_request_expiry_time' instead. System setting for maximum wait for approval after request (in minutes). Defaults to `60`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shorelinesoftware/shoreline/1.15.38/docs/resources/system_settings#notebook_approval_request_expiry_time SystemSettings#notebook_approval_request_expiry_time}
  */
  readonly notebookApprovalRequestExpiryTime?: number;
  /**
  * **Deprecated** Please use 'run_approval_expiry_time' instead. System setting for maximum wait for execution after approval (in minutes). Defaults to `60`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shorelinesoftware/shoreline/1.15.38/docs/resources/system_settings#notebook_run_approval_expiry_time SystemSettings#notebook_run_approval_expiry_time}
  */
  readonly notebookRunApprovalExpiryTime?: number;
  /**
  * **Deprecated** Please use 'parallel_runs_fired_by_time_triggers' instead. System setting controlling the maximum number of different parallel notebook runs initiated via time triggers Defaults to `10`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shorelinesoftware/shoreline/1.15.38/docs/resources/system_settings#parallel_notebook_runs_fired_by_time_triggers SystemSettings#parallel_notebook_runs_fired_by_time_triggers}
  */
  readonly parallelNotebookRunsFiredByTimeTriggers?: number;
  /**
  * Defaults to `10`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shorelinesoftware/shoreline/1.15.38/docs/resources/system_settings#parallel_runs_fired_by_time_triggers SystemSettings#parallel_runs_fired_by_time_triggers}
  */
  readonly parallelRunsFiredByTimeTriggers?: number;
  /**
  * System setting controlling the maximum allowable length for a notebook's parameter Defaults to `10000`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shorelinesoftware/shoreline/1.15.38/docs/resources/system_settings#param_value_max_length SystemSettings#param_value_max_length}
  */
  readonly paramValueMaxLength?: number;
  /**
  * Defaults to `60`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shorelinesoftware/shoreline/1.15.38/docs/resources/system_settings#run_approval_expiry_time SystemSettings#run_approval_expiry_time}
  */
  readonly runApprovalExpiryTime?: number;
  /**
  * Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shorelinesoftware/shoreline/1.15.38/docs/resources/system_settings#runbook_ad_hoc_approval_request_enabled SystemSettings#runbook_ad_hoc_approval_request_enabled}
  */
  readonly runbookAdHocApprovalRequestEnabled?: boolean | cdktf.IResolvable;
  /**
  * Defaults to `60`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shorelinesoftware/shoreline/1.15.38/docs/resources/system_settings#runbook_approval_request_expiry_time SystemSettings#runbook_approval_request_expiry_time}
  */
  readonly runbookApprovalRequestExpiryTime?: number;
  /**
  * Defines a list of tags that are skipped on agent tag ingestion
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shorelinesoftware/shoreline/1.15.38/docs/resources/system_settings#skipped_tags SystemSettings#skipped_tags}
  */
  readonly skippedTags?: string[];
  /**
  * System setting for the user that time-triggered notebooks run as. Defaults to `Shoreline`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shorelinesoftware/shoreline/1.15.38/docs/resources/system_settings#time_trigger_permissions_user SystemSettings#time_trigger_permissions_user}
  */
  readonly timeTriggerPermissionsUser?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/shorelinesoftware/shoreline/1.15.38/docs/resources/system_settings shoreline_system_settings}
*/
export class SystemSettings extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "shoreline_system_settings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemSettings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemSettings to import
  * @param importFromId The id of the existing SystemSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/shorelinesoftware/shoreline/1.15.38/docs/resources/system_settings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemSettings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "shoreline_system_settings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/shorelinesoftware/shoreline/1.15.38/docs/resources/system_settings shoreline_system_settings} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemSettingsConfig
  */
  public constructor(scope: Construct, id: string, config: SystemSettingsConfig) {
    super(scope, id, {
      terraformResourceType: 'shoreline_system_settings',
      terraformGeneratorMetadata: {
        providerName: 'shoreline',
        providerVersion: '1.15.38',
        providerVersionConstraint: '1.15.38'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._administratorGrantsCreateUser = config.administratorGrantsCreateUser;
    this._administratorGrantsCreateUserToken = config.administratorGrantsCreateUserToken;
    this._administratorGrantsReadUserToken = config.administratorGrantsReadUserToken;
    this._administratorGrantsRegenerateUserToken = config.administratorGrantsRegenerateUserToken;
    this._allowedTags = config.allowedTags;
    this._approvalAllowIndividualNotification = config.approvalAllowIndividualNotification;
    this._approvalEditableAllowedResourceQueryEnabled = config.approvalEditableAllowedResourceQueryEnabled;
    this._approvalFeatureEnabled = config.approvalFeatureEnabled;
    this._approvalOptionalRequestTicketUrl = config.approvalOptionalRequestTicketUrl;
    this._environmentName = config.environmentName;
    this._environmentNameBackground = config.environmentNameBackground;
    this._externalAuditStorageBatchPeriodSec = config.externalAuditStorageBatchPeriodSec;
    this._externalAuditStorageEnabled = config.externalAuditStorageEnabled;
    this._externalAuditStorageType = config.externalAuditStorageType;
    this._id = config.id;
    this._maintenanceModeEnabled = config.maintenanceModeEnabled;
    this._managedSecrets = config.managedSecrets;
    this._name = config.name;
    this._notebookAdHocApprovalRequestEnabled = config.notebookAdHocApprovalRequestEnabled;
    this._notebookApprovalRequestExpiryTime = config.notebookApprovalRequestExpiryTime;
    this._notebookRunApprovalExpiryTime = config.notebookRunApprovalExpiryTime;
    this._parallelNotebookRunsFiredByTimeTriggers = config.parallelNotebookRunsFiredByTimeTriggers;
    this._parallelRunsFiredByTimeTriggers = config.parallelRunsFiredByTimeTriggers;
    this._paramValueMaxLength = config.paramValueMaxLength;
    this._runApprovalExpiryTime = config.runApprovalExpiryTime;
    this._runbookAdHocApprovalRequestEnabled = config.runbookAdHocApprovalRequestEnabled;
    this._runbookApprovalRequestExpiryTime = config.runbookApprovalRequestExpiryTime;
    this._skippedTags = config.skippedTags;
    this._timeTriggerPermissionsUser = config.timeTriggerPermissionsUser;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // administrator_grants_create_user - computed: false, optional: true, required: false
  private _administratorGrantsCreateUser?: boolean | cdktf.IResolvable; 
  public get administratorGrantsCreateUser() {
    return this.getBooleanAttribute('administrator_grants_create_user');
  }
  public set administratorGrantsCreateUser(value: boolean | cdktf.IResolvable) {
    this._administratorGrantsCreateUser = value;
  }
  public resetAdministratorGrantsCreateUser() {
    this._administratorGrantsCreateUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get administratorGrantsCreateUserInput() {
    return this._administratorGrantsCreateUser;
  }

  // administrator_grants_create_user_token - computed: false, optional: true, required: false
  private _administratorGrantsCreateUserToken?: boolean | cdktf.IResolvable; 
  public get administratorGrantsCreateUserToken() {
    return this.getBooleanAttribute('administrator_grants_create_user_token');
  }
  public set administratorGrantsCreateUserToken(value: boolean | cdktf.IResolvable) {
    this._administratorGrantsCreateUserToken = value;
  }
  public resetAdministratorGrantsCreateUserToken() {
    this._administratorGrantsCreateUserToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get administratorGrantsCreateUserTokenInput() {
    return this._administratorGrantsCreateUserToken;
  }

  // administrator_grants_read_user_token - computed: false, optional: true, required: false
  private _administratorGrantsReadUserToken?: boolean | cdktf.IResolvable; 
  public get administratorGrantsReadUserToken() {
    return this.getBooleanAttribute('administrator_grants_read_user_token');
  }
  public set administratorGrantsReadUserToken(value: boolean | cdktf.IResolvable) {
    this._administratorGrantsReadUserToken = value;
  }
  public resetAdministratorGrantsReadUserToken() {
    this._administratorGrantsReadUserToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get administratorGrantsReadUserTokenInput() {
    return this._administratorGrantsReadUserToken;
  }

  // administrator_grants_regenerate_user_token - computed: false, optional: true, required: false
  private _administratorGrantsRegenerateUserToken?: boolean | cdktf.IResolvable; 
  public get administratorGrantsRegenerateUserToken() {
    return this.getBooleanAttribute('administrator_grants_regenerate_user_token');
  }
  public set administratorGrantsRegenerateUserToken(value: boolean | cdktf.IResolvable) {
    this._administratorGrantsRegenerateUserToken = value;
  }
  public resetAdministratorGrantsRegenerateUserToken() {
    this._administratorGrantsRegenerateUserToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get administratorGrantsRegenerateUserTokenInput() {
    return this._administratorGrantsRegenerateUserToken;
  }

  // allowed_tags - computed: false, optional: true, required: false
  private _allowedTags?: string[]; 
  public get allowedTags() {
    return this.getListAttribute('allowed_tags');
  }
  public set allowedTags(value: string[]) {
    this._allowedTags = value;
  }
  public resetAllowedTags() {
    this._allowedTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedTagsInput() {
    return this._allowedTags;
  }

  // approval_allow_individual_notification - computed: false, optional: true, required: false
  private _approvalAllowIndividualNotification?: boolean | cdktf.IResolvable; 
  public get approvalAllowIndividualNotification() {
    return this.getBooleanAttribute('approval_allow_individual_notification');
  }
  public set approvalAllowIndividualNotification(value: boolean | cdktf.IResolvable) {
    this._approvalAllowIndividualNotification = value;
  }
  public resetApprovalAllowIndividualNotification() {
    this._approvalAllowIndividualNotification = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get approvalAllowIndividualNotificationInput() {
    return this._approvalAllowIndividualNotification;
  }

  // approval_editable_allowed_resource_query_enabled - computed: false, optional: true, required: false
  private _approvalEditableAllowedResourceQueryEnabled?: boolean | cdktf.IResolvable; 
  public get approvalEditableAllowedResourceQueryEnabled() {
    return this.getBooleanAttribute('approval_editable_allowed_resource_query_enabled');
  }
  public set approvalEditableAllowedResourceQueryEnabled(value: boolean | cdktf.IResolvable) {
    this._approvalEditableAllowedResourceQueryEnabled = value;
  }
  public resetApprovalEditableAllowedResourceQueryEnabled() {
    this._approvalEditableAllowedResourceQueryEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get approvalEditableAllowedResourceQueryEnabledInput() {
    return this._approvalEditableAllowedResourceQueryEnabled;
  }

  // approval_feature_enabled - computed: false, optional: true, required: false
  private _approvalFeatureEnabled?: boolean | cdktf.IResolvable; 
  public get approvalFeatureEnabled() {
    return this.getBooleanAttribute('approval_feature_enabled');
  }
  public set approvalFeatureEnabled(value: boolean | cdktf.IResolvable) {
    this._approvalFeatureEnabled = value;
  }
  public resetApprovalFeatureEnabled() {
    this._approvalFeatureEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get approvalFeatureEnabledInput() {
    return this._approvalFeatureEnabled;
  }

  // approval_optional_request_ticket_url - computed: false, optional: true, required: false
  private _approvalOptionalRequestTicketUrl?: boolean | cdktf.IResolvable; 
  public get approvalOptionalRequestTicketUrl() {
    return this.getBooleanAttribute('approval_optional_request_ticket_url');
  }
  public set approvalOptionalRequestTicketUrl(value: boolean | cdktf.IResolvable) {
    this._approvalOptionalRequestTicketUrl = value;
  }
  public resetApprovalOptionalRequestTicketUrl() {
    this._approvalOptionalRequestTicketUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get approvalOptionalRequestTicketUrlInput() {
    return this._approvalOptionalRequestTicketUrl;
  }

  // environment_name - computed: false, optional: true, required: false
  private _environmentName?: string; 
  public get environmentName() {
    return this.getStringAttribute('environment_name');
  }
  public set environmentName(value: string) {
    this._environmentName = value;
  }
  public resetEnvironmentName() {
    this._environmentName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentNameInput() {
    return this._environmentName;
  }

  // environment_name_background - computed: false, optional: true, required: false
  private _environmentNameBackground?: string; 
  public get environmentNameBackground() {
    return this.getStringAttribute('environment_name_background');
  }
  public set environmentNameBackground(value: string) {
    this._environmentNameBackground = value;
  }
  public resetEnvironmentNameBackground() {
    this._environmentNameBackground = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentNameBackgroundInput() {
    return this._environmentNameBackground;
  }

  // external_audit_storage_batch_period_sec - computed: false, optional: true, required: false
  private _externalAuditStorageBatchPeriodSec?: number; 
  public get externalAuditStorageBatchPeriodSec() {
    return this.getNumberAttribute('external_audit_storage_batch_period_sec');
  }
  public set externalAuditStorageBatchPeriodSec(value: number) {
    this._externalAuditStorageBatchPeriodSec = value;
  }
  public resetExternalAuditStorageBatchPeriodSec() {
    this._externalAuditStorageBatchPeriodSec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalAuditStorageBatchPeriodSecInput() {
    return this._externalAuditStorageBatchPeriodSec;
  }

  // external_audit_storage_enabled - computed: false, optional: true, required: false
  private _externalAuditStorageEnabled?: boolean | cdktf.IResolvable; 
  public get externalAuditStorageEnabled() {
    return this.getBooleanAttribute('external_audit_storage_enabled');
  }
  public set externalAuditStorageEnabled(value: boolean | cdktf.IResolvable) {
    this._externalAuditStorageEnabled = value;
  }
  public resetExternalAuditStorageEnabled() {
    this._externalAuditStorageEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalAuditStorageEnabledInput() {
    return this._externalAuditStorageEnabled;
  }

  // external_audit_storage_type - computed: false, optional: true, required: false
  private _externalAuditStorageType?: string; 
  public get externalAuditStorageType() {
    return this.getStringAttribute('external_audit_storage_type');
  }
  public set externalAuditStorageType(value: string) {
    this._externalAuditStorageType = value;
  }
  public resetExternalAuditStorageType() {
    this._externalAuditStorageType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalAuditStorageTypeInput() {
    return this._externalAuditStorageType;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // maintenance_mode_enabled - computed: false, optional: true, required: false
  private _maintenanceModeEnabled?: boolean | cdktf.IResolvable; 
  public get maintenanceModeEnabled() {
    return this.getBooleanAttribute('maintenance_mode_enabled');
  }
  public set maintenanceModeEnabled(value: boolean | cdktf.IResolvable) {
    this._maintenanceModeEnabled = value;
  }
  public resetMaintenanceModeEnabled() {
    this._maintenanceModeEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenanceModeEnabledInput() {
    return this._maintenanceModeEnabled;
  }

  // managed_secrets - computed: false, optional: true, required: false
  private _managedSecrets?: string; 
  public get managedSecrets() {
    return this.getStringAttribute('managed_secrets');
  }
  public set managedSecrets(value: string) {
    this._managedSecrets = value;
  }
  public resetManagedSecrets() {
    this._managedSecrets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedSecretsInput() {
    return this._managedSecrets;
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

  // notebook_ad_hoc_approval_request_enabled - computed: false, optional: true, required: false
  private _notebookAdHocApprovalRequestEnabled?: boolean | cdktf.IResolvable; 
  public get notebookAdHocApprovalRequestEnabled() {
    return this.getBooleanAttribute('notebook_ad_hoc_approval_request_enabled');
  }
  public set notebookAdHocApprovalRequestEnabled(value: boolean | cdktf.IResolvable) {
    this._notebookAdHocApprovalRequestEnabled = value;
  }
  public resetNotebookAdHocApprovalRequestEnabled() {
    this._notebookAdHocApprovalRequestEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notebookAdHocApprovalRequestEnabledInput() {
    return this._notebookAdHocApprovalRequestEnabled;
  }

  // notebook_approval_request_expiry_time - computed: false, optional: true, required: false
  private _notebookApprovalRequestExpiryTime?: number; 
  public get notebookApprovalRequestExpiryTime() {
    return this.getNumberAttribute('notebook_approval_request_expiry_time');
  }
  public set notebookApprovalRequestExpiryTime(value: number) {
    this._notebookApprovalRequestExpiryTime = value;
  }
  public resetNotebookApprovalRequestExpiryTime() {
    this._notebookApprovalRequestExpiryTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notebookApprovalRequestExpiryTimeInput() {
    return this._notebookApprovalRequestExpiryTime;
  }

  // notebook_run_approval_expiry_time - computed: false, optional: true, required: false
  private _notebookRunApprovalExpiryTime?: number; 
  public get notebookRunApprovalExpiryTime() {
    return this.getNumberAttribute('notebook_run_approval_expiry_time');
  }
  public set notebookRunApprovalExpiryTime(value: number) {
    this._notebookRunApprovalExpiryTime = value;
  }
  public resetNotebookRunApprovalExpiryTime() {
    this._notebookRunApprovalExpiryTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notebookRunApprovalExpiryTimeInput() {
    return this._notebookRunApprovalExpiryTime;
  }

  // parallel_notebook_runs_fired_by_time_triggers - computed: false, optional: true, required: false
  private _parallelNotebookRunsFiredByTimeTriggers?: number; 
  public get parallelNotebookRunsFiredByTimeTriggers() {
    return this.getNumberAttribute('parallel_notebook_runs_fired_by_time_triggers');
  }
  public set parallelNotebookRunsFiredByTimeTriggers(value: number) {
    this._parallelNotebookRunsFiredByTimeTriggers = value;
  }
  public resetParallelNotebookRunsFiredByTimeTriggers() {
    this._parallelNotebookRunsFiredByTimeTriggers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parallelNotebookRunsFiredByTimeTriggersInput() {
    return this._parallelNotebookRunsFiredByTimeTriggers;
  }

  // parallel_runs_fired_by_time_triggers - computed: false, optional: true, required: false
  private _parallelRunsFiredByTimeTriggers?: number; 
  public get parallelRunsFiredByTimeTriggers() {
    return this.getNumberAttribute('parallel_runs_fired_by_time_triggers');
  }
  public set parallelRunsFiredByTimeTriggers(value: number) {
    this._parallelRunsFiredByTimeTriggers = value;
  }
  public resetParallelRunsFiredByTimeTriggers() {
    this._parallelRunsFiredByTimeTriggers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parallelRunsFiredByTimeTriggersInput() {
    return this._parallelRunsFiredByTimeTriggers;
  }

  // param_value_max_length - computed: false, optional: true, required: false
  private _paramValueMaxLength?: number; 
  public get paramValueMaxLength() {
    return this.getNumberAttribute('param_value_max_length');
  }
  public set paramValueMaxLength(value: number) {
    this._paramValueMaxLength = value;
  }
  public resetParamValueMaxLength() {
    this._paramValueMaxLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get paramValueMaxLengthInput() {
    return this._paramValueMaxLength;
  }

  // run_approval_expiry_time - computed: false, optional: true, required: false
  private _runApprovalExpiryTime?: number; 
  public get runApprovalExpiryTime() {
    return this.getNumberAttribute('run_approval_expiry_time');
  }
  public set runApprovalExpiryTime(value: number) {
    this._runApprovalExpiryTime = value;
  }
  public resetRunApprovalExpiryTime() {
    this._runApprovalExpiryTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runApprovalExpiryTimeInput() {
    return this._runApprovalExpiryTime;
  }

  // runbook_ad_hoc_approval_request_enabled - computed: false, optional: true, required: false
  private _runbookAdHocApprovalRequestEnabled?: boolean | cdktf.IResolvable; 
  public get runbookAdHocApprovalRequestEnabled() {
    return this.getBooleanAttribute('runbook_ad_hoc_approval_request_enabled');
  }
  public set runbookAdHocApprovalRequestEnabled(value: boolean | cdktf.IResolvable) {
    this._runbookAdHocApprovalRequestEnabled = value;
  }
  public resetRunbookAdHocApprovalRequestEnabled() {
    this._runbookAdHocApprovalRequestEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runbookAdHocApprovalRequestEnabledInput() {
    return this._runbookAdHocApprovalRequestEnabled;
  }

  // runbook_approval_request_expiry_time - computed: false, optional: true, required: false
  private _runbookApprovalRequestExpiryTime?: number; 
  public get runbookApprovalRequestExpiryTime() {
    return this.getNumberAttribute('runbook_approval_request_expiry_time');
  }
  public set runbookApprovalRequestExpiryTime(value: number) {
    this._runbookApprovalRequestExpiryTime = value;
  }
  public resetRunbookApprovalRequestExpiryTime() {
    this._runbookApprovalRequestExpiryTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runbookApprovalRequestExpiryTimeInput() {
    return this._runbookApprovalRequestExpiryTime;
  }

  // skipped_tags - computed: false, optional: true, required: false
  private _skippedTags?: string[]; 
  public get skippedTags() {
    return this.getListAttribute('skipped_tags');
  }
  public set skippedTags(value: string[]) {
    this._skippedTags = value;
  }
  public resetSkippedTags() {
    this._skippedTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skippedTagsInput() {
    return this._skippedTags;
  }

  // time_trigger_permissions_user - computed: false, optional: true, required: false
  private _timeTriggerPermissionsUser?: string; 
  public get timeTriggerPermissionsUser() {
    return this.getStringAttribute('time_trigger_permissions_user');
  }
  public set timeTriggerPermissionsUser(value: string) {
    this._timeTriggerPermissionsUser = value;
  }
  public resetTimeTriggerPermissionsUser() {
    this._timeTriggerPermissionsUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeTriggerPermissionsUserInput() {
    return this._timeTriggerPermissionsUser;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      administrator_grants_create_user: cdktf.booleanToTerraform(this._administratorGrantsCreateUser),
      administrator_grants_create_user_token: cdktf.booleanToTerraform(this._administratorGrantsCreateUserToken),
      administrator_grants_read_user_token: cdktf.booleanToTerraform(this._administratorGrantsReadUserToken),
      administrator_grants_regenerate_user_token: cdktf.booleanToTerraform(this._administratorGrantsRegenerateUserToken),
      allowed_tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._allowedTags),
      approval_allow_individual_notification: cdktf.booleanToTerraform(this._approvalAllowIndividualNotification),
      approval_editable_allowed_resource_query_enabled: cdktf.booleanToTerraform(this._approvalEditableAllowedResourceQueryEnabled),
      approval_feature_enabled: cdktf.booleanToTerraform(this._approvalFeatureEnabled),
      approval_optional_request_ticket_url: cdktf.booleanToTerraform(this._approvalOptionalRequestTicketUrl),
      environment_name: cdktf.stringToTerraform(this._environmentName),
      environment_name_background: cdktf.stringToTerraform(this._environmentNameBackground),
      external_audit_storage_batch_period_sec: cdktf.numberToTerraform(this._externalAuditStorageBatchPeriodSec),
      external_audit_storage_enabled: cdktf.booleanToTerraform(this._externalAuditStorageEnabled),
      external_audit_storage_type: cdktf.stringToTerraform(this._externalAuditStorageType),
      id: cdktf.stringToTerraform(this._id),
      maintenance_mode_enabled: cdktf.booleanToTerraform(this._maintenanceModeEnabled),
      managed_secrets: cdktf.stringToTerraform(this._managedSecrets),
      name: cdktf.stringToTerraform(this._name),
      notebook_ad_hoc_approval_request_enabled: cdktf.booleanToTerraform(this._notebookAdHocApprovalRequestEnabled),
      notebook_approval_request_expiry_time: cdktf.numberToTerraform(this._notebookApprovalRequestExpiryTime),
      notebook_run_approval_expiry_time: cdktf.numberToTerraform(this._notebookRunApprovalExpiryTime),
      parallel_notebook_runs_fired_by_time_triggers: cdktf.numberToTerraform(this._parallelNotebookRunsFiredByTimeTriggers),
      parallel_runs_fired_by_time_triggers: cdktf.numberToTerraform(this._parallelRunsFiredByTimeTriggers),
      param_value_max_length: cdktf.numberToTerraform(this._paramValueMaxLength),
      run_approval_expiry_time: cdktf.numberToTerraform(this._runApprovalExpiryTime),
      runbook_ad_hoc_approval_request_enabled: cdktf.booleanToTerraform(this._runbookAdHocApprovalRequestEnabled),
      runbook_approval_request_expiry_time: cdktf.numberToTerraform(this._runbookApprovalRequestExpiryTime),
      skipped_tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._skippedTags),
      time_trigger_permissions_user: cdktf.stringToTerraform(this._timeTriggerPermissionsUser),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      administrator_grants_create_user: {
        value: cdktf.booleanToHclTerraform(this._administratorGrantsCreateUser),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      administrator_grants_create_user_token: {
        value: cdktf.booleanToHclTerraform(this._administratorGrantsCreateUserToken),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      administrator_grants_read_user_token: {
        value: cdktf.booleanToHclTerraform(this._administratorGrantsReadUserToken),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      administrator_grants_regenerate_user_token: {
        value: cdktf.booleanToHclTerraform(this._administratorGrantsRegenerateUserToken),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      allowed_tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._allowedTags),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      approval_allow_individual_notification: {
        value: cdktf.booleanToHclTerraform(this._approvalAllowIndividualNotification),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      approval_editable_allowed_resource_query_enabled: {
        value: cdktf.booleanToHclTerraform(this._approvalEditableAllowedResourceQueryEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      approval_feature_enabled: {
        value: cdktf.booleanToHclTerraform(this._approvalFeatureEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      approval_optional_request_ticket_url: {
        value: cdktf.booleanToHclTerraform(this._approvalOptionalRequestTicketUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      environment_name: {
        value: cdktf.stringToHclTerraform(this._environmentName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      environment_name_background: {
        value: cdktf.stringToHclTerraform(this._environmentNameBackground),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      external_audit_storage_batch_period_sec: {
        value: cdktf.numberToHclTerraform(this._externalAuditStorageBatchPeriodSec),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      external_audit_storage_enabled: {
        value: cdktf.booleanToHclTerraform(this._externalAuditStorageEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      external_audit_storage_type: {
        value: cdktf.stringToHclTerraform(this._externalAuditStorageType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      maintenance_mode_enabled: {
        value: cdktf.booleanToHclTerraform(this._maintenanceModeEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      managed_secrets: {
        value: cdktf.stringToHclTerraform(this._managedSecrets),
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
      notebook_ad_hoc_approval_request_enabled: {
        value: cdktf.booleanToHclTerraform(this._notebookAdHocApprovalRequestEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      notebook_approval_request_expiry_time: {
        value: cdktf.numberToHclTerraform(this._notebookApprovalRequestExpiryTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      notebook_run_approval_expiry_time: {
        value: cdktf.numberToHclTerraform(this._notebookRunApprovalExpiryTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      parallel_notebook_runs_fired_by_time_triggers: {
        value: cdktf.numberToHclTerraform(this._parallelNotebookRunsFiredByTimeTriggers),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      parallel_runs_fired_by_time_triggers: {
        value: cdktf.numberToHclTerraform(this._parallelRunsFiredByTimeTriggers),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      param_value_max_length: {
        value: cdktf.numberToHclTerraform(this._paramValueMaxLength),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      run_approval_expiry_time: {
        value: cdktf.numberToHclTerraform(this._runApprovalExpiryTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      runbook_ad_hoc_approval_request_enabled: {
        value: cdktf.booleanToHclTerraform(this._runbookAdHocApprovalRequestEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      runbook_approval_request_expiry_time: {
        value: cdktf.numberToHclTerraform(this._runbookApprovalRequestExpiryTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      skipped_tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._skippedTags),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      time_trigger_permissions_user: {
        value: cdktf.stringToHclTerraform(this._timeTriggerPermissionsUser),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
