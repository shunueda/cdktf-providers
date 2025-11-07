// https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/data-sources/route_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataIosxrRoutePolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/data-sources/route_policy#device DataIosxrRoutePolicy#device}
  */
  readonly device?: string;
  /**
  * Route policy name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/data-sources/route_policy#route_policy_name DataIosxrRoutePolicy#route_policy_name}
  */
  readonly routePolicyName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/data-sources/route_policy iosxr_route_policy}
*/
export class DataIosxrRoutePolicy extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "iosxr_route_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataIosxrRoutePolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataIosxrRoutePolicy to import
  * @param importFromId The id of the existing DataIosxrRoutePolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/data-sources/route_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataIosxrRoutePolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "iosxr_route_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/data-sources/route_policy iosxr_route_policy} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataIosxrRoutePolicyConfig
  */
  public constructor(scope: Construct, id: string, config: DataIosxrRoutePolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'iosxr_route_policy',
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
    this._device = config.device;
    this._routePolicyName = config.routePolicyName;
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // route_policy_name - computed: false, optional: false, required: true
  private _routePolicyName?: string; 
  public get routePolicyName() {
    return this.getStringAttribute('route_policy_name');
  }
  public set routePolicyName(value: string) {
    this._routePolicyName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get routePolicyNameInput() {
    return this._routePolicyName;
  }

  // rpl - computed: true, optional: false, required: false
  public get rpl() {
    return this.getStringAttribute('rpl');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      device: cdktf.stringToTerraform(this._device),
      route_policy_name: cdktf.stringToTerraform(this._routePolicyName),
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
      route_policy_name: {
        value: cdktf.stringToHclTerraform(this._routePolicyName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
