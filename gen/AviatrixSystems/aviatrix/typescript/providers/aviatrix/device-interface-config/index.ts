// https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/device_interface_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DeviceInterfaceConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * Name of device.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/device_interface_config#device_name DeviceInterfaceConfig#device_name}
  */
  readonly deviceName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/device_interface_config#id DeviceInterfaceConfig#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * WAN primary interface of the device.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/device_interface_config#wan_primary_interface DeviceInterfaceConfig#wan_primary_interface}
  */
  readonly wanPrimaryInterface: string;
  /**
  * WAN primary interface public IP address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/device_interface_config#wan_primary_interface_public_ip DeviceInterfaceConfig#wan_primary_interface_public_ip}
  */
  readonly wanPrimaryInterfacePublicIp: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/device_interface_config aviatrix_device_interface_config}
*/
export class DeviceInterfaceConfig extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aviatrix_device_interface_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DeviceInterfaceConfig resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DeviceInterfaceConfig to import
  * @param importFromId The id of the existing DeviceInterfaceConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/device_interface_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DeviceInterfaceConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aviatrix_device_interface_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/device_interface_config aviatrix_device_interface_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DeviceInterfaceConfigConfig
  */
  public constructor(scope: Construct, id: string, config: DeviceInterfaceConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'aviatrix_device_interface_config',
      terraformGeneratorMetadata: {
        providerName: 'aviatrix',
        providerVersion: '8.2.0',
        providerVersionConstraint: '8.2.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._deviceName = config.deviceName;
    this._id = config.id;
    this._wanPrimaryInterface = config.wanPrimaryInterface;
    this._wanPrimaryInterfacePublicIp = config.wanPrimaryInterfacePublicIp;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // device_name - computed: false, optional: false, required: true
  private _deviceName?: string; 
  public get deviceName() {
    return this.getStringAttribute('device_name');
  }
  public set deviceName(value: string) {
    this._deviceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceNameInput() {
    return this._deviceName;
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

  // wan_primary_interface - computed: false, optional: false, required: true
  private _wanPrimaryInterface?: string; 
  public get wanPrimaryInterface() {
    return this.getStringAttribute('wan_primary_interface');
  }
  public set wanPrimaryInterface(value: string) {
    this._wanPrimaryInterface = value;
  }
  // Temporarily expose input value. Use with caution.
  public get wanPrimaryInterfaceInput() {
    return this._wanPrimaryInterface;
  }

  // wan_primary_interface_public_ip - computed: false, optional: false, required: true
  private _wanPrimaryInterfacePublicIp?: string; 
  public get wanPrimaryInterfacePublicIp() {
    return this.getStringAttribute('wan_primary_interface_public_ip');
  }
  public set wanPrimaryInterfacePublicIp(value: string) {
    this._wanPrimaryInterfacePublicIp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get wanPrimaryInterfacePublicIpInput() {
    return this._wanPrimaryInterfacePublicIp;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      device_name: cdktf.stringToTerraform(this._deviceName),
      id: cdktf.stringToTerraform(this._id),
      wan_primary_interface: cdktf.stringToTerraform(this._wanPrimaryInterface),
      wan_primary_interface_public_ip: cdktf.stringToTerraform(this._wanPrimaryInterfacePublicIp),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      device_name: {
        value: cdktf.stringToHclTerraform(this._deviceName),
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
      wan_primary_interface: {
        value: cdktf.stringToHclTerraform(this._wanPrimaryInterface),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wan_primary_interface_public_ip: {
        value: cdktf.stringToHclTerraform(this._wanPrimaryInterfacePublicIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
