// https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/data-sources/device_management_interface
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataMerakiDeviceManagementInterfaceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Device serial
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/data-sources/device_management_interface#serial DataMerakiDeviceManagementInterface#serial}
  */
  readonly serial: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/data-sources/device_management_interface meraki_device_management_interface}
*/
export class DataMerakiDeviceManagementInterface extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "meraki_device_management_interface";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataMerakiDeviceManagementInterface resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataMerakiDeviceManagementInterface to import
  * @param importFromId The id of the existing DataMerakiDeviceManagementInterface that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/data-sources/device_management_interface#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataMerakiDeviceManagementInterface to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "meraki_device_management_interface", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/data-sources/device_management_interface meraki_device_management_interface} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataMerakiDeviceManagementInterfaceConfig
  */
  public constructor(scope: Construct, id: string, config: DataMerakiDeviceManagementInterfaceConfig) {
    super(scope, id, {
      terraformResourceType: 'meraki_device_management_interface',
      terraformGeneratorMetadata: {
        providerName: 'meraki',
        providerVersion: '1.8.0',
        providerVersionConstraint: '1.8.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._serial = config.serial;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // serial - computed: false, optional: false, required: true
  private _serial?: string; 
  public get serial() {
    return this.getStringAttribute('serial');
  }
  public set serial(value: string) {
    this._serial = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serialInput() {
    return this._serial;
  }

  // wan1_static_dns - computed: true, optional: false, required: false
  public get wan1StaticDns() {
    return this.getListAttribute('wan1_static_dns');
  }

  // wan1_static_gateway_ip - computed: true, optional: false, required: false
  public get wan1StaticGatewayIp() {
    return this.getStringAttribute('wan1_static_gateway_ip');
  }

  // wan1_static_ip - computed: true, optional: false, required: false
  public get wan1StaticIp() {
    return this.getStringAttribute('wan1_static_ip');
  }

  // wan1_static_subnet_mask - computed: true, optional: false, required: false
  public get wan1StaticSubnetMask() {
    return this.getStringAttribute('wan1_static_subnet_mask');
  }

  // wan1_using_static_ip - computed: true, optional: false, required: false
  public get wan1UsingStaticIp() {
    return this.getBooleanAttribute('wan1_using_static_ip');
  }

  // wan1_vlan - computed: true, optional: false, required: false
  public get wan1Vlan() {
    return this.getNumberAttribute('wan1_vlan');
  }

  // wan1_wan_enabled - computed: true, optional: false, required: false
  public get wan1WanEnabled() {
    return this.getStringAttribute('wan1_wan_enabled');
  }

  // wan2_static_dns - computed: true, optional: false, required: false
  public get wan2StaticDns() {
    return this.getListAttribute('wan2_static_dns');
  }

  // wan2_static_gateway_ip - computed: true, optional: false, required: false
  public get wan2StaticGatewayIp() {
    return this.getStringAttribute('wan2_static_gateway_ip');
  }

  // wan2_static_ip - computed: true, optional: false, required: false
  public get wan2StaticIp() {
    return this.getStringAttribute('wan2_static_ip');
  }

  // wan2_static_subnet_mask - computed: true, optional: false, required: false
  public get wan2StaticSubnetMask() {
    return this.getStringAttribute('wan2_static_subnet_mask');
  }

  // wan2_using_static_ip - computed: true, optional: false, required: false
  public get wan2UsingStaticIp() {
    return this.getBooleanAttribute('wan2_using_static_ip');
  }

  // wan2_vlan - computed: true, optional: false, required: false
  public get wan2Vlan() {
    return this.getNumberAttribute('wan2_vlan');
  }

  // wan2_wan_enabled - computed: true, optional: false, required: false
  public get wan2WanEnabled() {
    return this.getStringAttribute('wan2_wan_enabled');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      serial: cdktf.stringToTerraform(this._serial),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      serial: {
        value: cdktf.stringToHclTerraform(this._serial),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
