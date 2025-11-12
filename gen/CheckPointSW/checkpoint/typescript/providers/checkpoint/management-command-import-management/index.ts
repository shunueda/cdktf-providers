// https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_command_import_management
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ManagementCommandImportManagementConfig extends cdktf.TerraformMetaArguments {
  /**
  * IPv4 address for the imported Domain. Required only for importing the Security Management Server into the Multi-Domain Server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_command_import_management#domain_ip_address ManagementCommandImportManagement#domain_ip_address}
  */
  readonly domainIpAddress?: string;
  /**
  * Domain name to be imported. Must be unique in the Multi-Domain Server. Required only for importing the Security Management Server into the Multi-Domain Server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_command_import_management#domain_name ManagementCommandImportManagement#domain_name}
  */
  readonly domainName?: string;
  /**
  * Multi-Domain Server name for the imported Domain. Required only for importing the Security Management Server into the Multi-Domain Server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_command_import_management#domain_server_name ManagementCommandImportManagement#domain_server_name}
  */
  readonly domainServerName?: string;
  /**
  * Path to the exported database file to be imported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_command_import_management#file_path ManagementCommandImportManagement#file_path}
  */
  readonly filePath: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_command_import_management#id ManagementCommandImportManagement#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Ignoring the verification warnings. By Setting this parameter to 'true' import will not be blocked by warnings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_command_import_management#ignore_warnings ManagementCommandImportManagement#ignore_warnings}
  */
  readonly ignoreWarnings?: boolean | cdktf.IResolvable;
  /**
  * Include import of the Endpoint Security Management configuration files.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_command_import_management#include_endpoint_configuration ManagementCommandImportManagement#include_endpoint_configuration}
  */
  readonly includeEndpointConfiguration?: boolean | cdktf.IResolvable;
  /**
  * Include import of the Endpoint Security Management database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_command_import_management#include_endpoint_database ManagementCommandImportManagement#include_endpoint_database}
  */
  readonly includeEndpointDatabase?: boolean | cdktf.IResolvable;
  /**
  * Import logs without log indexes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_command_import_management#include_logs ManagementCommandImportManagement#include_logs}
  */
  readonly includeLogs?: boolean | cdktf.IResolvable;
  /**
  * Import logs with log indexes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_command_import_management#include_logs_indexes ManagementCommandImportManagement#include_logs_indexes}
  */
  readonly includeLogsIndexes?: boolean | cdktf.IResolvable;
  /**
  * If true, only runs the pre-import verifications instead of the full import.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_command_import_management#pre_import_verification_only ManagementCommandImportManagement#pre_import_verification_only}
  */
  readonly preImportVerificationOnly?: boolean | cdktf.IResolvable;
  /**
  * If true, verify that the restore operation is valid for this input file and this environment. <br>Note: Restore operation will not be executed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_command_import_management#verify_domain_restore ManagementCommandImportManagement#verify_domain_restore}
  */
  readonly verifyDomainRestore?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_command_import_management checkpoint_management_command_import_management}
