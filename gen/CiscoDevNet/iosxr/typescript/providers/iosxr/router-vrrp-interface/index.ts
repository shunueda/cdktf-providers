// https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_vrrp_interface
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RouterVrrpInterfaceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Hello interval
  *   - Range: `3`-`30000`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_vrrp_interface#bfd_minimum_interval RouterVrrpInterface#bfd_minimum_interval}
  */
  readonly bfdMinimumInterval?: number;
  /**
  * Detect multiplier
  *   - Range: `2`-`50`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_vrrp_interface#bfd_multiplier RouterVrrpInterface#bfd_multiplier}
  */
  readonly bfdMultiplier?: number;
  /**
  * Set minimum delay on every interface up event
  *   - Range: `0`-`10000`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_vrrp_interface#delay_minimum RouterVrrpInterface#delay_minimum}
  */
  readonly delayMinimum?: number;
  /**
  * Set reload delay for first interface up event
  *   - Range: `0`-`10000`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_vrrp_interface#delay_reload RouterVrrpInterface#delay_reload}
  */
  readonly delayReload?: number;
  /**
  * Configure behavior when deleting/destroying the resource. Either delete the entire object (YANG container) being managed, or only delete the individual resource attributes configured explicitly and leave everything else as-is. Default value is `all`.
  *   - Choices: `all`, `attributes`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_vrrp_interface#delete_mode RouterVrrpInterface#delete_mode}
  */
  readonly deleteMode?: string;
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_vrrp_interface#device RouterVrrpInterface#device}
  */
  readonly device?: string;
  /**
  * VRRP interface configuration subcommands
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_vrrp_interface#interface_name RouterVrrpInterface#interface_name}
  */
  readonly interfaceName: string;
  /**
  * Set the Subordinate MAC-refresh rate for this interface
  *   - Range: `0`-`10000`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_vrrp_interface#mac_refresh RouterVrrpInterface#mac_refresh}
  */
  readonly macRefresh?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_vrrp_interface iosxr_router_vrrp_interface}
*/
export class RouterVrrpInterface extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "iosxr_router_vrrp_interface";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RouterVrrpInterface resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RouterVrrpInterface to import
  * @param importFromId The id of the existing RouterVrrpInterface that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_vrrp_interface#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RouterVrrpInterface to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "iosxr_router_vrrp_interface", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_vrrp_interface iosxr_router_vrrp_interface} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RouterVrrpInterfaceConfig
  */
  public constructor(scope: Construct, id: string, config: RouterVrrpInterfaceConfig) {
    super(scope, id, {
      terraformResourceType: 'iosxr_router_vrrp_interface',
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
    this._bfdMinimumInterval = config.bfdMinimumInterval;
    this._bfdMultiplier = config.bfdMultiplier;
    this._delayMinimum = config.delayMinimum;
    this._delayReload = config.delayReload;
    this._deleteMode = config.deleteMode;
    this._device = config.device;
    this._interfaceName = config.interfaceName;
    this._macRefresh = config.macRefresh;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bfd_minimum_interval - computed: false, optional: true, required: false
  private _bfdMinimumInterval?: number; 
  public get bfdMinimumInterval() {
    return this.getNumberAttribute('bfd_minimum_interval');
  }
  public set bfdMinimumInterval(value: number) {
    this._bfdMinimumInterval = value;
  }
  public resetBfdMinimumInterval() {
    this._bfdMinimumInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bfdMinimumIntervalInput() {
    return this._bfdMinimumInterval;
  }

  // bfd_multiplier - computed: false, optional: true, required: false
  private _bfdMultiplier?: number; 
  public get bfdMultiplier() {
    return this.getNumberAttribute('bfd_multiplier');
  }
  public set bfdMultiplier(value: number) {
    this._bfdMultiplier = value;
  }
  public resetBfdMultiplier() {
    this._bfdMultiplier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bfdMultiplierInput() {
    return this._bfdMultiplier;
  }

  // delay_minimum - computed: false, optional: true, required: false
  private _delayMinimum?: number; 
  public get delayMinimum() {
    return this.getNumberAttribute('delay_minimum');
  }
  public set delayMinimum(value: number) {
    this._delayMinimum = value;
  }
  public resetDelayMinimum() {
    this._delayMinimum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delayMinimumInput() {
    return this._delayMinimum;
  }

  // delay_reload - computed: false, optional: true, required: false
  private _delayReload?: number; 
  public get delayReload() {
    return this.getNumberAttribute('delay_reload');
  }
  public set delayReload(value: number) {
    this._delayReload = value;
  }
  public resetDelayReload() {
    this._delayReload = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delayReloadInput() {
    return this._delayReload;
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

  // interface_name - computed: false, optional: false, required: true
  private _interfaceName?: string; 
  public get interfaceName() {
    return this.getStringAttribute('interface_name');
  }
  public set interfaceName(value: string) {
    this._interfaceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceNameInput() {
    return this._interfaceName;
  }

  // mac_refresh - computed: false, optional: true, required: false
  private _macRefresh?: number; 
  public get macRefresh() {
    return this.getNumberAttribute('mac_refresh');
  }
  public set macRefresh(value: number) {
    this._macRefresh = value;
  }
  public resetMacRefresh() {
    this._macRefresh = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macRefreshInput() {
    return this._macRefresh;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bfd_minimum_interval: cdktf.numberToTerraform(this._bfdMinimumInterval),
      bfd_multiplier: cdktf.numberToTerraform(this._bfdMultiplier),
      delay_minimum: cdktf.numberToTerraform(this._delayMinimum),
      delay_reload: cdktf.numberToTerraform(this._delayReload),
      delete_mode: cdktf.stringToTerraform(this._deleteMode),
      device: cdktf.stringToTerraform(this._device),
      interface_name: cdktf.stringToTerraform(this._interfaceName),
      mac_refresh: cdktf.numberToTerraform(this._macRefresh),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      bfd_minimum_interval: {
        value: cdktf.numberToHclTerraform(this._bfdMinimumInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      bfd_multiplier: {
        value: cdktf.numberToHclTerraform(this._bfdMultiplier),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      delay_minimum: {
        value: cdktf.numberToHclTerraform(this._delayMinimum),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      delay_reload: {
        value: cdktf.numberToHclTerraform(this._delayReload),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
      interface_name: {
        value: cdktf.stringToHclTerraform(this._interfaceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mac_refresh: {
        value: cdktf.numberToHclTerraform(this._macRefresh),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
