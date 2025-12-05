// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/cbs_snapshot_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CbsSnapshotPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/cbs_snapshot_policy#id CbsSnapshotPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Trigger times of periodic snapshot. Valid value ranges: (0~23). The 0 means 00:00, and so on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/cbs_snapshot_policy#repeat_hours CbsSnapshotPolicy#repeat_hours}
  */
  readonly repeatHours: number[];
  /**
  * Periodic snapshot is enabled. Valid values: [0, 1, 2, 3, 4, 5, 6]. 0 means Sunday, 1-6 means Monday to Saturday.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/cbs_snapshot_policy#repeat_weekdays CbsSnapshotPolicy#repeat_weekdays}
  */
  readonly repeatWeekdays: number[];
  /**
  * Retention days of the snapshot, and the default value is 7.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/cbs_snapshot_policy#retention_days CbsSnapshotPolicy#retention_days}
  */
  readonly retentionDays?: number;
  /**
  * Name of snapshot policy. The maximum length can not exceed 60 bytes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/cbs_snapshot_policy#snapshot_policy_name CbsSnapshotPolicy#snapshot_policy_name}
  */
  readonly snapshotPolicyName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/cbs_snapshot_policy tencentcloud_cbs_snapshot_policy}
*/
export class CbsSnapshotPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_cbs_snapshot_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CbsSnapshotPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CbsSnapshotPolicy to import
  * @param importFromId The id of the existing CbsSnapshotPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/cbs_snapshot_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CbsSnapshotPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_cbs_snapshot_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/cbs_snapshot_policy tencentcloud_cbs_snapshot_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CbsSnapshotPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: CbsSnapshotPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_cbs_snapshot_policy',
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
    this._repeatHours = config.repeatHours;
    this._repeatWeekdays = config.repeatWeekdays;
    this._retentionDays = config.retentionDays;
    this._snapshotPolicyName = config.snapshotPolicyName;
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

  // repeat_hours - computed: false, optional: false, required: true
  private _repeatHours?: number[]; 
  public get repeatHours() {
    return this.getNumberListAttribute('repeat_hours');
  }
  public set repeatHours(value: number[]) {
    this._repeatHours = value;
  }
  // Temporarily expose input value. Use with caution.
  public get repeatHoursInput() {
    return this._repeatHours;
  }

  // repeat_weekdays - computed: false, optional: false, required: true
  private _repeatWeekdays?: number[]; 
  public get repeatWeekdays() {
    return this.getNumberListAttribute('repeat_weekdays');
  }
  public set repeatWeekdays(value: number[]) {
    this._repeatWeekdays = value;
  }
  // Temporarily expose input value. Use with caution.
  public get repeatWeekdaysInput() {
    return this._repeatWeekdays;
  }

  // retention_days - computed: false, optional: true, required: false
  private _retentionDays?: number; 
  public get retentionDays() {
    return this.getNumberAttribute('retention_days');
  }
  public set retentionDays(value: number) {
    this._retentionDays = value;
  }
  public resetRetentionDays() {
    this._retentionDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionDaysInput() {
    return this._retentionDays;
  }

  // snapshot_policy_name - computed: false, optional: false, required: true
  private _snapshotPolicyName?: string; 
  public get snapshotPolicyName() {
    return this.getStringAttribute('snapshot_policy_name');
  }
  public set snapshotPolicyName(value: string) {
    this._snapshotPolicyName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotPolicyNameInput() {
    return this._snapshotPolicyName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      repeat_hours: cdktf.listMapper(cdktf.numberToTerraform, false)(this._repeatHours),
      repeat_weekdays: cdktf.listMapper(cdktf.numberToTerraform, false)(this._repeatWeekdays),
      retention_days: cdktf.numberToTerraform(this._retentionDays),
      snapshot_policy_name: cdktf.stringToTerraform(this._snapshotPolicyName),
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
      repeat_hours: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._repeatHours),
        isBlock: false,
        type: "list",
        storageClassType: "numberList",
      },
      repeat_weekdays: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._repeatWeekdays),
        isBlock: false,
        type: "list",
        storageClassType: "numberList",
      },
      retention_days: {
        value: cdktf.numberToHclTerraform(this._retentionDays),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      snapshot_policy_name: {
        value: cdktf.stringToHclTerraform(this._snapshotPolicyName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
