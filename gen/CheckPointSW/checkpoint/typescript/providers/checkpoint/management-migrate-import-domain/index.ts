// https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_migrate_import_domain
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ManagementMigrateImportDomainConfig extends cdktf.TerraformMetaArguments {
  /**
  * IPv4 address.<br><font color="red">Required only for</font> importing Security Management Server into Multi-Domain Server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_migrate_import_domain#domain_ip_address ManagementMigrateImportDomain#domain_ip_address}
  */
  readonly domainIpAddress: string;
  /**
  * Domain name. Should be unique in the MDS.<br><font color="red">Required only for</font> importing Security Management Server into Multi-Domain Server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_migrate_import_domain#domain_name ManagementMigrateImportDomain#domain_name}
  */
  readonly domainName: string;
  /**
  * Multi Domain server name.<br><font color="red">Required only for</font> importing Security Management Server into Multi-Domain Server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_migrate_import_domain#domain_server_name ManagementMigrateImportDomain#domain_server_name}
  */
  readonly domainServerName: string;
  /**
  * Path to the exported file to be imported. <br>Should be the full file path (example, "/var/log/domain1_exported.tgz").
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_migrate_import_domain#file_path ManagementMigrateImportDomain#file_path}
  */
  readonly filePath: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_migrate_import_domain#id ManagementMigrateImportDomain#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Import logs from the input package.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_migrate_import_domain#include_logs ManagementMigrateImportDomain#include_logs}
  */
  readonly includeLogs?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_migrate_import_domain checkpoint_management_migrate_import_domain}
*/
export class ManagementMigrateImportDomain extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "checkpoint_management_migrate_import_domain";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ManagementMigrateImportDomain resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ManagementMigrateImportDomain to import
  * @param importFromId The id of the existing ManagementMigrateImportDomain that should be imported. Refer to the {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_migrate_import_domain#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ManagementMigrateImportDomain to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "checkpoint_management_migrate_import_domain", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_migrate_import_domain checkpoint_management_migrate_import_domain} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ManagementMigrateImportDomainConfig
  */
  public constructor(scope: Construct, id: string, config: ManagementMigrateImportDomainConfig) {
    super(scope, id, {
      terraformResourceType: 'checkpoint_management_migrate_import_domain',
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
    this._includeLogs = config.includeLogs;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // domain_ip_address - computed: false, optional: false, required: true
  private _domainIpAddress?: string; 
  public get domainIpAddress() {
    return this.getStringAttribute('domain_ip_address');
  }
  public set domainIpAddress(value: string) {
    this._domainIpAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainIpAddressInput() {
    return this._domainIpAddress;
  }

  // domain_name - computed: false, optional: false, required: true
  private _domainName?: string; 
  public get domainName() {
    return this.getStringAttribute('domain_name');
  }
  public set domainName(value: string) {
    this._domainName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainNameInput() {
    return this._domainName;
  }

  // domain_server_name - computed: false, optional: false, required: true
  private _domainServerName?: string; 
  public get domainServerName() {
    return this.getStringAttribute('domain_server_name');
  }
  public set domainServerName(value: string) {
    this._domainServerName = value;
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

  // task_id - computed: true, optional: false, required: false
  public get taskId() {
    return this.getStringAttribute('task_id');
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
      include_logs: cdktf.booleanToTerraform(this._includeLogs),
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
      include_logs: {
        value: cdktf.booleanToHclTerraform(this._includeLogs),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
