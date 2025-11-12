// https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/data-sources/router_hsrp_interface
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataIosxrRouterHsrpInterfaceConfig extends cdktf.TerraformMetaArguments {
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/data-sources/router_hsrp_interface#device DataIosxrRouterHsrpInterface#device}
  */
  readonly device?: string;
  /**
  * HSRP interface configuration subcommands
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/data-sources/router_hsrp_interface#interface_name DataIosxrRouterHsrpInterface#interface_name}
  */
  readonly interfaceName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/data-sources/router_hsrp_interface iosxr_router_hsrp_interface}
*/
export class DataIosxrRouterHsrpInterface extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "iosxr_router_hsrp_interface";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataIosxrRouterHsrpInterface resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataIosxrRouterHsrpInterface to import
  * @param importFromId The id of the existing DataIosxrRouterHsrpInterface that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/data-sources/router_hsrp_interface#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataIosxrRouterHsrpInterface to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "iosxr_router_hsrp_interface", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/data-sources/router_hsrp_interface iosxr_router_hsrp_interface} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataIosxrRouterHsrpInterfaceConfig
  */
  public constructor(scope: Construct, id: string, config: DataIosxrRouterHsrpInterfaceConfig) {
    super(scope, id, {
      terraformResourceType: 'iosxr_router_hsrp_interface',
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
    this._device = config.device;
    this._interfaceName = config.interfaceName;
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

  // hsrp_bfd_minimum_interval - computed: true, optional: false, required: false
  public get hsrpBfdMinimumInterval() {
    return this.getNumberAttribute('hsrp_bfd_minimum_interval');
  }

  // hsrp_bfd_multiplier - computed: true, optional: false, required: false
  public get hsrpBfdMultiplier() {
    return this.getNumberAttribute('hsrp_bfd_multiplier');
  }

  // hsrp_delay_minimum - computed: true, optional: false, required: false
  public get hsrpDelayMinimum() {
    return this.getNumberAttribute('hsrp_delay_minimum');
  }

  // hsrp_delay_reload - computed: true, optional: false, required: false
  public get hsrpDelayReload() {
    return this.getNumberAttribute('hsrp_delay_reload');
  }

  // hsrp_mac_refresh - computed: true, optional: false, required: false
  public get hsrpMacRefresh() {
    return this.getNumberAttribute('hsrp_mac_refresh');
  }

  // hsrp_redirects_disable - computed: true, optional: false, required: false
  public get hsrpRedirectsDisable() {
    return this.getBooleanAttribute('hsrp_redirects_disable');
  }

  // hsrp_use_bia - computed: true, optional: false, required: false
  public get hsrpUseBia() {
    return this.getBooleanAttribute('hsrp_use_bia');
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
      device: cdktf.stringToTerraform(this._device),
      interface_name: cdktf.stringToTerraform(this._interfaceName),
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
