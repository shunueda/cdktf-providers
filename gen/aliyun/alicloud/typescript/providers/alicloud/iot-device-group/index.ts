// https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/iot_device_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IotDeviceGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/iot_device_group#group_desc IotDeviceGroup#group_desc}
  */
  readonly groupDesc?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/iot_device_group#group_name IotDeviceGroup#group_name}
  */
  readonly groupName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/iot_device_group#id IotDeviceGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/iot_device_group#iot_instance_id IotDeviceGroup#iot_instance_id}
  */
  readonly iotInstanceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/iot_device_group#super_group_id IotDeviceGroup#super_group_id}
  */
  readonly superGroupId?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/iot_device_group alicloud_iot_device_group}
*/
export class IotDeviceGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_iot_device_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IotDeviceGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IotDeviceGroup to import
  * @param importFromId The id of the existing IotDeviceGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/iot_device_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IotDeviceGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_iot_device_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/iot_device_group alicloud_iot_device_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IotDeviceGroupConfig
  */
  public constructor(scope: Construct, id: string, config: IotDeviceGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_iot_device_group',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.265.0',
        providerVersionConstraint: '1.265.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._groupDesc = config.groupDesc;
    this._groupName = config.groupName;
    this._id = config.id;
    this._iotInstanceId = config.iotInstanceId;
    this._superGroupId = config.superGroupId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // group_desc - computed: false, optional: true, required: false
  private _groupDesc?: string; 
  public get groupDesc() {
    return this.getStringAttribute('group_desc');
  }
  public set groupDesc(value: string) {
    this._groupDesc = value;
  }
  public resetGroupDesc() {
    this._groupDesc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupDescInput() {
    return this._groupDesc;
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

  // iot_instance_id - computed: false, optional: true, required: false
  private _iotInstanceId?: string; 
  public get iotInstanceId() {
    return this.getStringAttribute('iot_instance_id');
  }
  public set iotInstanceId(value: string) {
    this._iotInstanceId = value;
  }
  public resetIotInstanceId() {
    this._iotInstanceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iotInstanceIdInput() {
    return this._iotInstanceId;
  }

  // super_group_id - computed: false, optional: true, required: false
  private _superGroupId?: string; 
  public get superGroupId() {
    return this.getStringAttribute('super_group_id');
  }
  public set superGroupId(value: string) {
    this._superGroupId = value;
  }
  public resetSuperGroupId() {
    this._superGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get superGroupIdInput() {
    return this._superGroupId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      group_desc: cdktf.stringToTerraform(this._groupDesc),
      group_name: cdktf.stringToTerraform(this._groupName),
      id: cdktf.stringToTerraform(this._id),
      iot_instance_id: cdktf.stringToTerraform(this._iotInstanceId),
      super_group_id: cdktf.stringToTerraform(this._superGroupId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      group_desc: {
        value: cdktf.stringToHclTerraform(this._groupDesc),
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
      iot_instance_id: {
        value: cdktf.stringToHclTerraform(this._iotInstanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      super_group_id: {
        value: cdktf.stringToHclTerraform(this._superGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
