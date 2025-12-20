// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/postgresql_modify_switch_time_period_operation
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PostgresqlModifySwitchTimePeriodOperationConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of the instance waiting for a switch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/postgresql_modify_switch_time_period_operation#db_instance_id PostgresqlModifySwitchTimePeriodOperation#db_instance_id}
  */
  readonly dbInstanceId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/postgresql_modify_switch_time_period_operation#id PostgresqlModifySwitchTimePeriodOperation#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Valid value: `0` (switch immediately).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/postgresql_modify_switch_time_period_operation#switch_tag PostgresqlModifySwitchTimePeriodOperation#switch_tag}
  */
  readonly switchTag: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/postgresql_modify_switch_time_period_operation tencentcloud_postgresql_modify_switch_time_period_operation}
*/
export class PostgresqlModifySwitchTimePeriodOperation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_postgresql_modify_switch_time_period_operation";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PostgresqlModifySwitchTimePeriodOperation resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PostgresqlModifySwitchTimePeriodOperation to import
  * @param importFromId The id of the existing PostgresqlModifySwitchTimePeriodOperation that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/postgresql_modify_switch_time_period_operation#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PostgresqlModifySwitchTimePeriodOperation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_postgresql_modify_switch_time_period_operation", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/postgresql_modify_switch_time_period_operation tencentcloud_postgresql_modify_switch_time_period_operation} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PostgresqlModifySwitchTimePeriodOperationConfig
  */
  public constructor(scope: Construct, id: string, config: PostgresqlModifySwitchTimePeriodOperationConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_postgresql_modify_switch_time_period_operation',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.47',
        providerVersionConstraint: '1.82.47'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._dbInstanceId = config.dbInstanceId;
    this._id = config.id;
    this._switchTag = config.switchTag;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // db_instance_id - computed: false, optional: false, required: true
  private _dbInstanceId?: string; 
  public get dbInstanceId() {
    return this.getStringAttribute('db_instance_id');
  }
  public set dbInstanceId(value: string) {
    this._dbInstanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dbInstanceIdInput() {
    return this._dbInstanceId;
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

  // switch_tag - computed: false, optional: false, required: true
  private _switchTag?: number; 
  public get switchTag() {
    return this.getNumberAttribute('switch_tag');
  }
  public set switchTag(value: number) {
    this._switchTag = value;
  }
  // Temporarily expose input value. Use with caution.
  public get switchTagInput() {
    return this._switchTag;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      db_instance_id: cdktf.stringToTerraform(this._dbInstanceId),
      id: cdktf.stringToTerraform(this._id),
      switch_tag: cdktf.numberToTerraform(this._switchTag),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      db_instance_id: {
        value: cdktf.stringToHclTerraform(this._dbInstanceId),
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
      switch_tag: {
        value: cdktf.numberToHclTerraform(this._switchTag),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
