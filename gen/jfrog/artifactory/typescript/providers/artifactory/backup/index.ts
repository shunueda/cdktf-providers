// https://registry.terraform.io/providers/jfrog/artifactory/12.11.1/docs/resources/backup
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BackupConfig extends cdktf.TerraformMetaArguments {
  /**
  * If set to true, backups will be created within a Zip archive (Slow and CPU intensive). Default value is `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.1/docs/resources/backup#create_archive Backup#create_archive}
  */
  readonly createArchive?: boolean | cdktf.IResolvable;
  /**
  * Cron expression to control the backup frequency.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.1/docs/resources/backup#cron_exp Backup#cron_exp}
  */
  readonly cronExp: string;
  /**
  * Flag to enable or disable the backup config. Default value is `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.1/docs/resources/backup#enabled Backup#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * When set to true, new repositories will not be automatically added to the backup. Default value is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.1/docs/resources/backup#exclude_new_repositories Backup#exclude_new_repositories}
  */
  readonly excludeNewRepositories?: boolean | cdktf.IResolvable;
  /**
  * List of excluded repositories from the backup.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.1/docs/resources/backup#excluded_repositories Backup#excluded_repositories}
  */
  readonly excludedRepositories?: string[];
  /**
  * When set to true, mission control will not be automatically added to the backup. Default value is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.1/docs/resources/backup#export_mission_control Backup#export_mission_control}
  */
  readonly exportMissionControl?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.1/docs/resources/backup#key Backup#key}
  */
  readonly key: string;
  /**
  * The number of hours to keep a backup before Artifactory will clean it up to free up disk space. Applicable only to non-incremental backups. Default value is 168 hours i.e. 7 days.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.1/docs/resources/backup#retention_period_hours Backup#retention_period_hours}
  */
  readonly retentionPeriodHours?: number;
  /**
  * If set to true, all Artifactory administrators will be notified by email if any problem is encountered during backup. Default value is `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.1/docs/resources/backup#send_mail_on_error Backup#send_mail_on_error}
  */
  readonly sendMailOnError?: boolean | cdktf.IResolvable;
  /**
  * If set, Artifactory will verify that the backup target location has enough disk space available to hold the backed up data. If there is not enough space available, Artifactory will abort the backup and write a message in the log file. Applicable only to non-incremental backups. Default value is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.1/docs/resources/backup#verify_disk_space Backup#verify_disk_space}
  */
  readonly verifyDiskSpace?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.1/docs/resources/backup artifactory_backup}
