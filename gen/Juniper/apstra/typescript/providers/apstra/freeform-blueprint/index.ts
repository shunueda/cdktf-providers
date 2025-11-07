// https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/resources/freeform_blueprint
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FreeformBlueprintConfig extends cdktf.TerraformMetaArguments {
  /**
  * Blueprint name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/resources/freeform_blueprint#name FreeformBlueprint#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/resources/freeform_blueprint apstra_freeform_blueprint}
*/
export class FreeformBlueprint extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "apstra_freeform_blueprint";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FreeformBlueprint resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FreeformBlueprint to import
  * @param importFromId The id of the existing FreeformBlueprint that should be imported. Refer to the {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/resources/freeform_blueprint#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FreeformBlueprint to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "apstra_freeform_blueprint", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/resources/freeform_blueprint apstra_freeform_blueprint} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FreeformBlueprintConfig
  */
  public constructor(scope: Construct, id: string, config: FreeformBlueprintConfig) {
    super(scope, id, {
      terraformResourceType: 'apstra_freeform_blueprint',
      terraformGeneratorMetadata: {
        providerName: 'apstra',
        providerVersion: '0.95.0'
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
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
