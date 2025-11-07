// https://registry.terraform.io/providers/ferlab-ste-justine/patroni/0.1.1/docs/resources/reinitialize
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ReinitializeConfig extends cdktf.TerraformMetaArguments {
  /**
  * Name of node to reinitialize
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ferlab-ste-justine/patroni/0.1.1/docs/resources/reinitialize#name Reinitialize#name}
  */
  readonly name: string;
  /**
  * Whether to perform the reinitialization only once when the resources is created. Otherwise, it will be done every time the resource is read
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ferlab-ste-justine/patroni/0.1.1/docs/resources/reinitialize#once Reinitialize#once}
  */
  readonly once?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ferlab-ste-justine/patroni/0.1.1/docs/resources/reinitialize patroni_reinitialize}
*/
export class Reinitialize extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "patroni_reinitialize";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Reinitialize resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Reinitialize to import
  * @param importFromId The id of the existing Reinitialize that should be imported. Refer to the {@link https://registry.terraform.io/providers/ferlab-ste-justine/patroni/0.1.1/docs/resources/reinitialize#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Reinitialize to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "patroni_reinitialize", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ferlab-ste-justine/patroni/0.1.1/docs/resources/reinitialize patroni_reinitialize} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ReinitializeConfig
  */
  public constructor(scope: Construct, id: string, config: ReinitializeConfig) {
    super(scope, id, {
      terraformResourceType: 'patroni_reinitialize',
      terraformGeneratorMetadata: {
        providerName: 'patroni',
        providerVersion: '0.1.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._name = config.name;
    this._once = config.once;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // once - computed: true, optional: true, required: false
  private _once?: boolean | cdktf.IResolvable; 
  public get once() {
    return this.getBooleanAttribute('once');
  }
  public set once(value: boolean | cdktf.IResolvable) {
    this._once = value;
  }
  public resetOnce() {
    this._once = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onceInput() {
    return this._once;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
      once: cdktf.booleanToTerraform(this._once),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      once: {
        value: cdktf.booleanToHclTerraform(this._once),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
