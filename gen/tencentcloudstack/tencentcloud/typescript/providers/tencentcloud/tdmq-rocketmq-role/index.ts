// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/tdmq_rocketmq_role
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TdmqRocketmqRoleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Cluster ID (required).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/tdmq_rocketmq_role#cluster_id TdmqRocketmqRole#cluster_id}
  */
  readonly clusterId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/tdmq_rocketmq_role#id TdmqRocketmqRole#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Remarks (up to 128 characters).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/tdmq_rocketmq_role#remark TdmqRocketmqRole#remark}
  */
  readonly remark?: string;
  /**
  * Role name, which can contain up to 32 letters, digits, hyphens, and underscores.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/tdmq_rocketmq_role#role_name TdmqRocketmqRole#role_name}
  */
  readonly roleName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/tdmq_rocketmq_role tencentcloud_tdmq_rocketmq_role}
*/
export class TdmqRocketmqRole extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_tdmq_rocketmq_role";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TdmqRocketmqRole resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TdmqRocketmqRole to import
  * @param importFromId The id of the existing TdmqRocketmqRole that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/tdmq_rocketmq_role#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TdmqRocketmqRole to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_tdmq_rocketmq_role", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/tdmq_rocketmq_role tencentcloud_tdmq_rocketmq_role} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TdmqRocketmqRoleConfig
  */
  public constructor(scope: Construct, id: string, config: TdmqRocketmqRoleConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_tdmq_rocketmq_role',
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
    this._clusterId = config.clusterId;
    this._id = config.id;
    this._remark = config.remark;
    this._roleName = config.roleName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cluster_id - computed: false, optional: false, required: true
  private _clusterId?: string; 
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }
  public set clusterId(value: string) {
    this._clusterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIdInput() {
    return this._clusterId;
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
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

  // remark - computed: false, optional: true, required: false
  private _remark?: string; 
  public get remark() {
    return this.getStringAttribute('remark');
  }
  public set remark(value: string) {
    this._remark = value;
  }
  public resetRemark() {
    this._remark = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remarkInput() {
    return this._remark;
  }

  // role_name - computed: false, optional: false, required: true
  private _roleName?: string; 
  public get roleName() {
    return this.getStringAttribute('role_name');
  }
  public set roleName(value: string) {
    this._roleName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleNameInput() {
    return this._roleName;
  }

  // token - computed: true, optional: false, required: false
  public get token() {
    return this.getStringAttribute('token');
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cluster_id: cdktf.stringToTerraform(this._clusterId),
      id: cdktf.stringToTerraform(this._id),
      remark: cdktf.stringToTerraform(this._remark),
      role_name: cdktf.stringToTerraform(this._roleName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cluster_id: {
        value: cdktf.stringToHclTerraform(this._clusterId),
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
      remark: {
        value: cdktf.stringToHclTerraform(this._remark),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      role_name: {
        value: cdktf.stringToHclTerraform(this._roleName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
