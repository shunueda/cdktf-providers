// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/mysql_time_window
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MysqlTimeWindowConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/mysql_time_window#id MysqlTimeWindow#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Instance ID in the format of cdb-c1nl9rpv or cdbro-c1nl9rpv. It is the same as the instance ID displayed on the TencentDB Console page.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/mysql_time_window#instance_id MysqlTimeWindow#instance_id}
  */
  readonly instanceId: string;
  /**
  * Data delay threshold. It takes effect only for source instance and disaster recovery instance. Default value: 10.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/mysql_time_window#max_delay_time MysqlTimeWindow#max_delay_time}
  */
  readonly maxDelayTime?: number;
  /**
  * Time period available for maintenance after modification in the format of 10:00-12:00. Each period lasts from half an hour to three hours, with the start time and end time aligned by half-hour. Up to two time periods can be set. Start and end time range: [00:00, 24:00].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/mysql_time_window#time_ranges MysqlTimeWindow#time_ranges}
  */
  readonly timeRanges: string[];
  /**
  * Specifies for which day to modify the time period. Value range: Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday. If it is not specified or is left blank, the time period will be modified for every day by default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/mysql_time_window#weekdays MysqlTimeWindow#weekdays}
  */
  readonly weekdays?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/mysql_time_window tencentcloud_mysql_time_window}
*/
export class MysqlTimeWindow extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_mysql_time_window";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MysqlTimeWindow resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MysqlTimeWindow to import
  * @param importFromId The id of the existing MysqlTimeWindow that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/mysql_time_window#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MysqlTimeWindow to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_mysql_time_window", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/mysql_time_window tencentcloud_mysql_time_window} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MysqlTimeWindowConfig
  */
  public constructor(scope: Construct, id: string, config: MysqlTimeWindowConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_mysql_time_window',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.42',
        providerVersionConstraint: '1.82.42'
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
    this._maxDelayTime = config.maxDelayTime;
    this._timeRanges = config.timeRanges;
    this._weekdays = config.weekdays;
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

  // max_delay_time - computed: false, optional: true, required: false
  private _maxDelayTime?: number; 
  public get maxDelayTime() {
    return this.getNumberAttribute('max_delay_time');
  }
  public set maxDelayTime(value: number) {
    this._maxDelayTime = value;
  }
  public resetMaxDelayTime() {
    this._maxDelayTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxDelayTimeInput() {
    return this._maxDelayTime;
  }

  // time_ranges - computed: false, optional: false, required: true
  private _timeRanges?: string[]; 
  public get timeRanges() {
    return cdktf.Fn.tolist(this.getListAttribute('time_ranges'));
  }
  public set timeRanges(value: string[]) {
    this._timeRanges = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeRangesInput() {
    return this._timeRanges;
  }

  // weekdays - computed: false, optional: true, required: false
  private _weekdays?: string[]; 
  public get weekdays() {
    return cdktf.Fn.tolist(this.getListAttribute('weekdays'));
  }
  public set weekdays(value: string[]) {
    this._weekdays = value;
  }
  public resetWeekdays() {
    this._weekdays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weekdaysInput() {
    return this._weekdays;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      instance_id: cdktf.stringToTerraform(this._instanceId),
      max_delay_time: cdktf.numberToTerraform(this._maxDelayTime),
      time_ranges: cdktf.listMapper(cdktf.stringToTerraform, false)(this._timeRanges),
      weekdays: cdktf.listMapper(cdktf.stringToTerraform, false)(this._weekdays),
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
      max_delay_time: {
        value: cdktf.numberToHclTerraform(this._maxDelayTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      time_ranges: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._timeRanges),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      weekdays: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._weekdays),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
