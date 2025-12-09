// https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.4/docs/resources/update_device_management_address
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface UpdateDeviceManagementAddressConfig extends cdktf.TerraformMetaArguments {
  /**
  * The device ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.4/docs/resources/update_device_management_address#device_id UpdateDeviceManagementAddress#device_id}
  */
  readonly deviceId: string;
  /**
  * New IP Address of the device to be Updated
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.4/docs/resources/update_device_management_address#new_ip UpdateDeviceManagementAddress#new_ip}
  */
  readonly newIp?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.4/docs/resources/update_device_management_address catalystcenter_update_device_management_address}
*/
export class UpdateDeviceManagementAddress extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "catalystcenter_update_device_management_address";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a UpdateDeviceManagementAddress resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the UpdateDeviceManagementAddress to import
  * @param importFromId The id of the existing UpdateDeviceManagementAddress that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.4/docs/resources/update_device_management_address#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the UpdateDeviceManagementAddress to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "catalystcenter_update_device_management_address", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.4/docs/resources/update_device_management_address catalystcenter_update_device_management_address} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options UpdateDeviceManagementAddressConfig
  */
  public constructor(scope: Construct, id: string, config: UpdateDeviceManagementAddressConfig) {
    super(scope, id, {
      terraformResourceType: 'catalystcenter_update_device_management_address',
      terraformGeneratorMetadata: {
        providerName: 'catalystcenter',
        providerVersion: '0.4.4',
        providerVersionConstraint: '0.4.4'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._deviceId = config.deviceId;
    this._newIp = config.newIp;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // device_id - computed: false, optional: false, required: true
  private _deviceId?: string; 
  public get deviceId() {
    return this.getStringAttribute('device_id');
  }
  public set deviceId(value: string) {
    this._deviceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceIdInput() {
    return this._deviceId;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // new_ip - computed: false, optional: true, required: false
  private _newIp?: string; 
  public get newIp() {
    return this.getStringAttribute('new_ip');
  }
  public set newIp(value: string) {
    this._newIp = value;
  }
  public resetNewIp() {
    this._newIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get newIpInput() {
    return this._newIp;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      device_id: cdktf.stringToTerraform(this._deviceId),
      new_ip: cdktf.stringToTerraform(this._newIp),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      device_id: {
        value: cdktf.stringToHclTerraform(this._deviceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      new_ip: {
        value: cdktf.stringToHclTerraform(this._newIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
