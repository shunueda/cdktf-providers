// https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/polardb_backup_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PolardbBackupPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/polardb_backup_policy#backup_frequency PolardbBackupPolicy#backup_frequency}
  */
  readonly backupFrequency?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/polardb_backup_policy#backup_retention_period PolardbBackupPolicy#backup_retention_period}
  */
  readonly backupRetentionPeriod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/polardb_backup_policy#backup_retention_policy_on_cluster_deletion PolardbBackupPolicy#backup_retention_policy_on_cluster_deletion}
  */
  readonly backupRetentionPolicyOnClusterDeletion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/polardb_backup_policy#data_level1_backup_frequency PolardbBackupPolicy#data_level1_backup_frequency}
  */
  readonly dataLevel1BackupFrequency?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/polardb_backup_policy#data_level1_backup_period PolardbBackupPolicy#data_level1_backup_period}
  */
  readonly dataLevel1BackupPeriod?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/polardb_backup_policy#data_level1_backup_retention_period PolardbBackupPolicy#data_level1_backup_retention_period}
  */
  readonly dataLevel1BackupRetentionPeriod?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/polardb_backup_policy#data_level1_backup_time PolardbBackupPolicy#data_level1_backup_time}
  */
  readonly dataLevel1BackupTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/polardb_backup_policy#data_level2_backup_another_region_region PolardbBackupPolicy#data_level2_backup_another_region_region}
  */
  readonly dataLevel2BackupAnotherRegionRegion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/polardb_backup_policy#data_level2_backup_another_region_retention_period PolardbBackupPolicy#data_level2_backup_another_region_retention_period}
  */
  readonly dataLevel2BackupAnotherRegionRetentionPeriod?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/polardb_backup_policy#data_level2_backup_period PolardbBackupPolicy#data_level2_backup_period}
  */
  readonly dataLevel2BackupPeriod?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/polardb_backup_policy#data_level2_backup_retention_period PolardbBackupPolicy#data_level2_backup_retention_period}
  */
  readonly dataLevel2BackupRetentionPeriod?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/polardb_backup_policy#db_cluster_id PolardbBackupPolicy#db_cluster_id}
  */
  readonly dbClusterId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/polardb_backup_policy#id PolardbBackupPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/polardb_backup_policy#log_backup_another_region_region PolardbBackupPolicy#log_backup_another_region_region}
  */
  readonly logBackupAnotherRegionRegion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/polardb_backup_policy#log_backup_another_region_retention_period PolardbBackupPolicy#log_backup_another_region_retention_period}
  */
  readonly logBackupAnotherRegionRetentionPeriod?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/polardb_backup_policy#log_backup_retention_period PolardbBackupPolicy#log_backup_retention_period}
  */
  readonly logBackupRetentionPeriod?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/polardb_backup_policy#preferred_backup_period PolardbBackupPolicy#preferred_backup_period}
  */
  readonly preferredBackupPeriod?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/polardb_backup_policy#preferred_backup_time PolardbBackupPolicy#preferred_backup_time}
  */
  readonly preferredBackupTime?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/polardb_backup_policy alicloud_polardb_backup_policy}
