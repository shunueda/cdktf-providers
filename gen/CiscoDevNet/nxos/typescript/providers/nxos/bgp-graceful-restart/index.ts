// https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/bgp_graceful_restart
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BgpGracefulRestartConfig extends cdktf.TerraformMetaArguments {
  /**
  * Autonomous system number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/bgp_graceful_restart#asn BgpGracefulRestart#asn}
  */
  readonly asn: string;
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/bgp_graceful_restart#device BgpGracefulRestart#device}
  */
  readonly device?: string;
  /**
  * The graceful restart interval.
  *   - Range: `1`-`3600`
  *   - Default value: `120`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/bgp_graceful_restart#restart_interval BgpGracefulRestart#restart_interval}
  */
  readonly restartInterval?: number;
  /**
  * The stale interval for routes advertised by the BGP peer.
  *   - Range: `1`-`3600`
  *   - Default value: `300`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/bgp_graceful_restart#stale_interval BgpGracefulRestart#stale_interval}
  */
  readonly staleInterval?: number;
  /**
  * VRF name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/bgp_graceful_restart#vrf BgpGracefulRestart#vrf}
  */
  readonly vrf: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/bgp_graceful_restart nxos_bgp_graceful_restart}
*/
export class BgpGracefulRestart extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nxos_bgp_graceful_restart";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a BgpGracefulRestart resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BgpGracefulRestart to import
  * @param importFromId The id of the existing BgpGracefulRestart that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/bgp_graceful_restart#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BgpGracefulRestart to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nxos_bgp_graceful_restart", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/bgp_graceful_restart nxos_bgp_graceful_restart} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BgpGracefulRestartConfig
  */
  public constructor(scope: Construct, id: string, config: BgpGracefulRestartConfig) {
    super(scope, id, {
      terraformResourceType: 'nxos_bgp_graceful_restart',
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
    this._restartInterval = config.restartInterval;
    this._staleInterval = config.staleInterval;
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // restart_interval - computed: true, optional: true, required: false
  private _restartInterval?: number; 
  public get restartInterval() {
    return this.getNumberAttribute('restart_interval');
  }
  public set restartInterval(value: number) {
    this._restartInterval = value;
  }
  public resetRestartInterval() {
    this._restartInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restartIntervalInput() {
    return this._restartInterval;
  }

  // stale_interval - computed: true, optional: true, required: false
  private _staleInterval?: number; 
  public get staleInterval() {
    return this.getNumberAttribute('stale_interval');
  }
  public set staleInterval(value: number) {
    this._staleInterval = value;
  }
  public resetStaleInterval() {
    this._staleInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staleIntervalInput() {
    return this._staleInterval;
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
      restart_interval: cdktf.numberToTerraform(this._restartInterval),
      stale_interval: cdktf.numberToTerraform(this._staleInterval),
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
      restart_interval: {
        value: cdktf.numberToHclTerraform(this._restartInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      stale_interval: {
        value: cdktf.numberToHclTerraform(this._staleInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
