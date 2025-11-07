// https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/evpn_vni_route_target
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EvpnVniRouteTargetConfig extends cdktf.TerraformMetaArguments {
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/evpn_vni_route_target#device EvpnVniRouteTarget#device}
  */
  readonly device?: string;
  /**
  * Route Target direction.
  *   - Choices: `import`, `export`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/evpn_vni_route_target#direction EvpnVniRouteTarget#direction}
  */
  readonly direction: string;
  /**
  * Encapsulation. Possible values are `unknown`, `vlan-XX` or `vxlan-XX`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/evpn_vni_route_target#encap EvpnVniRouteTarget#encap}
  */
  readonly encap: string;
  /**
  * Route Target in NX-OS DME format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/evpn_vni_route_target#route_target EvpnVniRouteTarget#route_target}
  */
  readonly routeTarget: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/evpn_vni_route_target nxos_evpn_vni_route_target}
*/
export class EvpnVniRouteTarget extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nxos_evpn_vni_route_target";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a EvpnVniRouteTarget resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EvpnVniRouteTarget to import
  * @param importFromId The id of the existing EvpnVniRouteTarget that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/evpn_vni_route_target#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EvpnVniRouteTarget to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nxos_evpn_vni_route_target", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/evpn_vni_route_target nxos_evpn_vni_route_target} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EvpnVniRouteTargetConfig
  */
  public constructor(scope: Construct, id: string, config: EvpnVniRouteTargetConfig) {
    super(scope, id, {
      terraformResourceType: 'nxos_evpn_vni_route_target',
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
    this._direction = config.direction;
    this._encap = config.encap;
    this._routeTarget = config.routeTarget;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // encap - computed: false, optional: false, required: true
  private _encap?: string; 
  public get encap() {
    return this.getStringAttribute('encap');
  }
  public set encap(value: string) {
    this._encap = value;
  }
  // Temporarily expose input value. Use with caution.
  public get encapInput() {
    return this._encap;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // route_target - computed: false, optional: false, required: true
  private _routeTarget?: string; 
  public get routeTarget() {
    return this.getStringAttribute('route_target');
  }
  public set routeTarget(value: string) {
    this._routeTarget = value;
  }
  // Temporarily expose input value. Use with caution.
  public get routeTargetInput() {
    return this._routeTarget;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      device: cdktf.stringToTerraform(this._device),
      direction: cdktf.stringToTerraform(this._direction),
      encap: cdktf.stringToTerraform(this._encap),
      route_target: cdktf.stringToTerraform(this._routeTarget),
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
      direction: {
        value: cdktf.stringToHclTerraform(this._direction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      encap: {
        value: cdktf.stringToHclTerraform(this._encap),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      route_target: {
        value: cdktf.stringToHclTerraform(this._routeTarget),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
