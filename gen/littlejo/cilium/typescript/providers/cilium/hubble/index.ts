// https://registry.terraform.io/providers/littlejo/cilium/0.3.2/docs/resources/hubble
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface HubbleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Deploy Hubble Relay (Default: `true`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/littlejo/cilium/0.3.2/docs/resources/hubble#relay Hubble#relay}
  */
  readonly relay?: boolean | cdktf.IResolvable;
  /**
  * Enable Hubble UI (Default: `false`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/littlejo/cilium/0.3.2/docs/resources/hubble#ui Hubble#ui}
  */
  readonly ui?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/littlejo/cilium/0.3.2/docs/resources/hubble cilium_hubble}
*/
export class Hubble extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cilium_hubble";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Hubble resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Hubble to import
  * @param importFromId The id of the existing Hubble that should be imported. Refer to the {@link https://registry.terraform.io/providers/littlejo/cilium/0.3.2/docs/resources/hubble#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Hubble to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cilium_hubble", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/littlejo/cilium/0.3.2/docs/resources/hubble cilium_hubble} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options HubbleConfig = {}
  */
  public constructor(scope: Construct, id: string, config: HubbleConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'cilium_hubble',
      terraformGeneratorMetadata: {
        providerName: 'cilium',
        providerVersion: '0.3.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._relay = config.relay;
    this._ui = config.ui;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // relay - computed: true, optional: true, required: false
  private _relay?: boolean | cdktf.IResolvable; 
  public get relay() {
    return this.getBooleanAttribute('relay');
  }
  public set relay(value: boolean | cdktf.IResolvable) {
    this._relay = value;
  }
  public resetRelay() {
    this._relay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relayInput() {
    return this._relay;
  }

  // ui - computed: true, optional: true, required: false
  private _ui?: boolean | cdktf.IResolvable; 
  public get ui() {
    return this.getBooleanAttribute('ui');
  }
  public set ui(value: boolean | cdktf.IResolvable) {
    this._ui = value;
  }
  public resetUi() {
    this._ui = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uiInput() {
    return this._ui;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      relay: cdktf.booleanToTerraform(this._relay),
      ui: cdktf.booleanToTerraform(this._ui),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      relay: {
        value: cdktf.booleanToHclTerraform(this._relay),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ui: {
        value: cdktf.booleanToHclTerraform(this._ui),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