*/
export class Backup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "artifactory_backup";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Backup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Backup to import
  * @param importFromId The id of the existing Backup that should be imported. Refer to the {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.1/docs/resources/backup#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Backup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "artifactory_backup", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.1/docs/resources/backup artifactory_backup} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BackupConfig
  */
  public constructor(scope: Construct, id: string, config: BackupConfig) {
    super(scope, id, {
      terraformResourceType: 'artifactory_backup',
      terraformGeneratorMetadata: {
        providerName: 'artifactory',
        providerVersion: '12.11.1',
        providerVersionConstraint: '12.11.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._createArchive = config.createArchive;
    this._cronExp = config.cronExp;
    this._enabled = config.enabled;
    this._excludeNewRepositories = config.excludeNewRepositories;
    this._excludedRepositories = config.excludedRepositories;
    this._exportMissionControl = config.exportMissionControl;
    this._key = config.key;
    this._retentionPeriodHours = config.retentionPeriodHours;
    this._sendMailOnError = config.sendMailOnError;
    this._verifyDiskSpace = config.verifyDiskSpace;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // create_archive - computed: true, optional: true, required: false
  private _createArchive?: boolean | cdktf.IResolvable; 
  public get createArchive() {
    return this.getBooleanAttribute('create_archive');
  }
  public set createArchive(value: boolean | cdktf.IResolvable) {
    this._createArchive = value;
  }
  public resetCreateArchive() {
    this._createArchive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createArchiveInput() {
    return this._createArchive;
  }

  // cron_exp - computed: false, optional: false, required: true
  private _cronExp?: string; 
  public get cronExp() {
    return this.getStringAttribute('cron_exp');
  }
  public set cronExp(value: string) {
    this._cronExp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cronExpInput() {
    return this._cronExp;
  }

  // enabled - computed: true, optional: true, required: false
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

  // exclude_new_repositories - computed: true, optional: true, required: false
  private _excludeNewRepositories?: boolean | cdktf.IResolvable; 
  public get excludeNewRepositories() {
    return this.getBooleanAttribute('exclude_new_repositories');
  }
  public set excludeNewRepositories(value: boolean | cdktf.IResolvable) {
    this._excludeNewRepositories = value;
  }
  public resetExcludeNewRepositories() {
    this._excludeNewRepositories = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeNewRepositoriesInput() {
    return this._excludeNewRepositories;
  }

  // excluded_repositories - computed: false, optional: true, required: false
  private _excludedRepositories?: string[]; 
  public get excludedRepositories() {
    return this.getListAttribute('excluded_repositories');
  }
  public set excludedRepositories(value: string[]) {
    this._excludedRepositories = value;
  }
  public resetExcludedRepositories() {
    this._excludedRepositories = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludedRepositoriesInput() {
    return this._excludedRepositories;
  }

  // export_mission_control - computed: true, optional: true, required: false
  private _exportMissionControl?: boolean | cdktf.IResolvable; 
  public get exportMissionControl() {
    return this.getBooleanAttribute('export_mission_control');
  }
  public set exportMissionControl(value: boolean | cdktf.IResolvable) {
    this._exportMissionControl = value;
  }
  public resetExportMissionControl() {
    this._exportMissionControl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exportMissionControlInput() {
    return this._exportMissionControl;
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // retention_period_hours - computed: true, optional: true, required: false
  private _retentionPeriodHours?: number; 
  public get retentionPeriodHours() {
    return this.getNumberAttribute('retention_period_hours');
  }
  public set retentionPeriodHours(value: number) {
    this._retentionPeriodHours = value;
  }
  public resetRetentionPeriodHours() {
    this._retentionPeriodHours = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionPeriodHoursInput() {
    return this._retentionPeriodHours;
  }

  // send_mail_on_error - computed: true, optional: true, required: false
  private _sendMailOnError?: boolean | cdktf.IResolvable; 
  public get sendMailOnError() {
    return this.getBooleanAttribute('send_mail_on_error');
  }
  public set sendMailOnError(value: boolean | cdktf.IResolvable) {
    this._sendMailOnError = value;
  }
  public resetSendMailOnError() {
    this._sendMailOnError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendMailOnErrorInput() {
    return this._sendMailOnError;
  }

  // verify_disk_space - computed: true, optional: true, required: false
  private _verifyDiskSpace?: boolean | cdktf.IResolvable; 
  public get verifyDiskSpace() {
    return this.getBooleanAttribute('verify_disk_space');
  }
  public set verifyDiskSpace(value: boolean | cdktf.IResolvable) {
    this._verifyDiskSpace = value;
  }
  public resetVerifyDiskSpace() {
    this._verifyDiskSpace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verifyDiskSpaceInput() {
    return this._verifyDiskSpace;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      create_archive: cdktf.booleanToTerraform(this._createArchive),
      cron_exp: cdktf.stringToTerraform(this._cronExp),
      enabled: cdktf.booleanToTerraform(this._enabled),
      exclude_new_repositories: cdktf.booleanToTerraform(this._excludeNewRepositories),
      excluded_repositories: cdktf.listMapper(cdktf.stringToTerraform, false)(this._excludedRepositories),
      export_mission_control: cdktf.booleanToTerraform(this._exportMissionControl),
      key: cdktf.stringToTerraform(this._key),
      retention_period_hours: cdktf.numberToTerraform(this._retentionPeriodHours),
      send_mail_on_error: cdktf.booleanToTerraform(this._sendMailOnError),
      verify_disk_space: cdktf.booleanToTerraform(this._verifyDiskSpace),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      create_archive: {
        value: cdktf.booleanToHclTerraform(this._createArchive),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      cron_exp: {
        value: cdktf.stringToHclTerraform(this._cronExp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      exclude_new_repositories: {
        value: cdktf.booleanToHclTerraform(this._excludeNewRepositories),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      excluded_repositories: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._excludedRepositories),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      export_mission_control: {
        value: cdktf.booleanToHclTerraform(this._exportMissionControl),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      key: {
        value: cdktf.stringToHclTerraform(this._key),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      retention_period_hours: {
        value: cdktf.numberToHclTerraform(this._retentionPeriodHours),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      send_mail_on_error: {
        value: cdktf.booleanToHclTerraform(this._sendMailOnError),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      verify_disk_space: {
        value: cdktf.booleanToHclTerraform(this._verifyDiskSpace),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
