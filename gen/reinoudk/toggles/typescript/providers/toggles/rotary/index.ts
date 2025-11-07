// https://registry.terraform.io/providers/reinoudk/toggles/0.3.0/docs/resources/rotary
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RotaryConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/reinoudk/toggles/0.3.0/docs/resources/rotary#id Rotary#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The number of outputs. Should be between 2 and 256
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/reinoudk/toggles/0.3.0/docs/resources/rotary#n Rotary#n}
  */
  readonly n?: number;
  /**
  * An arbitrary string value that, when changed, toggles the output.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/reinoudk/toggles/0.3.0/docs/resources/rotary#trigger Rotary#trigger}
  */
  readonly trigger?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/reinoudk/toggles/0.3.0/docs/resources/rotary toggles_rotary}
*/
export class Rotary extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "toggles_rotary";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Rotary resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Rotary to import
  * @param importFromId The id of the existing Rotary that should be imported. Refer to the {@link https://registry.terraform.io/providers/reinoudk/toggles/0.3.0/docs/resources/rotary#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Rotary to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "toggles_rotary", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/reinoudk/toggles/0.3.0/docs/resources/rotary toggles_rotary} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RotaryConfig = {}
  */
  public constructor(scope: Construct, id: string, config: RotaryConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'toggles_rotary',
      terraformGeneratorMetadata: {
        providerName: 'toggles',
        providerVersion: '0.3.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._n = config.n;
    this._trigger = config.trigger;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // active_output - computed: true, optional: false, required: false
  public get activeOutput() {
    return this.getNumberAttribute('active_output');
  }

  // counters - computed: true, optional: false, required: false
  public get counters() {
    return this.getNumberListAttribute('counters');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // n - computed: false, optional: true, required: false
  private _n?: number; 
  public get n() {
    return this.getNumberAttribute('n');
  }
  public set n(value: number) {
    this._n = value;
  }
  public resetN() {
    this._n = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nInput() {
    return this._n;
  }

  // outputs - computed: true, optional: false, required: false
  private _outputs = new cdktf.BooleanList(this, "outputs", false);
  public get outputs() {
    return this._outputs;
  }

  // trigger - computed: false, optional: true, required: false
  private _trigger?: string; 
  public get trigger() {
    return this.getStringAttribute('trigger');
  }
  public set trigger(value: string) {
    this._trigger = value;
  }
  public resetTrigger() {
    this._trigger = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get triggerInput() {
    return this._trigger;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      n: cdktf.numberToTerraform(this._n),
      trigger: cdktf.stringToTerraform(this._trigger),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      n: {
        value: cdktf.numberToHclTerraform(this._n),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      trigger: {
        value: cdktf.stringToHclTerraform(this._trigger),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
