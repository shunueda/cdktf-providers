// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/dasb_device_group_members
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DasbDeviceGroupMembersConfig extends cdktf.TerraformMetaArguments {
  /**
  * Device Group ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/dasb_device_group_members#device_group_id DasbDeviceGroupMembers#device_group_id}
  */
  readonly deviceGroupId: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/dasb_device_group_members#id DasbDeviceGroupMembers#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * A collection of device IDs that need to be added to the device group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/dasb_device_group_members#member_id_set DasbDeviceGroupMembers#member_id_set}
  */
  readonly memberIdSet: number[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/dasb_device_group_members tencentcloud_dasb_device_group_members}
*/
export class DasbDeviceGroupMembers extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_dasb_device_group_members";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DasbDeviceGroupMembers resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DasbDeviceGroupMembers to import
  * @param importFromId The id of the existing DasbDeviceGroupMembers that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/dasb_device_group_members#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DasbDeviceGroupMembers to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_dasb_device_group_members", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/dasb_device_group_members tencentcloud_dasb_device_group_members} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DasbDeviceGroupMembersConfig
  */
  public constructor(scope: Construct, id: string, config: DasbDeviceGroupMembersConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_dasb_device_group_members',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.35',
        providerVersionConstraint: '1.82.35'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._deviceGroupId = config.deviceGroupId;
    this._id = config.id;
    this._memberIdSet = config.memberIdSet;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // device_group_id - computed: false, optional: false, required: true
  private _deviceGroupId?: number; 
  public get deviceGroupId() {
    return this.getNumberAttribute('device_group_id');
  }
  public set deviceGroupId(value: number) {
    this._deviceGroupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceGroupIdInput() {
    return this._deviceGroupId;
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

  // member_id_set - computed: false, optional: false, required: true
  private _memberIdSet?: number[]; 
  public get memberIdSet() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('member_id_set')));
  }
  public set memberIdSet(value: number[]) {
    this._memberIdSet = value;
  }
  // Temporarily expose input value. Use with caution.
  public get memberIdSetInput() {
    return this._memberIdSet;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      device_group_id: cdktf.numberToTerraform(this._deviceGroupId),
      id: cdktf.stringToTerraform(this._id),
      member_id_set: cdktf.listMapper(cdktf.numberToTerraform, false)(this._memberIdSet),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      device_group_id: {
        value: cdktf.numberToHclTerraform(this._deviceGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      member_id_set: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._memberIdSet),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
