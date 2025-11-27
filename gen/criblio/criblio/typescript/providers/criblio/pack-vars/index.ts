// https://registry.terraform.io/providers/criblio/criblio/1.20.33/docs/resources/pack_vars
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PackVarsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Brief description of this variable. Optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.33/docs/resources/pack_vars#description PackVars#description}
  */
  readonly description?: string;
  /**
  * The consumer group to which this instance belongs. Defaults to 'Cribl'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.33/docs/resources/pack_vars#group_id PackVars#group_id}
  */
  readonly groupId: string;
  /**
  * Global variable name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.33/docs/resources/pack_vars#id PackVars#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.33/docs/resources/pack_vars#lib PackVars#lib}
  */
  readonly lib?: string;
  /**
  * pack ID to POST
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.33/docs/resources/pack_vars#pack PackVars#pack}
  */
  readonly pack: string;
  /**
  * One or more tags related to this variable. Optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.33/docs/resources/pack_vars#tags PackVars#tags}
  */
  readonly tags?: string;
  /**
  * Type of variable. Default: "any"; must be one of ["string", "number", "encryptedString", "boolean", "array", "object", "expression", "any"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.33/docs/resources/pack_vars#type PackVars#type}
  */
  readonly type?: string;
  /**
  * Value of variable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.33/docs/resources/pack_vars#value PackVars#value}
  */
  readonly value?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/criblio/criblio/1.20.33/docs/resources/pack_vars criblio_pack_vars}
*/
export class PackVars extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "criblio_pack_vars";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PackVars resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PackVars to import
  * @param importFromId The id of the existing PackVars that should be imported. Refer to the {@link https://registry.terraform.io/providers/criblio/criblio/1.20.33/docs/resources/pack_vars#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PackVars to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "criblio_pack_vars", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/criblio/criblio/1.20.33/docs/resources/pack_vars criblio_pack_vars} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PackVarsConfig
  */
  public constructor(scope: Construct, id: string, config: PackVarsConfig) {
    super(scope, id, {
      terraformResourceType: 'criblio_pack_vars',
      terraformGeneratorMetadata: {
        providerName: 'criblio',
        providerVersion: '1.20.33',
        providerVersionConstraint: '1.20.33'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._groupId = config.groupId;
    this._id = config.id;
    this._lib = config.lib;
    this._pack = config.pack;
    this._tags = config.tags;
    this._type = config.type;
    this._value = config.value;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // group_id - computed: false, optional: false, required: true
  private _groupId?: string; 
  public get groupId() {
    return this.getStringAttribute('group_id');
  }
  public set groupId(value: string) {
    this._groupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIdInput() {
    return this._groupId;
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // items - computed: true, optional: false, required: false
  private _items = new cdktf.StringMapList(this, "items", false);
  public get items() {
    return this._items;
  }

  // lib - computed: false, optional: true, required: false
  private _lib?: string; 
  public get lib() {
    return this.getStringAttribute('lib');
  }
  public set lib(value: string) {
    this._lib = value;
  }
  public resetLib() {
    this._lib = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get libInput() {
    return this._lib;
  }

  // pack - computed: false, optional: false, required: true
  private _pack?: string; 
  public get pack() {
    return this.getStringAttribute('pack');
  }
  public set pack(value: string) {
    this._pack = value;
  }
  // Temporarily expose input value. Use with caution.
  public get packInput() {
    return this._pack;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string; 
  public get tags() {
    return this.getStringAttribute('tags');
  }
  public set tags(value: string) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      group_id: cdktf.stringToTerraform(this._groupId),
      id: cdktf.stringToTerraform(this._id),
      lib: cdktf.stringToTerraform(this._lib),
      pack: cdktf.stringToTerraform(this._pack),
      tags: cdktf.stringToTerraform(this._tags),
      type: cdktf.stringToTerraform(this._type),
      value: cdktf.stringToTerraform(this._value),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      group_id: {
        value: cdktf.stringToHclTerraform(this._groupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      lib: {
        value: cdktf.stringToHclTerraform(this._lib),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pack: {
        value: cdktf.stringToHclTerraform(this._pack),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.stringToHclTerraform(this._tags),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      value: {
        value: cdktf.stringToHclTerraform(this._value),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
