// https://registry.terraform.io/providers/reinoudk/toggles/0.3.0/docs/resources/leapfrog
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LeapfrogConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/reinoudk/toggles/0.3.0/docs/resources/leapfrog#id Leapfrog#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * An arbitrary string value that, when changed, toggles the output.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/reinoudk/toggles/0.3.0/docs/resources/leapfrog#trigger Leapfrog#trigger}
  */
  readonly trigger?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/reinoudk/toggles/0.3.0/docs/resources/leapfrog toggles_leapfrog}
*/
export class Leapfrog extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "toggles_leapfrog";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Leapfrog resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Leapfrog to import
  * @param importFromId The id of the existing Leapfrog that should be imported. Refer to the {@link https://registry.terraform.io/providers/reinoudk/toggles/0.3.0/docs/resources/leapfrog#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Leapfrog to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "toggles_leapfrog", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/reinoudk/toggles/0.3.0/docs/resources/leapfrog toggles_leapfrog} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LeapfrogConfig = {}
  */
  public constructor(scope: Construct, id: string, config: LeapfrogConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'toggles_leapfrog',
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
    this._trigger = config.trigger;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alpha - computed: true, optional: false, required: false
  public get alpha() {
    return this.getBooleanAttribute('alpha');
  }

  // alpha_timestamp - computed: true, optional: false, required: false
  public get alphaTimestamp() {
    return this.getStringAttribute('alpha_timestamp');
  }

  // beta - computed: true, optional: false, required: false
  public get beta() {
    return this.getBooleanAttribute('beta');
  }

  // beta_timestamp - computed: true, optional: false, required: false
  public get betaTimestamp() {
    return this.getStringAttribute('beta_timestamp');
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
