// https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_command_export_management
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ManagementCommandExportManagementConfig extends cdktf.TerraformMetaArguments {
  /**
  * Domain name to be exported.<br><font color="red">Required only for</font> exporting a Domain from the Multi-Domain Server or backing up Domain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_command_export_management#domain_name ManagementCommandExportManagement#domain_name}
  */
  readonly domainName?: string;
  /**
  * Path in which the exported database file is saved.<br><font color="red">Required only</font> when not using pre-export-verification-only flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_command_export_management#file_path ManagementCommandExportManagement#file_path}
  */
  readonly filePath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_command_export_management#id ManagementCommandExportManagement#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Ignoring the verification warnings. By Setting this parameter to 'true' export will not be blocked by warnings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_command_export_management#ignore_warnings ManagementCommandExportManagement#ignore_warnings}
  */
  readonly ignoreWarnings?: boolean | cdktf.IResolvable;
  /**
  * Include export of the Endpoint Security Management configuration files.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_command_export_management#include_endpoint_configuration ManagementCommandExportManagement#include_endpoint_configuration}
  */
  readonly includeEndpointConfiguration?: boolean | cdktf.IResolvable;
  /**
  * Include export of the Endpoint Security Management database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_command_export_management#include_endpoint_database ManagementCommandExportManagement#include_endpoint_database}
  */
  readonly includeEndpointDatabase?: boolean | cdktf.IResolvable;
  /**
  * Export logs without log indexes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_command_export_management#include_logs ManagementCommandExportManagement#include_logs}
  */
  readonly includeLogs?: boolean | cdktf.IResolvable;
  /**
  * Export logs with log indexes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_command_export_management#include_logs_indexes ManagementCommandExportManagement#include_logs_indexes}
  */
  readonly includeLogsIndexes?: boolean | cdktf.IResolvable;
  /**
  * If true, the exported Domain will be suitable for import on the same Multi-Domain Server only.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_command_export_management#is_domain_backup ManagementCommandExportManagement#is_domain_backup}
  */
  readonly isDomainBackup?: boolean | cdktf.IResolvable;
  /**
  * If true, the exported Security Management Server will be suitable for import on the Multi-Domain Server only.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_command_export_management#is_smc_to_mds ManagementCommandExportManagement#is_smc_to_mds}
  */
  readonly isSmcToMds?: boolean | cdktf.IResolvable;
  /**
  * If true, only runs the pre-export verifications instead of the full export.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_command_export_management#pre_export_verification_only ManagementCommandExportManagement#pre_export_verification_only}
  */
  readonly preExportVerificationOnly?: boolean | cdktf.IResolvable;
  /**
  * Target version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_command_export_management#version ManagementCommandExportManagement#version}
  */
  readonly version?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_command_export_management checkpoint_management_command_export_management}
