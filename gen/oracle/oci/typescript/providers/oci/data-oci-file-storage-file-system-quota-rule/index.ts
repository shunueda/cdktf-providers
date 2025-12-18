// https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/file_storage_file_system_quota_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciFileStorageFileSystemQuotaRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/file_storage_file_system_quota_rule#are_violators_only DataOciFileStorageFileSystemQuotaRule#are_violators_only}
  */
  readonly areViolatorsOnly?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/file_storage_file_system_quota_rule#file_system_id DataOciFileStorageFileSystemQuotaRule#file_system_id}
  */
  readonly fileSystemId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/file_storage_file_system_quota_rule#quota_rule_id DataOciFileStorageFileSystemQuotaRule#quota_rule_id}
  */
  readonly quotaRuleId?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/file_storage_file_system_quota_rule oci_file_storage_file_system_quota_rule}
*/
export class DataOciFileStorageFileSystemQuotaRule extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_file_storage_file_system_quota_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciFileStorageFileSystemQuotaRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciFileStorageFileSystemQuotaRule to import
  * @param importFromId The id of the existing DataOciFileStorageFileSystemQuotaRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/file_storage_file_system_quota_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciFileStorageFileSystemQuotaRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_file_storage_file_system_quota_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/file_storage_file_system_quota_rule oci_file_storage_file_system_quota_rule} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciFileStorageFileSystemQuotaRuleConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciFileStorageFileSystemQuotaRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_file_storage_file_system_quota_rule',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.29.0',
        providerVersionConstraint: '7.29.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._areViolatorsOnly = config.areViolatorsOnly;
    this._fileSystemId = config.fileSystemId;
    this._quotaRuleId = config.quotaRuleId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // are_violators_only - computed: false, optional: true, required: false
  private _areViolatorsOnly?: string; 
  public get areViolatorsOnly() {
    return this.getStringAttribute('are_violators_only');
  }
  public set areViolatorsOnly(value: string) {
    this._areViolatorsOnly = value;
  }
  public resetAreViolatorsOnly() {
    this._areViolatorsOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get areViolatorsOnlyInput() {
    return this._areViolatorsOnly;
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // file_system_id - computed: false, optional: false, required: true
  private _fileSystemId?: string; 
  public get fileSystemId() {
    return this.getStringAttribute('file_system_id');
  }
  public set fileSystemId(value: string) {
    this._fileSystemId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fileSystemIdInput() {
    return this._fileSystemId;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_hard_quota - computed: true, optional: false, required: false
  public get isHardQuota() {
    return this.getBooleanAttribute('is_hard_quota');
  }

  // principal_id - computed: true, optional: false, required: false
  public get principalId() {
    return this.getNumberAttribute('principal_id');
  }

  // principal_type - computed: true, optional: false, required: false
  public get principalType() {
    return this.getStringAttribute('principal_type');
  }

  // quota_limit_in_gigabytes - computed: true, optional: false, required: false
  public get quotaLimitInGigabytes() {
    return this.getNumberAttribute('quota_limit_in_gigabytes');
  }

  // quota_rule_id - computed: false, optional: true, required: false
  private _quotaRuleId?: string; 
  public get quotaRuleId() {
    return this.getStringAttribute('quota_rule_id');
  }
  public set quotaRuleId(value: string) {
    this._quotaRuleId = value;
  }
  public resetQuotaRuleId() {
    this._quotaRuleId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quotaRuleIdInput() {
    return this._quotaRuleId;
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      are_violators_only: cdktf.stringToTerraform(this._areViolatorsOnly),
      file_system_id: cdktf.stringToTerraform(this._fileSystemId),
      quota_rule_id: cdktf.stringToTerraform(this._quotaRuleId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      are_violators_only: {
        value: cdktf.stringToHclTerraform(this._areViolatorsOnly),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      file_system_id: {
        value: cdktf.stringToHclTerraform(this._fileSystemId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      quota_rule_id: {
        value: cdktf.stringToHclTerraform(this._quotaRuleId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
