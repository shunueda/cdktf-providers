// https://registry.terraform.io/providers/zscaler/zia/4.6.4/docs/data-sources/devices
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataZiaDevicesConfig extends cdktf.TerraformMetaArguments {
  /**
  * The device group type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.4/docs/data-sources/devices#device_group_type DataZiaDevices#device_group_type}
  */
  readonly deviceGroupType?: string;
  /**
  * The device model.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.4/docs/data-sources/devices#device_model DataZiaDevices#device_model}
  */
  readonly deviceModel?: string;
  /**
  * The device owner's user name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.4/docs/data-sources/devices#hostname DataZiaDevices#hostname}
  */
  readonly hostname?: string;
  /**
  * The unique identifier for the device.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.4/docs/data-sources/devices#id DataZiaDevices#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * The device name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.4/docs/data-sources/devices#name DataZiaDevices#name}
  */
  readonly name?: string;
  /**
  * The operating system (OS).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.4/docs/data-sources/devices#os_type DataZiaDevices#os_type}
  */
  readonly osType?: string;
  /**
  * The operating system version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.4/docs/data-sources/devices#os_version DataZiaDevices#os_version}
  */
  readonly osVersion?: string;
  /**
  * The device owner's user name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.4/docs/data-sources/devices#owner_name DataZiaDevices#owner_name}
  */
  readonly ownerName?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/zscaler/zia/4.6.4/docs/data-sources/devices zia_devices}
*/
export class DataZiaDevices extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "zia_devices";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataZiaDevices resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataZiaDevices to import
  * @param importFromId The id of the existing DataZiaDevices that should be imported. Refer to the {@link https://registry.terraform.io/providers/zscaler/zia/4.6.4/docs/data-sources/devices#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataZiaDevices to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "zia_devices", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/zscaler/zia/4.6.4/docs/data-sources/devices zia_devices} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataZiaDevicesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataZiaDevicesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'zia_devices',
      terraformGeneratorMetadata: {
        providerName: 'zia',
        providerVersion: '4.6.4',
        providerVersionConstraint: '4.6.4'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._deviceGroupType = config.deviceGroupType;
    this._deviceModel = config.deviceModel;
    this._hostname = config.hostname;
    this._id = config.id;
    this._name = config.name;
    this._osType = config.osType;
    this._osVersion = config.osVersion;
    this._ownerName = config.ownerName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // device_group_type - computed: true, optional: true, required: false
  private _deviceGroupType?: string; 
  public get deviceGroupType() {
    return this.getStringAttribute('device_group_type');
  }
  public set deviceGroupType(value: string) {
    this._deviceGroupType = value;
  }
  public resetDeviceGroupType() {
    this._deviceGroupType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceGroupTypeInput() {
    return this._deviceGroupType;
  }

  // device_model - computed: true, optional: true, required: false
  private _deviceModel?: string; 
  public get deviceModel() {
    return this.getStringAttribute('device_model');
  }
  public set deviceModel(value: string) {
    this._deviceModel = value;
  }
  public resetDeviceModel() {
    this._deviceModel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceModelInput() {
    return this._deviceModel;
  }

  // hostname - computed: true, optional: true, required: false
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  public resetHostname() {
    this._hostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
  }

  // id - computed: true, optional: true, required: false
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
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

  // os_type - computed: true, optional: true, required: false
  private _osType?: string; 
  public get osType() {
    return this.getStringAttribute('os_type');
  }
  public set osType(value: string) {
    this._osType = value;
  }
  public resetOsType() {
    this._osType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osTypeInput() {
    return this._osType;
  }

  // os_version - computed: true, optional: true, required: false
  private _osVersion?: string; 
  public get osVersion() {
    return this.getStringAttribute('os_version');
  }
  public set osVersion(value: string) {
    this._osVersion = value;
  }
  public resetOsVersion() {
    this._osVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osVersionInput() {
    return this._osVersion;
  }

  // owner_name - computed: true, optional: true, required: false
  private _ownerName?: string; 
  public get ownerName() {
    return this.getStringAttribute('owner_name');
  }
  public set ownerName(value: string) {
    this._ownerName = value;
  }
  public resetOwnerName() {
    this._ownerName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerNameInput() {
    return this._ownerName;
  }

  // owner_user_id - computed: true, optional: false, required: false
  public get ownerUserId() {
    return this.getNumberAttribute('owner_user_id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      device_group_type: cdktf.stringToTerraform(this._deviceGroupType),
      device_model: cdktf.stringToTerraform(this._deviceModel),
      hostname: cdktf.stringToTerraform(this._hostname),
      id: cdktf.numberToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      os_type: cdktf.stringToTerraform(this._osType),
      os_version: cdktf.stringToTerraform(this._osVersion),
      owner_name: cdktf.stringToTerraform(this._ownerName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      device_group_type: {
        value: cdktf.stringToHclTerraform(this._deviceGroupType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device_model: {
        value: cdktf.stringToHclTerraform(this._deviceModel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hostname: {
        value: cdktf.stringToHclTerraform(this._hostname),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.numberToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      os_type: {
        value: cdktf.stringToHclTerraform(this._osType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      os_version: {
        value: cdktf.stringToHclTerraform(this._osVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      owner_name: {
        value: cdktf.stringToHclTerraform(this._ownerName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
