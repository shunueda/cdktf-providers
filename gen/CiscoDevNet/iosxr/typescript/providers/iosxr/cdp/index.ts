// https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/cdp
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CdpConfig extends cdktf.TerraformMetaArguments {
  /**
  * CDP sends version-1 advertisements only
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/cdp#advertise_v1 Cdp#advertise_v1}
  */
  readonly advertiseV1?: boolean | cdktf.IResolvable;
  /**
  * Configure behavior when deleting/destroying the resource. Either delete the entire object (YANG container) being managed, or only delete the individual resource attributes configured explicitly and leave everything else as-is. Default value is `all`.
  *   - Choices: `all`, `attributes`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/cdp#delete_mode Cdp#delete_mode}
  */
  readonly deleteMode?: string;
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/cdp#device Cdp#device}
  */
  readonly device?: string;
  /**
  * Enable CDP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/cdp#enable Cdp#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * Specify the holdtime (in sec) to be sent in packets
  *   - Range: `10`-`255`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/cdp#holdtime Cdp#holdtime}
  */
  readonly holdtime?: number;
  /**
  * Configure CDP to log changes to adjacency table
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/cdp#log_adjacency_changes Cdp#log_adjacency_changes}
  */
  readonly logAdjacencyChanges?: boolean | cdktf.IResolvable;
  /**
  * Specify the rate at which CDP packets are sent (in sec)
  *   - Range: `5`-`254`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/cdp#timer Cdp#timer}
  */
  readonly timer?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/cdp iosxr_cdp}
*/
export class Cdp extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "iosxr_cdp";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Cdp resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Cdp to import
  * @param importFromId The id of the existing Cdp that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/cdp#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Cdp to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "iosxr_cdp", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/cdp iosxr_cdp} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CdpConfig = {}
  */
  public constructor(scope: Construct, id: string, config: CdpConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'iosxr_cdp',
      terraformGeneratorMetadata: {
        providerName: 'iosxr',
        providerVersion: '0.6.0',
        providerVersionConstraint: '0.6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._advertiseV1 = config.advertiseV1;
    this._deleteMode = config.deleteMode;
    this._device = config.device;
    this._enable = config.enable;
    this._holdtime = config.holdtime;
    this._logAdjacencyChanges = config.logAdjacencyChanges;
    this._timer = config.timer;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // advertise_v1 - computed: false, optional: true, required: false
  private _advertiseV1?: boolean | cdktf.IResolvable; 
  public get advertiseV1() {
    return this.getBooleanAttribute('advertise_v1');
  }
  public set advertiseV1(value: boolean | cdktf.IResolvable) {
    this._advertiseV1 = value;
  }
  public resetAdvertiseV1() {
    this._advertiseV1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advertiseV1Input() {
    return this._advertiseV1;
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

  // enable - computed: false, optional: true, required: false
  private _enable?: boolean | cdktf.IResolvable; 
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
  public set enable(value: boolean | cdktf.IResolvable) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }

  // holdtime - computed: false, optional: true, required: false
  private _holdtime?: number; 
  public get holdtime() {
    return this.getNumberAttribute('holdtime');
  }
  public set holdtime(value: number) {
    this._holdtime = value;
  }
  public resetHoldtime() {
    this._holdtime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get holdtimeInput() {
    return this._holdtime;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // log_adjacency_changes - computed: false, optional: true, required: false
  private _logAdjacencyChanges?: boolean | cdktf.IResolvable; 
  public get logAdjacencyChanges() {
    return this.getBooleanAttribute('log_adjacency_changes');
  }
  public set logAdjacencyChanges(value: boolean | cdktf.IResolvable) {
    this._logAdjacencyChanges = value;
  }
  public resetLogAdjacencyChanges() {
    this._logAdjacencyChanges = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logAdjacencyChangesInput() {
    return this._logAdjacencyChanges;
  }

  // timer - computed: false, optional: true, required: false
  private _timer?: number; 
  public get timer() {
    return this.getNumberAttribute('timer');
  }
  public set timer(value: number) {
    this._timer = value;
  }
  public resetTimer() {
    this._timer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timerInput() {
    return this._timer;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      advertise_v1: cdktf.booleanToTerraform(this._advertiseV1),
      delete_mode: cdktf.stringToTerraform(this._deleteMode),
      device: cdktf.stringToTerraform(this._device),
      enable: cdktf.booleanToTerraform(this._enable),
      holdtime: cdktf.numberToTerraform(this._holdtime),
      log_adjacency_changes: cdktf.booleanToTerraform(this._logAdjacencyChanges),
      timer: cdktf.numberToTerraform(this._timer),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      advertise_v1: {
        value: cdktf.booleanToHclTerraform(this._advertiseV1),
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
      enable: {
        value: cdktf.booleanToHclTerraform(this._enable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      holdtime: {
        value: cdktf.numberToHclTerraform(this._holdtime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      log_adjacency_changes: {
        value: cdktf.booleanToHclTerraform(this._logAdjacencyChanges),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      timer: {
        value: cdktf.numberToHclTerraform(this._timer),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
