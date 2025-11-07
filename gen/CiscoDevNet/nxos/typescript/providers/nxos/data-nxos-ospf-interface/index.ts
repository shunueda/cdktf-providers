// https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/data-sources/ospf_interface
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataNxosOspfInterfaceConfig extends cdktf.TerraformMetaArguments {
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/data-sources/ospf_interface#device DataNxosOspfInterface#device}
  */
  readonly device?: string;
  /**
  * OSPF instance name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/data-sources/ospf_interface#instance_name DataNxosOspfInterface#instance_name}
  */
  readonly instanceName: string;
  /**
  * Must match first field in the output of `show intf brief`. Example: `eth1/1`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/data-sources/ospf_interface#interface_id DataNxosOspfInterface#interface_id}
  */
  readonly interfaceId: string;
  /**
  * VRF name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/data-sources/ospf_interface#vrf_name DataNxosOspfInterface#vrf_name}
  */
  readonly vrfName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/data-sources/ospf_interface nxos_ospf_interface}
*/
export class DataNxosOspfInterface extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nxos_ospf_interface";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataNxosOspfInterface resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataNxosOspfInterface to import
  * @param importFromId The id of the existing DataNxosOspfInterface that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/data-sources/ospf_interface#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataNxosOspfInterface to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nxos_ospf_interface", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/data-sources/ospf_interface nxos_ospf_interface} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataNxosOspfInterfaceConfig
  */
  public constructor(scope: Construct, id: string, config: DataNxosOspfInterfaceConfig) {
    super(scope, id, {
      terraformResourceType: 'nxos_ospf_interface',
      terraformGeneratorMetadata: {
        providerName: 'nxos',
        providerVersion: '0.5.10'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._device = config.device;
    this._instanceName = config.instanceName;
    this._interfaceId = config.interfaceId;
    this._vrfName = config.vrfName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // advertise_secondaries - computed: true, optional: false, required: false
  public get advertiseSecondaries() {
    return this.getBooleanAttribute('advertise_secondaries');
  }

  // area - computed: true, optional: false, required: false
  public get area() {
    return this.getStringAttribute('area');
  }

  // bfd - computed: true, optional: false, required: false
  public get bfd() {
    return this.getStringAttribute('bfd');
  }

  // cost - computed: true, optional: false, required: false
  public get cost() {
    return this.getNumberAttribute('cost');
  }

  // dead_interval - computed: true, optional: false, required: false
  public get deadInterval() {
    return this.getNumberAttribute('dead_interval');
  }

  // device - computed: false, optional: true, required: false
  private _device?: string; 
  public get device() {
    return this.getStringAttribute('device');
  }
  public set device(value: string) {
    this._device = value;
  }
  public resetDevice() {
    this._device = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceInput() {
    return this._device;
  }

  // hello_interval - computed: true, optional: false, required: false
  public get helloInterval() {
    return this.getNumberAttribute('hello_interval');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // instance_name - computed: false, optional: false, required: true
  private _instanceName?: string; 
  public get instanceName() {
    return this.getStringAttribute('instance_name');
  }
  public set instanceName(value: string) {
    this._instanceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceNameInput() {
    return this._instanceName;
  }

  // interface_id - computed: false, optional: false, required: true
  private _interfaceId?: string; 
  public get interfaceId() {
    return this.getStringAttribute('interface_id');
  }
  public set interfaceId(value: string) {
    this._interfaceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceIdInput() {
    return this._interfaceId;
  }

  // network_type - computed: true, optional: false, required: false
  public get networkType() {
    return this.getStringAttribute('network_type');
  }

  // passive - computed: true, optional: false, required: false
  public get passive() {
    return this.getStringAttribute('passive');
  }

  // priority - computed: true, optional: false, required: false
  public get priority() {
    return this.getNumberAttribute('priority');
  }

  // vrf_name - computed: false, optional: false, required: true
  private _vrfName?: string; 
  public get vrfName() {
    return this.getStringAttribute('vrf_name');
  }
  public set vrfName(value: string) {
    this._vrfName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vrfNameInput() {
    return this._vrfName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      device: cdktf.stringToTerraform(this._device),
      instance_name: cdktf.stringToTerraform(this._instanceName),
      interface_id: cdktf.stringToTerraform(this._interfaceId),
      vrf_name: cdktf.stringToTerraform(this._vrfName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      device: {
        value: cdktf.stringToHclTerraform(this._device),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      instance_name: {
        value: cdktf.stringToHclTerraform(this._instanceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      interface_id: {
        value: cdktf.stringToHclTerraform(this._interfaceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vrf_name: {
        value: cdktf.stringToHclTerraform(this._vrfName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
