// https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/bgp_route_control
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BgpRouteControlConfig extends cdktf.TerraformMetaArguments {
  /**
  * Autonomous system number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/bgp_route_control#asn BgpRouteControl#asn}
  */
  readonly asn: string;
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/bgp_route_control#device BgpRouteControl#device}
  */
  readonly device?: string;
  /**
  * Enforce First AS For Ebgp. Can be configured only for VRF default.
  *   - Choices: `enabled`, `disabled`
  *   - Default value: `enabled`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/bgp_route_control#enforce_first_as BgpRouteControl#enforce_first_as}
  */
  readonly enforceFirstAs?: string;
  /**
  * Accelerate the hardware updates for IP/IPv6 adjacencies for neighbor. Can be configured only for VRF default.
  *   - Choices: `enabled`, `disabled`
  *   - Default value: `disabled`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/bgp_route_control#fib_accelerate BgpRouteControl#fib_accelerate}
  */
  readonly fibAccelerate?: string;
  /**
  * Log Neighbor Changes.
  *   - Choices: `enabled`, `disabled`
  *   - Default value: `disabled`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/bgp_route_control#log_neighbor_changes BgpRouteControl#log_neighbor_changes}
  */
  readonly logNeighborChanges?: string;
  /**
  * Suppress Routes: Advertise only routes that are programmed in hardware to peers. Can be configured only for VRF default.
  *   - Choices: `enabled`, `disabled`
  *   - Default value: `enabled`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/bgp_route_control#suppress_routes BgpRouteControl#suppress_routes}
  */
  readonly suppressRoutes?: string;
  /**
  * VRF name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/bgp_route_control#vrf BgpRouteControl#vrf}
  */
  readonly vrf: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/bgp_route_control nxos_bgp_route_control}
*/
export class BgpRouteControl extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nxos_bgp_route_control";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a BgpRouteControl resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BgpRouteControl to import
  * @param importFromId The id of the existing BgpRouteControl that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/bgp_route_control#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BgpRouteControl to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nxos_bgp_route_control", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/bgp_route_control nxos_bgp_route_control} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BgpRouteControlConfig
  */
  public constructor(scope: Construct, id: string, config: BgpRouteControlConfig) {
    super(scope, id, {
      terraformResourceType: 'nxos_bgp_route_control',
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
    this._asn = config.asn;
    this._device = config.device;
    this._enforceFirstAs = config.enforceFirstAs;
    this._fibAccelerate = config.fibAccelerate;
    this._logNeighborChanges = config.logNeighborChanges;
    this._suppressRoutes = config.suppressRoutes;
    this._vrf = config.vrf;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // asn - computed: false, optional: false, required: true
  private _asn?: string; 
  public get asn() {
    return this.getStringAttribute('asn');
  }
  public set asn(value: string) {
    this._asn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get asnInput() {
    return this._asn;
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

  // enforce_first_as - computed: true, optional: true, required: false
  private _enforceFirstAs?: string; 
  public get enforceFirstAs() {
    return this.getStringAttribute('enforce_first_as');
  }
  public set enforceFirstAs(value: string) {
    this._enforceFirstAs = value;
  }
  public resetEnforceFirstAs() {
    this._enforceFirstAs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enforceFirstAsInput() {
    return this._enforceFirstAs;
  }

  // fib_accelerate - computed: true, optional: true, required: false
  private _fibAccelerate?: string; 
  public get fibAccelerate() {
    return this.getStringAttribute('fib_accelerate');
  }
  public set fibAccelerate(value: string) {
    this._fibAccelerate = value;
  }
  public resetFibAccelerate() {
    this._fibAccelerate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fibAccelerateInput() {
    return this._fibAccelerate;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // log_neighbor_changes - computed: true, optional: true, required: false
  private _logNeighborChanges?: string; 
  public get logNeighborChanges() {
    return this.getStringAttribute('log_neighbor_changes');
  }
  public set logNeighborChanges(value: string) {
    this._logNeighborChanges = value;
  }
  public resetLogNeighborChanges() {
    this._logNeighborChanges = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logNeighborChangesInput() {
    return this._logNeighborChanges;
  }

  // suppress_routes - computed: true, optional: true, required: false
  private _suppressRoutes?: string; 
  public get suppressRoutes() {
    return this.getStringAttribute('suppress_routes');
  }
  public set suppressRoutes(value: string) {
    this._suppressRoutes = value;
  }
  public resetSuppressRoutes() {
    this._suppressRoutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suppressRoutesInput() {
    return this._suppressRoutes;
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
      asn: cdktf.stringToTerraform(this._asn),
      device: cdktf.stringToTerraform(this._device),
      enforce_first_as: cdktf.stringToTerraform(this._enforceFirstAs),
      fib_accelerate: cdktf.stringToTerraform(this._fibAccelerate),
      log_neighbor_changes: cdktf.stringToTerraform(this._logNeighborChanges),
      suppress_routes: cdktf.stringToTerraform(this._suppressRoutes),
      vrf: cdktf.stringToTerraform(this._vrf),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      asn: {
        value: cdktf.stringToHclTerraform(this._asn),
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
      enforce_first_as: {
        value: cdktf.stringToHclTerraform(this._enforceFirstAs),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fib_accelerate: {
        value: cdktf.stringToHclTerraform(this._fibAccelerate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_neighbor_changes: {
        value: cdktf.stringToHclTerraform(this._logNeighborChanges),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      suppress_routes: {
        value: cdktf.stringToHclTerraform(this._suppressRoutes),
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
