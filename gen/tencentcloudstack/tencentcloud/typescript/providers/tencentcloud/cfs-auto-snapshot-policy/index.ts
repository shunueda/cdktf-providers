// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/cfs_auto_snapshot_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CfsAutoSnapshotPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Snapshot retention period.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/cfs_auto_snapshot_policy#alive_days CfsAutoSnapshotPolicy#alive_days}
  */
  readonly aliveDays?: number;
  /**
  * The specific day (day 1 to day 31) of the month on which to create a snapshot.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/cfs_auto_snapshot_policy#day_of_month CfsAutoSnapshotPolicy#day_of_month}
  */
  readonly dayOfMonth?: string;
  /**
  * The day of the week on which to repeat the snapshot operation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/cfs_auto_snapshot_policy#day_of_week CfsAutoSnapshotPolicy#day_of_week}
  */
  readonly dayOfWeek?: string;
  /**
  * The time point when to repeat the snapshot operation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/cfs_auto_snapshot_policy#hour CfsAutoSnapshotPolicy#hour}
  */
  readonly hour: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/cfs_auto_snapshot_policy#id CfsAutoSnapshotPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The snapshot interval, in days.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/cfs_auto_snapshot_policy#interval_days CfsAutoSnapshotPolicy#interval_days}
  */
  readonly intervalDays?: number;
  /**
  * Policy name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/cfs_auto_snapshot_policy#policy_name CfsAutoSnapshotPolicy#policy_name}
  */
  readonly policyName?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/cfs_auto_snapshot_policy tencentcloud_cfs_auto_snapshot_policy}
*/
export class CfsAutoSnapshotPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_cfs_auto_snapshot_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CfsAutoSnapshotPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CfsAutoSnapshotPolicy to import
  * @param importFromId The id of the existing CfsAutoSnapshotPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/cfs_auto_snapshot_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CfsAutoSnapshotPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_cfs_auto_snapshot_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/cfs_auto_snapshot_policy tencentcloud_cfs_auto_snapshot_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CfsAutoSnapshotPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: CfsAutoSnapshotPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_cfs_auto_snapshot_policy',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.49',
        providerVersionConstraint: '1.82.49'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._aliveDays = config.aliveDays;
    this._dayOfMonth = config.dayOfMonth;
    this._dayOfWeek = config.dayOfWeek;
    this._hour = config.hour;
    this._id = config.id;
    this._intervalDays = config.intervalDays;
    this._policyName = config.policyName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alive_days - computed: false, optional: true, required: false
  private _aliveDays?: number; 
  public get aliveDays() {
    return this.getNumberAttribute('alive_days');
  }
  public set aliveDays(value: number) {
    this._aliveDays = value;
  }
  public resetAliveDays() {
    this._aliveDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliveDaysInput() {
    return this._aliveDays;
  }

  // day_of_month - computed: false, optional: true, required: false
  private _dayOfMonth?: string; 
  public get dayOfMonth() {
    return this.getStringAttribute('day_of_month');
  }
  public set dayOfMonth(value: string) {
    this._dayOfMonth = value;
  }
  public resetDayOfMonth() {
    this._dayOfMonth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dayOfMonthInput() {
    return this._dayOfMonth;
  }

  // day_of_week - computed: false, optional: true, required: false
  private _dayOfWeek?: string; 
  public get dayOfWeek() {
    return this.getStringAttribute('day_of_week');
  }
  public set dayOfWeek(value: string) {
    this._dayOfWeek = value;
  }
  public resetDayOfWeek() {
    this._dayOfWeek = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dayOfWeekInput() {
    return this._dayOfWeek;
  }

  // hour - computed: false, optional: false, required: true
  private _hour?: string; 
  public get hour() {
    return this.getStringAttribute('hour');
  }
  public set hour(value: string) {
    this._hour = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hourInput() {
    return this._hour;
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

  // interval_days - computed: false, optional: true, required: false
  private _intervalDays?: number; 
  public get intervalDays() {
    return this.getNumberAttribute('interval_days');
  }
  public set intervalDays(value: number) {
    this._intervalDays = value;
  }
  public resetIntervalDays() {
    this._intervalDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalDaysInput() {
    return this._intervalDays;
  }

  // policy_name - computed: true, optional: true, required: false
  private _policyName?: string; 
  public get policyName() {
    return this.getStringAttribute('policy_name');
  }
  public set policyName(value: string) {
    this._policyName = value;
  }
  public resetPolicyName() {
    this._policyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyNameInput() {
    return this._policyName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      alive_days: cdktf.numberToTerraform(this._aliveDays),
      day_of_month: cdktf.stringToTerraform(this._dayOfMonth),
      day_of_week: cdktf.stringToTerraform(this._dayOfWeek),
      hour: cdktf.stringToTerraform(this._hour),
      id: cdktf.stringToTerraform(this._id),
      interval_days: cdktf.numberToTerraform(this._intervalDays),
      policy_name: cdktf.stringToTerraform(this._policyName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      alive_days: {
        value: cdktf.numberToHclTerraform(this._aliveDays),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      day_of_month: {
        value: cdktf.stringToHclTerraform(this._dayOfMonth),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      day_of_week: {
        value: cdktf.stringToHclTerraform(this._dayOfWeek),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hour: {
        value: cdktf.stringToHclTerraform(this._hour),
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
      interval_days: {
        value: cdktf.numberToHclTerraform(this._intervalDays),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      policy_name: {
        value: cdktf.stringToHclTerraform(this._policyName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
