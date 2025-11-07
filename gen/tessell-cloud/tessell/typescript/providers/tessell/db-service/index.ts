// generated from terraform resource schema

import { DbServiceClonedFromInfoList, 
DbServiceContextInfoList, 
DbServiceDeletionScheduleList, 
DbServiceRefreshInfoList, 
DbServiceUpcomingScheduledActionsList, 
DbServiceUpdatesInProgressList, 
DbServiceCreds, 
dbServiceCredsToTerraform, 
dbServiceCredsToHclTerraform, 
DbServiceCredsOutputReference, 
DbServiceDatabases, 
dbServiceDatabasesToTerraform, 
dbServiceDatabasesToHclTerraform, 
DbServiceDatabasesList, 
DbServiceDeletionConfig, 
dbServiceDeletionConfigToTerraform, 
dbServiceDeletionConfigToHclTerraform, 
DbServiceDeletionConfigOutputReference, 
DbServiceEngineConfiguration, 
dbServiceEngineConfigurationToTerraform, 
dbServiceEngineConfigurationToHclTerraform, 
DbServiceEngineConfigurationOutputReference, 
DbServiceInfrastructure, 
dbServiceInfrastructureToTerraform, 
dbServiceInfrastructureToHclTerraform, 
DbServiceInfrastructureOutputReference, 
DbServiceInstances, 
dbServiceInstancesToTerraform, 
dbServiceInstancesToHclTerraform, 
DbServiceInstancesList, 
DbServiceIntegrationsConfig, 
dbServiceIntegrationsConfigToTerraform, 
dbServiceIntegrationsConfigToHclTerraform, 
DbServiceIntegrationsConfigOutputReference, 
DbServiceMaintenanceWindow, 
dbServiceMaintenanceWindowToTerraform, 
dbServiceMaintenanceWindowToHclTerraform, 
DbServiceMaintenanceWindowOutputReference, 
DbServiceRpoPolicyConfig, 
dbServiceRpoPolicyConfigToTerraform, 
dbServiceRpoPolicyConfigToHclTerraform, 
DbServiceRpoPolicyConfigOutputReference, 
DbServiceServiceConnectivity, 
dbServiceServiceConnectivityToTerraform, 
dbServiceServiceConnectivityToHclTerraform, 
DbServiceServiceConnectivityOutputReference, 
DbServiceSharedWith, 
dbServiceSharedWithToTerraform, 
dbServiceSharedWithToHclTerraform, 
DbServiceSharedWithOutputReference, 
DbServiceSnapshotConfiguration, 
dbServiceSnapshotConfigurationToTerraform, 
dbServiceSnapshotConfigurationToHclTerraform, 
DbServiceSnapshotConfigurationOutputReference, 
DbServiceTags, 
dbServiceTagsToTerraform, 
dbServiceTagsToHclTerraform, 
DbServiceTagsList, 
DbServiceTimeouts, 
dbServiceTimeoutsToTerraform, 
dbServiceTimeoutsToHclTerraform, 
DbServiceTimeoutsOutputReference} from './index-structs'
export * from './index-structs'
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DbServiceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Specify whether to automatically update minor version for DB Service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.27/docs/resources/db_service#auto_minor_version_update DbService#auto_minor_version_update}
  */
  readonly autoMinorVersionUpdate?: boolean | cdktf.IResolvable;
  /**
  * For any operation on this resource, block the flow until the action has completed successfully
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.27/docs/resources/db_service#block_until_complete DbService#block_until_complete}
  */
  readonly blockUntilComplete?: boolean | cdktf.IResolvable;
  /**
  * DB Service's description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.27/docs/resources/db_service#description DbService#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.27/docs/resources/db_service#edition DbService#edition}
  */
  readonly edition?: string;
  /**
  * Specify whether to enable deletion protection for the DB Service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.27/docs/resources/db_service#enable_deletion_protection DbService#enable_deletion_protection}
  */
  readonly enableDeletionProtection?: boolean | cdktf.IResolvable;
  /**
  * This field specifies whether to enable performance insights for the DB Service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.27/docs/resources/db_service#enable_perf_insights DbService#enable_perf_insights}
  */
  readonly enablePerfInsights?: boolean | cdktf.IResolvable;
  /**
  * This field specifies whether to enable stop protection for the DB Service. If this is enabled, the stop for the DB Service would be disallowed until this setting is disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.27/docs/resources/db_service#enable_stop_protection DbService#enable_stop_protection}
  */
  readonly enableStopProtection?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.27/docs/resources/db_service#engine_type DbService#engine_type}
  */
  readonly engineType: string;
  /**
  * If provided, invoke the DB Service start/stop API
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.27/docs/resources/db_service#expected_status DbService#expected_status}
  */
  readonly expectedStatus?: string;
  /**
  * Name of the DB Service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.27/docs/resources/db_service#name DbService#name}
  */
  readonly name: string;
  /**
  * Id of the parent AvailabilityMachine, required when creating a clone
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.27/docs/resources/db_service#parent_availability_machine_id DbService#parent_availability_machine_id}
  */
  readonly parentAvailabilityMachineId?: string;
  /**
  * PITR Timestamp, using which the clone is to be created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.27/docs/resources/db_service#pitr DbService#pitr}
  */
  readonly pitr?: string;
  /**
  * Tessell service snapshot Id, using which the clone is to be created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.27/docs/resources/db_service#snapshot_id DbService#snapshot_id}
  */
  readonly snapshotId?: string;
  /**
  * Software Image to be used to create the DB Service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.27/docs/resources/db_service#software_image DbService#software_image}
  */
  readonly softwareImage: string;
  /**
  * Software Image Version to be used to create the DB Service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.27/docs/resources/db_service#software_image_version DbService#software_image_version}
  */
  readonly softwareImageVersion: string;
  /**
  * Tessell Subscription in which the DB Service is to be created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.27/docs/resources/db_service#subscription DbService#subscription}
  */
  readonly subscription: string;
  /**
  * Timeout for terraform polling, when block_until_complete is true (default true). (In seconds)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.27/docs/resources/db_service#timeout DbService#timeout}
  */
  readonly timeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.27/docs/resources/db_service#topology DbService#topology}
  */
  readonly topology: string;
  /**
  * creds block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.27/docs/resources/db_service#creds DbService#creds}
  */
  readonly creds: DbServiceCreds;
  /**
  * databases block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.27/docs/resources/db_service#databases DbService#databases}
  */
  readonly databases?: DbServiceDatabases[] | cdktf.IResolvable;
  /**
  * deletion_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.27/docs/resources/db_service#deletion_config DbService#deletion_config}
  */
  readonly deletionConfig?: DbServiceDeletionConfig;
  /**
  * engine_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.27/docs/resources/db_service#engine_configuration DbService#engine_configuration}
  */
  readonly engineConfiguration: DbServiceEngineConfiguration;
  /**
  * infrastructure block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.27/docs/resources/db_service#infrastructure DbService#infrastructure}
  */
  readonly infrastructure: DbServiceInfrastructure;
  /**
  * instances block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.27/docs/resources/db_service#instances DbService#instances}
  */
  readonly instances?: DbServiceInstances[] | cdktf.IResolvable;
  /**
  * integrations_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.27/docs/resources/db_service#integrations_config DbService#integrations_config}
  */
  readonly integrationsConfig?: DbServiceIntegrationsConfig;
  /**
  * maintenance_window block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.27/docs/resources/db_service#maintenance_window DbService#maintenance_window}
  */
  readonly maintenanceWindow?: DbServiceMaintenanceWindow;
  /**
  * rpo_policy_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.27/docs/resources/db_service#rpo_policy_config DbService#rpo_policy_config}
  */
  readonly rpoPolicyConfig?: DbServiceRpoPolicyConfig;
  /**
  * service_connectivity block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.27/docs/resources/db_service#service_connectivity DbService#service_connectivity}
  */
  readonly serviceConnectivity: DbServiceServiceConnectivity;
  /**
  * shared_with block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.27/docs/resources/db_service#shared_with DbService#shared_with}
  */
  readonly sharedWith?: DbServiceSharedWith;
  /**
  * snapshot_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.27/docs/resources/db_service#snapshot_configuration DbService#snapshot_configuration}
  */
  readonly snapshotConfiguration?: DbServiceSnapshotConfiguration;
  /**
  * tags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.27/docs/resources/db_service#tags DbService#tags}
  */
  readonly tags?: DbServiceTags[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.27/docs/resources/db_service#timeouts DbService#timeouts}
  */
  readonly timeouts?: DbServiceTimeouts;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.27/docs/resources/db_service tessell_db_service}
