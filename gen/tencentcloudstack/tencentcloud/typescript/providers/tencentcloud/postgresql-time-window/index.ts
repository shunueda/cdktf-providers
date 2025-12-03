// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/postgresql_time_window
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PostgresqlTimeWindowConfig extends cdktf.TerraformMetaArguments {
  /**
  * Instance id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/postgresql_time_window#db_instance_id PostgresqlTimeWindow#db_instance_id}
  */
  readonly dbInstanceId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/postgresql_time_window#id PostgresqlTimeWindow#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Maintenance duration, Unit: hours.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/postgresql_time_window#maintain_duration PostgresqlTimeWindow#maintain_duration}
  */
  readonly maintainDuration?: number;
  /**
  * Maintenance start time. Time zone is UTC+8.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/postgresql_time_window#maintain_start_time PostgresqlTimeWindow#maintain_start_time}
  */
  readonly maintainStartTime?: string;
  /**
  * Maintenance cycle.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/postgresql_time_window#maintain_week_days PostgresqlTimeWindow#maintain_week_days}
  */
  readonly maintainWeekDays?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/postgresql_time_window tencentcloud_postgresql_time_window}
*/
export class PostgresqlTimeWindow extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_postgresql_time_window";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PostgresqlTimeWindow resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PostgresqlTimeWindow to import
  * @param importFromId The id of the existing PostgresqlTimeWindow that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/postgresql_time_window#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PostgresqlTimeWindow to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_postgresql_time_window", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/postgresql_time_window tencentcloud_postgresql_time_window} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PostgresqlTimeWindowConfig
  */
  public constructor(scope: Construct, id: string, config: PostgresqlTimeWindowConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_postgresql_time_window',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.40',
        providerVersionConstraint: '1.82.40'
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
    this._maintainDuration = config.maintainDuration;
    this._maintainStartTime = config.maintainStartTime;
    this._maintainWeekDays = config.maintainWeekDays;
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

  // maintain_duration - computed: false, optional: true, required: false
  private _maintainDuration?: number; 
  public get maintainDuration() {
    return this.getNumberAttribute('maintain_duration');
  }
  public set maintainDuration(value: number) {
    this._maintainDuration = value;
  }
  public resetMaintainDuration() {
    this._maintainDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintainDurationInput() {
    return this._maintainDuration;
  }

  // maintain_start_time - computed: false, optional: true, required: false
  private _maintainStartTime?: string; 
  public get maintainStartTime() {
    return this.getStringAttribute('maintain_start_time');
  }
  public set maintainStartTime(value: string) {
    this._maintainStartTime = value;
  }
  public resetMaintainStartTime() {
    this._maintainStartTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintainStartTimeInput() {
    return this._maintainStartTime;
  }

  // maintain_week_days - computed: false, optional: true, required: false
  private _maintainWeekDays?: string[]; 
  public get maintainWeekDays() {
    return cdktf.Fn.tolist(this.getListAttribute('maintain_week_days'));
  }
  public set maintainWeekDays(value: string[]) {
    this._maintainWeekDays = value;
  }
  public resetMaintainWeekDays() {
    this._maintainWeekDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintainWeekDaysInput() {
    return this._maintainWeekDays;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      db_instance_id: cdktf.stringToTerraform(this._dbInstanceId),
      id: cdktf.stringToTerraform(this._id),
      maintain_duration: cdktf.numberToTerraform(this._maintainDuration),
      maintain_start_time: cdktf.stringToTerraform(this._maintainStartTime),
      maintain_week_days: cdktf.listMapper(cdktf.stringToTerraform, false)(this._maintainWeekDays),
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
      maintain_duration: {
        value: cdktf.numberToHclTerraform(this._maintainDuration),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      maintain_start_time: {
        value: cdktf.stringToHclTerraform(this._maintainStartTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      maintain_week_days: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._maintainWeekDays),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
