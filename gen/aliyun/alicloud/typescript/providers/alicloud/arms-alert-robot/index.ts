// https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/arms_alert_robot
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ArmsAlertRobotConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/arms_alert_robot#alert_robot_name ArmsAlertRobot#alert_robot_name}
  */
  readonly alertRobotName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/arms_alert_robot#daily_noc ArmsAlertRobot#daily_noc}
  */
  readonly dailyNoc?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/arms_alert_robot#daily_noc_time ArmsAlertRobot#daily_noc_time}
  */
  readonly dailyNocTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/arms_alert_robot#id ArmsAlertRobot#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/arms_alert_robot#robot_addr ArmsAlertRobot#robot_addr}
  */
  readonly robotAddr: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/arms_alert_robot#robot_type ArmsAlertRobot#robot_type}
  */
  readonly robotType: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/arms_alert_robot alicloud_arms_alert_robot}
*/
export class ArmsAlertRobot extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_arms_alert_robot";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ArmsAlertRobot resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ArmsAlertRobot to import
  * @param importFromId The id of the existing ArmsAlertRobot that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/arms_alert_robot#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ArmsAlertRobot to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_arms_alert_robot", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/arms_alert_robot alicloud_arms_alert_robot} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ArmsAlertRobotConfig
  */
  public constructor(scope: Construct, id: string, config: ArmsAlertRobotConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_arms_alert_robot',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.262.1',
        providerVersionConstraint: '1.262.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._alertRobotName = config.alertRobotName;
    this._dailyNoc = config.dailyNoc;
    this._dailyNocTime = config.dailyNocTime;
    this._id = config.id;
    this._robotAddr = config.robotAddr;
    this._robotType = config.robotType;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alert_robot_name - computed: false, optional: false, required: true
  private _alertRobotName?: string; 
  public get alertRobotName() {
    return this.getStringAttribute('alert_robot_name');
  }
  public set alertRobotName(value: string) {
    this._alertRobotName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get alertRobotNameInput() {
    return this._alertRobotName;
  }

  // daily_noc - computed: false, optional: true, required: false
  private _dailyNoc?: boolean | cdktf.IResolvable; 
  public get dailyNoc() {
    return this.getBooleanAttribute('daily_noc');
  }
  public set dailyNoc(value: boolean | cdktf.IResolvable) {
    this._dailyNoc = value;
  }
  public resetDailyNoc() {
    this._dailyNoc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dailyNocInput() {
    return this._dailyNoc;
  }

  // daily_noc_time - computed: false, optional: true, required: false
  private _dailyNocTime?: string; 
  public get dailyNocTime() {
    return this.getStringAttribute('daily_noc_time');
  }
  public set dailyNocTime(value: string) {
    this._dailyNocTime = value;
  }
  public resetDailyNocTime() {
    this._dailyNocTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dailyNocTimeInput() {
    return this._dailyNocTime;
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

  // robot_addr - computed: false, optional: false, required: true
  private _robotAddr?: string; 
  public get robotAddr() {
    return this.getStringAttribute('robot_addr');
  }
  public set robotAddr(value: string) {
    this._robotAddr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get robotAddrInput() {
    return this._robotAddr;
  }

  // robot_type - computed: false, optional: false, required: true
  private _robotType?: string; 
  public get robotType() {
    return this.getStringAttribute('robot_type');
  }
  public set robotType(value: string) {
    this._robotType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get robotTypeInput() {
    return this._robotType;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      alert_robot_name: cdktf.stringToTerraform(this._alertRobotName),
      daily_noc: cdktf.booleanToTerraform(this._dailyNoc),
      daily_noc_time: cdktf.stringToTerraform(this._dailyNocTime),
      id: cdktf.stringToTerraform(this._id),
      robot_addr: cdktf.stringToTerraform(this._robotAddr),
      robot_type: cdktf.stringToTerraform(this._robotType),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      alert_robot_name: {
        value: cdktf.stringToHclTerraform(this._alertRobotName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      daily_noc: {
        value: cdktf.booleanToHclTerraform(this._dailyNoc),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      daily_noc_time: {
        value: cdktf.stringToHclTerraform(this._dailyNocTime),
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
      robot_addr: {
        value: cdktf.stringToHclTerraform(this._robotAddr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      robot_type: {
        value: cdktf.stringToHclTerraform(this._robotType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
