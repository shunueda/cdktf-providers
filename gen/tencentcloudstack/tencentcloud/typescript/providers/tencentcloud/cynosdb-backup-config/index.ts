// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/cynosdb_backup_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CynosdbBackupConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * Full backup start time. Value range: [0-24*3600]. For example, 0:00 AM, 1:00 AM, and 2:00 AM are represented by 0, 3600, and 7200, respectively.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/cynosdb_backup_config#backup_time_beg CynosdbBackupConfig#backup_time_beg}
  */
  readonly backupTimeBeg: number;
  /**
  * Full backup end time. Value range: [0-24*3600]. For example, 0:00 AM, 1:00 AM, and 2:00 AM are represented by 0, 3600, and 7200, respectively.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/cynosdb_backup_config#backup_time_end CynosdbBackupConfig#backup_time_end}
  */
  readonly backupTimeEnd: number;
  /**
  * Cluster ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/cynosdb_backup_config#cluster_id CynosdbBackupConfig#cluster_id}
  */
  readonly clusterId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/cynosdb_backup_config#id CynosdbBackupConfig#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Backup retention period in seconds. Backups will be cleared after this period elapses. 7 days is represented by 3600*24*7 = 604800. Maximum value: 158112000.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/cynosdb_backup_config#reserve_duration CynosdbBackupConfig#reserve_duration}
  */
  readonly reserveDuration: number;
  /**
  * logic_backup_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/cynosdb_backup_config#logic_backup_config CynosdbBackupConfig#logic_backup_config}
  */
  readonly logicBackupConfig?: CynosdbBackupConfigLogicBackupConfig;
}
export interface CynosdbBackupConfigLogicBackupConfig {
  /**
  * Whether to enable automatic logical backup. Value: `ON`, `OFF`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/cynosdb_backup_config#logic_backup_enable CynosdbBackupConfig#logic_backup_enable}
  */
  readonly logicBackupEnable?: string;
  /**
  * Automatic logical backup start time. When `logic_backup_enable` is `OFF`, it must be `0` or not entered. Example value: 2.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/cynosdb_backup_config#logic_backup_time_beg CynosdbBackupConfig#logic_backup_time_beg}
  */
  readonly logicBackupTimeBeg?: number;
  /**
  * Automatic logical backup end time. When `logic_backup_enable` is `OFF`, it must be `0` or not entered. Example value: 6.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/cynosdb_backup_config#logic_backup_time_end CynosdbBackupConfig#logic_backup_time_end}
  */
  readonly logicBackupTimeEnd?: number;
  /**
  * Logical backup across regions. Example value: ["ap-guangzhou"]. When `logic_backup_enable` is `OFF`, it must be `[]` or not entered.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/cynosdb_backup_config#logic_cross_regions CynosdbBackupConfig#logic_cross_regions}
  */
  readonly logicCrossRegions?: string[];
  /**
  * Whether to enable cross-region logical backup. Cannot be input when `logic_backup_enable` is `OFF`. When `logic_backup_enable` is `ON`, `logic_cross_regions_enable` setting `ON` will take effect. Value: `ON`, `OFF`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/cynosdb_backup_config#logic_cross_regions_enable CynosdbBackupConfig#logic_cross_regions_enable}
  */
  readonly logicCrossRegionsEnable?: string;
  /**
  * Automatic logical backup retention period. When `logic_backup_enable` is `OFF`, it must be `0` or not entered. Value range: [259200,158112000]. `logic_backup_enable` is `OFF`, `logic_reserve_duration` cannot be set when creating.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/cynosdb_backup_config#logic_reserve_duration CynosdbBackupConfig#logic_reserve_duration}
  */
  readonly logicReserveDuration?: number;
}

export function cynosdbBackupConfigLogicBackupConfigToTerraform(struct?: CynosdbBackupConfigLogicBackupConfigOutputReference | CynosdbBackupConfigLogicBackupConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    logic_backup_enable: cdktf.stringToTerraform(struct!.logicBackupEnable),
    logic_backup_time_beg: cdktf.numberToTerraform(struct!.logicBackupTimeBeg),
    logic_backup_time_end: cdktf.numberToTerraform(struct!.logicBackupTimeEnd),
    logic_cross_regions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.logicCrossRegions),
    logic_cross_regions_enable: cdktf.stringToTerraform(struct!.logicCrossRegionsEnable),
    logic_reserve_duration: cdktf.numberToTerraform(struct!.logicReserveDuration),
  }
}


