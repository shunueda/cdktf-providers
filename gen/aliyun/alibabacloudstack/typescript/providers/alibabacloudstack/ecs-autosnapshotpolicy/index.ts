// https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/ecs_autosnapshotpolicy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EcsAutosnapshotpolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/ecs_autosnapshotpolicy#auto_snapshot_policy_name EcsAutosnapshotpolicy#auto_snapshot_policy_name}
  */
  readonly autoSnapshotPolicyName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/ecs_autosnapshotpolicy#id EcsAutosnapshotpolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/ecs_autosnapshotpolicy#name EcsAutosnapshotpolicy#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/ecs_autosnapshotpolicy#repeat_weekdays EcsAutosnapshotpolicy#repeat_weekdays}
  */
  readonly repeatWeekdays: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/ecs_autosnapshotpolicy#retention_days EcsAutosnapshotpolicy#retention_days}
  */
  readonly retentionDays?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/ecs_autosnapshotpolicy#tags EcsAutosnapshotpolicy#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/ecs_autosnapshotpolicy#time_points EcsAutosnapshotpolicy#time_points}
  */
  readonly timePoints: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/ecs_autosnapshotpolicy alibabacloudstack_ecs_autosnapshotpolicy}
*/
export class EcsAutosnapshotpolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alibabacloudstack_ecs_autosnapshotpolicy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a EcsAutosnapshotpolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EcsAutosnapshotpolicy to import
  * @param importFromId The id of the existing EcsAutosnapshotpolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/ecs_autosnapshotpolicy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EcsAutosnapshotpolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alibabacloudstack_ecs_autosnapshotpolicy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/ecs_autosnapshotpolicy alibabacloudstack_ecs_autosnapshotpolicy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EcsAutosnapshotpolicyConfig
  */
  public constructor(scope: Construct, id: string, config: EcsAutosnapshotpolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'alibabacloudstack_ecs_autosnapshotpolicy',
      terraformGeneratorMetadata: {
        providerName: 'alibabacloudstack',
        providerVersion: '3.18.21',
        providerVersionConstraint: '3.18.21'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._autoSnapshotPolicyName = config.autoSnapshotPolicyName;
    this._id = config.id;
    this._name = config.name;
    this._repeatWeekdays = config.repeatWeekdays;
    this._retentionDays = config.retentionDays;
    this._tags = config.tags;
    this._timePoints = config.timePoints;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_snapshot_policy_name - computed: true, optional: true, required: false
  private _autoSnapshotPolicyName?: string; 
  public get autoSnapshotPolicyName() {
    return this.getStringAttribute('auto_snapshot_policy_name');
  }
  public set autoSnapshotPolicyName(value: string) {
    this._autoSnapshotPolicyName = value;
  }
  public resetAutoSnapshotPolicyName() {
    this._autoSnapshotPolicyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoSnapshotPolicyNameInput() {
    return this._autoSnapshotPolicyName;
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

  // name - computed: true, optional: true, required: false
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

  // repeat_weekdays - computed: false, optional: false, required: true
  private _repeatWeekdays?: string[]; 
  public get repeatWeekdays() {
    return cdktf.Fn.tolist(this.getListAttribute('repeat_weekdays'));
  }
  public set repeatWeekdays(value: string[]) {
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

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // time_points - computed: false, optional: false, required: true
  private _timePoints?: string[]; 
  public get timePoints() {
    return cdktf.Fn.tolist(this.getListAttribute('time_points'));
  }
  public set timePoints(value: string[]) {
    this._timePoints = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timePointsInput() {
    return this._timePoints;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auto_snapshot_policy_name: cdktf.stringToTerraform(this._autoSnapshotPolicyName),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      repeat_weekdays: cdktf.listMapper(cdktf.stringToTerraform, false)(this._repeatWeekdays),
      retention_days: cdktf.numberToTerraform(this._retentionDays),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      time_points: cdktf.listMapper(cdktf.stringToTerraform, false)(this._timePoints),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auto_snapshot_policy_name: {
        value: cdktf.stringToHclTerraform(this._autoSnapshotPolicyName),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      repeat_weekdays: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._repeatWeekdays),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      retention_days: {
        value: cdktf.numberToHclTerraform(this._retentionDays),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      time_points: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._timePoints),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
