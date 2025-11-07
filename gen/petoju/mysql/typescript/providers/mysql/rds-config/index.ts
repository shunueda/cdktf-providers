// https://registry.terraform.io/providers/petoju/mysql/3.0.84/docs/resources/rds_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RdsConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * Sets the number of hours to retain binary log files
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/petoju/mysql/3.0.84/docs/resources/rds_config#binlog_retention_hours RdsConfig#binlog_retention_hours}
  */
  readonly binlogRetentionHours?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/petoju/mysql/3.0.84/docs/resources/rds_config#id RdsConfig#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Sets the number of seconds to delay replication from source database instance to the read replica
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/petoju/mysql/3.0.84/docs/resources/rds_config#replication_target_delay RdsConfig#replication_target_delay}
  */
  readonly replicationTargetDelay?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/petoju/mysql/3.0.84/docs/resources/rds_config mysql_rds_config}
*/
export class RdsConfig extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mysql_rds_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RdsConfig resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RdsConfig to import
  * @param importFromId The id of the existing RdsConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/petoju/mysql/3.0.84/docs/resources/rds_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RdsConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "mysql_rds_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/petoju/mysql/3.0.84/docs/resources/rds_config mysql_rds_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RdsConfigConfig = {}
  */
  public constructor(scope: Construct, id: string, config: RdsConfigConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'mysql_rds_config',
      terraformGeneratorMetadata: {
        providerName: 'mysql',
        providerVersion: '3.0.84'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._binlogRetentionHours = config.binlogRetentionHours;
    this._id = config.id;
    this._replicationTargetDelay = config.replicationTargetDelay;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // binlog_retention_hours - computed: false, optional: true, required: false
  private _binlogRetentionHours?: number; 
  public get binlogRetentionHours() {
    return this.getNumberAttribute('binlog_retention_hours');
  }
  public set binlogRetentionHours(value: number) {
    this._binlogRetentionHours = value;
  }
  public resetBinlogRetentionHours() {
    this._binlogRetentionHours = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get binlogRetentionHoursInput() {
    return this._binlogRetentionHours;
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

  // replication_target_delay - computed: false, optional: true, required: false
  private _replicationTargetDelay?: number; 
  public get replicationTargetDelay() {
    return this.getNumberAttribute('replication_target_delay');
  }
  public set replicationTargetDelay(value: number) {
    this._replicationTargetDelay = value;
  }
  public resetReplicationTargetDelay() {
    this._replicationTargetDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicationTargetDelayInput() {
    return this._replicationTargetDelay;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      binlog_retention_hours: cdktf.numberToTerraform(this._binlogRetentionHours),
      id: cdktf.stringToTerraform(this._id),
      replication_target_delay: cdktf.numberToTerraform(this._replicationTargetDelay),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      binlog_retention_hours: {
        value: cdktf.numberToHclTerraform(this._binlogRetentionHours),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      replication_target_delay: {
        value: cdktf.numberToHclTerraform(this._replicationTargetDelay),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
