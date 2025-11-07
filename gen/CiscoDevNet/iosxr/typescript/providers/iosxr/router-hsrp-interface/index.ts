// https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_hsrp_interface
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RouterHsrpInterfaceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Configure behavior when deleting/destroying the resource. Either delete the entire object (YANG container) being managed, or only delete the individual resource attributes configured explicitly and leave everything else as-is. Default value is `all`.
  *   - Choices: `all`, `attributes`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_hsrp_interface#delete_mode RouterHsrpInterface#delete_mode}
  */
  readonly deleteMode?: string;
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_hsrp_interface#device RouterHsrpInterface#device}
  */
  readonly device?: string;
  /**
  * Hello interval
  *   - Range: `3`-`30000`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_hsrp_interface#hsrp_bfd_minimum_interval RouterHsrpInterface#hsrp_bfd_minimum_interval}
  */
  readonly hsrpBfdMinimumInterval?: number;
  /**
  * Detect multiplier
  *   - Range: `2`-`50`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_hsrp_interface#hsrp_bfd_multiplier RouterHsrpInterface#hsrp_bfd_multiplier}
  */
  readonly hsrpBfdMultiplier?: number;
  /**
  * Set minimum delay on every interface up event
  *   - Range: `0`-`10000`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_hsrp_interface#hsrp_delay_minimum RouterHsrpInterface#hsrp_delay_minimum}
  */
  readonly hsrpDelayMinimum?: number;
  /**
  * Set reload delay for first interface up event
  *   - Range: `0`-`10000`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_hsrp_interface#hsrp_delay_reload RouterHsrpInterface#hsrp_delay_reload}
  */
  readonly hsrpDelayReload?: number;
  /**
  * HSRP MGO subordinate MAC refresh rate
  *   - Range: `0`-`10000`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_hsrp_interface#hsrp_mac_refresh RouterHsrpInterface#hsrp_mac_refresh}
  */
  readonly hsrpMacRefresh?: number;
  /**
  * Disable HSRP filtered ICMP redirects
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_hsrp_interface#hsrp_redirects_disable RouterHsrpInterface#hsrp_redirects_disable}
  */
  readonly hsrpRedirectsDisable?: boolean | cdktf.IResolvable;
  /**
  * Use burned-in address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_hsrp_interface#hsrp_use_bia RouterHsrpInterface#hsrp_use_bia}
  */
  readonly hsrpUseBia?: boolean | cdktf.IResolvable;
  /**
  * HSRP interface configuration subcommands
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_hsrp_interface#interface_name RouterHsrpInterface#interface_name}
  */
  readonly interfaceName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_hsrp_interface iosxr_router_hsrp_interface}
