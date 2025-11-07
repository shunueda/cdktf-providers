// https://registry.terraform.io/providers/symopsio/sym/3.6.0/docs/resources/target
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TargetConfig extends cdktf.TerraformMetaArguments {
  /**
  * Settings whose values will be dynamically populated by submitted request values. See [docs](https://docs.symops.com/docs/dynamic-target-settings) for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/symopsio/sym/3.6.0/docs/resources/target#field_bindings Target#field_bindings}
  */
  readonly fieldBindings?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/symopsio/sym/3.6.0/docs/resources/target#id Target#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * An optional label for this Target.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/symopsio/sym/3.6.0/docs/resources/target#label Target#label}
  */
  readonly label?: string;
  /**
  * A unique identifier for the Target.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/symopsio/sym/3.6.0/docs/resources/target#name Target#name}
  */
  readonly name: string;
  /**
  * Map of settings specific to this type of Target.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/symopsio/sym/3.6.0/docs/resources/target#settings Target#settings}
  */
  readonly settings?: { [key: string]: string };
  /**
  * The type of the Target.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/symopsio/sym/3.6.0/docs/resources/target#type Target#type}
  */
  readonly type: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/symopsio/sym/3.6.0/docs/resources/target sym_target}
*/
export class Target extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sym_target";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Target resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Target to import
  * @param importFromId The id of the existing Target that should be imported. Refer to the {@link https://registry.terraform.io/providers/symopsio/sym/3.6.0/docs/resources/target#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Target to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sym_target", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/symopsio/sym/3.6.0/docs/resources/target sym_target} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TargetConfig
  */
  public constructor(scope: Construct, id: string, config: TargetConfig) {
    super(scope, id, {
      terraformResourceType: 'sym_target',
      terraformGeneratorMetadata: {
        providerName: 'sym',
        providerVersion: '3.6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._fieldBindings = config.fieldBindings;
    this._id = config.id;
    this._label = config.label;
    this._name = config.name;
    this._settings = config.settings;
    this._type = config.type;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // field_bindings - computed: false, optional: true, required: false
  private _fieldBindings?: string[]; 
  public get fieldBindings() {
    return this.getListAttribute('field_bindings');
  }
  public set fieldBindings(value: string[]) {
    this._fieldBindings = value;
  }
  public resetFieldBindings() {
    this._fieldBindings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldBindingsInput() {
    return this._fieldBindings;
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

  // label - computed: false, optional: true, required: false
  private _label?: string; 
  public get label() {
    return this.getStringAttribute('label');
  }
  public set label(value: string) {
    this._label = value;
  }
  public resetLabel() {
    this._label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label;
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

  // settings - computed: false, optional: true, required: false
  private _settings?: { [key: string]: string }; 
  public get settings() {
    return this.getStringMapAttribute('settings');
  }
  public set settings(value: { [key: string]: string }) {
    this._settings = value;
  }
  public resetSettings() {
    this._settings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get settingsInput() {
    return this._settings;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      field_bindings: cdktf.listMapper(cdktf.stringToTerraform, false)(this._fieldBindings),
      id: cdktf.stringToTerraform(this._id),
      label: cdktf.stringToTerraform(this._label),
      name: cdktf.stringToTerraform(this._name),
      settings: cdktf.hashMapper(cdktf.stringToTerraform)(this._settings),
      type: cdktf.stringToTerraform(this._type),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      field_bindings: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._fieldBindings),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      label: {
        value: cdktf.stringToHclTerraform(this._label),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      settings: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._settings),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
