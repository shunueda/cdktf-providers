// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/mysql_switch_master_slave_operation
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MysqlSwitchMasterSlaveOperationConfig extends cdktf.TerraformMetaArguments {
  /**
  * target instance. Possible values: `first` - first standby; `second` - second standby. The default value is `first`, and only multi-AZ instances support setting it to `second`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/mysql_switch_master_slave_operation#dst_slave MysqlSwitchMasterSlaveOperation#dst_slave}
  */
  readonly dstSlave?: string;
  /**
  * Whether to force switch. Default is False. Note that if you set the mandatory switch to True, there is a risk of data loss on the instance, so use it with caution.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/mysql_switch_master_slave_operation#force_switch MysqlSwitchMasterSlaveOperation#force_switch}
  */
  readonly forceSwitch?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/mysql_switch_master_slave_operation#id MysqlSwitchMasterSlaveOperation#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * instance id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/mysql_switch_master_slave_operation#instance_id MysqlSwitchMasterSlaveOperation#instance_id}
  */
  readonly instanceId: string;
  /**
  * Whether to switch within the time window. The default is False, i.e. do not switch within the time window. Note that if the ForceSwitch parameter is set to True, this parameter will not take effect.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/mysql_switch_master_slave_operation#wait_switch MysqlSwitchMasterSlaveOperation#wait_switch}
  */
  readonly waitSwitch?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/mysql_switch_master_slave_operation tencentcloud_mysql_switch_master_slave_operation}
*/
export class MysqlSwitchMasterSlaveOperation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_mysql_switch_master_slave_operation";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MysqlSwitchMasterSlaveOperation resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MysqlSwitchMasterSlaveOperation to import
  * @param importFromId The id of the existing MysqlSwitchMasterSlaveOperation that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/mysql_switch_master_slave_operation#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MysqlSwitchMasterSlaveOperation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_mysql_switch_master_slave_operation", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/mysql_switch_master_slave_operation tencentcloud_mysql_switch_master_slave_operation} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MysqlSwitchMasterSlaveOperationConfig
  */
  public constructor(scope: Construct, id: string, config: MysqlSwitchMasterSlaveOperationConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_mysql_switch_master_slave_operation',
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
    this._dstSlave = config.dstSlave;
    this._forceSwitch = config.forceSwitch;
    this._id = config.id;
    this._instanceId = config.instanceId;
    this._waitSwitch = config.waitSwitch;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // dst_slave - computed: false, optional: true, required: false
  private _dstSlave?: string; 
  public get dstSlave() {
    return this.getStringAttribute('dst_slave');
  }
  public set dstSlave(value: string) {
    this._dstSlave = value;
  }
  public resetDstSlave() {
    this._dstSlave = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstSlaveInput() {
    return this._dstSlave;
  }

  // force_switch - computed: false, optional: true, required: false
  private _forceSwitch?: boolean | cdktf.IResolvable; 
  public get forceSwitch() {
    return this.getBooleanAttribute('force_switch');
  }
  public set forceSwitch(value: boolean | cdktf.IResolvable) {
    this._forceSwitch = value;
  }
  public resetForceSwitch() {
    this._forceSwitch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceSwitchInput() {
    return this._forceSwitch;
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

  // wait_switch - computed: false, optional: true, required: false
  private _waitSwitch?: boolean | cdktf.IResolvable; 
  public get waitSwitch() {
    return this.getBooleanAttribute('wait_switch');
  }
  public set waitSwitch(value: boolean | cdktf.IResolvable) {
    this._waitSwitch = value;
  }
  public resetWaitSwitch() {
    this._waitSwitch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitSwitchInput() {
    return this._waitSwitch;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      dst_slave: cdktf.stringToTerraform(this._dstSlave),
      force_switch: cdktf.booleanToTerraform(this._forceSwitch),
      id: cdktf.stringToTerraform(this._id),
      instance_id: cdktf.stringToTerraform(this._instanceId),
      wait_switch: cdktf.booleanToTerraform(this._waitSwitch),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      dst_slave: {
        value: cdktf.stringToHclTerraform(this._dstSlave),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      force_switch: {
        value: cdktf.booleanToHclTerraform(this._forceSwitch),
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
      instance_id: {
        value: cdktf.stringToHclTerraform(this._instanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wait_switch: {
        value: cdktf.booleanToHclTerraform(this._waitSwitch),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
