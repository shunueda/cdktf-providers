// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/mysql_local_binlog_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MysqlLocalBinlogConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/mysql_local_binlog_config#id MysqlLocalBinlogConfig#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Instance ID in the format of cdb-c1nl9rpv. It is the same as the instance ID displayed in the TencentDB console.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/mysql_local_binlog_config#instance_id MysqlLocalBinlogConfig#instance_id}
  */
  readonly instanceId: string;
  /**
  * Space utilization of local binlog. Value range: [30,50].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/mysql_local_binlog_config#max_usage MysqlLocalBinlogConfig#max_usage}
  */
  readonly maxUsage: number;
  /**
  * Retention period of local binlog. Valid range: 72-168 hours. When there is disaster recovery instance, the valid range will be 120-168 hours.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/mysql_local_binlog_config#save_hours MysqlLocalBinlogConfig#save_hours}
  */
  readonly saveHours: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/mysql_local_binlog_config tencentcloud_mysql_local_binlog_config}
*/
export class MysqlLocalBinlogConfig extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_mysql_local_binlog_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MysqlLocalBinlogConfig resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MysqlLocalBinlogConfig to import
  * @param importFromId The id of the existing MysqlLocalBinlogConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/mysql_local_binlog_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MysqlLocalBinlogConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_mysql_local_binlog_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/mysql_local_binlog_config tencentcloud_mysql_local_binlog_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MysqlLocalBinlogConfigConfig
  */
  public constructor(scope: Construct, id: string, config: MysqlLocalBinlogConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_mysql_local_binlog_config',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.35'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._instanceId = config.instanceId;
    this._maxUsage = config.maxUsage;
    this._saveHours = config.saveHours;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // instance_id - computed: false, optional: false, required: true
  private _instanceId?: string; 
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }
  public set instanceId(value: string) {
    this._instanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
  }

  // max_usage - computed: false, optional: false, required: true
  private _maxUsage?: number; 
  public get maxUsage() {
    return this.getNumberAttribute('max_usage');
  }
  public set maxUsage(value: number) {
    this._maxUsage = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxUsageInput() {
    return this._maxUsage;
  }

  // save_hours - computed: false, optional: false, required: true
  private _saveHours?: number; 
  public get saveHours() {
    return this.getNumberAttribute('save_hours');
  }
  public set saveHours(value: number) {
    this._saveHours = value;
  }
  // Temporarily expose input value. Use with caution.
  public get saveHoursInput() {
    return this._saveHours;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      instance_id: cdktf.stringToTerraform(this._instanceId),
      max_usage: cdktf.numberToTerraform(this._maxUsage),
      save_hours: cdktf.numberToTerraform(this._saveHours),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      instance_id: {
        value: cdktf.stringToHclTerraform(this._instanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_usage: {
        value: cdktf.numberToHclTerraform(this._maxUsage),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      save_hours: {
        value: cdktf.numberToHclTerraform(this._saveHours),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
