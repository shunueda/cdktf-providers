// https://registry.terraform.io/providers/equinix/metal/3.3.0/docs/data-sources/port
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataMetalPortConfig extends cdktf.TerraformMetaArguments {
  /**
  * Device UUID where to lookup the port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/metal/3.3.0/docs/data-sources/port#device_id DataMetalPort#device_id}
  */
  readonly deviceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/metal/3.3.0/docs/data-sources/port#id DataMetalPort#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the port to look up, e.g. bond0, eth1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/metal/3.3.0/docs/data-sources/port#name DataMetalPort#name}
  */
  readonly name?: string;
  /**
  * UUID of the port to lookup
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/metal/3.3.0/docs/data-sources/port#port_id DataMetalPort#port_id}
  */
  readonly portId?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/equinix/metal/3.3.0/docs/data-sources/port metal_port}
*/
export class DataMetalPort extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "metal_port";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataMetalPort resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataMetalPort to import
  * @param importFromId The id of the existing DataMetalPort that should be imported. Refer to the {@link https://registry.terraform.io/providers/equinix/metal/3.3.0/docs/data-sources/port#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataMetalPort to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "metal_port", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/equinix/metal/3.3.0/docs/data-sources/port metal_port} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataMetalPortConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataMetalPortConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'metal_port',
      terraformGeneratorMetadata: {
        providerName: 'metal',
        providerVersion: '3.3.0'
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
    this._name = config.name;
    this._portId = config.portId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bond_id - computed: true, optional: false, required: false
  public get bondId() {
    return this.getStringAttribute('bond_id');
  }

  // bond_name - computed: true, optional: false, required: false
  public get bondName() {
    return this.getStringAttribute('bond_name');
  }

  // bonded - computed: true, optional: false, required: false
  public get bonded() {
    return this.getBooleanAttribute('bonded');
  }

  // device_id - computed: false, optional: true, required: false
  private _deviceId?: string; 
  public get deviceId() {
    return this.getStringAttribute('device_id');
  }
  public set deviceId(value: string) {
    this._deviceId = value;
  }
  public resetDeviceId() {
    this._deviceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceIdInput() {
    return this._deviceId;
  }

  // disbond_supported - computed: true, optional: false, required: false
  public get disbondSupported() {
    return this.getBooleanAttribute('disbond_supported');
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

  // layer2 - computed: true, optional: false, required: false
  public get layer2() {
    return this.getBooleanAttribute('layer2');
  }

  // mac - computed: true, optional: false, required: false
  public get mac() {
    return this.getStringAttribute('mac');
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

  // native_vlan_id - computed: true, optional: false, required: false
  public get nativeVlanId() {
    return this.getStringAttribute('native_vlan_id');
  }

  // network_type - computed: true, optional: false, required: false
  public get networkType() {
    return this.getStringAttribute('network_type');
  }

  // port_id - computed: false, optional: true, required: false
  private _portId?: string; 
  public get portId() {
    return this.getStringAttribute('port_id');
  }
  public set portId(value: string) {
    this._portId = value;
  }
  public resetPortId() {
    this._portId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portIdInput() {
    return this._portId;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // vlan_ids - computed: true, optional: false, required: false
  public get vlanIds() {
    return this.getListAttribute('vlan_ids');
  }

  // vxlan_ids - computed: true, optional: false, required: false
  public get vxlanIds() {
    return this.getNumberListAttribute('vxlan_ids');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      device_id: cdktf.stringToTerraform(this._deviceId),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      port_id: cdktf.stringToTerraform(this._portId),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      port_id: {
        value: cdktf.stringToHclTerraform(this._portId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
