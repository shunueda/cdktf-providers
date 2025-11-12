// https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/data-sources/ospfv3_vrf_address_family
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataNxosOspfv3VrfAddressFamilyConfig extends cdktf.TerraformMetaArguments {
  /**
  * IPv6 unicast address family type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/data-sources/ospfv3_vrf_address_family#address_family_type DataNxosOspfv3VrfAddressFamily#address_family_type}
  */
  readonly addressFamilyType: string;
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/data-sources/ospfv3_vrf_address_family#device DataNxosOspfv3VrfAddressFamily#device}
  */
  readonly device?: string;
  /**
  * OSPFv3 instance name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/data-sources/ospfv3_vrf_address_family#instance_name DataNxosOspfv3VrfAddressFamily#instance_name}
  */
  readonly instanceName: string;
  /**
  * VRF name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/data-sources/ospfv3_vrf_address_family#vrf_name DataNxosOspfv3VrfAddressFamily#vrf_name}
  */
  readonly vrfName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/data-sources/ospfv3_vrf_address_family nxos_ospfv3_vrf_address_family}
*/
export class DataNxosOspfv3VrfAddressFamily extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nxos_ospfv3_vrf_address_family";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataNxosOspfv3VrfAddressFamily resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataNxosOspfv3VrfAddressFamily to import
  * @param importFromId The id of the existing DataNxosOspfv3VrfAddressFamily that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/data-sources/ospfv3_vrf_address_family#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataNxosOspfv3VrfAddressFamily to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nxos_ospfv3_vrf_address_family", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/data-sources/ospfv3_vrf_address_family nxos_ospfv3_vrf_address_family} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataNxosOspfv3VrfAddressFamilyConfig
  */
  public constructor(scope: Construct, id: string, config: DataNxosOspfv3VrfAddressFamilyConfig) {
    super(scope, id, {
      terraformResourceType: 'nxos_ospfv3_vrf_address_family',
      terraformGeneratorMetadata: {
        providerName: 'nxos',
        providerVersion: '0.5.10',
        providerVersionConstraint: '0.5.10'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._addressFamilyType = config.addressFamilyType;
    this._device = config.device;
    this._instanceName = config.instanceName;
    this._vrfName = config.vrfName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // address_family_type - computed: false, optional: false, required: true
  private _addressFamilyType?: string; 
  public get addressFamilyType() {
    return this.getStringAttribute('address_family_type');
  }
  public set addressFamilyType(value: string) {
    this._addressFamilyType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addressFamilyTypeInput() {
    return this._addressFamilyType;
  }

  // administrative_distance - computed: true, optional: false, required: false
  public get administrativeDistance() {
    return this.getStringAttribute('administrative_distance');
  }

  // default_metric - computed: true, optional: false, required: false
  public get defaultMetric() {
    return this.getStringAttribute('default_metric');
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

  // max_ecmp_cost - computed: true, optional: false, required: false
  public get maxEcmpCost() {
    return this.getNumberAttribute('max_ecmp_cost');
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
      address_family_type: cdktf.stringToTerraform(this._addressFamilyType),
      device: cdktf.stringToTerraform(this._device),
      instance_name: cdktf.stringToTerraform(this._instanceName),
      vrf_name: cdktf.stringToTerraform(this._vrfName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      address_family_type: {
        value: cdktf.stringToHclTerraform(this._addressFamilyType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
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
