// https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.10/docs/resources/zec_disk_snapshot_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ZecDiskSnapshotPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * The availability zone of snapshot policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.10/docs/resources/zec_disk_snapshot_policy#availability_zone ZecDiskSnapshotPolicy#availability_zone}
  */
  readonly availabilityZone: string;
  /**
  * The hours of day when the auto snapshot policy is triggered. The time zone of hour is `UTC+0`. Valid values: from `0` to `23`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.10/docs/resources/zec_disk_snapshot_policy#hours ZecDiskSnapshotPolicy#hours}
  */
  readonly hours: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.10/docs/resources/zec_disk_snapshot_policy#id ZecDiskSnapshotPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the snapshot policy. The name should start and end with a number or a letter, containing 2 to 63 characters. Only letters, numbers, - and periods (.) are supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.10/docs/resources/zec_disk_snapshot_policy#name ZecDiskSnapshotPolicy#name}
  */
  readonly name?: string;
  /**
  * The days of week when the auto snapshot policy is triggered. Valid values: `1` to `7`. 1: Monday, 2: Tuesday ~ 7: Sunday.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.10/docs/resources/zec_disk_snapshot_policy#repeat_week_days ZecDiskSnapshotPolicy#repeat_week_days}
  */
  readonly repeatWeekDays: number[];
  /**
  * The ID of resource group grouped snapshot policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.10/docs/resources/zec_disk_snapshot_policy#resource_group_id ZecDiskSnapshotPolicy#resource_group_id}
  */
  readonly resourceGroupId?: string;
  /**
  * The retention days of the auto snapshot policy. Valid values: `1` to `65535` or `-1` for no expired. Default is `-1`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.10/docs/resources/zec_disk_snapshot_policy#retention_days ZecDiskSnapshotPolicy#retention_days}
  */
  readonly retentionDays?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.10/docs/resources/zec_disk_snapshot_policy zenlayercloud_zec_disk_snapshot_policy}
*/
export class ZecDiskSnapshotPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "zenlayercloud_zec_disk_snapshot_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ZecDiskSnapshotPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ZecDiskSnapshotPolicy to import
  * @param importFromId The id of the existing ZecDiskSnapshotPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.10/docs/resources/zec_disk_snapshot_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ZecDiskSnapshotPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "zenlayercloud_zec_disk_snapshot_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.10/docs/resources/zec_disk_snapshot_policy zenlayercloud_zec_disk_snapshot_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ZecDiskSnapshotPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: ZecDiskSnapshotPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'zenlayercloud_zec_disk_snapshot_policy',
      terraformGeneratorMetadata: {
        providerName: 'zenlayercloud',
        providerVersion: '0.2.10',
        providerVersionConstraint: '0.2.10'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._availabilityZone = config.availabilityZone;
    this._hours = config.hours;
    this._id = config.id;
    this._name = config.name;
    this._repeatWeekDays = config.repeatWeekDays;
    this._resourceGroupId = config.resourceGroupId;
    this._retentionDays = config.retentionDays;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // availability_zone - computed: false, optional: false, required: true
  private _availabilityZone?: string; 
  public get availabilityZone() {
    return this.getStringAttribute('availability_zone');
  }
  public set availabilityZone(value: string) {
    this._availabilityZone = value;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityZoneInput() {
    return this._availabilityZone;
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // hours - computed: false, optional: false, required: true
  private _hours?: number[]; 
  public get hours() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('hours')));
  }
  public set hours(value: number[]) {
    this._hours = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hoursInput() {
    return this._hours;
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

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // repeat_week_days - computed: false, optional: false, required: true
  private _repeatWeekDays?: number[]; 
  public get repeatWeekDays() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('repeat_week_days')));
  }
  public set repeatWeekDays(value: number[]) {
    this._repeatWeekDays = value;
  }
  // Temporarily expose input value. Use with caution.
  public get repeatWeekDaysInput() {
    return this._repeatWeekDays;
  }

  // resource_group_id - computed: true, optional: true, required: false
  private _resourceGroupId?: string; 
  public get resourceGroupId() {
    return this.getStringAttribute('resource_group_id');
  }
  public set resourceGroupId(value: string) {
    this._resourceGroupId = value;
  }
  public resetResourceGroupId() {
    this._resourceGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupIdInput() {
    return this._resourceGroupId;
  }

  // resource_group_name - computed: true, optional: false, required: false
  public get resourceGroupName() {
    return this.getStringAttribute('resource_group_name');
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      availability_zone: cdktf.stringToTerraform(this._availabilityZone),
      hours: cdktf.listMapper(cdktf.numberToTerraform, false)(this._hours),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      repeat_week_days: cdktf.listMapper(cdktf.numberToTerraform, false)(this._repeatWeekDays),
      resource_group_id: cdktf.stringToTerraform(this._resourceGroupId),
      retention_days: cdktf.numberToTerraform(this._retentionDays),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      availability_zone: {
        value: cdktf.stringToHclTerraform(this._availabilityZone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hours: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._hours),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      repeat_week_days: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._repeatWeekDays),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
      resource_group_id: {
        value: cdktf.stringToHclTerraform(this._resourceGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      retention_days: {
        value: cdktf.numberToHclTerraform(this._retentionDays),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
