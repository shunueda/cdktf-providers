// https://registry.terraform.io/providers/siderolabs/talos/0.9.0/docs/resources/image_factory_schematic
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ImageFactorySchematicConfig extends cdktf.TerraformMetaArguments {
  /**
  * 
  * The schematic yaml respresentation to generate the image.
  * 
  * If not set, a vanilla Talos image schematic will be generated.
  * 
  * > Refer to [image-factory](https://github.com/siderolabs/image-factory?tab=readme-ov-file#post-schematics) for the schema.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/siderolabs/talos/0.9.0/docs/resources/image_factory_schematic#schematic ImageFactorySchematic#schematic}
  */
  readonly schematic?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/siderolabs/talos/0.9.0/docs/resources/image_factory_schematic talos_image_factory_schematic}
*/
export class ImageFactorySchematic extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "talos_image_factory_schematic";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ImageFactorySchematic resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ImageFactorySchematic to import
  * @param importFromId The id of the existing ImageFactorySchematic that should be imported. Refer to the {@link https://registry.terraform.io/providers/siderolabs/talos/0.9.0/docs/resources/image_factory_schematic#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ImageFactorySchematic to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "talos_image_factory_schematic", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/siderolabs/talos/0.9.0/docs/resources/image_factory_schematic talos_image_factory_schematic} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ImageFactorySchematicConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ImageFactorySchematicConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'talos_image_factory_schematic',
      terraformGeneratorMetadata: {
        providerName: 'talos',
        providerVersion: '0.9.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._schematic = config.schematic;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // schematic - computed: false, optional: true, required: false
  private _schematic?: string; 
  public get schematic() {
    return this.getStringAttribute('schematic');
  }
  public set schematic(value: string) {
    this._schematic = value;
  }
  public resetSchematic() {
    this._schematic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schematicInput() {
    return this._schematic;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      schematic: cdktf.stringToTerraform(this._schematic),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      schematic: {
        value: cdktf.stringToHclTerraform(this._schematic),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
