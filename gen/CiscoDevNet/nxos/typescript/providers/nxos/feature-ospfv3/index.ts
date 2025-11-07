// https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/feature_ospfv3
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FeatureOspfv3Config extends cdktf.TerraformMetaArguments {
  /**
  * Administrative state.
  *   - Choices: `enabled`, `disabled`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/feature_ospfv3#admin_state FeatureOspfv3#admin_state}
  */
  readonly adminState: string;
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/feature_ospfv3#device FeatureOspfv3#device}
  */
  readonly device?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/feature_ospfv3 nxos_feature_ospfv3}
*/
export class FeatureOspfv3 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nxos_feature_ospfv3";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FeatureOspfv3 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FeatureOspfv3 to import
  * @param importFromId The id of the existing FeatureOspfv3 that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/feature_ospfv3#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FeatureOspfv3 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nxos_feature_ospfv3", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/feature_ospfv3 nxos_feature_ospfv3} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FeatureOspfv3Config
  */
  public constructor(scope: Construct, id: string, config: FeatureOspfv3Config) {
    super(scope, id, {
      terraformResourceType: 'nxos_feature_ospfv3',
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
    this._adminState = config.adminState;
    this._device = config.device;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // admin_state - computed: false, optional: false, required: true
  private _adminState?: string; 
  public get adminState() {
    return this.getStringAttribute('admin_state');
  }
  public set adminState(value: string) {
    this._adminState = value;
  }
  // Temporarily expose input value. Use with caution.
  public get adminStateInput() {
    return this._adminState;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      admin_state: cdktf.stringToTerraform(this._adminState),
      device: cdktf.stringToTerraform(this._device),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      admin_state: {
        value: cdktf.stringToHclTerraform(this._adminState),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