*/
export class DbService extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tessell_db_service";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DbService resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DbService to import
  * @param importFromId The id of the existing DbService that should be imported. Refer to the {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.27/docs/resources/db_service#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DbService to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tessell_db_service", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.27/docs/resources/db_service tessell_db_service} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DbServiceConfig
  */
  public constructor(scope: Construct, id: string, config: DbServiceConfig) {
    super(scope, id, {
      terraformResourceType: 'tessell_db_service',
      terraformGeneratorMetadata: {
        providerName: 'tessell',
        providerVersion: '0.0.27'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._autoMinorVersionUpdate = config.autoMinorVersionUpdate;
    this._blockUntilComplete = config.blockUntilComplete;
    this._description = config.description;
    this._edition = config.edition;
    this._enableDeletionProtection = config.enableDeletionProtection;
    this._enablePerfInsights = config.enablePerfInsights;
    this._enableStopProtection = config.enableStopProtection;
    this._engineType = config.engineType;
    this._expectedStatus = config.expectedStatus;
    this._name = config.name;
    this._parentAvailabilityMachineId = config.parentAvailabilityMachineId;
    this._pitr = config.pitr;
    this._snapshotId = config.snapshotId;
    this._softwareImage = config.softwareImage;
    this._softwareImageVersion = config.softwareImageVersion;
    this._subscription = config.subscription;
    this._timeout = config.timeout;
    this._topology = config.topology;
    this._creds.internalValue = config.creds;
    this._databases.internalValue = config.databases;
    this._deletionConfig.internalValue = config.deletionConfig;
    this._engineConfiguration.internalValue = config.engineConfiguration;
    this._infrastructure.internalValue = config.infrastructure;
    this._instances.internalValue = config.instances;
    this._integrationsConfig.internalValue = config.integrationsConfig;
    this._maintenanceWindow.internalValue = config.maintenanceWindow;
    this._rpoPolicyConfig.internalValue = config.rpoPolicyConfig;
    this._serviceConnectivity.internalValue = config.serviceConnectivity;
    this._sharedWith.internalValue = config.sharedWith;
    this._snapshotConfiguration.internalValue = config.snapshotConfiguration;
    this._tags.internalValue = config.tags;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_minor_version_update - computed: false, optional: true, required: false
  private _autoMinorVersionUpdate?: boolean | cdktf.IResolvable; 
  public get autoMinorVersionUpdate() {
    return this.getBooleanAttribute('auto_minor_version_update');
  }
  public set autoMinorVersionUpdate(value: boolean | cdktf.IResolvable) {
    this._autoMinorVersionUpdate = value;
  }
  public resetAutoMinorVersionUpdate() {
    this._autoMinorVersionUpdate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoMinorVersionUpdateInput() {
    return this._autoMinorVersionUpdate;
  }

  // availability_machine_id - computed: true, optional: false, required: false
  public get availabilityMachineId() {
    return this.getStringAttribute('availability_machine_id');
  }

  // block_until_complete - computed: false, optional: true, required: false
  private _blockUntilComplete?: boolean | cdktf.IResolvable; 
  public get blockUntilComplete() {
    return this.getBooleanAttribute('block_until_complete');
  }
  public set blockUntilComplete(value: boolean | cdktf.IResolvable) {
    this._blockUntilComplete = value;
  }
  public resetBlockUntilComplete() {
    this._blockUntilComplete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockUntilCompleteInput() {
    return this._blockUntilComplete;
  }

  // cloned_from_info - computed: true, optional: false, required: false
  private _clonedFromInfo = new DbServiceClonedFromInfoList(this, "cloned_from_info", false);
  public get clonedFromInfo() {
    return this._clonedFromInfo;
  }

  // context_info - computed: true, optional: false, required: false
  private _contextInfo = new DbServiceContextInfoList(this, "context_info", false);
  public get contextInfo() {
    return this._contextInfo;
  }

  // date_created - computed: true, optional: false, required: false
  public get dateCreated() {
    return this.getStringAttribute('date_created');
  }

  // deletion_schedule - computed: true, optional: false, required: false
  private _deletionSchedule = new DbServiceDeletionScheduleList(this, "deletion_schedule", false);
  public get deletionSchedule() {
    return this._deletionSchedule;
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

  // edition - computed: false, optional: true, required: false
  private _edition?: string; 
  public get edition() {
    return this.getStringAttribute('edition');
  }
  public set edition(value: string) {
    this._edition = value;
  }
  public resetEdition() {
    this._edition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get editionInput() {
    return this._edition;
  }

  // enable_deletion_protection - computed: false, optional: true, required: false
  private _enableDeletionProtection?: boolean | cdktf.IResolvable; 
  public get enableDeletionProtection() {
    return this.getBooleanAttribute('enable_deletion_protection');
  }
  public set enableDeletionProtection(value: boolean | cdktf.IResolvable) {
    this._enableDeletionProtection = value;
  }
  public resetEnableDeletionProtection() {
    this._enableDeletionProtection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableDeletionProtectionInput() {
    return this._enableDeletionProtection;
  }

  // enable_perf_insights - computed: false, optional: true, required: false
  private _enablePerfInsights?: boolean | cdktf.IResolvable; 
  public get enablePerfInsights() {
    return this.getBooleanAttribute('enable_perf_insights');
  }
  public set enablePerfInsights(value: boolean | cdktf.IResolvable) {
    this._enablePerfInsights = value;
  }
  public resetEnablePerfInsights() {
    this._enablePerfInsights = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enablePerfInsightsInput() {
    return this._enablePerfInsights;
  }

  // enable_stop_protection - computed: false, optional: true, required: false
  private _enableStopProtection?: boolean | cdktf.IResolvable; 
  public get enableStopProtection() {
    return this.getBooleanAttribute('enable_stop_protection');
  }
  public set enableStopProtection(value: boolean | cdktf.IResolvable) {
    this._enableStopProtection = value;
  }
  public resetEnableStopProtection() {
    this._enableStopProtection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableStopProtectionInput() {
    return this._enableStopProtection;
  }

  // engine_type - computed: false, optional: false, required: true
  private _engineType?: string; 
  public get engineType() {
    return this.getStringAttribute('engine_type');
  }
  public set engineType(value: string) {
    this._engineType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get engineTypeInput() {
    return this._engineType;
  }

  // expected_status - computed: false, optional: true, required: false
  private _expectedStatus?: string; 
  public get expectedStatus() {
    return this.getStringAttribute('expected_status');
  }
  public set expectedStatus(value: string) {
    this._expectedStatus = value;
  }
  public resetExpectedStatus() {
    this._expectedStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expectedStatusInput() {
    return this._expectedStatus;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // license_type - computed: true, optional: false, required: false
  public get licenseType() {
    return this.getStringAttribute('license_type');
  }

  // logged_in_user_role - computed: true, optional: false, required: false
  public get loggedInUserRole() {
    return this.getStringAttribute('logged_in_user_role');
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

  // num_of_instances - computed: true, optional: false, required: false
  public get numOfInstances() {
    return this.getNumberAttribute('num_of_instances');
  }

  // owner - computed: true, optional: false, required: false
  public get owner() {
    return this.getStringAttribute('owner');
  }

  // parent_availability_machine_id - computed: false, optional: true, required: false
  private _parentAvailabilityMachineId?: string; 
  public get parentAvailabilityMachineId() {
    return this.getStringAttribute('parent_availability_machine_id');
  }
  public set parentAvailabilityMachineId(value: string) {
    this._parentAvailabilityMachineId = value;
  }
  public resetParentAvailabilityMachineId() {
    this._parentAvailabilityMachineId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentAvailabilityMachineIdInput() {
    return this._parentAvailabilityMachineId;
  }

  // pitr - computed: false, optional: true, required: false
  private _pitr?: string; 
  public get pitr() {
    return this.getStringAttribute('pitr');
  }
  public set pitr(value: string) {
    this._pitr = value;
  }
  public resetPitr() {
    this._pitr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pitrInput() {
    return this._pitr;
  }

  // refresh_info - computed: true, optional: false, required: false
  private _refreshInfo = new DbServiceRefreshInfoList(this, "refresh_info", false);
  public get refreshInfo() {
    return this._refreshInfo;
  }

  // snapshot_id - computed: false, optional: true, required: false
  private _snapshotId?: string; 
  public get snapshotId() {
    return this.getStringAttribute('snapshot_id');
  }
  public set snapshotId(value: string) {
    this._snapshotId = value;
  }
  public resetSnapshotId() {
    this._snapshotId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotIdInput() {
    return this._snapshotId;
  }

  // software_image - computed: false, optional: false, required: true
  private _softwareImage?: string; 
  public get softwareImage() {
    return this.getStringAttribute('software_image');
  }
  public set softwareImage(value: string) {
    this._softwareImage = value;
  }
  // Temporarily expose input value. Use with caution.
  public get softwareImageInput() {
    return this._softwareImage;
  }

  // software_image_version - computed: false, optional: false, required: true
  private _softwareImageVersion?: string; 
  public get softwareImageVersion() {
    return this.getStringAttribute('software_image_version');
  }
  public set softwareImageVersion(value: string) {
    this._softwareImageVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get softwareImageVersionInput() {
    return this._softwareImageVersion;
  }

  // software_image_version_family - computed: true, optional: false, required: false
  public get softwareImageVersionFamily() {
    return this.getStringAttribute('software_image_version_family');
  }

  // started_at - computed: true, optional: false, required: false
  public get startedAt() {
    return this.getStringAttribute('started_at');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // stopped_at - computed: true, optional: false, required: false
  public get stoppedAt() {
    return this.getStringAttribute('stopped_at');
  }

  // subscription - computed: false, optional: false, required: true
  private _subscription?: string; 
  public get subscription() {
    return this.getStringAttribute('subscription');
  }
  public set subscription(value: string) {
    this._subscription = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subscriptionInput() {
    return this._subscription;
  }

  // tenant_id - computed: true, optional: false, required: false
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }

  // tessell_genie_status - computed: true, optional: false, required: false
  public get tessellGenieStatus() {
    return this.getStringAttribute('tessell_genie_status');
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout?: number; 
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
  public set timeout(value: number) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }

  // topology - computed: false, optional: false, required: true
  private _topology?: string; 
  public get topology() {
    return this.getStringAttribute('topology');
  }
  public set topology(value: string) {
    this._topology = value;
  }
  // Temporarily expose input value. Use with caution.
  public get topologyInput() {
    return this._topology;
  }

  // upcoming_scheduled_actions - computed: true, optional: false, required: false
  private _upcomingScheduledActions = new DbServiceUpcomingScheduledActionsList(this, "upcoming_scheduled_actions", false);
  public get upcomingScheduledActions() {
    return this._upcomingScheduledActions;
  }

  // updates_in_progress - computed: true, optional: false, required: false
  private _updatesInProgress = new DbServiceUpdatesInProgressList(this, "updates_in_progress", false);
  public get updatesInProgress() {
    return this._updatesInProgress;
  }

  // creds - computed: false, optional: false, required: true
  private _creds = new DbServiceCredsOutputReference(this, "creds");
  public get creds() {
    return this._creds;
  }
  public putCreds(value: DbServiceCreds) {
    this._creds.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get credsInput() {
    return this._creds.internalValue;
  }

  // databases - computed: false, optional: true, required: false
  private _databases = new DbServiceDatabasesList(this, "databases", false);
  public get databases() {
    return this._databases;
  }
  public putDatabases(value: DbServiceDatabases[] | cdktf.IResolvable) {
    this._databases.internalValue = value;
  }
  public resetDatabases() {
    this._databases.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databasesInput() {
    return this._databases.internalValue;
  }

  // deletion_config - computed: false, optional: true, required: false
  private _deletionConfig = new DbServiceDeletionConfigOutputReference(this, "deletion_config");
  public get deletionConfig() {
    return this._deletionConfig;
  }
  public putDeletionConfig(value: DbServiceDeletionConfig) {
    this._deletionConfig.internalValue = value;
  }
  public resetDeletionConfig() {
    this._deletionConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deletionConfigInput() {
    return this._deletionConfig.internalValue;
  }

  // engine_configuration - computed: false, optional: false, required: true
  private _engineConfiguration = new DbServiceEngineConfigurationOutputReference(this, "engine_configuration");
  public get engineConfiguration() {
    return this._engineConfiguration;
  }
  public putEngineConfiguration(value: DbServiceEngineConfiguration) {
    this._engineConfiguration.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get engineConfigurationInput() {
    return this._engineConfiguration.internalValue;
  }

  // infrastructure - computed: false, optional: false, required: true
  private _infrastructure = new DbServiceInfrastructureOutputReference(this, "infrastructure");
  public get infrastructure() {
    return this._infrastructure;
  }
  public putInfrastructure(value: DbServiceInfrastructure) {
    this._infrastructure.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get infrastructureInput() {
    return this._infrastructure.internalValue;
  }

  // instances - computed: false, optional: true, required: false
  private _instances = new DbServiceInstancesList(this, "instances", false);
  public get instances() {
    return this._instances;
  }
  public putInstances(value: DbServiceInstances[] | cdktf.IResolvable) {
    this._instances.internalValue = value;
  }
  public resetInstances() {
    this._instances.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instancesInput() {
    return this._instances.internalValue;
  }

  // integrations_config - computed: false, optional: true, required: false
  private _integrationsConfig = new DbServiceIntegrationsConfigOutputReference(this, "integrations_config");
  public get integrationsConfig() {
    return this._integrationsConfig;
  }
  public putIntegrationsConfig(value: DbServiceIntegrationsConfig) {
    this._integrationsConfig.internalValue = value;
  }
  public resetIntegrationsConfig() {
    this._integrationsConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get integrationsConfigInput() {
    return this._integrationsConfig.internalValue;
  }

  // maintenance_window - computed: false, optional: true, required: false
  private _maintenanceWindow = new DbServiceMaintenanceWindowOutputReference(this, "maintenance_window");
  public get maintenanceWindow() {
    return this._maintenanceWindow;
  }
  public putMaintenanceWindow(value: DbServiceMaintenanceWindow) {
    this._maintenanceWindow.internalValue = value;
  }
  public resetMaintenanceWindow() {
    this._maintenanceWindow.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenanceWindowInput() {
    return this._maintenanceWindow.internalValue;
  }

  // rpo_policy_config - computed: false, optional: true, required: false
  private _rpoPolicyConfig = new DbServiceRpoPolicyConfigOutputReference(this, "rpo_policy_config");
  public get rpoPolicyConfig() {
    return this._rpoPolicyConfig;
  }
  public putRpoPolicyConfig(value: DbServiceRpoPolicyConfig) {
    this._rpoPolicyConfig.internalValue = value;
  }
  public resetRpoPolicyConfig() {
    this._rpoPolicyConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rpoPolicyConfigInput() {
    return this._rpoPolicyConfig.internalValue;
  }

  // service_connectivity - computed: false, optional: false, required: true
  private _serviceConnectivity = new DbServiceServiceConnectivityOutputReference(this, "service_connectivity");
  public get serviceConnectivity() {
    return this._serviceConnectivity;
  }
  public putServiceConnectivity(value: DbServiceServiceConnectivity) {
    this._serviceConnectivity.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceConnectivityInput() {
    return this._serviceConnectivity.internalValue;
  }

  // shared_with - computed: false, optional: true, required: false
  private _sharedWith = new DbServiceSharedWithOutputReference(this, "shared_with");
  public get sharedWith() {
    return this._sharedWith;
  }
  public putSharedWith(value: DbServiceSharedWith) {
    this._sharedWith.internalValue = value;
  }
  public resetSharedWith() {
    this._sharedWith.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedWithInput() {
    return this._sharedWith.internalValue;
  }

  // snapshot_configuration - computed: false, optional: true, required: false
  private _snapshotConfiguration = new DbServiceSnapshotConfigurationOutputReference(this, "snapshot_configuration");
  public get snapshotConfiguration() {
    return this._snapshotConfiguration;
  }
  public putSnapshotConfiguration(value: DbServiceSnapshotConfiguration) {
    this._snapshotConfiguration.internalValue = value;
  }
  public resetSnapshotConfiguration() {
    this._snapshotConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotConfigurationInput() {
    return this._snapshotConfiguration.internalValue;
  }

  // tags - computed: false, optional: true, required: false
  private _tags = new DbServiceTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: DbServiceTags[] | cdktf.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DbServiceTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DbServiceTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auto_minor_version_update: cdktf.booleanToTerraform(this._autoMinorVersionUpdate),
      block_until_complete: cdktf.booleanToTerraform(this._blockUntilComplete),
      description: cdktf.stringToTerraform(this._description),
      edition: cdktf.stringToTerraform(this._edition),
      enable_deletion_protection: cdktf.booleanToTerraform(this._enableDeletionProtection),
      enable_perf_insights: cdktf.booleanToTerraform(this._enablePerfInsights),
      enable_stop_protection: cdktf.booleanToTerraform(this._enableStopProtection),
      engine_type: cdktf.stringToTerraform(this._engineType),
      expected_status: cdktf.stringToTerraform(this._expectedStatus),
      name: cdktf.stringToTerraform(this._name),
      parent_availability_machine_id: cdktf.stringToTerraform(this._parentAvailabilityMachineId),
      pitr: cdktf.stringToTerraform(this._pitr),
      snapshot_id: cdktf.stringToTerraform(this._snapshotId),
      software_image: cdktf.stringToTerraform(this._softwareImage),
      software_image_version: cdktf.stringToTerraform(this._softwareImageVersion),
      subscription: cdktf.stringToTerraform(this._subscription),
      timeout: cdktf.numberToTerraform(this._timeout),
      topology: cdktf.stringToTerraform(this._topology),
      creds: dbServiceCredsToTerraform(this._creds.internalValue),
      databases: cdktf.listMapper(dbServiceDatabasesToTerraform, true)(this._databases.internalValue),
      deletion_config: dbServiceDeletionConfigToTerraform(this._deletionConfig.internalValue),
      engine_configuration: dbServiceEngineConfigurationToTerraform(this._engineConfiguration.internalValue),
      infrastructure: dbServiceInfrastructureToTerraform(this._infrastructure.internalValue),
      instances: cdktf.listMapper(dbServiceInstancesToTerraform, true)(this._instances.internalValue),
      integrations_config: dbServiceIntegrationsConfigToTerraform(this._integrationsConfig.internalValue),
      maintenance_window: dbServiceMaintenanceWindowToTerraform(this._maintenanceWindow.internalValue),
      rpo_policy_config: dbServiceRpoPolicyConfigToTerraform(this._rpoPolicyConfig.internalValue),
      service_connectivity: dbServiceServiceConnectivityToTerraform(this._serviceConnectivity.internalValue),
      shared_with: dbServiceSharedWithToTerraform(this._sharedWith.internalValue),
      snapshot_configuration: dbServiceSnapshotConfigurationToTerraform(this._snapshotConfiguration.internalValue),
      tags: cdktf.listMapper(dbServiceTagsToTerraform, true)(this._tags.internalValue),
      timeouts: dbServiceTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auto_minor_version_update: {
        value: cdktf.booleanToHclTerraform(this._autoMinorVersionUpdate),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      block_until_complete: {
        value: cdktf.booleanToHclTerraform(this._blockUntilComplete),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      edition: {
        value: cdktf.stringToHclTerraform(this._edition),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_deletion_protection: {
        value: cdktf.booleanToHclTerraform(this._enableDeletionProtection),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_perf_insights: {
        value: cdktf.booleanToHclTerraform(this._enablePerfInsights),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_stop_protection: {
        value: cdktf.booleanToHclTerraform(this._enableStopProtection),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      engine_type: {
        value: cdktf.stringToHclTerraform(this._engineType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      expected_status: {
        value: cdktf.stringToHclTerraform(this._expectedStatus),
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
      parent_availability_machine_id: {
        value: cdktf.stringToHclTerraform(this._parentAvailabilityMachineId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pitr: {
        value: cdktf.stringToHclTerraform(this._pitr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      snapshot_id: {
        value: cdktf.stringToHclTerraform(this._snapshotId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      software_image: {
        value: cdktf.stringToHclTerraform(this._softwareImage),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      software_image_version: {
        value: cdktf.stringToHclTerraform(this._softwareImageVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subscription: {
        value: cdktf.stringToHclTerraform(this._subscription),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeout: {
        value: cdktf.numberToHclTerraform(this._timeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      topology: {
        value: cdktf.stringToHclTerraform(this._topology),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      creds: {
        value: dbServiceCredsToHclTerraform(this._creds.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DbServiceCredsList",
      },
      databases: {
        value: cdktf.listMapperHcl(dbServiceDatabasesToHclTerraform, true)(this._databases.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DbServiceDatabasesList",
      },
      deletion_config: {
        value: dbServiceDeletionConfigToHclTerraform(this._deletionConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DbServiceDeletionConfigList",
      },
      engine_configuration: {
        value: dbServiceEngineConfigurationToHclTerraform(this._engineConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DbServiceEngineConfigurationList",
      },
      infrastructure: {
        value: dbServiceInfrastructureToHclTerraform(this._infrastructure.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DbServiceInfrastructureList",
      },
      instances: {
        value: cdktf.listMapperHcl(dbServiceInstancesToHclTerraform, true)(this._instances.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DbServiceInstancesList",
      },
      integrations_config: {
        value: dbServiceIntegrationsConfigToHclTerraform(this._integrationsConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DbServiceIntegrationsConfigList",
      },
      maintenance_window: {
        value: dbServiceMaintenanceWindowToHclTerraform(this._maintenanceWindow.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DbServiceMaintenanceWindowList",
      },
      rpo_policy_config: {
        value: dbServiceRpoPolicyConfigToHclTerraform(this._rpoPolicyConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DbServiceRpoPolicyConfigList",
      },
      service_connectivity: {
        value: dbServiceServiceConnectivityToHclTerraform(this._serviceConnectivity.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DbServiceServiceConnectivityList",
      },
      shared_with: {
        value: dbServiceSharedWithToHclTerraform(this._sharedWith.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DbServiceSharedWithList",
      },
      snapshot_configuration: {
        value: dbServiceSnapshotConfigurationToHclTerraform(this._snapshotConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DbServiceSnapshotConfigurationList",
      },
      tags: {
        value: cdktf.listMapperHcl(dbServiceTagsToHclTerraform, true)(this._tags.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DbServiceTagsList",
      },
      timeouts: {
        value: dbServiceTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DbServiceTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