export function cynosdbBackupConfigLogicBackupConfigToHclTerraform(struct?: CynosdbBackupConfigLogicBackupConfigOutputReference | CynosdbBackupConfigLogicBackupConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    logic_backup_enable: {
      value: cdktf.stringToHclTerraform(struct!.logicBackupEnable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    logic_backup_time_beg: {
      value: cdktf.numberToHclTerraform(struct!.logicBackupTimeBeg),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    logic_backup_time_end: {
      value: cdktf.numberToHclTerraform(struct!.logicBackupTimeEnd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    logic_cross_regions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.logicCrossRegions),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    logic_cross_regions_enable: {
      value: cdktf.stringToHclTerraform(struct!.logicCrossRegionsEnable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    logic_reserve_duration: {
      value: cdktf.numberToHclTerraform(struct!.logicReserveDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CynosdbBackupConfigLogicBackupConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CynosdbBackupConfigLogicBackupConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._logicBackupEnable !== undefined) {
      hasAnyValues = true;
      internalValueResult.logicBackupEnable = this._logicBackupEnable;
    }
    if (this._logicBackupTimeBeg !== undefined) {
      hasAnyValues = true;
      internalValueResult.logicBackupTimeBeg = this._logicBackupTimeBeg;
    }
    if (this._logicBackupTimeEnd !== undefined) {
      hasAnyValues = true;
      internalValueResult.logicBackupTimeEnd = this._logicBackupTimeEnd;
    }
    if (this._logicCrossRegions !== undefined) {
      hasAnyValues = true;
      internalValueResult.logicCrossRegions = this._logicCrossRegions;
    }
    if (this._logicCrossRegionsEnable !== undefined) {
      hasAnyValues = true;
      internalValueResult.logicCrossRegionsEnable = this._logicCrossRegionsEnable;
    }
    if (this._logicReserveDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.logicReserveDuration = this._logicReserveDuration;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CynosdbBackupConfigLogicBackupConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._logicBackupEnable = undefined;
      this._logicBackupTimeBeg = undefined;
      this._logicBackupTimeEnd = undefined;
      this._logicCrossRegions = undefined;
      this._logicCrossRegionsEnable = undefined;
      this._logicReserveDuration = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._logicBackupEnable = value.logicBackupEnable;
      this._logicBackupTimeBeg = value.logicBackupTimeBeg;
      this._logicBackupTimeEnd = value.logicBackupTimeEnd;
      this._logicCrossRegions = value.logicCrossRegions;
      this._logicCrossRegionsEnable = value.logicCrossRegionsEnable;
      this._logicReserveDuration = value.logicReserveDuration;
    }
  }

  // logic_backup_enable - computed: true, optional: true, required: false
  private _logicBackupEnable?: string; 
  public get logicBackupEnable() {
    return this.getStringAttribute('logic_backup_enable');
  }
  public set logicBackupEnable(value: string) {
    this._logicBackupEnable = value;
  }
  public resetLogicBackupEnable() {
    this._logicBackupEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logicBackupEnableInput() {
    return this._logicBackupEnable;
  }

  // logic_backup_time_beg - computed: false, optional: true, required: false
  private _logicBackupTimeBeg?: number; 
  public get logicBackupTimeBeg() {
    return this.getNumberAttribute('logic_backup_time_beg');
  }
  public set logicBackupTimeBeg(value: number) {
    this._logicBackupTimeBeg = value;
  }
  public resetLogicBackupTimeBeg() {
    this._logicBackupTimeBeg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logicBackupTimeBegInput() {
    return this._logicBackupTimeBeg;
  }

  // logic_backup_time_end - computed: false, optional: true, required: false
  private _logicBackupTimeEnd?: number; 
  public get logicBackupTimeEnd() {
    return this.getNumberAttribute('logic_backup_time_end');
  }
  public set logicBackupTimeEnd(value: number) {
    this._logicBackupTimeEnd = value;
  }
  public resetLogicBackupTimeEnd() {
    this._logicBackupTimeEnd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logicBackupTimeEndInput() {
    return this._logicBackupTimeEnd;
  }

  // logic_cross_regions - computed: false, optional: true, required: false
  private _logicCrossRegions?: string[]; 
  public get logicCrossRegions() {
    return cdktf.Fn.tolist(this.getListAttribute('logic_cross_regions'));
  }
  public set logicCrossRegions(value: string[]) {
    this._logicCrossRegions = value;
  }
  public resetLogicCrossRegions() {
    this._logicCrossRegions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logicCrossRegionsInput() {
    return this._logicCrossRegions;
  }

  // logic_cross_regions_enable - computed: false, optional: true, required: false
  private _logicCrossRegionsEnable?: string; 
  public get logicCrossRegionsEnable() {
    return this.getStringAttribute('logic_cross_regions_enable');
  }
  public set logicCrossRegionsEnable(value: string) {
    this._logicCrossRegionsEnable = value;
  }
  public resetLogicCrossRegionsEnable() {
    this._logicCrossRegionsEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logicCrossRegionsEnableInput() {
    return this._logicCrossRegionsEnable;
  }

  // logic_reserve_duration - computed: false, optional: true, required: false
  private _logicReserveDuration?: number; 
  public get logicReserveDuration() {
    return this.getNumberAttribute('logic_reserve_duration');
  }
  public set logicReserveDuration(value: number) {
    this._logicReserveDuration = value;
  }
  public resetLogicReserveDuration() {
    this._logicReserveDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logicReserveDurationInput() {
    return this._logicReserveDuration;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/cynosdb_backup_config tencentcloud_cynosdb_backup_config}
*/
export class CynosdbBackupConfig extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_cynosdb_backup_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CynosdbBackupConfig resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CynosdbBackupConfig to import
  * @param importFromId The id of the existing CynosdbBackupConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/cynosdb_backup_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CynosdbBackupConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_cynosdb_backup_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/cynosdb_backup_config tencentcloud_cynosdb_backup_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CynosdbBackupConfigConfig
  */
  public constructor(scope: Construct, id: string, config: CynosdbBackupConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_cynosdb_backup_config',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.44',
        providerVersionConstraint: '1.82.44'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._backupTimeBeg = config.backupTimeBeg;
    this._backupTimeEnd = config.backupTimeEnd;
    this._clusterId = config.clusterId;
    this._id = config.id;
    this._reserveDuration = config.reserveDuration;
    this._logicBackupConfig.internalValue = config.logicBackupConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // backup_freq - computed: true, optional: false, required: false
  public get backupFreq() {
    return this.getListAttribute('backup_freq');
  }

  // backup_time_beg - computed: false, optional: false, required: true
  private _backupTimeBeg?: number; 
  public get backupTimeBeg() {
    return this.getNumberAttribute('backup_time_beg');
  }
  public set backupTimeBeg(value: number) {
    this._backupTimeBeg = value;
  }
  // Temporarily expose input value. Use with caution.
  public get backupTimeBegInput() {
    return this._backupTimeBeg;
  }

  // backup_time_end - computed: false, optional: false, required: true
  private _backupTimeEnd?: number; 
  public get backupTimeEnd() {
    return this.getNumberAttribute('backup_time_end');
  }
  public set backupTimeEnd(value: number) {
    this._backupTimeEnd = value;
  }
  // Temporarily expose input value. Use with caution.
  public get backupTimeEndInput() {
    return this._backupTimeEnd;
  }

  // backup_type - computed: true, optional: false, required: false
  public get backupType() {
    return this.getStringAttribute('backup_type');
  }

  // cluster_id - computed: false, optional: false, required: true
  private _clusterId?: string; 
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }
  public set clusterId(value: string) {
    this._clusterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIdInput() {
    return this._clusterId;
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

  // reserve_duration - computed: false, optional: false, required: true
  private _reserveDuration?: number; 
  public get reserveDuration() {
    return this.getNumberAttribute('reserve_duration');
  }
  public set reserveDuration(value: number) {
    this._reserveDuration = value;
  }
  // Temporarily expose input value. Use with caution.
  public get reserveDurationInput() {
    return this._reserveDuration;
  }

  // logic_backup_config - computed: false, optional: true, required: false
  private _logicBackupConfig = new CynosdbBackupConfigLogicBackupConfigOutputReference(this, "logic_backup_config");
  public get logicBackupConfig() {
    return this._logicBackupConfig;
  }
  public putLogicBackupConfig(value: CynosdbBackupConfigLogicBackupConfig) {
    this._logicBackupConfig.internalValue = value;
  }
  public resetLogicBackupConfig() {
    this._logicBackupConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logicBackupConfigInput() {
    return this._logicBackupConfig.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      backup_time_beg: cdktf.numberToTerraform(this._backupTimeBeg),
      backup_time_end: cdktf.numberToTerraform(this._backupTimeEnd),
      cluster_id: cdktf.stringToTerraform(this._clusterId),
      id: cdktf.stringToTerraform(this._id),
      reserve_duration: cdktf.numberToTerraform(this._reserveDuration),
      logic_backup_config: cynosdbBackupConfigLogicBackupConfigToTerraform(this._logicBackupConfig.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      backup_time_beg: {
        value: cdktf.numberToHclTerraform(this._backupTimeBeg),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      backup_time_end: {
        value: cdktf.numberToHclTerraform(this._backupTimeEnd),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      cluster_id: {
        value: cdktf.stringToHclTerraform(this._clusterId),
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
      reserve_duration: {
        value: cdktf.numberToHclTerraform(this._reserveDuration),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      logic_backup_config: {
        value: cynosdbBackupConfigLogicBackupConfigToHclTerraform(this._logicBackupConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CynosdbBackupConfigLogicBackupConfigList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