*/
export class ManagementCommandExportManagement extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "checkpoint_management_command_export_management";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ManagementCommandExportManagement resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ManagementCommandExportManagement to import
  * @param importFromId The id of the existing ManagementCommandExportManagement that should be imported. Refer to the {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_command_export_management#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ManagementCommandExportManagement to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "checkpoint_management_command_export_management", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_command_export_management checkpoint_management_command_export_management} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ManagementCommandExportManagementConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ManagementCommandExportManagementConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'checkpoint_management_command_export_management',
      terraformGeneratorMetadata: {
        providerName: 'checkpoint',
        providerVersion: '2.11.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._domainName = config.domainName;
    this._filePath = config.filePath;
    this._id = config.id;
    this._ignoreWarnings = config.ignoreWarnings;
    this._includeEndpointConfiguration = config.includeEndpointConfiguration;
    this._includeEndpointDatabase = config.includeEndpointDatabase;
    this._includeLogs = config.includeLogs;
    this._includeLogsIndexes = config.includeLogsIndexes;
    this._isDomainBackup = config.isDomainBackup;
    this._isSmcToMds = config.isSmcToMds;
    this._preExportVerificationOnly = config.preExportVerificationOnly;
    this._version = config.version;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // domain_name - computed: false, optional: true, required: false
  private _domainName?: string; 
  public get domainName() {
    return this.getStringAttribute('domain_name');
  }
  public set domainName(value: string) {
    this._domainName = value;
  }
  public resetDomainName() {
    this._domainName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainNameInput() {
    return this._domainName;
  }

  // file_path - computed: false, optional: true, required: false
  private _filePath?: string; 
  public get filePath() {
    return this.getStringAttribute('file_path');
  }
  public set filePath(value: string) {
    this._filePath = value;
  }
  public resetFilePath() {
    this._filePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filePathInput() {
    return this._filePath;
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

  // ignore_warnings - computed: false, optional: true, required: false
  private _ignoreWarnings?: boolean | cdktf.IResolvable; 
  public get ignoreWarnings() {
    return this.getBooleanAttribute('ignore_warnings');
  }
  public set ignoreWarnings(value: boolean | cdktf.IResolvable) {
    this._ignoreWarnings = value;
  }
  public resetIgnoreWarnings() {
    this._ignoreWarnings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreWarningsInput() {
    return this._ignoreWarnings;
  }

  // include_endpoint_configuration - computed: false, optional: true, required: false
  private _includeEndpointConfiguration?: boolean | cdktf.IResolvable; 
  public get includeEndpointConfiguration() {
    return this.getBooleanAttribute('include_endpoint_configuration');
  }
  public set includeEndpointConfiguration(value: boolean | cdktf.IResolvable) {
    this._includeEndpointConfiguration = value;
  }
  public resetIncludeEndpointConfiguration() {
    this._includeEndpointConfiguration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeEndpointConfigurationInput() {
    return this._includeEndpointConfiguration;
  }

  // include_endpoint_database - computed: false, optional: true, required: false
  private _includeEndpointDatabase?: boolean | cdktf.IResolvable; 
  public get includeEndpointDatabase() {
    return this.getBooleanAttribute('include_endpoint_database');
  }
  public set includeEndpointDatabase(value: boolean | cdktf.IResolvable) {
    this._includeEndpointDatabase = value;
  }
  public resetIncludeEndpointDatabase() {
    this._includeEndpointDatabase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeEndpointDatabaseInput() {
    return this._includeEndpointDatabase;
  }

  // include_logs - computed: false, optional: true, required: false
  private _includeLogs?: boolean | cdktf.IResolvable; 
  public get includeLogs() {
    return this.getBooleanAttribute('include_logs');
  }
  public set includeLogs(value: boolean | cdktf.IResolvable) {
    this._includeLogs = value;
  }
  public resetIncludeLogs() {
    this._includeLogs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeLogsInput() {
    return this._includeLogs;
  }

  // include_logs_indexes - computed: false, optional: true, required: false
  private _includeLogsIndexes?: boolean | cdktf.IResolvable; 
  public get includeLogsIndexes() {
    return this.getBooleanAttribute('include_logs_indexes');
  }
  public set includeLogsIndexes(value: boolean | cdktf.IResolvable) {
    this._includeLogsIndexes = value;
  }
  public resetIncludeLogsIndexes() {
    this._includeLogsIndexes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeLogsIndexesInput() {
    return this._includeLogsIndexes;
  }

  // is_domain_backup - computed: false, optional: true, required: false
  private _isDomainBackup?: boolean | cdktf.IResolvable; 
  public get isDomainBackup() {
    return this.getBooleanAttribute('is_domain_backup');
  }
  public set isDomainBackup(value: boolean | cdktf.IResolvable) {
    this._isDomainBackup = value;
  }
  public resetIsDomainBackup() {
    this._isDomainBackup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isDomainBackupInput() {
    return this._isDomainBackup;
  }

  // is_smc_to_mds - computed: false, optional: true, required: false
  private _isSmcToMds?: boolean | cdktf.IResolvable; 
  public get isSmcToMds() {
    return this.getBooleanAttribute('is_smc_to_mds');
  }
  public set isSmcToMds(value: boolean | cdktf.IResolvable) {
    this._isSmcToMds = value;
  }
  public resetIsSmcToMds() {
    this._isSmcToMds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isSmcToMdsInput() {
    return this._isSmcToMds;
  }

  // pre_export_verification_only - computed: false, optional: true, required: false
  private _preExportVerificationOnly?: boolean | cdktf.IResolvable; 
  public get preExportVerificationOnly() {
    return this.getBooleanAttribute('pre_export_verification_only');
  }
  public set preExportVerificationOnly(value: boolean | cdktf.IResolvable) {
    this._preExportVerificationOnly = value;
  }
  public resetPreExportVerificationOnly() {
    this._preExportVerificationOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preExportVerificationOnlyInput() {
    return this._preExportVerificationOnly;
  }

  // task_id - computed: true, optional: false, required: false
  public get taskId() {
    return this.getStringAttribute('task_id');
  }

  // version - computed: false, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      domain_name: cdktf.stringToTerraform(this._domainName),
      file_path: cdktf.stringToTerraform(this._filePath),
      id: cdktf.stringToTerraform(this._id),
      ignore_warnings: cdktf.booleanToTerraform(this._ignoreWarnings),
      include_endpoint_configuration: cdktf.booleanToTerraform(this._includeEndpointConfiguration),
      include_endpoint_database: cdktf.booleanToTerraform(this._includeEndpointDatabase),
      include_logs: cdktf.booleanToTerraform(this._includeLogs),
      include_logs_indexes: cdktf.booleanToTerraform(this._includeLogsIndexes),
      is_domain_backup: cdktf.booleanToTerraform(this._isDomainBackup),
      is_smc_to_mds: cdktf.booleanToTerraform(this._isSmcToMds),
      pre_export_verification_only: cdktf.booleanToTerraform(this._preExportVerificationOnly),
      version: cdktf.stringToTerraform(this._version),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      domain_name: {
        value: cdktf.stringToHclTerraform(this._domainName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      file_path: {
        value: cdktf.stringToHclTerraform(this._filePath),
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
      ignore_warnings: {
        value: cdktf.booleanToHclTerraform(this._ignoreWarnings),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      include_endpoint_configuration: {
        value: cdktf.booleanToHclTerraform(this._includeEndpointConfiguration),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      include_endpoint_database: {
        value: cdktf.booleanToHclTerraform(this._includeEndpointDatabase),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      include_logs: {
        value: cdktf.booleanToHclTerraform(this._includeLogs),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      include_logs_indexes: {
        value: cdktf.booleanToHclTerraform(this._includeLogsIndexes),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_domain_backup: {
        value: cdktf.booleanToHclTerraform(this._isDomainBackup),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_smc_to_mds: {
        value: cdktf.booleanToHclTerraform(this._isSmcToMds),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      pre_export_verification_only: {
        value: cdktf.booleanToHclTerraform(this._preExportVerificationOnly),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      version: {
        value: cdktf.stringToHclTerraform(this._version),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