*/
export class RouterHsrpInterface extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "iosxr_router_hsrp_interface";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RouterHsrpInterface resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RouterHsrpInterface to import
  * @param importFromId The id of the existing RouterHsrpInterface that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_hsrp_interface#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RouterHsrpInterface to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "iosxr_router_hsrp_interface", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_hsrp_interface iosxr_router_hsrp_interface} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RouterHsrpInterfaceConfig
  */
  public constructor(scope: Construct, id: string, config: RouterHsrpInterfaceConfig) {
    super(scope, id, {
      terraformResourceType: 'iosxr_router_hsrp_interface',
      terraformGeneratorMetadata: {
        providerName: 'iosxr',
        providerVersion: '0.6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._deleteMode = config.deleteMode;
    this._device = config.device;
    this._hsrpBfdMinimumInterval = config.hsrpBfdMinimumInterval;
    this._hsrpBfdMultiplier = config.hsrpBfdMultiplier;
    this._hsrpDelayMinimum = config.hsrpDelayMinimum;
    this._hsrpDelayReload = config.hsrpDelayReload;
    this._hsrpMacRefresh = config.hsrpMacRefresh;
    this._hsrpRedirectsDisable = config.hsrpRedirectsDisable;
    this._hsrpUseBia = config.hsrpUseBia;
    this._interfaceName = config.interfaceName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // hsrp_bfd_minimum_interval - computed: false, optional: true, required: false
  private _hsrpBfdMinimumInterval?: number; 
  public get hsrpBfdMinimumInterval() {
    return this.getNumberAttribute('hsrp_bfd_minimum_interval');
  }
  public set hsrpBfdMinimumInterval(value: number) {
    this._hsrpBfdMinimumInterval = value;
  }
  public resetHsrpBfdMinimumInterval() {
    this._hsrpBfdMinimumInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hsrpBfdMinimumIntervalInput() {
    return this._hsrpBfdMinimumInterval;
  }

  // hsrp_bfd_multiplier - computed: false, optional: true, required: false
  private _hsrpBfdMultiplier?: number; 
  public get hsrpBfdMultiplier() {
    return this.getNumberAttribute('hsrp_bfd_multiplier');
  }
  public set hsrpBfdMultiplier(value: number) {
    this._hsrpBfdMultiplier = value;
  }
  public resetHsrpBfdMultiplier() {
    this._hsrpBfdMultiplier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hsrpBfdMultiplierInput() {
    return this._hsrpBfdMultiplier;
  }

  // hsrp_delay_minimum - computed: false, optional: true, required: false
  private _hsrpDelayMinimum?: number; 
  public get hsrpDelayMinimum() {
    return this.getNumberAttribute('hsrp_delay_minimum');
  }
  public set hsrpDelayMinimum(value: number) {
    this._hsrpDelayMinimum = value;
  }
  public resetHsrpDelayMinimum() {
    this._hsrpDelayMinimum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hsrpDelayMinimumInput() {
    return this._hsrpDelayMinimum;
  }

  // hsrp_delay_reload - computed: false, optional: true, required: false
  private _hsrpDelayReload?: number; 
  public get hsrpDelayReload() {
    return this.getNumberAttribute('hsrp_delay_reload');
  }
  public set hsrpDelayReload(value: number) {
    this._hsrpDelayReload = value;
  }
  public resetHsrpDelayReload() {
    this._hsrpDelayReload = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hsrpDelayReloadInput() {
    return this._hsrpDelayReload;
  }

  // hsrp_mac_refresh - computed: false, optional: true, required: false
  private _hsrpMacRefresh?: number; 
  public get hsrpMacRefresh() {
    return this.getNumberAttribute('hsrp_mac_refresh');
  }
  public set hsrpMacRefresh(value: number) {
    this._hsrpMacRefresh = value;
  }
  public resetHsrpMacRefresh() {
    this._hsrpMacRefresh = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hsrpMacRefreshInput() {
    return this._hsrpMacRefresh;
  }

  // hsrp_redirects_disable - computed: false, optional: true, required: false
  private _hsrpRedirectsDisable?: boolean | cdktf.IResolvable; 
  public get hsrpRedirectsDisable() {
    return this.getBooleanAttribute('hsrp_redirects_disable');
  }
  public set hsrpRedirectsDisable(value: boolean | cdktf.IResolvable) {
    this._hsrpRedirectsDisable = value;
  }
  public resetHsrpRedirectsDisable() {
    this._hsrpRedirectsDisable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hsrpRedirectsDisableInput() {
    return this._hsrpRedirectsDisable;
  }

  // hsrp_use_bia - computed: false, optional: true, required: false
  private _hsrpUseBia?: boolean | cdktf.IResolvable; 
  public get hsrpUseBia() {
    return this.getBooleanAttribute('hsrp_use_bia');
  }
  public set hsrpUseBia(value: boolean | cdktf.IResolvable) {
    this._hsrpUseBia = value;
  }
  public resetHsrpUseBia() {
    this._hsrpUseBia = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hsrpUseBiaInput() {
    return this._hsrpUseBia;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      delete_mode: cdktf.stringToTerraform(this._deleteMode),
      device: cdktf.stringToTerraform(this._device),
      hsrp_bfd_minimum_interval: cdktf.numberToTerraform(this._hsrpBfdMinimumInterval),
      hsrp_bfd_multiplier: cdktf.numberToTerraform(this._hsrpBfdMultiplier),
      hsrp_delay_minimum: cdktf.numberToTerraform(this._hsrpDelayMinimum),
      hsrp_delay_reload: cdktf.numberToTerraform(this._hsrpDelayReload),
      hsrp_mac_refresh: cdktf.numberToTerraform(this._hsrpMacRefresh),
      hsrp_redirects_disable: cdktf.booleanToTerraform(this._hsrpRedirectsDisable),
      hsrp_use_bia: cdktf.booleanToTerraform(this._hsrpUseBia),
      interface_name: cdktf.stringToTerraform(this._interfaceName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      hsrp_bfd_minimum_interval: {
        value: cdktf.numberToHclTerraform(this._hsrpBfdMinimumInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      hsrp_bfd_multiplier: {
        value: cdktf.numberToHclTerraform(this._hsrpBfdMultiplier),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      hsrp_delay_minimum: {
        value: cdktf.numberToHclTerraform(this._hsrpDelayMinimum),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      hsrp_delay_reload: {
        value: cdktf.numberToHclTerraform(this._hsrpDelayReload),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      hsrp_mac_refresh: {
        value: cdktf.numberToHclTerraform(this._hsrpMacRefresh),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      hsrp_redirects_disable: {
        value: cdktf.booleanToHclTerraform(this._hsrpRedirectsDisable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      hsrp_use_bia: {
        value: cdktf.booleanToHclTerraform(this._hsrpUseBia),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      interface_name: {
        value: cdktf.stringToHclTerraform(this._interfaceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
