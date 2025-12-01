// https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_polardb_cluster_backup_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApsarastackPolardbClusterBackupPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_polardb_cluster_backup_policy#data_level1_backup_period ApsarastackPolardbClusterBackupPolicy#data_level1_backup_period}
  */
  readonly dataLevel1BackupPeriod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_polardb_cluster_backup_policy#data_level1_backup_retention_period ApsarastackPolardbClusterBackupPolicy#data_level1_backup_retention_period}
  */
  readonly dataLevel1BackupRetentionPeriod?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_polardb_cluster_backup_policy#data_level1_backup_time ApsarastackPolardbClusterBackupPolicy#data_level1_backup_time}
  */
  readonly dataLevel1BackupTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_polardb_cluster_backup_policy#db_cluster_id ApsarastackPolardbClusterBackupPolicy#db_cluster_id}
  */
  readonly dbClusterId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_polardb_cluster_backup_policy#id ApsarastackPolardbClusterBackupPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_polardb_cluster_backup_policy#log_backup_retention_period ApsarastackPolardbClusterBackupPolicy#log_backup_retention_period}
  */
  readonly logBackupRetentionPeriod?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_polardb_cluster_backup_policy apsarastack_polardb_cluster_backup_policy}
*/
export class ApsarastackPolardbClusterBackupPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "apsarastack_polardb_cluster_backup_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ApsarastackPolardbClusterBackupPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApsarastackPolardbClusterBackupPolicy to import
  * @param importFromId The id of the existing ApsarastackPolardbClusterBackupPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_polardb_cluster_backup_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApsarastackPolardbClusterBackupPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "apsarastack_polardb_cluster_backup_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_polardb_cluster_backup_policy apsarastack_polardb_cluster_backup_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApsarastackPolardbClusterBackupPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: ApsarastackPolardbClusterBackupPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'apsarastack_polardb_cluster_backup_policy',
      terraformGeneratorMetadata: {
        providerName: 'alibabacloudstack',
        providerVersion: '3.18.20',
        providerVersionConstraint: '3.18.20'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._dataLevel1BackupPeriod = config.dataLevel1BackupPeriod;
    this._dataLevel1BackupRetentionPeriod = config.dataLevel1BackupRetentionPeriod;
    this._dataLevel1BackupTime = config.dataLevel1BackupTime;
    this._dbClusterId = config.dbClusterId;
    this._id = config.id;
    this._logBackupRetentionPeriod = config.logBackupRetentionPeriod;
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

  // data_level1_backup_period - computed: true, optional: true, required: false
  private _dataLevel1BackupPeriod?: string; 
  public get dataLevel1BackupPeriod() {
    return this.getStringAttribute('data_level1_backup_period');
  }
  public set dataLevel1BackupPeriod(value: string) {
    this._dataLevel1BackupPeriod = value;
  }
  public resetDataLevel1BackupPeriod() {
    this._dataLevel1BackupPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataLevel1BackupPeriodInput() {
    return this._dataLevel1BackupPeriod;
  }

  // data_level1_backup_retention_period - computed: true, optional: true, required: false
  private _dataLevel1BackupRetentionPeriod?: number; 
  public get dataLevel1BackupRetentionPeriod() {
    return this.getNumberAttribute('data_level1_backup_retention_period');
  }
  public set dataLevel1BackupRetentionPeriod(value: number) {
    this._dataLevel1BackupRetentionPeriod = value;
  }
  public resetDataLevel1BackupRetentionPeriod() {
    this._dataLevel1BackupRetentionPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataLevel1BackupRetentionPeriodInput() {
    return this._dataLevel1BackupRetentionPeriod;
  }

  // data_level1_backup_time - computed: true, optional: true, required: false
  private _dataLevel1BackupTime?: string; 
  public get dataLevel1BackupTime() {
    return this.getStringAttribute('data_level1_backup_time');
  }
  public set dataLevel1BackupTime(value: string) {
    this._dataLevel1BackupTime = value;
  }
  public resetDataLevel1BackupTime() {
    this._dataLevel1BackupTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataLevel1BackupTimeInput() {
    return this._dataLevel1BackupTime;
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

  // log_backup_retention_period - computed: true, optional: true, required: false
  private _logBackupRetentionPeriod?: number; 
  public get logBackupRetentionPeriod() {
    return this.getNumberAttribute('log_backup_retention_period');
  }
  public set logBackupRetentionPeriod(value: number) {
    this._logBackupRetentionPeriod = value;
  }
  public resetLogBackupRetentionPeriod() {
    this._logBackupRetentionPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logBackupRetentionPeriodInput() {
    return this._logBackupRetentionPeriod;
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
      data_level1_backup_period: cdktf.stringToTerraform(this._dataLevel1BackupPeriod),
      data_level1_backup_retention_period: cdktf.numberToTerraform(this._dataLevel1BackupRetentionPeriod),
      data_level1_backup_time: cdktf.stringToTerraform(this._dataLevel1BackupTime),
      db_cluster_id: cdktf.stringToTerraform(this._dbClusterId),
      id: cdktf.stringToTerraform(this._id),
      log_backup_retention_period: cdktf.numberToTerraform(this._logBackupRetentionPeriod),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      data_level1_backup_period: {
        value: cdktf.stringToHclTerraform(this._dataLevel1BackupPeriod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      data_level1_backup_retention_period: {
        value: cdktf.numberToHclTerraform(this._dataLevel1BackupRetentionPeriod),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      data_level1_backup_time: {
        value: cdktf.stringToHclTerraform(this._dataLevel1BackupTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
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
      log_backup_retention_period: {
        value: cdktf.numberToHclTerraform(this._logBackupRetentionPeriod),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
