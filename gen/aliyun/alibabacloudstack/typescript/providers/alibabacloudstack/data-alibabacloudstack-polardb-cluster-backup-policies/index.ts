// https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/data-sources/polardb_cluster_backup_policies
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAlibabacloudstackPolardbClusterBackupPoliciesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/data-sources/polardb_cluster_backup_policies#db_cluster_id DataAlibabacloudstackPolardbClusterBackupPolicies#db_cluster_id}
  */
  readonly dbClusterId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/data-sources/polardb_cluster_backup_policies#id DataAlibabacloudstackPolardbClusterBackupPolicies#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/data-sources/polardb_cluster_backup_policies alibabacloudstack_polardb_cluster_backup_policies}
*/
export class DataAlibabacloudstackPolardbClusterBackupPolicies extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alibabacloudstack_polardb_cluster_backup_policies";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAlibabacloudstackPolardbClusterBackupPolicies resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAlibabacloudstackPolardbClusterBackupPolicies to import
  * @param importFromId The id of the existing DataAlibabacloudstackPolardbClusterBackupPolicies that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/data-sources/polardb_cluster_backup_policies#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAlibabacloudstackPolardbClusterBackupPolicies to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alibabacloudstack_polardb_cluster_backup_policies", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/data-sources/polardb_cluster_backup_policies alibabacloudstack_polardb_cluster_backup_policies} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAlibabacloudstackPolardbClusterBackupPoliciesConfig
  */
  public constructor(scope: Construct, id: string, config: DataAlibabacloudstackPolardbClusterBackupPoliciesConfig) {
    super(scope, id, {
      terraformResourceType: 'alibabacloudstack_polardb_cluster_backup_policies',
      terraformGeneratorMetadata: {
        providerName: 'alibabacloudstack',
        providerVersion: '3.18.21',
        providerVersionConstraint: '3.18.21'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._dbClusterId = config.dbClusterId;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // backup_frequency - computed: true, optional: false, required: false
  public get backupFrequency() {
    return this.getStringAttribute('backup_frequency');
  }

  // backup_retention_period - computed: true, optional: false, required: false
  public get backupRetentionPeriod() {
    return this.getNumberAttribute('backup_retention_period');
  }

  // backup_retention_policy_on_cluster_deletion - computed: true, optional: false, required: false
  public get backupRetentionPolicyOnClusterDeletion() {
    return this.getStringAttribute('backup_retention_policy_on_cluster_deletion');
  }

  // data_level1_backup_frequency - computed: true, optional: false, required: false
  public get dataLevel1BackupFrequency() {
    return this.getStringAttribute('data_level1_backup_frequency');
  }

  // data_level1_backup_period - computed: true, optional: false, required: false
  public get dataLevel1BackupPeriod() {
    return this.getStringAttribute('data_level1_backup_period');
  }

  // data_level1_backup_retention_period - computed: true, optional: false, required: false
  public get dataLevel1BackupRetentionPeriod() {
    return this.getNumberAttribute('data_level1_backup_retention_period');
  }

  // data_level1_backup_time - computed: true, optional: false, required: false
  public get dataLevel1BackupTime() {
    return this.getStringAttribute('data_level1_backup_time');
  }

  // data_level2_backup_another_region_region - computed: true, optional: false, required: false
  public get dataLevel2BackupAnotherRegionRegion() {
    return this.getStringAttribute('data_level2_backup_another_region_region');
  }

  // data_level2_backup_another_region_retention_period - computed: true, optional: false, required: false
  public get dataLevel2BackupAnotherRegionRetentionPeriod() {
    return this.getNumberAttribute('data_level2_backup_another_region_retention_period');
  }

  // data_level2_backup_period - computed: true, optional: false, required: false
  public get dataLevel2BackupPeriod() {
    return this.getStringAttribute('data_level2_backup_period');
  }

  // data_level2_backup_retention_period - computed: true, optional: false, required: false
  public get dataLevel2BackupRetentionPeriod() {
    return this.getNumberAttribute('data_level2_backup_retention_period');
  }

  // db_cluster_id - computed: false, optional: false, required: true
  private _dbClusterId?: string; 
  public get dbClusterId() {
    return this.getStringAttribute('db_cluster_id');
  }
  public set dbClusterId(value: string) {
    this._dbClusterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dbClusterIdInput() {
    return this._dbClusterId;
  }

  // enable_backup_log - computed: true, optional: false, required: false
  public get enableBackupLog() {
    return this.getNumberAttribute('enable_backup_log');
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

  // log_backup_another_region_region - computed: true, optional: false, required: false
  public get logBackupAnotherRegionRegion() {
    return this.getStringAttribute('log_backup_another_region_region');
  }

  // log_backup_another_region_retention_period - computed: true, optional: false, required: false
  public get logBackupAnotherRegionRetentionPeriod() {
    return this.getNumberAttribute('log_backup_another_region_retention_period');
  }

  // log_backup_retention_period - computed: true, optional: false, required: false
  public get logBackupRetentionPeriod() {
    return this.getNumberAttribute('log_backup_retention_period');
  }

  // preferred_backup_period - computed: true, optional: false, required: false
  public get preferredBackupPeriod() {
    return this.getStringAttribute('preferred_backup_period');
  }

  // preferred_backup_time - computed: true, optional: false, required: false
  public get preferredBackupTime() {
    return this.getStringAttribute('preferred_backup_time');
  }

  // preferred_next_backup_time - computed: true, optional: false, required: false
  public get preferredNextBackupTime() {
    return this.getStringAttribute('preferred_next_backup_time');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      db_cluster_id: cdktf.stringToTerraform(this._dbClusterId),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      db_cluster_id: {
        value: cdktf.stringToHclTerraform(this._dbClusterId),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