*/
export class PolardbBackupPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_polardb_backup_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PolardbBackupPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PolardbBackupPolicy to import
  * @param importFromId The id of the existing PolardbBackupPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/polardb_backup_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PolardbBackupPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_polardb_backup_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/polardb_backup_policy alicloud_polardb_backup_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PolardbBackupPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: PolardbBackupPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_polardb_backup_policy',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.265.0',
        providerVersionConstraint: '1.265.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._backupFrequency = config.backupFrequency;
    this._backupRetentionPeriod = config.backupRetentionPeriod;
    this._backupRetentionPolicyOnClusterDeletion = config.backupRetentionPolicyOnClusterDeletion;
    this._dataLevel1BackupFrequency = config.dataLevel1BackupFrequency;
    this._dataLevel1BackupPeriod = config.dataLevel1BackupPeriod;
    this._dataLevel1BackupRetentionPeriod = config.dataLevel1BackupRetentionPeriod;
    this._dataLevel1BackupTime = config.dataLevel1BackupTime;
    this._dataLevel2BackupAnotherRegionRegion = config.dataLevel2BackupAnotherRegionRegion;
    this._dataLevel2BackupAnotherRegionRetentionPeriod = config.dataLevel2BackupAnotherRegionRetentionPeriod;
    this._dataLevel2BackupPeriod = config.dataLevel2BackupPeriod;
    this._dataLevel2BackupRetentionPeriod = config.dataLevel2BackupRetentionPeriod;
    this._dbClusterId = config.dbClusterId;
    this._id = config.id;
    this._logBackupAnotherRegionRegion = config.logBackupAnotherRegionRegion;
    this._logBackupAnotherRegionRetentionPeriod = config.logBackupAnotherRegionRetentionPeriod;
    this._logBackupRetentionPeriod = config.logBackupRetentionPeriod;
    this._preferredBackupPeriod = config.preferredBackupPeriod;
    this._preferredBackupTime = config.preferredBackupTime;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // backup_frequency - computed: true, optional: true, required: false
  private _backupFrequency?: string; 
  public get backupFrequency() {
    return this.getStringAttribute('backup_frequency');
  }
  public set backupFrequency(value: string) {
    this._backupFrequency = value;
  }
  public resetBackupFrequency() {
    this._backupFrequency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupFrequencyInput() {
    return this._backupFrequency;
  }

  // backup_retention_period - computed: true, optional: true, required: false
  private _backupRetentionPeriod?: string; 
  public get backupRetentionPeriod() {
    return this.getStringAttribute('backup_retention_period');
  }
  public set backupRetentionPeriod(value: string) {
    this._backupRetentionPeriod = value;
  }
  public resetBackupRetentionPeriod() {
    this._backupRetentionPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupRetentionPeriodInput() {
    return this._backupRetentionPeriod;
  }

  // backup_retention_policy_on_cluster_deletion - computed: true, optional: true, required: false
  private _backupRetentionPolicyOnClusterDeletion?: string; 
  public get backupRetentionPolicyOnClusterDeletion() {
    return this.getStringAttribute('backup_retention_policy_on_cluster_deletion');
  }
  public set backupRetentionPolicyOnClusterDeletion(value: string) {
    this._backupRetentionPolicyOnClusterDeletion = value;
  }
  public resetBackupRetentionPolicyOnClusterDeletion() {
    this._backupRetentionPolicyOnClusterDeletion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupRetentionPolicyOnClusterDeletionInput() {
    return this._backupRetentionPolicyOnClusterDeletion;
  }

  // data_level1_backup_frequency - computed: true, optional: true, required: false
  private _dataLevel1BackupFrequency?: string; 
  public get dataLevel1BackupFrequency() {
    return this.getStringAttribute('data_level1_backup_frequency');
  }
  public set dataLevel1BackupFrequency(value: string) {
    this._dataLevel1BackupFrequency = value;
  }
  public resetDataLevel1BackupFrequency() {
    this._dataLevel1BackupFrequency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataLevel1BackupFrequencyInput() {
    return this._dataLevel1BackupFrequency;
  }

  // data_level1_backup_period - computed: true, optional: true, required: false
  private _dataLevel1BackupPeriod?: string[]; 
  public get dataLevel1BackupPeriod() {
    return cdktf.Fn.tolist(this.getListAttribute('data_level1_backup_period'));
  }
  public set dataLevel1BackupPeriod(value: string[]) {
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

  // data_level2_backup_another_region_region - computed: false, optional: true, required: false
  private _dataLevel2BackupAnotherRegionRegion?: string; 
  public get dataLevel2BackupAnotherRegionRegion() {
    return this.getStringAttribute('data_level2_backup_another_region_region');
  }
  public set dataLevel2BackupAnotherRegionRegion(value: string) {
    this._dataLevel2BackupAnotherRegionRegion = value;
  }
  public resetDataLevel2BackupAnotherRegionRegion() {
    this._dataLevel2BackupAnotherRegionRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataLevel2BackupAnotherRegionRegionInput() {
    return this._dataLevel2BackupAnotherRegionRegion;
  }

  // data_level2_backup_another_region_retention_period - computed: true, optional: true, required: false
  private _dataLevel2BackupAnotherRegionRetentionPeriod?: number; 
  public get dataLevel2BackupAnotherRegionRetentionPeriod() {
    return this.getNumberAttribute('data_level2_backup_another_region_retention_period');
  }
  public set dataLevel2BackupAnotherRegionRetentionPeriod(value: number) {
    this._dataLevel2BackupAnotherRegionRetentionPeriod = value;
  }
  public resetDataLevel2BackupAnotherRegionRetentionPeriod() {
    this._dataLevel2BackupAnotherRegionRetentionPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataLevel2BackupAnotherRegionRetentionPeriodInput() {
    return this._dataLevel2BackupAnotherRegionRetentionPeriod;
  }

  // data_level2_backup_period - computed: false, optional: true, required: false
  private _dataLevel2BackupPeriod?: string[]; 
  public get dataLevel2BackupPeriod() {
    return cdktf.Fn.tolist(this.getListAttribute('data_level2_backup_period'));
  }
  public set dataLevel2BackupPeriod(value: string[]) {
    this._dataLevel2BackupPeriod = value;
  }
  public resetDataLevel2BackupPeriod() {
    this._dataLevel2BackupPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataLevel2BackupPeriodInput() {
    return this._dataLevel2BackupPeriod;
  }

  // data_level2_backup_retention_period - computed: true, optional: true, required: false
  private _dataLevel2BackupRetentionPeriod?: number; 
  public get dataLevel2BackupRetentionPeriod() {
    return this.getNumberAttribute('data_level2_backup_retention_period');
  }
  public set dataLevel2BackupRetentionPeriod(value: number) {
    this._dataLevel2BackupRetentionPeriod = value;
  }
  public resetDataLevel2BackupRetentionPeriod() {
    this._dataLevel2BackupRetentionPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataLevel2BackupRetentionPeriodInput() {
    return this._dataLevel2BackupRetentionPeriod;
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

  // log_backup_another_region_region - computed: false, optional: true, required: false
  private _logBackupAnotherRegionRegion?: string; 
  public get logBackupAnotherRegionRegion() {
    return this.getStringAttribute('log_backup_another_region_region');
  }
  public set logBackupAnotherRegionRegion(value: string) {
    this._logBackupAnotherRegionRegion = value;
  }
  public resetLogBackupAnotherRegionRegion() {
    this._logBackupAnotherRegionRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logBackupAnotherRegionRegionInput() {
    return this._logBackupAnotherRegionRegion;
  }

  // log_backup_another_region_retention_period - computed: false, optional: true, required: false
  private _logBackupAnotherRegionRetentionPeriod?: number; 
  public get logBackupAnotherRegionRetentionPeriod() {
    return this.getNumberAttribute('log_backup_another_region_retention_period');
  }
  public set logBackupAnotherRegionRetentionPeriod(value: number) {
    this._logBackupAnotherRegionRetentionPeriod = value;
  }
  public resetLogBackupAnotherRegionRetentionPeriod() {
    this._logBackupAnotherRegionRetentionPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logBackupAnotherRegionRetentionPeriodInput() {
    return this._logBackupAnotherRegionRetentionPeriod;
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

  // preferred_backup_period - computed: true, optional: true, required: false
  private _preferredBackupPeriod?: string[]; 
  public get preferredBackupPeriod() {
    return cdktf.Fn.tolist(this.getListAttribute('preferred_backup_period'));
  }
  public set preferredBackupPeriod(value: string[]) {
    this._preferredBackupPeriod = value;
  }
  public resetPreferredBackupPeriod() {
    this._preferredBackupPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferredBackupPeriodInput() {
    return this._preferredBackupPeriod;
  }

  // preferred_backup_time - computed: true, optional: true, required: false
  private _preferredBackupTime?: string; 
  public get preferredBackupTime() {
    return this.getStringAttribute('preferred_backup_time');
  }
  public set preferredBackupTime(value: string) {
    this._preferredBackupTime = value;
  }
  public resetPreferredBackupTime() {
    this._preferredBackupTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferredBackupTimeInput() {
    return this._preferredBackupTime;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      backup_frequency: cdktf.stringToTerraform(this._backupFrequency),
      backup_retention_period: cdktf.stringToTerraform(this._backupRetentionPeriod),
      backup_retention_policy_on_cluster_deletion: cdktf.stringToTerraform(this._backupRetentionPolicyOnClusterDeletion),
      data_level1_backup_frequency: cdktf.stringToTerraform(this._dataLevel1BackupFrequency),
      data_level1_backup_period: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dataLevel1BackupPeriod),
      data_level1_backup_retention_period: cdktf.numberToTerraform(this._dataLevel1BackupRetentionPeriod),
      data_level1_backup_time: cdktf.stringToTerraform(this._dataLevel1BackupTime),
      data_level2_backup_another_region_region: cdktf.stringToTerraform(this._dataLevel2BackupAnotherRegionRegion),
      data_level2_backup_another_region_retention_period: cdktf.numberToTerraform(this._dataLevel2BackupAnotherRegionRetentionPeriod),
      data_level2_backup_period: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dataLevel2BackupPeriod),
      data_level2_backup_retention_period: cdktf.numberToTerraform(this._dataLevel2BackupRetentionPeriod),
      db_cluster_id: cdktf.stringToTerraform(this._dbClusterId),
      id: cdktf.stringToTerraform(this._id),
      log_backup_another_region_region: cdktf.stringToTerraform(this._logBackupAnotherRegionRegion),
      log_backup_another_region_retention_period: cdktf.numberToTerraform(this._logBackupAnotherRegionRetentionPeriod),
      log_backup_retention_period: cdktf.numberToTerraform(this._logBackupRetentionPeriod),
      preferred_backup_period: cdktf.listMapper(cdktf.stringToTerraform, false)(this._preferredBackupPeriod),
      preferred_backup_time: cdktf.stringToTerraform(this._preferredBackupTime),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      backup_frequency: {
        value: cdktf.stringToHclTerraform(this._backupFrequency),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      backup_retention_period: {
        value: cdktf.stringToHclTerraform(this._backupRetentionPeriod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      backup_retention_policy_on_cluster_deletion: {
        value: cdktf.stringToHclTerraform(this._backupRetentionPolicyOnClusterDeletion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      data_level1_backup_frequency: {
        value: cdktf.stringToHclTerraform(this._dataLevel1BackupFrequency),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      data_level1_backup_period: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dataLevel1BackupPeriod),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
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
      data_level2_backup_another_region_region: {
        value: cdktf.stringToHclTerraform(this._dataLevel2BackupAnotherRegionRegion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      data_level2_backup_another_region_retention_period: {
        value: cdktf.numberToHclTerraform(this._dataLevel2BackupAnotherRegionRetentionPeriod),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      data_level2_backup_period: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dataLevel2BackupPeriod),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      data_level2_backup_retention_period: {
        value: cdktf.numberToHclTerraform(this._dataLevel2BackupRetentionPeriod),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
      log_backup_another_region_region: {
        value: cdktf.stringToHclTerraform(this._logBackupAnotherRegionRegion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_backup_another_region_retention_period: {
        value: cdktf.numberToHclTerraform(this._logBackupAnotherRegionRetentionPeriod),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      log_backup_retention_period: {
        value: cdktf.numberToHclTerraform(this._logBackupRetentionPeriod),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      preferred_backup_period: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._preferredBackupPeriod),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      preferred_backup_time: {
        value: cdktf.stringToHclTerraform(this._preferredBackupTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
