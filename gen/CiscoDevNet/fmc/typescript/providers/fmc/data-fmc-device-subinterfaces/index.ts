// https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/data-sources/device_subinterfaces
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataFmcDeviceSubinterfacesConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of the device this resource needs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/data-sources/device_subinterfaces#device_id DataFmcDeviceSubinterfaces#device_id}
  */
  readonly deviceId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/data-sources/device_subinterfaces#id DataFmcDeviceSubinterfaces#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * ID of sub interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/data-sources/device_subinterfaces#subinterface_id DataFmcDeviceSubinterfaces#subinterface_id}
  */
  readonly subinterfaceId: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/data-sources/device_subinterfaces fmc_device_subinterfaces}
*/
export class DataFmcDeviceSubinterfaces extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fmc_device_subinterfaces";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataFmcDeviceSubinterfaces resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataFmcDeviceSubinterfaces to import
  * @param importFromId The id of the existing DataFmcDeviceSubinterfaces that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/data-sources/device_subinterfaces#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataFmcDeviceSubinterfaces to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fmc_device_subinterfaces", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/data-sources/device_subinterfaces fmc_device_subinterfaces} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataFmcDeviceSubinterfacesConfig
  */
  public constructor(scope: Construct, id: string, config: DataFmcDeviceSubinterfacesConfig) {
    super(scope, id, {
      terraformResourceType: 'fmc_device_subinterfaces',
      terraformGeneratorMetadata: {
        providerName: 'fmc',
        providerVersion: '1.5.2'
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
    this._id = config.id;
    this._subinterfaceId = config.subinterfaceId;
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

  // if_name - computed: true, optional: false, required: false
  public get ifName() {
    return this.getStringAttribute('if_name');
  }

  // ipv4_static_address - computed: true, optional: false, required: false
  public get ipv4StaticAddress() {
    return this.getStringAttribute('ipv4_static_address');
  }

  // mode - computed: true, optional: false, required: false
  public get mode() {
    return this.getStringAttribute('mode');
  }

  // mtu - computed: true, optional: false, required: false
  public get mtu() {
    return this.getNumberAttribute('mtu');
  }

  // security_zone_id - computed: true, optional: false, required: false
  public get securityZoneId() {
    return this.getStringAttribute('security_zone_id');
  }

  // subinterface_id - computed: false, optional: false, required: true
  private _subinterfaceId?: number; 
  public get subinterfaceId() {
    return this.getNumberAttribute('subinterface_id');
  }
  public set subinterfaceId(value: number) {
    this._subinterfaceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subinterfaceIdInput() {
    return this._subinterfaceId;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // vlan_id - computed: true, optional: false, required: false
  public get vlanId() {
    return this.getNumberAttribute('vlan_id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      device_id: cdktf.stringToTerraform(this._deviceId),
      id: cdktf.stringToTerraform(this._id),
      subinterface_id: cdktf.numberToTerraform(this._subinterfaceId),
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subinterface_id: {
        value: cdktf.numberToHclTerraform(this._subinterfaceId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
