// https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/bgp
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BgpConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/bgp#asn Bgp#asn}
  */
  readonly asn: string;
  /**
  * Graceful restart capability parameters
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/bgp#bgp_graceful_restart Bgp#bgp_graceful_restart}
  */
  readonly bgpGracefulRestart?: boolean | cdktf.IResolvable;
  /**
  * Set the max initial delay for sending update
  *   - Range: `1`-`3600`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/bgp#bgp_update_delay Bgp#bgp_update_delay}
  */
  readonly bgpUpdateDelay?: number;
  /**
  * Activate ipv4-unicast for a peer by default
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/bgp#default_ipv4_unicast Bgp#default_ipv4_unicast}
  */
  readonly defaultIpv4Unicast?: boolean | cdktf.IResolvable;
  /**
  * Configure behavior when deleting/destroying the resource. Either delete the entire object (YANG container) being managed, or only delete the individual resource attributes configured explicitly and leave everything else as-is. Default value is `all`.
  *   - Choices: `all`, `attributes`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/bgp#delete_mode Bgp#delete_mode}
  */
  readonly deleteMode?: string;
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/bgp#device Bgp#device}
  */
  readonly device?: string;
  /**
  * Log neighbor up/down and reset reason
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/bgp#log_neighbor_changes Bgp#log_neighbor_changes}
  */
  readonly logNeighborChanges?: boolean | cdktf.IResolvable;
  /**
  * Manually configured router identifier
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/bgp#router_id_ip Bgp#router_id_ip}
  */
  readonly routerIdIp?: string;
  /**
  * Loopback interface
  *   - Range: `0`-`2147483647`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/bgp#router_id_loopback Bgp#router_id_loopback}
  */
  readonly routerIdLoopback?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/bgp iosxe_bgp}
*/
export class Bgp extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "iosxe_bgp";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Bgp resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Bgp to import
  * @param importFromId The id of the existing Bgp that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/bgp#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Bgp to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "iosxe_bgp", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/bgp iosxe_bgp} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BgpConfig
  */
  public constructor(scope: Construct, id: string, config: BgpConfig) {
    super(scope, id, {
      terraformResourceType: 'iosxe_bgp',
      terraformGeneratorMetadata: {
        providerName: 'iosxe',
        providerVersion: '0.14.4',
        providerVersionConstraint: '0.14.4'
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
    this._bgpGracefulRestart = config.bgpGracefulRestart;
    this._bgpUpdateDelay = config.bgpUpdateDelay;
    this._defaultIpv4Unicast = config.defaultIpv4Unicast;
    this._deleteMode = config.deleteMode;
    this._device = config.device;
    this._logNeighborChanges = config.logNeighborChanges;
    this._routerIdIp = config.routerIdIp;
    this._routerIdLoopback = config.routerIdLoopback;
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

  // bgp_graceful_restart - computed: false, optional: true, required: false
  private _bgpGracefulRestart?: boolean | cdktf.IResolvable; 
  public get bgpGracefulRestart() {
    return this.getBooleanAttribute('bgp_graceful_restart');
  }
  public set bgpGracefulRestart(value: boolean | cdktf.IResolvable) {
    this._bgpGracefulRestart = value;
  }
  public resetBgpGracefulRestart() {
    this._bgpGracefulRestart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpGracefulRestartInput() {
    return this._bgpGracefulRestart;
  }

  // bgp_update_delay - computed: false, optional: true, required: false
  private _bgpUpdateDelay?: number; 
  public get bgpUpdateDelay() {
    return this.getNumberAttribute('bgp_update_delay');
  }
  public set bgpUpdateDelay(value: number) {
    this._bgpUpdateDelay = value;
  }
  public resetBgpUpdateDelay() {
    this._bgpUpdateDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpUpdateDelayInput() {
    return this._bgpUpdateDelay;
  }

  // default_ipv4_unicast - computed: false, optional: true, required: false
  private _defaultIpv4Unicast?: boolean | cdktf.IResolvable; 
  public get defaultIpv4Unicast() {
    return this.getBooleanAttribute('default_ipv4_unicast');
  }
  public set defaultIpv4Unicast(value: boolean | cdktf.IResolvable) {
    this._defaultIpv4Unicast = value;
  }
  public resetDefaultIpv4Unicast() {
    this._defaultIpv4Unicast = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultIpv4UnicastInput() {
    return this._defaultIpv4Unicast;
  }

  // delete_mode - computed: false, optional: true, required: false
  private _deleteMode?: string; 
  public get deleteMode() {
    return this.getStringAttribute('delete_mode');
  }
  public set deleteMode(value: string) {
    this._deleteMode = value;
  }
  public resetDeleteMode() {
    this._deleteMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteModeInput() {
    return this._deleteMode;
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

  // log_neighbor_changes - computed: false, optional: true, required: false
  private _logNeighborChanges?: boolean | cdktf.IResolvable; 
  public get logNeighborChanges() {
    return this.getBooleanAttribute('log_neighbor_changes');
  }
  public set logNeighborChanges(value: boolean | cdktf.IResolvable) {
    this._logNeighborChanges = value;
  }
  public resetLogNeighborChanges() {
    this._logNeighborChanges = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logNeighborChangesInput() {
    return this._logNeighborChanges;
  }

  // router_id_ip - computed: false, optional: true, required: false
  private _routerIdIp?: string; 
  public get routerIdIp() {
    return this.getStringAttribute('router_id_ip');
  }
  public set routerIdIp(value: string) {
    this._routerIdIp = value;
  }
  public resetRouterIdIp() {
    this._routerIdIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routerIdIpInput() {
    return this._routerIdIp;
  }

  // router_id_loopback - computed: false, optional: true, required: false
  private _routerIdLoopback?: number; 
  public get routerIdLoopback() {
    return this.getNumberAttribute('router_id_loopback');
  }
  public set routerIdLoopback(value: number) {
    this._routerIdLoopback = value;
  }
  public resetRouterIdLoopback() {
    this._routerIdLoopback = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routerIdLoopbackInput() {
    return this._routerIdLoopback;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      asn: cdktf.stringToTerraform(this._asn),
      bgp_graceful_restart: cdktf.booleanToTerraform(this._bgpGracefulRestart),
      bgp_update_delay: cdktf.numberToTerraform(this._bgpUpdateDelay),
      default_ipv4_unicast: cdktf.booleanToTerraform(this._defaultIpv4Unicast),
      delete_mode: cdktf.stringToTerraform(this._deleteMode),
      device: cdktf.stringToTerraform(this._device),
      log_neighbor_changes: cdktf.booleanToTerraform(this._logNeighborChanges),
      router_id_ip: cdktf.stringToTerraform(this._routerIdIp),
      router_id_loopback: cdktf.numberToTerraform(this._routerIdLoopback),
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
      bgp_graceful_restart: {
        value: cdktf.booleanToHclTerraform(this._bgpGracefulRestart),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      bgp_update_delay: {
        value: cdktf.numberToHclTerraform(this._bgpUpdateDelay),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      default_ipv4_unicast: {
        value: cdktf.booleanToHclTerraform(this._defaultIpv4Unicast),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      delete_mode: {
        value: cdktf.stringToHclTerraform(this._deleteMode),
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
      log_neighbor_changes: {
        value: cdktf.booleanToHclTerraform(this._logNeighborChanges),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      router_id_ip: {
        value: cdktf.stringToHclTerraform(this._routerIdIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      router_id_loopback: {
        value: cdktf.numberToHclTerraform(this._routerIdLoopback),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