*/
export class ManagementCommandImportManagement extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "checkpoint_management_command_import_management";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ManagementCommandImportManagement resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ManagementCommandImportManagement to import
  * @param importFromId The id of the existing ManagementCommandImportManagement that should be imported. Refer to the {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_command_import_management#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ManagementCommandImportManagement to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "checkpoint_management_command_import_management", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_command_import_management checkpoint_management_command_import_management} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ManagementCommandImportManagementConfig
  */
  public constructor(scope: Construct, id: string, config: ManagementCommandImportManagementConfig) {
    super(scope, id, {
      terraformResourceType: 'checkpoint_management_command_import_management',
      terraformGeneratorMetadata: {
        providerName: 'checkpoint',
        providerVersion: '2.12.0',
        providerVersionConstraint: '2.12.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._domainIpAddress = config.domainIpAddress;
    this._domainName = config.domainName;
    this._domainServerName = config.domainServerName;
    this._filePath = config.filePath;
    this._id = config.id;
    this._ignoreWarnings = config.ignoreWarnings;
    this._includeEndpointConfiguration = config.includeEndpointConfiguration;
    this._includeEndpointDatabase = config.includeEndpointDatabase;
    this._includeLogs = config.includeLogs;
    this._includeLogsIndexes = config.includeLogsIndexes;
    this._preImportVerificationOnly = config.preImportVerificationOnly;
    this._verifyDomainRestore = config.verifyDomainRestore;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // domain_ip_address - computed: false, optional: true, required: false
  private _domainIpAddress?: string; 
  public get domainIpAddress() {
    return this.getStringAttribute('domain_ip_address');
  }
  public set domainIpAddress(value: string) {
    this._domainIpAddress = value;
  }
  public resetDomainIpAddress() {
    this._domainIpAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainIpAddressInput() {
    return this._domainIpAddress;
  }

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

  // domain_server_name - computed: false, optional: true, required: false
  private _domainServerName?: string; 
  public get domainServerName() {
    return this.getStringAttribute('domain_server_name');
  }
  public set domainServerName(value: string) {
    this._domainServerName = value;
  }
  public resetDomainServerName() {
    this._domainServerName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainServerNameInput() {
    return this._domainServerName;
  }

  // file_path - computed: false, optional: false, required: true
  private _filePath?: string; 
  public get filePath() {
    return this.getStringAttribute('file_path');
  }
  public set filePath(value: string) {
    this._filePath = value;
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

  // login_required - computed: true, optional: false, required: false
  public get loginRequired() {
    return this.getStringAttribute('login_required');
  }

  // pre_import_verification_only - computed: false, optional: true, required: false
  private _preImportVerificationOnly?: boolean | cdktf.IResolvable; 
  public get preImportVerificationOnly() {
    return this.getBooleanAttribute('pre_import_verification_only');
  }
  public set preImportVerificationOnly(value: boolean | cdktf.IResolvable) {
    this._preImportVerificationOnly = value;
  }
  public resetPreImportVerificationOnly() {
    this._preImportVerificationOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preImportVerificationOnlyInput() {
    return this._preImportVerificationOnly;
  }

  // task_id - computed: true, optional: false, required: false
  public get taskId() {
    return this.getStringAttribute('task_id');
  }

  // verify_domain_restore - computed: false, optional: true, required: false
  private _verifyDomainRestore?: boolean | cdktf.IResolvable; 
  public get verifyDomainRestore() {
    return this.getBooleanAttribute('verify_domain_restore');
  }
  public set verifyDomainRestore(value: boolean | cdktf.IResolvable) {
    this._verifyDomainRestore = value;
  }
  public resetVerifyDomainRestore() {
    this._verifyDomainRestore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verifyDomainRestoreInput() {
    return this._verifyDomainRestore;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      domain_ip_address: cdktf.stringToTerraform(this._domainIpAddress),
      domain_name: cdktf.stringToTerraform(this._domainName),
      domain_server_name: cdktf.stringToTerraform(this._domainServerName),
      file_path: cdktf.stringToTerraform(this._filePath),
      id: cdktf.stringToTerraform(this._id),
      ignore_warnings: cdktf.booleanToTerraform(this._ignoreWarnings),
      include_endpoint_configuration: cdktf.booleanToTerraform(this._includeEndpointConfiguration),
      include_endpoint_database: cdktf.booleanToTerraform(this._includeEndpointDatabase),
      include_logs: cdktf.booleanToTerraform(this._includeLogs),
      include_logs_indexes: cdktf.booleanToTerraform(this._includeLogsIndexes),
      pre_import_verification_only: cdktf.booleanToTerraform(this._preImportVerificationOnly),
      verify_domain_restore: cdktf.booleanToTerraform(this._verifyDomainRestore),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      domain_ip_address: {
        value: cdktf.stringToHclTerraform(this._domainIpAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      domain_name: {
        value: cdktf.stringToHclTerraform(this._domainName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      domain_server_name: {
        value: cdktf.stringToHclTerraform(this._domainServerName),
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
      pre_import_verification_only: {
        value: cdktf.booleanToHclTerraform(this._preImportVerificationOnly),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      verify_domain_restore: {
        value: cdktf.booleanToHclTerraform(this._verifyDomainRestore),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
