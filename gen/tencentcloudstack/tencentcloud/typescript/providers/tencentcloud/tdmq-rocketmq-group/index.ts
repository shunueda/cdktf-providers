// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/tdmq_rocketmq_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TdmqRocketmqGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Whether to enable broadcast consumption.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/tdmq_rocketmq_group#broadcast_enable TdmqRocketmqGroup#broadcast_enable}
  */
  readonly broadcastEnable: boolean | cdktf.IResolvable;
  /**
  * Cluster ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/tdmq_rocketmq_group#cluster_id TdmqRocketmqGroup#cluster_id}
  */
  readonly clusterId: string;
  /**
  * Group name (8-64 characters).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/tdmq_rocketmq_group#group_name TdmqRocketmqGroup#group_name}
  */
  readonly groupName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/tdmq_rocketmq_group#id TdmqRocketmqGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Namespace. Currently, only one namespace is supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/tdmq_rocketmq_group#namespace TdmqRocketmqGroup#namespace}
  */
  readonly namespace: string;
  /**
  * Whether to enable consumption.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/tdmq_rocketmq_group#read_enable TdmqRocketmqGroup#read_enable}
  */
  readonly readEnable: boolean | cdktf.IResolvable;
  /**
  * Remarks (up to 128 characters).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/tdmq_rocketmq_group#remark TdmqRocketmqGroup#remark}
  */
  readonly remark?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/tdmq_rocketmq_group tencentcloud_tdmq_rocketmq_group}
*/
export class TdmqRocketmqGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_tdmq_rocketmq_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TdmqRocketmqGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TdmqRocketmqGroup to import
  * @param importFromId The id of the existing TdmqRocketmqGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/tdmq_rocketmq_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TdmqRocketmqGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_tdmq_rocketmq_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/tdmq_rocketmq_group tencentcloud_tdmq_rocketmq_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TdmqRocketmqGroupConfig
  */
  public constructor(scope: Construct, id: string, config: TdmqRocketmqGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_tdmq_rocketmq_group',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.41',
        providerVersionConstraint: '1.82.41'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._broadcastEnable = config.broadcastEnable;
    this._clusterId = config.clusterId;
    this._groupName = config.groupName;
    this._id = config.id;
    this._namespace = config.namespace;
    this._readEnable = config.readEnable;
    this._remark = config.remark;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // broadcast_enable - computed: false, optional: false, required: true
  private _broadcastEnable?: boolean | cdktf.IResolvable; 
  public get broadcastEnable() {
    return this.getBooleanAttribute('broadcast_enable');
  }
  public set broadcastEnable(value: boolean | cdktf.IResolvable) {
    this._broadcastEnable = value;
  }
  // Temporarily expose input value. Use with caution.
  public get broadcastEnableInput() {
    return this._broadcastEnable;
  }

  // client_protocol - computed: true, optional: false, required: false
  public get clientProtocol() {
    return this.getStringAttribute('client_protocol');
  }

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

  // consumer_num - computed: true, optional: false, required: false
  public get consumerNum() {
    return this.getNumberAttribute('consumer_num');
  }

  // consumer_type - computed: true, optional: false, required: false
  public get consumerType() {
    return this.getStringAttribute('consumer_type');
  }

  // consumption_mode - computed: true, optional: false, required: false
  public get consumptionMode() {
    return this.getNumberAttribute('consumption_mode');
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getNumberAttribute('create_time');
  }

  // group_name - computed: false, optional: false, required: true
  private _groupName?: string; 
  public get groupName() {
    return this.getStringAttribute('group_name');
  }
  public set groupName(value: string) {
    this._groupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupNameInput() {
    return this._groupName;
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

  // namespace - computed: false, optional: false, required: true
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // read_enable - computed: false, optional: false, required: true
  private _readEnable?: boolean | cdktf.IResolvable; 
  public get readEnable() {
    return this.getBooleanAttribute('read_enable');
  }
  public set readEnable(value: boolean | cdktf.IResolvable) {
    this._readEnable = value;
  }
  // Temporarily expose input value. Use with caution.
  public get readEnableInput() {
    return this._readEnable;
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

  // retry_partition_num - computed: true, optional: false, required: false
  public get retryPartitionNum() {
    return this.getNumberAttribute('retry_partition_num');
  }

  // total_accumulative - computed: true, optional: false, required: false
  public get totalAccumulative() {
    return this.getNumberAttribute('total_accumulative');
  }

  // tps - computed: true, optional: false, required: false
  public get tps() {
    return this.getNumberAttribute('tps');
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getNumberAttribute('update_time');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      broadcast_enable: cdktf.booleanToTerraform(this._broadcastEnable),
      cluster_id: cdktf.stringToTerraform(this._clusterId),
      group_name: cdktf.stringToTerraform(this._groupName),
      id: cdktf.stringToTerraform(this._id),
      namespace: cdktf.stringToTerraform(this._namespace),
      read_enable: cdktf.booleanToTerraform(this._readEnable),
      remark: cdktf.stringToTerraform(this._remark),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      broadcast_enable: {
        value: cdktf.booleanToHclTerraform(this._broadcastEnable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      cluster_id: {
        value: cdktf.stringToHclTerraform(this._clusterId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      group_name: {
        value: cdktf.stringToHclTerraform(this._groupName),
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
      namespace: {
        value: cdktf.stringToHclTerraform(this._namespace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      read_enable: {
        value: cdktf.booleanToHclTerraform(this._readEnable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      remark: {
        value: cdktf.stringToHclTerraform(this._remark),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
