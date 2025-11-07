// https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/vrf_route_target_direction
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VrfRouteTargetDirectionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Address family.
  *   - Choices: `ipv4-ucast`, `ipv6-ucast`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/vrf_route_target_direction#address_family VrfRouteTargetDirection#address_family}
  */
  readonly addressFamily: string;
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/vrf_route_target_direction#device VrfRouteTargetDirection#device}
  */
  readonly device?: string;
  /**
  * Route Target direction.
  *   - Choices: `import`, `export`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/vrf_route_target_direction#direction VrfRouteTargetDirection#direction}
  */
  readonly direction: string;
  /**
  * Route Target Address Family.
  *   - Choices: `ipv4-ucast`, `ipv6-ucast`, `l2vpn-evpn`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/vrf_route_target_direction#route_target_address_family VrfRouteTargetDirection#route_target_address_family}
  */
  readonly routeTargetAddressFamily: string;
  /**
  * VRF name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/vrf_route_target_direction#vrf VrfRouteTargetDirection#vrf}
  */
  readonly vrf: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/vrf_route_target_direction nxos_vrf_route_target_direction}
*/
export class VrfRouteTargetDirection extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nxos_vrf_route_target_direction";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VrfRouteTargetDirection resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VrfRouteTargetDirection to import
  * @param importFromId The id of the existing VrfRouteTargetDirection that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/vrf_route_target_direction#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VrfRouteTargetDirection to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nxos_vrf_route_target_direction", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/vrf_route_target_direction nxos_vrf_route_target_direction} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VrfRouteTargetDirectionConfig
  */
  public constructor(scope: Construct, id: string, config: VrfRouteTargetDirectionConfig) {
    super(scope, id, {
      terraformResourceType: 'nxos_vrf_route_target_direction',
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
    this._addressFamily = config.addressFamily;
    this._device = config.device;
    this._direction = config.direction;
    this._routeTargetAddressFamily = config.routeTargetAddressFamily;
    this._vrf = config.vrf;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // address_family - computed: false, optional: false, required: true
  private _addressFamily?: string; 
  public get addressFamily() {
    return this.getStringAttribute('address_family');
  }
  public set addressFamily(value: string) {
    this._addressFamily = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addressFamilyInput() {
    return this._addressFamily;
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

  // direction - computed: false, optional: false, required: true
  private _direction?: string; 
  public get direction() {
    return this.getStringAttribute('direction');
  }
  public set direction(value: string) {
    this._direction = value;
  }
  // Temporarily expose input value. Use with caution.
  public get directionInput() {
    return this._direction;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // route_target_address_family - computed: false, optional: false, required: true
  private _routeTargetAddressFamily?: string; 
  public get routeTargetAddressFamily() {
    return this.getStringAttribute('route_target_address_family');
  }
  public set routeTargetAddressFamily(value: string) {
    this._routeTargetAddressFamily = value;
  }
  // Temporarily expose input value. Use with caution.
  public get routeTargetAddressFamilyInput() {
    return this._routeTargetAddressFamily;
  }

  // vrf - computed: false, optional: false, required: true
  private _vrf?: string; 
  public get vrf() {
    return this.getStringAttribute('vrf');
  }
  public set vrf(value: string) {
    this._vrf = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vrfInput() {
    return this._vrf;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      address_family: cdktf.stringToTerraform(this._addressFamily),
      device: cdktf.stringToTerraform(this._device),
      direction: cdktf.stringToTerraform(this._direction),
      route_target_address_family: cdktf.stringToTerraform(this._routeTargetAddressFamily),
      vrf: cdktf.stringToTerraform(this._vrf),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      address_family: {
        value: cdktf.stringToHclTerraform(this._addressFamily),
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
      direction: {
        value: cdktf.stringToHclTerraform(this._direction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      route_target_address_family: {
        value: cdktf.stringToHclTerraform(this._routeTargetAddressFamily),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vrf: {
        value: cdktf.stringToHclTerraform(this._vrf),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
