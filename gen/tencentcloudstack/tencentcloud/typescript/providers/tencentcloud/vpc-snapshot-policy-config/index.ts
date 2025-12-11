// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/vpc_snapshot_policy_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VpcSnapshotPolicyConfigAConfig extends cdktf.TerraformMetaArguments {
  /**
  * If enable snapshot policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/vpc_snapshot_policy_config#enable VpcSnapshotPolicyConfigA#enable}
  */
  readonly enable: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/vpc_snapshot_policy_config#id VpcSnapshotPolicyConfigA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Snapshot policy Id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/vpc_snapshot_policy_config#snapshot_policy_id VpcSnapshotPolicyConfigA#snapshot_policy_id}
  */
  readonly snapshotPolicyId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/vpc_snapshot_policy_config tencentcloud_vpc_snapshot_policy_config}
*/
export class VpcSnapshotPolicyConfigA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_vpc_snapshot_policy_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VpcSnapshotPolicyConfigA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VpcSnapshotPolicyConfigA to import
  * @param importFromId The id of the existing VpcSnapshotPolicyConfigA that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/vpc_snapshot_policy_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VpcSnapshotPolicyConfigA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_vpc_snapshot_policy_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/vpc_snapshot_policy_config tencentcloud_vpc_snapshot_policy_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VpcSnapshotPolicyConfigAConfig
  */
  public constructor(scope: Construct, id: string, config: VpcSnapshotPolicyConfigAConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_vpc_snapshot_policy_config',
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
    this._enable = config.enable;
    this._id = config.id;
    this._snapshotPolicyId = config.snapshotPolicyId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // enable - computed: false, optional: false, required: true
  private _enable?: boolean | cdktf.IResolvable; 
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
  public set enable(value: boolean | cdktf.IResolvable) {
    this._enable = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
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

  // snapshot_policy_id - computed: false, optional: false, required: true
  private _snapshotPolicyId?: string; 
  public get snapshotPolicyId() {
    return this.getStringAttribute('snapshot_policy_id');
  }
  public set snapshotPolicyId(value: string) {
    this._snapshotPolicyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotPolicyIdInput() {
    return this._snapshotPolicyId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      enable: cdktf.booleanToTerraform(this._enable),
      id: cdktf.stringToTerraform(this._id),
      snapshot_policy_id: cdktf.stringToTerraform(this._snapshotPolicyId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      enable: {
        value: cdktf.booleanToHclTerraform(this._enable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      snapshot_policy_id: {
        value: cdktf.stringToHclTerraform(this._snapshotPolicyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
